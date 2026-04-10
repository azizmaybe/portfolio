"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import profileData from "@/data/profile.json";

const Hero = () => {
  return (
    <section id="hero" aria-label="Hero" className="py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[200%] h-[200%] opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(232, 0, 45, 0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-start text-left">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-24 h-24 rounded-full border-[3px] border-[#E8002D] overflow-hidden mb-12 relative shadow-[0_0_30px_rgba(232,0,45,0.3)]"
          >
            <Image
              src={profileData.avatarPath}
              alt={profileData.name}
              fill
              priority
              style={{ objectFit: "cover" }}
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                e.currentTarget.src =
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=Aziz";
              }}
            />
          </motion.div>

          <span className="font-['JetBrains_Mono',_monospace] text-xs text-[#E8002D] uppercase tracking-widest block mb-6">
            Actively Seeking Opportunities
          </span>

          <AnimatedText
            text={profileData.name.toUpperCase()}
            className="text-[clamp(2rem,8vw,5rem)] leading-[0.9] font-black font-headlines mb-8"
          />

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-[#E8002D] mb-10 -skew-x-[15deg]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[clamp(1rem,1.5vw,1.4rem)] text-[#C8C8C8] max-w-[600px] font-mono mb-16 leading-relaxed"
          >
            {profileData.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-wrap gap-6 md:gap-10"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 font-black uppercase tracking-[0.1em] text-white bg-[#E8002D] overflow-hidden -skew-x-[15deg] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(232,0,45,0.4)]"
            >
              <span className="skew-x-[15deg] flex items-center gap-3">
                View My Portfolio
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </a>
            <a
              href="/aziz_bensalem_flutter_engineer.pdf"
              download
              className="group relative inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 font-black uppercase tracking-[0.1em] text-white bg-white/5 border border-white/20 overflow-hidden -skew-x-[15deg] transition-all duration-300 hover:border-[#E8002D] hover:bg-white/10 hover:shadow-[0_0_20px_rgba(232,0,45,0.2)]"
            >
              <span className="skew-x-[15deg] flex items-center gap-3">
                Download CV
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[rgba(232,0,45,0.5)] to-transparent -z-10" />
    </section>
  );
};

export default Hero;
