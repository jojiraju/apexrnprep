'use client';

import { trustedBadges } from '@/data';

export default function TrustedBanner() {
  const doubled = [...trustedBadges, ...trustedBadges];

  return (
    <section
      className="relative py-12 overflow-hidden"
      style={{ borderTop: '1px solid rgba(139,92,246,0.12)', borderBottom: '1px solid rgba(139,92,246,0.12)' }}
    >
      {/* Fade masks */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
        style={{
          width: '140px',
          background: 'linear-gradient(to right, #06040e, transparent)',
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
        style={{
          width: '140px',
          background: 'linear-gradient(to left, #06040e, transparent)',
        }}
      />

      <div className="mb-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#4b5563' }}>
          Recognized & Endorsed By
        </p>
      </div>

      <div className="flex overflow-hidden">
        <div className="flex animate-marquee gap-6 items-center shrink-0">
          {doubled.map((badge, i) => (
            <div
              key={`${badge}-${i}`}
              className="flex items-center gap-2.5 shrink-0 rounded-xl px-5 py-2.5"
              style={{
                background: 'rgba(13,10,28,0.55)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(139,92,246,0.12)',
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: '#a78bfa' }}
              />
              <span className="text-sm font-medium whitespace-nowrap" style={{ color: '#d1d5db' }}>
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
