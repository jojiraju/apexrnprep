import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import TrustedBanner from '@/components/sections/TrustedBanner';
import StatsSection from '@/components/sections/StatsSection';
import CoursesSection from '@/components/sections/CoursesSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import LearningProcess from '@/components/sections/LearningProcess';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import InstructorsSection from '@/components/sections/InstructorsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Apex RN Prep — #1 NCLEX Preparation Platform',
  description:
    'Join 12,500+ nurses who passed their NCLEX with Apex RN Prep. AI-powered adaptive learning, 97% pass rate, expert instructors, and a passing guarantee.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBanner />
      <StatsSection />
      <CoursesSection />
      <WhyChooseUs />
      <LearningProcess />
      <TestimonialsSection />
      <InstructorsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
