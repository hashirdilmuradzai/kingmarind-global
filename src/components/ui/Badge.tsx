import React from "react";

interface BadgeProps {
  variant?: "green" | "gold" | "sage" | "outline" | "dark";
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
}

export function Badge({ variant = "sage", size = "sm", className = "", children }: BadgeProps) {
  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wider uppercase font-semibold",
    md: "text-xs px-3 py-1 font-medium",
  };

  const variantStyles = {
    green: "bg-[#315C38]/10 text-[#315C38] border border-[#315C38]/20",
    gold: "bg-[#C9A24A]/15 text-[#8F6A1A] border border-[#C9A24A]/30",
    sage: "bg-[#A9C39B]/20 text-[#315C38] border border-[#A9C39B]/30",
    outline: "bg-transparent text-[#547A3F] border border-[#547A3F]/30",
    dark: "bg-[#1E241F] text-[#FCFBF7] border border-[#C9A24A]/30",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
