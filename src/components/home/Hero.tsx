"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/common/LanguageContext";
import { useRfq } from "@/components/common/RfqContext";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Sparkles,
  FileText,
  ChevronDown,
} from "lucide-react";

const heroSlides = [
  {
    image: "/images/banner.jpeg",
    alt: "Kingmarind Tamarind Orchards in Phetchabun Thailand",
    headline: "Premium Thai Tamarind,",
    headlineThai: "มะขามหวานและแปรรูปเกรดพรีเมียม",
    accentHeadline: "Prepared for Global Markets.",
    accentHeadlineThai: "มาตรฐานการส่งออกสู่ตลาดสากล",
    description:
      "From the heart of Phetchabun, Thailand, Kingmarind brings together authentic Thai tamarind and carefully processed tamarind products for wholesalers, distributors, retailers and international food businesses.",
    descriptionThai:
      "จากแหล่งปลูกมะขามหวานชั้นนำในจังหวัดเพชรบูรณ์ บริษัท คิงมารินด์ จำกัด คัดสรรและแปรรูปผลิตภัณฑ์มะขามคุณภาพสูงเพื่อตอบสนองความต้องการของคู่ค้าและผู้ประกอบการอาหารทั่วโลก",
  },
  {
    image: "/images/banner2.png",
    alt: "Kingmarind Tamarind Orchards in Phetchabun Thailand",
    headline: "Authentic Tamarind,",
    headlineThai: "มะขามแท้จากแหล่งปลูกคุณภาพ",
    accentHeadline: "Carefully Processed.",
    accentHeadlineThai: "ผ่านการแปรรูปอย่างพิถีพิถัน",
    description:
      "Discover naturally delicious Thai tamarind, selected from trusted growers in Phetchabun and prepared with care for consistent quality.",
    descriptionThai:
      "สัมผัสรสชาติแท้ของมะขามไทย คัดสรรจากเกษตรกรที่ไว้วางใจได้ในจังหวัดเพชรบูรณ์ และแปรรูปด้วยความใส่ใจเพื่อคุณภาพที่สม่ำเสมอ",
  },
];

export function Hero() {
  const { t } = useLanguage();
  const { openModal } = useRfq();
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [contentVisible, setContentVisible] = React.useState(true);

  React.useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 2500);

    return () => window.clearInterval(slideTimer);
  }, []);

  React.useEffect(() => {
    setContentVisible(false);
    const contentTimer = window.setTimeout(() => setContentVisible(true), 120);

    return () => window.clearTimeout(contentTimer);
  }, [activeSlide]);

  const goToSlide = (slideIndex: number) => {
    setActiveSlide((slideIndex + heroSlides.length) % heroSlides.length);
  };

  const activeContent = heroSlides[activeSlide];

  return (
    <section
      className="relative h-[calc(100svh-1rem)] min-h-[560px] lg:h-[100svh] lg:min-h-0 flex items-center justify-center pt-20 pb-12 lg:pt-24 lg:pb-16 overflow-hidden bg-[#1E241F]"
      aria-roledescription="carousel"
      aria-label="Kingmarind hero slides"
    >
      {/* Background Image with Cinematic Grading */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, slideIndex) => (
          <Image
            key={`${slide.image}-${slideIndex}`}
            src={slide.image}
            alt={slide.alt}
            fill
            priority={slideIndex === 0}
            className={`object-cover object-center transform scale-105 transition-opacity duration-700 ease-in-out ${
              activeSlide === slideIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Layered Gradient Overlays for High Contrast & Editorial Elegance */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E241F] via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[#315C38]/20 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-10">
        <div
          key={activeSlide}
          className={`max-w-3xl space-y-6 lg:space-y-7 transition-all duration-500 ease-out ${
            contentVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-2 opacity-0"
          }`}
        >
          {/* Floating Location Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F7F3E8] text-xs font-semibold tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>Phetchabun, Thailand</span>
            <span className="w-1 h-1 rounded-full bg-[#C9A24A]" />
            <span className="text-[#A9C39B] font-mono">
              16.7167° N, 101.2500° E
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] font-sans">
              {t(activeContent.headline, activeContent.headlineThai)}{" "}
              <span className="text-[#C9A24A] font-serif italic block mt-1">
                {t(
                  activeContent.accentHeadline,
                  activeContent.accentHeadlineThai,
                )}
              </span>
            </h1>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-[#FCFBF7]/90 leading-relaxed max-w-2xl font-light">
            {t(activeContent.description, activeContent.descriptionThai)}
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
          <div className="pt-4 lg:pt-5 border-t border-white/15 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#A9C39B] font-medium tracking-wide">
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

      <div className="absolute bottom-8 right-4 sm:right-8 lg:right-12 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-black/20 p-1.5 backdrop-blur-md">
        <button
          type="button"
          onClick={() => goToSlide(activeSlide - 1)}
          aria-label="Previous slide"
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#C9A24A]"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <div
          className="flex items-center gap-1.5"
          role="tablist"
          aria-label="Hero slides"
        >
          {heroSlides.map((slide, slideIndex) => (
            <button
              key={`${slide.image}-${slideIndex}`}
              type="button"
              role="tab"
              aria-selected={activeSlide === slideIndex}
              aria-label={`Go to slide ${slideIndex + 1}`}
              onClick={() => goToSlide(slideIndex)}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C9A24A] ${
                activeSlide === slideIndex
                  ? "w-7 bg-[#C9A24A]"
                  : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goToSlide(activeSlide + 1)}
          aria-label="Next slide"
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#C9A24A]"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
