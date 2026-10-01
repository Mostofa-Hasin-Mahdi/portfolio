'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLogs = [
  '[SYS_INIT] Initializing MHM_OS v2.0.4...',
  '[LOAD] Connecting to core neural nodes... OK',
  '[LOAD] Fetching engineering artifacts... OK',
  '[AUTH] Verifying access credentials... GRANTED',
  '[START] Launching portfolio interface...',
];

export function BootSequence({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let isActive = true;

    const showLogs = async () => {
      for (let i = 0; i < bootLogs.length; i++) {
        // Fast typing effect
        await new Promise(r => setTimeout(r, 150 + Math.random() * 200));
        if (!isActive) return;
        setLogs(prev => [...prev, bootLogs[i]]);
      }
      
      // Pause briefly after the final log
      await new Promise(r => setTimeout(r, 500));
      if (!isActive) return;
      
      setIsLoading(false);
      
      // Delay showing the content so the exit animation of the boot screen plays
      setTimeout(() => {
        if (isActive) setShowContent(true);
      }, 200);
    };

    showLogs();

    return () => { isActive = false; };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="boot-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-bg flex flex-col justify-end p-8 md:p-24 font-mono text-sm md:text-base text-accent"
          >
            <div className="flex flex-col gap-2 max-w-2xl w-full">
              {logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="tracking-widest"
                >
                  {log}
                </motion.div>
              ))}
              {/* Blinking cursor */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-3 h-5 bg-accent mt-2"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div 
        className={`transition-all duration-1000 ${
          showContent ? "opacity-100" : "opacity-0 h-screen overflow-hidden pointer-events-none"
        }`}
      >
        {children}
      </div>
    </>
  );
}
