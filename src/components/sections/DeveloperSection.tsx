'use client';

import React from 'react';
import Link from 'next/link';
import { Terminal, Copy } from 'lucide-react';

export const DeveloperSection: React.FC = () => {
  return (
    <section className="w-full bg-white select-none">
      <div className="max-w-[1340px] mx-auto border-x border-neutral-200 pt-12 pb-14 px-6 sm:px-10">
        
        {/* Pill Tag */}
        <div className="inline-flex items-center border border-neutral-200 bg-white text-xs mb-8">
          <span className="px-2.5 py-1 bg-neutral-200 font-semibold text-neutral-800">
            04
          </span>
          <span className="px-3 py-1 font-normal text-neutral-600">
            Benchmarks
          </span>
        </div>

        {/* Header Text */}
        <p className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-800 leading-snug max-w-3xl mb-12">
          Measured on AgentBench-1.2k across tool use, retrieval, and multi-step planning. Orbital&apos;s orchestration lands more tasks and spends fewer tokens doing it.
        </p>

        {/* Benchmark Metrics + Developer Terminal Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* 2 Stat Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 border border-neutral-200 bg-white space-y-2">
              <div className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight">
                94%
              </div>
              <p className="text-xs font-medium text-neutral-600">
                Task success rate
              </p>
            </div>
            <div className="p-8 border border-neutral-200 bg-white space-y-2">
              <div className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight">
                3.2x
              </div>
              <p className="text-xs font-medium text-neutral-600">
                More tasks per dollar
              </p>
            </div>
          </div>

          {/* Code Terminal Box */}
          <div className="p-6 border border-neutral-200 bg-neutral-900 text-neutral-100 font-mono text-xs space-y-4 rounded-xs shadow-xs">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 text-neutral-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-neutral-400" />
                <span>Quickstart SDK</span>
              </div>
              <button 
                onClick={() => navigator.clipboard.writeText('npm i @orbital/agents')}
                className="hover:text-white transition-colors"
                title="Copy snippet"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="text-neutral-300 overflow-x-auto leading-relaxed">
              <code>{`$ npm i @orbital/agents

import { Agent } from "@orbital/agents";

const agent = new Agent({
  name: "SalesOps",
  tools: ["hubspot", "slack"],
});

await agent.run("Enrich lead alex@acme.com");`}</code>
            </pre>
          </div>

        </div>

        {/* Subtext + Action Links */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-neutral-200">
          <p className="text-xs sm:text-sm text-neutral-600">
            Typed SDKs for TypeScript and Python. Local-first dev, deploy with one command, and the same runtime in every environment.
          </p>
          <Link
            href="/request-automation"
            className="inline-flex items-center gap-2 px-5 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors shrink-0"
          >
            Read the docs
          </Link>
        </div>

      </div>

      {/* Bottom Diagonal Striped Divider Bar */}
      <div className="max-w-[1340px] mx-auto border-x border-t border-neutral-200 h-7 bg-[repeating-linear-gradient(45deg,#0000000a_0,#0000000a_1px,transparent_0,transparent_8px)]" />
    </section>
  );
};
