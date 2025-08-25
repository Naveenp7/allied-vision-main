import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from '@/components/layout/layout';
import { PillButton } from '@/components/ui/nav-pill-bar';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center pt-24">
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <motion.div
            className="w-24 h-24 glass-surface rounded-3xl flex items-center justify-center mx-auto"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          >
            <AlertTriangle size={40} className="text-accent" />
          </motion.div>

          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold font-sora gradient-text-primary">404</h1>
            <h2 className="text-2xl font-semibold text-text-primary">Page not found</h2>
            <p className="text-text-secondary max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* CTA */}
          <PillButton variant="hero" size="lg" onClick={() => window.location.href = '/'}>
            Return Home
          </PillButton>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NotFound;
