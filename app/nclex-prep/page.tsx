import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Brain, BookOpen, Zap, Target } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'NCLEX Prep — Complete NCLEX Preparation Guide',
  description: 'Everything you need to know about the NCLEX exam — format, content areas, NGN changes, and how Apex RN Prep helps you succeed.',
};

const nclexFacts = [
  { label: 'Question Range', value: '85–145', note: 'Adaptive CAT format' },
  { label: 'Time Limit', value: '5 hrs', note: 'Including breaks' },
  { label: 'Content Areas', value: '8', note: 'Client Needs categories' },
  { label: 'NGN Items', value: '~30%', note: 'Of total questions' },
];

const contentAreas = [
  { name: 'Management of Care', pct: '17–23%', icon: '👑' },
  { name: 'Safety and Infection Control', pct: '9–15%', icon: '🛡️' },
  { name: 'Health Promotion & Maintenance', pct: '6–12%', icon: '💪' },
  { name: 'Psychosocial Integrity', pct: '6–12%', icon: '🧠' },
  { name: 'Basic Care and Comfort', pct: '6–12%', icon: '❤️' },
  { name: 'Pharmacological Therapies', pct: '13–19%', icon: '💊' },
  { name: 'Reduction of Risk', pct: '9–15%', icon: '⚕️' },
  { name: 'Physiological Adaptation', pct: '11–17%', icon: '🔬' },
];

export default function NclexPrepPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-violet-600/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
            🏥 NCLEX Resource Center
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            The Complete <span className="gradient-text">NCLEX</span> Guide
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Everything you need to understand the NCLEX exam — from format and content areas to the latest Next Generation NCLEX updates.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold shadow-xl shadow-violet-500/25 hover:-translate-y-1 transition-all duration-300"
          >
            Start NCLEX Prep <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* NCLEX Facts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {nclexFacts.map((fact) => (
            <div key={fact.label} className="glass rounded-2xl p-6 border border-violet-500/15 text-center hover:border-violet-500/35 transition-all hover:-translate-y-1 duration-300">
              <div className="text-4xl font-bold gradient-text mb-1">{fact.value}</div>
              <p className="text-white font-semibold text-sm mb-1">{fact.label}</p>
              <p className="text-gray-500 text-xs">{fact.note}</p>
            </div>
          ))}
        </div>

        {/* Content areas */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">NCLEX Content Areas</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              The NCLEX-RN tests across 8 Client Needs categories. Understanding the weight of each category helps you prioritize your study time effectively.
            </p>
            <div className="space-y-4">
              {contentAreas.map((area) => (
                <div key={area.name} className="flex items-center gap-4 p-4 glass rounded-xl border border-violet-500/10 hover:border-violet-500/25 transition-all">
                  <span className="text-xl">{area.icon}</span>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{area.name}</p>
                  </div>
                  <span className="text-violet-300 text-sm font-bold">{area.pct}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Next Generation NCLEX</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                The NGN (introduced April 2023) uses the Clinical Judgment Measurement Model (CJMM) to assess higher-order thinking. About 30% of your exam will include NGN item types.
              </p>
            </div>

            {[
              { icon: Brain, title: 'Clinical Judgment', desc: 'Questions assess your ability to recognize cues, analyze information, and prioritize hypotheses.' },
              { icon: Target, title: 'Case Studies', desc: 'Multi-layered scenarios test your decision-making across 6 cognitive skills.' },
              { icon: Zap, title: 'New Item Types', desc: 'Bow-tie, extended drag & drop, enhanced hotspot, and matrix/grid items.' },
              { icon: BookOpen, title: 'Standalone Items', desc: 'Traditional NCLEX questions updated to incorporate clinical judgment language.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={18} className="text-violet-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}

            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-300 font-semibold text-sm hover:bg-violet-600/30 hover:border-violet-500/50 transition-all"
            >
              Master NGN with Our Course <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
