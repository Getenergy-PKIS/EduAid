'use client';

import { motion } from 'framer-motion';
import { Button, Text, RevealText, ParallaxElement, HoverCard3D } from '../ui';
import Hero from './Hero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface CallToActionHeroProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
}

export default function CallToActionHero({
  title,
  description,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage,
}: CallToActionHeroProps) {
  const [ctaRef, isCtaVisible] = useScrollAnimation<HTMLDivElement>();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Hero
      backgroundImage={backgroundImage}
      backgroundColor="bg-[#F5FBF4]"
      className="text-center py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      {!backgroundImage && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#4DAF4E]/5 -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#4DAF4E]/10 translate-x-1/3 translate-y-1/3"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </>
      )}

      <motion.div
        ref={ctaRef}
        className="max-w-3xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isCtaVisible ? "visible" : "hidden"}
      >
        <ParallaxElement direction="up" speed={0.3} className="mb-6">
          <motion.div variants={itemVariants} className="relative inline-block">
            <RevealText
              text={title}
              className={`text-3xl md:text-4xl font-bold mb-4 ${backgroundImage ? 'text-white' : 'text-[#4DAF4E]'}`}
              delay={0.1}
              duration={0.04}
            />
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 rounded-full"
              initial={{ width: 0 }}
              animate={isCtaVisible ? { width: '50%' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ backgroundColor: backgroundImage ? 'white' : '#4DAF4E' }}
            />
          </motion.div>
        </ParallaxElement>

        <ParallaxElement direction="up" speed={0.5}>
          <motion.div variants={itemVariants}>
            <Text
              size="lg"
              color={backgroundImage ? 'white' : 'gray'}
              className="mb-8 max-w-2xl mx-auto"
            >
              {description}
            </Text>
          </motion.div>
        </ParallaxElement>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <HoverCard3D
            className="rounded-full"
            depth={10}
            glare={true}
            shadow={false}
            backgroundColor="transparent"
          >
            <Button
              href={buttonLink}
              size="lg"
              className="shadow-lg shadow-[#4DAF4E]/20"
              animate={false}
            >
              {buttonText}
            </Button>
          </HoverCard3D>

          {secondaryButtonText && secondaryButtonLink && (
            <HoverCard3D
              className="rounded-full"
              depth={10}
              glare={true}
              shadow={false}
              backgroundColor="transparent"
            >
              <Button
                href={secondaryButtonLink}
                variant={backgroundImage ? 'secondary' : 'outline'}
                size="lg"
                className="shadow-md"
                animate={false}
              >
                {secondaryButtonText}
              </Button>
            </HoverCard3D>
          )}
        </motion.div>
      </motion.div>
    </Hero>
  );
}
