'use client';

import React, { FC, createContext, useState, useMemo, useCallback, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { Language } from '@/types/contexts';
import { locales, LocalStorageKey, messages } from '@/locales';

export const LanguageContext = createContext<Language>({
  language: locales.PL.value,
});

export const LanguageProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem(LocalStorageKey.SELECTED_LOCALE) || locales.PL.value,
  );

  useEffect(() => {
    if (navigator.language.toLowerCase().includes('pl')) {
      setLanguage(locales.PL.value);
    }
  }, []);

  const selectLanguage = useCallback((selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    localStorage.setItem(LocalStorageKey.SELECTED_LOCALE, selectedLanguage);
  }, []);

  const contextValue = useMemo(
    (): Language => ({
      language,
      selectLanguage,
    }),
    [language, selectLanguage],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      <IntlProvider locale={language} messages={messages[language]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
