import BenefitsSection from '@/components/sections/benefits.section';
import FAQSection from '@/components/sections/faq.section';
import HeroSection from '@/components/sections/hero.section';
import LocationsSection from '@/components/sections/locations.section';
import PriceTable from '@/components/sections/price.table';
import StepsSection from '@/components/sections/steps.section';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PriceTable />
      <BenefitsSection />
      <LocationsSection />
      <StepsSection />
      <FAQSection />
      <div
        id="contact"
        style={{
          minHeight: '40vh',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: '#1a3a6b', fontWeight: 700 }}>Liên Hệ (Task 09)</span>
      </div>
    </>
  );
};

export default HomePage;
