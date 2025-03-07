import React, { createContext, useContext, useState, useEffect } from 'react';
import { RTL_LANGUAGES } from '../constants';

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [language, setLanguageState] = useState(() => 
    localStorage.getItem('language') || 'en'
  );
  
  const [currency, setCurrencyState] = useState(() => 
    localStorage.getItem('currency') || 'USD'
  );
  
  const [theme, setThemeState] = useState(() => 
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = RTL_LANGUAGES.includes(language) ? 'rtl' : 'ltr';
  }, [language]);

  useEffect(() => {
    localStorage.setItem('currency', currency);
  }, [currency]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const setLanguage = (lang) => {
    setLanguageState(lang);
  };

  const setCurrency = (curr) => {
    setCurrencyState(curr);
  };

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
  };

  return (
    <SettingsContext.Provider value={{
      language,
      setLanguage,
      currency,
      setCurrency,
      theme,
      setTheme
    }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
