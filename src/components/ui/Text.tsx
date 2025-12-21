'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TextProps {
  children: ReactNode;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  className?: string;
  animate?: boolean;
  color?: 'default' | 'primary' | 'white' | 'gray';
}

export default function Text({
  children,
  size = 'base',
  weight = 'normal',
  className = '',
  animate = false,
  color = 'default',
}: TextProps) {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const colorClasses = {
    default: 'text-[#171717]',
    primary: 'text-[#4DAF4E]',
    white: 'text-white',
    gray: 'text-[#525151]',
  };

  const textClasses = `
    font-['Poppins']
    ${sizeClasses[size]}
    ${weightClasses[weight]}
    ${colorClasses[color]}
    ${className}
  `;

  if (animate) {
    return (
      <motion.p
        className={textClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.p>
    );
  }

  return <p className={textClasses}>{children}</p>;
}
