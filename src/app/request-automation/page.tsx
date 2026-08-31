'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SunburstIcon } from '@/components/ui/SunburstIcon';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Clock, Mail, MapPin, Sparkles } from 'lucide-react';

export default function RequestAutomationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Shopify Suite');
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    volume: '1,000 - 10,000 runs/mo',
    objective: '',
  });

  const categories = [
    'Shopify Suite',
    'WhatsApp & Chat AI',
    'B2B Lead Gen',
    'Finance & Ops',
    'Custom AI Workflow',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white select-text py-8 sm:py-12">
      
      {/* Pattern Bar Divider Row */}
      <div className="max-w-[1340px] mx-auto py-1">
        <div className="h-9 w-full border-y border-neutral-200 bg-[repeating-linear-gradient(45deg,#0000001c_0,#0000001c_1.2px,transparent_0,transparent_5px)]" />
      </div>

      {/* 1340px Enclosed Main Container */}
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
        <div className="pt-8 pb-16 px-6 sm:px-10 lg:px-12">
          
          {/* Split 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Headline, Value Proposition & Trust Signals (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Online Engineering Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-800 shadow-2xs">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Engineering Team Online — 2-Hour SLA</span>
              </div>

              {/* Title & Description */}
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal sm:font-medium tracking-tight text-neutral-900 leading-tight">
                  Let&apos;s build your high-ROI AI automation.
                </h1>
                <p className="text-xs sm:text-sm font-normal text-neutral-600 leading-relaxed">
                  Tell us about your team&apos;s manual daily workflows. Our senior AI engineers will design a custom architecture blueprint and build a working prototype within 48 hours.
                </p>
              </div>

              {/* 3 Key Benefits Cards */}
              <div className="space-y-4 pt-2">
                
                <div className="p-4 border border-neutral-200 bg-neutral-50/50 flex items-start gap-3.5 shadow-2xs">
                  <div className="p-2 bg-white border border-neutral-200 text-black shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-neutral-900">Prototype in 48 Hours</h3>
                    <p className="text-[11px] font-normal text-neutral-500 leading-relaxed mt-0.5">
                      We map your exact software stack (Shopify, n8n, WhatsApp, CRMs) and deliver a live testable blueprint.
                    </p>
                  </div>
                </div>

                <div className="p-4 border border-neutral-200 bg-neutral-50/50 flex items-start gap-3.5 shadow-2xs">
                  <div className="p-2 bg-white border border-neutral-200 text-black shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-neutral-900">Enterprise Security First</h3>
                    <p className="text-[11px] font-normal text-neutral-500 leading-relaxed mt-0.5">
                      SOC-2 compliance standards, AES-256 encryption, and zero data-retention guarantees on LLM providers.
                    </p>
                  </div>
                </div>

                <div className="p-4 border border-neutral-200 bg-neutral-50/50 flex items-start gap-3.5 shadow-2xs">
                  <div className="p-2 bg-white border border-neutral-200 text-black shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-neutral-900">Production SLA Support</h3>
                    <p className="text-[11px] font-normal text-neutral-500 leading-relaxed mt-0.5">
                      Active 24/7 system monitoring, self-healing error retries, and dedicated technical assistance.
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct Contact Details Footer */}
              <div className="pt-6 border-t border-neutral-200 space-y-2.5 text-xs text-neutral-600">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>Direct Engineering: <strong className="text-neutral-900 font-medium">engineering@digiscale.ai</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>Global Operations & Silicon Valley HQ</span>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Request Form (7 Cols) */}
            <div className="lg:col-span-7">
              {submitted ? (
                /* Success Received State */
                <div className="p-8 sm:p-12 border border-neutral-200 bg-neutral-50 text-center space-y-6 shadow-2xs">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  
                  <div className="space-y-2 max-w-md mx-auto">
                    <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">
                      Blueprint Request Received!
                    </h2>
                    <p className="text-xs sm:text-sm font-normal text-neutral-600 leading-relaxed">
                      A Senior AI Automation Engineer has been assigned to your project. We are reviewing your architecture requirements and will email your custom workflow blueprint within 2 hours.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                      href="/automations"
                      className="px-6 py-2.5 bg-black text-white text-xs font-medium hover:bg-neutral-800 transition-colors shadow-2xs"
                    >
                      Explore 15+ Automations Catalog →
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
                /* Form Card */
                <form
                  onSubmit={handleSubmit}
                  className="p-8 sm:p-10 border border-neutral-200 bg-white space-y-6 shadow-2xs relative"
                >
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                    <div className="flex items-center gap-2">
                      <SunburstIcon className="w-5 h-5 text-black stroke-[2.2]" />
                      <span className="text-sm font-bold tracking-tight text-neutral-900 uppercase">
                        Request Automation Blueprint
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-neutral-400">Step 1 of 1</span>
                  </div>

                  {/* Form Inputs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Alex Vance"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
                        placeholder="alex@company.com"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-neutral-200 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black shadow-2xs"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Company / Brand Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Acme Retail Co."
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-neutral-200 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black shadow-2xs"
                      />
                    </div>

                    {/* Monthly Execution Volume */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Estimated Monthly Runs
                      </label>
                      <select
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-neutral-200 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-black shadow-2xs"
                      >
                        <option>1,000 - 10,000 runs/mo</option>
                        <option>10,000 - 100,000 runs/mo</option>
                        <option>100,000+ runs/mo (Enterprise)</option>
                      </select>
                    </div>

                  </div>

                  {/* Automation Category Selector Pills */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      Primary Automation Interest
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          type="button"
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-3 py-1.5 text-xs font-medium transition-colors border shadow-2xs ${
                            selectedCategory === cat
                              ? 'bg-black text-white border-black'
                              : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Workflow Objective Textarea */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Workflow Requirements / Objectives <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your current manual workflow bottlenecks (e.g. 'We want to automatically recover abandoned Shopify carts via WhatsApp and sync order status to Google Sheets...')"
                      value={formData.objective}
                      onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                      className="w-full p-4 bg-white border border-neutral-200 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black shadow-2xs leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="space-y-3 pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-black text-white text-xs sm:text-sm font-medium hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-2 shadow-2xs"
                    >
                      <span>Request Custom Automation Blueprint</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-neutral-400 text-center font-normal">
                      ✓ No credit card required. 100% free workflow audit & live prototype guarantee.
                    </p>
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
