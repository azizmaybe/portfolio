"use client";


import { motion } from "framer-motion";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-[#1A1A1A] overflow-hidden border-b-4 border-[#E8002D] shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex flex-col h-full rounded-2xl"
    >
      <div className="h-[200px] bg-[#222222] flex items-center justify-center overflow-hidden relative">
        <div className="text-[#E8002D] text-[3rem] font-black opacity-[0.05]">
          {project.title.charAt(0)}
        </div>
        {/* Real image would go here */}
        <div className="absolute bottom-4 right-4 bg-[#E8002D] text-white px-3 py-1 text-[0.7rem] font-mono -skew-x-[15deg]">
          PRODUCTION READY
        </div>
      </div>

      <div className="p-8 flex-grow flex flex-col">
        <h3 className="text-[1.25rem] mb-3">{project.title}</h3>
        <p className="text-[#C8C8C8] text-[0.9rem] leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techTags.map(tag => (
            <span 
              key={tag}
              className="text-[0.7rem] font-mono bg-white/5 px-1.5 py-0.5 text-[#C8C8C8]"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[0.8rem] font-bold text-[#E8002D]"
            >
              SECURE LINK →
            </a>
          )}
          {project.repoUrl && (
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[0.8rem] font-bold text-[#888888]"
            >
              SOURCE CODE
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
