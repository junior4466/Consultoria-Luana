import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Shield, Lock, Cookie, FileText, CheckCircle2, Scale, AlertCircle, Eye, Database, UserCheck, Settings, Info } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const LegalLayout: React.FC<LegalPageProps> = ({ title, lastUpdated, icon, children }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navLinks = [
    { path: '/termos', label: t('legal.terms_title'), icon: <FileText size={16} /> },
    { path: '/privacidade', label: t('legal.privacy_title'), icon: <Shield size={16} /> },
    { path: '/cookies', label: t('legal.cookies_title'), icon: <Cookie size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-stone-900 selection:bg-brand-primary/10 selection:text-brand-primary">
      {/* Header / Hero */}
      <div className="bg-white border-b border-stone-200 pt-24 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', size: '20px 20px' }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-stone-400 hover:text-brand-primary transition-colors mb-6 sm:mb-8 group text-[10px] sm:text-xs font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {t('legal.back')}
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6"
              >
                {icon}
              </motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-4 tracking-tight leading-tight">{title}</h1>
              <p className="text-stone-400 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">
                {t('legal.last_updated', { date: lastUpdated })}
              </p>
            </div>
            
            <nav className="flex flex-wrap md:flex-nowrap gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-[10px] sm:text-xs font-bold transition-all border whitespace-nowrap ${
                    pathname === link.path 
                      ? 'bg-brand-primary border-brand-primary text-white shadow-lg shadow-brand-primary/20' 
                      : 'bg-white border-stone-200 text-stone-500 hover:border-brand-primary hover:text-brand-primary'
                  }`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-8"
          >
            <div className="prose prose-stone max-w-none 
              prose-headings:font-serif prose-headings:font-bold prose-headings:text-stone-900
              prose-h2:text-xl sm:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-stone-100
              prose-p:text-stone-600 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-sm sm:text-base
              prose-li:text-stone-600 prose-li:mb-2 prose-li:text-sm sm:text-base
              prose-strong:text-stone-900 prose-strong:font-bold"
            >
              {children}
            </div>
          </motion.div>

          {/* Sidebar Info */}
          <aside className="md:col-span-4 space-y-6 sm:space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm">
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 text-stone-900">{t('footer.contact_title')}</h4>
              <p className="text-stone-500 text-xs sm:text-sm mb-6 leading-relaxed">
                {t('footer.description')}
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:luanaandradeconsultoria@gmail.com" 
                  className="flex items-center gap-3 text-stone-600 hover:text-brand-primary transition-colors text-xs sm:text-sm font-medium group"
                >
                  <div className="w-8 h-8 bg-stone-50 rounded-lg flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors">
                    <FileText size={14} />
                  </div>
                  <span className="break-all">luanaandradeconsultoria@gmail.com</span>
                </a>
                <a 
                  href="https://wa.me/5588981785656" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-stone-600 hover:text-brand-primary transition-colors text-xs sm:text-sm font-medium group"
                >
                  <div className="w-8 h-8 bg-stone-50 rounded-lg flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors">
                    <Lock size={14} />
                  </div>
                  {t('legal.wa_support')}
                </a>
              </div>
            </div>

            <div className="bg-brand-primary/5 p-6 sm:p-8 rounded-3xl border border-brand-primary/10">
              <div className="w-10 h-10 bg-brand-primary/20 rounded-xl flex items-center justify-center text-brand-primary mb-4">
                <CheckCircle2 size={20} />
              </div>
              <h4 className="text-stone-900 font-bold mb-2 text-sm sm:text-base">{t('legal.transparency_title')}</h4>
              <p className="text-stone-600 text-[10px] sm:text-xs leading-relaxed">
                {t('legal.transparency_text')}
              </p>
            </div>
          </aside>
        </div>
      </div>
      
      {/* Bottom Footer Quote */}
      <div className="container mx-auto px-6 max-w-5xl pb-12 sm:pb-20 text-center">
        <div className="h-px bg-stone-200 w-full mb-12" />
        <p className="font-serif italic text-stone-400 text-base sm:text-lg">"{t('footer.quote')}"</p>
      </div>
    </div>
  );
};

export const TermsOfUse: React.FC = () => {
  const { t } = useTranslation();
  return (
    <LegalLayout 
      title={t('legal.terms_title')} 
      lastUpdated="15 de fevereiro de 2026"
      icon={<Scale size={32} />}
    >
      <section className="bg-white/50 p-6 sm:p-8 rounded-3xl border border-stone-100 mb-8">
        <div className="flex items-center gap-3 mb-4 text-brand-primary">
          <CheckCircle2 size={24} />
          <h2 className="!m-0 border-none !pb-0 !text-lg sm:!text-xl">{t('legal.terms.s1_title')}</h2>
        </div>
        <p className="!mb-0">{t('legal.terms.s1_text')}</p>
      </section>
      
      <section className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4 text-brand-primary">
          <Info size={24} />
          <h2 className="!m-0 border-none !pb-0 !text-lg sm:!text-xl">{t('legal.terms.s2_title')}</h2>
        </div>
        <p>{t('legal.terms.s2_text')}</p>
      </section>
      
      <section className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4 text-brand-primary">
          <Lock size={24} />
          <h2 className="!m-0 border-none !pb-0 !text-lg sm:!text-xl">{t('legal.terms.s3_title')}</h2>
        </div>
        <p>{t('legal.terms.s3_text')}</p>
      </section>
      
      <section className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4 text-brand-primary">
          <AlertCircle size={24} />
          <h2 className="!m-0 border-none !pb-0 !text-lg sm:!text-xl">{t('legal.terms.s4_title')}</h2>
        </div>
        <p>{t('legal.terms.s4_text')}</p>
      </section>
      
      <section className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4 text-brand-primary">
          <Settings size={24} />
          <h2 className="!m-0 border-none !pb-0 !text-lg sm:!text-xl">{t('legal.terms.s5_title')}</h2>
        </div>
        <p>{t('legal.terms.s5_text')}</p>
      </section>
    </LegalLayout>
  );
};

export const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  return (
    <LegalLayout 
      title={t('legal.privacy_title')} 
      lastUpdated="15 de fevereiro de 2026"
      icon={<Lock size={32} />}
    >
      <section className="bg-white/50 p-6 sm:p-8 rounded-3xl border border-stone-100 mb-8">
        <div className="flex items-center gap-3 mb-4 text-brand-primary">
          <Database size={24} />
          <h2 className="!m-0 border-none !pb-0 !text-lg sm:!text-xl">{t('legal.privacy.s1_title')}</h2>
        </div>
        <p className="!mb-0">{t('legal.privacy.s1_text')}</p>
      </section>
      
      <section className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4 text-brand-primary">
          <Eye size={24} />
          <h2 className="!m-0 border-none !pb-0 !text-lg sm:!text-xl">{t('legal.privacy.s2_title')}</h2>
        </div>
        <p>{t('legal.privacy.s2_text')}</p>
        <ul className="grid grid-cols-1 gap-2">
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0" />
            <span>{t('legal.privacy.s2_item1')}</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0" />
            <span>{t('legal.privacy.s2_item2')}</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0" />
            <span>{t('legal.privacy.s2_item3')}</span>
          </li>
        </ul>
      </section>
      
      <section className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4 text-brand-primary">
          <Shield size={24} />
          <h2 className="!m-0 border-none !pb-0 !text-lg sm:!text-xl">{t('legal.privacy.s3_title')}</h2>
        </div>
        <p>{t('legal.privacy.s3_text')}</p>
      </section>
      
      <section className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4 text-brand-primary">
          <UserCheck size={24} />
          <h2 className="!m-0 border-none !pb-0 !text-lg sm:!text-xl">{t('legal.privacy.s4_title')}</h2>
        </div>
        <p>{t('legal.privacy.s4_text')}</p>
      </section>
    </LegalLayout>
  );
};

export const CookiePolicy: React.FC = () => {
  const { t } = useTranslation();
  return (
    <LegalLayout 
      title={t('legal.cookies_title')} 
      lastUpdated="15 de fevereiro de 2026"
      icon={<Cookie size={32} />}
    >
      <section className="bg-white/50 p-6 sm:p-8 rounded-3xl border border-stone-100 mb-8">
        <div className="flex items-center gap-3 mb-4 text-brand-primary">
          <Info size={24} />
          <h2 className="!m-0 border-none !pb-0 !text-lg sm:!text-xl">{t('legal.cookies.s1_title')}</h2>
        </div>
        <p className="!mb-0">{t('legal.cookies.s1_text')}</p>
      </section>
      
      <section className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4 text-brand-primary">
          <Settings size={24} />
          <h2 className="!m-0 border-none !pb-0 !text-lg sm:!text-xl">{t('legal.cookies.s2_title')}</h2>
        </div>
        <p>{t('legal.cookies.s2_text')}</p>
      </section>
      
      <section className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4 text-brand-primary">
          <Cookie size={24} />
          <h2 className="!m-0 border-none !pb-0 !text-lg sm:!text-xl">{t('legal.cookies.s3_title')}</h2>
        </div>
        <ul className="grid grid-cols-1 gap-2">
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0" />
            <span>{t('legal.cookies.s3_item1')}</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0" />
            <span>{t('legal.cookies.s3_item2')}</span>
          </li>
        </ul>
      </section>
      
      <section className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4 text-brand-primary">
          <Shield size={24} />
          <h2 className="!m-0 border-none !pb-0 !text-lg sm:!text-xl">{t('legal.cookies.s4_title')}</h2>
        </div>
        <p>{t('legal.cookies.s4_text')}</p>
      </section>
    </LegalLayout>
  );
};
