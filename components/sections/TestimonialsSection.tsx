'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '@/data';

const glassStyle = {
  background: 'rgba(26,22,54,0.45)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid rgba(139,92,246,0.18)',
  boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)',
};

const cardColors: Record<string, string> = {
  'from-violet-500 to-purple-600': 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
  'from-indigo-500 to-blue-600': 'linear-gradient(135deg, #6366f1, #2563eb)',
  'from-fuchsia-500 to-pink-600': 'linear-gradient(135deg, #d946ef, #db2777)',
  'from-teal-500 to-emerald-600': 'linear-gradient(135deg, #14b8a6, #059669)',
  'from-amber-500 to-orange-600': 'linear-gradient(135deg, #f59e0b, #ea580c)',
  'from-rose-500 to-pink-600': 'linear-gradient(135deg, #f43f5e, #db2777)',
};

export default function TestimonialsSection() {
  const visible = 3;
  const [current, setCurrent] = useState(0);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.2), transparent)' }}
      />
      {/* Center glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(79,70,229,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6"
        >
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(139,92,246,0.22)', color: '#c4b5fd' }}
            >
              💬 Student Stories
            </span>
            <h2 className="text-white font-display font-bold mt-2" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', letterSpacing: '-0.02em' }}>
              Real Nurses, <span className="gradient-text glow-text">Real Results</span>
            </h2>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-violet-500/10 hover:border-violet-500/30 active:scale-95"
              style={glassStyle}
            >
              <ChevronLeft size={20} style={{ color: current === 0 ? '#4b5563' : '#c4b5fd' }} />
            </button>
            <button
              onClick={() => setCurrent((c) => Math.min(testimonials.length - visible, c + 1))}
              disabled={current >= testimonials.length - visible}
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-violet-500/10 hover:border-violet-500/30 active:scale-95"
              style={glassStyle}
            >
              <ChevronRight size={20} style={{ color: current >= testimonials.length - visible ? '#4b5563' : '#c4b5fd' }} />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `-${current * (100 / visible)}%` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex gap-5"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="testimonial-card rounded-3xl p-7 flex flex-col"
                style={glassStyle}
              >
                {/* Quote icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 relative group"
                  style={{ background: cardColors[t.color] || 'linear-gradient(135deg, #7c3aed, #4f46e5)', boxShadow: '0 8px 20px rgba(124,58,237,0.3)' }}
                >
                  <div className="absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity bg-current" style={{ color: (cardColors[t.color] as any)?.split(',')[1]?.split(' ')[1] }} />
                  <Quote size={20} className="text-white relative z-10" fill="currentColor" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} size={13} fill="#f59e0b" style={{ color: '#f59e0b' }} />
                  ))}
                </div>

                <p className="text-base leading-relaxed flex-1 mb-8 italic" style={{ color: '#d1d5db' }}>
                  &ldquo;{t.text}&rdquo;
                </p>

                <div
                  className="flex items-center gap-4 pt-6"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-base font-bold shrink-0 border-2 border-surface shadow-lg"
                    style={{ background: cardColors[t.color] || 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white text-base font-bold">{t.name}</p>
                    <p className="text-xs font-medium" style={{ color: '#9ca3af' }}>{t.role} &bull; {t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(testimonials.length - visible + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: current === i ? '24px' : '8px',
                height: '8px',
                background: current === i ? '#7c3aed' : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
