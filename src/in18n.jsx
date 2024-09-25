import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translatEn from "./locale/en/translation.json";
import translatAr from "./locale/ar/translation.json";

// Store the selected language in local storage
const savedLanguage = localStorage.getItem("i18nextLng") || "ar";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translatEn },
    ar: { translation: translatAr },
  },
  lng: savedLanguage,
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
