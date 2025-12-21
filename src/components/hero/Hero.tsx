'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui';

interface HeroProps {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  fullHeight?: boolean;
  animate?: boolean;
}

export default function Hero({
  children,
  className = '',
  backgroundImage,
  backgroundColor = 'bg-white',
  fullHeight = false,
  animate = true,
}: HeroProps) {
  const heroClasses = `
    relative
    ${backgroundImage ? 'bg-cover bg-center bg-no-repeat' : backgroundColor}
    ${fullHeight ? 'min-h-screen' : 'py-16 md:py-24'}
    ${className}
  `;

  const backgroundStyle = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};

  if (animate) {
    return (
      <motion.section
        className={heroClasses}
        style={backgroundStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Container>{children}</Container>
      </motion.section>
    );
  }

  return (
    <section className={heroClasses} style={backgroundStyle}>
      <Container>{children}</Container>
    </section>
  );
}
