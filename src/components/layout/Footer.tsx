'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SunburstIcon } from '@/components/ui/SunburstIcon';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// Clean SVG Icons for Social Links
const TwitterSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z"/>
  </svg>
);

const GithubSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
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

        {/* Main Footer Content */}
        <div className="pt-10 pb-12 px-6 sm:px-10 space-y-12">
          
          {/* 4 Multi-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-10 border-b border-neutral-200">
            
            {/* Column 1: Brand Info (Spans 2 cols on LG) */}
            <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-6">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <SunburstIcon className="w-6 h-6 text-black stroke-[2.2]" />
                <span className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 uppercase">
                  DIGISCALE AI
                </span>
              </Link>

              <p className="text-xs sm:text-sm font-normal text-neutral-500 max-w-sm leading-relaxed">
                Enterprise AI automations and autonomous agent infrastructure engineered for production. Deploy Shopify, WhatsApp, and custom workflows in days.
              </p>

              {/* Live Operational System Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-800">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>All Systems Operational (99.98% Uptime)</span>
              </div>
            </div>

            {/* Column 2: Platform Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">Platform</h4>
              <ul className="space-y-2.5 text-xs font-normal text-neutral-600">
                <li>
                  <Link href="/automations" className="hover:text-black transition-colors">
                    Automations Catalog (15+)
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-black transition-colors">
                    Pricing Plans
                  </Link>
                </li>
                <li>
                  <Link href="/#integrations" className="hover:text-black transition-colors">
                    200+ Integrations
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-black transition-colors">
                    About DIGISCALE AI
                  </Link>
                </li>
                <li>
                  <Link href="/#use-cases" className="hover:text-black transition-colors">
                    Customer Use Cases
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Automations Suite */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">Automations Suite</h4>
              <ul className="space-y-2.5 text-xs font-normal text-neutral-600">
                <li>
                  <Link href="/automations" className="hover:text-black transition-colors">
                    Shopify Suite (8)
                  </Link>
                </li>
                <li>
                  <Link href="/automations" className="hover:text-black transition-colors">
                    WhatsApp AI Sales Bot
                  </Link>
                </li>
                <li>
                  <Link href="/automations" className="hover:text-black transition-colors">
                    B2B Lead Qualifier
                  </Link>
                </li>
                <li>
                  <Link href="/automations" className="hover:text-black transition-colors">
                    PDF Invoice OCR
                  </Link>
                </li>
                <li>
                  <Link href="/automations" className="hover:text-black transition-colors">
                    Executive Operations Digest
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Legal */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">Company & Legal</h4>
              <ul className="space-y-2.5 text-xs font-normal text-neutral-600">
                <li>
                  <Link href="/request-automation" className="hover:text-black transition-colors font-medium text-black">
                    Request Automation →
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-black transition-colors">
                    Contact Engineering
                  </Link>
                </li>
                <li>
                  <span className="text-neutral-400 cursor-not-allowed">Privacy Policy</span>
                </li>
                <li>
                  <span className="text-neutral-400 cursor-not-allowed">Terms of Service</span>
                </li>
                <li>
                  <span className="text-neutral-400 cursor-not-allowed">SOC-2 Security</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Newsletter Subscription Bar */}
          <div className="p-6 bg-neutral-50 border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-sm font-semibold text-neutral-900">Weekly AI Automation Blueprints</h4>
              <p className="text-xs text-neutral-500 font-normal">Get high-ROI automation case studies and blueprints delivered every Tuesday.</p>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-4 py-2 border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Thank you! You are subscribed to AI Blueprints.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full md:w-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2.5 bg-white border border-neutral-200 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black shadow-2xs w-full md:w-64"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-black text-white text-xs font-medium hover:bg-neutral-800 transition-colors inline-flex items-center gap-1.5 shrink-0 shadow-2xs"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Bottom Copyright & Social Bar */}
          <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal text-neutral-500">
            <div>
              © {new Date().getFullYear()} DIGISCALE AI Inc. All rights reserved. Production-grade AI automation infrastructure.
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 text-neutral-600">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors" aria-label="Twitter">
                <TwitterSVG />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors" aria-label="LinkedIn">
                <LinkedinSVG />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors" aria-label="GitHub">
                <GithubSVG />
              </a>
            </div>
          </div>

        </div>

      </div>

    </footer>
  );
};
