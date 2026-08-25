"use client";

import React, { useState } from "react";
import { useRfq } from "@/components/common/RfqContext";
import { useLanguage } from "@/components/common/LanguageContext";
import { PRODUCTS } from "@/data/products";
import { X, CheckCircle, Send } from "lucide-react";

export function QuoteModal() {
  const { isModalOpen, closeModal, activeProduct, activeSize, items, removeItem } = useRfq();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    country: "",
    phoneWhatsApp: "",
    selectedProductSlug: "",
    estimatedQuantity: "1,000 kg (1 Metric Ton)",
    packagingRequirement: "Standard Export Bulk Carton",
    targetMarket: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentSelectedSlug =
    formData.selectedProductSlug ||
    activeProduct?.slug ||
    (items.length > 0 && items[0]?.product ? items[0].product.slug : "");

  if (!isModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate high-reliability B2B submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FCFBF7] rounded-2xl shadow-2xl border border-[#315C38]/20 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#1E241F] text-[#FCFBF7] px-6 py-5 flex items-center justify-between border-b border-[#C9A24A]/30">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#C9A24A] font-bold">
              KINGMARIND CO., LTD. • EXPORT DESK
            </div>
            <h3 className="text-xl font-bold text-white mt-0.5">
              {t("Request a Wholesale Quote", "ขอใบเสนอราคาค้าส่งและการส่งออก")}
            </h3>
          </div>
          <button
            type="button"
            onClick={closeModal}
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-[#315C38]/10 text-[#315C38] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#1E241F]">
                {t("Inquiry Received", "ได้รับข้อมูลการสอบถามเรียบร้อยแล้ว")}
              </h4>
              <p className="text-[#547A3F] max-w-md mx-auto text-sm leading-relaxed">
                {t(
                  "Thank you for contacting Kingmarind Co., Ltd. Our international export team will review your specifications and respond with detailed wholesale pricing and logistic schedules within 1 business day.",
                  "ขอขอบพระคุณสำหรับการติดต่อ บริษัท คิงมารินด์ จำกัด ฝ่ายส่งออกจะตรวจสอบรายละเอียดและติดต่อกลับพร้อมใบเสนอราคาและกำหนดการจัดส่งโดยเร็วที่สุด"
                )}
              </p>
              <div className="p-4 bg-[#F7F3E8] rounded-xl border border-[#315C38]/15 text-xs text-[#1E241F] text-left max-w-md mx-auto space-y-1">
                <div><strong>Inquiry Target:</strong> {formData.selectedProductSlug ? PRODUCTS.find(p => p.slug === formData.selectedProductSlug)?.name : "Full Portfolio"}</div>
                <div><strong>Estimated Quantity:</strong> {formData.estimatedQuantity}</div>
                <div><strong>Contact Email:</strong> {formData.businessEmail}</div>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#315C38] text-white rounded-lg font-semibold hover:bg-[#25462B] transition-colors"
                >
                  {t("Close Window", "ปิดหน้าต่าง")}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Product selection banner if product active */}
              {activeProduct && (
                <div className="p-3.5 bg-[#F7F3E8] rounded-xl border border-[#315C38]/15 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#547A3F] tracking-wider">
                      Selected Product
                    </span>
                    <div className="font-bold text-[#1E241F] text-sm">
                      {activeProduct.name}
                    </div>
                    {activeSize && (
                      <span className="text-xs text-[#547A3F]">
                        Packaging size: {activeSize}
                      </span>
                    )}
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-[#315C38] text-white rounded-md font-medium">
                    {activeProduct.grade || "Export Grade"}
                  </span>
                </div>
              )}

              {/* Items in quote basket if multiple */}
              {items.length > 1 && !activeProduct && (
                <div className="p-3 bg-[#F7F3E8] rounded-xl border border-[#315C38]/15 space-y-2">
                  <div className="text-xs font-bold text-[#315C38]">
                    Selected Items for RFQ ({items.length}):
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((it) => (
                      <span
                        key={it.product.id}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#315C38]/20 rounded-md text-xs text-[#1E241F]"
                      >
                        {it.product.name}
                        <button
                          type="button"
                          onClick={() => removeItem(it.product.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                    {t("Full Name", "ชื่อ-นามสกุล")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Alexander Weber"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                    {t("Company Name", "ชื่อบริษัท")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Global Foods Trading Ltd."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                    {t("Business Email", "อีเมลติดต่อ")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                    placeholder="buyer@company.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                    {t("Country / Territory", "ประเทศ / ภูมิภาค")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. United Arab Emirates, Japan, Germany"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                    {t("Phone / WhatsApp", "เบอร์โทรศัพท์ / WhatsApp")}
                  </label>
                  <input
                    type="text"
                    value={formData.phoneWhatsApp}
                    onChange={(e) => setFormData({ ...formData, phoneWhatsApp: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                    {t("Product Category / Item", "กลุ่มสินค้าที่สนใจ")}
                  </label>
                  <select
                    value={currentSelectedSlug}
                    onChange={(e) => setFormData({ ...formData, selectedProductSlug: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                  >
                    <option value="">-- All Products / Mixed Inquiry --</option>
                    {PRODUCTS.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.name} ({p.category})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                    {t("Estimated Order Volume", "ปริมาณการสั่งซื้อโดยประมาณ")}
                  </label>
                  <select
                    value={formData.estimatedQuantity}
                    onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                  >
                    <option value="Sample Order (Trial / Evaluation)">Sample Order (Trial / Evaluation)</option>
                    <option value="500 kg – 1,000 kg (LCL)">500 kg – 1,000 kg (LCL)</option>
                    <option value="1,000 kg – 5,000 kg (Palletized)">1,000 kg – 5,000 kg (Palletized)</option>
                    <option value="1 Full 20ft Container (FCL)">1 Full 20ft Container (FCL)</option>
                    <option value="1 Full 40ft High Cube Container">1 Full 40ft High Cube Container</option>
                    <option value="Continuous Monthly Contract">Continuous Monthly Contract</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                    {t("Packaging Requirement", "รูปแบบบรรจุภัณฑ์")}
                  </label>
                  <select
                    value={formData.packagingRequirement}
                    onChange={(e) => setFormData({ ...formData, packagingRequirement: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                  >
                    <option value="Standard Kingmarind Brand Packaging">Standard Kingmarind Brand Packaging</option>
                    <option value="Bulk Export Master Cartons (10kg / 20kg)">Bulk Export Master Cartons (10kg / 20kg)</option>
                    <option value="Private Label / OEM Custom Packaging">Private Label / OEM Custom Packaging</option>
                    <option value="Retail Display Jars / Pouches">Retail Display Jars / Pouches</option>
                    <option value="Custom Specification">Custom Specification</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                  {t("Order Notes & Specific Requirements", "รายละเอียดเพิ่มเติม")}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify destination port (e.g. CIF Jebel Ali, FOB Bangkok), grade preferences, or specific inquiries..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                />
              </div>

              <div className="p-3 bg-[#F7F3E8] rounded-lg text-[11px] text-[#547A3F] leading-relaxed">
                <strong>Note:</strong> Wholesale pricing, minimum order quantities (MOQ), and shipping arrangements vary by product type and destination market. Our team provides FOB/CIF quotation schedules upon reviewing your inquiry.
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-2.5 text-sm font-semibold text-[#1E241F]/70 hover:text-[#1E241F] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-2.5 bg-[#315C38] hover:bg-[#25462B] text-white font-semibold rounded-lg shadow-sm text-sm transition-all flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#C9A24A]" />
                      <span>{t("Send Wholesale Inquiry", "ส่งข้อความสอบถาม")}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
