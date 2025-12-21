'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Define the variants for the button
const variants = {
  primary: 'bg-[#1F892B] text-white hover:bg-[#176F22] transition-all duration-300',
  secondary: 'bg-white text-black border border-white hover:bg-white/90 transition-all duration-300',
  outline: 'bg-transparent border border-[#1F892B] text-[#1F892B] hover:bg-[#F5FBF4] transition-all duration-300',
  ghost: 'bg-transparent text-[#1F892B] hover:bg-[#F5FBF4] transition-all duration-300',
};

// Define the sizes for the button
const sizes = {
  sm: 'py-2 px-4 text-xs rounded-full',
  md: 'py-[18px] px-[32px] text-sm rounded-full',
  lg: 'py-4 px-8 text-base rounded-full',
  xl: 'py-5 px-10 text-lg rounded-full',
  custom: 'py-[18px] px-[32px] text-sm rounded-full',
};

// Define the shape options
const shapes = {
  rounded: 'rounded-full',
  square: 'rounded-none',
  default: '', // Uses the size's default rounding
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  shape?: keyof typeof shapes;
  href?: string;
  fullWidth?: boolean;
  animate?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  shape = 'default',
  href,
  fullWidth = false,
  animate = true,
  className = '',
  ...props
}: ButtonProps) {
  // Combine all the classes
  const buttonClasses = `
    font-medium transition-colors duration-200
    ${variants[variant]}
    ${sizes[size]}
    ${shape !== 'default' ? shapes[shape] : ''}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  // If href is provided, render as a Link
  if (href) {
    return animate ? (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link href={href} className={buttonClasses}>
          {children}
        </Link>
      </motion.div>
    ) : (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  // Otherwise, render as a button
  return animate ? (
    <motion.button
      className={buttonClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  ) : (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
