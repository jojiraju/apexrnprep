import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data';
import { Clock, User, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog — NCLEX Tips, Nursing Insights & Study Guides',
  description: 'Expert articles on NCLEX preparation, nursing study strategies, pharmacology tips, and clinical judgment from our instructors.',
};

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
            ✍️ Expert Insights
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Nursing <span className="gradient-text">Knowledge Hub</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expert tips, study guides, and NCLEX strategies from our team of experienced nursing educators.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Featured */}
        <div className="mb-10">
          <Link href={`/blog/${blogPosts[0].slug}`} className="group block">
            <div className={`glass rounded-3xl p-8 sm:p-12 border border-violet-500/15 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${blogPosts[0].color}`}>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between mb-6">
                <span className="inline-flex px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-semibold border border-violet-500/20">
                  {blogPosts[0].category}
                </span>
                <div className="flex items-center gap-4 text-gray-400 text-xs">
                  <span className="flex items-center gap-1"><Clock size={12} />{blogPosts[0].readTime}</span>
                  <span>{blogPosts[0].date}</span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 group-hover:text-violet-200 transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <User size={14} />
                  <span>{blogPosts[0].author}</span>
                </div>
                <span className="flex items-center gap-1.5 text-violet-300 font-semibold text-sm group-hover:gap-2.5 transition-all">
                  Read Article <ArrowRight size={15} />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Rest */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <div className={`h-full glass rounded-3xl p-7 border border-violet-500/15 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col bg-gradient-to-br ${post.color}`}>
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-full bg-violet-500/15 text-violet-300 text-xs font-semibold border border-violet-500/15">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3 flex-1 group-hover:text-violet-200 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-5 border-t border-violet-500/10">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <User size={12} />
                    <span>{post.author}</span>
                  </div>
                  <span className="text-gray-500 text-xs">{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
