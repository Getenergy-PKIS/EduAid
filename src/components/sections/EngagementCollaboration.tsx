'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';


interface CollaborationCardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  buttonLink: string;
  index: number;
}

const CollaborationCard = ({ title, description, imageSrc, buttonText, buttonLink, index }: CollaborationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col"
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
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        y: -8,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="mt-auto">
          <Link
            href={buttonLink}
            prefetch={true}
            className={`inline-flex items-center text-sm font-medium text-[#1F892B] hover:text-[#176F22] transition-colors duration-200`}
          >
            {buttonText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function EngagementCollaboration() {
  const collaborationOptions = [
    {
      title: 'Ambassador Membership',
      description: 'Enhance teachers\' skills in delivering effective education and career guidance to students.',
      imageSrc: '/images/engagement/ambassador.jpg',
      buttonText: 'Become and Ambassador',
      buttonLink: '/become-ambassador'
    },
    {
      title: 'Partner With Us',
      description: 'Enhance teachers\' skills in delivering effective education and career guidance to students.',
      imageSrc: '/images/engagement/partner.jpg',
      buttonText: 'Join as a Partner',
      buttonLink: '/become-partner'
    },
    {
      title: 'Donate to Projects',
      description: 'Enhance teachers\' skills in delivering effective education and career guidance to students.',
      imageSrc: '/images/engagement/donate.jpg',
      buttonText: 'Become a Donor',
      buttonLink: '/become-donor'
    },
    {
      title: 'Volunteer with Us',
      description: 'Enhance teachers\' skills in delivering effective education and career guidance to students.',
      imageSrc: '/images/engagement/volunteer.jpg',
      buttonText: 'Volunteer With Us',
      buttonLink: '/volunteer'
    }
  ];

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Engagement and Collaboration
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get involved, become a member today by joining as an Ambassador, Donor, Partner or Volunteer
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborationOptions.slice(0, 3).map((option, index) => (
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
                  delay: 0.3 + index * 0.1
                }
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <CollaborationCard
                title={option.title}
                description={option.description}
                imageSrc={option.imageSrc}
                buttonText={option.buttonText}
                buttonLink={option.buttonLink}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-md mx-auto">
          {collaborationOptions.slice(3, 4).map((option, index) => (
            <motion.div
              key={index + 3}
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
                  delay: 0.6
                }
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <CollaborationCard
                title={option.title}
                description={option.description}
                imageSrc={option.imageSrc}
                buttonText={option.buttonText}
                buttonLink={option.buttonLink}
                index={index + 3}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
