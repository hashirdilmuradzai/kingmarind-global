import React from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignStyles[align]} ${className}`}>
      {label && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-5 h-[1.5px] bg-[#C9A24A]" />
          <span
            className={`text-xs uppercase tracking-[0.2em] font-bold ${
              isDark ? "text-[#C9A24A]" : "text-[#547A3F]"
            }`}
          >
            {label}
          </span>
          <span className="w-5 h-[1.5px] bg-[#C9A24A]" />
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.18] font-sans ${
          isDark ? "text-[#FCFBF7]" : "text-[#1E241F]"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-[#A9C39B]" : "text-[#547A3F]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
