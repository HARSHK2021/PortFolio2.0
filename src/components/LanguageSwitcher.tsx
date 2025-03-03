import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 hover-effect">
        <Globe size={18} className="text-neon-green" />
        <span className="uppercase">{i18n.language}</span>
      </button>
      <div className="absolute right-0 mt-2 w-24 bg-dark-gray rounded-md shadow-lg overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top-right z-50">
        <button 
          onClick={() => changeLanguage('en')} 
          className={`block w-full text-left px-4 py-2 hover:bg-light-gray transition-colors ${i18n.language === 'en' ? 'text-neon-green' : 'text-white'}`}
        >
          English
        </button>
        <button 
          onClick={() => changeLanguage('es')} 
          className={`block w-full text-left px-4 py-2 hover:bg-light-gray transition-colors ${i18n.language === 'es' ? 'text-neon-green' : 'text-white'}`}
        >
          Español
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;