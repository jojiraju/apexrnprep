'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Share2, Video, Camera, ArrowRight, Zap } from 'lucide-react';

const footerLinks = {
  Courses: [
    { label: 'NCLEX-RN Complete Prep', href: '/courses' },
    { label: 'NCLEX-PN Focused Review', href: '/courses' },
    { label: 'Clinical Judgment Mastery', href: '/courses' },
    { label: 'Pharmacology Bootcamp', href: '/courses' },
    { label: 'Medical-Surgical Nursing', href: '/courses' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Instructors', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Careers', href: '/contact' },
  ],
  Support: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

const socials = [
  { icon: Globe, href: '#', label: 'Website' },
  { icon: Share2, href: '#', label: 'LinkedIn' },
  { icon: Video, href: '#', label: 'YouTube' },
  { icon: Camera, href: '#', label: 'Instagram' },
];

const contactItems = [
  { icon: Mail, text: 'support@apexrnprep.com' },
  { icon: Phone, text: '1-800-APEX-RN' },
  { icon: MapPin, text: 'Austin, Texas, USA' },
];

const glassInput: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '12px',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(139,92,246,0.2)',
  color: '#fff',
  fontSize: '14px',
  outline: 'none',
};

export default function Footer() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden', background: '#050312', borderTop: '1px solid rgba(139,92,246,0.12)' }}>

      {/* Background blobs */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', bottom: 0, left: '20%', width: '340px', height: '340px', background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: 0, right: '20%', width: '240px', height: '240px', background: 'radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="bg-grid" style={{ position: 'absolute', inset: 0 }} />
      </div>

      {/* Newsletter bar */}
      <div style={{ position: 'relative', borderBottom: '1px solid rgba(139,92,246,0.1)', padding: '48px 0' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
            <div>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.3rem', marginBottom: '6px' }}>Stay Ahead in Your NCLEX Journey</h3>
              <p style={{ color: '#6b7280', fontSize: '14px' }}>Get weekly tips, practice questions, and study strategies — free.</p>
            </div>
            <form style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <input type="email" placeholder="Enter your email address" style={{ ...glassInput, minWidth: '240px', width: 'auto' }} />
              <motion.button
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="submit"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '12px 24px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                  color: '#fff', fontSize: '14px', fontWeight: 600,
                  border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
                  boxShadow: '0 4px 20px rgba(124,58,237,0.3)',
                }}
              >
                Subscribe <ArrowRight size={15} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div style={{ position: 'relative', maxWidth: '80rem', margin: '0 auto', padding: '64px 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px' }}>

          {/* Brand column */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', marginBottom: '10px' }}>
              <div
                style={{
                  height: '60px',
                  width: '180px',
                  display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                  marginLeft: '-22px',
                }}
              >
                <img 
                  src="/logo.png" 
                  alt="Apex RN Prep Logo" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain', 
                    objectPosition: 'left center',
                    mixBlendMode: 'screen',
                    filter: 'contrast(1.8) brightness(1.2)', 
                    transform: 'scale(1.6)', 
                    transformOrigin: 'left center' 
                  }} 
                />
              </div>
            </Link>
            <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.7, maxWidth: '240px', marginBottom: '20px' }}>
              The most comprehensive NCLEX preparation platform trusted by 12,500+ nurses worldwide. Your success is our mission.
            </p>

            {contactItems.map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#6b7280', fontSize: '13px' }}>
                <Icon size={14} color="#a78bfa" />
                <span>{text}</span>
              </div>
            ))}

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label} href={href}
                  whileHover={{ scale: 1.12, y: -2 }}
                  aria-label={label}
                  style={{
                    width: '34px', height: '34px', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(139,92,246,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#6b7280', transition: 'all 0.2s ease',
                  }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '13px', marginBottom: '18px' }}>{title}</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} style={{ color: '#6b7280', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s ease' }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid rgba(139,92,246,0.1)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <p style={{ color: '#4b5563', fontSize: '13px' }}>© 2026 Apex RN Prep. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 6px #34d399', animation: 'pulse 2s ease-in-out infinite' }} />
            <span style={{ color: '#4b5563', fontSize: '13px' }}>97% National Pass Rate — Class of 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
