import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost" | "outline-white";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 shadow-sm",
  };

  const variantStyles = {
    primary:
      "bg-[#315C38] text-[#FCFBF7] hover:bg-[#25462B] hover:shadow-md focus:ring-[#315C38]",
    secondary:
      "bg-[#547A3F] text-[#FCFBF7] hover:bg-[#436232] focus:ring-[#547A3F]",
    gold:
      "bg-[#C9A24A] text-[#1E241F] hover:bg-[#B88E35] hover:text-black hover:shadow-md focus:ring-[#C9A24A]",
    outline:
      "border border-[#315C38]/30 bg-transparent text-[#315C38] hover:bg-[#315C38]/5 hover:border-[#315C38] focus:ring-[#315C38]",
    "outline-white":
      "border border-[#FCFBF7]/40 bg-transparent text-[#FCFBF7] hover:bg-[#FCFBF7]/10 hover:border-[#FCFBF7] focus:ring-[#FCFBF7]",
    ghost:
      "bg-transparent text-[#315C38] hover:bg-[#315C38]/10 focus:ring-[#315C38]",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
