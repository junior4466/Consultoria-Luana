import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, GraduationCap } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export const Authority: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 mb-12 lg:mb-0"
          >
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/images/luana.png" 
                  alt="Luana Andrade" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-6 glass p-4 sm:p-6 rounded-2xl shadow-xl border border-brand-primary/20">
                <p className="text-3xl sm:text-4xl font-serif font-bold text-brand-primary">800+</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">{t('authority.stats_label')}</p>
              </div>
            </div>
          </motion.div>
          
          <div className="w-full lg:w-2/3">
            <h2 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">{t('authority.badge')}</h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight text-stone-900">{t('authority.title')}</h3>
            
            <div className="prose prose-lg text-stone-600 mb-10 font-light leading-relaxed">
              <p>
                {t('authority.p1')}
              </p>
              <p>
                <Trans 
                  i18nKey="authority.p2"
                  components={[<strong />]}
                />
              </p>
              <p>
                {t('authority.p3')}
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { name: t('hero.course1'), icon: <GraduationCap size={20} /> },
                  { name: t('hero.course2'), icon: <Award size={20} /> },
                  { name: t('hero.course3'), icon: <BookOpen size={20} /> },
                  { name: t('hero.course4'), icon: <BookOpen size={20} /> }
                ].map((course, i) => (
                  <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mx-auto mb-3">
                      {course.icon}
                    </div>
                    <p className="font-bold text-stone-900 text-xs sm:text-sm">{course.name}</p>
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-stone-100">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-4">{t('authority.inst_label')}</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "UECE", "UFC", "Unichristus", "Estácio", "PUCRS", 
                    "FGV-EAESP", "FCMSCSP", "PUC-Rio", "PUCPR"
                  ].map((inst, i) => (
                    <span key={i} className="px-3 py-1.5 bg-stone-50 text-stone-600 rounded-lg text-xs font-semibold border border-stone-200">
                      {inst}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 bg-brand-primary/5 text-brand-primary rounded-lg text-xs font-bold border border-brand-primary/10">
                    {t('authority.more')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
