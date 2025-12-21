'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import * as React from 'react';
import { motion, useInView, useAnimation, useTransform, useScroll } from 'framer-motion';

interface GoalItemProps {
  number: number;
  title: string;
  link: string;
  index: number;
}

const GoalItem = ({ number, title, link, index }: GoalItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls, scrollDirection]);

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: scrollDirection === 'down' ? 30 : -30,
      scale: 0.95,
      x: index % 2 === 0 ? -20 : 20
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: index * 0.1,
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      ref={itemRef}
      className="relative"
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={link} className="block">
        <motion.div
          className="bg-[#0A3A0A]/30 backdrop-blur-sm hover:bg-[#0A3A0A]/40 p-6 rounded-lg transition-all duration-300 border border-[#1F892B]/20 h-full flex items-center"
          whileHover={{
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            borderColor: "rgba(31, 137, 43, 0.4)"
          }}
          style={{
            boxShadow: isInView ? "0 5px 15px rgba(0, 0, 0, 0.1)" : "none",
            transition: "box-shadow 0.3s ease, border-color 0.3s ease"
          }}
        >
          <motion.div
            className="mr-4 text-2xl font-bold text-white opacity-70"
            animate={{
              scale: isHovered ? 1.2 : 1,
              transition: { duration: 0.3 }
            }}
          >
            {number}.
          </motion.div>
          <motion.div
            className="flex-grow text-white"
            animate={{
              x: isHovered ? 5 : 0,
              transition: { duration: 0.3 }
            }}
          >
            {title}
          </motion.div>
          <motion.div
            animate={{
              x: isHovered ? 5 : 0,
              scale: isHovered ? 1.2 : 1,
              transition: { duration: 0.2 }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default function SmartGoals() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Use framer-motion's useScroll hook for smoother scroll tracking
  const { scrollY } = useScroll();

  // Detect scroll direction
  useEffect(() => {
    const unsubscribe = scrollY.onChange(current => {
      if (current > lastScrollY) {
        setScrollDirection('down');
      } else if (current < lastScrollY) {
        setScrollDirection('up');
      }
      setLastScrollY(current);
    });

    return () => unsubscribe();
  }, [scrollY, lastScrollY]);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls, scrollDirection]);

  const goals = [
    {
      number: 1,
      title: "Expanding Access to Education",
      link: "/goals/expanding-access"
    },
    {
      number: 2,
      title: "Strengthening Vocational & Digital Learning",
      link: "/goals/vocational-digital-learning"
    },
    {
      number: 3,
      title: "Supporting Teachers' Training & Capacity Building",
      link: "/goals/teacher-training"
    },
    {
      number: 4,
      title: "Infrastructure & School Renovation Projects",
      link: "/goals/infrastructure-renovation"
    },
    {
      number: 5,
      title: "Scholarship-Based Examination & Career Guidance",
      link: "/goals/scholarship-career-guidance"
    },
    {
      number: 6,
      title: "Diaspora & CSR Partnerships for Sustainable Funding",
      link: "/goals/partnerships-funding"
    },
    {
      number: 7,
      title: "Supporting Special Needs & Inclusive Education",
      link: "/goals/special-needs-inclusive"
    },
    {
      number: 8,
      title: "My Career, My Life: Internship, Employment, & Entrepreneurship Support",
      link: "/goals/career-entrepreneurship"
    },
    {
      number: 9,
      title: "Free & Sponsored Internet Access for E-Learning & Training",
      link: "/goals/internet-elearning"
    },
    {
      number: 10,
      title: "Scaling EduAid-Africa into 50 African Countries",
      link: "/goals/scaling-africa"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: scrollDirection === 'down' ? -50 : 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20
      }
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: scrollDirection === 'down' ? 30 : -30,
      x: scrollDirection === 'down' ? -20 : 20
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.2
      }
    }
  };

  // Parallax effect based on scroll position
  const parallaxY = useTransform(
    scrollY,
    [0, 1000],
    [0, -150]
  );

  return (
    <motion.div
      ref={sectionRef}
      className="py-16 bg-[#0F2A0F] relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("/images/pattern-dots.svg")',
          backgroundSize: '50px'
        }}
      />

      {/* Animated floating elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#1F892B]/5 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ y: parallaxY }}
      >
        <motion.div className="overflow-hidden">
          <motion.h2
            className="text-4xl font-bold text-center mb-6 text-white"
            variants={titleVariants}
            animate={controls}
            initial="hidden"
          >
            EduAid Africa 2032 SMART Goals
          </motion.h2>
        </motion.div>

        <motion.p
          className="text-center max-w-4xl mx-auto mb-12 text-white/80"
          variants={textVariants}
          animate={controls}
          initial="hidden"
        >
          EduAid Africa, an Initiative of the Santos Creations Educational Foundation (SCEF), is dedicated to achieving impactful and sustainable
          educational transformation across Africa by 2032. The SMART Goals outlined below provide a clear roadmap for driving innovation,
          inclusivity, and accessibility in education through scholarships, capacity-building programs, infrastructure support, and digital learning.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate={controls}
        >
          {goals.map((goal, index) => (
            <GoalItem
              key={goal.number}
              number={goal.number}
              title={goal.title}
              link={goal.link}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
