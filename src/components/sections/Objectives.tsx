"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface ObjectiveCardProps {
  title: string;
  description: string;
  imageSrc: string;
  index: number;
  isInView: boolean;
}

const ObjectiveCard = ({
  title,
  description,
  imageSrc,
  index,
  isInView,
}: ObjectiveCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: index * 0.1 },
            }
          : {}
      }
      whileHover={{
        y: -8,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3, ease: "easeOut" },
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
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />

        {/* Dark overlay */}
        <motion.div
          className="absolute inset-0 bg-black/40"
          animate={{
            opacity: isHovered ? 0.5 : 0.4,
            transition: { duration: 0.3 },
          }}
        />

        {/* Shine effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        )}

        {/* Content */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 text-white"
          animate={{ y: isHovered ? -5 : 0, transition: { duration: 0.3 } }}
        >
          <motion.h3
            className="text-base font-bold mb-1 relative inline-block"
            animate={{ x: isHovered ? 5 : 0, transition: { duration: 0.3 } }}
          >
            {title}
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-white"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? "100%" : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.h3>
          <motion.p
            className="text-xs"
            animate={{
              opacity: isHovered ? 1 : 0.9,
              transition: { duration: 0.3 },
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const objectives = [
    {
      title: "Improve Access to Education",
      description:
        "We aim to bridge the educational gap by creating pathways to quality, digital, and affordable education programs throughout Africa.",
      imageSrc: "/images/objectives/improve-access.jpg",
    },
    {
      title: "Enhance Educational Infrastructure",
      description:
        "Through partnerships, we support the development of school facilities, libraries, e-libraries, and other critical infrastructure necessary for quality education.",
      imageSrc: "/images/objectives/enhance-infrastructure.jpg",
    },
    {
      title: "Support Capacity Building for Teachers",
      description:
        "We provide ongoing professional development for educators through workshops, seminars, and comprehensive training programs.",
      imageSrc: "/images/objectives/capacity-building.jpg",
    },
    {
      title: "Foster International Collaboration",
      description:
        "EduAid Africa brings together global and local partners to support African education through conferences, exchanges, and partnerships.",
      imageSrc: "/images/objectives/international-collaboration.jpg",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="py-12 px-5 md:px-10 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1, transition: { duration: 0.8 } } : {}}
    >
      {/* Background layers and floating animations can remain unchanged */}
      <motion.div className="container mx-auto px-4 relative z-0">
        <div className="mb-6">
          <h2
            className="text-2xl font-bold text-gray-800 mb-5 text-left relative inline-block"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out 0.2s",
            }}
          >
            Objectives
            <span
              className="absolute -bottom-1 left-0 h-0.5 bg-[#1F892B]"
              style={{
                width: isInView ? "100%" : 0,
                transition: "width 0.8s ease 0.3s",
              }}
            />
          </h2>
          <p
            className="text-gray-600 text-sm font-normal"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out 0.4s",
            }}
          >
            EduAid Africa has four key objectives that drive our programs and
            initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {objectives.map((objective, index) => (
            <ObjectiveCard
              key={index}
              title={objective.title}
              description={objective.description}
              imageSrc={objective.imageSrc}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
