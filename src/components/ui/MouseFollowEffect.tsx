'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MouseFollowEffectProps {
  children?: React.ReactNode;
  size?: number;
  color?: string;
  blur?: number;
  opacity?: number;
  delay?: number;
}

export default function MouseFollowEffect({
  children,
  size = 40,
  color = 'rgba(77, 175, 78, 0.3)',
  blur = 20,
  opacity = 0.5,
  delay = 0.1
}: MouseFollowEffectProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <motion.div
      className="pointer-events-none fixed z-50"
      animate={{
        x: mousePosition.x - size / 2,
        y: mousePosition.y - size / 2,
        opacity: isVisible ? opacity : 0,
      }}
      transition={{
        type: 'spring',
        mass: 0.5,
        damping: 30,
        stiffness: 200,
        delay
      }}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color,
        filter: `blur(${blur}px)`,
      }}
    >
      {children}
    </motion.div>
  );
}
