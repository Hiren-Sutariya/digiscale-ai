'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShoppingBag, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  RefreshCw, 
  PlusCircle, 
  Mail, 
  Tag, 
  BarChart3, 
  Clock, 
  ArrowRight,
  Database,
  Users,
  Search,
  ArrowUpRight
} from 'lucide-react';

export default function AutomationsPage() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Shopify' | 'WhatsApp' | 'B2B' | 'Finance'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const allAutomations = [
    // Shopify Suite (8 Automations)
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
    {
      id: 7,
      category: 'Shopify',
      badge: 'Shopify Suite',
      title: 'Product Metafields & Category Update',
      description: 'Automatically updates custom Shopify metafields, SEO tags, and dynamic product collection categories at scale.',
      icon: <Tag className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      id: 8,
      category: 'Shopify',
      badge: 'Shopify Suite',
      title: 'Shopify Analytics & Revenue Dashboard',
      description: 'Aggregates sales metrics, profit margins, conversion rates, and ad spend ROI into an executive real-time dashboard.',
      icon: <BarChart3 className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },

    // WhatsApp & Chat AI (3 Automations)
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

    // B2B & Lead Gen (3 Automations)
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
    {
      id: 102,
      category: 'B2B',
      badge: 'B2B & Lead Gen',
      title: 'Automated Sales Pipeline Activity Logger',
      description: 'Logs customer interactions, email exchanges, and call summaries into CRM deals with automated next-step reminders.',
      icon: <BarChart3 className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },

    // Finance & Operations (3 Automations)
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

  const filtered = allAutomations.filter((item) => {
    const matchesFilter = activeFilter === 'All' || item.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-neutral-900 select-text">
      
      {/* Pattern Bar Divider Row */}
      <div className="max-w-[1340px] mx-auto py-1">
        <div className="h-9 w-full border-y border-neutral-200 bg-[repeating-linear-gradient(45deg,#0000001c_0,#0000001c_1.2px,transparent_0,transparent_5px)]" />
      </div>

      {/* 1340px Enclosed Page Container */}
      <div className="max-w-[1340px] mx-auto border-x border-y border-neutral-200 bg-white relative pb-20">
        
        {/* Top-Left Flush Connected Pill Badge */}
        <div className="inline-flex items-center text-xs shadow-2xs -mt-[1px] -ml-[1px]">
          <span className="px-3.5 py-1.5 bg-neutral-200/90 font-bold text-neutral-900 border-r border-b border-neutral-200">
            Catalog
          </span>
          <span className="px-4 py-1.5 bg-white font-medium text-neutral-800 border-r border-b border-neutral-200">
            Live automations
          </span>
        </div>

        {/* Split Header (Left Title on SINGLE LINE + Right Description) */}
        <div className="pt-8 pb-8 px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-normal sm:font-medium tracking-tight text-neutral-900 leading-snug shrink-0">
              Battle-tested automations catalog.
            </h1>
            <p className="text-sm font-normal text-neutral-500 max-w-xs leading-relaxed">
              Explore pre-built workflows ready to plug into your business stack from Shopify Suite and WhatsApp to custom enterprise operations.
            </p>
          </div>

          {/* Search Bar & Category Filter Tabs */}
          <div className="space-y-6">
            
            {/* Search Input Box */}
            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
                <Search className="w-4 h-4 text-neutral-400" />
              </div>
              <input
                type="text"
                placeholder="Search automations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-200 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-black shadow-2xs"
              />
            </div>

            {/* Category Filter Tabs */}
            <div className="inline-flex flex-wrap border border-neutral-200 divide-x divide-neutral-200 bg-white text-xs font-medium shadow-2xs">
              {[
                { id: 'All', label: `All Automations (${allAutomations.length})` },
                { id: 'Shopify', label: 'Shopify Suite (8)' },
                { id: 'WhatsApp', label: 'WhatsApp & Chat AI (3)' },
                { id: 'B2B', label: 'B2B & Lead Gen (3)' },
                { id: 'Finance', label: 'Finance & Ops (3)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-5 py-2.5 transition-colors ${
                    activeFilter === tab.id
                      ? 'bg-black text-white font-semibold'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* All Automations Grid (3 Columns Minimalist Cards) */}
        <div className="px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div 
                key={item.id}
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

                {/* Card Body: Title & Description */}
                <div className="space-y-2 pt-1">
                  <h3 className="text-base font-semibold text-neutral-900 tracking-tight flex items-center justify-between group-hover:text-black">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors opacity-0 group-hover:opacity-100" />
                  </h3>
                  <p className="text-xs font-normal text-neutral-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Bottom CTA Link */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-neutral-600">Ready to Deploy</span>
                  <Link
                    href="/request-automation"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 hover:text-black group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Request Setup</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 border border-neutral-200 bg-neutral-50">
              <div className="text-sm font-medium text-neutral-700">No automations match your search.</div>
              <p className="text-xs text-neutral-500 mt-1">Try clearing your search query or selecting another category.</p>
            </div>
          )}
        </div>

      </div>

    </main>
  );
}
