import { Layout } from '@/components/layout/layout';
import { motion } from 'framer-motion';
import { CardStack } from '@/components/ui/card-stack';
import { Badge } from '@/components/ui/badge';
import { Zap, Target, Users, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Innovation First",
    description: "We push the boundaries of what's possible with cutting-edge AI and modern web technologies."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Quality Focused",
    description: "Every project is crafted with attention to detail, performance, and user experience in mind."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Collaborative",
    description: "We work closely with our clients to understand their vision and bring it to life."
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Future-Minded",
    description: "Building solutions that scale and adapt to tomorrow's technological landscape."
  }
];

const milestones = [
  { year: "2023", event: "Founded Allied Vision", description: "Started with a vision to democratize AI applications" },
  { year: "2023", event: "First AI App Launch", description: "Deployed our first AI-powered application for a Fortune 500 client" },
  { year: "2024", event: "Design System Release", description: "Open-sourced our comprehensive design system framework" },
  { year: "2024", event: "Global Expansion", description: "Extended our reach to serve clients across three continents" }
];

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            className="text-center space-y-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-sora gradient-text-primary">
              About Allied Vision
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              We're a forward-thinking team dedicated to building the next generation of AI-powered applications, 
              design systems, and digital experiences that empower businesses to thrive in the digital age.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CardStack className="max-w-4xl mx-auto p-12 text-center">
              <h2 className="text-3xl font-bold font-sora text-text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                To bridge the gap between cutting-edge AI technology and practical business solutions, 
                creating applications that are not only powerful but also intuitive, accessible, and transformative. 
                We believe in the power of technology to solve real-world problems and enhance human potential.
              </p>
            </CardStack>
          </motion.div>

          {/* Values */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold font-sora text-text-primary text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <CardStack className="p-8 text-center space-y-4 h-full">
                    <div className="text-primary mx-auto">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary font-sora">
                      {value.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardStack>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold font-sora text-text-primary text-center mb-12">Our Journey</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={`${milestone.year}-${index}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <CardStack className="p-6 flex items-start space-x-6">
                    <Badge variant="outline" className="text-primary border-primary">
                      {milestone.year}
                    </Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-text-primary font-sora mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-text-secondary">
                        {milestone.description}
                      </p>
                    </div>
                  </CardStack>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
