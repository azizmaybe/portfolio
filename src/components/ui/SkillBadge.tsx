"use client";

import { motion } from "framer-motion";
import { Skill } from "@/types";

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

// Map of skill names to Simple Icons CDN slugs
const ICON_COLORS: Record<string, string> = {
  Flutter: "#54C5F8",
  Dart: "#0175C2",
  Angular: "#DD0031",
  React: "#61DAFB",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Python: "#3776AB",
  ".NET": "#512BD4",
  Java: "#ED8B00",
  Git: "#F05032",
  Linux: "#FCC624",
  PostgreSQL: "#4169E1",
  MongoDB: "#47A248",
  Firebase: "#FFCA28",
  Supabase: "#3ECF8E",
  Docker: "#2496ED",
  Figma: "#F24E1E",
};

const SkillBadge = ({ skill, index }: SkillBadgeProps) => {
  const iconColor = ICON_COLORS[skill.name] ?? "#E8002D";
  const iconSlug = skill.simpleIconSlug ?? skill.name.toLowerCase().replace(/\s+/g, "").replace(/\./g, "dot");
  const iconUrl = `https://cdn.simpleicons.org/${iconSlug}/${iconColor.replace("#", "")}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08, translateY: -4 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
        delay: index * 0.05,
      }}
      className="bg-[#1A1A1A] px-6 py-5 flex flex-col items-center justify-center text-center border border-white/5 cursor-default relative shadow-[0_4px_10px_rgba(0,0,0,0.3)] rounded-xl group"
    >
      {/* Icon */}
      <div className="w-10 h-10 mb-3 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={iconUrl}
          alt={skill.name}
          width={36}
          height={36}
          loading="lazy"
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            // Fallback: show first letter with accent color
            e.currentTarget.style.display = "none";
            const fallback = e.currentTarget.nextSibling as HTMLElement;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        <span
          className="text-[1.8rem] font-black hidden items-center justify-center"
          style={{ color: iconColor }}
        >
          {skill.name.charAt(0)}
        </span>
      </div>

      <span className="font-mono text-[0.75rem] uppercase tracking-wide">
        {skill.name}
      </span>

      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${iconColor}18 0%, transparent 70%)`,
        }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
};

export default SkillBadge;
