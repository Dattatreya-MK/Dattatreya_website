"use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  dir?: "up" | "left" | "right";
  className?: string;
}

export default function FadeIn({ children, delay = 0, dir = "up", className = "" }: Props) {
  const variants = {
    hidden: {
      opacity: 0,
      y: dir === "up" ? 30 : 0,
      x: dir === "left" ? -30 : dir === "right" ? 30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
