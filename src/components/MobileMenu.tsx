import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onCtaClick: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onCtaClick }) => {
  const { t } = useTranslation();
  const menuLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.method'), href: '#method' },
    { name: t('nav.results'), href: '#testimonials' },
  ];

  const handleLinkClick = (href: string) => {
    onClose();
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-white/80 backdrop-blur-xl lg:hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-6 flex justify-between items-center border-b border-stone-100">
            <RouterLink to="/" onClick={onClose} className="text-xl font-serif font-bold text-stone-900">
              Luana <span className="text-brand-primary">Andrade</span>
            </RouterLink>
            <button 
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-900 transition-colors"
            >
              <X size={28} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-12 px-8 flex flex-col gap-8">
            {menuLinks.map((link, i) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => handleLinkClick(link.href)}
                className="text-3xl font-serif font-bold text-stone-900 text-left flex items-center justify-between group"
              >
                {link.name}
                <ArrowRight size={24} className="text-brand-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
              </motion.button>
            ))}
            
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => {
                onClose();
                onCtaClick();
              }}
              className="mt-4 bg-brand-primary text-white p-6 rounded-2xl text-lg font-bold shadow-xl shadow-brand-primary/20 flex items-center justify-between"
            >
              {t('nav.cta')}
              <ArrowRight size={20} />
            </motion.button>
          </div>

          {/* Footer Info */}
          <div className="p-8 border-t border-stone-100 bg-stone-50/50">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <a 
                  href="mailto:luanaandradeconsultoria@gmail.com" 
                  className="w-12 h-12 bg-white rounded-xl shadow-sm border border-stone-100 flex items-center justify-center text-stone-600 hover:text-brand-primary transition-colors"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="https://wa.me/5588981785656" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-xl shadow-sm border border-stone-100 flex items-center justify-center text-stone-600 hover:text-brand-primary transition-colors"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
              
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                  {t('footer.dev')} <span className="text-[#D4AF37] hover:text-stone-600 transition-colors duration-300 cursor-default">Jr. Abrantes</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
