'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  // Smart Anchor Link Click Handler for Footer Links
  const handleFooterNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      
      if (pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState(null, '', href);
        }
      } else {
        e.preventDefault();
        router.push(href);
      }
    }
  };

  return (
    <footer className="w-full bg-white select-text">
      
      {/* Pattern Bar Divider Row */}
      <div className="max-w-[1340px] mx-auto py-1">
        <div className="h-9 w-full border-y border-neutral-200 bg-[repeating-linear-gradient(45deg,#0000001c_0,#0000001c_1.2px,transparent_0,transparent_5px)]" />
      </div>

      {/* 1340px Enclosed Footer Box Container */}
      <div className="max-w-[1340px] mx-auto border-x border-y border-neutral-200 bg-white relative">
        
        {/* Top-Left Flush Connected Pill Badge */}
        <div className="inline-flex items-center text-xs shadow-2xs -mt-[1px] -ml-[1px]">
          <span className="px-3.5 py-1.5 bg-neutral-200/90 font-bold text-neutral-900 border-r border-b border-neutral-200">
            AI
          </span>
          <span className="px-4 py-1.5 bg-white font-medium text-neutral-800 border-r border-b border-neutral-200">
            DIGISCALE AI Infrastructure
          </span>
        </div>

        {/* Footer Main Content Padding */}
        <div className="pt-10 pb-8 px-6 sm:px-10 space-y-12">
          
          {/* Top 4 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10">
            
            {/* Column 1: Newsletter Signup (5 Cols) */}
            <div className="lg:col-span-5 space-y-4 pr-0 lg:pr-8">
              <h3 className="text-base font-bold text-neutral-900 tracking-tight">
                Join 5K+ Readers
              </h3>
              <p className="text-xs sm:text-sm font-normal text-neutral-500 max-w-sm leading-relaxed">
                Get 1 actionable AI automation blueprint every Tuesday. All in under 3 minutes.
              </p>

              {subscribed ? (
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-4 py-2.5 border border-emerald-200 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Subscribed! Check your inbox next Tuesday.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="pt-2">
                  <div className="relative inline-flex items-center w-full max-w-md p-1 bg-neutral-100/90 border border-neutral-300 rounded-full shadow-2xs">
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-2.5 bg-transparent text-xs sm:text-sm text-neutral-900 placeholder-neutral-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-black text-white text-xs font-medium rounded-full hover:bg-neutral-800 transition-colors inline-flex items-center gap-1 shrink-0 shadow-2xs"
                    >
                      <span>Subscribe</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Column 2: Navigation (2.5 Cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2 text-xs sm:text-sm font-normal text-neutral-600">
                <li>
                  <Link href="/" className="hover:text-black transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/#about" onClick={(e) => handleFooterNavClick(e, '/#about')} className="hover:text-black transition-colors">About</Link>
                </li>
                <li>
                  <Link href="/automations" className="hover:text-black transition-colors">Automations</Link>
                </li>
                <li>
                  <Link href="/#pricing" onClick={(e) => handleFooterNavClick(e, '/#pricing')} className="hover:text-black transition-colors">Pricing</Link>
                </li>
                <li>
                  <Link href="/request-automation" className="hover:text-black transition-colors">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal (2.5 Cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2 text-xs sm:text-sm font-normal text-neutral-600">
                <li>
                  <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/security" className="hover:text-black transition-colors">SOC-2 Security</Link>
                </li>
                <li>
                  <Link href="/compliance" className="hover:text-black transition-colors">Compliance</Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Socials (2 Cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Socials</h4>
              <ul className="space-y-2 text-xs sm:text-sm font-normal text-neutral-600">
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors inline-flex items-center gap-1">
                    <span>X (Twitter)</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors inline-flex items-center gap-1">
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors inline-flex items-center gap-1">
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors inline-flex items-center gap-1">
                    <span>YouTube</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Middle Section: GIANT Full-Width Brand Typography */}
          <div className="py-6 sm:py-8 border-y border-neutral-200 overflow-hidden flex items-center justify-center">
            <h1 className="text-[12vw] sm:text-[10vw] lg:text-[115px] xl:text-[135px] font-black tracking-tighter text-neutral-900 leading-none uppercase text-center select-none w-full">
              DIGISCALE AI
            </h1>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
            <div>
              ©{new Date().getFullYear()} DIGISCALE AI. ALL RIGHTS RESERVED.
            </div>
            <div>
              PRODUCTION-GRADE AI INFRASTRUCTURE
            </div>
          </div>

        </div>

      </div>

    </footer>
  );
};
