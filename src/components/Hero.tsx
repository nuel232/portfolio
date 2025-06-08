"use client";

import { Waves } from "@/components/ui/waves-background";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Used to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background waves */}
      <div className="absolute inset-0 overflow-hidden">
        <Waves
          lineColor={theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)"}
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              <span className="block">Hi there, I&apos;m</span>
              <span className="block text-gradient text-6xl sm:text-7xl md:text-8xl mt-2">
                Kelechi
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-md mb-8">
              A passionate full-stack developer specializing in web and blockchain technologies, focused on building beautiful, functional, and secure applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#projects" 
                className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a 
                href="#contact" 
                className="px-8 py-3 border-2 border-black dark:border-white rounded-full font-medium hover:bg-black/5 dark:hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - animated circles with original colors */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 dark:opacity-30 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-20 dark:opacity-30 animate-pulse [animation-delay:0.5s]"></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-r from-green-400 to-teal-300 opacity-20 dark:opacity-30 animate-pulse [animation-delay:1s]"></div>
              <div className="absolute inset-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-300 opacity-20 dark:opacity-30 animate-pulse [animation-delay:1.5s]"></div>
              <div className="absolute inset-16 rounded-full bg-gradient-to-r from-red-400 to-pink-300 opacity-20 dark:opacity-30 animate-pulse [animation-delay:2s]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white dark:bg-black shadow-lg flex items-center justify-center">
                  <span className="text-4xl">💻</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Scroll Down</p>
          <div className="w-6 h-10 border-2 border-gray-500 dark:border-gray-400 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 