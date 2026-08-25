"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, getProductsByCategory } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";
import { useLanguage } from "@/components/common/LanguageContext";
import { useRfq } from "@/components/common/RfqContext";
import {
  ChevronRight,
  Package,
  Sparkles,
  ShieldCheck,
  Truck,
  FileText,
  Clock,
  Thermometer,
  Layers,
  CheckCircle2,
  Share2,
  Download,
} from "lucide-react";

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { t } = useLanguage();
  const { openModal } = useRfq();
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  const relatedProducts = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const activeSize = product.sizes[selectedSizeIndex]?.size || product.sizes[0]?.size;

  return (
    <div className="bg-[#FCFBF7] min-h-screen pt-24 pb-20">
      {/* Breadcrumb Bar */}
      <div className="bg-[#F7F3E8] border-b border-[#315C38]/10 py-3.5">
        <Container>
          <nav className="flex items-center gap-2 text-xs text-[#547A3F] font-medium overflow-x-auto">
            <Link href="/" className="hover:text-[#315C38] transition-colors">
              {t("Home", "หน้าแรก")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
            <Link href="/products" className="hover:text-[#315C38] transition-colors">
              {t("Products", "ผลิตภัณฑ์")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
            <Link
              href={`/products?category=${product.categorySlug}`}
              className="hover:text-[#315C38] transition-colors whitespace-nowrap"
            >
              {product.category}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
            <span className="text-[#1E241F] font-bold truncate max-w-xs">
              {product.name}
            </span>
          </nav>
        </Container>
      </div>

      <Container className="pt-10">
        {/* Main Product Hero / Spec Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-96 sm:h-[460px] rounded-3xl overflow-hidden shadow-lg border border-[#315C38]/15 bg-[#F7F3E8]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <Badge variant="dark" size="sm">
                  {product.category}
                </Badge>
                {product.grade && (
                  <Badge variant="gold" size="sm">
                    {product.grade}
                  </Badge>
                )}
              </div>

              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] font-mono">
                Origin: {product.origin}
              </div>
            </div>

            {/* Packaging Preview strip */}
            <div className="p-4 bg-[#F7F3E8] rounded-2xl border border-[#315C38]/10 flex items-center justify-between text-xs text-[#547A3F]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#315C38]" />
                <span>Export-Ready Quality Inspection</span>
              </div>
              <span className="font-mono text-[#315C38] font-bold">Standard Spec</span>
            </div>
          </div>

          {/* Right Column: Product Info & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#547A3F] mb-1.5">
                {product.type} • {product.origin}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-[#1E241F] tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="mt-3 text-base text-[#547A3F] leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-3 p-4 bg-[#F7F3E8] rounded-2xl border border-[#315C38]/12 text-xs">
              <div>
                <span className="text-[#547A3F] block font-medium">Grade Standard:</span>
                <span className="font-bold text-[#1E241F]">{product.grade || "Export Standard"}</span>
              </div>
              <div>
                <span className="text-[#547A3F] block font-medium">Flavor Profile:</span>
                <span className="font-bold text-[#1E241F]">{product.flavor}</span>
              </div>
              <div>
                <span className="text-[#547A3F] block font-medium">Format:</span>
                <span className="font-bold text-[#1E241F]">{product.format}</span>
              </div>
              <div>
                <span className="text-[#547A3F] block font-medium">Shelf Life:</span>
                <span className="font-bold text-[#1E241F]">{product.shelfLife}</span>
              </div>
            </div>

            {/* Packaging Sizes Selector */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider">
                Select Packaging / Weight Specification:
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedSizeIndex(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedSizeIndex === idx
                        ? "bg-[#315C38] text-white shadow-xs"
                        : "bg-white text-[#1E241F] border border-[#315C38]/20 hover:bg-[#F7F3E8]"
                    }`}
                  >
                    {s.size}
                  </button>
                ))}
              </div>
            </div>

            {/* B2B Wholesale Notice Box */}
            <div className="p-4 bg-[#315C38]/8 rounded-2xl border border-[#315C38]/15 space-y-1">
              <div className="text-xs font-bold text-[#315C38] uppercase tracking-wider">
                B2B Wholesale Procurement
              </div>
              <div className="text-sm font-semibold text-[#1E241F]">
                {t("Wholesale pricing available on request", "ราคาจำหน่ายค้าส่งตามปริมาณการสั่งซื้อ")}
              </div>
              <p className="text-[11px] text-[#547A3F]">
                {product.wholesale} Minimum order quantities and shipping terms (FOB/CIF) tailored to your destination port.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                variant="gold"
                size="lg"
                onClick={() => openModal(product, activeSize)}
                className="flex-1 shadow-md"
              >
                <FileText className="w-4 h-4 text-[#1E241F]" />
                <span>{t("Request Wholesale Quote", "ขอใบเสนอราคาส่ง")}</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => openModal(product, `Custom Packaging for ${product.name}`)}
              >
                <Package className="w-4 h-4" />
                <span>{t("Ask About Packaging", "สอบถามขนาดบรรจุ")}</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Detailed Tabs / Specifications Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-[#315C38]/15">
          {/* Card 1: Product Overview */}
          <div className="bg-[#FCFBF7] p-6 rounded-2xl border border-[#315C38]/12 space-y-3">
            <h3 className="text-lg font-bold text-[#1E241F] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#315C38]" />
              {t("Product Overview", "ภาพรวมผลิตภัณฑ์")}
            </h3>
            <p className="text-xs sm:text-sm text-[#547A3F] leading-relaxed">
              {product.description}
            </p>
            <div className="pt-2 text-xs text-[#1E241F] font-semibold space-y-1">
              <div>• Origin: {product.origin}</div>
              <div>• Grade Standard: {product.grade || "Export Standard"}</div>
              <div>• Consistency: Monitored moisture content</div>
            </div>
          </div>

          {/* Card 2: Packaging Options */}
          <div className="bg-[#FCFBF7] p-6 rounded-2xl border border-[#315C38]/12 space-y-3">
            <h3 className="text-lg font-bold text-[#1E241F] flex items-center gap-2">
              <Package className="w-5 h-5 text-[#315C38]" />
              {t("Packaging & Shipping Formats", "รูปแบบบรรจุภัณฑ์และการจัดส่ง")}
            </h3>
            <p className="text-xs text-[#547A3F]">
              Configured for international ocean container freight and retail display:
            </p>
            <ul className="space-y-1.5 text-xs text-[#1E241F]">
              {product.exportPackagingOptions.map((opt, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                  <span>{opt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Storage & Logistics */}
          <div className="bg-[#FCFBF7] p-6 rounded-2xl border border-[#315C38]/12 space-y-3">
            <h3 className="text-lg font-bold text-[#1E241F] flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-[#315C38]" />
              {t("Storage & Handling", "การเก็บรักษาและโลจิสติกส์")}
            </h3>
            <div className="space-y-2 text-xs text-[#547A3F]">
              <div>
                <strong className="text-[#1E241F] block">Storage Conditions:</strong>
                {product.storageConditions}
              </div>
              <div>
                <strong className="text-[#1E241F] block">Guaranteed Shelf Life:</strong>
                {product.shelfLife}
              </div>
              <div>
                <strong className="text-[#1E241F] block">Freight Term Options:</strong>
                FOB Bangkok / CIF Destination Port
              </div>
            </div>
          </div>
        </div>

        {/* "You May Also Like" Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-12 border-t border-[#315C38]/15 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#547A3F]">
                  {t("Related Offerings", "สินค้าที่เกี่ยวข้อง")}
                </div>
                <h3 className="text-2xl font-bold text-[#1E241F]">
                  {t("You May Also Sourcing", "ผลิตภัณฑ์อื่นๆ ในหมวดเดียวกัน")}
                </h3>
              </div>
              <Link
                href={`/products?category=${product.categorySlug}`}
                className="text-xs font-bold text-[#315C38] hover:text-[#C9A24A] transition-colors"
              >
                View all {product.category} →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
