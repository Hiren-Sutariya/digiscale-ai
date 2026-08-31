'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FileText, Shield, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

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

        {/* Header Content */}
        <div className="pt-10 pb-12 px-6 sm:px-10 border-b border-neutral-200">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800">
              <FileText className="w-3.5 h-3.5 text-neutral-800" />
              <span>Last Updated: January 1, 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-normal sm:font-medium tracking-tight text-neutral-900 leading-tight">
              Terms of Service
            </h1>
            <p className="text-sm text-neutral-600 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of DIGISCALE AI&apos;s enterprise software, platform services, API connectors, and autonomous agent infrastructure.
            </p>
          </div>
        </div>

        {/* Document Body Content */}
        <div className="py-12 px-6 sm:px-10 max-w-4xl space-y-10 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-neutral-800" />
              <span>1. Agreement to Terms</span>
            </h2>
            <p>
              By subscribing to or interacting with DIGISCALE AI services, you agree to be bound by these Terms and our Privacy Policy. If you are entering into this agreement on behalf of a company, you represent that you have the legal authority to bind that organization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight flex items-center gap-2">
              <Shield className="w-4 h-4 text-neutral-800" />
              <span>2. Service SLA & Availability</span>
            </h2>
            <p>
              DIGISCALE AI guarantees a 99.9% monthly uptime for all Enterprise tier production workflows. Service Level Agreements (SLA) include financial credits for any unannounced downtime exceeding 0.1% per calendar month.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
              <li><strong>Pro Tier:</strong> Standard 24-hour response SLA.</li>
              <li><strong>Enterprise Tier:</strong> Guaranteed 2-hour engineering response SLA with dedicated Slack connect channels.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-neutral-800" />
              <span>3. Acceptable Use Policy</span>
            </h2>
            <p>
              You agree not to misuse DIGISCALE AI infrastructure. Prohibited activities include attempting to bypass security controls, performing unauthorized penetration tests, or deploying agents for illegal spam or harmful automation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight flex items-center gap-2">
              <FileText className="w-4 h-4 text-neutral-800" />
              <span>4. Intellectual Property Rights</span>
            </h2>
            <p>
              You retain all ownership rights over your customer data, workflows, and proprietary business logic. DIGISCALE AI retains all rights to its core platform, agent orchestrator engines, and connector libraries.
            </p>
          </section>

          <section className="pt-6 border-t border-neutral-200 space-y-3">
            <h3 className="text-base font-bold text-neutral-900">Legal Inquiries</h3>
            <p className="text-neutral-600">
              If you have any questions regarding these Terms or enterprise licensing agreements, please reach out to our legal department:
            </p>
            <div className="text-neutral-900 font-medium">legal@digiscale.ai</div>
          </section>

          <div className="pt-4">
            <Link
              href="/request-automation"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white text-xs font-medium hover:bg-neutral-800 transition-colors shadow-2xs"
            >
              <span>Request Enterprise MSA</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
