/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { Authority } from './components/Authority';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Testimonials } from './components/Testimonials';
import { Offer } from './components/Offer';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Modal } from './components/Modal';
import { LoadingScreen } from './components/LoadingScreen';
import { MobileMenu } from './components/MobileMenu';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { TermsOfUse, PrivacyPolicy, CookiePolicy } from './pages/Legal';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Mail, MessageCircle, Menu } from 'lucide-react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LandingPage = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onCtaClick={onCtaClick} 
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Top Bar */}
      <div className="bg-stone-900 text-stone-300 py-2 px-6 hidden lg:block border-b border-stone-800">
        <div className="container mx-auto flex justify-between items-center text-xs font-medium">
          <div className="flex gap-6">
            <a href="mailto:luanaandradeconsultoria@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
              <Mail size={14} />
              luanaandradeconsultoria@gmail.com
            </a>
            <a href="https://wa.me/5588981785656" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <MessageCircle size={14} />
              (88) 98178-5656
            </a>
          </div>
          <div>
            {t('hero.top_bar')}
          </div>
        </div>
      </div>

      {/* Navigation (Simple) */}
      <nav className="fixed top-0 lg:top-8 w-full z-40 glass py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <RouterLink to="/" className="text-lg sm:text-xl font-serif font-bold text-stone-900 shrink-0">
            Luana <span className="text-brand-primary">Andrade</span>
          </RouterLink>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex gap-8 text-sm font-semibold text-stone-600">
            <a href="#about" className="hover:text-brand-primary transition-colors">{t('nav.about')}</a>
            <a href="#method" className="hover:text-brand-primary transition-colors">{t('nav.method')}</a>
            <a href="#testimonials" className="hover:text-brand-primary transition-colors">{t('nav.results')}</a>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            
            <button 
              onClick={onCtaClick}
              className="hidden sm:block bg-brand-primary text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-brand-dark transition-all shadow-md hover:shadow-brand-primary/20"
            >
              {t('nav.cta')}
            </button>
            
            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 text-stone-900 hover:text-brand-primary transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero onCtaClick={onCtaClick} />
        <Authority />
        <PainPoints />
        <Solution />
        <Testimonials />
        <Offer onCtaClick={onCtaClick} />
      </main>
    </>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <AnimatePresence>
          {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>

        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Routes>
              <Route path="/" element={<LandingPage onCtaClick={() => setIsModalOpen(true)} />} />
              <Route path="/termos" element={<TermsOfUse />} />
              <Route path="/privacidade" element={<PrivacyPolicy />} />
              <Route path="/cookies" element={<CookiePolicy />} />
            </Routes>

            <Footer />
            <WhatsAppButton />

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <LeadForm onSubmitSuccess={() => setIsModalOpen(false)} />
            </Modal>
          </motion.div>
        )}
      </div>
    </BrowserRouter>
  );
}
