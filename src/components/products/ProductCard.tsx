"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useLanguage } from "@/components/common/LanguageContext";
import { useRfq } from "@/components/common/RfqContext";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FileText, Eye, Package, Sparkles } from "lucide-react";

interface ProductCardProps {
  product: Product;
  showWholesaleNotice?: boolean;
}

export function ProductCard({ product, showWholesaleNotice = true }: ProductCardProps) {
  const { t } = useLanguage();
  const { openModal } = useRfq();

  return (
    <div className="group bg-[#FCFBF7] rounded-2xl overflow-hidden border border-[#315C38]/15 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-[#F7F3E8]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Category & Grade Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          <Badge variant="dark" size="sm">
            {product.category}
          </Badge>
          {product.grade && (
            <Badge variant="gold" size="sm">
              {product.grade}
            </Badge>
          )}
        </div>

        {/* Origin Badge */}
        <div className="absolute bottom-3 left-3 text-[11px] font-mono text-[#FCFBF7]/90 font-medium tracking-wide">
          {product.origin}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="text-[11px] font-bold text-[#547A3F] uppercase tracking-wider">
            {product.type}
          </div>

          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="text-lg sm:text-xl font-bold text-[#1E241F] group-hover:text-[#315C38] transition-colors leading-snug line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-[#547A3F] line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Flavor note */}
          <div className="text-[11px] text-[#76543A] font-medium pt-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A]" />
            <span className="line-clamp-1">{product.flavor}</span>
          </div>
        </div>

        {/* Packaging Options */}
        <div className="pt-3 border-t border-[#315C38]/10 space-y-2">
          <div className="flex items-center justify-between text-xs text-[#547A3F]">
            <span className="font-semibold flex items-center gap-1">
              <Package className="w-3.5 h-3.5 text-[#315C38]" /> Available Sizes:
            </span>
          </div>

          <div className="flex flex-wrap gap-1">
            {product.sizes.map((s, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2 py-0.5 rounded bg-[#F7F3E8] text-[#1E241F] font-mono border border-[#315C38]/10"
              >
                {s.size}
              </span>
            ))}
          </div>

          {/* B2B Wholesale Notice */}
          {showWholesaleNotice && (
            <div className="text-[11px] font-semibold text-[#315C38] bg-[#315C38]/8 px-2.5 py-1 rounded-md text-center">
              {t("Wholesale pricing available on request", "ราคาค้าส่งตามปริมาณการสั่งซื้อ")}
            </div>
          )}
        </div>

        {/* Dual Actions */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#315C38]/10">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg border border-[#315C38]/25 text-[#315C38] hover:bg-[#315C38]/5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{t("View Details", "รายละเอียด")}</span>
          </Link>

          <button
            type="button"
            onClick={() => openModal(product)}
            className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg bg-[#315C38] hover:bg-[#25462B] text-white transition-colors shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>{t("Request Quote", "ขอใบเสนอราคา")}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
