'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 50, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 16 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'rgba(26,22,54,0.92)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(139,92,246,0.25)',
              borderRadius: '18px',
              padding: '20px',
              width: '220px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>How can we help?</h4>
            <p style={{ color: '#6b7280', fontSize: '12px', marginBottom: '16px' }}>Our team is ready to assist.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/contact" style={{
                display: 'block', textAlign: 'center', padding: '10px 16px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                color: '#fff', fontSize: '13px', fontWeight: 600, textDecoration: 'none',
              }}>
                Chat with Us
              </Link>
              <a href="mailto:support@apexrnprep.com" style={{
                display: 'block', textAlign: 'center', padding: '10px 16px', borderRadius: '12px',
                border: '1px solid rgba(139,92,246,0.3)',
                color: '#d1d5db', fontSize: '13px', fontWeight: 500, textDecoration: 'none',
              }}>
                Send Email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="animate-pulse-glow"
        style={{
          width: '56px', height: '56px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', border: 'none', cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(124,58,237,0.5)',
        }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>
    </div>
  );
}
