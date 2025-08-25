import { Layout } from '@/components/layout/layout';
import { motion } from 'framer-motion';
import { CardStack } from '@/components/ui/card-stack';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    description: "Get in touch via email",
    contact: "allied@gmail.com",
    action: "allied@mail.com"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    description: "Speak with our team",
    contact: "+91 7012895181",
    action: "tel:+15551234567"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Us",
    description: "Our headquarters",
    contact: "Ponnani, Panekkatt Builders",
    action: "#"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Live Chat",
    description: "Chat with support",
    contact: "Available 9AM-6PM PST",
    action: "#"
  }
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            className="text-center space-y-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-sora gradient-text-primary">
              Get in Touch
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss how we can help you build 
              amazing AI-powered applications and digital experiences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <CardStack className="p-8">
                <h2 className="text-2xl font-bold font-sora text-text-primary mb-6">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Naveen" 
                        className="bg-surface border-glass-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="P" 
                        className="bg-surface border-glass-border"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="naveen@example.com" 
                      className="bg-surface border-glass-border"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input 
                      id="company" 
                      placeholder="Your Company" 
                      className="bg-surface border-glass-border"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Project Inquiry" 
                      className="bg-surface border-glass-border"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project..." 
                      rows={5}
                      className="bg-surface border-glass-border resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardStack>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-sora text-text-primary">
                  Other ways to reach us
                </h2>
                <p className="text-text-secondary">
                  Choose the method that works best for you. We're here to help and 
                  will get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <CardStack className="p-6 hover:bg-surface-elevated transition-colors cursor-pointer">
                      <a href={method.action} className="flex items-start space-x-4">
                        <div className="text-primary">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-text-primary font-sora">
                            {method.title}
                          </h3>
                          <p className="text-sm text-text-secondary mb-1">
                            {method.description}
                          </p>
                          <p className="text-primary font-medium">
                            {method.contact}
                          </p>
                        </div>
                      </a>
                    </CardStack>
                  </motion.div>
                ))}
              </div>

              {/* FAQ Section */}
              <CardStack className="p-6 mt-8">
                <h3 className="text-lg font-semibold text-text-primary font-sora mb-4">
                  Quick Questions?
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-text-primary">Response Time:</p>
                    <p className="text-text-secondary">We typically respond within 24 hours</p>
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">Project Timeline:</p>
                    <p className="text-text-secondary">Most projects range from 2-12 weeks</p>
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">Free Consultation:</p>
                    <p className="text-text-secondary">Yes, initial consultations are always free</p>
                  </div>
                </div>
              </CardStack>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
