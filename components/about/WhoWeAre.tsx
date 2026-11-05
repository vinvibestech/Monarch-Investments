"use client";

import {
  Sprout,
  Zap,
  GraduationCap,
  Plane,
  Target,
  Eye,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const sectors = [
  {
    title: "Agriculture",
    description: "Building sustainable agricultural opportunities.",
    icon: Sprout,
  },
  {
    title: "Energy",
    description: "Supporting innovation in the energy sector.",
    icon: Zap,
  },
  {
    title: "Education",
    description: "Creating opportunities through education.",
    icon: GraduationCap,
  },
  {
    title: "Tourism",
    description: "Connecting destinations and experiences.",
    icon: Plane,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">

        {/* WHO WE ARE */}

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16 xl:gap-24">

          {/* LEFT CONTENT */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-[620px]"
          >
            <motion.span
              variants={itemVariants}
              className="text-sm font-medium text-[#C99B45] sm:text-base lg:text-[16px]"
            >
              Who We Are
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]"
            >
              One Vision. Diverse Businesses. Shared Growth.
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="mt-7 space-y-5 lg:mt-9"
            >
              <p className="text-base leading-7 sm:text-lg text-white/75 sm:leading-8 lg:text-[20px] lg:leading-[2]">
                Monarch Global Investments brings together businesses,
                strategic partnerships and investment opportunities through
                a diversified corporate platform.
              </p>

              <p className="text-base leading-7 sm:text-lg text-white/75 sm:leading-8 lg:text-[20px] lg:leading-[2]">
                Operating across Education, Agriculture, Energy and Tourism,
                we focus on connecting expertise, strengthening business
                relationships and supporting sustainable growth.
              </p>

              <p className="text-base leading-7 sm:text-lg text-white/75 sm:leading-8 lg:text-[20px] lg:leading-[2]">
                Through strategic planning, responsible decision-making
                and effective execution, we aim to create meaningful
                opportunities and lasting value.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT - BUSINESS SECTORS */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative mx-auto w-full max-w-[620px]"
          >
            <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

              {sectors.map((sector) => {
                const Icon = sector.icon;

                return (
                  <motion.div
                    key={sector.title}
                    variants={itemVariants}
                    whileHover={{
                      y: -7,
                      transition: { duration: 0.3 },
                    }}
                    className="group relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#14233A]/80 p-5 transition-all duration-500 sm:min-h-[220px] sm:p-7"
                  >
                    {/* Icon */}

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C99B45]/20 bg-[#C99B45]/10 transition-all duration-500">
                      <Icon
                        size={24}
                        strokeWidth={1.5}
                        className="text-[#C99B45] transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}

                    <div className="relative z-10 mt-8">
                      <h3 className="text-lg font-semibold sm:text-xl">
                        {sector.title}
                      </h3>

                      <p className="mt-2 text-white/75 text-sm leading-6 text-[#AAB7C9]">
                        {sector.description}
                      </p>
                    </div>

                    {/* Bottom Accent */}

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C99B45] transition-all duration-500 group-hover:w-full" />
                  </motion.div>
                );
              })}

            </div>
          </motion.div>
        </div>

        {/* MISSION & VISION */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 border-t border-white/10 pt-12 sm:mt-20 sm:gap-8 lg:mt-24 lg:grid-cols-2 lg:gap-12 lg:pt-16"
        >

          {/* MISSION */}

          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#14233A]/70 p-7 transition-all duration-500 sm:p-9 lg:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C99B45]/20 bg-[#C99B45]/10">
              <Target
                size={25}
                strokeWidth={1.5}
                className="text-[#C99B45]"
              />
            </div>

            <h3 className="mt-7 text-sm font-medium text-[#C99B45] sm:text-base lg:text-[16px]">
              Our Mission
            </h3>

            <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
              To transform opportunities into sustainable businesses by
              combining investment, expertise, strategic partnerships,
              and disciplined execution to create lasting value.
            </p>

            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C99B45] transition-all duration-500 group-hover:w-full" />
          </motion.div>

          {/* VISION */}

          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#14233A]/70 p-7 transition-all duration-500  sm:p-9 lg:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C99B45]/20 bg-[#C99B45]/10">
              <Eye
                size={25}
                strokeWidth={1.5}
                className="text-[#C99B45]"
              />
            </div>

            <h3 className="mt-7 text-sm font-medium text-[#C99B45] sm:text-base lg:text-[16px]">
              Our Vision
            </h3>
            <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
          To shape a sustainable future through strategic investments, innovation, and responsible growth.
            </p>

            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C99B45] transition-all duration-500 group-hover:w-full" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}