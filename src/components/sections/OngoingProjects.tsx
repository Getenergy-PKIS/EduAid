'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  location: string;
  description: string;
  imageSrc: string;
  index: number;
}

const ProjectCard = ({ title, location, description, imageSrc, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateY: -5,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: index * 0.1,
        duration: 0.6
      }
    }
  };



  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 0.2,
      transition: { duration: 0.3 }
    }
  };

  const shineVariants = {
    hidden: { x: '-100%', opacity: 0 },
    hover: {
      x: '100%',
      opacity: 0.3,
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-[#F5FBF4] rounded-lg overflow-hidden shadow-md h-full flex flex-col"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover={{
        y: -12,
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        {/* Static Image */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3}
        />

        {/* Overlay effect on hover */}
        <motion.div
          className="absolute inset-0 bg-black"
          variants={overlayVariants}
          animate={isHovered ? 'hover' : 'hidden'}
        />

        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
          variants={shineVariants}
          animate={isHovered ? 'hover' : 'hidden'}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <motion.h3
          className="text-lg font-semibold mb-1 text-black"
          animate={{
            color: isHovered ? '#1F892B' : '#000000',
            transition: { duration: 0.3 }
          }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm text-black mb-2 opacity-80"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.1 * index + 0.2, duration: 0.4 }
          }}
        >
          {location}
        </motion.p>
        <motion.p
          className="text-sm text-black mb-4 flex-grow opacity-70"
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.1 * index + 0.3, duration: 0.4 }
          }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default function OngoingProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleItems = 3;
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const nextSlide = () => {
    if (currentIndex < projects.length - maxVisibleItems) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Loop back to the beginning
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Loop to the end
      setCurrentIndex(projects.length - maxVisibleItems);
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const projects = [
    {
      title: 'Nigeria School Donation & Lagos/Ogun Projects',
      location: 'Lagos/Ogun',
      description: 'To enhance educational infrastructure and resources in Nigeria, focusing on Lagos and Ogun states.',
      imageSrc: '/images/projects/nigeria-school.jpg'
    },
    {
      title: 'Monthly Training & Online Webinar',
      location: 'Online',
      description: 'To provide continuous professional development opportunities for educators, students and stakeholders.',
      imageSrc: '/images/projects/training-webinar.jpg'
    },
    {
      title: 'Africa Education Expo & CSR Forum 2025',
      location: 'October 2025',
      description: 'To foster collaboration among educational stakeholders and promote Corporate Social Responsibility (CSR).',
      imageSrc: '/images/projects/africaeducation.png'
    },
    {
      title: 'School Renovation Project',
      location: 'East Africa',
      description: 'Renovating and modernizing school facilities across East African countries to improve learning environments.',
      imageSrc: '/images/projects/nigeria school.jpg'
    },
    {
      title: 'Teacher Training Program',
      location: 'West Africa',
      description: 'Comprehensive training program for teachers to enhance their teaching methodologies and digital skills.',
      imageSrc: '/images/projects/monthly training.jpg'
    }
  ];

  // Ensure we don't try to display more items than we have
  const visibleProjects = projects.slice(
    currentIndex,
    Math.min(currentIndex + maxVisibleItems, projects.length)
  );

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.4
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: 0.6
      }
    }
  };

  const arrowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.3
      }
    },
    hover: {
      scale: 1.2,
      backgroundColor: "#f8f8f8",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 bg-white relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Subtle animated background */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, #1F892B 1px, transparent 1px)',
          backgroundSize: '40px 40px',
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          variants={titleVariants}
        >
          <motion.div className="overflow-hidden inline-block">
            <motion.h2
              className="text-3xl font-bold mb-4 text-black relative inline-block"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20
              }}
            >
              Join Our 2025 Ongoing Projects
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-[#1F892B]"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.h2>
          </motion.div>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all duration-200"
            aria-label="Previous slide"
            variants={arrowVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: [0, -3, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </motion.svg>
          </motion.button>

          <motion.div
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden"
            variants={containerVariants}
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index + currentIndex}
                initial={{
                  opacity: 0,
                  x: 50 * (index + 1),
                  scale: 0.95
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 50,
                    damping: 15,
                    delay: 0.1 * index
                  }
                }}
                exit={{
                  opacity: 0,
                  x: -50,
                  transition: { duration: 0.3 }
                }}
              >
                <ProjectCard
                  title={project.title}
                  location={project.location}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all duration-200"
            aria-label="Next slide"
            variants={arrowVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: [0, 3, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.button>
        </div>

        <motion.div
          className="mt-10 text-center"
          variants={buttonVariants}
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#1F892B] text-white font-medium rounded-md"
          >
            See All Our Projects
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
