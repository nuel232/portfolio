"use client";

import { Waves } from "@/components/ui/waves-background";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
              A passionate front-end developer specializing in web and blockchain technologies, focused on building beautiful, functional, and secure applications.
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

          {/* Right side - profile image with animated borders */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
              {/* Glow effects behind the profile image */}
              <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 dark:opacity-30 blur-xl"></div>
              <div className="absolute w-[90%] h-[90%] rounded-full bg-gradient-to-r from-teal-400 to-blue-400 opacity-20 dark:opacity-30 blur-xl animate-pulse"></div>
              
              {/* Profile image with animated border */}
              <div className="profile_animate w-full h-full overflow-hidden relative z-10">
                <Image
                  src="/profile.jpg"
                  alt="Kelechi"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                  className="object-cover"
                  style={{ width: '100%', height: '100%' }}
                  priority
                />
                {/* Animated border overlay */}
                <div 
                  className="absolute inset-0 profile_animate z-20 pointer-events-none" 
                  style={{
                    border: theme === "dark" ? "9px solid rgba(255, 255, 255, 0.3)" : "9px solid rgba(0, 0, 0, 0.1)",
                    boxShadow: theme === "dark" 
                      ? "0 0 20px rgba(255, 255, 255, 0.15)" 
                      : "0 0 20px rgba(0, 0, 0, 0.1)"
                  }}
                />
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