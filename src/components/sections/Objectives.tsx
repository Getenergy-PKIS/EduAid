'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ObjectiveCardProps {
  title: string;
  description: string;
  imageSrc: string;
  index: number;
}

const ObjectiveCard = ({ title, description, imageSrc, index }: ObjectiveCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg cursor-pointer"
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
        y: -8,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-[200px] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />

        {/* Dark overlay */}
        <motion.div
          className="absolute inset-0 bg-black/40"
          animate={{
            opacity: isHovered ? 0.5 : 0.4,
            transition: { duration: 0.3 }
          }}
        />

        {/* Simple shine effect on hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        )}

        {/* Content */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 text-white"
          animate={{
            y: isHovered ? -5 : 0,
            transition: { duration: 0.3 }
          }}
        >
          <motion.h3
            className="text-base font-bold mb-1 relative inline-block"
            animate={{
              x: isHovered ? 5 : 0,
              transition: { duration: 0.3 }
            }}
          >
            {title}
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-white"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? '100%' : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.h3>
          <motion.p
            className="text-xs"
            animate={{
              opacity: isHovered ? 1 : 0.9,
              transition: { duration: 0.3 }
            }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Objectives() {
  const objectives = [
    {
      title: 'Improve Access to Education',
      description: 'We aim to bridge the educational gap by creating pathways to quality, digital, and affordable education programs throughout Africa.',
      imageSrc: '/images/objectives/improve-access.jpg'
    },
    {
      title: 'Enhance Educational Infrastructure',
      description: 'Through partnerships, we support the development of school facilities, libraries, e-libraries, and other critical infrastructure necessary for quality education.',
      imageSrc: '/images/objectives/enhance-infrastructure.jpg'
    },
    {
      title: 'Support Capacity Building for Teachers',
      description: 'We provide ongoing professional development for educators through workshops, seminars, and comprehensive training programs.',
      imageSrc: '/images/objectives/capacity-building.jpg'
    },
    {
      title: 'Foster International Collaboration',
      description: 'EduAid Africa brings together global and local partners to support African education through conferences, exchanges, and partnerships.',
      imageSrc: '/images/objectives/international-collaboration.jpg'
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
        className="absolute inset-0 bg-[#1F892B]/30 z-10"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        viewport={{ once: false, amount: 0.1 }}
      />

      {/* Second reveal layer with different timing */}
      <motion.div
        className="absolute inset-0 bg-[#1F892B]/50 z-10"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        style={{ transformOrigin: "left" }}
        viewport={{ once: false, amount: 0.1 }}
      />

      {/* Third reveal layer with different timing */}
      <motion.div
        className="absolute inset-0 bg-[#1F892B]/70 z-10"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{ transformOrigin: "left" }}
        viewport={{ once: false, amount: 0.1 }}
      />

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
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#1F892B]/10 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4 relative z-0">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="overflow-hidden inline-block">
            <motion.h2
              className="text-2xl font-medium text-gray-800 mb-1 text-left relative inline-block"
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
              Objectives
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
              className="text-gray-600 text-sm font-normal"
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
              EduAid Africa has four key objectives that drive our programs and initiatives
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
                rotateY: -15,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateY: 0,
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
              <ObjectiveCard
                title={objective.title}
                description={objective.description}
                imageSrc={objective.imageSrc}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
