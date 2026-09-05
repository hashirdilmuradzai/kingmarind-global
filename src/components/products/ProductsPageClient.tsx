"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/products/ProductCard";
import { PRODUCTS, Product } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { useLanguage } from "@/components/common/LanguageContext";
import { useRfq } from "@/components/common/RfqContext";
import { Search, Filter, SlidersHorizontal, LayoutGrid, List, FileText, Check, X } from "lucide-react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const { t } = useLanguage();
  const { openModal } = useRfq();

  const [categoryOverride, setCategoryOverride] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFormat, setSelectedFormat] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const selectedCategory = categoryOverride ?? categoryParam;
  const setSelectedCategory = (cat: string) => setCategoryOverride(cat);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== "all" && product.categorySlug !== selectedCategory) {
        return false;
      }
      // Format filter
      if (selectedFormat !== "all" && product.format !== selectedFormat) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query);
        const matchDesc = product.description.toLowerCase().includes(query);
        const matchFlavor = product.flavor.toLowerCase().includes(query);
        const matchGrade = product.grade ? product.grade.toLowerCase().includes(query) : false;
        if (!matchName && !matchDesc && !matchFlavor && !matchGrade) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedFormat, searchQuery]);

  const formats = [
    { value: "all", label: "All Formats" },
    { value: "Pitted", label: "Seedless / Pitted" },
    { value: "Whole Pod", label: "Whole Pods" },
    { value: "Confectionery Snack", label: "Snack Confections" },
    { value: "Jar", label: "Jars & Containers" },
    { value: "Processed Paste", label: "Pastes & Purees" },
    { value: "Sealed Bag", label: "Barrier Bags" },
  ];

  return (
    <div className="bg-[#FCFBF7] min-h-screen pt-28 pb-24">
      {/* Editorial Page Header */}
      <div className="bg-[#F7F3E8] border-b border-[#315C38]/10 py-12 sm:py-16 mb-10">
        <Container>
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-[#C9A24A]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#547A3F]">
                {t("B2B Product Portfolio", "แคตตาล็อกสินค้าส่งออก")}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E241F] tracking-tight">
              {t("Explore Kingmarind Tamarind Collection", "ผลิตภัณฑ์มะขามและมะขามแปรรูป คิงมารินด์")}
            </h1>
            <p className="text-base text-[#547A3F] leading-relaxed">
              {t(
                "Browse all 32 commercial and export products categorized by processing method, format, and flavor profile. Wholesale pricing and container freight estimates provided on request.",
                "เลือกชมรายการสินค้าทั้งหมด 32 รายการ จัดหมวดหมู่ตามกรรมวิธีการแปรรูป รูปแบบบรรจุภัณฑ์ และเกรดคุณภาพ พร้อมรองรับการสั่งซื้อระดับตู้คอนเทนเนอร์"
              )}
            </p>
          </div>
        </Container>
      </div>

      <Container>
        {/* Controls Bar: Search & Category Chips */}
        <div className="space-y-6 mb-10">
          {/* Top Row: Search & Filters */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#547A3F]" />
              <input
                type="text"
                placeholder={t("Search by product name, grade, flavor...", "ค้นหาชื่อสินค้า เกรด รสชาติ...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Right Controls: Format filter + View Mode */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#547A3F]">
                <Filter className="w-3.5 h-3.5 text-[#315C38]" />
                <span>Format:</span>
              </div>
              <select
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="px-3 py-2 bg-white border border-[#315C38]/20 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#315C38]"
              >
                {formats.map((fmt) => (
                  <option key={fmt.value} value={fmt.value}>
                    {fmt.label}
                  </option>
                ))}
              </select>

              {/* View Toggle */}
              <div className="hidden sm:flex items-center border border-[#315C38]/20 rounded-xl p-1 bg-white">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === "grid"
                      ? "bg-[#315C38] text-white"
                      : "text-[#547A3F] hover:bg-[#F7F3E8]"
                  }`}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === "list"
                      ? "bg-[#315C38] text-white"
                      : "text-[#547A3F] hover:bg-[#F7F3E8]"
                  }`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Chips Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-[#315C38] text-white shadow-xs"
                  : "bg-white text-[#1E241F] border border-[#315C38]/15 hover:bg-[#F7F3E8]"
              }`}
            >
              All Categories ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const count = PRODUCTS.filter((p) => p.categorySlug === cat.slug).length;
              const isSelected = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#315C38] text-white shadow-xs"
                      : "bg-white text-[#1E241F] border border-[#315C38]/15 hover:bg-[#F7F3E8]"
                  }`}
                >
                  {cat.title} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count & Active Category Info */}
        <div className="flex items-center justify-between pb-6 border-b border-[#315C38]/10 mb-8 text-xs text-[#547A3F]">
          <div>
            Showing <strong className="text-[#1E241F]">{filteredProducts.length}</strong> of{" "}
            <strong>{PRODUCTS.length}</strong> export products
            {selectedCategory !== "all" && (
              <span className="ml-2 font-semibold text-[#315C38]">
                in &ldquo;{CATEGORIES.find((c) => c.slug === selectedCategory)?.title}&rdquo;
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => openModal()}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#315C38] hover:text-[#C9A24A] transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Request Bulk Quotation for Multiple Items</span>
          </button>
        </div>

        {/* Product Grid or List View */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#F7F3E8] rounded-2xl border border-[#315C38]/10 space-y-3">
            <h3 className="text-lg font-bold text-[#1E241F]">No products match your criteria</h3>
            <p className="text-xs text-[#547A3F]">
              Try adjusting your search terms or selecting a different category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSelectedFormat("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-[#315C38] text-white rounded-lg text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* List View for detailed procurement comparison */
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#FCFBF7] rounded-2xl p-6 border border-[#315C38]/15 hover:border-[#315C38]/40 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#315C38] uppercase tracking-wider">
                      {product.category}
                    </span>
                    {product.grade && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#C9A24A]/20 text-[#8F6A1A] font-bold">
                        {product.grade}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#1E241F]">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#547A3F] max-w-2xl">
                    {product.shortDescription}
                  </p>
                  <div className="text-xs text-[#76543A] font-medium">
                    Flavor Profile: {product.flavor}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
                  <div className="text-right sm:mr-4">
                    <div className="text-[11px] text-[#547A3F]">Packaging Sizes:</div>
                    <div className="text-xs font-mono font-bold text-[#1E241F]">
                      {product.sizes.map((s) => s.size).join(", ")}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openModal(product)}
                    className="px-5 py-2.5 bg-[#315C38] text-white rounded-lg text-xs font-bold hover:bg-[#25462B] transition-colors flex items-center gap-2"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#C9A24A]" />
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export function ProductsPageClient() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center text-sm text-[#547A3F]">Loading Kingmarind Product Catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
