'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email is required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim() || form.message.length < 20) e.message = 'Message must be at least 20 characters';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setTimeout(() => setSubmitted(true), 500);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'support@apexrnprep.com', href: 'mailto:support@apexrnprep.com' },
    { icon: Phone, label: 'Phone', value: '1-800-273-9766', href: 'tel:18002739766' },
    { icon: MapPin, label: 'Address', value: 'Austin, Texas, USA', href: '#' },
  ];

  return (
    <div className="pt-20">
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
            📬 Get in Touch
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            We're Here to <span className="gradient-text">Help</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Questions about courses, billing, or the NCLEX? Our support team typically responds within 2 hours.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Contact Information</h2>
              <p className="text-gray-400 text-sm">Reach us through any of the channels below.</p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-5 glass rounded-2xl border border-violet-500/15 hover:border-violet-500/35 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-violet-500/15 flex items-center justify-center group-hover:bg-violet-500/25 transition-colors">
                    <Icon size={18} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">{label}</p>
                    <p className="text-white font-medium text-sm">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="glass rounded-2xl p-6 border border-violet-500/15">
              <h3 className="text-white font-semibold mb-4">Support Hours</h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: 'Mon – Fri', hours: '8 AM – 8 PM EST' },
                  { day: 'Saturday', hours: '9 AM – 5 PM EST' },
                  { day: 'Sunday', hours: '10 AM – 4 PM EST' },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-gray-400">{day}</span>
                    <span className="text-white font-medium">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-3xl p-8 border border-violet-500/20">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-5"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle size={40} className="text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. Our team will get back to you within 2 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="px-6 py-3 rounded-xl border border-violet-500/30 text-white hover:bg-violet-500/10 transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold text-white mb-6">Send a Message</h2>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { key: 'name', label: 'Full Name', placeholder: 'Sarah Johnson', type: 'text' },
                      { key: 'email', label: 'Email Address', placeholder: 'sarah@email.com', type: 'email' },
                    ].map(({ key, label, placeholder, type }) => (
                      <div key={key}>
                        <label className="block text-gray-300 text-sm font-medium mb-2">{label}</label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          value={form[key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-violet-500/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500/50 transition-colors"
                        />
                        {errors[key] && <p className="text-rose-400 text-xs mt-1">{errors[key]}</p>}
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d0a1c] border border-violet-500/20 text-white text-sm focus:outline-none focus:border-violet-500/50 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option>Question about a course</option>
                      <option>Billing or subscription</option>
                      <option>Technical support</option>
                      <option>NCLEX exam questions</option>
                      <option>Passing guarantee claim</option>
                      <option>Other</option>
                    </select>
                    {errors.subject && <p className="text-rose-400 text-xs mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-violet-500/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
                    />
                    {errors.message && <p className="text-rose-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300"
                  >
                    Send Message <Send size={18} />
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
