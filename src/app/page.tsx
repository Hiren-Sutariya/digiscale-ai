import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { TrustedBy } from '@/components/sections/TrustedBy';
import { ProblemStatement } from '@/components/sections/ProblemStatement';
import { PlatformLifecycle } from '@/components/sections/PlatformLifecycle';
import { UseCasesSection } from '@/components/sections/UseCasesSection';
import { ShowcaseAutomations } from '@/components/sections/ShowcaseAutomations';
import { IntegrationsSection } from '@/components/sections/IntegrationsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <TrustedBy />
      <ProblemStatement />
      <PlatformLifecycle />
      <UseCasesSection />
      <ShowcaseAutomations />
      <IntegrationsSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
