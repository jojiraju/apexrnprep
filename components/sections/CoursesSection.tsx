'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Users, ArrowRight, Crown, Flame } from 'lucide-react';
import { courses } from '@/data';

const cardStyle = {
  background: 'rgba(26,22,54,0.45)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid rgba(139,92,246,0.18)',
  boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)',
};

export default function CoursesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            📚 Expert-Crafted Curriculum
          </span>
          <h2 className="text-white font-display font-bold mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', letterSpacing: '-0.02em' }}>
            Choose Your <span className="gradient-text glow-text">Path to</span> Success
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: '#9ca3af' }}>
            Whether you're a first-time test taker or retaking the NCLEX, we have a course designed for your unique situation.
          </p>
        </motion.div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative rounded-3xl p-6 flex flex-col"
              style={{
                ...cardStyle,
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              {/* Badge */}
              {course.badge && (
                <div className="absolute -top-3.5 left-6">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-white text-xs font-bold"
                    style={{
                    background: 'var(--brand-gradient)',
                      boxShadow: '0 4px 16px rgba(124,58,237,0.4)',
                    }}
                  >
                    {course.badge === 'Most Popular' && <Crown size={11} />}
                    {course.badge === 'High Demand' && <Flame size={11} />}
                    {course.badge === 'New' && '✨'}
                    {course.badge}
                  </span>
                </div>
              )}

              {/* Icon Container */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 mt-2 relative group-hover:scale-110 transition-transform duration-500"
                style={{
                  background: 'rgba(124,58,237,0.1)',
                  border: '1px solid rgba(139,92,246,0.2)',
                  boxShadow: 'inset 0 0 20px rgba(124,58,237,0.1)'
                }}
              >
                <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-violet-500" />
                <span className="relative z-10">{course.icon}</span>
              </div>

              <h3 className="text-white font-display font-bold text-xl mb-3 group-hover:text-violet-300 transition-colors">{course.title}</h3>
              <p className="text-sm leading-relaxed mb-6 flex-1 line-clamp-3" style={{ color: '#9ca3af' }}>
                {course.description}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs mb-6 font-medium" style={{ color: '#9ca3af' }}>
                <span className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10">
                  <Star size={12} fill="#f59e0b" style={{ color: '#f59e0b' }} />
                  <span style={{ color: '#fbbf24' }}>{course.rating}</span>
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10">
                  <Users size={12} />
                  {course.students.toLocaleString()} students
                </span>
                <span
                  className="px-2.5 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300"
                >
                  {course.duration}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-1.5 mb-6">
                {course.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs" style={{ color: '#d1d5db' }}>
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: '#a78bfa' }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Price + CTA */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#6b7280' }}>Price</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-white">${course.price}</span>
                    <span className="text-[10px] opacity-50" style={{ color: '#d1d5db' }}>/ course</span>
                  </div>
                </div>
                <Link
                  href="/courses"
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 group/btn"
                  style={{
                    background: 'var(--brand-gradient)',
                    color: '#fff',
                    boxShadow: '0 4px 15px rgba(124,58,237,0.3)',
                  }}
                >
                  Enroll 
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-base"
            style={{
              background: 'var(--brand-gradient)',
              boxShadow: '0 8px 32px rgba(124,58,237,0.3)',
              transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            }}
          >
            View All Courses <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
