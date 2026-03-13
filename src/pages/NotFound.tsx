import React from 'react';
import { motion } from 'motion/react';
import { Home, ArrowLeft, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#F9F8F6] flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', size: '20px 20px' }} />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-md w-full text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-brand-primary/10 rounded-3xl flex items-center justify-center text-brand-primary mx-auto mb-8"
        >
          <AlertCircle size={48} />
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-6xl font-serif font-bold text-stone-900 mb-4"
        >
          404
        </motion.h1>
        
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-serif font-bold text-stone-800 mb-6"
        >
          Página não encontrada
        </motion.h2>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-stone-500 mb-10 leading-relaxed"
        >
          Desculpe, a página que você está procurando não existe ou foi movida. Verifique o endereço ou volte para a página inicial.
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand-primary/20"
          >
            <Home size={18} />
            Voltar ao Início
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 bg-white border border-stone-200 text-stone-600 px-8 py-3 rounded-xl font-bold hover:border-brand-primary hover:text-brand-primary transition-all"
          >
            <ArrowLeft size={18} />
            Voltar
          </button>
        </motion.div>
      </div>
    </div>
  );
};
