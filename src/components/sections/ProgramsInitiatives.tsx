'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProgramCardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  buttonLink: string;
  index: number;
}

const ProgramCard = ({ title, description, imageSrc, buttonText, buttonLink, index }: ProgramCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden h-full border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
          ease: "easeOut"
        }
      }}
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{
        y: -10,
        boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 15px -5px rgba(0, 0, 0, 0.05)",
        transition: { duration: 0.3, type: "spring" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-[180px] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />

        {/* Simple overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          animate={{
            opacity: isHovered ? 0.2 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Shine effect on hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        )}
      </div>

      <motion.div
        className="p-4"
        animate={{
          y: isHovered ? -5 : 0,
          transition: { duration: 0.3 }
        }}
      >
        <motion.h3
          className="text-lg font-bold mb-2 text-gray-900 relative inline-block"
          animate={{
            x: isHovered ? 5 : 0,
            transition: { duration: 0.3 }
          }}
        >
          {title}
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-[#1F892B]"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.h3>

        <motion.p
          className="text-gray-600 text-sm mb-3"
          animate={{
            opacity: isHovered ? 1 : 0.9,
            transition: { duration: 0.3 }
          }}
        >
          {description}
        </motion.p>

        <Link href={buttonLink}>
          <div className="flex justify-end">
            <motion.div
              className="inline-flex items-center gap-1 text-white text-sm font-medium bg-[#1F892B] px-3 py-1 rounded-full"
              whileHover={{
                x: 5,
                backgroundColor: "#176F22",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {buttonText}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={isHovered ? { x: [0, 4, 0] } : {}}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                  repeatDelay: 0.5
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default function ProgramsInitiatives() {
  const programs = [
    {
      title: 'Capacity Building and Training Programs',
      description: 'We organize regular workshops, conferences, and seminars for teachers, educational administrators, and students. These events provide opportunities for knowledge sharing, networking, and professional development.',
      imageSrc: '/images/programs/capacity-building.jpg',
      buttonText: 'Donate',
      buttonLink: '/programs/capacity-building'
    },
    {
      title: 'CSR Project Management',
      description: 'We work with corporate partners to design and implement educational projects. EduAid Africa handles every aspect of the project, from inception and planning to execution and impact reporting.',
      imageSrc: '/images/programs/csr-management.jpg',
      buttonText: 'Donate',
      buttonLink: '/programs/csr-management'
    },
    {
      title: 'Educational Expos and Conferences',
      description: 'EduAid Africa organizes regional and continental conferences and expos to highlight African educational achievements, foster international collaborations, and provide platforms for sharing innovations in the education sector.',
      imageSrc: '/images/programs/educational-expos.jpg',
      buttonText: 'Donate',
      buttonLink: '/programs/educational-expos'
    },
    {
      title: 'Scholarship Portals',
      description: 'We have developed platforms where students can access and apply for scholarships funded by corporate partners, governments, and individual donors. Supporting primary, secondary, vocational, and tertiary education, with a focus on creating opportunities for students across all regions of Africa.',
      imageSrc: '/images/programs/scholarship-portals.jpg',
      buttonText: 'Apply Scholarship',
      buttonLink: '/programs/scholarship-portals'
    },
    {
      title: 'Fundraising and Crowdfunding for Educational Projects',
      description: 'Individuals and institutions can raise funds for schools, infrastructure, or special educational programs through our platform, which connects them with global donors and supporters.',
      imageSrc: '/images/programs/fundraising.jpg',
      buttonText: 'Upload a project for funding',
      buttonLink: '/programs/fundraising'
    },
    {
      title: 'Examination Portal',
      description: 'EduAid Africa offers a comprehensive system that allows students to apply for scholarships based on their qualifications. This transparent performance-based system ensures that opportunities are available to deserving students regardless of background.',
      imageSrc: '/images/programs/examination-portal.jpg',
      buttonText: 'Apply now',
      buttonLink: '/programs/examination-portal'
    }
  ];

  return (
    <motion.section
      className="py-12 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      {/* Multiple loading reveal overlays for more dynamic effect */}
      <motion.div
        className="absolute inset-0 bg-[#1F892B]/10 z-10"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "right" }}
        viewport={{ once: false, amount: 0.1 }}
      />

      {/* Second reveal layer with different timing */}
      <motion.div
        className="absolute inset-0 bg-[#1F892B]/20 z-10"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        style={{ transformOrigin: "right" }}
        viewport={{ once: false, amount: 0.1 }}
      />

      {/* Subtle animated background */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: 'linear-gradient(to right, #1F892B 1px, transparent 1px), linear-gradient(to bottom, #1F892B 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Animated floating elements */}
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#1F892B]/10 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4 relative z-0">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="overflow-hidden inline-block">
            <motion.h2
              className="text-2xl font-medium text-gray-800 mb-1 relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                type: "spring",
                stiffness: 50
              }}
            >
              Programs and Initiatives
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-[#1F892B]"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.h2>
          </motion.div>

          <motion.div className="overflow-hidden">
            <motion.p
              className="text-gray-600 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                type: "spring",
                stiffness: 50
              }}
            >
              EduAid Africa implements a wide range of programs to achieve our objectives
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.95
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  delay: 0.5 + index * 0.1
                }
              }}
              viewport={{ once: false, margin: "-50px" }}
            >
              <ProgramCard
                title={program.title}
                description={program.description}
                imageSrc={program.imageSrc}
                buttonText={program.buttonText}
                buttonLink={program.buttonLink}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
