"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import SkillBadge from "@/components/ui/SkillBadge";
import skillsData from "@/data/skills.json";
import { Skill } from "@/types";

const CATEGORY_ORDER = ["Framework", "Language", "Database", "Tool"];
const CATEGORY_LABELS: Record<string, string> = {
  Framework: "Frameworks",
  Language: "Languages",
  Database: "Databases",
  Tool: "Tools",
};

const SkillsSection = () => {
  const orderedCategories = CATEGORY_ORDER.filter((cat) =>
    skillsData.skills.some((s) => s.category === cat)
  );

  return (
    <section id="skills" aria-label="Skills" className="py-20 md:py-24 lg:py-32 relative bg-white/[0.02] border-y border-white/5">
      <div className="container">
        <SectionHeader title="TECHNICAL EXPERTISE" label="03 : Tech Stack" />

        <div className="flex flex-col gap-14">
          {orderedCategories.map((category) => (
            <div key={category}>
              <h3 className="font-['JetBrains_Mono',_monospace] text-xs text-[#E8002D] uppercase tracking-widest mb-6 border-b border-[rgba(232,0,45,0.2)] pb-3 inline-block">
                {CATEGORY_LABELS[category]}
              </h3>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 mt-4">
                {skillsData.skills
                  .filter((s) => s.category === category)
                  .map((skill, index) => (
                    <SkillBadge
                      key={skill.name}
                      skill={skill as Skill}
                      index={index}
                    />
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
