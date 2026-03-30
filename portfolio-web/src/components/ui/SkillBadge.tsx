"use client";


import { motion } from "framer-motion";
import { Skill } from "@/types";

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

const SkillBadge = ({ skill, index }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, translateY: -5 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 10,
        delay: index * 0.05 
      }}
      className="bg-[#1A1A1A] px-8 py-6 flex flex-col items-center justify-center text-center border border-white/5 cursor-default relative shadow-[0_4px_10px_rgba(0,0,0,0.3)] rounded-xl"
    >
      <div className="w-10 h-10 mb-3 flex items-center justify-center text-[#E8002D]">
        <span className="text-[2rem] font-black">{skill.name.charAt(0)}</span>
      </div>

      <span className="font-mono text-[0.75rem] uppercase tracking-wide">
        {skill.name}
      </span>

      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232, 0, 45, 0.1) 0%, transparent 70%)"
        }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
};

export default SkillBadge;
