'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Home, BookOpen, CreditCard, Layout, Info, HelpCircle, Mail, ArrowRight, MessageSquare, Send, Globe } from 'lucide-react';
import { navLinks } from '@/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 70,
          transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(6,4,14,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(139,92,246,0.15)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>

            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{
                  height: '54px',
                  width: '140px',
                  display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                  marginLeft: '-20px', // Pulls the container to the left to counteract image padding
                }}
              >
                <img 
                  src="/logo.png" 
                  alt="Apex RN Prep Logo" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain', 
                    objectPosition: 'left center', // Forces image to the left edge of container
                    mixBlendMode: 'screen',
                    filter: 'contrast(1.8) brightness(1.2)', 
                    transform: 'scale(1.6)', 
                    transformOrigin: 'left center' 
                  }} 
                />
              </motion.div>
            </Link>

            {/* Desktop links */}
            <div style={{ display: 'none' }} className="lg-nav">
              <style>{`@media(min-width:1024px){.lg-nav{display:flex!important;align-items:center;gap:4px;}}`}</style>
              {navLinks.slice(0, 6).map((link) => {
                const isActive = mounted && pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: 500,
                      textDecoration: 'none',
                      color: isActive ? '#fff' : '#9ca3af',
                      background: isActive ? 'rgba(124,58,237,0.15)' : 'transparent',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#9ca3af';
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div style={{ display: 'none' }} className="lg-cta">
              <style>{`@media(min-width:1024px){.lg-cta{display:flex!important;align-items:center;gap:12px;}}`}</style>
              <Link href="/contact" style={{ fontSize: '14px', color: '#d1d5db', textDecoration: 'none', fontWeight: 500 }}>
                Sign In
              </Link>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/courses"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '10px 20px', borderRadius: '12px',
                    background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                    color: '#fff', fontSize: '14px', fontWeight: 600,
                    textDecoration: 'none',
                    boxShadow: '0 4px 20px rgba(124,58,237,0.35)',
                  }}
                >
                  Start Free Trial <Zap size={13} fill="currentColor" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg-hide"
              style={{
                padding: '8px', borderRadius: '10px', background: 'transparent',
                border: 'none', cursor: 'pointer', color: '#d1d5db',
              }}
            >
              <style>{`@media(min-width:1024px){.lg-hide{display:none!important;}}`}</style>
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen
                  ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={22} /></motion.div>
                  : <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={22} /></motion.div>
                }
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 60,
              background: 'rgba(6,4,14,0.94)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              display: 'flex', flexDirection: 'column',
              padding: '100px 24px 40px',
            }}
          >
            {/* Background elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[30%] bg-violet-600/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[30%] bg-indigo-600/10 blur-[120px] pointer-events-none" />

            <nav className="relative z-10 flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isActive = mounted && pathname === link.href;
                const Icon = {
                  Home, BookOpen, Zap, CreditCard, Layout, Info, HelpCircle, Mail
                }[link.icon as string] || Zap;

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300"
                      style={{
                        background: isActive ? 'rgba(124,58,237,0.12)' : 'transparent',
                        border: isActive ? '1px solid rgba(139,92,246,0.2)' : '1px solid transparent',
                        boxShadow: isActive ? 'inset 0 0 20px rgba(124,58,237,0.05)' : 'none',
                      }}
                    >
                      <div 
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/30' : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white'}`}
                      >
                        <Icon size={18} />
                      </div>
                      <span 
                        className={`text-lg font-semibold transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}
                      >
                        {link.label}
                      </span>
                      {isActive && (
                        <motion.div layoutId="active-dot" className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-400 glow-violet" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="relative z-10 mt-auto flex flex-col gap-4">
              <div className="h-px bg-white/5 w-full mb-2" />
              <div className="flex items-center justify-between px-2 mb-2">
                 <div className="flex gap-4">
                    <MessageSquare size={18} className="text-gray-500 hover:text-white transition-colors" />
                    <Send size={18} className="text-gray-500 hover:text-white transition-colors" />
                    <Globe size={18} className="text-gray-500 hover:text-white transition-colors" />
                 </div>
                 <span className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">Follow Us</span>
              </div>
              <Link 
                href="/contact" 
                className="flex items-center justify-center gap-2 p-4 rounded-2xl border border-white/10 text-white font-bold transition-all hover:bg-white/5"
              >
                Sign In
              </Link>
              <Link 
                href="/courses" 
                className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold shadow-xl shadow-violet-600/20 active:scale-[0.98] transition-all"
              >
                Start Free Trial <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
