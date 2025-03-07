import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import only English translations by default
import enTranslations from './locales/en.json';

const loadLanguageModule = async (language) => {
  try {
    const module = await import(`./locales/${language}.json`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load translations for ${language}:`, error);
    return null;
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations }
    },
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

// Function to change the language dynamically
export const changeLanguage = async (language) => {
  try {
    if (!i18n.hasResourceBundle(language, 'translation')) {
      const translations = await loadLanguageModule(language);
      if (translations) {
        i18n.addResourceBundle(language, 'translation', translations, true, true);
      }
    }
    await i18n.changeLanguage(language);
  } catch (error) {
    console.error('Error changing language:', error);
    await i18n.changeLanguage('en'); // Fallback to English
  }
};

// Load initial language
const currentLanguage = localStorage.getItem('language') || 'en';
if (currentLanguage !== 'en') {
  changeLanguage(currentLanguage);
}

export default i18n;
