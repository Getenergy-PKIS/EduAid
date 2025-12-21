'use client';

import { ReactNode, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface HoverCard3DProps {
  children: ReactNode;
  className?: string;
  depth?: number;
  backgroundColor?: string;
  shadow?: boolean;
  border?: boolean;
  glare?: boolean;
}

export default function HoverCard3D({
  children,
  className = '',
  depth = 10,
  backgroundColor = 'white',
  shadow = true,
  border = false,
  glare = true
}: HoverCard3DProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate rotation based on mouse position relative to card center
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Normalize rotation values
    const rotateYValue = (mouseX / (rect.width / 2)) * depth;
    const rotateXValue = -(mouseY / (rect.height / 2)) * depth;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    
    // Calculate glare position
    if (glare) {
      const glareX = (mouseX / rect.width) * 100 + 50;
      const glareY = (mouseY / rect.height) * 100 + 50;
      setGlarePosition({ x: glareX, y: glareY });
    }
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${shadow ? 'shadow-lg' : ''} ${border ? 'border border-gray-200' : ''} ${className}`}
      style={{
        backgroundColor,
        transformStyle: 'preserve-3d',
        borderRadius: 'inherit',
      }}
      animate={{
        rotateX,
        rotateY,
        transition: { type: 'spring', stiffness: 300, damping: 30 }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
    >
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Glare effect */}
      {glare && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%)`,
            opacity: Math.sqrt(rotateX * rotateX + rotateY * rotateY) / depth,
          }}
        />
      )}
    </motion.div>
  );
}
