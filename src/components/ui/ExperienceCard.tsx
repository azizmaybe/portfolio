"use client";

import { motion } from "framer-motion";
import { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="border border-[#222] bg-[#111] rounded-2xl p-6 lg:p-8 relative"
    >
      {/* Watermark */}
      <div className="absolute top-4 right-4 font-['JetBrains_Mono',_monospace] text-[#E8002D] text-5xl font-black opacity-[0.03] leading-none select-none">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Mobile timeline dot */}
      <div className="lg:hidden absolute -left-[2.35rem] top-8 w-3 h-3 rounded-full bg-[#E8002D] shadow-[0_0_8px_rgba(232,0,45,0.6)]" />

      <div className="mb-6">
        <h3 className="text-xl lg:text-2xl mb-1">{experience.role}</h3>
        <p className="text-[#E8002D] font-bold uppercase text-sm lg:text-base">
          {experience.company}
        </p>
        <span className="font-['JetBrains_Mono',_monospace] text-xs text-[#888] uppercase tracking-widest block mt-2">
          {experience.period} &nbsp;·&nbsp; {experience.location}
        </span>
      </div>

      <ul className="list-none p-0 space-y-3">
        {experience.highlights.map((highlight, i) => (
          <li key={i} className="text-[#C8C8C8] flex items-start gap-3 text-sm lg:text-base">
            <span className="text-[#E8002D] mt-0.5 shrink-0">▶</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
