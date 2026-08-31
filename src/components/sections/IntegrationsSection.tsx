'use client';

import React from 'react';
import { OFFICIAL_TOOL_LOGOS } from '@/components/ui/AutomationToolIcons';

// Inline Vector SVG for Klaviyo to guarantee 100% reliable rendering without CDN reliance
const KlaviyoSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-neutral-900">
    <path d="M.446 2.012v19.976h23.108V2.012H.446zm17.65 14.502h-4.329l-3.328-4.544-1.229 1.341v3.203H6.012V7.486h3.198v4.544l4.137-4.544h4.436l-4.743 5.093 5.056 3.935z"/>
  </svg>
);

export const IntegrationsSection: React.FC = () => {
  const tools = [
    { name: 'Shopify', logo: OFFICIAL_TOOL_LOGOS.shopify },
    { name: 'WhatsApp', logo: OFFICIAL_TOOL_LOGOS.whatsapp },
    { name: 'Salesforce', logo: OFFICIAL_TOOL_LOGOS.salesforce },
    { name: 'HubSpot', logo: OFFICIAL_TOOL_LOGOS.hubspot },
    { name: 'OpenAI', logo: OFFICIAL_TOOL_LOGOS.openai },
    { name: 'Claude AI', logo: OFFICIAL_TOOL_LOGOS.claude },
    { name: 'Slack', logo: OFFICIAL_TOOL_LOGOS.slack },
    { name: 'Gmail', logo: OFFICIAL_TOOL_LOGOS.gmail },
    { name: 'n8n', logo: OFFICIAL_TOOL_LOGOS.n8n },
    { name: 'Make.com', logo: OFFICIAL_TOOL_LOGOS.make },
    { name: 'Zapier', logo: OFFICIAL_TOOL_LOGOS.zapier },
    { name: 'Airtable', logo: OFFICIAL_TOOL_LOGOS.airtable },
    { name: 'Google Sheets', logo: OFFICIAL_TOOL_LOGOS.googlesheets },
    { name: 'Google Calendar', logo: OFFICIAL_TOOL_LOGOS.googlecalendar },
    { name: 'Google Drive', logo: OFFICIAL_TOOL_LOGOS.googledrive },
    { name: 'Stripe', logo: OFFICIAL_TOOL_LOGOS.stripe },
    { name: 'QuickBooks', logo: OFFICIAL_TOOL_LOGOS.quickbooks },
    { name: 'Zendesk', logo: OFFICIAL_TOOL_LOGOS.zendesk },
    { name: 'Klaviyo', customSvg: <KlaviyoSVG /> },
    { name: 'Notion', logo: OFFICIAL_TOOL_LOGOS.notion },
    { name: 'Trello', logo: OFFICIAL_TOOL_LOGOS.trello },
    { name: 'Asana', logo: OFFICIAL_TOOL_LOGOS.asana },
    { name: 'Meta Ads', logo: OFFICIAL_TOOL_LOGOS.meta },
    { name: 'LinkedIn', logo: OFFICIAL_TOOL_LOGOS.linkedin },
  ];

  return (
    <section id="integrations" className="w-full bg-white select-text scroll-mt-28">
      
      {/* Pattern Bar Divider Row */}
      <div className="max-w-[1340px] mx-auto py-1">
        <div className="h-9 w-full border-y border-neutral-200 bg-[repeating-linear-gradient(45deg,#0000001c_0,#0000001c_1.2px,transparent_0,transparent_5px)]" />
      </div>

      {/* 1340px Enclosed Section Box Container */}
      <div className="max-w-[1340px] mx-auto border-x border-y border-neutral-200 bg-white relative">
        
        {/* Top-Left Flush Connected Pill Badge */}
        <div className="inline-flex items-center text-xs shadow-2xs -mt-[1px] -ml-[1px]">
          <span className="px-3.5 py-1.5 bg-neutral-200/90 font-bold text-neutral-900 border-r border-b border-neutral-200">
            05
          </span>
          <span className="px-4 py-1.5 bg-white font-medium text-neutral-800 border-r border-b border-neutral-200">
            Integrations
          </span>
        </div>

        {/* Section Content */}
        <div className="pt-8 pb-14 px-6 sm:px-10">
          
          {/* Split Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <h2 className="text-xl sm:text-2xl font-normal sm:font-medium tracking-tight text-neutral-800 leading-snug max-w-xl">
              Connected to your entire software stack.
            </h2>
            <p className="text-sm font-normal text-neutral-500 max-w-xs leading-relaxed">
              200+ pre-built connectors across CRMs, E-Commerce, messaging, LLMs, and ERPs governed by strict enterprise security.
            </p>
          </div>

          {/* 24 Tools Seamless Connected Grid (6 Columns on Large Screens) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border border-neutral-200 divide-x divide-y divide-neutral-200 bg-white shadow-2xs">
            {tools.map((tool) => (
              <div 
                key={tool.name} 
                className="p-6 flex flex-col items-center justify-center space-y-3 hover:bg-neutral-50/80 transition-colors group min-h-[110px]"
              >
                <div className="w-7 h-7 flex items-center justify-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                  {tool.customSvg ? (
                    tool.customSvg
                  ) : (
                    <img 
                      src={tool.logo} 
                      alt={tool.name} 
                      className="max-w-full max-h-full object-contain"
                    />
                  )}
                </div>
                <span className="text-xs font-medium text-neutral-800 group-hover:text-black transition-colors text-center">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};
