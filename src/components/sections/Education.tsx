"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import educationData from "@/data/education.json";

const EducationSection = () => {
  const { degree, certifications } = educationData.education;

  return (
    <section id="education" className="py-20 md:py-24 lg:py-32 relative">
      <div className="container">
        <SectionHeader title="QUALIFICATIONS" label="04 : Education" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Degree */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-['JetBrains_Mono',_monospace] text-xs text-[#E8002D] uppercase tracking-widest block mb-6">
              Formal Training
            </h3>
            <div className="bg-[#1A1A1A] p-10 border-l-4 border-[#E8002D] shadow-[0_4px_20px_rgba(0,0,0,0.5)] rounded-r-2xl">
              <h4 className="text-[1.5rem] mb-2">{degree.title}</h4>
              <p className="text-[#E8002D] font-bold">{degree.issuer}</p>
              <p className="text-[#C8C8C8] font-mono text-[0.8rem] mt-4">
                {degree.date}
              </p>

              {degree.courses && (
                <div className="mt-6">
                  <h5 className="text-[0.9rem] text-[#C8C8C8] mb-3 uppercase tracking-widest">
                    Key Coursework
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {degree.courses.map((course: string) => (
                      <span
                        key={course}
                        className="text-[0.75rem] px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-['JetBrains_Mono',_monospace] text-xs text-[#E8002D] uppercase tracking-widest block mb-6">
              Certificates
            </h3>
            <div className="flex flex-col gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="p-6 bg-[#1A1A1A] border-l-2 border-[#C8C8C8] flex justify-between items-center rounded-r-xl gap-4"
                >
                  <div className="min-w-0">
                    <h5 className="text-[1rem] leading-snug">{cert.title}</h5>
                    <p className="text-[#C8C8C8] text-[0.85rem] mt-1">{cert.issuer}</p>
                  </div>
                  <span className="font-mono text-xs opacity-50 shrink-0">{cert.date}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
