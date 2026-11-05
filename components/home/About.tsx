"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const statsData = [
  {
    label: "Investment Value",
    value: "AED 500M+",
  },
  {
    label: "Investors",
    value: "250+",
  },
  {
    label: "Partner Companies",
    value: "50+",
  },
];

export default function About() {
  return (
    <section className="overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 md:px-10 lg:px-10 xl:px-0">

        {/* Top Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
          >
            {/* Subheading */}
            <motion.span
              variants={fadeUp}
              className="block text-base font-medium text-[#C99B45] sm:text-lg lg:text-[16px]"
            >
              About Monarch Global Investments
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="mt-4 w-full max-w-[720px] text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]"
            >
              Creating Opportunities. Building Long-Term Value.
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 w-full max-w-[620px] text-white/75 text-base leading-7 sm:text-lg sm:leading-8 md:text-xl lg:mt-10 lg:text-[20px] lg:leading-[2]"
            >
              Monarch Global Investments brings together diverse sectors under
              a strategic investment platform focused on sustainable growth
              and responsible business practices.

              <br />
              <br />

              Our approach combines industry expertise, strategic partnerships,
              innovation and responsible investment to identify opportunities
              across key sectors and support long-term economic and social
              development.
            </motion.p>

            {/* Button */}
            <motion.div
              variants={fadeUp}
              className="mt-8 lg:mt-16"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full border border-[#C99B45]/50 px-7 py-3.5 text-sm md:text-[16px] font-semibold text-[#E7C477] transition-all duration-300 hover:border-[#C99B45] hover:bg-[#C99B45] hover:text-[#172A45]"
              >
                About Us

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="group relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-[12px]">
              <Image
                src="/home/aboutu.png"
                alt="Monarch Global Investments"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
          }}
          className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-28 lg:grid-cols-3"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className={`text-center ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
            >
              <p className="text-lg sm:text-xl lg:text-[24px]">
                {stat.label}
              </p>

              <motion.h3
                variants={fadeUp}
                className="mt-4 text-4xl font-semibold sm:text-5xl lg:mt-8 lg:text-[56px]"
              >
                {stat.value}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}