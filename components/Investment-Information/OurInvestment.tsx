"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const approachSteps = [
  {
    number: "01",
    title: "Opportunity Identification",
    description:
      "Recognising promising ideas, market developments and potential investment opportunities.",
    image: "/Investment/Opportunity.png",
  },
  {
    number: "02",
    title: "Evaluation & Due Diligence",
    description:
      "Assessing commercial viability, strategic alignment, operational considerations and associated risks.",
    image: "/Investment/Evaluation.png",
  },
  {
    number: "03",
    title: "Strategic Collaboration",
    description:
      "Connecting with relevant stakeholders, industry experts and partners to develop suitable opportunities.",
    image: "/Investment/Strategics.png",
  },
  {
    number: "04",
    title: "Development & Growth",
    description:
      "Supporting the development of viable initiatives through strategic direction, collaboration and resources.",
    image: "/Investment/Development.png",
  },
  {
    number: "05",
    title: "Long-Term Value Creation",
    description:
      "Focusing on sustainable progress, operational development and enduring value.",
    image: "/Investment/Long-Term.png",
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

export default function OurInvestment() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-20">

        {/* SECTION INTRODUCTION */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-[850px]"
        >
          <span className="text-sm font-medium text-[#C99B45] sm:text-base lg:text-[16px]">
            A Thoughtful Approach
          </span>

          <h2 className="font-main mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
            From Opportunity to Sustainable Growth.
          </h2>

          <p className="mt-6 max-w-[880px] text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
            Every opportunity requires a clear understanding of its potential,
            challenges and long-term direction.
          </p>
        </motion.div>

        {/* APPROACH CARDS */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12"
        >
          {approachSteps.map((item) => (
            <motion.article
              key={item.number}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              {/* IMAGE */}

              <div className="relative aspect-[4/2.4] w-full overflow-hidden rounded-2xl bg-[#14233A]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

              

        
              </div>

              {/* CONTENT */}

              <div className="mt-6">

                <h3 className="text-xl font-semibold leading-snug transition-colors duration-300  sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                  {item.description}
                </p>



              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}