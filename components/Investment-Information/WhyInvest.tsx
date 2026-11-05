"use client";

import {
  GraduationCap,
  Plane,
  Zap,
  Sprout,
  ArrowUpRight,
} from "lucide-react";

import { motion, type Variants } from "framer-motion";

const sectors = [
  {
    number: "01",
    title: "Education",
    tagline: "Empowering Knowledge. Enabling Futures.",
    description:
      "We recognise education as a powerful driver of individual and economic development. Our investment interests include educational institutions, skill development initiatives, learning infrastructure and innovative education solutions.",
    icon: GraduationCap,
    focusAreas: [
      "Educational institutions and infrastructure",
      "Skill development and professional training",
      "Digital learning and education technology",
      "Industry-oriented learning initiatives",
    ],
  },
  {
    number: "02",
    title: "Tourism",
    tagline: "Creating Experiences. Unlocking Destinations.",
    description:
      "Tourism offers opportunities to connect destinations, cultures and communities. We explore opportunities across tourism infrastructure, hospitality, destination development and experience-led ventures.",
    icon: Plane,
    focusAreas: [
      "Hospitality and accommodation",
      "Tourism infrastructure and development",
      "Sustainable and experiential tourism",
      "Destination and leisure development",
    ],
  },
  {
    number: "03",
    title: "Energy",
    tagline: "Powering Progress. Supporting Tomorrow.",
    description:
      "Energy is fundamental to sustainable economic growth. We are interested in opportunities that support energy innovation, efficiency and the development of future-focused energy solutions.",
    icon: Zap,
    focusAreas: [
      "Renewable energy solutions",
      "Solar and alternative energy",
      "Energy efficiency initiatives",
      "Sustainable energy infrastructure",
    ],
  },
  {
    number: "04",
    title: "Agriculture",
    tagline: "Growing Innovation. Advancing Sustainability.",
    description:
      "Agriculture continues to evolve through technology, innovation and more efficient resource management. We recognise opportunities across modern farming, agribusiness and sustainable agricultural systems.",
    icon: Sprout,
    focusAreas: [
      "Modern and technology-driven agriculture",
      "Hydroponics and controlled-environment farming",
      "Agricultural infrastructure and processing",
      "Agribusiness and food supply chains",
    ],
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

const cardVariants: Variants = {
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
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyInvest() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-20">

        {/* SECTION INTRODUCTION */}

        <div className="mb-12 max-w-[850px] lg:mb-16">

          <span className="text-sm font-medium text-[#C99B45] sm:text-base lg:text-[16px]">
            Where We Focus
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
            Investing Across Sectors That Shape Tomorrow.
          </h2>

          <p className="mt-6 max-w-[780px] text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
            We focus on four key sectors with the potential to contribute
            to economic development, innovation and sustainable growth.
          </p>

        </div>

        {/* SECTOR CARDS */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
        >

          {sectors.map((sector) => {
            const Icon = sector.icon;

            return (
              <motion.article
                key={sector.number}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#14233A]/70 p-6 transition-all duration-500  sm:p-8 lg:p-9"
              >

                {/* TOP CONTENT */}

                <div className="flex items-start justify-between">

                  <span className="text-sm font-semibold tracking-wider text-[#C99B45]">
                    {sector.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C99B45]/20 transition-all duration-500 ">
                    <Icon
                      size={24}
                      strokeWidth={1.5}
                      className="text-[#C99B45] transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                </div>

                {/* TITLE AND TAGLINE */}

                <div className="mt-7">

                  <h3 className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-[28px]">
                    {sector.title}
                  </h3>

                  <p className="mt-3 text-base font-medium text-white/90 sm:text-lg">
                    {sector.tagline}
                  </p>

                </div>

                {/* DESCRIPTION */}

                <p className="mt-5 text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[18px]">
                  {sector.description}
                </p>

                {/* FOCUS AREAS */}

                <div className="mt-8 border-t border-white/10 pt-6">

                  <h4 className="text-sm font-semibold tracking-wider text-[#E7C477]">
                    Focus Areas
                  </h4>

                  <ul className="mt-5 grid gap-4 sm:grid-cols-2">

                    {sector.focusAreas.map((area, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm leading-6 text-white/75 sm:text-base"
                      >

                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C99B45]" />

                        {area}

                      </li>
                    ))}

                  </ul>

                </div>

                {/* BOTTOM ACCENT */}

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C99B45] transition-all duration-500 group-hover:w-full" />

              </motion.article>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
}