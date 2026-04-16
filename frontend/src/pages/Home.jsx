import useDocumentTitle from '@/hooks/use-document-title';
import HeroSection from '@/components/home/HeroSection';
import LogoCarousel from '@/components/home/LogoCarousel';
import StatsSection from '@/components/home/StatsSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import CaseStudyPreview from '@/components/home/CaseStudyPreview';
import ProcessSection from '@/components/home/ProcessSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  useDocumentTitle('AI-Powered Growth Marketing Agency');
  return (
    <div data-testid="home-page">
      <HeroSection />
      <LogoCarousel />
      <StatsSection />
      <ServicesOverview />
      <CaseStudyPreview />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
