'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SunburstIcon } from '@/components/ui/SunburstIcon';
import { CheckCircle2, ArrowRight, Mail, MapPin, Check } from 'lucide-react';

export default function RequestAutomationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    message: '',
  });

  // Guarantee scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white select-text">
      
      {/* Pattern Bar Divider Row (Flush under Navbar) */}
      <div className="max-w-[1340px] mx-auto py-1">
        <div className="h-9 w-full border-y border-neutral-200 bg-[repeating-linear-gradient(45deg,#0000001c_0,#0000001c_1.2px,transparent_0,transparent_5px)]" />
      </div>

      {/* 1340px Enclosed Main Container (No bottom margin gap) */}
      <div className="max-w-[1340px] mx-auto border-x border-y border-neutral-200 bg-white relative">
        
        {/* Top-Left Flush Connected Pill Badge */}
        <div className="inline-flex items-center text-xs shadow-2xs -mt-[1px] -ml-[1px]">
          <span className="px-3.5 py-1.5 bg-neutral-200/90 font-bold text-neutral-900 border-r border-b border-neutral-200">
            Contact
          </span>
          <span className="px-4 py-1.5 bg-white font-medium text-neutral-800 border-r border-b border-neutral-200">
            Build with DIGISCALE AI
          </span>
        </div>

        {/* Section Content */}
        <div className="pt-10 pb-16 px-6 sm:px-10 lg:px-12">
          
          {/* 2-Column Clean Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Simple & Sleek Copy + Contact Info (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Online SLA Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-800">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Engineering SLA — 2-Hour Response Time</span>
              </div>

              {/* Headline & Subtitle */}
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal sm:font-medium tracking-tight text-neutral-900 leading-tight">
                  Start building with DIGISCALE AI.
                </h1>
                <p className="text-xs sm:text-sm font-normal text-neutral-600 leading-relaxed">
                  Tell us about your AI agent workflow requirements or business goals. Our engineering team will reach out within 2 hours.
                </p>
              </div>

              {/* Simple Bullet Points */}
              <div className="space-y-3 pt-2 text-xs font-medium text-neutral-700">
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center text-black shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Working prototype delivered in 48 hours</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center text-black shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>100% free workflow audit & architecture blueprint</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center text-black shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Enterprise SOC-2 security & 24/7 SLA support</span>
                </div>
              </div>

              {/* Direct Info */}
              <div className="pt-6 border-t border-neutral-200 space-y-2.5 text-xs text-neutral-600">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>Direct Email: <strong className="text-neutral-900 font-medium">engineering@digiscale.ai</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>Global Operations & Silicon Valley HQ</span>
                </div>
              </div>

            </div>

            {/* Right Column: Super Clean & Simple Contact Form (7 Cols) */}
            <div className="lg:col-span-7">
              {submitted ? (
                /* Success State */
                <div className="p-8 sm:p-12 border border-neutral-200 bg-neutral-50 text-center space-y-6 shadow-2xs">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  
                  <div className="space-y-2 max-w-md mx-auto">
                    <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">
                      Request Received!
                    </h2>
                    <p className="text-xs sm:text-sm font-normal text-neutral-600 leading-relaxed">
                      Thank you for reaching out. Our engineering team is reviewing your requirements and will reach out via email within 2 hours.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                      href="/automations"
                      className="px-6 py-2.5 bg-black text-white text-xs font-medium hover:bg-neutral-800 transition-colors shadow-2xs"
                    >
                      Explore Automations Catalog →
                    </Link>
                    <Link
                      href="/"
                      className="px-6 py-2.5 bg-white border border-neutral-300 text-neutral-800 text-xs font-medium hover:bg-neutral-100 transition-colors shadow-2xs"
                    >
                      Return to Homepage
                    </Link>
                  </div>
                </div>
              ) : (
                /* Clean Simple Form */
                <form
                  onSubmit={handleSubmit}
                  className="p-8 sm:p-10 border border-neutral-200 bg-white space-y-5 shadow-2xs"
                >
                  <div className="flex items-center gap-2 pb-2 border-b border-neutral-100">
                    <SunburstIcon className="w-5 h-5 text-black stroke-[2.2]" />
                    <span className="text-sm font-bold tracking-tight text-neutral-900 uppercase">
                      Contact Engineering
                    </span>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-neutral-200 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black shadow-2xs"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alex@acme.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-neutral-200 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black shadow-2xs"
                    />
                  </div>

                  {/* Workflow Objective / Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Workflow Objective / Use Case <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your AI agent task, MCP connectors, or automation goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 bg-white border border-neutral-200 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black shadow-2xs leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-black text-white text-xs sm:text-sm font-medium hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-2 shadow-2xs"
                    >
                      <span>Submit Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
