import { motion } from 'framer-motion';
import { PillButton } from '@/components/ui/nav-pill-bar';
import { CardStack } from '@/components/ui/card-stack';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CardStack className="max-w-4xl mx-auto text-center shimmer">
            <div className="space-y-8 py-8">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center space-x-2 glass-surface rounded-full px-4 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Sparkles size={16} className="text-accent animate-glow" />
                <span className="text-sm text-text-secondary">Ready to start?</span>
              </motion.div>

              {/* Headline */}
              <div className="space-y-4">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold font-sora leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Let's build something
                  <br />
                  <span className="gradient-text-primary">extraordinary</span>
                </motion.h2>

                <motion.p
                  className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  From concept to launch, we'll help you create intelligent products 
                  that your users will love.
                </motion.p>
              </div>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <PillButton variant="hero" size="lg" className="group">
                  Start Your Project
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </PillButton>
                
                <PillButton variant="glass" size="lg">
                  Schedule a Call
                </PillButton>
              </motion.div>

              {/* Trust Signal */}
              <motion.div
                className="flex items-center justify-center space-x-6 pt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                viewport={{ once: true }}
              >
                <div className="text-sm text-text-muted">Avg. project delivery</div>
                <div className="glass-surface px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold gradient-text-accent">4-8 weeks</span>
                </div>
              </motion.div>
            </div>
          </CardStack>
        </motion.div>
      </div>
    </section>
  );
};