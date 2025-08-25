import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' }
];

export const Footer = () => {
  return (
    <footer className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F7f066aea76924dccbd4f8993575c88e3%2F9535e972ce704520a80d797aa962aedb" 
                alt="Allied Logo" 
                className="h-6 w-auto"
              />
            </div>
            <p className="text-text-secondary">
              Building intelligent products that feel effortless.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text-primary">Services</h4>
            <div className="space-y-2">
              {['AI Integration', 'Data Engineering', 'Design Systems', 'Full-Stack Dev'].map((service) => (
                <a key={service} href="#" className="block text-text-secondary hover:text-text-primary transition-colors">
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text-primary">Company</h4>
            <div className="space-y-2">
              {['About', 'Team', 'Careers', 'Blog'].map((link) => (
                <a key={link} href="#" className="block text-text-secondary hover:text-text-primary transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text-primary">Connect</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 glass-surface rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-glass-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-sm">
            Built and Designed By <a href="https://naveen-gamma.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-text-secondary transition-colors">Naveen</a>. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-text-muted hover:text-text-primary text-sm transition-colors">Privacy</a>
            <a href="#" className="text-text-muted hover:text-text-primary text-sm transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};