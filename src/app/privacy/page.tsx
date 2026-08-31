'use client';

import React, { useEffect } from 'react';
import { ShieldCheck, Lock, Eye, FileText, Database, Server, RefreshCw } from 'lucide-react';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white select-text">
      
      {/* Pattern Bar Divider Row */}
      <div className="max-w-[1340px] mx-auto py-1">
        <div className="h-9 w-full border-y border-neutral-200 bg-[repeating-linear-gradient(45deg,#0000001c_0,#0000001c_1.2px,transparent_0,transparent_5px)]" />
      </div>

      {/* 1340px Enclosed Container */}
      <div className="max-w-[1340px] mx-auto border-x border-y border-neutral-200 bg-white relative">
        
        {/* Top-Left Flush Connected Pill Badge */}
        <div className="inline-flex items-center text-xs shadow-2xs -mt-[1px] -ml-[1px]">
          <span className="px-3.5 py-1.5 bg-neutral-200/90 font-bold text-neutral-900 border-r border-b border-neutral-200">
            Legal
          </span>
          <span className="px-4 py-1.5 bg-white font-medium text-neutral-800 border-r border-b border-neutral-200">
            Privacy Policy
          </span>
        </div>

        {/* Centered Header Content */}
        <div className="pt-12 pb-14 px-6 sm:px-10 border-b border-neutral-200 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800 mx-auto">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-800" />
              <span>Effective Date: January 1, 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              At DIGISCALE AI, we take your privacy and data sovereignty seriously. This Privacy Policy details how we collect, process, encrypt, and protect your information across our autonomous agent infrastructure.
            </p>
          </div>
        </div>

        {/* Centered Document Body Content */}
        <div className="py-14 px-6 sm:px-10 max-w-3xl mx-auto space-y-12 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-4 text-center">
            <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center mx-auto text-neutral-900">
              <Lock className="w-5 h-5 stroke-[1.8]" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
              1. Information We Collect
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We collect information strictly required to operate, optimize, and secure your autonomous agent workflows. This includes organizational metadata, authentication credentials, and execution telemetry logs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-2">
              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xs space-y-1.5">
                <div className="font-semibold text-neutral-900 text-xs">Account Data</div>
                <p className="text-neutral-500 text-[11px] leading-normal">Name, work email, company domain, and role credentials.</p>
              </div>
              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xs space-y-1.5">
                <div className="font-semibold text-neutral-900 text-xs">Integration Keys</div>
                <p className="text-neutral-500 text-[11px] leading-normal">Encrypted OAuth tokens for tools like Salesforce, n8n, and Shopify.</p>
              </div>
              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xs space-y-1.5">
                <div className="font-semibold text-neutral-900 text-xs">Telemetry Logs</div>
                <p className="text-neutral-500 text-[11px] leading-normal">Execution timestamps, status codes, and LLM token usage.</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 text-center pt-6 border-t border-neutral-200">
            <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center mx-auto text-neutral-900">
              <Eye className="w-5 h-5 stroke-[1.8]" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
              2. How We Use & Protect Your Data
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Your customer records and workflow payloads are processed solely to carry out automated actions requested by your team. <strong>We NEVER sell or lease your personal or business data.</strong>
            </p>
            
            <div className="p-6 bg-neutral-50 border border-neutral-200 max-w-xl mx-auto space-y-2 text-center">
              <div className="font-semibold text-neutral-900 uppercase tracking-wider text-xs">Zero Model Training Commitment</div>
              <p className="text-neutral-600 text-xs leading-relaxed">
                Data processed through DIGISCALE AI connectors is strictly isolated and never fed into public LLMs or machine learning training datasets.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 text-center pt-6 border-t border-neutral-200">
            <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center mx-auto text-neutral-900">
              <Database className="w-5 h-5 stroke-[1.8]" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
              3. Data Retention & Deletion Rights
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Workflow execution logs are retained for 30 days by default to facilitate auditing and error debugging. Enterprise plans offer custom retention limits up to 365 days. You retain full rights to request complete data purge at any time.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 text-center pt-6 border-t border-neutral-200">
            <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center mx-auto text-neutral-900">
              <FileText className="w-5 h-5 stroke-[1.8]" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
              4. Cookies & Tracking Technologies
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We use strictly necessary functional session cookies for account authentication and platform navigation. We do not employ third-party tracking pixels or behavioral advertising cookies.
            </p>
          </section>

          {/* Section 5: Contact Info */}
          <section className="pt-8 border-t border-neutral-200 text-center space-y-2">
            <h3 className="text-base font-bold text-neutral-900">Data Protection Officer</h3>
            <p className="text-neutral-500 text-xs">For questions regarding GDPR, CCPA, or data deletion requests:</p>
            <div className="text-neutral-900 font-semibold text-sm">privacy@digiscale.ai</div>
          </section>

        </div>

      </div>

    </div>
  );
}
