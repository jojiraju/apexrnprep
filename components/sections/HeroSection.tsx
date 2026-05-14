'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Play, Star, CheckCircle, Zap, Shield, GraduationCap, Users } from 'lucide-react';
import TextType from '@/components/ui/TextType';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.4 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Grid */}
        <div className="bg-grid absolute inset-0" />

        {/* Main radial glow */}
        <div
          className="absolute"
          style={{
            top: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '900px',
            height: '600px',
            background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.18) 0%, rgba(79,70,229,0.05) 50%, transparent 80%)',
            borderRadius: '50%',
            filter: 'blur(1px)',
          }}
        />

        {/* Left orb */}
        <div
          className="absolute animate-float"
          style={{
            top: '40%',
            left: '8%',
            width: '280px',
            height: '280px',
            background: 'radial-gradient(circle, rgba(79,70,229,0.18) 0%, transparent 70%)',
            borderRadius: '50%',
            animationDelay: '1s',
          }}
        />

        {/* Right orb */}
        <div
          className="absolute animate-float"
          style={{
            top: '25%',
            right: '5%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(217,70,239,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            animationDelay: '2.5s',
          }}
        />

        {/* Floating particles with more variety */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 3 === 0 ? '4px' : '2px',
              height: i % 3 === 0 ? '4px' : '2px',
              background: i % 2 === 0 ? 'rgba(167, 139, 250, 0.4)' : 'rgba(217, 70, 239, 0.3)',
              left: `${5 + i * 6}%`,
              top: `${15 + (i % 7) * 12}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, (i % 2 === 0 ? 15 : -15), 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Dynamic mesh gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            background: 'radial-gradient(circle at 20% 30%, #7c3aed 0%, transparent 40%), radial-gradient(circle at 80% 70%, #d946ef 0%, transparent 40%)',
            filter: 'blur(80px)'
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: 'rgba(124,58,237,0.12)',
                  border: '1px solid rgba(139,92,246,0.25)',
                  color: '#c4b5fd',
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#34d399', boxShadow: '0 0 8px #34d399' }}
                />
                #1 Rated NCLEX Prep Platform — 2026
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1
                className="font-display font-bold leading-[1.2] tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)' }}
              >
                <span className="text-white drop-shadow-md block mb-2">
                  Master the <span className="gradient-text glow-text">NCLEX.</span>
                </span>
                <span className="text-white/70 drop-shadow-sm flex flex-wrap items-center gap-x-3 py-1">
                  Launch Your 
                  <TextType 
                    text={["Nursing Career.", "Future.", "Medical Life."]}
                    className="gradient-text glow-text py-1"
                    typingSpeed={70}
                    pauseDuration={2000}
                    cursorCharacter="_"
                    cursorClassName="text-violet-500"
                  />
                </span>
              </h1>
            </motion.div>

            {/* Sub */}
            <motion.p variants={itemVariants} className="text-lg leading-relaxed max-w-lg" style={{ color: '#9ca3af', marginTop: '-12px' }}>
              Join{' '}
              <span className="font-semibold text-white">12,500+ nurses</span>{' '}
              who passed their NCLEX with our AI-powered adaptive learning platform. Expert instructors, 10,000+ practice questions, and a{' '}
              <span className="font-semibold" style={{ color: '#c4b5fd' }}>97% pass rate.</span>
            </motion.p>

            {/* Trust pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              {['No-risk 14-day trial', 'Passing guarantee', 'Cancel anytime'].map((text) => (
                <div key={text} className="flex items-center gap-1.5 text-sm" style={{ color: '#d1d5db' }}>
                  <CheckCircle size={14} style={{ color: '#34d399' }} />
                  {text}
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base text-white"
                  style={{
                    background: 'var(--brand-gradient)',
                    boxShadow: '0 8px 32px rgba(124,58,237,0.35)',
                  }}
                >
                  Start Free Trial
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.97 }}>
                <button
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-base text-white transition-all duration-300"
                  style={{
                    border: '1px solid rgba(139,92,246,0.35)',
                    background: 'rgba(124,58,237,0.05)',
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(124,58,237,0.2)' }}
                  >
                    <Play size={13} fill="currentColor" style={{ color: '#c4b5fd', marginLeft: '1px' }} />
                  </div>
                  Watch Demo
                </button>
              </motion.div>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  'https://images.unsplash.com/photo-1559839734-2b71f1e3c770?q=80&w=150&h=150&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=150&h=150&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=150&h=150&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=150&h=150&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&auto=format&fit=crop'
                ].map((url, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-surface overflow-hidden bg-surface shadow-lg"
                  >
                    <img src={url} alt={`Student ${i+1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#f59e0b" style={{ color: '#f59e0b' }} />
                  ))}
                  <span className="font-bold text-sm ml-1" style={{ color: '#fbbf24' }}>4.9</span>
                </div>
                <p className="text-xs" style={{ color: '#6b7280' }}>from 8,000+ reviews</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column — dashboard card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div className="relative animate-float" style={{ animationDelay: '0.5s' }}>
              <div
                className="rounded-3xl p-8"
                style={{
                  background: 'rgba(26,22,54,0.8)',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                  border: '1px solid rgba(139,92,246,0.25)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.1)',
                }}
              >
                {/* Card header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#6b7280' }}>
                      Your NCLEX Journey
                    </p>
                    <h3 className="text-white font-bold text-lg mt-0.5">Week 4 Progress</h3>
                  </div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'var(--brand-gradient)',
                      boxShadow: '0 8px 24px rgba(124,58,237,0.4)',
                    }}
                  >
                    <Zap size={20} className="text-white" fill="white" />
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Questions', value: '1,842' },
                    { label: 'Accuracy', value: '87%' },
                    { label: 'Streak', value: '14d' },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="text-center p-3 rounded-xl"
                      style={{ background: 'rgba(255,255,255,0.05)' }}
                    >
                      <p className="text-xl font-bold text-white">{value}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#6b7280' }}>{label}</p>
                    </div>
                  ))}
                </div>

                {/* Progress bars */}
                <div className="space-y-3">
                  {[
                    { label: 'Pharmacology', pct: 92 },
                    { label: 'Med-Surg', pct: 78 },
                    { label: 'Mental Health', pct: 85 },
                  ].map(({ label, pct }) => (
                    <div key={label}>
                      <div className="flex justify-between text-xs mb-1.5" style={{ color: '#6b7280' }}>
                        <span>{label}</span>
                        <span>{pct}%</span>
                      </div>
                      <div
                        className="h-1.5 rounded-full overflow-hidden"
                        style={{ background: 'rgba(255,255,255,0.06)' }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: 'var(--brand-gradient)' }}
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 1.6, delay: 1.2, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating "Passed!" badge */}
              <motion.div
                initial={{ opacity: 0, y: 16, x: -16 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1.4, duration: 0.7 }}
                className="absolute -left-20 top-1/4 z-20"
                style={{
                  background: 'rgba(13,10,28,0.85)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(139,92,246,0.25)',
                  borderRadius: '16px',
                  padding: '12px 18px',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
                }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(52,211,153,0.15)' }}
                  >
                    <CheckCircle size={16} style={{ color: '#34d399' }} />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">Passed!</p>
                    <p className="text-xs" style={{ color: '#6b7280' }}>Sarah M. — NCLEX-RN</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating "97%" badge */}
              <motion.div
                initial={{ opacity: 0, y: -16, x: 16 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1.7, duration: 0.7 }}
                className="absolute -right-16 bottom-1/4 z-20"
                style={{
                  background: 'rgba(13,10,28,0.85)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(139,92,246,0.25)',
                  borderRadius: '16px',
                  padding: '12px 18px',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">97% Pass Rate</p>
                    <p className="text-[10px]" style={{ color: '#6b7280' }}>vs 85% national avg</p>
                  </div>
                </div>
              </motion.div>

              {/* Extra floating element for depth */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute -bottom-6 left-1/4 p-4 rounded-2xl glass-strong border-violet-500/20 shadow-2xl hidden xl:block z-30"
              >
                <div className="flex items-center gap-3">
                   <div className="flex -space-x-2">
                      {[
                        'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=80&h=80&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1559839734-2b71f1e3c770?q=80&w=80&h=80&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=80&h=80&auto=format&fit=crop'
                      ].map((url, i) => (
                        <div key={i} className="w-7 h-7 rounded-full border-2 border-[#1a1636] overflow-hidden">
                          <img src={url} alt="Student" className="w-full h-full object-cover" />
                        </div>
                      ))}
                   </div>
                   <span className="text-[10px] font-medium text-gray-400">Join +500 today</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #06040e, transparent)' }}
      />
    </section>
  );
}
