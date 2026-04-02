"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceCard from "@/components/ui/ExperienceCard";
import experienceData from "@/data/experience.json";
import { Experience } from "@/types";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-24 lg:py-32 relative">
      <div className="container">
        <SectionHeader title="WORK EXPERIENCE" label="02 : Career Path" />

        <div className="relative py-8">
          {/* Central Track Line — desktop only */}
          <div className="hide-mobile absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2" />

          {/* Mobile: single column vertical timeline line */}
          <div className="lg:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-white/5" />

          <div className="relative z-10 flex flex-col gap-12">
            {experienceData.experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={`${exp.company}-${index}`}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  {/* Desktop zigzag layout */}
                  {isEven ? (
                    <>
                      <ExperienceCard
                        experience={exp as Experience}
                        index={index}
                      />
                      <div className="hide-mobile" />
                    </>
                  ) : (
                    <>
                      <div className="hide-mobile" />
                      <ExperienceCard
                        experience={exp as Experience}
                        index={index}
                      />
                    </>
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
