'use client';

import React, { useState } from 'react';
import { 
  Check, 
  Search, 
  FileText, 
  FileCheck,
  MessageSquare,
  User,
  Users,
  BarChart3, 
  Mail, 
  Database, 
  ListTodo, 
  Send,
  Sparkles,
} from 'lucide-react';

export const UseCasesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Sales' | 'Operations' | 'Support' | 'Research'>('Sales');

  const tabData = {
    Sales: {
      headline: 'Pipeline agents that never sleep.',
      description: 'AI agents discover target accounts, draft hyper-personalized outreach, log activities, and trigger follow-ups directly in your CRM.',
      checklist: [
        'Auto-enriched target account intelligence',
        'Personalized multi-touch outbound sequences',
        'Bi-directional sync with Salesforce & HubSpot',
      ],
      metricLabel: 'Reply rate boost',
      metricVal: '38+',
      metricSub: '// vs. templated outbound, 90-day average',
      centerIcon: <Sparkles className="w-5 h-5 text-white" />,
      nodes: [
        { icon: <FileText className="w-4 h-4 text-neutral-700" />, pos: 'top-1 left-1/2 -translate-x-1/2' },
        { icon: <BarChart3 className="w-4 h-4 text-neutral-700" />, pos: 'top-1/3 right-1.5 -translate-y-1/2' },
        { icon: <Users className="w-4 h-4 text-neutral-700" />, pos: 'bottom-3 right-4' },
        { icon: <Check className="w-4 h-4 text-neutral-700 stroke-[2.5]" />, pos: 'bottom-3 left-4' },
      ],
    },
    Operations: {
      headline: 'Back-office & ERP tasks fully automated.',
      description: 'Automate invoice extraction, document reconciliation, purchase order routing, and multi-system data validation with human approval gates.',
      checklist: [
        'Document extraction with human-in-the-loop review',
        'Policy-aware approval routing across teams',
        'Instant connector for ERPs, ticketing & email',
      ],
      metricLabel: 'Saved per person / week',
      metricVal: '38h',
      metricSub: '// measured across 40 operations teams',
      centerIcon: <FileCheck className="w-5 h-5 text-white" />,
      nodes: [
        { icon: <FileCheck className="w-4 h-4 text-neutral-700" />, pos: 'top-1 left-1/2 -translate-x-1/2' },
        { icon: <Users className="w-4 h-4 text-neutral-700" />, pos: 'top-1/3 right-1.5 -translate-y-1/2' },
        { icon: <Mail className="w-4 h-4 text-neutral-700" />, pos: 'bottom-3 right-4' },
        { icon: <Database className="w-4 h-4 text-neutral-700" />, pos: 'bottom-3 left-4' },
      ],
    },
    Support: {
      headline: 'Resolutions you can actually audit.',
      description: 'AI support agents answer complex customer tickets using grounded company data, escalating cleanly when confidence drops.',
      checklist: [
        'Retrieval-grounded RAG answers from live docs',
        'Confidence-based human agent escalation',
        'Full transcript & verified source audit trail',
      ],
      metricLabel: 'Auto-resolution rate',
      metricVal: '38%',
      metricSub: '// on tier-1 volume after 30 days',
      centerIcon: <MessageSquare className="w-5 h-5 text-white" />,
      nodes: [
        { icon: <FileCheck className="w-4 h-4 text-neutral-700" />, pos: 'top-1 left-1/2 -translate-x-1/2' },
        { icon: <Mail className="w-4 h-4 text-neutral-700" />, pos: 'top-1/3 right-1.5 -translate-y-1/2' },
        { icon: <BarChart3 className="w-4 h-4 text-neutral-700" />, pos: 'bottom-3 right-4' },
        { icon: <User className="w-4 h-4 text-neutral-700" />, pos: 'top-1/2 left-1.5 -translate-y-1/2' },
      ],
    },
    Research: {
      headline: 'Multi-step briefs with cited sources.',
      description: 'Autonomous research agents crawl web sources, aggregate market data, synthesize competitor reports, and link every claim to its source.',
      checklist: [
        'Parallel web & internal database source gathering',
        'Inline citations linked to exact source documents',
        'Automated reviewer agent verifies fact consistency',
      ],
      metricLabel: 'Faster briefs',
      metricVal: '38x',
      metricSub: '// from hours to minutes per report',
      centerIcon: <Search className="w-5 h-5 text-white" />,
      nodes: [
        { icon: <ListTodo className="w-4 h-4 text-neutral-700" />, pos: 'top-1 left-1/2 -translate-x-1/2' },
        { icon: <Database className="w-4 h-4 text-neutral-700" />, pos: 'top-1/3 right-1.5 -translate-y-1/2' },
        { icon: <Send className="w-4 h-4 text-neutral-700" />, pos: 'bottom-3 right-4' },
        { icon: <Sparkles className="w-4 h-4 text-neutral-700" />, pos: 'top-1/2 left-1.5 -translate-y-1/2' },
      ],
    },
  };

  const current = tabData[activeTab];

  return (
    <section id="use-cases" className="w-full bg-white select-text scroll-mt-28">
      
      {/* Pattern Bar Divider Row */}
      <div className="max-w-[1340px] mx-auto py-1">
        <div className="h-9 w-full border-y border-neutral-200 bg-[repeating-linear-gradient(45deg,#0000001c_0,#0000001c_1.2px,transparent_0,transparent_5px)]" />
      </div>

      {/* 1340px Enclosed Section Box Container */}
      <div className="max-w-[1340px] mx-auto border-x border-y border-neutral-200 bg-white relative">
        
        {/* Top-Left Flush Connected Pill Badge */}
        <div className="inline-flex items-center text-xs shadow-2xs -mt-[1px] -ml-[1px]">
          <span className="px-3.5 py-1.5 bg-neutral-200/90 font-bold text-neutral-900 border-r border-b border-neutral-200">
            03
          </span>
          <span className="px-4 py-1.5 bg-white font-medium text-neutral-800 border-r border-b border-neutral-200">
            Use cases
          </span>
        </div>

        {/* Section Content */}
        <div className="pt-10 pb-16 px-6 sm:px-10">
          
          {/* Main Headline */}
          <h2 className="text-xl sm:text-2xl font-normal sm:font-medium tracking-tight text-neutral-800 text-center leading-snug max-w-2xl mx-auto mb-12">
            Built for the real-world work your team actually does.
          </h2>

          {/* Interactive 3-Column Seamless Grid Layout */}
          <div className="max-w-5xl mx-auto border border-neutral-200 bg-white shadow-2xs grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-neutral-200 min-h-[380px] sm:min-h-[400px]">
            
            {/* Column 1: Left Sidebar Vertical Tabs */}
            <div className="md:col-span-3 bg-[#F8F9FA] flex flex-col justify-start h-full">
              {(['Sales', 'Operations', 'Support', 'Research'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full px-6 py-4 text-sm text-left transition-colors border-b border-neutral-200/80 ${
                    activeTab === tab
                      ? 'bg-black text-white font-semibold'
                      : 'bg-[#F8F9FA] text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/70 font-medium'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <div className="flex-1 bg-[#F8F9FA]" />
            </div>

            {/* Column 2: Middle Detail Content Column */}
            <div className="md:col-span-5 pt-6 pb-6 px-6 sm:px-8 flex flex-col justify-between h-full bg-white text-left">
              
              {/* Top Text Block */}
              <div className="space-y-2.5 w-full">
                <h3 className="text-2xl sm:text-[26px] font-medium tracking-tight text-neutral-900 leading-snug">
                  {current.headline}
                </h3>
                <p className="text-sm font-normal text-neutral-500 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Bottom Checklist Block */}
              <ul className="space-y-3 w-full pb-0.5">
                {current.checklist.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-normal text-neutral-800">
                    <div className="w-4.5 h-4.5 rounded-full border border-neutral-300 flex items-center justify-center bg-white shrink-0">
                      <Check className="w-3 h-3 text-neutral-800 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>

            {/* Column 3: Right Orbital Graphic Column */}
            <div className="md:col-span-4 p-6 sm:p-7 flex flex-col justify-between h-full bg-white">
              
              {/* Upper Section: Concentric Orbital Rings Graphic */}
              <div className="flex-1 flex items-center justify-center w-full py-4">
                <div className="relative w-48 h-48 sm:w-52 sm:h-52 flex items-center justify-center">
                  
                  {/* Outer Dashed Orbit Ring */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-neutral-300/90" />
                  <div className="absolute inset-6 rounded-full border border-neutral-200" />
                  <div className="absolute inset-12 rounded-full border border-neutral-200/60" />

                  {/* Central Black Badge */}
                  <div className="relative w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center shadow-xs z-10">
                    {current.centerIcon}
                  </div>

                  {/* 4 Orbiting Nodes */}
                  {current.nodes.map((node, idx) => (
                    <div
                      key={idx}
                      className={`absolute ${node.pos} w-8 h-8 rounded-full bg-white border border-neutral-200 shadow-2xs flex items-center justify-center z-10`}
                    >
                      {node.icon}
                    </div>
                  ))}

                </div>
              </div>

              {/* Metric Footer Row */}
              <div className="w-full text-left pt-4 border-t border-neutral-100">
                <div className="text-xs text-neutral-500 font-normal">{current.metricLabel}</div>
                <div className="flex items-baseline gap-2 mt-0.5 overflow-hidden">
                  <span className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight shrink-0">{current.metricVal}</span>
                  <span className="text-[10px] sm:text-[11px] text-neutral-400 font-normal whitespace-nowrap truncate">{current.metricSub}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
