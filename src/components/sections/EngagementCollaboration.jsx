'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, useInView, useScroll } from 'framer-motion';

const CollaborationCard = ({ title, description, imageSrc, buttonText, buttonLink, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
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
      ref={cardRef}
      className="bg-white h-full flex flex-col"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover={{
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={encodeURI(imageSrc)}
          alt={title}
          fill
          className="object-cover"
          unoptimized={true}
        />
      </div>
      <div className="pt-4 flex flex-col flex-grow">
        <h3 className="text-base font-semibold mb-1 text-black">{title}</h3>
        <p className="text-sm text-gray-700 mb-3 flex-grow">{description}</p>
        <div className="mt-auto">
          <Link
            href={buttonLink}
            className="inline-flex items-center text-sm text-[#1F892B] font-medium transition-all duration-300"
          >
            <span>{buttonText}</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{
                x: isHovered ? 3 : 0,
                transition: { duration: 0.3 }
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
        </div>
      </div>
    </motion.div>
  );
};

export default function EngagementCollaboration() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const collaborationOptions = [
    {
      title: 'Ambassador Membership',
      description: 'Enhance teachers\' skills in delivering effective education and career guidance to students.',
      imageSrc: '/images/engagement/ambassador membership.png',
      buttonText: 'Become an Ambassador',
      buttonLink: '/become-ambassador'
    },
    {
      title: 'Partner With Us',
      description: 'Enhance teachers\' skills in delivering effective education and career guidance to students.',
      imageSrc: '/images/engagement/partner with us.png',
      buttonText: 'Join as a Partner',
      buttonLink: '/become-partner'
    },
    {
      title: 'Donate to Projects',
      description: 'Enhance teachers\' skills in delivering effective education and career guidance to students.',
      imageSrc: '/images/engagement/donate.png',
      buttonText: 'Become a Donor',
      buttonLink: '/become-donor'
    },
    {
      title: 'Volunteer With Us',
      description: 'Enhance teachers\' skills in delivering effective education and career guidance to students.',
      imageSrc: '/images/engagement/volunteer.png',
      buttonText: 'Volunteer With Us',
      buttonLink: '/volunteer'
    }
  ];

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.98
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
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.2
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 bg-white"
      initial="hidden"
      animate={controls}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.h2
            className="text-3xl font-bold mb-3 text-black"
            variants={titleVariants}
          >
            Engagement and Collaboration
          </motion.h2>
          <motion.p
            className="text-sm text-gray-700 max-w-2xl mx-auto"
            variants={textVariants}
          >
            Get involved, become a member today by joining as an Ambassador, Donor, Partner or Volunteer
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collaborationOptions.slice(0, 3).map((option, index) => (
            <CollaborationCard
              key={index}
              title={option.title}
              description={option.description}
              imageSrc={option.imageSrc}
              buttonText={option.buttonText}
              buttonLink={option.buttonLink}
              index={index}
            />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 max-w-md mx-auto">
          {collaborationOptions.slice(3, 4).map((option, index) => (
            <CollaborationCard
              key={index + 3}
              title={option.title}
              description={option.description}
              imageSrc={option.imageSrc}
              buttonText={option.buttonText}
              buttonLink={option.buttonLink}
              index={index + 3}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
