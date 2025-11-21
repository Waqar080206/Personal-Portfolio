"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { HackathonCard } from "@/components/hackathon-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-12">
      {/* Hero Section */}
      <section className="pt-8">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-foreground text-background px-4 py-2 text-sm font-medium">
                All Projects
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                My Work & Projects
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl/relaxed">
                A comprehensive collection of my projects spanning AI applications, full-stack web development, 
                IoT solutions, and hackathon winners. Each project demonstrates different technical skills and 
                problem-solving approaches.
              </p>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Featured Projects Section */}
      <section className="pb-8">
        <div className="space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Featured Projects</h2>
              <span className="text-sm text-muted-foreground">
                {DATA.projects.length} projects
              </span>
            </div>
          </BlurFade>
          
          {/* Consistent 2x2 Grid for Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 3 + id * 0.1}
              >
                <div 
                  onClick={() => handleProjectClick(project)}
                  className="cursor-pointer h-full"
                >
                  <div className="h-full min-h-[400px]">
                    <ProjectCard
                      href={project.href}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                    />
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathon Projects Section */}
      <section className="pb-8">
        <div className="space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Hackathon Projects</h2>
              <span className="text-sm text-muted-foreground">
                {DATA.hackathons.length} hackathons
              </span>
            </div>
          </BlurFade>
          
          {/* Consistent Grid for Hackathons */}
          <div className="grid grid-cols md:grid-cols  gap-6 max-w-5xl mx-auto">
            {DATA.hackathons.map((hackathon, id) => (
              <BlurFade
                key={hackathon.title}
                delay={BLUR_FADE_DELAY * 5 + id * 0.1}
              >
                <div className="h-full min-h-[300px]">
                  <HackathonCard
                    title={hackathon.title}
                    description={hackathon.description}
                    location={hackathon.location}
                    dates={hackathon.dates}
                    image={hackathon.image}
                    links={hackathon.links}
                  />
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="pb-8">
        <div className="space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Technologies & Skills</h2>
              <p className="text-muted-foreground mb-6">
                Technologies I've worked with across my projects
              </p>
            </div>
          </BlurFade>
          
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
              {DATA.skills.map((skill, id) => (
                <div
                  key={skill}
                  className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md"
                >
                  {skill}
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-12">
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Interested in Collaboration?</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                I&apos;m always open to discussing new projects and opportunities.
              </p>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 text-sm font-medium transition-colors duration-200"
              >
                Get In Touch
              </Link>
              <Link
                href="/Waqar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 text-sm font-medium transition-colors duration-200"
              >
                View Resume
              </Link>
              <Link
                href={DATA.contact.social.GitHub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 text-sm font-medium transition-colors duration-200"
              >
                View GitHub
              </Link>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </main>
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig