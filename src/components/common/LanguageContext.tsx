"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "EN" | "TH";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (enText: string, thText?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start with "EN" to match server render — avoids hydration mismatch.
  // After mount, we apply the user's saved preference from localStorage.
  const [lang, setLangState] = useState<Language>("EN");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("kingmarind_lang");
      if (saved === "TH") {
        setLangState("TH");
      }
    } catch {
      // localStorage unavailable (e.g. private browsing restrictions)
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("kingmarind_lang", newLang);
    } catch {
      // ignore
    }
  };

  const t = (enText: string, thText?: string): string => {
    if (mounted && lang === "TH" && thText) {
      return thText;
    }
    return enText;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
