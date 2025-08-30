import { motion } from 'framer-motion';
import { CardStack, MetricCard, ProgressRing } from '@/components/ui/card-stack';
import { TrendingUp, DollarSign, Users, Activity } from 'lucide-react';

export const HeroCards = () => {
  const chartData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 78 },
    { month: 'Mar', value: 85 },
    { month: 'Apr', value: 92 },
    { month: 'May', value: 95 }
  ];

  return (
    <div className="relative w-full max-w-lg">
      {/* Background gradient orb */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl scale-150 animate-pulse-glow" />
      
      {/* Main Card Stack */}
      <div className="relative grid grid-cols-2 gap-4 p-4">
        {/* Revenue Card - Large */}
        <motion.div
          className="col-span-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <MetricCard
            title="Monthly Revenue"
            value="47.2K"
            change="+12.5% from last month"
            trend="up"
            className="animate-float"
          />
        </motion.div>

        {/* Chart Card */}
        <motion.div
          initial={{ y: 20, opacity: 0, x: -20 }}
          animate={{ y: 0, opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <CardStack className="h-32 animate-float" style={{ animationDelay: '1s' }}>
            <div className="h-full flex flex-col justify-between">
              <div className="flex items-center space-x-2">
                <TrendingUp size={16} className="text-accent" />
                <span className="text-xs text-text-muted">Growth</span>
              </div>
              <div className="flex items-end space-x-1 h-16">
                {chartData.map((item, index) => (
                  <motion.div
                    key={item.month}
                    className="bg-gradient-to-t from-primary to-accent rounded-sm flex-1"
                    initial={{ height: 0 }}
                    animate={{ height: `${item.value}%` }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                  />
                ))}
              </div>
            </div>
          </CardStack>
        </motion.div>

        {/* Progress Ring Card */}
        <motion.div
          initial={{ y: 20, opacity: 0, x: 20 }}
          animate={{ y: 0, opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <CardStack className="h-32 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
            <div className="text-center space-y-2">
              <ProgressRing percentage={100} size={60} label="100%" />
              <p className="text-xs text-text-muted">Completion</p>
            </div>
          </CardStack>
        </motion.div>

        {/* Stats Cards Row */}
        <motion.div
          className="col-span-2 grid grid-cols-2 gap-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <CardStack className="p-4 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <Users size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-lg font-bold font-sora">10+</p>
                <p className="text-xs text-text-muted">Clients</p>
              </div>
            </div>
          </CardStack>

          <CardStack className="p-4 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                <Activity size={16} className="text-accent" />
              </div>
              <div>
                <p className="text-lg font-bold font-sora">98.5%</p>
                <p className="text-xs text-text-muted">Uptime</p>
              </div>
            </div>
          </CardStack>
        </motion.div>

        {/* Settings Strip */}
        <motion.div
          className="col-span-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <CardStack className="p-4 animate-float" style={{ animationDelay: '3s' }}>
            <div className="space-y-3">
              <p className="text-xs text-text-muted font-medium">Quick Settings</p>
              <div className="flex space-x-2">
                {['AI', 'Data', 'API'].map((item, index) => (
                  <motion.button
                    key={item}
                    className={`pill text-xs px-3 py-1.5 ${
                      index === 0 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-surface text-text-secondary hover:bg-surface-elevated'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </div>
          </CardStack>
        </motion.div>
      </div>
    </div>
  );
};