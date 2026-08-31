'use client';

import React from 'react';
import { Search, Target, GitBranch, Plug } from 'lucide-react';

export const PlatformLifecycle: React.FC = () => {
  const features = [
    {
      title: 'Discover',
      description: 'We deeply analyze your business workflows, existing tools, and operational bottlenecks to uncover high-ROI automation opportunities.',
      icon: <Search className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      title: 'Strategy',
      description: 'We design custom AI agent blueprints, data architecture, and security protocols tailored specifically for your organization.',
      icon: <Target className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      title: 'Build',
      description: 'We engineer autonomous AI agents and intelligent workflows equipped with memory, multi-step reasoning, and enterprise guardrails.',
      icon: <GitBranch className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      title: 'Connect',
      description: 'We seamlessly integrate your custom AI agents directly into your existing software stack like Salesforce, n8n, and HubSpot.',
      icon: <Plug className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
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
            02
          </span>
          <span className="px-4 py-1.5 bg-white font-medium text-neutral-800 border-r border-b border-neutral-200">
            The platform
          </span>
        </div>

        {/* Section Body Padding */}
        <div className="pt-8 pb-10 px-6 sm:px-10">
          
          {/* Split Header (Exact Runtime Section Heading Size: text-xl sm:text-2xl) */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <h2 className="text-xl sm:text-2xl font-normal sm:font-medium tracking-tight text-neutral-800 leading-snug max-w-xl">
              One platform for the entire agent lifecycle.
            </h2>
            <p className="text-sm font-normal text-neutral-500 max-w-xs leading-relaxed">
              From first workflow audit to production deployment at scale no glue code, no stitched-together tools.
            </p>
          </div>

          {/* 4 Connected Feature Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-neutral-200 divide-x divide-y lg:divide-y-0 divide-neutral-200 bg-white shadow-2xs">
            {features.map((feature) => (
              <div key={feature.title} className="p-8 sm:p-9 space-y-5 hover:bg-neutral-50/60 transition-colors">
                <div className="h-8 flex items-center text-neutral-900">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-neutral-900 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm font-normal text-neutral-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};
