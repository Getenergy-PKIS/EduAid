"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div className="mb-4">
      <button
        className={`w-full flex items-center justify-between p-5 text-left ${
          isOpen ? "bg-[#1F892B] text-white" : "bg-gray-50 text-black"
        } rounded-md transition-all duration-300`}
        onClick={onClick}
      >
        <span className="font-medium">{question}</span>
        <span className="ml-2">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
        </span>
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 p-5 bg-gray-50" : "max-h-0"
        }`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <p className="text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const faqs = [
    {
      question: "What is EduAid Africa?",
      answer:
        "EduAid-Africa is an initiative of SCEF, dedicated to bridging the education gap in Africa through scholarships, teacher training, and CSR-funded projects.",
    },
    {
      question: "How do I get involved?",
      answer:
        'You can get involved by volunteering, donating, becoming an ambassador, or partnering with us. Visit our "Get Involved" page for more information on how to join our mission.',
    },
    {
      question: "What is the GetFinance Africa Wallet?",
      answer:
        "The GetFinance Africa Wallet is a digital financial solution that allows you to securely manage donations, track your contributions, and support educational projects across Africa with transparency.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 px-10 bg-white"
      initial="hidden"
      animate={controls}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 text-black"
            variants={titleVariants}
          >
            FAQs
          </motion.h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
