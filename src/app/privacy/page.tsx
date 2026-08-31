'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText, ArrowRight } from 'lucide-react';

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

        {/* Header Content */}
        <div className="pt-10 pb-12 px-6 sm:px-10 border-b border-neutral-200">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-800" />
              <span>Effective Date: January 1, 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-normal sm:font-medium tracking-tight text-neutral-900 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-neutral-600 leading-relaxed">
              At DIGISCALE AI, we take your privacy and data sovereignty seriously. This Privacy Policy details how we collect, process, encrypt, and protect your information across our autonomous agent infrastructure.
            </p>
          </div>
        </div>

        {/* Document Body Content */}
        <div className="py-12 px-6 sm:px-10 max-w-4xl space-y-10 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight flex items-center gap-2">
              <Lock className="w-4 h-4 text-neutral-800" />
              <span>1. Information We Collect</span>
            </h2>
            <p>
              We collect information to provide, maintain, and optimize our autonomous agent infrastructure. This includes account credentials, organizational metadata, API key configurations, and telemetry logs generated during automated workflow executions.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
              <li><strong>Account Data:</strong> Name, work email address, company name, and authentication tokens.</li>
              <li><strong>Integration Credentials:</strong> OAuth tokens and API secrets used to connect your third-party tools (Salesforce, n8n, Shopify, etc.).</li>
              <li><strong>Execution Telemetry:</strong> Log data, response times, error tracebacks, and token consumption metrics.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight flex items-center gap-2">
              <Eye className="w-4 h-4 text-neutral-800" />
              <span>2. How We Use Your Data</span>
            </h2>
            <p>
              Your data is processed strictly to execute your defined workflows. <strong>We NEVER sell your personal data or customer records to third parties.</strong>
            </p>
            <div className="p-4 bg-neutral-50 border border-neutral-200 space-y-2 text-xs">
              <div className="font-semibold text-neutral-900 uppercase tracking-wider">Zero Model Training Guarantee</div>
              <p className="text-neutral-600">
                Customer data passed through DIGISCALE AI workflows is never used to train or fine-tune public LLMs or foundational AI models.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-neutral-800" />
              <span>3. Data Encryption & Security</span>
            </h2>
            <p>
              All customer data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption keys managed through Hardware Security Modules (HSM). Dedicated database isolates are deployed for Enterprise tier customers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight flex items-center gap-2">
              <FileText className="w-4 h-4 text-neutral-800" />
              <span>4. Data Retention & Deletion</span>
            </h2>
            <p>
              Workflow execution logs are retained for 30 days by default (customizable up to 365 days for Enterprise compliance). You may request immediate hard deletion of your organization data at any time by contacting our privacy team.
            </p>
          </section>

          <section className="pt-6 border-t border-neutral-200 space-y-3">
            <h3 className="text-base font-bold text-neutral-900">Questions & Privacy Requests</h3>
            <p className="text-neutral-600">
              For any privacy inquiries or to exercise your GDPR/CCPA data rights, reach out directly to our Data Protection Officer:
            </p>
            <div className="text-neutral-900 font-medium">privacy@digiscale.ai</div>
          </section>

          <div className="pt-4">
            <Link
              href="/request-automation"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white text-xs font-medium hover:bg-neutral-800 transition-colors shadow-2xs"
            >
              <span>Contact Security & Legal Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
