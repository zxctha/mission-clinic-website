import * as React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'yellow';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-clinic-blue text-white hover:bg-clinic-blue/90 shadow-md',
      secondary: 'bg-clinic-blue-light text-clinic-blue hover:bg-clinic-blue-light/80',
      outline: 'border-2 border-clinic-blue text-clinic-blue hover:bg-clinic-blue hover:text-white',
      ghost: 'text-clinic-blue hover:bg-clinic-blue/10',
      yellow: 'bg-clinic-yellow text-slate-900 hover:bg-clinic-yellow-dark shadow-md font-medium',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-2.5 text-base',
      lg: 'px-8 py-4 text-lg font-semibold',
      icon: 'p-2',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-clinic-blue focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
