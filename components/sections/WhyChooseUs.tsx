'use client';

import { motion } from 'framer-motion';
import { whyChooseUs } from '@/data';

const glassStyle = {
  background: 'rgba(13,10,28,0.55)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid rgba(139,92,246,0.15)',
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dividers */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.3), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.3), transparent)' }}
      />
      {/* Center glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(139,92,246,0.22)', color: '#c4b5fd' }}
            >
              🌟 Why Students Choose Us
            </span>
            <h2 className="text-white font-bold mb-6 leading-tight" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}>
              Built for{' '}
              <span className="gradient-text">Nursing Success,</span>{' '}
              Not Just Exam Prep
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: '#6b7280' }}>
              We don't just teach you to pass the NCLEX. We build your clinical judgment, deepen your nursing knowledge, and prepare you to be an exceptional nurse from day one.
            </p>

            {/* Big stat card */}
            <div className="rounded-2xl p-6" style={glassStyle}>
              <div className="flex items-end gap-3">
                <span className="font-extrabold gradient-text" style={{ fontSize: '4rem', lineHeight: 1 }}>97%</span>
                <div className="pb-1">
                  <p className="text-white font-semibold">Pass Rate</p>
                  <p className="text-sm" style={{ color: '#6b7280' }}>vs 85% national average</p>
                </div>
              </div>
              <div
                className="mt-4 h-2 rounded-full overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #7c3aed, #4f46e5)' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: '97%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, delay: 0.3, ease: 'easeOut' }}
                />
              </div>
              <div className="flex justify-between text-xs mt-1.5" style={{ color: '#4b5563' }}>
                <span>0%</span><span>National avg 85%</span><span>Apex 97%</span>
              </div>
            </div>
          </motion.div>

          {/* Right grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 * i }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group rounded-2xl p-5"
                style={{
                  ...glassStyle,
                  transition: 'border-color 0.3s ease',
                }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-1.5">{item.title}</h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: '#6b7280' }}>{item.description}</p>
                <span
                  className="inline-block px-2.5 py-1 rounded-lg text-xs font-medium"
                  style={{ background: 'rgba(124,58,237,0.12)', color: '#c4b5fd', border: '1px solid rgba(139,92,246,0.18)' }}
                >
                  {item.metric}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
