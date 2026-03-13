import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds for the loading animation
    const interval = 20; // update every 20ms
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay after reaching 100%
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-stone-50 flex flex-col items-center justify-center px-6"
    >
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-2">Luana Andrade</h2>
          <p className="text-stone-500 uppercase tracking-[0.3em] text-[10px] font-bold">Consultoria de Aprovação</p>
        </motion.div>

        <div className="relative h-1 w-full bg-stone-200 rounded-full overflow-hidden mb-4">
          <motion.div
            className="absolute top-0 left-0 h-full bg-brand-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        <div className="flex justify-between items-center text-stone-400 font-mono text-xs">
          <span>PREPARANDO SUA VAGA</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
};
