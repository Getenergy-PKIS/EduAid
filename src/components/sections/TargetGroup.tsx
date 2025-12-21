"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface TargetGroupCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const TargetGroupCard = ({
  title,
  description,
  icon,
  index,
}: TargetGroupCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-[#1F892B] rounded-lg p-6 text-white h-full cursor-pointer"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        y: -8,
        boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background elements */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -mr-10 -mt-10"
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.15 : 0.05,
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="flex flex-col h-full relative z-10">
        <motion.div
          className="mb-4 text-white"
          animate={{
            scale: isHovered ? 1.1 : 1,
            y: isHovered ? -5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>

        <motion.h3
          className="text-lg font-bold mb-2 relative inline-block"
          animate={{
            x: isHovered ? 5 : 0,
            transition: { duration: 0.3 },
          }}
        >
          {title}
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-white/40"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.h3>

        <motion.p
          className="text-white text-sm"
          animate={{
            opacity: isHovered ? 1 : 0.9,
            transition: { duration: 0.3 },
          }}
        >
          {description}
        </motion.p>

        {/* Animated arrow on hover */}
        <motion.div
          className="mt-4 flex items-center text-xs font-medium text-white/80"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 0.9 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
        >
          Learn more
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={isHovered ? { x: [0, 3, 0] } : {}}
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
              d="M9 5l7 7-7 7"
            />
          </motion.svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function TargetGroup() {
  const targetGroups = [
    {
      title: "Students",
      description:
        "Offering scholarships, digital learning resources, and opportunities to participate in educational programs that expand their potential.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "Teachers and Educational Institutions",
      description:
        "Providing capacity-building services, training, and infrastructure development to ensure educators can deliver quality education.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Corporate Partners and Donors",
      description:
        "Collaborating with businesses to leverage CSR programs focused on education, ensuring transparency, accountability, and impact.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "International and Local Communities",
      description:
        "Engaging communities across Africa and globally to support educational improvement through conferences, exchanges, and collaborative initiatives.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <motion.section
      className="py-12 px-5 md:px-10 bg-gray-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle, #1F892B 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Animated dots */}
      {[...Array(10)].map((_, i) => {
        const left = (i * 19) % 100;
        const top = (i * 13) % 100;
        const size = 2 + ((i * 2) % 3);

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#1F892B] pointer-events-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              opacity: 0.1,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        );
      })}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-5 relative inline-block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Target Group
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-[#1F892B]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.h2>
          <motion.p
            className="text-gray-600 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            EduAid Africa&apos;s programs and initiatives are designed to impact
            the following target groups
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {targetGroups.map((group, index) => (
            <div key={index}>
              <TargetGroupCard
                title={group.title}
                description={group.description}
                icon={group.icon}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
