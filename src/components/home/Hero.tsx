"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/common/LanguageContext";
import { useRfq } from "@/components/common/RfqContext";
import { ArrowRight, MapPin, Sparkles, FileText, ChevronDown } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();
  const { openModal } = useRfq();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#1E241F]">
      {/* Background Image with Cinematic Grading */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_orchard.jpg"
          alt="Kingmarind Tamarind Orchards in Phetchabun Thailand"
          fill
          priority
          className="object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered Gradient Overlays for High Contrast & Editorial Elegance */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E241F] via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[#315C38]/20 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl space-y-8">
          {/* Floating Location Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F7F3E8] text-xs font-semibold tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>Phetchabun, Thailand</span>
            <span className="w-1 h-1 rounded-full bg-[#C9A24A]" />
            <span className="text-[#A9C39B] font-mono">16.7167° N, 101.2500° E</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] font-sans">
              {t("Premium Thai Tamarind,", "มะขามหวานและแปรรูปเกรดพรีเมียม")}{" "}
              <span className="text-[#C9A24A] font-serif italic block mt-1">
                {t("Prepared for Global Markets.", "มาตรฐานการส่งออกสู่ตลาดสากล")}
              </span>
            </h1>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-[#FCFBF7]/90 leading-relaxed max-w-2xl font-light">
            {t(
              "From the heart of Phetchabun, Thailand, Kingmarind brings together authentic Thai tamarind and carefully processed tamarind products for wholesalers, distributors, retailers and international food businesses.",
              "จากแหล่งปลูกมะขามหวานชั้นนำในจังหวัดเพชรบูรณ์ บริษัท คิงมารินด์ จำกัด คัดสรรและแปรรูปผลิตภัณฑ์มะขามคุณภาพสูงเพื่อตอบสนองความต้องการของคู่ค้าและผู้ประกอบการอาหารทั่วโลก"
            )}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Button
              variant="gold"
              size="lg"
              href="/products"
              className="shadow-lg hover:shadow-xl group"
            >
              <span>{t("Explore Our Products", "สำรวจผลิตภัณฑ์ทั้งหมด")}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline-white"
              size="lg"
              onClick={() => openModal()}
              className="backdrop-blur-sm"
            >
              <FileText className="w-4 h-4 text-[#C9A24A]" />
              <span>{t("Request a Wholesale Quote", "ขอใบเสนอราคาส่ง")}</span>
            </Button>
          </div>

          {/* Small Trust Line */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#A9C39B] font-medium tracking-wide">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
              Thai Tamarind Origin
            </span>
            <span className="text-white/30">•</span>
            <span>Processed Fruit Products</span>
            <span className="text-white/30">•</span>
            <span>B2B Wholesale & Export</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/50 text-[11px] font-mono tracking-widest uppercase">
        <span className="mb-1">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#C9A24A]" />
      </div>
    </section>
  );
}
