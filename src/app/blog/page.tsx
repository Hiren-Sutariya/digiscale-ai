'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blogData';
import { ArrowUpRight, Clock, User } from 'lucide-react';

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white text-neutral-900 select-text">
      
      {/* Pattern Bar Divider Row */}
      <div className="max-w-[1340px] mx-auto py-1">
        <div className="h-9 w-full border-y border-neutral-200 bg-[repeating-linear-gradient(45deg,#0000001c_0,#0000001c_1.2px,transparent_0,transparent_5px)]" />
      </div>

      {/* 1340px Enclosed Page Container */}
      <div className="max-w-[1340px] mx-auto border-x border-y border-neutral-200 bg-white relative pb-20">
        
        {/* Top-Left Flush Connected Pill Badge */}
        <div className="inline-flex items-center text-xs shadow-2xs -mt-[1px] -ml-[1px]">
          <span className="px-3.5 py-1.5 bg-neutral-200/90 font-bold text-neutral-900 border-r border-b border-neutral-200">
            Insights
          </span>
          <span className="px-4 py-1.5 bg-white font-medium text-neutral-800 border-r border-b border-neutral-200">
            Blog & Articles
          </span>
        </div>

        {/* Clean Blog Cards Grid (No Headers, No Filters) */}
        <div className="pt-10 px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="border border-neutral-200 bg-white hover:bg-neutral-50/60 transition-all flex flex-col justify-between overflow-hidden shadow-2xs relative group min-h-[360px]"
              >
                
                {/* Article Thumbnail Image */}
                <div className="w-full h-48 overflow-hidden bg-neutral-100 border-b border-neutral-200 relative">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-900 bg-white/95 backdrop-blur-xs px-2.5 py-1 border border-neutral-200 shadow-2xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h2 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-black flex items-start justify-between gap-2">
                      <span>{post.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors opacity-0 group-hover:opacity-100 shrink-0 mt-1" />
                    </h2>
                    <p className="text-xs font-normal text-neutral-500 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Author & Read Time Footer */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-normal">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                </div>

              </Link>
            ))}
          </div>
        </div>

      </div>

    </main>
  );
}
