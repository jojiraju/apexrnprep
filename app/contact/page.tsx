import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us — Get in Touch',
  description: 'Have questions about our NCLEX prep courses? Our support team is here to help. Contact us today.',
};

export default function ContactPage() {
  return <ContactClient />;
}
