import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  href: string;
  label: string;
  icon: ReactNode;
}

interface NavPillBarProps {
  items: NavItem[];
  className?: string;
}

export const NavPillBar = ({ items, className }: NavPillBarProps) => {
  const location = useLocation();

  return (
    <nav className={cn(
      
      className
    )}>
      <div className="flex items-center justify-center gap-1 md:gap-4">
        {items.map((item) => {
          const isActive = location.pathname === item.href;

          return (
            <Link
              key={item.href}
              to={item.href}
              className="relative md:flex-none"
            >
              <motion.div
                className={cn(
                  "relative flex items-center justify-center transition-all duration-300 ease-out",
                  "touch-manipulation select-none cursor-pointer",
                  "min-h-[44px] md:min-h-[48px]", // iOS recommended touch target size
                  isActive
                    ? cn(
                        "bg-black text-white rounded-3xl",
                        "px-4 py-2 md:px-4 md:py-3",
                        "min-w-[110px] md:min-w-[140px]"
                      )
                    : cn(
                        "bg-white/20 text-gray-600 rounded-full",
                        "w-12 h-12 md:w-14 md:h-14",
                        "hover:bg-white/30 hover:text-gray-800",
                        "active:bg-white/40"
                      )
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "transition-all duration-300 flex-shrink-0",
                    "text-white"
                  )}>
                    {item.icon}
                  </span>
                  {isActive && (
                    <motion.span
                      className="text-sm font-medium whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

interface PillButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'glass' | 'hero';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  to?: string;
}

export const PillButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  disabled,
  to
}: PillButtonProps) => {
  const variants = {
    primary: "pill-primary",
    secondary: "pill bg-surface text-text-primary hover:bg-surface-elevated",
    glass: "pill-glass",
    hero: "pill bg-gradient-to-r from-primary to-accent text-primary-foreground glow-primary hover:scale-105"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const btn = (
    <motion.button
      className={cn(
        "pill font-medium transition-all duration-300",
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : undefined}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {children}
    </motion.button>
  );

  return to ? <Link to={to}>{btn}</Link> : btn;
};
