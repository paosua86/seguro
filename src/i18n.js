import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// Los recursos de idioma
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Idioma inicial
    fallbackLng: 'en', // Cuando no se encuentre el idioma actual

    interpolation: {
      escapeValue: false, // React ya escapa valores por defecto
    },
  });

export default i18n;
