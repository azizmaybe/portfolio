"use client";


import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import profileData from "@/data/profile.json";

const About = () => {
  return (
    <section id="about" className="pt-16 pb-40">
      <div className="container">
        <SectionHeader title="THE ENGINEER" label="01 : Profile Overview" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[2rem] mb-6">Engineering The Future</h3>
            <p className="text-[#C8C8C8] text-[1.2rem] leading-[1.8] mb-8">
              {profileData.summary}
            </p>
            <p className="text-[#C8C8C8] text-[1.1rem] leading-[1.6]">
              Specializing in cross-platform mobile development and high-performance web applications, I bring a racing team&apos;s focus on precision and speed to every codebase I touch.
            </p>
          </motion.div>

          {/* Specs Column (Fills horizontal space) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-10 bg-white/10 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] rounded-2xl"
          >
            <h3 className="font-['JetBrains_Mono',_monospace] text-xs text-[#E8002D] uppercase tracking-widest block mb-8 text-base">Performance Specs</h3>
            
            <div className="grid grid-cols-2 gap-10">
              <div>
                <span className="text-xs uppercase opacity-50 tracking-wider">Nationality</span>
                <p className="text-[1.2rem] font-bold mt-1">TUNISIAN 🇹🇳</p>
              </div>
              <div>
                <span className="text-xs uppercase opacity-50 tracking-wider">Base Location</span>
                <p className="text-[1.2rem] font-bold mt-1">{profileData.location}</p>
              </div>
              <div>
                <span className="text-xs uppercase opacity-50 tracking-wider">Communication</span>
                <p className="text-[1.1rem] font-semibold mt-1">
                  {profileData.languages.join(" | ")}
                </p>
              </div>
              <div>
                <span className="text-xs uppercase opacity-50 tracking-wider">Professional Level</span>
                <p className="text-[1.2rem] font-bold mt-1">SENIOR ENGINEER</p>
              </div>
            </div>

            <div className="mt-12">
              <span className="text-xs uppercase opacity-50 tracking-wider">Social Radio</span>
              <div className="flex gap-8 mt-6">
                <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#E8002D] font-black hover:text-white transition-colors">LINKEDIN</a>
                <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" className="text-[#E8002D] font-black hover:text-white transition-colors">GITHUB</a>
                <a href={`https://wa.me/${profileData.socials.whatsapp.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="text-[#E8002D] font-black hover:text-white transition-colors">WHATSAPP</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
