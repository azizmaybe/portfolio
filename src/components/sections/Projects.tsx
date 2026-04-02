"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-24 lg:py-32 relative">
      <div className="container">
        <SectionHeader title="FEATURED PROJECTS" label="04 : Portfolio" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project as Project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
