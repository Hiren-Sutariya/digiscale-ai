'use client';

import React from 'react';

interface RollingTextProps {
  text: string;
  className?: string;
}

export const RollingText: React.FC<RollingTextProps> = ({ text, className = '' }) => {
  const chars = text.split('');

  return (
    <span className={`relative inline-flex items-center overflow-hidden ${className}`}>
      {/* Top character row moving UP out of view */}
      <span className="inline-flex items-center">
        {chars.map((char, index) => (
          <span
            key={`char-top-${index}`}
            className="inline-block transition-transform duration-350 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[135%]"
            style={{ transitionDelay: `${index * 22}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>

      {/* Bottom character row moving UP into view from below */}
      <span className="absolute inset-0 inline-flex items-center">
        {chars.map((char, index) => (
          <span
            key={`char-bottom-${index}`}
            className="inline-block transition-transform duration-350 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[135%] group-hover:translate-y-0"
            style={{ transitionDelay: `${index * 22}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </span>
  );
};
