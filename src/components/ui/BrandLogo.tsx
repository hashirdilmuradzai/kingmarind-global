import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function BrandLogo({ variant = "dark", size = "md", className = "" }: BrandLogoProps) {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Botanical stylized Tamarind leaf/pod emblem */}
      <div
        className={`relative flex items-center justify-center rounded-xl transition-all duration-300 ${
          size === "sm" ? "w-8 h-8" : size === "lg" ? "w-12 h-12" : "w-10 h-10"
        } ${
          isLight
            ? "bg-[#FCFBF7] text-[#315C38] shadow-md group-hover:bg-[#C9A24A] group-hover:text-white"
            : "bg-[#315C38] text-[#F7F3E8] shadow-sm group-hover:bg-[#547A3F]"
        }`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 transition-transform duration-300 group-hover:scale-105"
        >
          {/* Stylized tamarind pod curvature */}
          <path
            d="M8 22C6 17 9 10 16 7C22 4.5 25 8 26 12C27 16 23 20 18 21C13 22 10 27 8 22Z"
            fill="currentColor"
            fillOpacity="0.85"
          />
          {/* Subtle gold crown / leaf branch accent */}
          <path
            d="M14 6C17 7 21 8.5 23 11"
            stroke="#C9A24A"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="21" cy="7" r="1.5" fill="#C9A24A" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-extrabold tracking-[0.14em] font-sans transition-colors duration-200 ${
            sizeClasses[size]
          } ${isLight ? "text-[#FCFBF7] group-hover:text-[#C9A24A]" : "text-[#1E241F] group-hover:text-[#315C38]"}`}
        >
          KINGMARIND
        </span>
        <span
          className={`text-[9px] tracking-[0.22em] uppercase font-medium -mt-1 ${
            isLight ? "text-[#A9C39B]" : "text-[#547A3F]"
          }`}
        >
          THAILAND • EXPORT
        </span>
      </div>
    </Link>
  );
}
