"use client";


import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { useContactForm } from "@/hooks/useContactForm";
import profileData from "@/data/profile.json";

const Contact = () => {
  const { formData, handleChange, sendEmail, isSubmitting, success, error } = useContactForm();

  return (
    <section id="contact" className="py-40">
      <div className="container">
        <SectionHeader title="LET'S CONNECT" label="05 : Contact" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[2rem] mb-6">Ready to Start?</h3>
            <p className="text-[#C8C8C8] text-[1.2rem] leading-[1.8] mb-8">
              Whether you have a specific project in mind or just want to discuss the latest tech in Flutter and Web, I&apos;m always open to new connections.
            </p>

            <div className="mb-8">
              <span className="font-['JetBrains_Mono',_monospace] text-xs text-[#E8002D] uppercase tracking-widest block mb-2">Direct Communication</span>
              <a 
                href={`mailto:${profileData.socials.email}`}
                className="text-[1.5rem] font-bold text-[#E8002D] block mb-2"
              >
                {profileData.socials.email}
              </a>
              <a 
                href={`https://wa.me/${profileData.socials.whatsapp.replace("+", "")}`}
                className="text-[1.5rem] font-bold text-[#E8002D] block mt-2"
              >
                WHATSAPP: {profileData.socials.whatsapp}
              </a>
            </div>

            <div>
              <span className="font-['JetBrains_Mono',_monospace] text-xs text-[#E8002D] uppercase tracking-widest block mb-2">Social Channels</span>
              <div className="flex gap-6 mt-4">
                <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="font-black hover:text-[#E8002D] transition-colors">LINKEDIN</a>
                <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" className="font-black hover:text-[#E8002D] transition-colors">GITHUB</a>
                <a href={`https://wa.me/${profileData.socials.whatsapp.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="font-black hover:text-[#E8002D] transition-colors">WHATSAPP</a>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-12 bg-white/5 border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.5)] rounded-2xl"
          >
            <form onSubmit={sendEmail}>
              <div className="mb-8">
                <label className="font-['JetBrains_Mono',_monospace] text-xs text-[#E8002D] uppercase tracking-widest block mb-2" htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white/10 border-none border-b-2 border-white/20 text-white font-body outline-none transition-colors duration-300 focus:border-[#E8002D] rounded-t-lg focus:bg-white/20"
                />
              </div>

              <div className="mb-8">
                <label className="font-['JetBrains_Mono',_monospace] text-xs text-[#E8002D] uppercase tracking-widest block mb-2" htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white/10 border-none border-b-2 border-white/20 text-white font-body outline-none transition-colors duration-300 focus:border-[#E8002D] rounded-t-lg focus:bg-white/20"
                />
              </div>

              <div className="mb-12">
                <label className="font-['JetBrains_Mono',_monospace] text-xs text-[#E8002D] uppercase tracking-widest block mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-4 bg-white/10 border-none border-b-2 border-white/20 text-white font-body outline-none resize-none transition-colors duration-300 focus:border-[#E8002D] rounded-t-lg focus:bg-white/20"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className="w-full p-5 bg-[#E8002D] hover:bg-[#CC0025] transition-colors text-white border-none font-black uppercase tracking-[0.2em] rounded-xl disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"}
              </motion.button>

              {success && (
                <p className="text-[#4CAF50] mt-6 font-bold text-center">
                  MESSAGE RECEIVED. I&apos;LL REACH OUT SHORTLY.
                </p>
              )}

              {error && (
                <p className="text-[#E8002D] mt-6 font-bold text-center">
                  {error.toUpperCase()}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
