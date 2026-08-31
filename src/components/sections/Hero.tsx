'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IsometricTowers } from '@/components/ui/IsometricTowers';
import { RollingText } from '@/components/ui/RollingText';
import {
  ZapierIcon,
  N8nIcon,
  MakeIcon,
  OpenAIIcon,
  HubSpotIcon,
  SlackIcon,
  GoogleSheetsIcon,
  SalesforceIcon,
  ClaudeIcon,
  NotionIcon,
} from '@/components/ui/AutomationToolIcons';

export const Hero: React.FC = () => {
  // Left Side Organic Grid Mask (5 rows x 5 cols)
  const leftOrganicMask: boolean[][] = [
    [false, false, false, false, true],  // Row 0: Zapier at (0,4)
    [false, true, true, true, true],     // Row 1
    [true, true, true, true, true],      // Row 2: n8n at (2,1), OpenAI at (2,2)
    [true, true, true, true, false],     // Row 3: Make at (3,3)
    [true, false, true, false, false],   // Row 4: HubSpot at (4,0)
  ];

  // Right Side Organic Grid Mask (5 rows x 5 cols)
  const rightOrganicMask: boolean[][] = [
    [true, false, false, false, false],  // Row 0: Slack at (0,0)
    [true, true, true, true, false],     // Row 1
    [true, true, true, true, true],      // Row 2: Google Sheets at (2,3)
    [false, true, true, true, true],     // Row 3: Salesforce at (3,2)
    [false, false, true, false, true],   // Row 4: Claude AI at (4,2), Notion at (4,4)
  ];

  // Left Grid Tool Placement
  const leftToolMap: Record<string, { icon: React.ReactNode; name: string }> = {
    '0-4': { icon: <ZapierIcon className="w-6.5 h-6.5" />, name: 'Zapier' },
    '2-1': { icon: <N8nIcon className="w-6.5 h-6.5" />, name: 'n8n' },
    '2-2': { icon: <OpenAIIcon className="w-6.5 h-6.5" />, name: 'OpenAI' },
    '3-3': { icon: <MakeIcon className="w-6.5 h-6.5" />, name: 'Make.com' },
    '4-0': { icon: <HubSpotIcon className="w-6.5 h-6.5" />, name: 'HubSpot' },
  };

  // Right Grid Tool Placement
  const rightToolMap: Record<string, { icon: React.ReactNode; name: string }> = {
    '0-0': { icon: <SlackIcon className="w-6.5 h-6.5" />, name: 'Slack' },
    '2-3': { icon: <GoogleSheetsIcon className="w-6.5 h-6.5" />, name: 'Google Sheets' },
    '3-2': { icon: <SalesforceIcon className="w-8.5 h-8.5" />, name: 'Salesforce' },
    '4-2': { icon: <ClaudeIcon className="w-6.5 h-6.5" />, name: 'Claude AI' },
    '4-4': { icon: <NotionIcon className="w-6.5 h-6.5" />, name: 'Notion' },
  };

  return (
    <section className="relative w-full bg-white overflow-hidden">
      
      {/* Outer Content Container matching 1340px grid width */}
      <div className="max-w-[1340px] mx-auto border-x border-neutral-200 relative">
        
        {/* TILE GRIDS WITH PERFECT SHARED BORDERS */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
          
          {/* Left Side Grid Mesh (5x5) */}
          <div className="absolute left-0 top-0 w-[280px] grid grid-cols-5 opacity-95 pointer-events-auto">
            {leftOrganicMask.map((row, rIdx) =>
              row.map((active, cIdx) => {
                const key = `${rIdx}-${cIdx}`;
                const tool = leftToolMap[key];

                const hasAbove = rIdx > 0 && leftOrganicMask[rIdx - 1]?.[cIdx];
                const hasLeft = cIdx > 0 && leftOrganicMask[rIdx]?.[cIdx - 1];

                return (
                  <div
                    key={`left-cell-${key}`}
                    className={`group relative h-14 w-14 flex items-center justify-center transition-colors duration-200 ${
                      active
                        ? `border-b border-r border-neutral-200/90 ${!hasAbove ? 'border-t border-t-neutral-200/90' : ''} ${!hasLeft ? 'border-l border-l-neutral-200/90' : ''} bg-white/80 hover:bg-neutral-50 shadow-2xs`
                        : 'bg-transparent pointer-events-none'
                    }`}
                  >
                    {active && tool && (
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: rIdx * 0.3 }}
                        className="flex items-center justify-center"
                      >
                        {tool.icon}
                        
                        {/* Tool Name Badge Hover Tooltip */}
                        <div className="absolute -top-7 px-2.5 py-0.5 bg-black text-white text-[10px] font-medium rounded-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xs whitespace-nowrap z-30">
                          {tool.name}
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Right Side Grid Mesh (5x5) */}
          <div className="absolute right-0 top-0 w-[280px] grid grid-cols-5 opacity-95 pointer-events-auto">
            {rightOrganicMask.map((row, rIdx) =>
              row.map((active, cIdx) => {
                const key = `${rIdx}-${cIdx}`;
                const tool = rightToolMap[key];

                const hasAbove = rIdx > 0 && rightOrganicMask[rIdx - 1]?.[cIdx];
                const hasLeft = cIdx > 0 && rightOrganicMask[rIdx]?.[cIdx - 1];

                return (
                  <div
                    key={`right-cell-${key}`}
                    className={`group relative h-14 w-14 flex items-center justify-center transition-colors duration-200 ${
                      active
                        ? `border-b border-r border-neutral-200/90 ${!hasAbove ? 'border-t border-t-neutral-200/90' : ''} ${!hasLeft ? 'border-l border-l-neutral-200/90' : ''} bg-white/80 hover:bg-neutral-50 shadow-2xs`
                        : 'bg-transparent pointer-events-none'
                    }`}
                  >
                    {active && tool && (
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: cIdx * 0.3 }}
                        className="flex items-center justify-center"
                      >
                        {tool.icon}

                        {/* Tool Name Badge Hover Tooltip */}
                        <div className="absolute -top-7 px-2.5 py-0.5 bg-black text-white text-[10px] font-medium rounded-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xs whitespace-nowrap z-30">
                          {tool.name}
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })
            )}
          </div>

        </div>

        {/* Center Hero Copy Area */}
        <div className="pt-12 sm:pt-14 pb-9 px-4 sm:px-6 text-center relative z-10 space-y-4">
          
          {/* Eyebrow Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center border border-neutral-300/90 rounded-full bg-white shadow-2xs overflow-hidden"
          >
            <span className="px-5 py-1.5 bg-black text-white text-xs sm:text-[13px] font-normal tracking-wide flex items-center justify-center">
              New
            </span>
            <span className="px-5 py-1.5 text-xs sm:text-[13px] font-normal text-neutral-600 tracking-tight">
              DIGISCALE AI 3.0 — Multi-agent runtime
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[46px] font-normal sm:font-medium text-neutral-900 tracking-tight leading-[1.14] max-w-3xl mx-auto"
          >
            AI Agents That Ship <br />
            Real Business Outcomes
          </motion.h1>

          {/* Subheadline Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed max-w-xl mx-auto"
          >
            Build, connect, deploy, and monitor intelligent agents from one platform. Production-grade infrastructure for teams shipping AI into the real world.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-2 pt-1"
          >
            {/* Primary Black Button (Start Building) */}
            <Link
              href="/request-automation"
              className="group relative overflow-hidden px-6 py-2.5 bg-black text-white text-xs sm:text-sm font-normal tracking-tight hover:bg-neutral-800 transition-colors shadow-xs inline-flex items-center justify-center h-10 min-w-[130px]"
            >
              <RollingText text="Start Building" />
            </Link>

            {/* Secondary Button (Book Demo - turns solid black on hover) */}
            <Link
              href="/request-automation"
              className="group relative overflow-hidden px-6 py-2.5 bg-white border border-neutral-300 text-neutral-800 hover:bg-black hover:text-white hover:border-black transition-colors duration-300 shadow-2xs inline-flex items-center justify-center h-10 min-w-[120px] text-xs sm:text-sm font-normal"
            >
              <RollingText text="Book Demo" />
            </Link>
          </motion.div>

        </div>

        {/* Hero Bottom Graphic: 5 Isometric 3D Towers */}
        <IsometricTowers />

      </div>

    </section>
  );
};
