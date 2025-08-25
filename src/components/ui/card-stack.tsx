import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardStackProps {
  children: ReactNode;
  className?: string;
  depth?: number;
  hoverEffect?: boolean;
  style?: React.CSSProperties;
}

export const CardStack = ({ 
  children, 
  className, 
  depth = 3, 
  hoverEffect = true,
  style 
}: CardStackProps) => {
  return (
    <motion.div 
      className={cn("card-stack relative", className)}
      style={style}
      whileHover={hoverEffect ? { scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Background layers for depth */}
      {Array.from({ length: depth - 1 }).map((_, i) => (
        <div
          key={i}
          className="card-layer absolute inset-0"
          style={{
            transform: `translateZ(-${(i + 1) * 4}px) translateY(${(i + 1) * 2}px)`,
            opacity: 0.7 - (i * 0.15),
            borderRadius: "1.5rem",
            background: "var(--glass-gradient)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
            backdropFilter: "blur(8px)"
          }}
        />
      ))}
      
      {/* Main content card */}
      <div className="relative glass-elevated rounded-3xl p-6 z-10 border border-white/10">
        {children}
      </div>
    </motion.div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

export const MetricCard = ({ title, value, change, trend = 'neutral', className }: MetricCardProps) => {
  const trendColors = {
    up: 'text-accent',
    down: 'text-destructive',
    neutral: 'text-text-muted'
  };

  return (
    <CardStack className={cn("min-w-[200px]", className)}>
      <div className="space-y-2">
        <p className="text-text-muted text-sm font-medium">{title}</p>
        <p className="text-3xl font-bold font-sora gradient-text-primary">{value}</p>
        {change && (
          <p className={cn("text-sm font-medium", trendColors[trend])}>
            {change}
          </p>
        )}
      </div>
    </CardStack>
  );
};

interface ProgressRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  label?: string;
}

export const ProgressRing = ({ 
  percentage, 
  size = 80, 
  strokeWidth = 6, 
  className,
  label 
}: ProgressRingProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={cn("relative", className)}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--surface))"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#progress-gradient)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
      </svg>
      {label && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-semibold text-text-primary">{label}</span>
        </div>
      )}
    </div>
  );
};