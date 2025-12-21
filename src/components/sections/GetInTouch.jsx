"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function GetInTouch() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 }); // only trigger once
  const [hasAnimated, setHasAnimated] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        message: "",
      });
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 20 },
    },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, delay: 0.2 },
    },
  };
  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, delay: 0.3 },
    },
  };
  const imageVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 15, delay: 0.4 },
    },
  };
  const inputVariants = (custom) => ({
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.5 + custom * 0.1,
      },
    },
  });

  return (
    <section ref={sectionRef} className="py-16 px-5 sm:px-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.h2
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={titleVariants}
            className="text-3xl font-bold mb-3 text-black"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={textVariants}
            className="text-sm text-gray-700 max-w-xl mx-auto"
          >
            We empower education development and sustainability
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={formVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["firstName", "lastName"].map((field, idx) => (
                  <motion.div
                    key={field}
                    variants={inputVariants(idx)}
                    initial="hidden"
                    animate={hasAnimated ? "visible" : "hidden"}
                  >
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {field === "firstName" ? "First name" : "Last name"}
                    </label>
                    <input
                      type="text"
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={`Enter your ${
                        field === "firstName" ? "first" : "last"
                      } name`}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1F892B] focus:border-transparent"
                      required
                    />
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["email", "country"].map((field, idx) => (
                  <motion.div
                    key={field}
                    variants={inputVariants(idx + 2)}
                    initial="hidden"
                    animate={hasAnimated ? "visible" : "hidden"}
                  >
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={`Enter your ${field}`}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1F892B] focus:border-transparent"
                      required
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={inputVariants(4)}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Send us a message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1F892B] focus:border-transparent"
                  required
                ></textarea>
              </motion.div>

              <motion.div
                variants={inputVariants(5)}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1F892B] text-white font-medium py-3 px-6 rounded-md hover:bg-[#176e22] transition-colors duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </motion.div>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-green-100 text-green-800 rounded-md"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-100 text-red-800 rounded-md"
                >
                  There was an error sending your message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            className="hidden md:block"
          >
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/contact-illustration.png"
                alt="Contact us"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
