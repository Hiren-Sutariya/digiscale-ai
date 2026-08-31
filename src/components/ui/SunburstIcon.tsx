import React from 'react';

export const SunburstIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          const rad = (angle * Math.PI) / 180;
          const x1 = Math.round((50 + 20 * Math.cos(rad)) * 10000) / 10000;
          const y1 = Math.round((50 + 20 * Math.sin(rad)) * 10000) / 10000;
          const x2 = Math.round((50 + 44 * Math.cos(rad)) * 10000) / 10000;
          const y2 = Math.round((50 + 44 * Math.sin(rad)) * 10000) / 10000;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
    </svg>
  );
};
