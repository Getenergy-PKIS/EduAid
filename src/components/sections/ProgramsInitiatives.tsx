"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface ProgramCardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  buttonLink: string;
  index: number;
  isInView: boolean;
}

const ProgramCard = ({
  title,
  description,
  imageSrc,
  buttonText,
  buttonLink,
  index,
  isInView,
}: ProgramCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden h-full border border-gray-200 shadow-sm"
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
        y: -10,
        boxShadow:
          "0 15px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 15px -5px rgba(0, 0, 0, 0.05)",
        transition: { duration: 0.3, type: "spring" },
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
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />

        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          animate={{ opacity: isHovered ? 0.2 : 0.3 }}
          transition={{ duration: 0.3 }}
        />

        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        )}
      </div>

      <motion.div
        className="p-4"
        animate={{ y: isHovered ? -5 : 0, transition: { duration: 0.3 } }}
      >
        <motion.h3
          className="text-lg font-bold mb-2 text-gray-900 relative inline-block"
          animate={{ x: isHovered ? 5 : 0, transition: { duration: 0.3 } }}
        >
          {title}
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-[#1F892B]"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.h3>

        <motion.p
          className="text-gray-600 text-sm mb-3"
          animate={{
            opacity: isHovered ? 1 : 0.9,
            transition: { duration: 0.3 },
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
                transition: { duration: 0.2 },
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
                  repeatDelay: 0.5,
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default function ProgramsInitiatives() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const programs = [
    {
      title: "Capacity Building and Training Programs",
      description:
        "We organize regular workshops, conferences, and seminars for teachers, educational administrators, and students. These events provide opportunities for knowledge sharing, networking, and professional development.",
      imageSrc: "/images/programs/capacity-building.jpg",
      buttonText: "Donate",
      buttonLink: "/programs/capacity-building",
    },
    {
      title: "CSR Project Management",
      description:
        "We work with corporate partners to design and implement educational projects. EduAid Africa handles every aspect of the project, from inception and planning to execution and impact reporting.",
      imageSrc: "/images/programs/csr-management.jpg",
      buttonText: "Donate",
      buttonLink: "/programs/csr-management",
    },
    {
      title: "Educational Expos and Conferences",
      description:
        "EduAid Africa organizes regional and continental conferences and expos to highlight African educational achievements, foster international collaborations, and provide platforms for sharing innovations in the education sector.",
      imageSrc: "/images/programs/educational-expos.jpg",
      buttonText: "Donate",
      buttonLink: "/programs/educational-expos",
    },
    {
      title: "Scholarship Portals",
      description:
        "We have developed platforms where students can access and apply for scholarships funded by corporate partners, governments, and individual donors. Supporting primary, secondary, vocational, and tertiary education, with a focus on creating opportunities for students across all regions of Africa.",
      imageSrc: "/images/programs/scholarship-portals.jpg",
      buttonText: "Apply Scholarship",
      buttonLink: "/programs/scholarship-portals",
    },
    {
      title: "Fundraising and Crowdfunding for Educational Projects",
      description:
        "Individuals and institutions can raise funds for schools, infrastructure, or special educational programs through our platform, which connects them with global donors and supporters.",
      imageSrc: "/images/programs/fundraising.jpg",
      buttonText: "Upload a project for funding",
      buttonLink: "/programs/fundraising",
    },
    {
      title: "Examination Portal",
      description:
        "EduAid Africa offers a comprehensive system that allows students to apply for scholarships based on their qualifications. This transparent performance-based system ensures that opportunities are available to deserving students regardless of background.",
      imageSrc: "/images/programs/examination-portal.jpg",
      buttonText: "Apply now",
      buttonLink: "/programs/examination-portal",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="py-12 px-5 md:px-10 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1, transition: { duration: 0.8 } } : {}}
    >
      {/* Background layers, floating elements, etc., remain the same */}

      <div className="container mx-auto px-4 relative z-0">
        <div className="mb-8">
          <h2
            className="text-2xl font-bold text-gray-800 mb-5 relative inline-block"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out 0.2s",
            }}
          >
            Programs and Initiatives
            <span
              className="absolute -bottom-1 left-0 h-0.5 bg-[#1F892B]"
              style={{
                width: isInView ? "100%" : 0,
                transition: "width 0.8s ease 0.3s",
              }}
            />
          </h2>
          <p
            className="text-gray-600 text-sm"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out 0.4s",
            }}
          >
            EduAid Africa implements a wide range of programs to achieve our
            objectives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              imageSrc={program.imageSrc}
              buttonText={program.buttonText}
              buttonLink={program.buttonLink}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
