"use client";

import Image from "next/image";
import {
  Search,
  ChartNoAxesCombined,
  Handshake,
  Gem,
} from "lucide-react";

import {
  motion,
  type Variants,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

const pillars = [
  {
    number: "01",
    title: "Strategic Vision",
    description:
      "Identifying opportunities through informed strategy and market understanding.",
    image: "/home/StrategicVision.png",
  },
  {
    number: "02",
    title: "Sustainable Growth",
    description:
      "Building long-term value through responsible business practices.",
    image: "/home/SustainableGrowth.png",
  },
  {
    number: "03",
    title: "Trusted Partnerships",
    description:
      "Creating meaningful relationships across industries and markets.",
    image: "/home/TrustedPartnerships.png",
  },
  {
    number: "04",
    title: "Innovation & Expertise",
    description:
      "Combining industry knowledge with forward-thinking solutions.",
    image: "/home/InnovationExpertise.png",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Identify",
    description:
      "Discover promising opportunities across emerging and established sectors.",
    icon: Search,
  },
  {
    number: "02",
    title: "Evaluate",
    description:
      "Analyse market potential, business fundamentals and long-term prospects.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "03",
    title: "Collaborate",
    description:
      "Build strategic partnerships and meaningful industry relationships.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Create Value",
    description:
      "Pursue sustainable development and long-term value creation.",
    icon: Gem,
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

const fadeUp: Variants = {
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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyChoose() {
  return (
    <>
      {/* ================= WHY CHOOSE SECTION ================= */}

      <section className="overflow-hidden pt-14 sm:pt-16 lg:pt-22">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-22">

          {/* Heading */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.span
              variants={fadeUp}
              className="block text-base text-[#C99B45] font-medium sm:text-lg lg:text-[16px]"
            >
              Why Choose Monarch Investments
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-main mt-4 w-full max-w-[720px] text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]"
            >
              Strategic Investment. Sustainable Value.
            </motion.h2>

            {/* Description */}
            <motion.div
              variants={containerVariants}
              className="mt-8 max-w-[1380px] lg:mt-10"
            >
              <motion.p
                variants={fadeUp}
                className="text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]"
              >
                At Monarch Global Investments, we focus on strategic
                investment solutions designed to create sustainable
                value. Through industry expertise, responsible business
                practices and trusted partnerships, we support businesses
                and investors in pursuing long-term growth.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-6 text-base text-white/75 leading-7 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]"
              >
                Our diversified presence across Education, Tourism,
                Energy and Agriculture enables us to explore opportunities
                across multiple industries while maintaining a strong
                focus on innovation, transparency and sustainable
                development.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Four Investment Pillars */}
          <div className="mt-16 lg:mt-24">

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6"
            >
              {pillars.map((pillar) => (
                <motion.div
                  key={pillar.number}
                  variants={fadeUp}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-3 transition-colors duration-500 hover:border-white/20 sm:p-4"
                >
                  {/* Card Image */}
                  <div className="relative aspect-[16/7] w-full overflow-hidden rounded-xl">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-black/0" />
                  </div>

                  {/* Card Content */}
                  <div className="px-1 pb-3 pt-4 sm:pt-5">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="text-xl font-semibold text-[#F5F7FA] sm:text-[22px]">
                        {pillar.title}
                      </h4>

                      <span className="text-sm font-medium tracking-wider text-white/75">
                        {pillar.number}
                      </span>
                    </div>

                    <p className="mt-3 max-w-[550px] text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH SECTION ================= */}

      <ApproachSection />
    </>
  );
}


// ================= APPROACH COMPONENT =================

function ApproachSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 65%"],
  });

  // Smooth animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  const desktopLine = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const mobileLine = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-28 xl:px-22"
    >
      {/* Heading */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center"
      >
        <motion.span
          variants={fadeUp}
          className="block text-sm font-medium tracking-wide text-[#C99B45] sm:text-base"
        >
          Our Approach
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="font-main mt-4 text-3xl font-semibold leading-tight  sm:text-4xl md:text-5xl lg:text-[41px]"
        >
          From Vision to Value.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[20px]"
        >
          A strategic approach to identifying opportunities and
          building sustainable growth.
        </motion.p>
      </motion.div>

      {/* Timeline */}
      <div className="relative mt-16 sm:mt-18 lg:mt-20">

        {/* Desktop Golden Line */}
        <div className="absolute left-[12.5%] right-[12.5%] top-[43px] hidden h-[2px] bg-white/10 lg:block">
          <motion.div
            style={{ width: desktopLine }}
            className="h-full bg-gradient-to-r from-[#A8792D] via-[#E7C477] to-[#C99B45] shadow-[0_0_12px_rgba(201,155,69,0.6)]"
          />
        </div>

        {/* Mobile Golden Line */}
        <div className="absolute bottom-20 left-[29px] top-8 w-[2px] bg-white/10 lg:hidden">
          <motion.div
            style={{ height: mobileLine }}
            className="w-full bg-gradient-to-b from-[#A8792D] via-[#E7C477] to-[#C99B45] shadow-[0_0_12px_rgba(201,155,69,0.6)]"
          />
        </div>

        {/* Timeline Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-6"
        >
          {approachSteps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group relative flex gap-6 lg:flex-col lg:gap-0"
              >

                {/* Number Circle */}
                <div className="relative z-10 flex shrink-0 items-center justify-center">
                  <motion.div
                    whileHover={{
                      scale: 1.12,
                      rotate: 8,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 15,
                    }}
                    className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#C99B45]/50 bg-[#172A45]  transition-all duration-500 group-hover:border-[#E7C477] lg:mb-10 lg:h-[86px] lg:w-[86px]"
                  >
                    <span className="text-lg font-semibold tracking-wide text-[#E7C477] lg:text-2xl">
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-500 group-hover:border-[#C99B45]/40 group-hover:bg-white/[0.05] group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] lg:min-h-[245px] lg:p-7">

                  {/* Animated Icon */}
                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-[#C99B45]/20 bg-[#C99B45]/10"
                  >
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      className="text-[#E7C477] transition-transform duration-500 group-hover:scale-110"
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold transition-colors duration-300 lg:text-[22px]">
                    {step.title}
                  </h3>
                  {/* Always Visible Description */}
                  <p className="mt-4 text-sm md:text-[16px] text-white/75 leading-7">
                    {step.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-6 h-[2px] w-8 bg-[#C99B45]/50 transition-all duration-500 group-hover:w-16 group-hover:bg-[#E7C477]" />

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Statement */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
          amount: 0.5,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-20 border-t border-white/10 pt-10 text-center sm:mt-24"
      >
        <h3 className="text-2xl font-semibold text-[#F5F7FA] sm:text-3xl lg:text-[34px]">
          Vision. Strategy. Lasting Value.
        </h3>

        <p className="mt-3 text-sm tracking-wide text-white/75 sm:text-base">
          The foundation of our investment approach.
        </p>

        <div className="mx-auto mt-6 h-[2px] w-16 bg-[#C99B45]" />
      </motion.div>

    </section>
  );
}