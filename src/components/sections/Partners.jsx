"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const PartnerLogo = ({ src, alt, index }) => {
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
      className="flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: index * 0.1,
        duration: 0.5,
      }}
    >
      <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-sm overflow-hidden">
        <Image
          src={encodeURI(src)}
          alt={alt}
          fill
          className="object-contain p-0"
          unoptimized
        />
      </div>
    </motion.div>
  );
};

export default function Partners() {
  const partners = [
    { src: "/images/partners/GET1 1.png", alt: "Angaza" },
    { src: "/images/partners/PRS 1.png", alt: "Prospect" },
    { src: "/images/partners/RON1 1.png", alt: "AETS" },
    { src: "/images/partners/GETS 1.png", alt: "GETS" },
    { src: "/images/partners/layer_x0020_1.png", alt: "CVHR" },
    { src: "/images/partners/partners (6).png", alt: "TravelBeta" },
    { src: "/images/partners/partners.png", alt: "Mercedes" },
    { src: "/images/partners/partners (1).png", alt: "UNESCO" },
    { src: "/images/partners/partners (2).png", alt: "UN" },
    { src: "/images/partners/partners (3).png", alt: "Chevron" },
    { src: "/images/partners/partners (4).png", alt: "Pepsi" },
    { src: "/images/partners/partners (5).png", alt: "Cisco" },
  ];

  return (
    <section className="py-16 px-5 sm:px-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-3 text-black">Our Partners</h2>
          <p className="text-sm text-gray-700 max-w-xl mx-auto">
            We empower education development and sustainability
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="max-w-md mb-8 md:mb-0 md:pr-8">
            <h3 className="text-xl font-semibold mb-3 text-black">
              Partner With Us
            </h3>
            <p className="text-sm text-gray-700 mb-6">
              EduAid-Africa collaborates with local, national, and international
              partners through customized MOUs to enhance the scope and impact
              of its projects. It engages a wide network of funders, technical
              partners, and implementation partners to ensure the effective
              delivery of educational aid.
            </p>
            <Link
              href="/partner-with-us"
              className="inline-flex items-center justify-center text-white font-medium bg-[#1F892B] rounded-full px-8 py-3 transition-all duration-300"
            >
              Partner With Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 md:w-1/2">
            {partners.map((partner, index) => (
              <PartnerLogo
                key={index}
                src={partner.src}
                alt={partner.alt}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
