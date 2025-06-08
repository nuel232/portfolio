"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useState } from "react";

interface BentoGridProps {
  className?: string;
  children?: ReactNode;
}

export const BentoGrid = ({
  className,
  children,
}: BentoGridProps) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {children}
    </div>
  );
};

interface BentoCardProps {
  className?: string;
  Icon?: React.FC<{ className?: string }>;
  name: string;
  description: string;
  href?: string;
  cta?: string;
  background?: ReactNode;
}

export const BentoCard = ({
  className,
  Icon,
  name,
  description,
  href,
  cta,
  background,
}: BentoCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "relative flex flex-col justify-between overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm",
        "bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow",
        className
      )}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative flex h-full flex-col justify-between gap-3 p-6 z-10">
        <div>
          {Icon && <Icon className="h-10 w-10 mb-4 text-blue-500" />}
          <h3 className="text-xl font-bold mb-2 tracking-tight">{name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
            {description}
          </p>
        </div>
        {href && cta && (
          <a
            href={href}
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {cta}
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        )}
      </div>

      {/* Background Element */}
      <AnimatePresence>
        {background && hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0"
          >
            {background}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Visual pattern */}
      <div className="absolute right-0 bottom-0 opacity-30 pointer-events-none">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M120 0H0V120H120V0Z"
            fill="none"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H60V60H0V0ZM60 60H120V120H60V60Z"
            fill="currentColor"
            className="text-blue-500/20"
          />
        </svg>
      </div>
    </motion.div>
  );
}; 