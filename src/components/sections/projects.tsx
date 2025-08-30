import { motion } from 'framer-motion';
import { CardStack } from '@/components/ui/card-stack';

export const ProjectsSection = () => {
  return (
    <section className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-sora gradient-text-primary">
            Our Projects
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Explore our portfolio of AI-powered applications, design systems, and digital experiences.
          </p>
          <CardStack className="max-w-md mx-auto p-8 mt-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl">🚧</span>
              </div>
              <h3 className="text-xl font-semibold text-text-primary">Coming Soon</h3>
              <p className="text-text-secondary">
                We're crafting something beautiful. Check back soon to explore our project showcase.
              </p>
            </div>
          </CardStack>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
