'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Key, Server, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SecurityPage() {
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
            Security
          </span>
          <span className="px-4 py-1.5 bg-white font-medium text-neutral-800 border-r border-b border-neutral-200">
            SOC-2 Type II Certified
          </span>
        </div>

        {/* Header Content */}
        <div className="pt-10 pb-12 px-6 sm:px-10 border-b border-neutral-200">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Audit Status: SOC-2 Type II Compliant</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-normal sm:font-medium tracking-tight text-neutral-900 leading-tight">
              Enterprise Security Architecture
            </h1>
            <p className="text-sm text-neutral-600 leading-relaxed">
              DIGISCALE AI is engineered from the ground up for high-security enterprise environments. Our infrastructure adheres to strict SOC-2 Type II security principles, zero-trust network policies, and continuous vulnerability monitoring.
            </p>
          </div>
        </div>

        {/* 4 Pillars Security Cards Grid */}
        <div className="p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            <div className="p-6 sm:p-8 border border-neutral-200 bg-white space-y-4 shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center text-neutral-900">
                <Lock className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-neutral-900">
                AES-256 Data Encryption
              </h3>
              <p className="text-xs sm:text-sm font-normal text-neutral-600 leading-relaxed">
                All data in transit is encrypted using TLS 1.3 with strict HSTS policies. Data at rest is encrypted via AES-256 with automated key rotation managed through AWS KMS.
              </p>
            </div>

            <div className="p-6 sm:p-8 border border-neutral-200 bg-white space-y-4 shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center text-neutral-900">
                <Server className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-neutral-900">
                Isolated Enterprise Tenants
              </h3>
              <p className="text-xs sm:text-sm font-normal text-neutral-600 leading-relaxed">
                Enterprise customers run on dedicated, logically separated cloud environments (VPC peering) with zero shared memory or database instances.
              </p>
            </div>

            <div className="p-6 sm:p-8 border border-neutral-200 bg-white space-y-4 shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center text-neutral-900">
                <Key className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-neutral-900">
                Granular RBAC & SSO
              </h3>
              <p className="text-xs sm:text-sm font-normal text-neutral-600 leading-relaxed">
                Single Sign-On (SSO) integration via SAML 2.0, Okta, and Azure AD with Role-Based Access Control (RBAC) and audit-logged API keys.
              </p>
            </div>

            <div className="p-6 sm:p-8 border border-neutral-200 bg-white space-y-4 shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center text-neutral-900">
                <Cpu className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-neutral-900">
                24/7 Automated Threat Monitoring
              </h3>
              <p className="text-xs sm:text-sm font-normal text-neutral-600 leading-relaxed">
                Continuous vulnerability scanning, automated dependency checks, and real-time anomaly detection across all agent API connectors.
              </p>
            </div>

          </div>

          {/* Security Certifications List */}
          <div className="p-8 bg-neutral-50 border border-neutral-200 space-y-6">
            <h2 className="text-lg font-bold text-neutral-900">Enterprise Security Guarantees</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-neutral-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>SOC-2 Type II Certified Annual Audits</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Retention of LLM Training Datasets</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Quarterly Independent Third-Party Pentests</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>HIPAA & BAA Compliance Options Available</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/request-automation"
                className="px-6 py-2.5 bg-black text-white text-xs font-medium hover:bg-neutral-800 transition-colors shadow-2xs inline-flex items-center gap-2"
              >
                <span>Request Full SOC-2 Audit Report</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
