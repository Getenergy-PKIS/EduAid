"use client";

import { ReactNode, useRef } from "react";
import { Button } from "../ui";
import Hero from "./Hero";
import { motion, useInView } from "framer-motion";

interface FeatureStats {
  current?: string;
  percentage?: string;
}

interface Feature {
  icon?: ReactNode;
  title: string;
  description: string;
  stats?: FeatureStats;
}

interface FeatureHeroProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
  imageOnRight?: boolean;
  features?: Feature[];
}

export default function FeatureHero({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  buttonLink,
  features,
}: FeatureHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" }); // triggers once when section is in view

  const transition = { duration: 0.8, ease: "easeOut" };

  return (
    <motion.div
      id="vision-section"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={transition}
      className="relative"
    >
      <Hero
        backgroundColor="bg-[#FCF9F6]"
        className="py-20 relative"
        animate={false}
      >
        {/* Background and floating animations */}
        <motion.div
          className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden"
          animate={
            isInView ? { backgroundPosition: ["0% 0%", "100% 100%"] } : {}
          }
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Hero content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold mb-4 text-black"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s ease-out",
              }}
            >
              {title}
            </h2>
            <p
              className="max-w-2xl mx-auto text-black text-lg"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(50px)",
                transition: "all 0.8s ease-out 0.2s",
              }}
            >
              {description}
            </p>
          </div>

          {features && features.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="mb-12 relative"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateY(0)" : "translateY(50px)",
                    transition: `all 0.8s ease-out ${0.2 + index * 0.1}s`,
                  }}
                >
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-3 text-black">
                      {feature.title}
                    </h3>
                    <p className="mb-4 text-black">{feature.description}</p>
                    {feature.stats && (
                      <div className="flex items-center justify-between w-full gap-4 mt-2">
                        {feature.stats.current && (
                          <p className="text-sm text-black">
                            {feature.stats.current}
                          </p>
                        )}
                        {feature.stats.percentage && (
                          <p className="text-2xl font-bold text-black">
                            {feature.stats.percentage}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {imageSrc && imageAlt && buttonText && buttonLink && (
            <div
              className="flex justify-center mt-16"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s ease-out 0.5s",
              }}
            >
              <Button
                href={buttonLink}
                size="lg"
                className="text-black border border-black hover:bg-black hover:text-white transition-colors"
              >
                {buttonText}
              </Button>
            </div>
          )}
        </div>
      </Hero>
    </motion.div>
  );
}
