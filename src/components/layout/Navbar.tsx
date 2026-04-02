"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Hero", href: "#" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const sectionIds = ["about", "experience", "skills", "projects", "education", "contact"];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Hero");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll-spy: find which section is currently in view
      let current = "Hero";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id.charAt(0).toUpperCase() + id.slice(1);
          }
        }
      }
      setActiveItem(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled || isMobileMenuOpen
          ? "py-3 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#E8002D]/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <div className="font-['Titillium_Web',_sans-serif] font-black text-[clamp(1.2rem,4vw,1.5rem)] tracking-tighter text-white z-[101]">
          <span className="text-[#E8002D]">AZIZ</span>.BS
        </div>

        {/* Hamburger — 3 bars with correct animation */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMobileMenuOpen}
          className="lg:hidden flex flex-col justify-center gap-[5px] p-3 bg-transparent border-none text-white z-[101] cursor-pointer select-none w-10 h-10"
        >
          <motion.div
            animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white origin-center"
          />
          <motion.div
            animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-0.5 bg-white"
          />
          <motion.div
            animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white origin-center"
          />
        </button>

        {/* Nav Links */}
        <ul
          className={`flex items-center gap-6 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "fixed top-0 left-0 w-screen h-screen bg-[#0A0A0A] flex-col justify-center items-center gap-10 z-[100] p-8"
              : "hidden lg:flex"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <Link
                href={item.href}
                onClick={() => {
                  setActiveItem(item.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`font-['JetBrains_Mono',_monospace] uppercase tracking-widest py-2 transition-colors duration-300 ${
                  isMobileMenuOpen ? "text-[1.5rem] font-bold" : "text-sm"
                } ${
                  activeItem === item.name
                    ? "text-[#E8002D]"
                    : "text-[#888888] hover:text-white"
                }`}
              >
                {item.name}
              </Link>
              {activeItem === item.name && !isMobileMenuOpen && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#E8002D]"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
