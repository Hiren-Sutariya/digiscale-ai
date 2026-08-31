'use client';

import React from 'react';
import { Cpu, Database, RotateCcw } from 'lucide-react';

export const RuntimeSection: React.FC = () => {
  const cards = [
    {
      title: 'Parallel orchestration',
      description: 'Fan out to dozens of agents, then gather and reconcile results automatically.',
      icon: <Cpu className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      title: 'Shared memory',
      description: 'Durable context that survives restarts, retries, and handoffs between agents.',
      icon: <Database className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      title: 'Deterministic replay',
      description: 'Re-run any trace step-by-step to debug, audit, or build an eval from it.',
      icon: <RotateCcw className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
  ];

  return (
    <section className="w-full bg-white select-text">
      
      {/* Pattern Bar Divider Row */}
      <div className="max-w-[1340px] mx-auto py-1.5 sm:py-2">
        <div className="h-9 w-full border-y border-neutral-200 bg-[repeating-linear-gradient(45deg,#0000001c_0,#0000001c_1.2px,transparent_0,transparent_5px)]" />
      </div>

      {/* Standalone 1340px Enclosed Section Box Container */}
      <div className="max-w-[1340px] mx-auto border-x border-y border-neutral-200 bg-white relative">
        
        {/* Top-Left Flush Connected Pill Badge (Updated to 04 Runtime) */}
        <div className="inline-flex items-center text-xs shadow-2xs -mt-[1px] -ml-[1px]">
          <span className="px-3.5 py-1.5 bg-neutral-200/90 font-bold text-neutral-900 border-r border-b border-neutral-200">
            04
          </span>
          <span className="px-4 py-1.5 bg-white font-medium text-neutral-800 border-r border-b border-neutral-200">
            Runtime
          </span>
        </div>

        {/* Section Body Padding */}
        <div className="pt-10 pb-14 px-6 sm:px-10">
          
          {/* Header Description */}
          <p className="text-xl sm:text-2xl font-normal sm:font-medium tracking-tight text-neutral-800 leading-snug max-w-3xl mb-12">
            An orchestrator plans work, routes it to agents, and reconciles results with shared memory, tool access, and guardrails.
          </p>

          {/* 3 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200 border border-neutral-200 bg-white shadow-2xs">
            {cards.map((card) => (
              <div key={card.title} className="p-8 sm:p-10 space-y-4 hover:bg-neutral-50/60 transition-colors">
                <div className="h-8 flex items-center text-neutral-900">{card.icon}</div>
                <h3 className="text-lg font-medium text-neutral-900 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm font-normal text-neutral-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};
