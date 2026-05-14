'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="bg-grid absolute inset-0" />
        {/* Main glow */}
        <div
          className="absolute"
          style={{
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '900px', height: '600px',
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, rgba(79,70,229,0.06) 50%, transparent 75%)',
            borderRadius: '50%',
          }}
        />
        {/* Left orb */}
        <div
          className="absolute animate-float"
          style={{
            top: '50%', left: '25%',
            transform: 'translate(-50%, -50%)',
            width: '300px', height: '300px',
            background: 'radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        {/* Right orb */}
        <div
          className="absolute animate-float"
          style={{
            top: '50%', right: '20%',
            transform: 'translateY(-50%)',
            width: '200px', height: '200px',
            background: 'radial-gradient(circle, rgba(217,70,239,0.12) 0%, transparent 70%)',
            borderRadius: '50%',
            animationDelay: '2s',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
          className="space-y-8"
        >
          {/* Logo icon */}
          <div className="flex justify-center">
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center animate-pulse-glow"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                boxShadow: '0 16px 64px rgba(124,58,237,0.45)',
              }}
            >
              <Zap size={36} className="text-white" fill="white" />
            </div>
          </div>

          <div>
            <h2 className="text-white font-bold leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Ready to Pass the{' '}
              <span className="gradient-text">NCLEX?</span>
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: '#6b7280' }}>
              Join 12,500+ nurses who achieved their dream with Apex RN Prep. Start your 14-day free trial today — no credit card required.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2.5 px-10 py-5 rounded-2xl text-white font-bold text-lg"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                  boxShadow: '0 8px 40px rgba(124,58,237,0.4)',
                }}
              >
                Start Free Trial Today
                <ArrowRight size={20} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2.5 px-10 py-5 rounded-2xl text-white font-semibold text-lg transition-all duration-300"
                style={{ border: '1px solid rgba(139,92,246,0.35)', background: 'rgba(124,58,237,0.05)' }}
              >
                View Pricing
              </Link>
            </motion.div>
          </div>

          <p className="text-sm" style={{ color: '#4b5563' }}>
            ✓ No credit card &nbsp;&nbsp; ✓ Cancel anytime &nbsp;&nbsp; ✓ 14-day money-back guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}
