import { Home, Search, Users, Info, Mail } from 'lucide-react';
import { NavPillBar, PillButton } from '@/components/ui/nav-pill-bar';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', label: 'Home', icon: <Home size={18} /> },
  { href: '/projects', label: 'Projects', icon: <Search size={18} /> },
  { href: '/founders', label: 'Team', icon: <Users size={18} /> },
  { href: '/about', label: 'About', icon: <Info size={18} /> },
  { href: '/contact', label: 'Contact', icon: <Mail size={18} /> }
];

export const Header = () => {
  return (
    <>
      {/* Desktop Header */}
      <motion.header
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4 hidden md:block"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7f066aea76924dccbd4f8993575c88e3%2F9535e972ce704520a80d797aa962aedb"
              alt="Allied Logo"
              className="h-[60px] w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <NavPillBar items={navItems} />

          {/* CTA Button */}
          <PillButton variant="hero" size="md">
            Start Project
          </PillButton>
        </div>
      </motion.header>

      {/* Mobile Header - Top */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-glass-border md:hidden"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Mobile Logo */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F7f066aea76924dccbd4f8993575c88e3%2F9535e972ce704520a80d797aa962aedb"
            alt="Allied Logo"
            className="h-[40px] w-auto"
          />

          {/* Mobile CTA */}
          <PillButton variant="hero" size="sm">
            Start Project
          </PillButton>
        </div>
      </motion.header>

      {/* Mobile Navigation - Bottom */}
      <motion.div
        className="fixed left-4 right-4 z-50 md:hidden flex justify-center"
        style={{
          bottom: `calc(1rem + env(safe-area-inset-bottom))`
        }}
      >
        <NavPillBar items={navItems} />
      </motion.div>
    </>
  );
};
