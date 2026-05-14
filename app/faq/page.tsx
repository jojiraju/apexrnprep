import type { Metadata } from 'next';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'FAQ — Common NCLEX Questions Answered',
  description: 'Get answers to the most common questions about the NCLEX exam and Apex RN Prep courses.',
};

export default function FAQPage() {
  return (
    <div className="pt-20">
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
            ❓ Got Questions?
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about our platform and preparing for the NCLEX exam.
          </p>
        </div>
      </div>
      <FAQSection />
      <CTASection />
    </div>
  );
}
