"use client";


import SectionHeader from "@/components/ui/SectionHeader";
import SkillBadge from "@/components/ui/SkillBadge";
import skillsData from "@/data/skills.json";
import { Skill } from "@/types";

const SkillsSection = () => {
  const categories = Array.from(new Set(skillsData.skills.map(s => s.category)));

  return (
    <section id="skills" className="py-40 bg-white/[0.01]">
      <div className="container">
        <SectionHeader title="TECHNICAL EXPERTISE" label="02 : Tech Stack" />
        
        <div className="flex flex-col gap-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="font-['JetBrains_Mono',_monospace] text-xs text-[#E8002D] uppercase tracking-widest mb-6 text-base border-b border-[rgba(232,0,45,0.2)] pb-3 inline-block">
                {`${category.toUpperCase()}S`}
              </h3>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6 mt-4">
                {skillsData.skills
                  .filter(s => s.category === category)
                  .map((skill, index) => (
                    <SkillBadge key={skill.name} skill={skill as Skill} index={index} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
