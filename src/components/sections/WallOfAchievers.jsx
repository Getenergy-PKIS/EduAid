"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const AchieverCard = ({ name, role, imageSrc, linkedInUrl, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 }); // trigger only once
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={hasAnimated ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: index * 0.1,
        duration: 0.5,
      }}
    >
      <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
        <Image
          src={encodeURI(imageSrc)}
          alt={name}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="flex items-center justify-between bg-gray-50 py-2 px-3">
        <div>
          <h3 className="text-sm font-semibold text-black">{name}</h3>
          <p className="text-xs text-gray-600">{role}</p>
        </div>
        {linkedInUrl && (
          <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default function WallOfAchievers() {
  const achievers = [
    {
      name: "Janet Jane",
      role: "Volunteer",
      imageSrc: "/images/achievers/achiever1.png",
      linkedInUrl: "https://linkedin.com",
    },
    {
      name: "David Wilson",
      role: "Product Designer",
      imageSrc: "/images/achievers/achiever2.png",
      linkedInUrl: "https://linkedin.com",
    },
    {
      name: "Mary Olanrewaju",
      role: "Sales Director",
      imageSrc: "/images/achievers/achiever3.png",
      linkedInUrl: "https://linkedin.com",
    },
    {
      name: "Samuel Chibuzor",
      role: "Software Developer",
      imageSrc: "/images/achievers/achiever4.png",
      linkedInUrl: "https://linkedin.com",
    },
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      imageSrc: "/images/achievers/achiever5.png",
      linkedInUrl: "https://linkedin.com",
    },
    {
      name: "Michael Adebayo",
      role: "UI/UX Designer",
      imageSrc: "/images/achievers/achiever6.png",
      linkedInUrl: "https://linkedin.com",
    },
    {
      name: "Jennifer Okoro",
      role: "Data Scientist",
      imageSrc: "/images/achievers/achiever7.png",
      linkedInUrl: "https://linkedin.com",
    },
    {
      name: "Daniel Nwachukwu",
      role: "Backend Developer",
      imageSrc: "/images/achievers/achiever8.png",
      linkedInUrl: "https://linkedin.com",
    },
    {
      name: "Ezekiel O. Obasanya",
      role: "Frontend Developer",
      imageSrc: "/images/achievers/achiever9.png",
      linkedInUrl: "https://linkedin.com",
    },
  ];

  return (
    <section className="py-12 px-5 sm:px-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold mb-3 text-black">
            EduAid Wall of Achievers In Diaspora
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            We empower education development and sustainability
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mb-8">
          {achievers.map((achiever, index) => (
            <AchieverCard
              key={index}
              name={achiever.name}
              role={achiever.role}
              imageSrc={achiever.imageSrc}
              linkedInUrl={achiever.linkedInUrl}
              index={index}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/achievers"
            className="inline-flex items-center justify-center text-white font-medium bg-[#1F892B] rounded-full px-8 py-2.5 text-sm transition-all duration-300"
          >
            See All
          </Link>
        </div>
      </div>
    </section>
  );
}
