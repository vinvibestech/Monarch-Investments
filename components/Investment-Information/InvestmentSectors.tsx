"use client";

import {
  BriefcaseBusiness,
  Building2,
  Handshake,
  TrendingUp,
} from "lucide-react";

import { motion, type Variants } from "framer-motion";

const investmentFocus = [
  {
    number: "01",
    title: "Business Development",
    description:
      "Supporting promising business concepts and ventures with growth potential.",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Infrastructure & Assets",
    description:
      "Exploring opportunities in infrastructure, facilities and sector-specific assets.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Strategic Ventures",
    description:
      "Collaborating on new business ventures, joint initiatives and market expansion.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Growth Opportunities",
    description:
      "Identifying established businesses and initiatives with opportunities for development and scalability.",
    icon: TrendingUp,
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

export default function InvestmentSectors() {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">

        <div className="grid gap-12 lg:grid-cols-[380px_1fr] lg:gap-20">

          {/* LEFT CONTENT */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              className="text-sm font-medium text-[#C99B45] sm:text-base lg:text-[16px]"
            >
              Our Investment Focus
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="mt-4 max-w-[420px] text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]"
            >
              Recognising Potential. Developing Possibilities.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-[480px] text-base text-white/75 leading-7 sm:text-lg sm:leading-8 lg:text-[18px] lg:leading-[1.9]"
            >
              We explore opportunities at different stages of development,
              with an emphasis on strategic alignment, commercial potential
              and long-term viability.
            </motion.p>

    
          </motion.div>

          {/* RIGHT CONTENT - INVESTMENT CARDS */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6"
          >
            {investmentFocus.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  variants={itemVariants}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative flex min-h-[230px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#14233A]/70 p-6 transition-all duration-500 sm:p-7 lg:min-h-[250px]"
                >
                  {/* TOP ROW */}

                  <div className="flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C99B45]/20 bg-[#C99B45]/10 transition-all duration-500 ">
                      <Icon
                        size={23}
                        strokeWidth={1.5}
                        className="text-[#C99B45] transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                  </div>

                  {/* CARD CONTENT */}

                  <div className="mt-auto pt-9">

                    <h3 className="text-xl font-semibold leading-snug sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
                      {item.description}
                    </p>

                  </div>

                  {/* BOTTOM ACCENT */}

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C99B45] transition-all duration-500 group-hover:w-full" />

                </motion.article>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}