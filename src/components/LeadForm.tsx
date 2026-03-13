import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Send, Loader2 } from 'lucide-react';
import { LeadFormData } from '../types';
import { useTranslation } from 'react-i18next';

interface LeadFormProps {
  onSubmitSuccess: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onSubmitSuccess }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    educationLevel: '',
    desiredCourse: 'Medicina',
    observations: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fallbackUrl = 'https://script.google.com/macros/s/AKfycbxXYVyMpB--WT-kihDIZ-Y4IUIYvflRzpaneEFz4YgANOw9QsSPgR__xnH9XrYuaT8plw/exec';
    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL || fallbackUrl;
    
    try {
      const payload = JSON.stringify({
        ...formData,
        action: 'insert'
      });

      fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        keepalive: true,
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: payload
      }).catch(err => console.error('Erro no fetch:', err));

      setIsSuccess(true);
      
      const message = encodeURIComponent(
        t('hero.wa_message', { name: formData.name, course: formData.desiredCourse })
      );
      const whatsappUrl = `https://wa.me/5588981785656?text=${message}`;
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        onSubmitSuccess();
      }, 2500);

    } catch (error) {
      console.error('Erro no processo:', error);
      window.open(`https://wa.me/5588981785656?text=Oi Luana, quero saber sobre a consultoria.`, '_blank');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 md:p-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif font-bold mb-3">{t('form.title')}</h2>
        <p className="text-stone-500 text-sm max-w-md mx-auto">{t('form.subtitle')}</p>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form 
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-stone-400">{t('form.name_label')}</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('form.name_placeholder') || 'Seu nome'}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-stone-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-stone-400">{t('form.phone_label')}</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-stone-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-stone-400">{t('form.goal_label')}</label>
                  <input
                    required
                    type="text"
                    name="desiredCourse"
                    value={formData.desiredCourse}
                    onChange={handleChange}
                    placeholder={t('form.goal_placeholder')}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-stone-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-stone-400">{t('form.education_label') || 'Escolaridade'}</label>
                  <select
                    required
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-stone-50/50"
                  >
                    <option value="">{t('form.select_option') || 'Selecione...'}</option>
                    <option value="Ensino Médio (1º ou 2º ano)">{t('form.edu1') || 'Ensino Médio (1º ou 2º ano)'}</option>
                    <option value="Ensino Médio (3º ano)">{t('form.edu2') || 'Ensino Médio (3º ano)'}</option>
                    <option value="Já concluiu / Cursinho">{t('form.edu3') || 'Já concluiu / Cursinho'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-stone-400">{t('form.obs_label') || 'Observações / Dificuldades'}</label>
                <textarea
                  name="observations"
                  value={formData.observations}
                  onChange={handleChange}
                  placeholder={t('form.obs_placeholder') || 'Conte um pouco sobre sua trajetória...'}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all h-28 resize-none bg-stone-50/50"
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-brand-primary hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    {t('form.processing') || 'Processando...'}
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {t('form.cta')}
                  </>
                )}
              </button>
              
              <p className="text-center text-[10px] text-stone-400 uppercase tracking-widest mt-4">
                {t('form.lgpd') || 'Seus dados estão protegidos pela LGPD.'}
              </p>
            </motion.form>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="w-20 h-20 bg-brand-primary text-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl shadow-brand-primary/20">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{t('form.success_title') || 'Quase lá!'}</h3>
              <p className="text-stone-500 mb-8 max-w-sm mx-auto">
                {t('form.success_msg', { name: formData.name.split(' ')[0] }) || `Obrigado, ${formData.name.split(' ')[0]}! Estamos te redirecionando para o WhatsApp agora mesmo...`}
              </p>
              <div className="flex items-center justify-center gap-2 text-brand-primary font-bold animate-pulse">
                <Loader2 className="animate-spin" size={18} />
                <span>{t('form.opening_wa') || 'Abrindo WhatsApp...'}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
