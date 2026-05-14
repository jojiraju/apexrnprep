import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollProgress from '@/components/ScrollProgress';
import FloatingContact from '@/components/FloatingContact';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Apex RN Prep — #1 NCLEX Preparation Platform',
    template: '%s | Apex RN Prep',
  },
  description:
    'Join 12,500+ nurses who passed their NCLEX with Apex RN Prep. AI-powered adaptive learning, 10,000+ practice questions, 97% pass rate, and expert instructors. Start your free trial today.',
  keywords: [
    'NCLEX prep',
    'NCLEX-RN',
    'NCLEX-PN',
    'nursing exam',
    'nursing school',
    'nurse license',
    'clinical judgment',
    'pharmacology nursing',
  ],
  authors: [{ name: 'Apex RN Prep Team' }],
  openGraph: {
    type: 'website',
    title: 'Apex RN Prep — #1 NCLEX Preparation Platform',
    description: 'AI-powered NCLEX prep with a 97% pass rate. 12,500+ nurses passed with us.',
    siteName: 'Apex RN Prep',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex RN Prep — #1 NCLEX Preparation Platform',
    description: 'AI-powered NCLEX prep with a 97% pass rate.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable}`}>
      <body className="noise">
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
