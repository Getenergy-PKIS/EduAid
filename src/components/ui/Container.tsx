'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  animate?: boolean;
  padding?: boolean;
}

export default function Container({
  children,
  className = '',
  maxWidth = 'xl',
  animate = false,
  padding = true,
}: ContainerProps) {
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    'full': 'max-w-full',
  };

  const containerClasses = `
    mx-auto
    ${maxWidthClasses[maxWidth]}
    ${padding ? 'px-4 sm:px-6 lg:px-[72px]' : ''}
    ${className}
  `;

  if (animate) {
    return (
      <motion.div
        className={containerClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={containerClasses}>{children}</div>;
}
