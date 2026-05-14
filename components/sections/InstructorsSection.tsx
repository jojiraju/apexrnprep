'use client';

import { motion } from 'framer-motion';
import { instructors } from '@/data';
import { Star, Users } from 'lucide-react';

const instructorColors: Record<string, string> = {
  'from-violet-500 to-purple-700': 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
  'from-indigo-500 to-blue-700': 'linear-gradient(135deg, #6366f1, #1d4ed8)',
  'from-fuchsia-500 to-pink-700': 'linear-gradient(135deg, #d946ef, #be185d)',
};

const glassStyle = {
  background: 'rgba(13,10,28,0.55)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid rgba(139,92,246,0.15)',
};

export default function InstructorsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            👩‍⚕️ Expert Faculty
          </span>
          <h2 className="text-white font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Learn From the <span className="gradient-text">Best in Nursing</span>
          </h2>
          <p className="max-w-lg mx-auto" style={{ color: '#6b7280' }}>
            Our instructors are experienced RNs, clinical educators, and NCLEX content specialists with proven track records.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor, i) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group rounded-3xl p-8 text-center"
              style={glassStyle}
            >
              {/* Avatar */}
              <div className="relative mb-6 inline-block">
                <div
                  className="w-24 h-24 rounded-3xl flex items-center justify-center text-white text-2xl font-bold mx-auto"
                  style={{
                    background: instructorColors[instructor.color] || 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                    boxShadow: '0 16px 48px rgba(124,58,237,0.35)',
                  }}
                >
                  {instructor.initials}
                </div>
                <div
                  className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: '#10b981',
                    border: '2px solid #06040e',
                  }}
                >
                  <span className="text-xs text-white font-bold">✓</span>
                </div>
              </div>

              <h3 className="text-white font-bold text-lg mb-1">{instructor.name}</h3>
              <p className="text-sm font-medium mb-1" style={{ color: '#a78bfa' }}>{instructor.title}</p>
              <p className="text-xs mb-4" style={{ color: '#6b7280' }}>{instructor.speciality}</p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#6b7280' }}>{instructor.bio}</p>

              <div
                className="flex items-center justify-center gap-6 pt-5"
                style={{ borderTop: '1px solid rgba(139,92,246,0.12)' }}
              >
                <div className="text-center">
                  <div className="flex items-center gap-1 justify-center">
                    <Star size={12} fill="#f59e0b" style={{ color: '#f59e0b' }} />
                    <span className="text-white font-bold text-sm">{instructor.rating}</span>
                  </div>
                  <p className="text-xs" style={{ color: '#4b5563' }}>Rating</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 justify-center">
                    <Users size={12} style={{ color: '#a78bfa' }} />
                    <span className="text-white font-bold text-sm">{instructor.students.toLocaleString()}+</span>
                  </div>
                  <p className="text-xs" style={{ color: '#4b5563' }}>Students</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
