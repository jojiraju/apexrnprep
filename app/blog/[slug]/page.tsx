import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, User, Share2 } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="pt-24 pb-24 max-w-3xl mx-auto px-4 sm:px-6">
      <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-violet-300 transition-colors text-sm mb-10 group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      <div className="mb-6">
        <span className="px-3 py-1 rounded-full bg-violet-500/15 text-violet-300 text-xs font-semibold border border-violet-500/15">
          {post.category}
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">{post.title}</h1>

      <div className="flex items-center gap-6 text-gray-400 text-sm mb-12 pb-8 border-b border-violet-500/10">
        <span className="flex items-center gap-1.5"><User size={14} />{post.author}</span>
        <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime}</span>
        <span>{post.date}</span>
      </div>

      {/* Article content */}
      <div className="prose prose-invert prose-violet max-w-none">
        <p className="text-gray-300 text-lg leading-relaxed mb-6">{post.excerpt}</p>
        <p className="text-gray-400 leading-relaxed mb-6">
          The nursing profession demands both deep knowledge and sharp clinical judgment. Whether you&apos;re preparing for the NCLEX-RN or NCLEX-PN, understanding the current exam format and content distribution is your first step toward success.
        </p>
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Understanding the Content</h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          This article covers comprehensive strategies and evidence-based approaches that have helped thousands of nursing graduates pass their NCLEX exam on the first attempt.
        </p>
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">Key Strategies</h2>
        <ul className="space-y-3 mb-6">
          {['Master the clinical judgment framework', 'Practice with NGN-style questions daily', 'Focus on pharmacology mnemonics', 'Use the process of elimination strategically', 'Prioritize your weakest content areas'].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-gray-400">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-400 leading-relaxed">
          Ready to apply these strategies with the best NCLEX prep platform available? Start your free trial at Apex RN Prep today and join 12,500+ nurses who have already passed.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-violet-500/10 flex items-center justify-between">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-violet-500/25"
        >
          Start NCLEX Prep
        </Link>
        <button className="flex items-center gap-2 text-gray-400 hover:text-violet-300 transition-colors text-sm">
          <Share2 size={16} />
          Share Article
        </button>
      </div>
    </div>
  );
}
