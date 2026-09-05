"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/data/company";
import { useLanguage } from "@/components/common/LanguageContext";
<<<<<<< HEAD
import {
  MapPin,
  Phone,
  Mail,
  UserCheck,
  FileCheck2,
  ArrowRight,
  Clock,
  MessageSquare,
} from "lucide-react";
=======
import { MapPin, Phone, Mail, UserCheck, FileCheck2, ArrowRight, Clock, MessageSquare } from "lucide-react";
>>>>>>> c75563701e7c0e7d06b8a5d48be340d26a9955b7

export function ContactPreview() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-[#FCFBF7] relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Official Corporate Credentials */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-[#C9A24A]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#547A3F]">
<<<<<<< HEAD
                {t(
                  "Official Corporate Information",
                  "ข้อมูลการติดต่อและนิติบุคคล",
                )}
=======
                {t("Official Corporate Information", "ข้อมูลการติดต่อและนิติบุคคล")}
>>>>>>> c75563701e7c0e7d06b8a5d48be340d26a9955b7
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E241F] tracking-tight leading-tight">
<<<<<<< HEAD
              {t(
                "Direct Communication with Kingmarind",
                "ติดต่อประสานงานโดยตรงกับสำนักงานใหญ่",
              )}
=======
              {t("Direct Communication with Kingmarind", "ติดต่อประสานงานโดยตรงกับสำนักงานใหญ่")}
>>>>>>> c75563701e7c0e7d06b8a5d48be340d26a9955b7
            </h2>

            <p className="text-sm sm:text-base text-[#547A3F] leading-relaxed">
              {t(
                "Our management team is based at our headquarters in Lom Sak, Phetchabun. We welcome direct inquiries from domestic wholesalers and international business partners.",
<<<<<<< HEAD
                "สำนักงานและศูนย์คัดสรรตั้งอยู่ ณ อำเภอหล่มสัก จังหวัดเพชรบูรณ์ พร้อมให้ข้อมูลและต้อนรับคู่ค้าทางธุรกิจทุกท่าน",
=======
                "สำนักงานและศูนย์คัดสรรตั้งอยู่ ณ อำเภอหล่มสัก จังหวัดเพชรบูรณ์ พร้อมให้ข้อมูลและต้อนรับคู่ค้าทางธุรกิจทุกท่าน"
>>>>>>> c75563701e7c0e7d06b8a5d48be340d26a9955b7
              )}
            </p>

            <div className="space-y-4 pt-2">
              {/* Address Card */}
              <div className="p-4 rounded-xl bg-[#F7F3E8] border border-[#315C38]/12 flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#315C38] shrink-0 mt-0.5" />
                <div>
<<<<<<< HEAD
                  <div className="text-xs font-bold text-[#1E241F] uppercase tracking-wider">
                    Registered Address
                  </div>
                  <div className="text-sm font-semibold text-[#1E241F]">
                    {COMPANY.name}
                  </div>
                  <div className="text-xs text-[#547A3F] mt-0.5">
                    {COMPANY.location.fullAddress}
                  </div>
=======
                  <div className="text-xs font-bold text-[#1E241F] uppercase tracking-wider">Registered Address</div>
                  <div className="text-sm font-semibold text-[#1E241F]">{COMPANY.name}</div>
                  <div className="text-xs text-[#547A3F] mt-0.5">{COMPANY.location.fullAddress}</div>
>>>>>>> c75563701e7c0e7d06b8a5d48be340d26a9955b7
                </div>
              </div>

              {/* MD & Tax ID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#F7F3E8] border border-[#315C38]/12 flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-[#315C38] shrink-0 mt-0.5" />
                  <div>
<<<<<<< HEAD
                    <div className="text-[11px] font-bold text-[#547A3F] uppercase tracking-wider">
                      Managing Director
                    </div>
                    <div className="text-xs font-bold text-[#1E241F]">
                      {COMPANY.managingDirector.name}
                    </div>
                    <div className="text-[11px] text-[#76543A]">
                      ({COMPANY.managingDirector.shortName})
                    </div>
=======
                    <div className="text-[11px] font-bold text-[#547A3F] uppercase tracking-wider">Managing Director</div>
                    <div className="text-xs font-bold text-[#1E241F]">{COMPANY.managingDirector.name}</div>
                    <div className="text-[11px] text-[#76543A]">({COMPANY.managingDirector.shortName})</div>
>>>>>>> c75563701e7c0e7d06b8a5d48be340d26a9955b7
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F3E8] border border-[#315C38]/12 flex items-start gap-3">
                  <FileCheck2 className="w-5 h-5 text-[#315C38] shrink-0 mt-0.5" />
                  <div>
<<<<<<< HEAD
                    <div className="text-[11px] font-bold text-[#547A3F] uppercase tracking-wider">
                      Tax Registration ID
                    </div>
                    <div className="text-xs font-mono font-bold text-[#1E241F]">
                      {COMPANY.taxId}
                    </div>
                    <div className="text-[11px] text-[#547A3F]">
                      Thailand Commercial Reg.
                    </div>
=======
                    <div className="text-[11px] font-bold text-[#547A3F] uppercase tracking-wider">Tax Registration ID</div>
                    <div className="text-xs font-mono font-bold text-[#1E241F]">{COMPANY.taxId}</div>
                    <div className="text-[11px] text-[#547A3F]">Thailand Commercial Reg.</div>
>>>>>>> c75563701e7c0e7d06b8a5d48be340d26a9955b7
                  </div>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${COMPANY.contact.phone}`}
                  className="p-4 rounded-xl bg-[#F7F3E8] border border-[#315C38]/12 hover:border-[#315C38]/40 transition-colors flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 text-[#315C38] shrink-0" />
                  <div>
<<<<<<< HEAD
                    <div className="text-[10px] font-bold text-[#547A3F] uppercase tracking-wider">
                      Telephone
                    </div>
                    <div className="text-xs font-bold text-[#1E241F]">
                      {COMPANY.contact.phoneFormatted}
                    </div>
=======
                    <div className="text-[10px] font-bold text-[#547A3F] uppercase tracking-wider">Telephone</div>
                    <div className="text-xs font-bold text-[#1E241F]">{COMPANY.contact.phoneFormatted}</div>
>>>>>>> c75563701e7c0e7d06b8a5d48be340d26a9955b7
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="p-4 rounded-xl bg-[#F7F3E8] border border-[#315C38]/12 hover:border-[#315C38]/40 transition-colors flex items-center gap-3"
                >
                  <Mail className="w-5 h-5 text-[#315C38] shrink-0" />
                  <div>
<<<<<<< HEAD
                    <div className="text-[10px] font-bold text-[#547A3F] uppercase tracking-wider">
                      Email Inquiry
                    </div>
                    <div className="text-xs font-bold text-[#1E241F]">
                      {COMPANY.contact.email}
                    </div>
=======
                    <div className="text-[10px] font-bold text-[#547A3F] uppercase tracking-wider">Email Inquiry</div>
                    <div className="text-xs font-bold text-[#1E241F]">{COMPANY.contact.email}</div>
>>>>>>> c75563701e7c0e7d06b8a5d48be340d26a9955b7
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#315C38] hover:text-[#C9A24A] transition-colors"
              >
<<<<<<< HEAD
                <span>
                  {t(
                    "View Full Contact & Location Details",
                    "ดูหน้าติดต่อและแผนที่ฉบับเต็ม",
                  )}
                </span>
=======
                <span>{t("View Full Contact & Location Details", "ดูหน้าติดต่อและแผนที่ฉบับเต็ม")}</span>
>>>>>>> c75563701e7c0e7d06b8a5d48be340d26a9955b7
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

<<<<<<< HEAD
          {/* Right Column: Google Maps Location */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#315C38]/20 bg-[#F7F3E8] h-96 sm:h-[420px]">
              <iframe
                title="Kingmarind Co., Ltd. location"
                src={COMPANY.location.mapsEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <a
                href={COMPANY.location.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-bold text-[#1E241F] shadow-lg transition-colors hover:text-[#315C38]"
              >
                <MapPin className="h-4 w-4 text-[#315C38]" />
                Open in Google Maps
              </a>
=======
          {/* Right Column: Google Maps Style Visual Display */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#315C38]/20 bg-[#F7F3E8] h-96 sm:h-[420px] flex flex-col justify-between p-6">
              {/* Stylized Topographic Map Texture */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#315C38_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10 flex items-center justify-between">
                <div className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm border border-[#315C38]/20 text-xs font-bold text-[#1E241F] shadow-xs">
                  Phetchabun Province, Thailand
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-[#315C38] text-white text-xs font-mono font-semibold shadow-xs">
                  67110 Thailand
                </div>
              </div>
              {/* Pin indicator */}
              <div className="relative z-10 self-center flex flex-col items-center my-auto">
                <div className="w-14 h-14 rounded-full bg-[#315C38] text-white flex items-center justify-center shadow-2xl animate-pulse">
                  <MapPin className="w-7 h-7 text-[#C9A24A]" />
                </div>
                <div className="mt-3 px-4 py-2 rounded-xl bg-white shadow-xl border border-[#315C38]/20 text-center">
                  <div className="text-xs font-bold text-[#1E241F]">KINGMARIND CO., LTD.</div>
                  <div className="text-[11px] text-[#547A3F]">Lom Sak, Phetchabun</div>
                </div>
              </div>

              {/* Coordinates info */}
              <div className="relative z-10 bg-white/95 backdrop-blur-sm p-3.5 rounded-xl border border-[#315C38]/15 flex items-center justify-between text-xs text-[#547A3F]">
                <div>
                  <span className="font-bold text-[#1E241F]">Location: </span>
                  Nam Hia, Lom Sak District
                </div>
                <div className="font-mono text-[11px]">
                  Phetchabun 67110
                </div>
              </div>
>>>>>>> c75563701e7c0e7d06b8a5d48be340d26a9955b7
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
