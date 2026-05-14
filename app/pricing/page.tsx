import type { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'Pricing — Flexible Plans for Every Nurse',
  description: 'Choose the NCLEX prep plan that fits your needs. Starter, Professional, and Elite plans with a 14-day money-back guarantee.',
};

export default function PricingPage() {
  return <PricingClient />;
}
