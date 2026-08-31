'use client';

import React from 'react';
import { Clock, AlertTriangle, Wrench } from 'lucide-react';

export const ProblemStatement: React.FC = () => {
  const problems = [
    {
      title: 'Hours wasted daily',
      description: 'Teams lose 3 to 4 hours per day on manual tasks that could be automated.',
      icon: <Clock className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      title: 'Human errors pile up',
      description: 'Manual processes introduce mistakes that slow operations and damage client trust.',
      icon: <AlertTriangle className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
    },
    {
      title: 'Disconnected tools',
      description: 'Your stack does not talk to each other. Data gets lost and nothing stays in sync.',
      icon: <Wrench className="w-5 h-5 text-neutral-800 stroke-[1.8]" />,
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
        <div className="pt-8 pb-10 px-6 sm:px-10 space-y-10">
          
          {/* Split Header (Exact Runtime Section Heading Size: text-xl sm:text-2xl) */}
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
              <div key={problem.title} className="p-8 sm:p-9 space-y-5 hover:bg-neutral-50/60 transition-colors text-left">
                <div className="h-8 flex items-center justify-start text-neutral-900">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-medium text-neutral-900 tracking-tight">
                  {problem.title}
                </h3>
                <p className="text-xs sm:text-sm font-normal text-neutral-500 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          {/* Impact Note Row */}
          <div className="p-6 sm:p-8 bg-neutral-50/70 border border-neutral-200/80 space-y-2">
            <div className="flex items-center gap-2 text-neutral-900 font-medium text-base sm:text-lg">
              <Clock className="w-5 h-5 text-neutral-800 stroke-[1.8]" />
              <span>Hours Wasted Daily</span>
            </div>
            <p className="text-xs sm:text-sm font-normal text-neutral-600 leading-relaxed max-w-4xl">
              Every team member spending nearly half their workday on routine operations like data entry, follow-up reminders, approval cycles, report generation, and status updates. That's not just lost time, it's lost revenue, delayed projects, and burned-out employees.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
