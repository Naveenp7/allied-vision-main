import { motion } from 'framer-motion';
import { CardStack } from '@/components/ui/card-stack';
import { PillButton } from '@/components/ui/nav-pill-bar';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Panekkatt Money Tracker',
    description: 'AI-powered personal finance app with smart categorization and insights.',
    image: '/api/placeholder/400/240',
    tags: ['React', 'Firebase', 'AI', 'PWA'],
    metrics: { users: '1.2K', score: 94 },
    links: { demo: '#', github: '#' }
  },
  {
    title: 'DataFlow Analytics',
    description: 'Real-time analytics dashboard for e-commerce businesses.',
    image: '/api/placeholder/400/240',
    tags: ['Next.js', 'D3.js', 'Node.js'],
    metrics: { users: '800', score: 98 },
    links: { demo: '#', github: '#' }
  },
  {
    title: 'Allied Design System',
    description: 'Component library and design tokens for modern web apps.',
    image: '/api/placeholder/400/240',
    tags: ['React', 'Storybook', 'Tailwind'],
    metrics: { users: '2.4K', score: 96 },
    links: { demo: '#', github: '#' }
  }
];

export const ProjectsShowcase = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sora text-text-primary">
            Featured <span className="gradient-text-accent">Projects</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A showcase of our recent work, from AI-powered applications to design systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
            >
              <CardStack className="group h-full">
                <div className="space-y-4">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-2xl bg-surface h-48">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-glass rounded-2xl flex items-center justify-center backdrop-blur-md">
                        <span className="text-2xl font-bold gradient-text-primary">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold font-sora text-text-primary group-hover:gradient-text-primary transition-all">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-surface rounded-full text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics & Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex space-x-4 text-xs text-text-muted">
                      <span>{project.metrics.users} users</span>
                      <span>{project.metrics.score}/100 score</span>
                    </div>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.links.demo}
                        className="w-8 h-8 glass-surface rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary"
                        whileHover={{ scale: 1.1, y: -1 }}
                      >
                        <ExternalLink size={14} />
                      </motion.a>
                      <motion.a
                        href={project.links.github}
                        className="w-8 h-8 glass-surface rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary"
                        whileHover={{ scale: 1.1, y: -1 }}
                      >
                        <Github size={14} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </CardStack>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <PillButton variant="glass" size="lg">
            View All Projects
          </PillButton>
        </motion.div>
      </div>
    </section>
  );
};