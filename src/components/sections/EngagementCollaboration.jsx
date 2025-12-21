"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const CollaborationCard = ({
  title,
  description,
  imageSrc,
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
      className="bg-white h-full flex flex-col"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={hasAnimated ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: index * 0.1,
      }}
      whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={encodeURI(imageSrc)}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="pt-4 flex flex-col flex-grow">
        <h3 className="text-base font-semibold mb-1 text-black">{title}</h3>
        <p className="text-sm text-gray-700 mb-3 flex-grow">{description}</p>
        <div className="mt-auto">
          <Link
            href={buttonLink}
            className="inline-flex items-center text-sm text-[#1F892B] font-medium"
          >
            <span>{buttonText}</span>
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
        </div>
      </div>
    </motion.div>
  );
};

export default function EngagementCollaboration() {
  const collaborationOptions = [
    {
      title: "Ambassador Membership",
      description:
        "Enhance teachers' skills in delivering effective education and career guidance to students.",
      imageSrc: "/images/engagement/ambassador membership.png",
      buttonText: "Become an Ambassador",
      buttonLink: "/become-ambassador",
    },
    {
      title: "Partner With Us",
      description:
        "Enhance teachers' skills in delivering effective education and career guidance to students.",
      imageSrc: "/images/engagement/partner with us.png",
      buttonText: "Join as a Partner",
      buttonLink: "/become-partner",
    },
    {
      title: "Donate to Projects",
      description:
        "Enhance teachers' skills in delivering effective education and career guidance to students.",
      imageSrc: "/images/engagement/donate.png",
      buttonText: "Become a Donor",
      buttonLink: "/become-donor",
    },
    {
      title: "Volunteer With Us",
      description:
        "Enhance teachers' skills in delivering effective education and career guidance to students.",
      imageSrc: "/images/engagement/volunteer.png",
      buttonText: "Volunteer With Us",
      buttonLink: "/volunteer",
    },
  ];

  return (
    <section className="py-16 px-5 md:px-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-black">
            Engagement and Collaboration
          </h2>
          <p className="text-sm text-gray-700 max-w-2xl mx-auto">
            Get involved, become a member today by joining as an Ambassador,
            Donor, Partner or Volunteer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collaborationOptions.slice(0, 3).map((option, index) => (
            <CollaborationCard
              key={index}
              title={option.title}
              description={option.description}
              imageSrc={option.imageSrc}
              buttonText={option.buttonText}
              buttonLink={option.buttonLink}
              index={index}
            />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 max-w-md ">
          {collaborationOptions.slice(3, 4).map((option, index) => (
            <CollaborationCard
              key={index + 3}
              title={option.title}
              description={option.description}
              imageSrc={option.imageSrc}
              buttonText={option.buttonText}
              buttonLink={option.buttonLink}
              index={index + 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
