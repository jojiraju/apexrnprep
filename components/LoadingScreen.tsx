'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Fast progress to 90%, then jump to 100%
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 90) { clearInterval(interval); return p; }
        return p + Math.random() * 12 + 4;
      });
    }, 120);

    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setDone(true), 500);
    }, 1400);

    return () => { clearInterval(interval); clearTimeout(timer); };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#06040e',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Glow blob */}
          <div style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }} />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'relative', marginBottom: '28px' }}
          >
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '20px',
              background: 'var(--brand-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 16px 48px rgba(124,58,237,0.45)',
            }}>
              <Zap size={32} color="#fff" fill="#fff" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '36px' }}
          >
            Apex RN Prep — Loading...
          </motion.p>

          {/* Progress bar */}
          <div style={{
            width: '200px',
            height: '3px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '99px',
            overflow: 'hidden',
          }}>
            <motion.div
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #7c3aed, #d946ef)',
                borderRadius: '99px',
                boxShadow: '0 0 8px rgba(124,58,237,0.6)',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
