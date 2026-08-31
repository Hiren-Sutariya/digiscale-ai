'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface WordItem {
  text: string;
  highlight?: boolean;
}

export const IsometricTowers: React.FC = () => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  
  // Smooth scroll trigger offset
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.35'],
  });

  // Paragraph Words Array with Highlight Flag for Key Terms
  const words: WordItem[] = [
    { text: 'DIGISCALE', highlight: true },
    { text: 'AI', highlight: true },
    { text: 'is', highlight: false },
    { text: 'a', highlight: false },
    { text: 'pioneer', highlight: false },
    { text: 'in', highlight: false },
    { text: 'enterprise', highlight: true },
    { text: 'multi-agent', highlight: true },
    { text: 'automation.', highlight: true },
    { text: 'We', highlight: false },
    { text: 'build', highlight: false },
    { text: 'production-grade', highlight: false },
    { text: 'infrastructure', highlight: false },
    { text: 'that', highlight: false },
    { text: 'seamlessly', highlight: false },
    { text: 'connects', highlight: false },
    { text: 'intelligent', highlight: false },
    { text: 'AI', highlight: true },
    { text: 'agents', highlight: true },
    { text: 'with', highlight: false },
    { text: 'your', highlight: false },
    { text: 'existing', highlight: false },
    { text: 'tools', highlight: false },
    { text: 'like', highlight: false },
    { text: 'Zapier,', highlight: true },
    { text: 'n8n,', highlight: true },
    { text: 'Salesforce,', highlight: true },
    { text: 'and', highlight: false },
    { text: 'OpenAI', highlight: true },
    { text: '—', highlight: false },
    { text: 'transforming', highlight: false },
    { text: 'complex', highlight: false },
    { text: 'business', highlight: false },
    { text: 'workflows', highlight: false },
    { text: 'into', highlight: false },
    { text: 'reliable,', highlight: true },
    { text: 'autonomous', highlight: true },
    { text: 'operations', highlight: true },
    { text: 'with', highlight: false },
    { text: 'continuous', highlight: false },
    { text: 'real-time', highlight: true },
    { text: 'monitoring,', highlight: true },
    { text: 'enterprise', highlight: true },
    { text: 'security,', highlight: true },
    { text: 'and', highlight: false },
    { text: 'zero', highlight: false },
    { text: 'operational', highlight: false },
    { text: 'friction.', highlight: false },
  ];

  return (
    <div id="about" className="relative w-full border-t border-neutral-200 bg-white scroll-mt-20 pt-20 sm:pt-24 pb-8 sm:pb-10">
      
      {/* About Section Main Body */}
      <div className="px-6 sm:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Scroll-Driven Word Color Reveal Paragraph */}
          <p 
            ref={paragraphRef}
            className="text-base sm:text-lg lg:text-[20px] font-normal leading-relaxed tracking-tight max-w-3xl mx-auto flex flex-wrap justify-center gap-x-1.5 gap-y-1"
          >
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;

              return (
                <WordSpan
                  key={i}
                  word={word}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </p>

          {/* 3 Highlighted Metric Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-neutral-100 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">10x</div>
              <div className="text-xs text-neutral-500 font-normal mt-0.5">Faster Workflow Execution</div>
            </div>
            <div className="text-center border-y sm:border-y-0 sm:border-x border-neutral-200/80 py-3 sm:py-0">
              <div className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">99.9%</div>
              <div className="text-xs text-neutral-500 font-normal mt-0.5">Enterprise Agent Reliability</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">100+</div>
              <div className="text-xs text-neutral-500 font-normal mt-0.5">Pre-built Tool Connectors</div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom 2 Lines Enclosed Single 45-Degree Diagonal Pattern Row */}
      <div className="mt-8 h-10 w-full border-y border-neutral-200 bg-[repeating-linear-gradient(45deg,#0000001c_0,#0000001c_1.2px,transparent_0,transparent_5px)]" />

    </div>
  );
};

// WordSpan Component starting with readable contrast
const WordSpan: React.FC<{
  word: WordItem;
  progress: any;
  range: [number, number];
}> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.75, 1]);
  
  const color = word.highlight
    ? useTransform(progress, range, ['#525252', '#6366f1'])
    : useTransform(progress, range, ['#525252', '#171717']);

  return (
    <motion.span
      style={{ opacity, color }}
      className={`inline-block transition-colors duration-150 ${word.highlight ? 'font-semibold' : ''}`}
    >
      {word.text}
    </motion.span>
  );
};
