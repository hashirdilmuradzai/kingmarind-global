"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/common/LanguageContext";
import { useRfq } from "@/components/common/RfqContext";
import { Menu, X, FileText, Globe } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const { openModal, items } = useRfq();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("Home", "หน้าแรก") },
    { href: "/about", label: t("About Us", "เกี่ยวกับเรา") },
    { href: "/aboutthailand", label: t("About Thailand", "เกี่ยวกับประเทศไทย") },
    { href: "/products", label: t("Our Products", "ผลิตภัณฑ์ของเรา") },
    { href: "/quality", label: t("Quality & Processing", "คุณภาพและกรรมวิธี") },
    { href: "/export", label: t("Export", "การส่งออก") },
    { href: "/contact", label: t("Contact", "ติดต่อเรา") },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || !isHome
            ? "bg-[#FCFBF7]/95 backdrop-blur-md shadow-sm border-b border-[#315C38]/10 py-3"
            : "bg-gradient-to-b from-black/60 via-black/30 to-transparent py-4 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <BrandLogo
            variant={isScrolled || !isHome ? "dark" : "light"}
            size="md"
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors py-1 relative ${
                    isScrolled || !isHome
                      ? isActive
                        ? "text-[#315C38]"
                        : "text-[#1E241F]/85 hover:text-[#315C38]"
                      : isActive
                      ? "text-[#C9A24A]"
                      : "text-white/90 hover:text-[#C9A24A]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                        isScrolled || !isHome ? "bg-[#315C38]" : "bg-[#C9A24A]"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Lang Selector + RFQ Quote Button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div
              className={`inline-flex items-center rounded-lg p-1 text-xs font-bold border transition-colors ${
                isScrolled || !isHome
                  ? "border-[#315C38]/20 bg-[#F7F3E8] text-[#1E241F]"
                  : "border-white/30 bg-black/30 text-white"
              }`}
            >
              <button
                type="button"
                onClick={() => setLang("EN")}
                className={`px-2.5 py-1 rounded transition-all ${
                  lang === "EN"
                    ? "bg-[#315C38] text-white shadow-xs"
                    : "opacity-70 hover:opacity-100"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("TH")}
                className={`px-2.5 py-1 rounded transition-all ${
                  lang === "TH"
                    ? "bg-[#315C38] text-white shadow-xs"
                    : "opacity-70 hover:opacity-100"
                }`}
                aria-label="Switch to Thai"
              >
                TH
              </button>
            </div>

            {/* Request a Quote CTA */}
            <Button
              variant={isScrolled || !isHome ? "gold" : "gold"}
              size="sm"
              onClick={() => openModal()}
              className="relative shadow-sm hover:scale-[1.02] transition-transform"
            >
              <FileText className="w-3.5 h-3.5" />
              {t("Request a Quote", "ขอใบเสนอราคา")}
              {items.length > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-[#315C38] text-white text-[10px] rounded-full font-bold">
                  {items.length}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setLang(lang === "EN" ? "TH" : "EN")}
              className={`px-2 py-1 text-xs font-bold rounded border ${
                isScrolled || !isHome
                  ? "border-[#315C38]/30 text-[#315C38] bg-[#F7F3E8]"
                  : "border-white/40 text-white bg-black/40"
              }`}
            >
              {lang}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled || !isHome
                  ? "text-[#1E241F] hover:bg-[#315C38]/10"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FCFBF7] animate-in fade-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#315C38]/10">
            <BrandLogo variant="dark" size="md" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-[#1E241F] hover:bg-[#315C38]/10"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 text-lg font-bold border-b border-[#315C38]/10 transition-colors ${
                    isActive ? "text-[#315C38] pl-2 border-l-4 border-l-[#315C38]" : "text-[#1E241F]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-6 space-y-3">
              <Button
                variant="gold"
                size="lg"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
              >
                <FileText className="w-4 h-4 mr-2" />
                {t("Request Wholesale Quote", "ขอใบเสนอราคาส่ง")}
              </Button>

              <div className="flex items-center justify-between pt-4 text-sm text-[#547A3F] border-t border-[#315C38]/10">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4" /> Language:
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLang("EN")}
                    className={`px-3 py-1 text-xs font-bold rounded ${
                      lang === "EN" ? "bg-[#315C38] text-white" : "bg-[#F7F3E8] text-[#1E241F]"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLang("TH")}
                    className={`px-3 py-1 text-xs font-bold rounded ${
                      lang === "TH" ? "bg-[#315C38] text-white" : "bg-[#F7F3E8] text-[#1E241F]"
                    }`}
                  >
                    ภาษาไทย
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
