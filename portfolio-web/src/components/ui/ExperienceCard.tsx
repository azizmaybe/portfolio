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
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#1A1A1A] p-10 relative border-l-4 border-l-[#E8002D] shadow-[0_4px_20px_rgba(0,0,0,0.5)] rounded-r-2xl"
    >
      <div className="absolute top-4 right-4 font-['JetBrains_Mono',_monospace] text-[#E8002D] text-5xl font-black opacity-[0.03] leading-none">
        PHASE {index + 1}
      </div>

      <div className="mb-8">
        <h3 className="text-2xl mb-2">{experience.role}</h3>
        <p className="text-[#E8002D] font-bold uppercase">
          {experience.company}
        </p>
        <span className="font-['JetBrains_Mono',_monospace] text-xs text-[#E8002D] uppercase tracking-widest mb-2 block mt-3">
          {experience.period} | {experience.location}
        </span>
      </div>

      <ul className="list-none p-0">
        {experience.highlights.map((highlight, i) => (
          <li 
            key={i}
            className="mb-4 text-[#C8C8C8] flex items-start"
          >
            <span className="text-[#E8002D] mr-3">▶</span>
            {highlight}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
