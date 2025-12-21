'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxElementProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  offset?: number;
}

export default function ParallaxElement({
  children,
  speed = 0.5,
  direction = 'up',
  className = '',
  offset = 300
}: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Calculate transform values based on direction
  const isVertical = direction === 'up' || direction === 'down';
  const value = isVertical
    ? (direction === 'up' ? -offset : offset)
    : (direction === 'left' ? -offset : offset);

  const transformProperty = useTransform(
    scrollYProgress,
    [0, 1],
    [value * speed, 0]
  );

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        [direction === 'up' || direction === 'down' ? 'y' : 'x']: transformProperty
      }}
    >
      {children}
    </motion.div>
  );
}
