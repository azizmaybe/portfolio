"use client";

import { motion } from "framer-motion";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Gradient backgrounds keyed by index for visual variety
const CARD_GRADIENTS = [
  "from-[#1a0a0a] via-[#2a0f0f] to-[#1a0a0a]",
  "from-[#0a0a1a] via-[#0f0f2a] to-[#0a0a1a]",
  "from-[#0a1a0a] via-[#0f2a0f] to-[#0a1a0a]",
  "from-[#1a1a0a] via-[#2a2a0f] to-[#1a1a0a]",
];

const ACCENT_ICONS: Record<string, string> = {
  Flutter: "⚡",
  React: "⚛",
  Firebase: "🔥",
  Go: "⚙",
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length];
  const primaryTag = project.techTags[0];
  const accentIcon = ACCENT_ICONS[primaryTag] ?? "▶";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-[#1A1A1A] overflow-hidden border-b-4 border-[#E8002D] shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex flex-col h-full rounded-2xl group"
    >
      {/* Project visual header */}
      <div className={`h-[180px] bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden relative border-b border-white/5`}>
        {/* Large decorative letter */}
        <span className="text-[7rem] font-black leading-none select-none"
          style={{ color: "rgba(232,0,45,0.06)" }}>
          {project.title.charAt(0)}
        </span>

        {/* Tech accent icon */}
        <span className="absolute text-[2.5rem] opacity-20 bottom-4 left-6 select-none">
          {accentIcon}
        </span>

        {/* Tag line */}
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
          {project.techTags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="bg-[#E8002D]/90 text-white text-[0.65rem] font-mono font-bold px-2.5 py-1 -skew-x-[8deg] uppercase tracking-wide"
            >
              <span className="skew-x-[8deg] inline-block">{tag}</span>
            </span>
          ))}
        </div>

        {/* Status badge */}
        <div className="absolute bottom-4 right-4 bg-black/60 border border-[#E8002D]/40 text-[#E8002D] px-3 py-1 text-[0.65rem] font-mono -skew-x-[8deg]">
          <span className="skew-x-[8deg] inline-block">WORK IN PROGRESS</span>
        </div>

        {/* Hover shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      </div>

      <div className="p-6 md:p-8 flex-grow flex flex-col">
        <h3 className="text-[1.25rem] mb-3">{project.title}</h3>
        <p className="text-[#C8C8C8] text-[0.9rem] leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* All tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="text-[0.7rem] font-mono bg-white/5 border border-white/10 px-2.5 py-1 text-[#C8C8C8] rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex gap-6 items-center">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.8rem] font-black text-[#E8002D] hover:text-white transition-colors flex items-center gap-1.5 group/link"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8002D] group-hover/link:bg-white transition-colors" />
              MORE INFORMATION →
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.8rem] font-bold text-[#888888] hover:text-white transition-colors"
            >
              SOURCE CODE
            </a>
          )}
          {!project.liveUrl && !project.repoUrl && (
            <span className="text-[0.75rem] font-mono text-[#555] uppercase tracking-widest">
              Private Repository
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
