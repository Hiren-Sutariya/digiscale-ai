'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Shield, Check, Globe, FileCheck, Lock, ArrowRight } from 'lucide-react';

export default function CompliancePage() {
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
            Compliance
          </span>
          <span className="px-4 py-1.5 bg-white font-medium text-neutral-800 border-r border-b border-neutral-200">
            Global Governance Standards
          </span>
        </div>

        {/* Header Content */}
        <div className="pt-10 pb-12 px-6 sm:px-10 border-b border-neutral-200">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800">
              <Globe className="w-3.5 h-3.5 text-neutral-800" />
              <span>Global Data Sovereignty & Governance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-normal sm:font-medium tracking-tight text-neutral-900 leading-tight">
              Regulatory Compliance
            </h1>
            <p className="text-sm text-neutral-600 leading-relaxed">
              DIGISCALE AI empowers global businesses to automate operations while adhering to international data protection frameworks including GDPR, CCPA, HIPAA, and ISO 27001 standards.
            </p>
          </div>
        </div>

        {/* Compliance Frameworks Section */}
        <div className="py-12 px-6 sm:px-10 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* GDPR */}
            <div className="p-8 border border-neutral-200 bg-white space-y-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">EU Framework</span>
                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">100% Compliant</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900">GDPR (General Data Protection Regulation)</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Full support for Data Subject Access Requests (DSAR), Right to be Forgotten (hard deletion), EU Data Transfer Agreements (Standard Contractual Clauses), and localized EU hosting regions.
              </p>
            </div>

            {/* CCPA */}
            <div className="p-8 border border-neutral-200 bg-white space-y-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">US California</span>
                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">100% Compliant</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900">CCPA / CPRA Compliance</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Complete compliance with California Consumer Privacy Act requirements. We provide straightforward opt-out mechanisms and transparent data audit reporting.
              </p>
            </div>

            {/* HIPAA */}
            <div className="p-8 border border-neutral-200 bg-white space-y-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Healthcare</span>
                <span className="px-2.5 py-1 bg-neutral-100 text-neutral-800 text-xs font-semibold border border-neutral-300">BAA Ready</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900">HIPAA & PHI Security</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                For healthcare and telehealth providers, DIGISCALE AI offers Business Associate Agreements (BAAs) with dedicated encrypted storage for Protected Health Information (PHI).
              </p>
            </div>

            {/* ISO 27001 */}
            <div className="p-8 border border-neutral-200 bg-white space-y-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Global Standard</span>
                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">ISO Aligned</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900">ISO/IEC 27001 Alignment</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Our Information Security Management System (ISMS) aligns strictly with ISO/IEC 27001 standards covering incident management, access governance, and physical security.
              </p>
            </div>

          </div>

          {/* Compliance Audit Request Banner */}
          <div className="p-8 bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-neutral-900">Need custom compliance documentation?</h4>
              <p className="text-xs sm:text-sm text-neutral-600">Our compliance officers can complete vendor security questionnaires and provide DPA agreements within 24 hours.</p>
            </div>
            <Link
              href="/request-automation"
              className="px-6 py-2.5 bg-black text-white text-xs font-medium hover:bg-neutral-800 transition-colors shadow-2xs shrink-0 inline-flex items-center gap-2"
            >
              <span>Contact Compliance Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
