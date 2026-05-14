'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, X, Crown, ArrowRight } from 'lucide-react';
import { pricingPlans } from '@/data';
import { useState } from 'react';
import CTASection from '@/components/sections/CTASection';
import FAQSection from '@/components/sections/FAQSection';

export default function PricingClient() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const discount = 0.2; // 20% off for annual

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-violet-600/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
            💎 Transparent Pricing
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Simple, <span className="gradient-text">Flexible</span> Plans
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Invest in your nursing career. All plans include a 14-day money-back guarantee.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 glass rounded-2xl p-1.5 border border-violet-500/20">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${billing === 'monthly' ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${billing === 'annual' ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30' : 'text-gray-400 hover:text-white'}`}
            >
              Annual
              <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded-full font-bold">-20%</span>
            </button>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => {
            const price = billing === 'annual' ? Math.round(plan.price * (1 - discount)) : plan.price;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-violet-600/20 to-indigo-600/10 border-2 border-violet-500/50 shadow-2xl shadow-violet-500/20'
                    : 'glass border border-violet-500/15 hover:border-violet-500/35'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold shadow-lg shadow-violet-500/30 whitespace-nowrap">
                      <Crown size={11} />
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-bold text-white">${price}</span>
                    <span className="text-gray-400 text-sm pb-2">/ {billing === 'annual' ? 'mo, billed annually' : 'month'}</span>
                  </div>
                  {billing === 'annual' && (
                    <p className="text-emerald-400 text-xs mt-1 font-medium">
                      Save ${(plan.price - price) * 12}/year
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <Check size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                  {plan.excluded.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600 line-through">
                      <X size={15} className="text-gray-600 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/contact"
                    className={`block text-center py-4 rounded-2xl font-bold transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50'
                        : 'border border-violet-500/30 text-white hover:bg-violet-500/10 hover:border-violet-500/60'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 glass rounded-3xl p-8 border border-violet-500/15 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
        >
          <div className="text-5xl">🛡️</div>
          <div>
            <h3 className="text-white font-bold text-xl mb-2">14-Day Money-Back Guarantee</h3>
            <p className="text-gray-400 text-sm">
              We're confident you'll love Apex RN Prep. If you're not 100% satisfied within the first 14 days, we'll give you a full refund — no questions asked.
            </p>
          </div>
        </motion.div>
      </div>

      <FAQSection />
    </div>
  );
}
