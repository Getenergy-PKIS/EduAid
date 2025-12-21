'use client';

import { ReactNode, useRef } from 'react';
import { Button } from '../ui';
import Hero from './Hero';
import { motion } from 'framer-motion';

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



  return (
    <motion.div
      id="vision-section"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Simple reveal overlay for a cleaner effect */}
      <motion.div
        className="absolute inset-0 bg-[#1F892B] z-50"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.1 }}
      />

      <Hero
        backgroundColor="bg-[#FCF9F6]"
        className="py-20 relative"
        animate={false}
      >
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Animated floating elements */}
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-black/5 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        {/* Animated dots */}
        {[...Array(15)].map((_, i) => {
          const left = ((i * 17) % 100);
          const top = ((i * 23) % 100);
          const size = 2 + ((i * 3) % 4);

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-black/10 pointer-events-none"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 3 + (i % 2),
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          );
        })}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative inline-block mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-[80px] text-black/5 font-bold"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 0.05, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.05, opacity: 0.1 }}
              >
                2032
              </motion.span>

              <motion.div className="overflow-hidden inline-block">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold mb-4 relative inline-block text-black"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {title}
                </motion.h2>
              </motion.div>

              <motion.div
                className="flex items-center justify-center gap-2 mt-2"
              >
                <motion.span
                  className="h-1 bg-black rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 24 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                />
                <motion.span
                  className="h-1 bg-black rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                />
                <motion.span
                  className="h-1 bg-black rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 24 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 1 }}
                />
              </motion.div>
            </motion.div>

            <motion.div className="overflow-hidden">
              <motion.p
                className="max-w-2xl mx-auto text-black text-lg"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  type: "spring",
                  stiffness: 50
                }}
              >
                {description}
              </motion.p>
            </motion.div>
          </motion.div>

          {features && features.length > 0 && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="mb-12 relative"
                  initial={{
                    opacity: 0,
                    y: 50,
                    rotateY: -15,
                    scale: 0.9
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    rotateY: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 50,
                      damping: 15,
                      delay: 0.5 + (index * 0.2)
                    }
                  }}
                  viewport={{ once: false, margin: "-50px" }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3, type: "spring" }
                  }}
                >
                  {/* Animated background shape */}
                  <motion.div
                    className="absolute -inset-4 rounded-xl bg-black/5 -z-10 opacity-0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <motion.div className="overflow-hidden inline-block">
                      <motion.h3
                        className="text-2xl font-bold mb-3 text-black relative group"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          duration: 0.5,
                          delay: 0.7 + (index * 0.2),
                          type: "spring"
                        }}
                        whileHover={{ x: 5 }}
                      >
                        {feature.title}
                        <motion.span
                          className="absolute -bottom-1 left-0 h-0.5 bg-black"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.h3>
                    </motion.div>

                    <motion.div className="overflow-hidden">
                      <motion.p
                        className="mb-4 text-black"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 0.8 }}
                        viewport={{ once: false }}
                        transition={{
                          duration: 0.5,
                          delay: 0.8 + (index * 0.2)
                        }}
                        whileHover={{ opacity: 1 }}
                      >
                        {feature.description}
                      </motion.p>
                    </motion.div>

                    {feature.stats && (
                      <div className="flex items-center justify-between w-full gap-4 mt-2">
                        {feature.stats.current && (
                          <motion.div className="overflow-hidden">
                            <motion.p
                              className="text-sm text-black"
                              initial={{ y: 20, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              viewport={{ once: false }}
                              transition={{
                                duration: 0.5,
                                delay: 0.9 + (index * 0.2)
                              }}
                              whileHover={{ x: 3 }}
                            >
                              {feature.stats.current}
                            </motion.p>
                          </motion.div>
                        )}
                        {feature.stats.percentage && (
                          <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            whileInView={{
                              opacity: 1,
                              scale: 1,
                              rotate: 0,
                              transition: {
                                type: "spring",
                                stiffness: 100,
                                delay: 1 + (index * 0.2)
                              }
                            }}
                            viewport={{ once: false }}
                            whileHover={{
                              scale: 1.15,
                              rotate: 5,
                              transition: { type: "spring", stiffness: 300 }
                            }}
                          >
                            <motion.div
                              className="absolute -inset-2 rounded-full bg-black/5"
                              initial={{ opacity: 0, scale: 0 }}
                              whileHover={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                            <motion.p
                              className="text-2xl font-bold text-black relative z-10"
                              animate={{
                                scale: [1, 1.1, 1],
                                transition: {
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatDelay: index + 1
                                }
                              }}
                            >
                              {feature.stats.percentage}
                            </motion.p>
                          </motion.div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {imageSrc && imageAlt && buttonText && buttonLink && (
            <motion.div
              className="flex justify-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  href={buttonLink}
                  size="lg"
                  className="text-black border border-black hover:bg-black hover:text-white transition-colors relative z-10"
                  animate={false}
                >
                  <motion.span
                    className="absolute inset-0 bg-black"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ zIndex: -1 }}
                  />
                  <motion.span
                    className="relative z-10 flex items-center"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: 2
                    }}
                  >
                    {buttonText}
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 1
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </Hero>
    </motion.div>
  );
}
