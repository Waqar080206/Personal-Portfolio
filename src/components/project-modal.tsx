"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, Play, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EXTENDED_PROJECTS } from "@/data/extended-projects";

interface ProjectModalProps {
  project: {
    title: string;
    href: string;
    dates: string;
    active: boolean;
    description: string;
    technologies: string[];
    links: Array<{
      type: string;
      href: string;
      icon: React.ReactNode;
    }>;
    image: string;
    video?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setShowVideo(false);
    }
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  const extendedData = EXTENDED_PROJECTS[project.title as keyof typeof EXTENDED_PROJECTS];
  const images = extendedData?.images || [project.image];
  const videos = extendedData?.videos || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-background border border-border rounded-lg shadow-lg max-w-7xl w-[95vw] h-[95vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 pb-0 flex flex-row items-center justify-between border-b">
          <div className="flex flex-col space-y-2 flex-1">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <div className="flex items-center gap-2">
              {project.active && (
                <Badge variant="secondary" className="text-xs">
                  Active
                </Badge>
              )}
              {project.dates && (
                <span className="text-sm text-muted-foreground">{project.dates}</span>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Media Gallery */}
          <div className="space-y-4">
            {/* Main Image/Video Display */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
              {showVideo && videos.length > 0 ? (
                <iframe
                  src={videos[0].url.replace('watch?v=', 'embed/')}
                  title={videos[0].title}
                  className="w-full h-full"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                  {images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Media Controls */}
            <div className="flex items-center justify-between">
              {/* Image Thumbnails */}
              <div className="flex gap-2 overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setShowVideo(false);
                    }}
                    className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-colors ${
                      currentImageIndex === index && !showVideo
                        ? 'border-primary'
                        : 'border-transparent hover:border-muted-foreground'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      width={64}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
                
                {/* Video Thumbnails */}
                {videos.map((video, index) => (
                  <button
                    key={`video-${index}`}
                    onClick={() => setShowVideo(true)}
                    className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-colors relative ${
                      showVideo
                        ? 'border-primary'
                        : 'border-transparent hover:border-muted-foreground'
                    }`}
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={64}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                    <Play className="absolute inset-0 m-auto h-4 w-4 text-white" />
                  </button>
                ))}
              </div>

              {/* Media Counter */}
              <span className="text-sm text-muted-foreground">
                {showVideo ? 'Video' : `${currentImageIndex + 1} / ${images.length}`}
              </span>
            </div>
          </div>

          {/* Project Overview */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {extendedData?.overview || project.description}
            </p>
          </div>

          {/* Inspiration Section - Only for EchoME X */}
          {extendedData && 'inspiration' in extendedData && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Inspiration</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                {extendedData.inspiration}
              </p>
            </div>
          )}

          {/* Build Process - Only for EchoME X */}
          {extendedData && 'buildProcess' in extendedData && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">How I Built It</h3>
              <div className="space-y-3">
                {Object.entries(extendedData.buildProcess as Record<string, string>).map(([key, value]) => (
                  <div key={key} className="flex flex-col space-y-1 p-3 rounded-lg bg-muted/30">
                    <span className="text-sm font-medium">{key}</span>
                    <span className="text-xs text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Accomplishments - Only for EchoME X */}
          {extendedData && 'accomplishments' in extendedData && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Accomplishments I'm Proud Of</h3>
              <ul className="space-y-2">
                {(extendedData.accomplishments as string[]).map((accomplishment: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    {accomplishment}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* What I Learned - Only for EchoME X */}
          {extendedData && 'whatILearned' in extendedData && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">What I Learned</h3>
              <ul className="space-y-2">
                {(extendedData.whatILearned as string[]).map((learning: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Built With - Only for EchoME X */}
          {extendedData && 'builtWith' in extendedData && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Built With</h3>
              <div className="flex flex-wrap gap-2">
                {(extendedData.builtWith as string[]).map((tech: string) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Final Note - Only for EchoME X */}
          {extendedData && 'finalNote' in extendedData && (
            <div className="space-y-4 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-800">
              <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200">Final Note</h3>
              <p className="text-muted-foreground leading-relaxed font-medium italic">
                {extendedData.finalNote}
              </p>
            </div>
          )}
        
        {/* Key Insights - Only for Restaurant Analytics */}
        {extendedData && 'keyInsights' in extendedData && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Key Business Insights</h3>
            <ul className="space-y-2">
              {(extendedData.keyInsights as string[]).map((insight: string, index: number) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  {insight}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* ML Model Info - Only for Restaurant Analytics */}
        {extendedData && 'mlModel' in extendedData && (
          <div className="space-y-4 p-4 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800">
            <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200">Machine Learning Model</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(extendedData.mlModel as Record<string, string>).map(([key, value]) => (
                <div key={key} className="flex flex-col space-y-1">
                  <span className="text-sm font-medium text-orange-700 dark:text-orange-300">{key}</span>
                  <span className="text-xs text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Collaborators - Only for Restaurant Analytics */}
        {extendedData && 'collaborators' in extendedData && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Team Collaboration</h3>
            <p className="text-muted-foreground leading-relaxed italic">
              {extendedData.collaborators}
            </p>
          </div>
        )}
    
        
        {/* How It Works - Only for PrepPal */}
        {extendedData && 'howItWorks' in extendedData && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">How It Works</h3>
            <ol className="space-y-2">
              {(extendedData.howItWorks as string[]).map((step: string, index: number) => (
                <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium mt-0.5">
                    {index + 1}
                  </div>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}
        
        {/* Page Overview - Only for PrepPal */}
        {extendedData && 'pageOverview' in extendedData && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">App Structure</h3>
            <ul className="space-y-2">
              {(extendedData.pageOverview as string[]).map((page: string, index: number) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  {page}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* AI Integration Info - Only for PrepPal */}
        {extendedData && 'aiIntegration' in extendedData && (
          <div className="space-y-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">AI Integration</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {extendedData.aiIntegration}
            </p>
          </div>
        )}

        {/* Project URL - For Azinhack */}
        {extendedData && 'projectUrl' in extendedData && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Live Project</h3>
            <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
              <Link 
                href={extendedData.projectUrl as string}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-800 dark:text-green-200 font-medium hover:underline"
              >
                🌐 Visit {extendedData.projectUrl}
              </Link>
            </div>
          </div>
        )}

        {/* Collaboration Type - For team projects */}
        {extendedData && 'collaborationType' in extendedData && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Collaboration</h3>
            <p className="text-muted-foreground leading-relaxed italic">
              {extendedData.collaborationType}
            </p>
          </div>
        )}

        {/* Open Source Info - For UniONE */}
        {extendedData && 'openSource' in extendedData && (
          <div className="space-y-4 p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800">
            <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200">Open Source Project</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {extendedData.openSource}
            </p>
          </div>
        )}

        {/* Scalability Info - For UniONE */}
        {extendedData && 'scalability' in extendedData && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Scalability & Performance</h3>
            <p className="text-muted-foreground leading-relaxed">
              {extendedData.scalability}
            </p>
          </div>
        )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Key Features</h3>
              <div className="space-y-3">
                {extendedData?.keyFeatures.map((feature, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/50 space-y-2">
                    <h4 className="font-medium text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Technical Implementation</h3>
              <div className="space-y-3">
                {extendedData?.technicalDetails && Object.entries(extendedData.technicalDetails).map(([key, value]) => (
                  <div key={key} className="flex flex-col space-y-1 p-3 rounded-lg bg-muted/30">
                    <span className="text-sm font-medium">{key}</span>
                    <span className="text-xs text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Challenges & Future Enhancements */}
          {extendedData && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Challenges Overcome</h3>
                <ul className="space-y-2">
                  {extendedData.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Future Enhancements</h3>
                <ul className="space-y-2">
                  {extendedData.futureEnhancements.map((enhancement, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      {enhancement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Project Links */}
          <div className="space-y-4 pb-6">
            <h3 className="text-lg font-semibold">Project Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {project.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 p-3 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                >
                  {link.icon}
                  <span className="text-sm font-medium">{link.type}</span>
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}