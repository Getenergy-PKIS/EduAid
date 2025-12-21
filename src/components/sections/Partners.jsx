'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';

const PartnerLogo = ({ src, alt, index }) => {
  const logoRef = useRef(null);
  const isInView = useInView(logoRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9
    },
    visible: {
      opacity: 1,
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
      ref={logoRef}
      className="flex items-center justify-center"
      variants={logoVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-sm overflow-hidden">
        <Image
          src={encodeURI(src)}
          alt={alt}
          fill
          className="object-contain p-0"
          unoptimized={true}
        />
      </div>
    </motion.div>
  );
};

export default function Partners() {
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

  const partners = [
    { src: '/images/partners/GET1 1.png', alt: 'Angaza' },
    { src: '/images/partners/PRS 1.png', alt: 'Prospect' },
    { src: '/images/partners/RON1 1.png', alt: 'AETS' },
    { src: '/images/partners/GETS 1.png', alt: 'GETS' },
    { src: '/images/partners/layer_x0020_1.png', alt: 'CVHR' },
    { src: '/images/partners/partners (6).png', alt: 'TravelBeta' },
    { src: '/images/partners/partners.png', alt: 'Mercedes' },
    { src: '/images/partners/partners (1).png', alt: 'UNESCO' },
    { src: '/images/partners/partners (2).png', alt: 'UN' },
    { src: '/images/partners/partners (3).png', alt: 'Chevron' },
    { src: '/images/partners/partners (4).png', alt: 'Pepsi' },
    { src: '/images/partners/partners (5).png', alt: 'Cisco' }
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

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.3
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
          className="mb-12 text-center"
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
            Our Partners
          </motion.h2>

          <motion.p
            className="text-sm text-gray-700 max-w-xl mx-auto"
            variants={textVariants}
          >
            We empower education development and sustainability
          </motion.p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.div
            className="max-w-md mb-8 md:mb-0 md:pr-8"
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
            <motion.h3
              className="text-xl font-semibold mb-3 text-black"
              variants={textVariants}
            >
              Partner With Us
            </motion.h3>

            <motion.p
              className="text-sm text-gray-700 mb-6"
              variants={textVariants}
            >
              EduAid-Africa collaborates with local, national, and international partners through customized MOUs to enhance the scope and impact of its projects. It engages a wide network of funders, technical partners, and implementation partners to ensure the effective delivery of educational aid.
            </motion.p>

            <motion.div
              variants={buttonVariants}
            >
              <Link
                href="/partner-with-us"
                className="inline-flex items-center justify-center text-white font-medium bg-[#1F892B] rounded-full px-8 py-3 transition-all duration-300"
              >
                Partner With Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-3 gap-4 md:gap-6 md:w-1/2">
            {/* First row */}
            <PartnerLogo src={partners[0].src} alt={partners[0].alt} index={0} />
            <PartnerLogo src={partners[1].src} alt={partners[1].alt} index={1} />
            <PartnerLogo src={partners[2].src} alt={partners[2].alt} index={2} />
            <PartnerLogo src={partners[3].src} alt={partners[3].alt} index={3} />
            <PartnerLogo src={partners[4].src} alt={partners[4].alt} index={4} />

            {/* Second row */}
            <PartnerLogo src={partners[5].src} alt={partners[5].alt} index={5} />
            <PartnerLogo src={partners[6].src} alt={partners[6].alt} index={6} />
            <PartnerLogo src={partners[7].src} alt={partners[7].alt} index={7} />
            <PartnerLogo src={partners[8].src} alt={partners[8].alt} index={8} />

            {/* Third row */}
            <PartnerLogo src={partners[9].src} alt={partners[9].alt} index={9} />
            <PartnerLogo src={partners[10].src} alt={partners[10].alt} index={10} />
            <PartnerLogo src={partners[11].src} alt={partners[11].alt} index={11} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
