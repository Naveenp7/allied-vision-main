import { motion } from 'framer-motion';
import { PillButton } from '@/components/ui/nav-pill-bar';
import { HeroCards } from './hero-cards';
import { Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-canvas" />
      <div className="absolute inset-0">
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 1,
              repeat: Infinity,
              delay: Math.random() * 1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 glass-surface rounded-full px-4 py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Sparkles size={16} className="text-accent" />
              <span className="text-sm text-text-secondary">AI-Powered Solutions</span>
            </motion.div>

            {/* Headlines */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-7xl font-bold font-sora leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="gradient-text-primary">Designing</span>
                <br />
                <span className="text-text-primary">intelligent</span>
                <br />
                <span className="gradient-text-accent">products</span>
              </motion.h1>

              <motion.p
                className="text-xl text-text-secondary max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Allied blends AI, data, and design to ship elegant, resilient software that feels effortless.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <PillButton variant="hero" size="lg" className="group py-0 pr-[150px] sm:pr-[126px] pl-[148px] sm:px-8 sm:py-4" to="/contact">
                <span className="flex items-center font-medium">
                  <div className="py-3 sm:py-0">Start a project</div>
                </span>
              </PillButton>

              <PillButton variant="glass" size="lg" to="/projects" className="pl-[151px] pr-[155px] py-3 sm:pl-[43px] sm:pr-[39px] sm:pt-[17px] sm:pb-[15px]">
                See our work
              </PillButton>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex items-center space-x-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="text-sm text-text-muted">Trusted by</div>
              <div className="flex items-center space-x-4">
                {['Innovate', 'TechCorp', 'DataFlow'].map((company) => (
                  <div key={company} className="glass-surface px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-text-secondary">{company}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Cards */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <HeroCards />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
