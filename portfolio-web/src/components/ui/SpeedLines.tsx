"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SpeedLines = () => {
  const [linesData, setLinesData] = useState<{ id: number; top: string; width: string; opacity: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    setLinesData(Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      width: `${100 + Math.random() * 200}px`,
      opacity: 0.1 + Math.random() * 0.3,
      duration: 0.5 + Math.random() * 1.5,
      delay: Math.random() * 2,
    })));
  }, []);

  return (
    <div 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
        background: "#0A0A0A",
      }}
    >
      {linesData.map((lineData) => (
        <motion.div
          key={lineData.id}

          animate={{ x: ["-100%", "200%"] }}
          transition={{
            duration: lineData.duration,
            repeat: Infinity,
            delay: lineData.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: lineData.top,
            width: lineData.width,
            height: "1px",
            background: "linear-gradient(90deg, transparent, #E8002D, transparent)",
            opacity: lineData.opacity,
            transform: "skewX(-30deg)",
          }}
        />
      ))}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at center, transparent 0%, #0A0A0A 80%)",
          opacity: 0.8
        }}
      />
    </div>
  );
};

export default SpeedLines;
