"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { COMPANY } from "@/data/company";
import { useLanguage } from "@/components/common/LanguageContext";
import { useRfq } from "@/components/common/RfqContext";
import { Phone, Mail, MapPin, FileText, ArrowUpRight, ShieldCheck } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const { openModal } = useRfq();

  return (
    <footer className="bg-[#1E241F] text-[#FCFBF7] border-t border-[#C9A24A]/20 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#315C38]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9A24A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" size="lg" />
            <p className="text-[#C9A24A] font-serif text-lg italic tracking-wide mt-2">
              &ldquo;{COMPANY.tagline}&rdquo;
            </p>
            <p className="text-[#A9C39B] text-sm leading-relaxed max-w-sm">
              {t(
                "Export-ready Thai sweet tamarind, dried pitted tamarind, and value-added processed fruit products from Phetchabun, Thailand for global wholesale partners.",
                "ผู้ผลิตและส่งออกมะขามหวาน มะขามแปรรูป และผลิตภัณฑ์มะขามคุณภาพสูงจากเพชรบูรณ์ สู่ตลาดการค้าส่งระดับสากล"
              )}
            </p>

            <div className="pt-2 flex flex-col gap-1 text-xs text-[#A9C39B]/80 font-mono">
              <div>
                <span className="text-white/60">Tax ID: </span>
                {COMPANY.taxId}
              </div>
              <div>
                <span className="text-white/60">Managing Director: </span>
                {COMPANY.managingDirector.name} ({COMPANY.managingDirector.shortName})
              </div>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C9A24A] font-bold">
              {t("Company", "บริษัท")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-[#FCFBF7]/80 hover:text-[#C9A24A] transition-colors inline-flex items-center gap-1 group"
                >
                  {t("About Us", "เกี่ยวกับเรา")}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/quality"
                  className="text-[#FCFBF7]/80 hover:text-[#C9A24A] transition-colors inline-flex items-center gap-1 group"
                >
                  {t("Quality & Processing", "คุณภาพและกรรมวิธี")}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/export"
                  className="text-[#FCFBF7]/80 hover:text-[#C9A24A] transition-colors inline-flex items-center gap-1 group"
                >
                  {t("Export & Global Trade", "การส่งออกและตลาดโลก")}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog"
                  className="text-[#FCFBF7]/80 hover:text-[#C9A24A] transition-colors inline-flex items-center gap-1 group"
                >
                  {t("Digital Catalog", "แคตตาล็อกดิจิทัล")}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C9A24A] font-bold">
              {t("Products", "ผลิตภัณฑ์")}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FCFBF7]/80">
              <li>
                <Link href="/products?category=sweet-tamarind" className="hover:text-[#C9A24A] transition-colors">
                  {t("Sweet Tamarind", "มะขามหวาน")}
                </Link>
              </li>
              <li>
                <Link href="/products?category=seedless-tamarind" className="hover:text-[#C9A24A] transition-colors">
                  {t("Seedless Tamarind", "มะขามไร้เมล็ด")}
                </Link>
              </li>
              <li>
                <Link href="/products?category=dried-tamarind" className="hover:text-[#C9A24A] transition-colors">
                  {t("Dried Tamarind", "มะขามแห้ง")}
                </Link>
              </li>
              <li>
                <Link href="/products?category=seasoned-tamarind" className="hover:text-[#C9A24A] transition-colors">
                  {t("Seasoned Tamarind", "มะขามปรุงรส")}
                </Link>
              </li>
              <li>
                <Link href="/products?category=tamarind-snacks" className="hover:text-[#C9A24A] transition-colors">
                  {t("Tamarind Snacks", "ขนมขบเคี้ยวมะขาม")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & RFQ */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C9A24A] font-bold">
              {t("Inquiries & Export", "ติดต่อฝ่ายส่งออก")}
            </h4>
            <div className="space-y-3 text-xs text-[#FCFBF7]/85">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                <span>{COMPANY.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C9A24A] shrink-0" />
                <a href={`tel:${COMPANY.contact.phone}`} className="hover:text-[#C9A24A] transition-colors">
                  {COMPANY.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C9A24A] shrink-0" />
                <a href={`mailto:${COMPANY.contact.email}`} className="hover:text-[#C9A24A] transition-colors">
                  {COMPANY.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#315C38] hover:bg-[#547A3F] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 border border-[#C9A24A]/40"
                >
                  <FileText className="w-3.5 h-3.5 text-[#C9A24A]" />
                  {t("Request a Wholesale Quote", "ขอใบเสนอราคา")}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A9C39B]/70 gap-4">
          <div>
            © 2026 {COMPANY.name} All Rights Reserved. • Phetchabun, Thailand
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-[#C9A24A] transition-colors">
              {t("Thai Origin & Heritage", "แหล่งกำเนิดเพชรบูรณ์")}
            </Link>
            <span>•</span>
            <Link href="/export" className="hover:text-[#C9A24A] transition-colors">
              {t("B2B Export Terms", "เงื่อนไขการส่งออก")}
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#C9A24A] transition-colors">
              {t("Contact Us", "ติดต่อบริษัท")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
