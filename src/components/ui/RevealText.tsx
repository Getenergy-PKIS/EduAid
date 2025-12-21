'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function RevealText({
  text,
  className = '',
  delay = 0,
  duration = 0.05,
  once = true,

}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });

  // Split text into words and characters
  const words = text.split(' ');

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i }
    })
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };



  return (
    <motion.div
      ref={ref}
      style={{ overflow: 'hidden' }}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block whitespace-nowrap mr-1">
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              variants={child}
            >
              {char}
            </motion.span>
          ))}
          {index !== words.length - 1 && (
            <motion.span className="inline-block" variants={child}>
              &nbsp;
            </motion.span>
          )}
        </span>
      ))}
    </motion.div>
  );
}
