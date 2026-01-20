"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ---------------- ANIMATION VARIANTS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 overflow-hidden">
      {/* ================= ABOUT US ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-15 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/about/img1.png"
              alt="EduAid Africa volunteers"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">About us</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            EduAid-Africa is an initiative spearheaded by Santos Creations
            Educational Foundation (SCEF) aimed at transforming the educational
            landscape for vulnerable communities across Africa.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-green-600 text-green-700 rounded-full hover:bg-green-600 hover:text-white transition"
          >
            <span className="flex items-center gap-2">
              <Image
                src="/images/about/img4.png"
                alt="EduAid Africa volunteers"
              />
              Visit the website
            </span>
          </Link>
        </motion.div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-gray-50 py-20 px-8 md:px-15">
        {/* Mission */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:w-[60%]"
          >
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              EduAid-Africa is committed to ensuring that every child, educator,
              and educational institution has access to the necessary resources
              to succeed.
            </p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden md:w-[50%]"
          >
            <Image
              src="/images/about/img2.png"
              alt="Library"
              width={700}
              height={400}
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Vision */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden md:w-[50%] order-2 md:order-1"
          >
            <Image
              src="/images/about/img3.png"
              alt="Community children"
              width={600}
              height={400}
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:w-[50%] order-1 md:order-2"
          >
            <h3 className="text-3xl font-bold mb-5">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To create a future where every child, educator, and educational
              institution in Africa has the resources and opportunities needed
              to succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="max-w-7xl mx-auto px-8 md:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold"
          >
            Our journey until now
          </motion.h3>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {[
              {
                number: "1",
                date: "2025 · January",
                title: "Expanding Access to Education",
                desc: "Established and supported over 100 educational centers in underprivileged regions.",
              },
              {
                number: "2",
                date: "2025 · September",
                title: "Teacher Training and Development",
                desc: "Trained more than 5,000 educators through capacity-building workshops.",
              },
              {
                number: "3",
                date: "2026 · February",
                title: "Infrastructure Development",
                desc: "Built and renovated over 200 classrooms and libraries.",
              },
              {
                number: "4",
                date: "2026 · July",
                title: "Advocacy and Policy Engagement",
                desc: "Partnered with government agencies to advocate education policies.",
              },
              {
                number: "5",
                date: "2026 · December",
                title: "CSR for Education Management",
                desc: "Collaborated with corporate partners on scholarships and ICT programs.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                variants={fadeUp}
                className="relative pl-14"
              >
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border flex items-center justify-center font-bold">
                  {item.number}
                </div>

                {index !== 4 && (
                  <span className="absolute left-5 top-10 h-full w-px bg-gray-300" />
                )}

                <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= OBJECTIVES ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-20">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-2"
          >
            Our Objectives
          </motion.h3>

          <p className="text-gray-500 mb-12">
            The important thing that we want to change
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["img5.png", "img5.png", "img5.png"].map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="relative rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={`/images/about/${img}`}
                  alt=""
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-4 text-white font-semibold">
                  Infrastructure Development ↗
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR TEAM ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 md:px-20">
          <h3 className="text-3xl font-bold mb-2">Our team</h3>
          <p className="text-gray-500 mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src="/images/about/img6.png"
                    alt=""
                    width={80}
                    height={80}
                  />
                </div>

                <h4 className="font-semibold">Babashola Santos</h4>
                <p className="text-sm text-gray-500 mb-3">CEO / Founder</p>

                <p className="text-sm text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="flex justify-center gap-4">
                  <span>in</span>
                  <span>X</span>
                  <span>🌐</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WE'RE HIRING ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 text-center px-10"
      >
        <h3 className="text-4xl font-bold mb-4">We&apos;re hiring!</h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Be the force of the change and help us create a better future for
          African’s people.
        </p>

        <a
          href="#"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
        >
          We are hiring!
        </a>
      </motion.section>
    </main>
  );
}
