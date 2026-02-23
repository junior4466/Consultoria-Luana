import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-stone-100 transition-colors text-stone-600 font-medium text-sm"
      >
        <Globe size={18} />
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <span className="sm:hidden">{currentLanguage.flag}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsOpen(false)} 
            />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-stone-100 py-2 z-20 overflow-hidden"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-stone-50 ${
                    i18n.language === lang.code ? 'text-brand-primary font-bold bg-brand-primary/5' : 'text-stone-600'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  {lang.name}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
