import React from "react";
import Link from "next/link";
import Image from 'next/image'

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
      <Image src="/images/logo.png" width={100}
      height={40} alt="logo" />
    </Link>
  );
}
