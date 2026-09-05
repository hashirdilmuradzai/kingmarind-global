"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { PRODUCTS } from "@/data/products";
import { useLanguage } from "@/components/common/LanguageContext";
import { FileText, Send, CheckCircle2, Package, Globe, Building2, User, Mail, Phone, ShieldCheck } from "lucide-react";

export default function QuotePage() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    phone: "",
    product: "Sweet Tamarind (All Grades)",
    quantity: "1 Full 20ft Container (FCL)",
    packagingRequirement: "Bulk Export Master Cartons (10kg / 20kg)",
    targetMarket: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="bg-[#FCFBF7] min-h-screen pt-24 pb-20">
      <section className="bg-[#1E241F] text-[#FCFBF7] py-20 relative overflow-hidden">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#C9A24A] text-xs font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              RFQ Portal
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {t("Request a Wholesale Quote", "ขอใบเสนอราคาค้าส่งและการส่งออก")}
            </h1>
            <p className="text-sm sm:text-base text-[#A9C39B] leading-relaxed max-w-2xl font-light">
              {t(
                "Submit your procurement specifications to receive an itemized FOB or CIF quotation with harvest timelines and container loading configurations.",
                "กรอกข้อมูลความต้องการเพื่อรับใบเสนอราคาและเงื่อนไขการจัดส่งที่ตรงกับข้อกำหนดทางธุรกิจของคุณ"
              )}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto bg-[#FCFBF7] rounded-3xl p-8 sm:p-12 border border-[#315C38]/15 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#315C38]/10 text-[#315C38] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold text-[#1E241F]">
                  {t("Wholesale RFQ Received", "ได้รับคำขอใบเสนอราคาเรียบร้อยแล้ว")}
                </h2>
                <p className="text-sm text-[#547A3F] max-w-md mx-auto leading-relaxed">
                  {t(
                    "Our export desk will prepare a quotation schedule based on your requested parameters and contact you within 1 business day.",
                    "ฝ่ายส่งออกจะจัดทำใบเสนอราคาพร้อมเงื่อนไขการส่งออกและติดต่อกลับโดยเร็วที่สุด"
                  )}
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-[#315C38] text-white rounded-lg font-bold text-xs hover:bg-[#25462B] transition-colors"
                  >
                    Submit Another RFQ
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#315C38]/10 pb-4 mb-2">
                  <h3 className="text-lg font-bold text-[#1E241F]">
                    Buyer & Company Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Michael Smith"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Tokyo Central Food Co."
                      className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="procurement@tokyofood.jp"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. Japan, Saudi Arabia, Germany"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+81 3 1234 5678"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                      Target Market / Destination Port
                    </label>
                    <input
                      type="text"
                      value={formData.targetMarket}
                      onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                      placeholder="e.g. Yokohama Port / Jebel Ali Port"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                    />
                  </div>
                </div>

                <div className="border-b border-[#315C38]/10 pb-4 pt-4 mb-2">
                  <h3 className="text-lg font-bold text-[#1E241F]">
                    Product & Volume Requirements
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                      Primary Product
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p.slug} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                      Estimated Volume
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                    >
                      <option value="Sample Order (Trial / Evaluation)">Sample Order (Trial / Evaluation)</option>
                      <option value="500 kg – 1,000 kg (LCL)">500 kg – 1,000 kg (LCL)</option>
                      <option value="1,000 kg – 5,000 kg (Palletized)">1,000 kg – 5,000 kg (Palletized)</option>
                      <option value="1 Full 20ft Container (FCL)">1 Full 20ft Container (FCL)</option>
                      <option value="1 Full 40ft High Cube Container">1 Full 40ft High Cube Container</option>
                      <option value="Contract Harvest Reservation">Contract Harvest Reservation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                      Packaging Spec
                    </label>
                    <select
                      value={formData.packagingRequirement}
                      onChange={(e) => setFormData({ ...formData, packagingRequirement: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                    >
                      <option value="Bulk Export Master Cartons (10kg / 20kg)">Bulk Master Cartons</option>
                      <option value="Standard Kingmarind Retail Pouches">Retail Pouches</option>
                      <option value="Food-Service Jars & Tubs">Jars & Tubs</option>
                      <option value="Private Label OEM Packaging">Private Label OEM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E241F] uppercase tracking-wider mb-1">
                    Special Inquiries & Specifications
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention custom grade requirements, specific moisture levels, or required delivery schedules..."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#315C38]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#315C38]"
                  />
                </div>

                <div className="p-4 bg-[#F7F3E8] rounded-2xl text-xs text-[#547A3F] leading-relaxed">
                  <strong>Notice:</strong> Wholesale pricing, minimum order quantities and shipping arrangements may vary by product and destination. Contact our team for current details.
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#315C38] hover:bg-[#25462B] text-white font-bold rounded-xl shadow-md text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting RFQ...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#C9A24A]" />
                      <span>{t("Request Quote", "ขอใบเสนอราคา")}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
