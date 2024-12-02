import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import en from "./assets/translations/en";
import tr from "./assets/translations/tr";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        supportedLngs: ["en", "tr"],
        resources: {
            en: { translation: en },
            tr: { translation: tr },
        },
        interpolation: { escapeValue: false },
    });

export default i18next;
