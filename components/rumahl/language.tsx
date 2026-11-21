'use client';
import {createContext, useCallback, useContext, useEffect, useState} from 'react';

export type Lang = 'en' | 'de';

type LanguageContextValue = {lang: Lang; setLang: (lang: Lang) => void};
const LanguageContext = createContext<LanguageContextValue>({lang: 'en', setLang: () => {}});

export function useLang() {
  return useContext(LanguageContext);
}

export function LanguageProvider({children}: {children: React.ReactNode}) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      let saved: string | null = null;
      try {
        saved = window.localStorage.getItem('rumahl-lang');
      } catch {
        saved = null;
      }
      if (saved === 'de' || saved === 'en') {
        setLangState(saved);
        document.documentElement.lang = saved;
      }
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem('rumahl-lang', next);
    } catch {
      /* private mode — ignore */
    }
    document.documentElement.lang = next;
  }, []);

  return <LanguageContext.Provider value={{lang, setLang}}>{children}</LanguageContext.Provider>;
}
