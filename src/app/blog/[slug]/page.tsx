'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blogData';
import { RollingText } from '@/components/ui/RollingText';
import { ArrowLeft, Clock, Calendar, ArrowRight, ShieldCheck, List, Share2, BookOpen } from 'lucide-react';

export default function BlogPostDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-neutral-900 select-text">
      
      {/* Pattern Bar Divider Row */}
      <div className="max-w-[1340px] mx-auto py-1">
        <div className="h-9 w-full border-y border-neutral-200 bg-[repeating-linear-gradient(45deg,#0000001c_0,#0000001c_1.2px,transparent_0,transparent_5px)]" />
      </div>

      {/* 1340px Enclosed Main Article Container */}
      <div className="max-w-[1340px] mx-auto border-x border-y border-neutral-200 bg-white relative pb-20">
        
        {/* Top Back Navigation Bar */}
        <div className="pt-6 pb-6 px-6 sm:px-10 border-b border-neutral-200 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-700 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-900 bg-neutral-100 px-3 py-1 border border-neutral-200/70">
            {post.category}
          </span>
        </div>

        {/* Article Header Banner */}
        <div className="pt-10 pb-12 px-6 sm:px-10 border-b border-neutral-200">
          <div className="space-y-6">
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-4xl">
              {post.excerpt}
            </p>

            {/* Author & Meta Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500 font-medium border-t border-neutral-100">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-9 h-9 rounded-full object-cover border border-neutral-200"
                />
                <div>
                  <div className="font-semibold text-neutral-900 text-xs sm:text-sm">{post.author.name}</div>
                  <div className="text-[11px] text-neutral-500">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{post.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="pt-4 overflow-hidden border border-neutral-200 shadow-2xs">
              <img
                src={post.heroImage}
                alt={post.title}
                className="w-full h-[340px] sm:h-[450px] object-cover"
              />
            </div>

          </div>
        </div>

        {/* 2-COLUMN FULL-WIDTH LAYOUT UTILIZING SIDE SPACE PERFECTLY */}
        <div className="pt-12 px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Main Article Body Column (8 Cols - Wider Text Width) */}
            <div className="lg:col-span-8 space-y-10">
              
              <article 
                className="prose prose-neutral sm:prose-lg max-w-none text-xs sm:text-sm lg:text-[15px] text-neutral-800 leading-relaxed space-y-6 [&_h2]:text-xl sm:[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-neutral-900 [&_h2]:tracking-tight [&_h2]:pt-6 [&_h2]:border-t [&_h2]:border-neutral-200 [&_h3]:text-base sm:[&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-neutral-900 [&_blockquote]:border-l-2 [&_blockquote]:border-black [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-neutral-700 [&_pre]:bg-neutral-900 [&_pre]:text-neutral-100 [&_pre]:p-5 [&_pre]:rounded-xs [&_pre]:overflow-x-auto [&_code]:text-xs [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Callout Banner Below Article */}
              <div className="mt-14 p-8 bg-neutral-50 border border-neutral-200 space-y-4 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-black" />
                  <span>Deploy Autonomous Agents In Your Business</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Want to automate your team&apos;s manual daily tasks? DIGISCALE AI builds battle-tested AI agent workflows with enterprise SOC-2 security.
                </p>
                <div className="pt-2">
                  <Link
                    href="/request-automation"
                    className="group relative overflow-hidden inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white text-xs font-medium border border-black hover:bg-neutral-800 transition-colors shadow-2xs"
                  >
                    <RollingText text="Request Custom Workflow Setup" />
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>

            {/* Right Sticky Sidebar Column (4 Cols - Utilizes Side Space) */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-28 space-y-8">
                
                {/* Executive Summary Card */}
                <div className="p-6 border border-neutral-200 bg-neutral-50/80 space-y-3 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 uppercase tracking-wider">
                    <List className="w-4 h-4" />
                    <span>Executive Summary</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    This market research report examines production multi-agent architectures, security guardrails, and real-world enterprise ROI metrics.
                  </p>
                </div>

                {/* Automation Audit CTA Widget */}
                <div className="p-6 border border-neutral-200 bg-black text-white space-y-4 shadow-2xs">
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-neutral-300 uppercase tracking-wider">Engineering SLA</div>
                    <div className="text-sm font-semibold text-white">Need a Custom AI Automation Blueprint?</div>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Our AI architects will audit your workflow stack and deliver a working prototype in 48 hours.
                  </p>
                  <Link
                    href="/request-automation"
                    className="group relative overflow-hidden w-full py-2.5 bg-white text-black border border-white text-xs font-medium hover:bg-neutral-100 transition-colors inline-flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <RollingText text="Book Free Audit" />
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Related Articles Widget */}
                <div className="p-6 border border-neutral-200 bg-white space-y-4 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 uppercase tracking-wider pb-2 border-b border-neutral-100">
                    <BookOpen className="w-4 h-4" />
                    <span>More Market Research</span>
                  </div>

                  <div className="space-y-4 divide-y divide-neutral-100">
                    {relatedPosts.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/blog/${rel.slug}`}
                        className="block pt-3 first:pt-0 group"
                      >
                        <h4 className="text-xs font-semibold text-neutral-900 group-hover:text-black leading-snug line-clamp-2">
                          {rel.title}
                        </h4>
                        <div className="text-[11px] text-neutral-400 mt-1 flex items-center justify-between">
                          <span>{rel.category}</span>
                          <span>{rel.readTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

    </main>
  );
}
