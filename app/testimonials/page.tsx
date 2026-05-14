import type { Metadata } from 'next';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Testimonials — Student Success Stories',
  description: 'Read real success stories from nurses who passed their NCLEX with Apex RN Prep.',
};

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
            💬 Student Stories
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Real Nurses, <span className="gradient-text">Real Results</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't take our word for it. Hear from the 12,500+ nurses who achieved their dreams with Apex RN Prep.
          </p>
        </div>
      </div>
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
