import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: t('testimonials.t1_name'),
      result: t('testimonials.t1_result'),
      text: t('testimonials.t1_text'),
      avatar: "/images/Mariana Silva.png"
    },
    {
      name: t('testimonials.t2_name'),
      result: t('testimonials.t2_result'),
      text: t('testimonials.t2_text'),
      avatar: "/images/João Pedro.png"
    },
    {
      name: t('testimonials.t3_name'),
      result: t('testimonials.t3_result'),
      text: t('testimonials.t3_text'),
      avatar: "/images/Ana Beatriz.png"
    },
    {
      name: t('testimonials.t4_name'),
      result: t('testimonials.t4_result'),
      text: t('testimonials.t4_text'),
      avatar: "/images/Lucas Oliveira.png"
    },
    {
      name: t('testimonials.t5_name'),
      result: t('testimonials.t5_result'),
      text: t('testimonials.t5_text'),
      avatar: "/images/Carla Mendes.png"
    }
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">{t('testimonials.badge')}</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            <Trans 
              i18nKey="testimonials.title"
              components={[<span className="text-brand-primary italic" />]}
            />
          </h3>
          <p className="text-stone-600 max-w-xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden px-4 py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-stone-50 p-10 md:p-16 rounded-[2rem] relative shadow-sm border border-stone-100"
              >
                <Quote className="absolute top-10 right-10 text-brand-primary/10 w-20 h-20" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-brand-primary text-brand-primary" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-stone-700 italic mb-10 leading-relaxed relative z-10">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex items-center gap-6">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name} 
                    className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="text-lg font-bold text-stone-900">{testimonials[currentIndex].name}</p>
                    <p className="text-brand-primary font-semibold">{testimonials[currentIndex].result}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-4 rounded-full bg-white border border-stone-200 text-stone-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all shadow-sm"
              aria-label={t('nav.prev') || 'Anterior'}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="p-4 rounded-full bg-white border border-stone-200 text-stone-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all shadow-sm"
              aria-label={t('nav.next') || 'Próximo'}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? 'w-8 bg-brand-primary' : 'bg-stone-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
