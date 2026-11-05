"use client";

import {
  ChartNoAxesCombined,
  Users,
  Leaf,
} from "lucide-react";

import { motion, type Variants } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Economic Value",
    description:
      "Building commercially viable and resilient opportunities.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "02",
    title: "Social Progress",
    description:
      "Supporting knowledge, employment and community development.",
    icon: Users,
  },
  {
    number: "03",
    title: "Environmental Responsibility",
    description:
      "Encouraging efficient resource utilisation and sustainable practices.",
    icon: Leaf,
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

export default function ResponsibleProgress() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">

        {/* INTRODUCTION */}

        <div className="">

          {/* LEFT HEADING */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-medium text-[#C99B45] sm:text-base lg:text-[16px]">
              Responsible Progress
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
              Growth That Goes Beyond Business.
            </h2>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <p className="mt-6 max-w-[1080px] text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
              We believe meaningful growth should create value beyond
              financial outcomes.
            </p>

            <p className="mt-6 max-w-[1080px] text-base leading-7 sm:text-lg text-white/75 sm:leading-8 lg:text-[20px] lg:leading-[2]">
              Our investment philosophy considers the broader opportunities
              to support economic development, encourage innovation,
              strengthen communities and promote responsible resource
              utilisation.
            </p>

            <p className="mt-6 max-w-[1080px] text-base leading-7 sm:text-lg text-white/75 sm:leading-8 lg:text-[20px] lg:leading-[2]">
              We seek to align commercial opportunities with a long-term
              perspective on sustainable development.
            </p>
          </motion.div>

        </div>

  {/* GUIDING PRINCIPLES */}

<div className=" pt-5 sm:mt-10 lg:mt-10">



  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    className="grid grid-cols-1 gap-0 md:grid-cols-3"
  >
    {principles.map((item, index) => {
      const Icon = item.icon;

      return (
        <motion.div
          key={item.number}
          variants={itemVariants}
          className={`group relative py-8 md:px-7 lg:py-10 ${
            index !== 0 ? "border-t border-white/10 md:border-l md:border-t-0" : ""
          }`}
        >


          {/* TITLE */}

          <h3 className="mt-9 text-xl font-semibold leading-snug sm:text-2xl">
            {item.title}
          </h3>

          {/* DESCRIPTION */}

          <p className="mt-5 text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[18px]">
            {item.description}
          </p>

         
        </motion.div>
      );
    })}
  </motion.div>
</div>
      </div>
    </section>
  );
}