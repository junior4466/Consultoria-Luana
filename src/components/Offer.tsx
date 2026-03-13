import React from 'react';
import { motion } from 'motion/react';
import { Check, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface OfferProps {
  onCtaClick: () => void;
}

export const Offer: React.FC<OfferProps> = ({ onCtaClick }) => {
  const { t } = useTranslation();

  return (
    <section id="offer" className="py-24 bg-brand-dark text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">{t('offer.title')}</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            {t('offer.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plan 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-stone-800/50 p-10 rounded-3xl border border-stone-700 hover:border-brand-primary transition-all backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-2">{t('offer.plan1_title')}</h3>
            <p className="text-stone-400 mb-6">{t('offer.plan1_subtitle')}</p>
            
            <ul className="space-y-4 mb-10">
              {[
                t('offer.plan1_item1'),
                t('offer.plan1_item2'),
                t('offer.plan1_item3'),
                t('offer.plan1_item4'),
                t('offer.plan1_item5')
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-brand-primary/20 p-1 rounded-full">
                    <Check size={16} className="text-brand-primary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={onCtaClick}
              className="block w-full py-4 bg-brand-primary hover:bg-brand-dark text-white text-center font-bold rounded-xl transition-all shadow-lg shadow-brand-primary/20"
            >
              {t('offer.plan1_cta')}
            </button>
          </motion.div>

          {/* Plan 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white text-stone-900 p-10 rounded-3xl border-4 border-brand-primary relative shadow-2xl"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              {t('offer.plan2_badge')}
            </div>
            
            <h3 className="text-2xl font-bold mb-2">{t('offer.plan2_title')}</h3>
            <p className="text-stone-500 mb-6">{t('offer.plan2_subtitle')}</p>
            
            <ul className="space-y-4 mb-10">
              {[
                t('offer.plan2_item1'),
                t('offer.plan2_item2'),
                t('offer.plan2_item3'),
                t('offer.plan2_item4'),
                t('offer.plan2_item5')
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-brand-primary/10 p-1 rounded-full">
                    <Check size={16} className="text-brand-primary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={onCtaClick}
              className="block w-full py-4 bg-brand-dark hover:bg-black text-white text-center font-bold rounded-xl transition-all shadow-xl"
            >
              {t('offer.plan2_cta')}
            </button>
          </motion.div>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-4 bg-stone-800 rounded-2xl border border-stone-700 w-full max-w-xl">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-green-500/20">
              <MessageCircle size={24} />
            </div>
            <div className="text-center sm:text-left flex-1">
              <p className="font-bold text-lg">{t('offer.help_title')}</p>
              <p className="text-sm text-stone-400">{t('offer.help_subtitle')}</p>
            </div>
            <a 
              href="https://wa.me/5588981785656" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-stone-700 hover:bg-stone-600 rounded-xl text-sm font-bold transition-all text-center"
            >
              {t('offer.help_cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
