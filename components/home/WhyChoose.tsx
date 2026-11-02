"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

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
      {/* Why Choose Section */}
      <section className="overflow-hidden pt-14 sm:pt-16 lg:pt-22">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-26">

          {/* Heading */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.span
              variants={fadeUp}
              className="block text-base font-medium sm:text-lg lg:text-[16px]"
            >
              Why Choose Monarch Investments
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-4 w-full max-w-[720px] text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]"
            >
              Strategic Investment. Sustainable Value.
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="mt-8 max-w-[1380px] lg:mt-10"
            >
              <motion.p
                variants={fadeUp}
                className="text-base leading-7 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]"
              >
                At Monarch Global Investments, we focus on strategic
                investment solutions designed to create sustainable
                value. Through industry expertise, responsible business
                practices and trusted partnerships, we support businesses
                and investors in pursuing long-term growth.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-6 text-base leading-7 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]"
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

            {/* Image Cards Grid */}
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
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-3 sm:p-4"
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

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-black/0" />
                  </div>

                  {/* Card Content */}
                  <div className="px-1 pb-3 pt-4 sm:px-1 sm:pt-5">

                    <div className="flex items-center justify-between gap-3">
                      <h4 className="text-xl font-semibold text-[#F5F7FA] sm:text-[22px]">
                        {pillar.title}
                      </h4>

                      <span className="text-sm font-medium tracking-wider text-[#AAB7C9]">
                        {pillar.number}
                      </span>
                    </div>

                    <p className="mt-3 max-w-[550px] text-sm leading-6 text-[#AAB7C9] sm:text-base sm:leading-7">
                      {pillar.description}
                    </p>

                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 md:px-12 lg:px-16 lg:pb-10 lg:pt-24 xl:px-26">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.span
            variants={fadeUp}
            className="block text-sm font-medium sm:text-base lg:text-[16px]"
          >
            Our Approach
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]"
          >
            Vision. Strategy. Sustainable Growth.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-base leading-7 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]"
          >
            Every opportunity begins with a clear vision, careful
            analysis and strategic planning. Monarch Global Investments
            combines market insight, responsible decision-making and
            strategic partnerships to support opportunities with
            long-term potential.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-7 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]"
          >
            We believe sustainable growth is built through strong
            foundations, meaningful partnerships and consistent
            innovation.
          </motion.p>
        </motion.div>

      </section>
    </>
  );
}