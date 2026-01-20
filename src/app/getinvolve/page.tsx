"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ---------------- ANIMATIONS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function GetInvolvedPage() {
  return (
    <main className="bg-white text-gray-800 overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Get involved
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600"
        >
          Watch the inspiring story of how Great Hearts School in Kenya raised
          funds to build new classrooms for displaced children to learn.
        </motion.p>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-20 mb-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <Image
            src="/images/getinvolve/gi1.jpg"
            alt="Children in classroom"
            width={1200}
            height={600}
            className="object-cover w-full"
          />

          {/* Play Button */}
          <button className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-white text-xl shadow-lg hover:scale-105 transition">
              ▶
            </span>
          </button>
        </motion.div>
      </section>

      {/* ================= WAYS TO SUPPORT ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 pb-24">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold flex justify-center items-center mb-2"
        >
          Ways to Support
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 mb-16 flex justify-center"
        >
          Help us build a better future for the children.
        </motion.p>

        <div className="space-y-10">
          {/* ---------- CARD 1 ---------- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-green-500 rounded-3xl p-8 grid md:grid-cols-2 gap-10 items-center"
          >
            <Image
              src="/images/getinvolve/gi2.jpg"
              alt=""
              width={500}
              height={300}
              className="rounded-2xl object-cover"
            />

            <div>
              <h3 className="text-xl font-semibold mb-3">One-Time Donations</h3>
              <p className="text-gray-600 mb-6">
                Your one-time contribution can create a lifetime of
                opportunities for children in need. Every donation funds
                essential projects like building classrooms, providing learning
                materials, and supporting teacher training programs.
              </p>

              <Link
                href="#"
                className="inline-block border border-green-600 text-green-700 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition"
              >
                Donate Now
              </Link>
            </div>
          </motion.div>

          {/* ---------- CARD 2 ---------- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-green-500 rounded-3xl p-8 grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h3 className="text-xl font-semibold mb-3">CSR Investments</h3>
              <p className="text-gray-600 mb-6">
                We provide ongoing professional development for teachers through
                workshops, seminars, and conferences to improve teaching
                methodologies and digital literacy.
              </p>

              <Link
                href="#"
                className="inline-block border border-green-600 text-green-700 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition"
              >
                Donate Now
              </Link>
            </div>

            <Image
              src="/images/getinvolve/gi3.jpg"
              alt=""
              width={500}
              height={300}
              className="rounded-2xl object-cover"
            />
          </motion.div>

          {/* ---------- CARD 3 ---------- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-green-500 rounded-3xl p-8 grid md:grid-cols-2 gap-10 items-center"
          >
            <Image
              src="/images/getinvolve/gi4.jpg"
              alt=""
              width={500}
              height={300}
              className="rounded-2xl object-cover"
            />

            <div>
              <h3 className="text-xl font-semibold mb-3">
                School Supplies & Tech Tools
              </h3>
              <p className="text-gray-600 mb-6">
                Support children with essential school supplies and modern
                learning tools. From books to tablets, your contribution helps
                close the education gap.
              </p>

              <Link
                href="#"
                className="inline-block border border-green-600 text-green-700 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition"
              >
                Donate Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
