import type { Metadata } from 'next';
import InstructorsSection from '@/components/sections/InstructorsSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'About Us — Our Mission & Team',
  description: 'Learn about Apex RN Prep\'s mission to help every nursing graduate pass the NCLEX and launch a successful career.',
};

const values = [
  { icon: '🎯', title: 'Student-First', description: 'Every feature, every decision we make starts with one question: does this help our students pass?' },
  { icon: '🔬', title: 'Evidence-Based', description: 'Our curriculum is built on NCSBN test plans, clinical evidence, and data from thousands of student outcomes.' },
  { icon: '🤝', title: 'Accessible', description: 'Nursing is for everyone. We offer flexible plans, multilingual support, and financial assistance programs.' },
  { icon: '🚀', title: 'Innovative', description: 'We continuously evolve our platform with AI, adaptive learning, and the latest NGN question formats.' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
            🏥 Our Story
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Built by Nurses, <span className="gradient-text">For Nurses</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Apex RN Prep was founded in 2018 by a team of experienced RNs and clinical educators who were frustrated by outdated, ineffective NCLEX prep methods. We built the platform we wished existed.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Our <span className="gradient-text">Mission</span></h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Every year, thousands of talented, hard-working nursing graduates fail the NCLEX — not because they aren't smart or capable, but because they don't have access to the right preparation tools.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our mission is to change that. We believe every nursing student deserves world-class NCLEX preparation regardless of their background, budget, or prior test performance.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Through adaptive AI, expert instruction, and a deeply supportive community, we've helped 12,500+ nurses pass their NCLEX and step confidently into their careers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="glass rounded-2xl p-6 border border-violet-500/15 hover:border-violet-500/35 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <InstructorsSection />
      <CTASection />
    </div>
  );
}
