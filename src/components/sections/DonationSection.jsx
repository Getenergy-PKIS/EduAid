"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";

export default function DonationSection() {
  const sectionRef = useRef(null);

  // ✅ Animate only once
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const titleVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 20 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, delay: 0.2 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, delay: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, delay: 0.4 },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#176e22",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
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
          className="text-center mb-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <motion.h2
            className="text-3xl font-bold mb-3 text-black"
            variants={titleVariants}
          >
            Ready To Take Action?
          </motion.h2>

          <motion.p
            className="text-sm text-gray-700 max-w-2xl mx-auto"
            variants={textVariants}
          >
            Take action today and change lives
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-[#f8fdf9] rounded-lg overflow-hidden shadow-sm max-w-5xl mx-auto"
          variants={contentVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
            <div className="space-y-4 pl-4">
              <h3 className="text-2xl font-semibold text-[#1F892B]">
                Make A Donation
              </h3>
              <p className="text-gray-700">
                Invest in People, Invest in their growth
              </p>
              <p className="text-gray-700">
                Invest in a stronger educational Standard
              </p>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                className="mt-6"
              >
                <Link
                  href="/donate"
                  className="inline-block bg-[#1F892B] text-white font-medium py-[18px] px-[32px] rounded-md"
                >
                  Donate Now
                </Link>
              </motion.div>
            </div>

            <div className="relative h-72 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/donation/image 29 (1).png"
                alt="Donation"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
