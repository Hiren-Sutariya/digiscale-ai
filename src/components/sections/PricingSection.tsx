'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { RollingText } from '@/components/ui/RollingText';
import { Check, Minus, ChevronDown, ChevronUp } from 'lucide-react';

export const PricingSection: React.FC = () => {
  // Pro plan billing cycle state: 'monthly' | 'yearly'
  const [proBilling, setProBilling] = useState<'monthly' | 'yearly'>('monthly');
  // Collapsed comparison table by default
  const [showComparison, setShowComparison] = useState(false);

  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: '/ Forever',
      description: 'Perfect for learning, prototypes, and personal automation projects.',
      features: [
        '5 Active Workflows',
        '1,000 Automation Runs',
        'Basic Integrations',
        '100 AI Actions',
        'Multi-step Workflows',
        'Webhook Support',
        'Basic Analytics',
        '1 User Seat',
        '7 Days Execution History',
      ],
      buttonText: 'Start Free',
      popular: false,
    },
    {
      name: 'Pro',
      price: proBilling === 'monthly' ? '$19' : '$15',
      period: proBilling === 'monthly' ? '/ month' : '/ month (billed yearly)',
      description: 'Everything you need to ship production AI automations at scale.',
      features: [
        '50 Active Workflows',
        '10,000 Automation Runs',
        '300+ Enterprise Connectors',
        '2,000 AI Actions',
        'Full API Access',
        'Advanced Analytics',
        '5 User Seats',
        '90 Days Execution History',
        'Advanced AI Automation',
      ],
      buttonText: 'Start 14-Day Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Built for large organizations needing enterprise security and SLA support.',
      features: [
        'Unlimited Active Workflows',
        'Custom Automation Runs',
        'Custom Integrations & APIs',
        'Custom AI Actions',
        'SSO / SAML Authentication',
        'Dedicated Account Manager',
        'Unlimited User Seats',
        'Custom Execution History',
        '24/7 Priority Support',
      ],
      buttonText: 'Talk to Sales',
      popular: false,
    },
  ];

  // Exact comparison metrics
  const comparisonData = [
    { feature: 'Price', free: '$0', pro: proBilling === 'monthly' ? '$19/mo' : '$15/mo', enterprise: 'Custom' },
    { feature: 'Active Workflows', free: '5', pro: '50', enterprise: 'Unlimited' },
    { feature: 'Automation Runs', free: '1,000', pro: '10,000', enterprise: 'Custom' },
    { feature: 'Integrations', free: 'Basic', pro: '300+', enterprise: 'Custom' },
    { feature: 'AI Actions', free: '100', pro: '2,000', enterprise: 'Custom' },
    { feature: 'Multi-step Workflows', free: true, pro: true, enterprise: true },
    { feature: 'Webhooks', free: true, pro: true, enterprise: true },
    { feature: 'API Access', free: false, pro: true, enterprise: 'Advanced' },
    { feature: 'Analytics', free: 'Basic', pro: 'Advanced', enterprise: 'Advanced' },
    { feature: 'Users', free: '1', pro: '5', enterprise: 'Unlimited' },
    { feature: 'Execution History', free: '7 days', pro: '90 days', enterprise: 'Custom' },
    { feature: 'AI Automation', free: 'Basic', pro: 'Advanced', enterprise: 'Advanced' },
    { feature: 'Custom Integrations', free: false, pro: false, enterprise: true },
    { feature: 'SSO / SAML', free: false, pro: false, enterprise: true },
    { feature: 'Dedicated Support', free: false, pro: false, enterprise: true },
  ];

  return (
    <section id="pricing" className="w-full bg-white select-text scroll-mt-28">
      
      {/* Pattern Bar Divider Row */}
      <div className="max-w-[1340px] mx-auto py-1">
        <div className="h-9 w-full border-y border-neutral-200 bg-[repeating-linear-gradient(45deg,#0000001c_0,#0000001c_1.2px,transparent_0,transparent_5px)]" />
      </div>

      {/* 1340px Enclosed Section Box Container */}
      <div className="max-w-[1340px] mx-auto border-x border-y border-neutral-200 bg-white relative">
        
        {/* Top-Left Flush Connected Pill Badge */}
        <div className="inline-flex items-center text-xs shadow-2xs -mt-[1px] -ml-[1px]">
          <span className="px-3.5 py-1.5 bg-neutral-200/90 font-bold text-neutral-900 border-r border-b border-neutral-200">
            06
          </span>
          <span className="px-4 py-1.5 bg-white font-medium text-neutral-800 border-r border-b border-neutral-200">
            Pricing
          </span>
        </div>

        {/* Section Content */}
        <div className="pt-10 pb-16 px-6 sm:px-10">
          
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal sm:font-medium tracking-tight text-neutral-900 text-center leading-[1.2] max-w-2xl mx-auto mb-14">
            Start free. Scale when you ship.
          </h2>

          {/* 3 Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`border border-neutral-200 bg-white shadow-2xs flex flex-col justify-between overflow-hidden ${
                  plan.popular ? 'ring-1 ring-black' : ''
                }`}
              >
                
                {/* Card Top Header */}
                {plan.popular ? (
                  /* Pro Card Solid Black Top Block with Embedded Monthly/Yearly Toggle */
                  <div className="bg-black text-white p-6 sm:p-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">{plan.name}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white text-black px-2.5 py-0.5 rounded-2xs">
                        MOST POPULAR
                      </span>
                    </div>
                    
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white tracking-tight">{plan.price}</span>
                      <span className="text-xs font-normal text-neutral-400">{plan.period}</span>
                    </div>

                    <p className="text-xs font-normal text-neutral-300 leading-relaxed">{plan.description}</p>

                    {/* Embedded Monthly / Yearly Toggle Inside Pro Box */}
                    <div className="pt-2">
                      <div className="inline-flex items-center p-1 bg-neutral-900 border border-neutral-800 rounded-xs w-full justify-between">
                        <button
                          onClick={() => setProBilling('monthly')}
                          className={`flex-1 py-1.5 text-[11px] font-medium transition-all rounded-2xs ${
                            proBilling === 'monthly'
                              ? 'bg-white text-black font-semibold'
                              : 'text-neutral-400 hover:text-white'
                          }`}
                        >
                          Monthly
                        </button>
                        <button
                          onClick={() => setProBilling('yearly')}
                          className={`flex-1 py-1.5 text-[11px] font-medium transition-all rounded-2xs flex items-center justify-center gap-1 ${
                            proBilling === 'yearly'
                              ? 'bg-white text-black font-semibold'
                              : 'text-neutral-400 hover:text-white'
                          }`}
                        >
                          <span>Yearly</span>
                          <span className="text-[9px] font-bold bg-emerald-500 text-white px-1 py-0.2 rounded-2xs">
                            -20%
                          </span>
                        </button>
                      </div>
                    </div>

                  </div>
                ) : (
                  /* Starter / Enterprise Card White Top Block */
                  <div className="p-6 sm:p-7 space-y-3.5 border-b border-neutral-100">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{plan.name}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-neutral-900 tracking-tight">{plan.price}</span>
                      {plan.period && <span className="text-xs font-normal text-neutral-500">{plan.period}</span>}
                    </div>
                    <p className="text-xs font-normal text-neutral-500 leading-relaxed">{plan.description}</p>
                  </div>
                )}

                {/* Features List Block */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <p className="text-xs font-medium text-neutral-900">What&apos;s included:</p>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-xs text-neutral-700 font-normal">
                        <div className="w-4 h-4 rounded-full border border-neutral-300 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-neutral-900 stroke-[2.5]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card CTA Button with Signature RollingText */}
                  <div className="pt-2">
                    <Link
                      href="/request-automation"
                      className={`group relative overflow-hidden w-full py-3 inline-flex items-center justify-center text-xs sm:text-sm font-medium transition-colors border shadow-2xs ${
                        plan.popular
                          ? 'bg-black text-white hover:bg-neutral-800 border-black'
                          : 'bg-white text-neutral-900 border-neutral-200 hover:bg-neutral-50'
                      }`}
                    >
                      <RollingText text={plan.buttonText} />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Collapsible Feature Comparison Matrix */}
          <div className="max-w-5xl mx-auto border border-neutral-200 bg-white shadow-2xs">
            
            {/* Matrix Header Bar */}
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="w-full p-5 bg-neutral-50 hover:bg-neutral-100/70 transition-colors flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-neutral-900">Compare All Plan Features</span>
                <span className="text-xs text-neutral-500 font-normal">(15 comparison parameters)</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-900">
                <span>{showComparison ? 'Collapse Table' : 'Expand Comparison Table'}</span>
                {showComparison ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {/* Table rendered ONLY when user explicitly expands */}
            {showComparison && (
              <div className="overflow-x-auto border-t border-neutral-200">
                <table className="w-full text-left text-xs">
                  
                  {/* Table Header Row */}
                  <thead>
                    <tr className="border-b border-neutral-200 bg-white">
                      <th className="p-4 font-semibold text-neutral-900 w-2/5">Feature</th>
                      <th className="p-4 font-semibold text-neutral-900 w-1/5 text-center">Starter</th>
                      <th className="p-4 font-semibold text-neutral-900 w-1/5 text-center bg-neutral-50/60">
                        Pro {proBilling === 'monthly' ? '($19/mo)' : '($15/mo)'}
                      </th>
                      <th className="p-4 font-semibold text-neutral-900 w-1/5 text-center">Enterprise</th>
                    </tr>
                  </thead>

                  {/* Table Body Rows */}
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    {comparisonData.map((row) => (
                      <tr key={row.feature} className="hover:bg-neutral-50/50 transition-colors">
                        <td className="p-4 font-medium text-neutral-800">{row.feature}</td>
                        
                        {/* Free Column */}
                        <td className="p-4 text-center text-neutral-600 font-normal">
                          {typeof row.free === 'boolean' ? (
                            row.free ? (
                              <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                                <Check className="w-3 h-3 stroke-[2.5]" />
                              </div>
                            ) : (
                              <Minus className="w-4 h-4 text-neutral-300 mx-auto" />
                            )
                          ) : (
                            row.free
                          )}
                        </td>

                        {/* Pro Column */}
                        <td className="p-4 text-center text-neutral-900 font-medium bg-neutral-50/60">
                          {typeof row.pro === 'boolean' ? (
                            row.pro ? (
                              <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                                <Check className="w-3 h-3 stroke-[2.5]" />
                              </div>
                            ) : (
                              <Minus className="w-4 h-4 text-neutral-300 mx-auto" />
                            )
                          ) : (
                            row.pro
                          )}
                        </td>

                        {/* Enterprise Column */}
                        <td className="p-4 text-center text-neutral-900 font-medium">
                          {typeof row.enterprise === 'boolean' ? (
                            row.enterprise ? (
                              <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                                <Check className="w-3 h-3 stroke-[2.5]" />
                              </div>
                            ) : (
                              <Minus className="w-4 h-4 text-neutral-300 mx-auto" />
                            )
                          ) : (
                            row.enterprise
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
};
