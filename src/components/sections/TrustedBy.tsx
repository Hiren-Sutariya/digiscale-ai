'use client';

import React from 'react';

export const TrustedBy: React.FC = () => {
  const logos = [
    {
      name: 'prismic',
      content: (
        <div className="flex items-center gap-2.5 text-neutral-900">
          <svg className="w-6.5 h-6.5 stroke-neutral-900 fill-none" viewBox="0 0 24 24" strokeWidth="2">
            <rect x="5" y="5" width="14" height="14" rx="4" transform="rotate(45 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
          <span className="text-xl font-semibold tracking-tight text-neutral-900">prismic</span>
        </div>
      ),
    },
    {
      name: 'Hormone Health',
      content: (
        <div className="flex items-center gap-2.5 text-neutral-900">
          <svg className="w-6.5 h-6.5 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="8" strokeDasharray="2 2" />
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <circle cx="16" cy="8" r="1.5" fill="currentColor" />
          </svg>
          <div className="flex flex-col text-left leading-none">
            <span className="text-xs font-semibold text-neutral-900">Hormone Health</span>
            <span className="text-[9px] font-bold text-neutral-600 tracking-wider uppercase mt-0.5">N E T W O R K</span>
          </div>
        </div>
      ),
    },
    {
      name: 'mparticle',
      content: (
        <div className="flex items-center gap-2.5 text-neutral-900">
          <svg className="w-6.5 h-6.5 fill-neutral-900" viewBox="0 0 24 24">
            <rect x="3" y="6" width="4" height="12" transform="skewX(-15)" />
            <rect x="9" y="6" width="4" height="12" transform="skewX(-15)" />
            <rect x="15" y="6" width="4" height="12" transform="skewX(-15)" />
          </svg>
          <span className="text-xl font-bold tracking-tight text-neutral-900">mparticle</span>
        </div>
      ),
    },
    {
      name: 'amwell',
      content: (
        <div className="flex items-center gap-2.5 text-neutral-900">
          <svg className="w-6.5 h-6.5 stroke-neutral-900 fill-none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            <path d="M9 12l2 2 4-4" strokeWidth="2" />
          </svg>
          <span className="text-xl font-semibold tracking-tight text-neutral-900">amwell</span>
        </div>
      ),
    },
    {
      name: 'CLEAR',
      content: (
        <div className="flex items-center gap-2.5 text-neutral-900">
          <svg className="w-6.5 h-6.5 text-neutral-900" viewBox="0 0 24 24" fill="currentColor">
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x = 12 + 7.5 * Math.cos(angle);
              const y = 12 + 7.5 * Math.sin(angle);
              return <circle key={i} cx={x} cy={y} r="1.3" />;
            })}
          </svg>
          <span className="text-lg font-bold tracking-[0.2em] text-neutral-900 uppercase">CLEAR</span>
        </div>
      ),
    },
    {
      name: 'PixelGrid',
      content: (
        <div className="flex items-center gap-2.5 text-neutral-900">
          <div className="w-5.5 h-5.5 grid grid-cols-3 gap-0.5">
            <div className="bg-neutral-900" />
            <div className="bg-neutral-400" />
            <div className="bg-neutral-900" />
            <div className="bg-neutral-400" />
            <div className="bg-neutral-900" />
            <div className="bg-neutral-400" />
            <div className="bg-neutral-900" />
            <div className="bg-neutral-400" />
            <div className="bg-neutral-900" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-neutral-900">PixelGrid</span>
        </div>
      ),
    },
  ];

  // Triple logos for smooth infinite marquee
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section id="about" className="w-full bg-white select-text relative overflow-hidden scroll-mt-28">
      
      {/* CSS style for continuous smooth marquee */}
      <style jsx global>{`
        @keyframes marqueeTrack {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-runner {
          animation: marqueeTrack 22s linear infinite;
        }
      `}</style>

      {/* Outer 1340px Container for Heading */}
      <div className="max-w-[1340px] mx-auto border-x border-b border-neutral-200 relative">
        <div className="py-7 px-6 sm:px-8">
          <p className="text-base sm:text-lg font-normal text-neutral-800 tracking-tight select-text">
            Trusted by modern product and engineering teams.
          </p>
        </div>
      </div>

      {/* FULL-WIDTH SCROLLING SLIDER TICKER */}
      <div className="relative w-full bg-white overflow-hidden">
        
        {/* Outer Vertical Grid Lines Overlay for 1340px boundary */}
        <div className="pointer-events-none absolute inset-0 max-w-[1340px] mx-auto border-x border-neutral-200 z-20" />

        {/* Continuous Infinite Scrolling Track */}
        <div className="marquee-runner flex items-center w-max">
          {marqueeLogos.map((logo, idx) => (
            <div
              key={`marquee-logo-${idx}`}
              className="h-20 w-52 sm:w-60 flex items-center justify-center px-6 bg-white hover:bg-neutral-50 transition-colors flex-shrink-0 border-y border-r border-neutral-200"
            >
              {logo.content}
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Closing Container Box with compact height */}
      <div className="max-w-[1340px] mx-auto border-x border-b border-neutral-200 h-10 sm:h-11 bg-white" />

    </section>
  );
};
