'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  pattern?: 'dots' | 'grid' | 'waves' | 'circles';
  color?: string;
  secondaryColor?: string;
  density?: number;
  speed?: number;
  className?: string;
}

export default function AnimatedBackground({
  pattern = 'dots',
  color = 'rgba(77, 175, 78, 0.1)',
  secondaryColor = 'rgba(77, 175, 78, 0.05)',
  density = 20,
  speed = 10,
  className = ''
}: AnimatedBackgroundProps) {
  const [elements, setElements] = useState<React.ReactNode[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Update dimensions on resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const newElements: React.ReactNode[] = [];

    if (pattern === 'dots') {
      // Create dots pattern
      const count = Math.floor((dimensions.width * dimensions.height) / (10000 / density));

      for (let i = 0; i < count; i++) {
        const size = Math.random() * 6 + 2;
        const x = Math.random() * dimensions.width;
        const y = Math.random() * dimensions.height;
        const duration = (Math.random() * 20 + 10) * (20 / speed);

        newElements.push(
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              x,
              y,
              backgroundColor: Math.random() > 0.5 ? color : secondaryColor,
            }}
            animate={{
              y: [y, y - 20, y],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * duration,
            }}
          />
        );
      }
    } else if (pattern === 'grid') {
      // Create grid pattern
      const cellSize = 100 / density;
      const cols = Math.ceil(dimensions.width / cellSize);
      const rows = Math.ceil(dimensions.height / cellSize);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * cellSize;
          const y = j * cellSize;
          const delay = (i + j) * 0.05;
          const duration = (Math.random() * 4 + 2) * (10 / speed);

          newElements.push(
            <motion.div
              key={`${i}-${j}`}
              className="absolute"
              style={{
                width: 1,
                height: 1,
                x,
                y,
                backgroundColor: (i + j) % 2 === 0 ? color : secondaryColor,
              }}
              animate={{
                width: [1, cellSize * 0.8, 1],
                height: [1, cellSize * 0.8, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
            />
          );
        }
      }
    } else if (pattern === 'waves') {
      // Create waves pattern
      const waveCount = Math.floor(density / 2);

      for (let i = 0; i < waveCount; i++) {
        const y = (dimensions.height / waveCount) * i + Math.random() * 50;
        const width = dimensions.width + 100;
        const height = Math.random() * 50 + 20;
        const duration = (Math.random() * 10 + 15) * (20 / speed);

        newElements.push(
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width,
              height,
              x: -50,
              y,
              backgroundColor: i % 2 === 0 ? color : secondaryColor,
              opacity: 0.3,
            }}
            animate={{
              scaleY: [1, 1.2, 1],
              x: [-50, -50 + Math.random() * 100, -50],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        );
      }
    } else if (pattern === 'circles') {
      // Create expanding circles pattern
      const circleCount = Math.floor(density / 2);

      for (let i = 0; i < circleCount; i++) {
        const x = Math.random() * dimensions.width;
        const y = Math.random() * dimensions.height;
        const duration = (Math.random() * 8 + 4) * (10 / speed);

        newElements.push(
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 10,
              height: 10,
              x,
              y,
              backgroundColor: 'transparent',
              border: `1px solid ${i % 2 === 0 ? color : secondaryColor}`,
            }}
            animate={{
              width: [10, 100],
              height: [10, 100],
              x: [x, x - 45],
              y: [y, y - 45],
              opacity: [1, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.3,
            }}
          />
        );
      }
    }

    setElements(newElements);
  }, [pattern, color, secondaryColor, density, speed, dimensions]);

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements}
    </div>
  );
}
