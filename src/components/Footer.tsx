import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-stone-50 pt-20 pb-10 border-t border-stone-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-8 lg:gap-x-12 mb-16">
          {/* Brand Column */}
          <div className="text-center md:text-left lg:text-left">
            <h4 className="text-2xl font-serif font-bold mb-3">Luana Andrade</h4>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              {t('footer.description')}
            </p>
          </div>

          {/* Links Column */}
          <div className="text-center lg:text-center">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-6">{t('footer.legal_title')}</h5>
            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-stone-500">
              <Link to="/termos" className="hover:text-brand-primary transition-colors">{t('legal.terms_title')}</Link>
              <Link to="/privacidade" className="hover:text-brand-primary transition-colors">{t('legal.privacy_title')}</Link>
              <Link to="/cookies" className="hover:text-brand-primary transition-colors">{t('legal.cookies_title')}</Link>
            </div>
          </div>

          {/* Contact Column */}
          <div className="text-center md:text-left lg:text-right md:col-span-2 lg:col-span-1 mt-4 lg:mt-0">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-6">{t('footer.contact_title')}</h5>
            <div className="flex flex-col items-center md:items-start lg:items-end gap-4">
              <a 
                href="mailto:luanaandradeconsultoria@gmail.com" 
                className="text-stone-600 hover:text-brand-primary transition-colors flex items-center gap-2 text-sm font-medium break-all"
              >
                <Mail size={18} />
                luanaandradeconsultoria@gmail.com
              </a>
              <a 
                href="https://wa.me/5588981785656" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-900 text-white px-6 py-2 rounded-full flex items-center gap-2 text-xs font-bold hover:bg-brand-primary transition-all shadow-lg shadow-stone-200"
              >
                <MessageCircle size={16} />
                {t('footer.whatsapp_cta')}
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-stone-200">
          <div className="flex flex-col gap-8 items-center text-center">
            <div className="text-stone-500 italic font-serif text-base">
              "{t('footer.quote')}"
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 text-stone-400 text-[10px] font-bold uppercase tracking-widest">
              <div>
                {t('footer.rights')}
              </div>
              
              <div>
                {t('footer.dev')} <span className="text-[#D4AF37] hover:text-stone-600 transition-colors duration-300 cursor-default">Jr. Abrantes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
