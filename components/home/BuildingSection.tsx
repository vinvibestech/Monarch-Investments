"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

// Container animation
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

// Text reveal animation
const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Image reveal animation
const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    x: 45,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function BuildingSection() {
  return (
    <section className="overflow-hidden py-16 sm:py-20 lg:py-38">

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-12 lg:px-3 xl:px-3">

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.3,
            }}
          >

            {/* Eyebrow */}
            <motion.span
              variants={textVariants}
              className="block text-base font-medium text-[#C99B45] sm:text-lg lg:text-[16px]"
            >
              Building a Sustainable Future
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={textVariants}
              className="font-main mt-4 w-full max-w-[720px] text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]"
            >
              Where Investment Meets Innovation
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={textVariants}
              className="w-full max-w-[620px] text-white/75 pb-6 mt-6 text-base leading-7 sm:text-lg sm:leading-8 md:text-xl lg:mt-10 lg:text-[20px] lg:leading-[2]"
            >
              Monarch Global Investments is committed to supporting
              sustainable growth across Education, Agriculture, Energy
              and Tourism. By connecting ideas, businesses and strategic
              partners, we seek to create opportunities that contribute
              to long-term value and meaningful development.
            </motion.p>

            {/* Discover Button */}
            <motion.div
              variants={textVariants}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full border border-[#C99B45]/50 px-7 py-3.5 text-sm font-semibold text-[#E7C477] transition-all duration-300 hover:border-[#C99B45] hover:bg-[#C99B45] hover:text-[#172A45] md:text-[16px]"
              >
                Discover

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>

          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.25,
            }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{
                scale: 1.025,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              }}
              className="group relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-[12px]"
            >
              <Image
                src="/home/BUILDINGS.png"
                alt="Modern sustainable infrastructure and buildings"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />

              {/* Subtle Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#172A45]/15 via-transparent to-transparent" />

            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}