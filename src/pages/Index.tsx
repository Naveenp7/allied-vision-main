import { Layout } from '@/components/layout/layout';
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import Projects from '@/pages/Projects';
import { CTASection } from '@/components/sections/cta-section';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Projects />
      <CTASection />
    </Layout>
  );
};

export default Index;
