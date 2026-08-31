'use client';

import React from 'react';
import { Layers, AlertTriangle, Plug, TrendingDown } from 'lucide-react';

export const ProblemStatement: React.FC = () => {
  const problems = [
    {
      title: 'Repetitive Manual Tasks',
      description: 'Teams lose 3 to 4 hours per day copying data between apps, updating spreadsheets, and managing manual triggers.',
      icon: <Layers className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      title: 'Human Errors & Slips',
      description: 'Manual processes introduce costly mistakes, missed customer follow-ups, and data entry errors that damage client trust.',
      icon: <AlertTriangle className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      title: 'Disconnected Tools',
      description: 'Your software stack does not talk to each other. Shopify, CRMs, and messaging apps stay fragmented with zero real-time sync.',
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
            01
          </span>
          <span className="px-4 py-1.5 bg-white font-medium text-neutral-800 border-r border-b border-neutral-200">
            Problem statement
          </span>
        </div>

        {/* Section Content */}
        <div className="pt-8 pb-10 px-4 sm:px-8 lg:px-10 space-y-10">
          
          {/* Split Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <h2 className="text-xl sm:text-2xl font-normal sm:font-medium tracking-tight text-neutral-800 leading-snug max-w-xl">
              Manual workflows are silently killing productivity
            </h2>
            <p className="text-sm font-normal text-neutral-500 max-w-xs leading-relaxed">
              Your team spends hours every week on repetitive tasks. Copying data, sending follow-ups, routing approvals. DIGISCALE AI eliminates all of it.
            </p>
          </div>

          {/* 3 Connected Problem Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-200 divide-y md:divide-y-0 md:divide-x divide-neutral-200 bg-white shadow-2xs">
            {problems.map((problem) => (
              <div key={problem.title} className="p-6 sm:p-8 lg:p-9 space-y-5 hover:bg-neutral-50/60 transition-colors text-left">
                <div className="h-8 flex items-center justify-start text-neutral-900">
                  {problem.icon}
                </div>
                <h3 className="text-base sm:text-lg font-medium text-neutral-900 tracking-tight">
                  {problem.title}
                </h3>
                <p className="text-xs sm:text-sm font-normal text-neutral-500 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          {/* Impact Note Row (Distinct Title & Non-Repeating Content) */}
          <div className="p-6 sm:p-8 bg-neutral-50/70 border border-neutral-200/80 space-y-2.5">
            <div className="flex items-center gap-2 text-neutral-900 font-medium text-base sm:text-lg">
              <TrendingDown className="w-5 h-5 text-neutral-800 stroke-[1.8]" />
              <span>The Hidden Cost of Operations Inefficiency</span>
            </div>
            <p className="text-xs sm:text-sm font-normal text-neutral-600 leading-relaxed max-w-4xl">
              Every team member spending nearly half their workday on routine operations like data entry, follow-up reminders, approval cycles, report generation, and status updates. That&apos;s not just lost time — it&apos;s lost revenue, delayed projects, and burned-out employees.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
