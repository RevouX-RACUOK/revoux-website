// components/Preloader.tsx
"use client";

import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {/* 1. Holographic "Glow" Layer */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-pink-600/30 blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 2. Abstract Geometric Spinner (Wait for Content) */}
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <motion.div
          className="absolute h-32 w-32 rounded-full border border-white/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Animated Pink Quadrants */}
        <svg
          className="h-24 w-24 animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M50 5A45 45 0 0 1 95 50"
            stroke="#fc03ba"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M50 95A45 45 0 0 1 5 50"
            stroke="#fc03ba"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </svg>

        {/* 3. The Central Icon (Replace with your Logo/Symbol) */}
        <div className="absolute font-black text-3xl text-white tracking-tighter mix-blend-difference">
          LP
        </div>
      </div>

      {/* 4. Text and Loading Bar */}
      <div className="mt-20 w-48 text-center space-y-4">
        <h2 className="text-[11px] font-light tracking-[0.4em] text-white/70 uppercase">
          Initializing
        </h2>
        
        {/* Minimal Progress Bar (Pure CSS animation) */}
        <div className="relative h-[1px] w-full bg-white/10 overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-pink-500 animate-loading-bar" />
        </div>
      </div>
    </motion.div>
  );
}