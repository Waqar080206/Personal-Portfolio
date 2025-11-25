"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const BlurFade = ({
  children,
  className,
  delay = 0,
}: BlurFadeProps) => {
  // Simplified animation - remove heavy blur effects
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{
        delay,
        duration: 0.3, // Reduced from 0.4
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
