"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Import translations
import enTranslations from "../translations/en.json";
import itTranslations from "../translations/it.json";
import deTranslations from "../translations/de.json";

type Translations = typeof enTranslations;
type Locale = "en" | "it" | "de";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
  tObject: (key: string) => Record<string, any>;
}

const translations: Record<Locale, Translations> = {
  en: enTranslations,
  it: itTranslations,
  de: deTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Initialize locale from localStorage
  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale && ["en", "it", "de"].includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  // Translation function for simple strings
  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[locale];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === "string" ? value : key;
  };

  // Translation function for arrays
  const tArray = (key: string): string[] => {
    const keys = key.split(".");
    let value: any = translations[locale];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return []; // Return empty array if translation not found
      }
    }

    return Array.isArray(value) ? value : [];
  };

  // Translation function for objects
  const tObject = (key: string): Record<string, any> => {
    const keys = key.split(".");
    let value: any = translations[locale];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return {}; // Return empty object if translation not found
      }
    }

    return typeof value === "object" && !Array.isArray(value) ? value : {};
  };

  const value: LanguageContextType = {
    locale,
    setLocale,
    t,
    tArray,
    tObject,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
