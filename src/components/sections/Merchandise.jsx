'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useAnimation } from 'framer-motion';

const MerchandiseItem = ({ title, price, imageSrc, index }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: index * 0.1
      }
    }
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: index * 0.1 + 0.2
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      ref={itemRef}
      className="flex flex-col"
      variants={itemVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="relative h-52 mb-4 overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain transition-transform duration-300 hover:scale-105"
          unoptimized={true}
        />
      </div>
      <h3 className="text-base font-medium mb-1 text-black">{title}</h3>
      <p className="text-lg font-semibold mb-3 text-black">${price}</p>
      <motion.div
        variants={buttonVariants}
        whileHover="hover"
        className="mt-auto"
      >
        <Link
          href={`/merchandise/${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="inline-flex items-center text-sm text-[#1F892B] font-medium"
        >
          Get
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
      </motion.div>
    </motion.div>
  );
};

export default function Merchandise() {
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

  const merchandiseItems = [
    {
      title: 'Water Bottles',
      price: '70',
      imageSrc: '/images/merchandise/water-bottles.png'
    },
    {
      title: 'Bags',
      price: '50',
      imageSrc: '/images/merchandise/bags.png'
    },
    {
      title: 'Face Cap',
      price: '78',
      imageSrc: '/images/merchandise/face-cap.png'
    },
    {
      title: 'Shopping Bags',
      price: '52',
      imageSrc: '/images/merchandise/shopping bags.png'
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

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.4
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#176e22",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
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
          className="text-center mb-10"
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
            Get Our Merchandise
          </motion.h2>
          <motion.p
            className="text-sm text-gray-700 max-w-2xl mx-auto"
            variants={textVariants}
          >
            Donate by getting our merchandise
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {merchandiseItems.map((item, index) => (
            <MerchandiseItem
              key={index}
              title={item.title}
              price={item.price}
              imageSrc={item.imageSrc}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="text-center"
          variants={buttonVariants}
          whileHover="hover"
        >
          <Link
            href="/merchandise"
            className="inline-block bg-[#1F892B] text-white font-medium py-[18px] px-[32px] rounded-md"
          >
            Donate With Merchandise
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
