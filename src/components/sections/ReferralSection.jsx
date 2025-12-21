"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";

export default function ReferralSection() {
  const sectionRef = useRef(null);

  // 👇 KEY FIX: once: true
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 15, delay: 0.3 },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 px-8  bg-[#f5f9f5]"
      initial="hidden"
      animate={controls}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <motion.div className="space-y-4">
            <motion.h2
              className="text-3xl font-bold text-[#1F892B] leading-tight"
              variants={titleVariants}
            >
              Refer People;
              <br />
              Earn AfriGold Points
            </motion.h2>

            <motion.div className="space-y-2" variants={textVariants}>
              <p className="text-gray-700">
                Earn 2 AfriGold Point for every referral you make.
              </p>
              <p className="text-gray-700">
                Join the programs and get a chance to earn.
              </p>
            </motion.div>

            <motion.div
              className="mt-6"
              variants={buttonVariants}
              whileHover="hover"
            >
              <Link
                href="/refer"
                className="inline-block bg-[#1F892B] text-white font-medium py-[18px] px-[32px] rounded-md"
              >
                Refer Somebody
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative h-64 md:h-auto"
            variants={imageVariants}
          >
            <Image
              src="/images/referral/vector.png"
              alt="AfriGold Points"
              width={400}
              height={400}
              className="object-contain w-full h-full"
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
