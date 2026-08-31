'use client';

import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      quote: "DIGISCALE AI's WhatsApp cart recovery bot recovered over 24% of our abandoned checkouts in the first 30 days. It paid for itself within the first 48 hours.",
      author: 'Marcus Vance',
      role: 'Founder, D2C Apparel Co.',
      category: 'Shopify E-Commerce',
      avatar: 'MV',
    },
    {
      quote: 'We eliminated 35 hours per week of manual PDF invoice entry. Line items flow directly into QuickBooks with human approval guardrails.',
      author: 'Priya Sharma',
      role: 'VP of Engineering, FinTech Ops',
      category: 'Finance & Operations',
      avatar: 'PS',
    },
    {
      quote: 'Inbound leads are qualified via WhatsApp within 10 seconds. Our calendar booking rate jumped 3.5x because no lead ever goes cold now.',
      author: 'Daniel Kim',
      role: 'Head of Growth, SaaS Metrics',
      category: 'B2B Lead Gen',
      avatar: 'DK',
    },
    {
      quote: 'Syncing real-time inventory stock across our warehouses and 3 Shopify storefronts prevented over-selling during Black Friday completely.',
      author: 'Maya Chen',
      role: 'Director of Ops, Global Retail',
      category: 'Shopify Suite',
      avatar: 'MC',
    },
    {
      quote: 'Our tier-1 ticket auto-resolution hit 38% after one month. The RAG retrieval cites exact source documents so our team trusts the outputs.',
      author: 'Alex Morgan',
      role: 'VP Customer Success, CloudScale',
      category: 'Customer Support',
      avatar: 'AM',
    },
    {
      quote: 'Every morning at 9 AM, our leadership team gets a complete Slack digest summarizing Meta ads ROI, Stripe revenue, and support volume.',
      author: 'Devon Sterling',
      role: 'Managing Director, Apex Agency',
      category: 'Executive BI',
      avatar: 'DS',
    },
  ];

  // Double the array for seamless infinite marquee loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="w-full bg-white select-text overflow-hidden">
      
      {/* Pattern Bar Divider Row */}
      <div className="max-w-[1340px] mx-auto py-1">
        <div className="h-9 w-full border-y border-neutral-200 bg-[repeating-linear-gradient(45deg,#0000001c_0,#0000001c_1.2px,transparent_0,transparent_5px)]" />
      </div>

      {/* 1340px Enclosed Section Box Container */}
      <div className="max-w-[1340px] mx-auto border-x border-y border-neutral-200 bg-white relative">
        
        {/* Top-Left Flush Connected Pill Badge */}
        <div className="inline-flex items-center text-xs shadow-2xs -mt-[1px] -ml-[1px]">
          <span className="px-3.5 py-1.5 bg-neutral-200/90 font-bold text-neutral-900 border-r border-b border-neutral-200">
            07
          </span>
          <span className="px-4 py-1.5 bg-white font-medium text-neutral-800 border-r border-b border-neutral-200">
            Customer stories
          </span>
        </div>

        {/* Section Content */}
        <div className="pt-8 pb-16 px-6 sm:px-10">
          
          {/* Split Header (Matching Integrations Section Heading Size 100%: text-xl sm:text-2xl) */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <h2 className="text-xl sm:text-2xl font-normal sm:font-medium tracking-tight text-neutral-800 leading-snug shrink-0">
              Trusted by innovative founders and engineering leaders.
            </h2>
            <p className="text-sm font-normal text-neutral-500 max-w-xs leading-relaxed">
              Read how engineering and operations teams use DIGISCALE AI to automate mission-critical workflows with zero downtime.
            </p>
          </div>

          {/* Smooth Continuous Infinite Marquee Animated Track */}
          <div className="relative w-full overflow-hidden group">
            
            {/* Left & Right Subtle Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex items-stretch gap-6 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 35,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedReviews.map((rev, idx) => (
                <div 
                  key={`${rev.author}-${idx}`}
                  className="w-[360px] sm:w-[400px] border border-neutral-200 bg-white hover:bg-neutral-50/50 transition-all p-7 flex flex-col justify-between space-y-6 shadow-2xs relative shrink-0 group/card"
                >
                  
                  {/* Card Top: Rating Stars + Category Tag */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] font-medium text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-xs border border-neutral-200/60">
                        {rev.category}
                      </span>
                    </div>

                    {/* Quote Body */}
                    <div className="relative">
                      <Quote className="w-5 h-5 text-neutral-300 absolute -top-1 -left-1 stroke-[1.5] opacity-40" />
                      <p className="text-xs sm:text-sm font-normal text-neutral-700 leading-relaxed pl-4">
                        &ldquo;{rev.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom: Author Bio Only */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-black text-white text-xs font-semibold flex items-center justify-center shrink-0 shadow-xs">
                      {rev.avatar}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-neutral-900 flex items-center gap-1.5">
                        <span>{rev.author}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      </h4>
                      <p className="text-[11px] font-normal text-neutral-500">{rev.role}</p>
                    </div>
                  </div>

                </div>
              ))}
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
};
