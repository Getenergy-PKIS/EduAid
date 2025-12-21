'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  animate?: boolean;
  color?: 'default' | 'primary' | 'white';
}

export default function Heading({
  children,
  level = 2,
  className = '',
  animate = false,
  color = 'default',
}: HeadingProps) {
  const colorClasses = {
    default: 'text-[#171717]',
    primary: 'text-[#4DAF4E]',
    white: 'text-white',
  };

  const sizeClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    2: 'text-3xl md:text-4xl font-bold',
    3: 'text-2xl md:text-3xl font-semibold',
    4: 'text-xl md:text-2xl font-semibold',
    5: 'text-lg md:text-xl font-medium',
    6: 'text-base md:text-lg font-medium',
  };

  const headingClasses = `
    font-['Poppins']
    ${sizeClasses[level]}
    ${colorClasses[color]}
    ${className}
  `;

  const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeadingTag className={headingClasses}>{children}</HeadingTag>
      </motion.div>
    );
  }

  return <HeadingTag className={headingClasses}>{children}</HeadingTag>;
}
