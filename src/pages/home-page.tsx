import { ComprehensiveServicesSection } from '@/components/home/comprehensive-services-section';
import { HeroSection } from '@/components/home/hero-section';
import { MentorTeaserSection } from '@/components/home/mentor-teaser-section';
import { MetricsSection } from '@/components/home/metrics-section';
import { OfferShowcaseSection } from '@/components/home/offer-showcase-section';
import { PartnersSection } from '@/components/home/partners-section';
import { ProductAccordionSection } from '@/components/home/product-accordion-section';
import { StrengthsSection } from '@/components/home/strengths-section';
import { SuccessCasesSection } from '@/components/home/success-cases-section';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductAccordionSection />
      <ComprehensiveServicesSection />
      <StrengthsSection />
      <MentorTeaserSection />
      <MetricsSection />
      <SuccessCasesSection />
      <OfferShowcaseSection />
      <PartnersSection />
    </>
  );
}
