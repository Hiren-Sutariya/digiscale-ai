'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { RollingText } from '@/components/ui/RollingText';
import { 
  ShoppingBag, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  RefreshCw, 
  PlusCircle, 
  Mail, 
  BarChart3, 
  Clock, 
  ArrowUpRight,
  ArrowRight,
  Database,
  Users
} from 'lucide-react';

export const ShowcaseAutomations: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'Shopify' | 'WhatsApp' | 'B2B' | 'Finance'>('Shopify');

  const automations = [
    // Shopify Suite (Max 6 shown)
    {
      id: 1,
      category: 'Shopify',
      badge: 'Shopify Suite',
      title: 'Automated Product Creation',
      description: 'Parses supplier feeds or spreadsheets to auto-generate new Shopify products with titles, tags, variants, and high-res images.',
      icon: <PlusCircle className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      id: 2,
      category: 'Shopify',
      badge: 'Shopify Suite',
      title: 'Product Title & Price Update Sync',
      description: 'Real-time automated updates for product titles, prices, variant SKUs, and descriptions across multiple sales channels.',
      icon: <RefreshCw className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      id: 3,
      category: 'Shopify',
      badge: 'Shopify Suite',
      title: 'Real-Time Inventory Stock Sync',
      description: 'Automatically syncs inventory stock counts across warehouses, supplier feeds, and multiple Shopify storefronts.',
      icon: <ShoppingBag className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      id: 4,
      category: 'Shopify',
      badge: 'Shopify Suite',
      title: 'Abandoned Checkout Recovery',
      description: 'Sends automated multi-channel (WhatsApp & Email) recovery sequences to convert abandoned checkouts into completed orders.',
      icon: <Zap className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      id: 5,
      category: 'Shopify',
      badge: 'Shopify Suite',
      title: 'Automated Thank You Email Sequence',
      description: 'Sends instant post-purchase thank-you emails with personalized product recommendations and live order tracking.',
      icon: <Mail className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      id: 6,
      category: 'Shopify',
      badge: 'Shopify Suite',
      title: 'Post-Delivery Follow-Up & Review Mail',
      description: 'Triggers automated review requests, UGC collection forms, and cross-sell follow-up emails after courier delivery.',
      icon: <CheckCircle2 className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },

    // WhatsApp & Chat AI
    {
      id: 9,
      category: 'WhatsApp',
      badge: 'WhatsApp & Chat AI',
      title: 'WhatsApp AI Sales & Lead Qualifier Bot',
      description: '24/7 autonomous WhatsApp agent that answers product queries, qualifies inbound leads, and books calendar meetings.',
      icon: <MessageSquare className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      id: 10,
      category: 'WhatsApp',
      badge: 'WhatsApp & Chat AI',
      title: 'WhatsApp COD Order Verification Bot',
      description: 'Sends instant WhatsApp messages to verify Cash on Delivery orders, reducing RTO (Return to Origin) losses dramatically.',
      icon: <ShieldCheck className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      id: 101,
      category: 'WhatsApp',
      badge: 'WhatsApp & Chat AI',
      title: 'Automated Order Status & Tracking Agent',
      description: 'Fetches real-time shipping carrier tracking links and updates customers automatically via WhatsApp messaging.',
      icon: <Clock className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },

    // B2B & Lead Gen
    {
      id: 11,
      category: 'B2B',
      badge: 'B2B & Lead Gen',
      title: '1-Minute Inbound Lead Qualifier & Booking',
      description: 'Instantly qualifies website leads via WhatsApp/Email within 60 seconds and books meetings directly into sales reps\' calendars.',
      icon: <Clock className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      id: 12,
      category: 'B2B',
      badge: 'B2B & Lead Gen',
      title: 'Outbound Prospecting & CRM Auto-Sync',
      description: 'Scrapes target accounts, enriches email/phone data, drafts personalized AI outreach, and syncs into Salesforce.',
      icon: <Users className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },

    // Finance & Operations
    {
      id: 13,
      category: 'Finance',
      badge: 'Finance & Operations',
      title: 'PDF Invoice OCR & ERP Reconciliation',
      description: 'Extracts line-item data from incoming invoices in Gmail, routes approvals, and reconciles entries in QuickBooks/Tally.',
      icon: <Database className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      id: 14,
      category: 'Finance',
      badge: 'Finance & Operations',
      title: 'Automated Client Onboarding Pipeline',
      description: 'Automatically creates Slack channels, Google Drive folders, Trello boards, and welcome emails upon contract signature.',
      icon: <CheckCircle2 className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      id: 15,
      category: 'Finance',
      badge: 'Finance & Operations',
      title: 'Daily 9 AM Executive Operations Digest',
      description: 'Aggregates sales, ad spend, and support metrics from 6 platforms every morning and pushes an executive summary to Slack.',
      icon: <BarChart3 className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
  ];

  // Filter automations and limit display to MAX 6 cards per category on homepage
  const filtered = automations.filter((item) => item.category === activeFilter).slice(0, 6);

  return (
    <section id="automations" className="w-full bg-white select-text scroll-mt-28">
      
      {/* Pattern Bar Divider Row */}
      <div className="max-w-[1340px] mx-auto py-1">
        <div className="h-9 w-full border-y border-neutral-200 bg-[repeating-linear-gradient(45deg,#0000001c_0,#0000001c_1.2px,transparent_0,transparent_5px)]" />
      </div>

      {/* 1340px Enclosed Section Box Container */}
      <div className="max-w-[1340px] mx-auto border-x border-y border-neutral-200 bg-white relative">
        
        {/* Top-Left Flush Connected Pill Badge */}
        <div className="inline-flex items-center text-xs shadow-2xs -mt-[1px] -ml-[1px]">
          <span className="px-3.5 py-1.5 bg-neutral-200/90 font-bold text-neutral-900 border-r border-b border-neutral-200">
            04
          </span>
          <span className="px-4 py-1.5 bg-white font-medium text-neutral-800 border-r border-b border-neutral-200">
            Live automations
          </span>
        </div>

        {/* Section Content */}
        <div className="pt-8 pb-14 px-6 sm:px-10">
          
          {/* Split Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <h2 className="text-xl sm:text-2xl font-normal sm:font-medium tracking-tight text-neutral-800 leading-snug max-w-xl">
              Battle-tested automations catalog.
            </h2>
            <p className="text-sm font-normal text-neutral-500 max-w-xs leading-relaxed">
              Explore pre-built workflows ready to plug into your business stack from Shopify Suite and WhatsApp to custom enterprise operations.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="inline-flex flex-wrap border border-neutral-200 divide-x divide-neutral-200 bg-white mb-10 text-xs font-medium shadow-2xs">
            {[
              { id: 'Shopify', label: 'Shopify Suite' },
              { id: 'WhatsApp', label: 'WhatsApp & Chat AI' },
              { id: 'B2B', label: 'B2B & Lead Gen' },
              { id: 'Finance', label: 'Finance & Ops' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-6 py-3 transition-colors ${
                  activeFilter === tab.id
                    ? 'bg-black text-white font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Automations Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <Link 
                key={item.id}
                href="/automations"
                className="border border-neutral-200 bg-white hover:bg-neutral-50/50 transition-all p-7 flex flex-col justify-between space-y-4 shadow-2xs relative group min-h-[200px]"
              >
                
                {/* Card Top Row: Icon + Category Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-md border border-neutral-200 bg-neutral-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-medium text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-xs border border-neutral-200/60">
                    {item.badge}
                  </span>
                </div>

                {/* Card Body: Title & Description Only */}
                <div className="space-y-2 pt-1">
                  <h3 className="text-base font-semibold text-neutral-900 tracking-tight flex items-center justify-between group-hover:text-black">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors opacity-0 group-hover:opacity-100" />
                  </h3>
                  <p className="text-xs font-normal text-neutral-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </Link>
            ))}
          </div>

          {/* Bottom Banner Redirect to All Automations Page */}
          <div className="mt-10 p-6 bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-medium text-neutral-900">Looking for custom workflows?</div>
              <div className="text-xs text-neutral-500 mt-0.5">Browse all 15+ battle-tested AI automations ready to deploy in your business.</div>
            </div>
            <Link
              href="/automations"
              className="group relative overflow-hidden inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white border border-black text-xs font-medium hover:bg-neutral-800 transition-colors shrink-0 shadow-2xs"
            >
              <RollingText text="View Full Automation Catalog" />
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
};
