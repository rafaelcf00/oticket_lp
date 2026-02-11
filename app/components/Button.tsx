"use client";

import { motion } from "framer-motion";

const variants = {
  primary: "bg-[#023324] text-white hover:bg-[#034a38] shadow-lg shadow-[#023324]/25",
  white: "bg-white text-[#023324] hover:bg-white/95 shadow-lg",
  dark: "bg-black text-white hover:bg-white hover:text-[#023324] border-2 border-white",
  outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#023324]",
};

type ButtonVariant = keyof typeof variants;

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base",
  lg: "px-6 py-2.5 md:px-8 md:py-3 text-lg md:text-xl",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  size = "md",
}: ButtonProps) {
  const focusRing = variant === "white" || variant === "outline" ? "focus:ring-white/50" : "focus:ring-[#023324]/50";
  const base =
    `inline-block rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${focusRing}`;
  const combined = `${base} ${variants[variant]} ${sizeClasses[size]} ${className}`.trim();

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if (href) {
    return (
      <motion.a href={href} className={combined} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" className={combined} {...motionProps}>
      {children}
    </motion.button>
  );
}
