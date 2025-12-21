"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const GoalItem = ({ number, title, link, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true }); // trigger once
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true); // mark as animated
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: index * 0.1,
      }}
    >
      <Link href={link} className="block">
        <div className="bg-[#0A3A0A]/30 backdrop-blur-sm p-6 rounded-lg border border-[#1F892B]/20 h-full flex items-center">
          <div className="mr-4 text-2xl font-bold text-white opacity-70">
            {number}.
          </div>
          <div className="flex-grow text-white">{title}</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function SmartGoals() {
  const goals = [
    {
      number: 1,
      title: "Expanding Access to Education",
      link: "/goals/expanding-access",
    },
    {
      number: 2,
      title: "Strengthening Vocational & Digital Learning",
      link: "/goals/vocational-digital-learning",
    },
    {
      number: 3,
      title: "Supporting Teachers' Training & Capacity Building",
      link: "/goals/teacher-training",
    },
    {
      number: 4,
      title: "Infrastructure & School Renovation Projects",
      link: "/goals/infrastructure-renovation",
    },
    {
      number: 5,
      title: "Scholarship-Based Examination & Career Guidance",
      link: "/goals/scholarship-career-guidance",
    },
    {
      number: 6,
      title: "Diaspora & CSR Partnerships for Sustainable Funding",
      link: "/goals/partnerships-funding",
    },
    {
      number: 7,
      title: "Supporting Special Needs & Inclusive Education",
      link: "/goals/special-needs-inclusive",
    },
    {
      number: 8,
      title:
        "My Career, My Life: Internship, Employment, & Entrepreneurship Support",
      link: "/goals/career-entrepreneurship",
    },
    {
      number: 9,
      title: "Free & Sponsored Internet Access for E-Learning & Training",
      link: "/goals/internet-elearning",
    },
    {
      number: 10,
      title: "Scaling EduAid-Africa into 50 African Countries",
      link: "/goals/scaling-africa",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#0F2A0F] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("/images/pattern-dots.svg")',
          backgroundSize: "50px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 pt-20">
          <h2 className="text-5xl font-bold text-center text-white tracking-tight">
            EduAid Africa 2032 SMART Goals
          </h2>
          <div className="w-24 h-1 bg-[#1F892B] mx-auto mt-6 rounded-full"></div>
        </div>

        <p className="text-center max-w-4xl mx-auto mb-12 text-white/80">
          EduAid Africa, an Initiative of the Santos Creations Educational
          Foundation (SCEF), is dedicated to achieving impactful and sustainable
          educational transformation across Africa by 2032. The SMART Goals
          outlined below provide a clear roadmap for driving innovation,
          inclusivity, and accessibility in education through scholarships,
          capacity-building programs, infrastructure support, and digital
          learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {goals.map((goal, index) => (
            <GoalItem
              key={goal.number}
              number={goal.number}
              title={goal.title}
              link={goal.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
