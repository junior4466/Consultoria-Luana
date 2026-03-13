import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, GraduationCap, Mail } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#FDFCFB]">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-brand-primary/5 lg:-skew-x-12 transform lg:translate-x-1/4 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-dark text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6">
            <GraduationCap size={14} />
            <span>{t('hero.badge')}</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-8 text-stone-900">
            <Trans 
              i18nKey="hero.title"
              components={[<span className="text-brand-primary italic" />]}
            />
          </h1>
          
          <p className="text-lg sm:text-xl text-stone-600 mb-12 leading-relaxed max-w-2xl font-light">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <button 
              onClick={onCtaClick}
              className="px-8 sm:px-10 py-5 bg-brand-primary hover:bg-brand-dark text-white rounded-xl font-bold text-lg sm:text-xl transition-all shadow-xl shadow-brand-primary/20 text-center"
            >
              {t('hero.cta_primary')}
            </button>
            <a 
              href="#about"
              className="px-8 sm:px-10 py-5 border-2 border-stone-200 hover:border-brand-primary text-stone-700 rounded-xl font-bold text-lg sm:text-xl transition-all text-center bg-white/50 backdrop-blur-sm"
            >
              {t('hero.cta_secondary')}
            </a>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-xs sm:text-sm text-stone-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-brand-primary" />
              <span>{t('hero.feature1')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-brand-primary" />
              <span>{t('hero.feature2')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
