"use client";


import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceCard from "@/components/ui/ExperienceCard";
import experienceData from "@/data/experience.json";
import { Experience } from "@/types";

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-40">
      <div className="container">
        <SectionHeader title="WORK EXPERIENCE" label="Career Path" />
        
        <div className="relative py-8">
          {/* Central Track Line */}
          <div className="hide-mobile absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {experienceData.experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={`${exp.company}-${index}`}
                  className="grid grid-cols-2 gap-8 max-lg:grid-cols-1 items-center"
                >
                  {isEven ? (
                    <ExperienceCard experience={exp as Experience} index={index} />
                  ) : (
                    <div className="hide-mobile" />
                  )}

                  {!isEven ? (
                    <ExperienceCard experience={exp as Experience} index={index} />
                  ) : (
                    <div className="hide-mobile" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
