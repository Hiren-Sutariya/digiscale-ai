'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { SunburstIcon } from '@/components/ui/SunburstIcon';
import { RollingText } from '@/components/ui/RollingText';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  const { scrollY } = useScroll();

  // Instant & Smooth Auto-Hiding Navbar on ANY minor scroll down (>5px)
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;
    
    if (diff > 0 && latest > 5) {
      setHidden(true); // Smoothly slide up & hide on any minor scroll down
    } else if (diff < 0 || latest <= 5) {
      setHidden(false); // Smoothly slide down & show on scroll up or at top
    }
  });

  const navLinks = [
    { name: 'Automations', href: '/automations' },
    { name: 'About', href: '/#about' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Blog', href: '/#blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <motion.header 
      variants={{
        visible: { y: '0%', opacity: 1 },
        hidden: { y: '-100%', opacity: 0.9 },
      }}
      initial="visible"
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ 
        duration: 0.4, 
        ease: [0.16, 1, 0.3, 1], // Smooth decelerate easing
      }}
      className="w-full bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-2xs"
    >
      {/* Outer Header Container (h-20 / 80px) with Outer Left & Right Vertical Border Lines */}
      <div className="max-w-[1340px] mx-auto border-x border-neutral-200 flex items-center justify-between h-20 px-0">
        
        {/* Connected Box Attached FLUSH directly to Left Vertical Line with EQUAL TOP & BOTTOM SPACING */}
        <div className="flex items-center border border-neutral-200 bg-white divide-x divide-neutral-200 h-12 shadow-2xs -ml-[1px]">
          
          {/* Brand Logo Cell */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 px-6 h-full hover:bg-neutral-50 transition-colors"
          >
            <SunburstIcon className="w-6 h-6 text-black stroke-[2.2]" />
            <span className="text-base sm:text-[17px] font-bold tracking-tight text-neutral-900 uppercase">
              DIGISCALE AI
            </span>
          </Link>

          {/* Connected Menu Items with Hover Line & Black Text Transition */}
          <nav className="hidden md:flex items-center h-full divide-x divide-neutral-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative px-7 h-full flex items-center text-sm font-normal text-neutral-600 hover:text-black transition-colors duration-200"
              >
                <span>{link.name}</span>
                {/* Animated Hover Line Indicator at bottom of cell */}
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-center" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Standalone CTA Button (Turns Solid White with Black Border on Hover) */}
        <div className="hidden md:flex items-center pr-6">
          <Link
            href="/request-automation"
            className="group relative overflow-hidden inline-flex items-center justify-center px-7 py-2.5 bg-black text-white border border-black hover:bg-white hover:text-black hover:border-neutral-300 transition-colors duration-300 shadow-xs h-10 min-w-[130px] text-xs sm:text-sm font-normal"
          >
            <RollingText text="Start Building" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center pr-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-neutral-700 hover:text-black"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 divide-y divide-neutral-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-6 py-3.5 text-xs sm:text-sm font-medium text-neutral-800 hover:bg-neutral-50"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/request-automation"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full py-3.5 bg-black text-white text-center text-xs font-normal uppercase tracking-wider"
          >
            Start Building
          </Link>
        </div>
      )}
    </motion.header>
  );
};
