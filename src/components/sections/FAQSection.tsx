'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How fast can custom automations be built and deployed?',
      a: 'Most pre-built automations (Shopify Suite, WhatsApp Bots, Inbound Lead Gen) are deployed within 24 to 48 hours. Complex custom enterprise workflows typically take 3 to 5 business days after initial workflow discovery.',
    },
    {
      q: 'Can DIGISCALE AI integrate with our custom internal ERP or APIs?',
      a: 'Yes! We support 200+ pre-built connectors (Salesforce, Shopify, HubSpot, n8n, Make, QuickBooks, Tally) as well as custom REST APIs, Webhooks, GraphQL endpoints, and internal SQL databases.',
    },
    {
      q: 'How do you handle data security, privacy, and compliance?',
      a: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We enforce strict role-based access controls (RBAC), end-to-end audit trails, and zero data-retention policies on underlying LLM providers.',
    },
    {
      q: 'What happens if an automated workflow encounters an error or exception?',
      a: 'Our systems feature self-healing retries and human-in-the-loop approval guardrails. High-value exceptions or low-confidence AI responses trigger instant Slack or WhatsApp alerts for manager review.',
    },
    {
      q: 'Are there any hidden recurring costs, API fees, or setup charges?',
      a: 'No hidden fees. We offer transparent flat-rate plans ($0 Starter, $19 Pro) and custom enterprise pricing tailored to your execution volume with zero surprise charges.',
    },
    {
      q: 'Do you provide ongoing maintenance, updates, and SLA support?',
      a: 'Yes! All plans include active 24/7 system uptime monitoring. Pro and Enterprise tiers include priority technical support, continuous prompt tuning, and regular workflow optimization updates.',
    },
  ];

  return (
    <section className="w-full bg-white select-text">
      
      {/* Pattern Bar Divider Row */}
      <div className="max-w-[1340px] mx-auto py-1">
        <div className="h-9 w-full border-y border-neutral-200 bg-[repeating-linear-gradient(45deg,#0000001c_0,#0000001c_1.2px,transparent_0,transparent_5px)]" />
      </div>

      {/* 1340px Enclosed Section Box Container */}
      <div className="max-w-[1340px] mx-auto border-x border-y border-neutral-200 bg-white relative">
        
        {/* Top-Left Flush Connected Pill Badge */}
        <div className="inline-flex items-center text-xs shadow-2xs -mt-[1px] -ml-[1px]">
          <span className="px-3.5 py-1.5 bg-neutral-200/90 font-bold text-neutral-900 border-r border-b border-neutral-200">
            08
          </span>
          <span className="px-4 py-1.5 bg-white font-medium text-neutral-800 border-r border-b border-neutral-200">
            FAQ
          </span>
        </div>

        {/* Section Content */}
        <div className="pt-8 pb-16 px-6 sm:px-10">
          
          {/* Split Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <h2 className="text-xl sm:text-2xl font-normal sm:font-medium tracking-tight text-neutral-800 leading-snug shrink-0">
              Frequently asked questions.
            </h2>
            <p className="text-sm font-normal text-neutral-500 max-w-xs leading-relaxed">
              Everything you need to know about our custom AI automations, security protocols, integrations, and deployment.
            </p>
          </div>

          {/* Accordion FAQ Container */}
          <div className="max-w-5xl mx-auto border border-neutral-200 divide-y divide-neutral-200 bg-white shadow-2xs mb-12">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={faq.q} className="transition-colors">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className={`w-full p-6 text-left flex items-center justify-between gap-4 transition-colors ${
                      isOpen ? 'bg-neutral-50/80' : 'bg-white hover:bg-neutral-50/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? 'text-black' : 'text-neutral-400'}`} />
                      <span className={`text-sm sm:text-base tracking-tight transition-colors ${isOpen ? 'font-semibold text-neutral-900' : 'font-medium text-neutral-800'}`}>
                        {faq.q}
                      </span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-black' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 text-xs sm:text-sm font-normal text-neutral-600 leading-relaxed border-t border-neutral-100/70 bg-neutral-50/80 pl-13">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Still Have Questions Banner */}
          <div className="max-w-5xl mx-auto p-6 sm:p-7 bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-sm font-semibold text-neutral-900">Have a specific custom workflow in mind?</h3>
              <p className="text-xs text-neutral-500 font-normal">Our AI engineering team can audit your stack and build a custom blueprint.</p>
            </div>
            <Link
              href="/request-automation"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white text-xs font-medium hover:bg-neutral-800 transition-colors shrink-0 shadow-2xs"
            >
              <span>Schedule Workflow Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
};
