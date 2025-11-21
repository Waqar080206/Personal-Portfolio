"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import BlurFade from "@/components/magicui/blur-fade"; // Default import instead of named import
import Link from "next/link";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container max-w-6xl mx-auto py-12 px-4 space-y-12">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out my latest work
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl/relaxed">
              A comprehensive collection of my projects spanning AI applications, full-stack web development, 
              IoT solutions, and hackathon winners. Each project demonstrates different technical skills and 
              problem-solving approaches.
            </p>
          </div>
        </div>
      </BlurFade>

      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <span className="text-sm text-muted-foreground">
            {DATA.projects.length} projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 2 + id * 0.05}
            >
              <ProjectCard
                href="#"
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video || ""}
                links={project.links}
                onClick={() => openModal(project)}
              />
            </BlurFade>
          ))}
        </div>
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Let&apos;s work together
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              I&apos;m always open to discussing new projects and opportunities.
            </p>
          </div>
          <Link
            href="mailto:syed.waqar.akhtar08@gmail.com"
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 text-sm font-medium transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </BlurFade>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}