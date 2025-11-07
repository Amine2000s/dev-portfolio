import { createContext, useContext, useState, ReactNode } from "react";
import enTranslations from "../translations/en.json";
import frTranslations from "../translations/fr.json";
import deTranslations from "../translations/de.json";

export type Language = "en" | "fr" | "de";

const translations = {
  en: enTranslations,
  fr: frTranslations,
  de: deTranslations,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, index?: number) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("portfolio-language");
    return (saved as Language) || "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio-language", lang);
  };

  const t = (key: string, index?: number): any => {
    try {
      const keys = key.split(".");
      let value: any = translations[language];
      for (const k of keys) {
        value = value?.[k];
      }
      if (index !== undefined && Array.isArray(value)) {
        return value[index] || key;
      }
      return value || key;
    } catch (error) {
      console.error(`Translation error for key "${key}":`, error);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

