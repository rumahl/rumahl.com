'use client';
import {Languages} from 'lucide-react';
import {useLang, type Lang} from './language';

const labels: Record<Lang, string> = {en: 'English', de: 'Deutsch'};

export function LanguageSwitch() {
  const {lang, setLang} = useLang();
  return (
    <div className="footer-lang" role="group" aria-label="Language">
      <Languages size={15} aria-hidden="true" />
      {(Object.keys(labels) as Lang[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          data-active={lang === code}
        >
          {labels[code]}
        </button>
      ))}
    </div>
  );
}
