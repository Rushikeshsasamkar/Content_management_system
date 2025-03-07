import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Function to dynamically load language files
const loadLanguageModule = async (language) => {
  try {
    const module = await import(`./locales/${language}.json`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load translations for ${language}:`, error);
    return {}; // Return an empty object to avoid crashes
  }
};

(async function initializeI18n() {
  const enTranslations = await loadLanguageModule('en');

  await i18n.use(initReactI18next).init({
    resources: {
      en: { translation: enTranslations }
    },
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

  // Load stored language if different from English
  const currentLanguage = localStorage.getItem('language') || 'en';
  if (currentLanguage !== 'en') {
    await changeLanguage(currentLanguage);
  }
})();

// Function to change language dynamically
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

export default i18n;
