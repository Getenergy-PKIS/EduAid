'use client';

import { Text } from '../ui';
import Hero from './Hero';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import Link from 'next/link';

interface StatItem {
  value: string;
  label: string;
}

interface MainHeroProps {
  welcomeText?: string;
  title: string;
  description: string;
  stats?: StatItem[];
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
}

export default function MainHero({
  welcomeText,
  title,
  description,
  stats,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage,
}: MainHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5
    });
  };

  return (
    <motion.div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero
        backgroundImage={backgroundImage}
        className="text-left relative overflow-hidden"
        fullHeight
        animate={false}
      >
        {/* Dark overlay with parallax effect */}
        <motion.div
          className="absolute inset-0 bg-black/50 z-0"
          animate={{
            x: mousePosition.x * -15,
            y: mousePosition.y * -15,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 15 }}
        />

        {/* Animated particles */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => {
            const left = ((i * 17) % 100);
            const top = ((i * 23) % 100);
            const size = 1 + ((i * 1) % 2);

            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: size,
                  height: size,
                  opacity: 0.3
                }}
                animate={{
                  y: [0, -30],
                  opacity: [0.3, 0],
                  scale: [1, 0]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            );
          })}
        </div>

        <div className="relative z-10 flex flex-col justify-center h-full pt-20 md:pt-0 md:max-w-[60%] px-4 md:px-0">
          {welcomeText && (
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="relative inline-block"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Text
                  size="lg"
                  color="white"
                  className="mb-2 relative"
                >
                  {welcomeText}
                </Text>
                <motion.div
                  className="absolute -bottom-1 left-0 h-[2px] bg-[#1F892B]"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.div>
            </motion.div>
          )}

          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {title.split(' ').map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-2">
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      className="inline-block"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + (wordIndex * 0.1) + (charIndex * 0.05),
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{
                        scale: 1.2,
                        color: "#1F892B",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Text
                size="base"
                color="white"
                className="mb-8 max-w-xl leading-relaxed"
              >
                <motion.span
                  initial={{ backgroundSize: "0% 2px" }}
                  whileHover={{ backgroundSize: "100% 2px" }}
                  style={{
                    backgroundImage: "linear-gradient(to right, rgba(31, 137, 43, 0.7), rgba(31, 137, 43, 0.7))",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0 bottom"
                  }}
                >
                  {description}
                </motion.span>
              </Text>
            </motion.div>
          </motion.div>

          {stats && stats.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-3 rounded-md"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.15)"
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + (index * 0.1) }}
                >
                  <motion.span
                    className="text-lg font-bold text-white"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: index + 1
                    }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-xs text-white">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <motion.div
              className="relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={primaryButtonLink}>
                <div className="bg-[#1F892B] text-white hover:bg-[#176F22] rounded-full py-[18px] px-[32px] font-medium text-sm transition-colors duration-200">
                  {primaryButtonText}
                </div>
              </Link>
            </motion.div>

            {secondaryButtonText && secondaryButtonLink && (
              <motion.div
                className="relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href={secondaryButtonLink}>
                  <div className="bg-white text-black border border-white hover:bg-white/90 rounded-full py-[18px] px-[32px] font-medium text-sm transition-colors duration-200 flex items-center">
                    {secondaryButtonText}
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 1.5,
                        repeatDelay: 1
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </div>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Hero>
    </motion.div>
  );
}
