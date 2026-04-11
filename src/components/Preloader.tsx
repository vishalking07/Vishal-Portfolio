import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Accelerate towards the end for a cooler feel
      const jump = Math.floor(Math.random() * 15) + 5;
      current += jump;
      
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500); // Hold at 100% for a moment
      }
      setProgress(current);
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        className="fixed inset-0 z-[99999] bg-background flex flex-col justify-end p-8 md:p-16 overflow-hidden"
      >
        <div className="flex justify-between items-end w-full h-full relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-headline tracking-tight text-neutral-500 uppercase text-xs md:text-sm"
          >
            VISHAL A. <br />
            PORTFOLIO 2026
          </motion.div>
          <div className="font-headline text-7xl md:text-9xl font-bold tracking-tighter text-neutral-100 flex items-end">
            {progress}<span className="text-primary text-3xl md:text-6xl mb-2 md:mb-6">%</span>
          </div>
        </div>
        
        {/* Background dark overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container/5 to-transparent z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      </motion.div>
    </AnimatePresence>
  );
};
