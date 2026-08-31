'use client';

import React, { useEffect } from 'react';
import { FileText, Shield, AlertCircle, CheckCircle, Scale, Clock } from 'lucide-react';

export default function TermsOfServicePage() {
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
            Terms of Service
          </span>
        </div>

        {/* Centered Header Content */}
        <div className="pt-12 pb-14 px-6 sm:px-10 border-b border-neutral-200 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800 mx-auto">
              <FileText className="w-3.5 h-3.5 text-neutral-800" />
              <span>Last Updated: January 1, 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 leading-tight">
              Terms of Service
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of DIGISCALE AI&apos;s enterprise software, platform services, API connectors, and autonomous agent infrastructure.
            </p>
          </div>
        </div>

        {/* Centered Document Body Content */}
        <div className="py-14 px-6 sm:px-10 max-w-3xl mx-auto space-y-12 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-4 text-center">
            <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center mx-auto text-neutral-900">
              <CheckCircle className="w-5 h-5 stroke-[1.8]" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
              1. Acceptance of Terms & Authority
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              By subscribing to or using DIGISCALE AI services, you agree to be bound by these Terms. If you are accepting these Terms on behalf of an enterprise entity, you represent and warrant that you possess full legal authority to bind that organization.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 text-center pt-6 border-t border-neutral-200">
            <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center mx-auto text-neutral-900">
              <Clock className="w-5 h-5 stroke-[1.8]" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
              2. Uptime Guarantee & SLA Terms
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              DIGISCALE AI guarantees a 99.9% monthly uptime for all Enterprise tier production workflows. Service Level Agreements (SLA) include financial credits for any unannounced downtime exceeding 0.1% per calendar month.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto pt-2">
              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xs space-y-1">
                <div className="font-semibold text-neutral-900 text-xs">Pro Tier SLA</div>
                <p className="text-neutral-500 text-[11px]">24-hour response SLA via standard ticket portal.</p>
              </div>
              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xs space-y-1">
                <div className="font-semibold text-neutral-900 text-xs">Enterprise Tier SLA</div>
                <p className="text-neutral-500 text-[11px]">Guaranteed 2-hour engineering response SLA via Slack connect.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 text-center pt-6 border-t border-neutral-200">
            <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center mx-auto text-neutral-900">
              <AlertCircle className="w-5 h-5 stroke-[1.8]" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
              3. Acceptable Usage Guidelines
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              You agree not to misuse DIGISCALE AI infrastructure. Prohibited actions include attempting to circumvent rate limits, deploying malicious agent code, conducting unauthorized penetration testing, or transmitting spam.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 text-center pt-6 border-t border-neutral-200">
            <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center mx-auto text-neutral-900">
              <Scale className="w-5 h-5 stroke-[1.8]" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
              4. Intellectual Property Rights
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              You retain 100% ownership rights over your customer data, workflows, and proprietary business logic. DIGISCALE AI retains ownership over its core engine, platform infrastructure, and connector libraries.
            </p>
          </section>

          {/* Section 5: Contact Info */}
          <section className="pt-8 border-t border-neutral-200 text-center space-y-2">
            <h3 className="text-base font-bold text-neutral-900">Legal Department</h3>
            <p className="text-neutral-500 text-xs">For enterprise MSA requests or legal notifications:</p>
            <div className="text-neutral-900 font-semibold text-sm">legal@digiscale.ai</div>
          </section>

        </div>

      </div>

    </div>
  );
}
