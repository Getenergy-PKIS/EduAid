"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const CountryCard = ({
  name,
  imageSrc,
  description,
  buttonText,
  buttonLink,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // trigger only once
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={hasAnimated ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: index * 0.1,
      }}
    >
      <div className="relative w-24 h-24 mb-3">
        <Image
          src={encodeURI(imageSrc)}
          alt={name}
          fill
          className="object-cover rounded-full"
          unoptimized
        />
      </div>
      <h3 className="text-base font-semibold mb-1 text-black">{name}</h3>
      <p className="text-sm text-gray-700 mb-3 text-center">{description}</p>
      <Link
        href={buttonLink}
        className="inline-flex items-center text-sm text-black font-medium border border-gray-300 rounded-full px-6 py-2 transition-all duration-300 hover:bg-gray-50"
      >
        {buttonText}
      </Link>
    </motion.div>
  );
};

export default function LocalChapter() {
  const countries = [
    {
      name: "EduAid Kenya",
      description:
        "Visit the Kenya official EduAid website and get involved directly",
      imageSrc: "/images/chapters/kenya.png",
      buttonText: "Visit their Website",
      buttonLink: "/kenya",
    },
    {
      name: "EduAid South Africa",
      description:
        "Visit the South Africa official EduAid website and get involved directly",
      imageSrc: "/images/chapters/south-africa.png",
      buttonText: "Visit their Website",
      buttonLink: "/south-africa",
    },
    {
      name: "EduAid Ghana",
      description:
        "Visit the Ghana official EduAid website and get involved directly",
      imageSrc: "/images/chapters/ghana.png",
      buttonText: "Visit their Website",
      buttonLink: "/ghana",
    },
    {
      name: "EduAid Nigeria",
      description:
        "Visit the Nigeria official EduAid website and get involved directly",
      imageSrc: "/images/chapters/nigeria.png",
      buttonText: "Visit their Website",
      buttonLink: "/nigeria",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % Math.ceil(countries.length / 4));
  };

  const prevPage = () => {
    setCurrentPage((prev) =>
      prev === 0 ? Math.ceil(countries.length / 4) - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 px-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-3 text-black">
            Create or Join a Local Chapter
          </h2>
          <h3 className="text-xl font-semibold mb-2 text-black">
            EduAid-Africa in every African Country
          </h3>
          <p className="text-sm text-gray-700 max-w-2xl mx-auto">
            EduAid-Africa is committed to reaching every corner of the African
            continent. Each country has a dedicated portal to manage local
            educational projects, ensuring tailored solutions and direct impact
            in every community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {countries.map((country, index) => (
            <CountryCard
              key={index}
              name={country.name}
              description={country.description}
              imageSrc={country.imageSrc}
              buttonText={country.buttonText}
              buttonLink={country.buttonLink}
              index={index}
            />
          ))}
        </div>

        <div className="flex justify-between items-center mt-8">
          <Link
            href="/countries"
            className="inline-flex items-center text-sm text-[#1F892B] font-medium transition-all duration-300"
          >
            <span>Visit your country's Portal</span>
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
                d="M14 5l7 7-7 7"
              />
            </svg>
          </Link>

          <div className="flex space-x-2">
            <button
              onClick={prevPage}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
              aria-label="Previous page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextPage}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
              aria-label="Next page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
