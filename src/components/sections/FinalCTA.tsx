'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Calendar } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="w-full bg-white select-text">
      
      {/* Pattern Bar Divider Row */}
      <div className="max-w-[1340px] mx-auto py-1">
        <div className="h-9 w-full border-y border-neutral-200 bg-[repeating-linear-gradient(45deg,#0000001c_0,#0000001c_1.2px,transparent_0,transparent_5px)]" />
      </div>

      {/* 1340px Enclosed Section Box Container */}
      <div className="max-w-[1340px] mx-auto border-x border-y border-neutral-200 bg-white relative">
        
        {/* Top-Left Flush Connected Pill Badge */}
        <div className="inline-flex items-center text-xs shadow-2xs -mt-[1px] -ml-[1px]">
          <span className="px-3.5 py-1.5 bg-neutral-200/90 font-bold text-neutral-900 border-r border-b border-neutral-200">
            09
          </span>
          <span className="px-4 py-1.5 bg-white font-medium text-neutral-800 border-r border-b border-neutral-200">
            Get started
          </span>
        </div>

        {/* Section Content */}
        <div className="pt-8 pb-16 px-6 sm:px-10">
          
          {/* Split Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <h2 className="text-xl sm:text-2xl font-normal sm:font-medium tracking-tight text-neutral-800 leading-snug shrink-0">
              Ship your first AI automation this week.
            </h2>
            <p className="text-sm font-normal text-neutral-500 max-w-xs leading-relaxed">
              Free to start. Zero risk. Built with enterprise guardrails, 200+ connectors, and dedicated engineering support.
            </p>
          </div>

          {/* 2 Dual Call-to-Action Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            
            {/* Card 1: Request Custom Automation */}
            <div className="border border-neutral-200 bg-white hover:bg-neutral-50/50 transition-all p-8 flex flex-col justify-between space-y-6 shadow-2xs relative group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-md border border-neutral-200 bg-neutral-50 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-neutral-900" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-neutral-900 tracking-tight">
                    Build Your Custom Automation
                  </h3>
                  <p className="text-xs sm:text-sm font-normal text-neutral-500 leading-relaxed">
                    Tell us about your team&apos;s manual daily tasks. Our AI engineering team will build a working live prototype within 48 hours.
                  </p>
                </div>
              </div>

              <Link
                href="/request-automation"
                className="w-full py-3 bg-black text-white text-xs sm:text-sm font-medium hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-2 shadow-2xs"
              >
                <span>Start Building Free</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: Schedule Strategy Call */}
            <div className="border border-neutral-200 bg-white hover:bg-neutral-50/50 transition-all p-8 flex flex-col justify-between space-y-6 shadow-2xs relative group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-md border border-neutral-200 bg-neutral-50 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-neutral-900" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-neutral-900 tracking-tight">
                    Schedule 1-on-1 Strategy Call
                  </h3>
                  <p className="text-xs sm:text-sm font-normal text-neutral-500 leading-relaxed">
                    Book a 1-on-1 strategy call with our automation architects to audit your stack, model ROI, and design custom blueprints.
                  </p>
                </div>
              </div>

              <Link
                href="/request-automation"
                className="w-full py-3 bg-white border border-neutral-300 text-neutral-900 text-xs sm:text-sm font-medium hover:bg-neutral-100 transition-colors inline-flex items-center justify-center gap-2 shadow-2xs"
              >
                <span>Book 1-on-1 Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Trust Markers Bar */}
          <div className="max-w-5xl mx-auto pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-neutral-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>200+ Enterprise Connectors</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Free Starter Tier</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>AES-256 Security Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>24/7 System Monitoring</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
