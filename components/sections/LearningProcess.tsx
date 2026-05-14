'use client';

import { motion } from 'framer-motion';
import { learningSteps } from '@/data';

const glassStyle = {
  background: 'rgba(13,10,28,0.55)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid rgba(139,92,246,0.15)',
};

export default function LearningProcess() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="bg-grid absolute inset-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-5"
            style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(139,92,246,0.22)', color: '#c4b5fd' }}
          >
            🗺️ Your Learning Journey
          </span>
          <h2 className="text-white font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            The Apex <span className="gradient-text">6-Step</span> Method
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: '#6b7280' }}>
            A proven, structured approach that transforms nursing graduates into confident, exam-ready professionals.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center connecting line */}
          <div
            className="absolute hidden lg:block"
            style={{
              left: '50%',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, rgba(124,58,237,0.5), rgba(79,70,229,0.5), rgba(217,70,239,0.5))',
              transform: 'translateX(-0.5px)',
            }}
          />

          <div className="space-y-10">
            {learningSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: 0.04 * i, ease: [0.22, 1, 0.36, 1] as const }}
                className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Card */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group rounded-3xl p-8 relative overflow-hidden"
                    style={glassStyle}
                  >
                    {/* Gradient overlay on hover */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.07) 0%, transparent 100%)' }}
                    />
                    <div className="relative flex items-start gap-5">
                      <div className="text-4xl">{step.icon}</div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#a78bfa' }}>
                          Step {step.step}
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Step bubble (center) */}
                <div
                  className="hidden lg:flex w-12 h-12 rounded-full items-center justify-center shrink-0 z-10 text-white font-bold text-sm"
                  style={{
                    background: 'var(--brand-gradient)',
                    boxShadow: '0 0 24px rgba(124,58,237,0.5)',
                  }}
                >
                  {step.step}
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
