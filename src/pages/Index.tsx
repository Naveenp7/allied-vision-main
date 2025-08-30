import { Layout } from '@/components/layout/layout';
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { ProjectsSection } from '@/components/sections/projects';
import { CTASection } from '@/components/sections/cta-section';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <ProjectsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
