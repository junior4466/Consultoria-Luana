import React from 'react';
import { motion } from 'motion/react';
import { Target, Calendar, BarChart3, Brain, Clock, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Solution: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <Calendar className="text-brand-primary" />,
      title: t('method.step1_title'),
      description: t('method.step1_desc')
    },
    {
      icon: <BookOpen className="text-brand-primary" />,
      title: t('method.step2_title'),
      description: t('method.step2_desc')
    },
    {
      icon: <Brain className="text-brand-primary" />,
      title: t('method.step3_title'),
      description: t('method.step3_desc')
    },
    {
      icon: <Target className="text-brand-primary" />,
      title: t('method.step4_title'),
      description: t('method.step4_desc')
    },
    {
      icon: <Clock className="text-brand-primary" />,
      title: t('method.step5_title'),
      description: t('method.step5_desc')
    },
    {
      icon: <BarChart3 className="text-brand-primary" />,
      title: t('method.step6_title'),
      description: t('method.step6_desc')
    }
  ];

  return (
    <section id="method" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">{t('method.badge')}</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t('method.title')}</h3>
          <p className="text-lg text-stone-600">
            {t('method.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-stone-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
