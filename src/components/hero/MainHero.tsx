"use client";

import { Text } from "../ui";
import Hero from "./Hero";
import { motion } from "framer-motion";
import Link from "next/link";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

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
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <Hero
        backgroundImage={backgroundImage}
        className="relative overflow-hidden"
        fullHeight
        animate={false}
      >
        {/* Static overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10 flex flex-col justify-center h-full pt-10 md:pt-10 md:max-w-[60%] px-4 md:px-0">
          {welcomeText && (
            <motion.div variants={itemVariants}>
              <Text size="lg" color="white" className="mb-2">
                {welcomeText}
              </Text>
              <div className="h-[2px] w-12 bg-[#1F892B] mb-6" />
            </motion.div>
          )}

          <motion.h1
            variants={itemVariants}
            className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-8 max-w-xl text-white leading-relaxed"
          >
            {description}
          </motion.p>

          {stats && stats.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 mb-8"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-md"
                >
                  <span className="text-lg font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/80">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          )}

          <motion.div variants={itemVariants} className="flex flex-row gap-4">
            <Link href={primaryButtonLink}>
              <div className="bg-[#1F892B] text-white hover:bg-[#176F22] rounded-full py-[18px] px-[18px] font-medium text-sm transition-colors">
                {primaryButtonText}
              </div>
            </Link>

            {secondaryButtonText && secondaryButtonLink && (
              <Link href={secondaryButtonLink}>
                <div className="bg-white text-black border border-white hover:bg-white/90 rounded-full py-[18px] px-[32px] font-medium text-sm transition-colors">
                  {secondaryButtonText}
                </div>
              </Link>
            )}
          </motion.div>
        </div>
      </Hero>
    </motion.div>
  );
}
