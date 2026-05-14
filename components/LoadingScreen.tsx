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
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }} />

          {/* Logo Container */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            style={{ position: 'relative', marginBottom: '32px' }}
          >
            {/* Spinning ring decoration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                inset: '-15px',
                border: '1px solid transparent',
                borderTopColor: 'rgba(34,211,238,0.4)',
                borderRightColor: 'rgba(124,58,237,0.4)',
                borderRadius: '50%',
                opacity: 0.6,
              }}
            />
            
            <div style={{
              width: '100px',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img 
                src="/logo.png" 
                alt="Logo" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain',
                  mixBlendMode: 'screen',
                  filter: 'contrast(1.8) brightness(1.2)',
                  transform: 'scale(1.8)'
                }} 
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <p style={{ 
              color: '#fff', 
              fontSize: '12px', 
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '40px',
              opacity: 0.5
            }}>
              Preparing Your Success
            </p>

            {/* Progress bar container */}
            <div style={{
              width: '240px',
              height: '2px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '99px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <motion.div
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #22d3ee, #7c3aed, #d946ef)',
                  borderRadius: '99px',
                  boxShadow: '0 0 15px rgba(124,58,237,0.6)',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
