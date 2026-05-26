import { useEffect } from 'react';
import BenefitsSection from '@/components/sections/benefits.section';
import FAQSection from '@/components/sections/faq.section';
import HeroSection from '@/components/sections/hero.section';
import LocationsSection from '@/components/sections/locations.section';
import PriceTable from '@/components/sections/price.table';
import StepsSection from '@/components/sections/steps.section';
import { applyHomeSeo } from '@/utils/seo';

const HomePage = () => {
  useEffect(() => {
    applyHomeSeo();
  }, []);

  return (
    <>
      <HeroSection />
      <PriceTable />
      <BenefitsSection />
      <LocationsSection />
      <StepsSection />
      <FAQSection />
    </>
  );
};

export default HomePage;
