'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data';

const glassStyle = {
  background: 'rgba(13,10,28,0.55)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid rgba(139,92,246,0.15)',
};

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 overflow-hidden" id="faq">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-5"
            style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(139,92,246,0.22)', color: '#c4b5fd' }}
          >
            ❓ Got Questions?
          </span>
          <h2 className="text-white font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="max-w-lg mx-auto" style={{ color: '#6b7280' }}>
            Everything you need to know about Apex RN Prep and the NCLEX exam.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden"
              style={{
                ...glassStyle,
                transition: 'border-color 0.3s ease',
                borderColor: open === i ? 'rgba(139,92,246,0.35)' : 'rgba(139,92,246,0.15)',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left group"
              >
                <span
                  className="font-semibold text-sm sm:text-base transition-colors duration-200"
                  style={{ color: open === i ? '#c4b5fd' : '#f9fafb' }}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: open === i ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.05)',
                    color: open === i ? '#a78bfa' : '#6b7280',
                    transition: 'background 0.2s ease, color 0.2s ease',
                  }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div
                        className="mb-4"
                        style={{ height: '1px', background: 'rgba(139,92,246,0.12)' }}
                      />
                      <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
