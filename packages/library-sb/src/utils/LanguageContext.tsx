import { useState, createContext } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

interface LanguageProps {
  children: ReactNode;
  className: string;
}

interface LanguageContextProps {
  language?: string;
  setLanguage?: Dispatch<SetStateAction<string>>;
}

const LanguageContext = createContext<LanguageContextProps>({});

function LanguageProvider({ children, className }: LanguageProps) {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'ENG');

  return (
    <div className={className}>
      <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
    </div>
  );
}

export { LanguageContext, LanguageProvider };
