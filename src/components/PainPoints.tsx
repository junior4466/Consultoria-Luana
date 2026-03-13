import React from 'react';
import { motion } from 'motion/react';
import { XCircle } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export const PainPoints: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="pain-points" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12 leading-tight">
            <Trans 
              i18nKey="pain.title"
              components={[<span className="text-red-600 italic" />]}
            />
          </h2>
          
          <div className="space-y-6 text-left max-w-2xl mx-auto">
            {[
              t('pain.q1'),
              t('pain.q2'),
              t('pain.q3'),
              t('pain.q4'),
              t('pain.q5')
            ].map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-stone-50 transition-colors"
              >
                <div className="mt-1 text-red-500">
                  <XCircle size={20} />
                </div>
                <p className="text-lg text-stone-700">{point}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 relative"
          >
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-brand-primary/5 blur-3xl rounded-full -z-10 transform scale-90" />
            
            <div className="bg-white border border-stone-100 p-8 sm:p-12 md:p-20 rounded-[2.5rem] sm:rounded-[3rem] shadow-xl shadow-stone-200/40 text-center relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-primary/20 rounded-b-full" />
              
              <span className="inline-block px-5 py-2 bg-brand-primary/5 text-brand-primary text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-10">
                {t('pain.diag_badge')}
              </span>
              
              <h3 className="text-xl sm:text-2xl md:text-4xl font-serif text-stone-900 leading-[1.4] max-w-3xl mx-auto">
                <Trans 
                  i18nKey="pain.diag_text"
                  components={[
                    <span className="italic text-stone-500" />,
                    <span className="text-brand-primary font-bold" />
                  ]}
                />
              </h3>
              
              <div className="mt-12 flex justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
