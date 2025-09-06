"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const languages = [
    { code: "en", name: "English" },
    { code: "it", name: "Italiano" },
    { code: "de", name: "Deutsch" },
  ];

  return (
    <div className="relative">
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as "en" | "it" | "de")}
        className="appearance-none bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent transition-all duration-300 cursor-pointer"
      >
        {languages.map((lang) => (
          <option
            key={lang.code}
            value={lang.code}
            className="bg-[#284185] text-white py-2 px-3"
          >
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
