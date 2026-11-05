"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const sectors = [
  {
    number: "01",
    title: "Education",
    description:
      "Discover perspectives on educational innovation, learning infrastructure, skill development and the future of education.",
    image: "/about/Educations.png",
  },
  {
    number: "02",
    title: "Tourism",
    description:
      "Explore developments in hospitality, destination development, tourism infrastructure and sustainable travel.",
    image: "/about/Tourisms.png",
  },
  {
    number: "03",
    title: "Energy",
    description:
      "Stay informed about renewable energy, energy innovation, efficiency and the transition towards sustainable energy solutions.",
    image: "/about/Energys.png",
  },
  {
    number: "04",
    title: "Agriculture",
    description:
      "Discover emerging trends in modern farming, agribusiness, agricultural technology and sustainable food systems.",
    image: "/about/Agricultures.png",
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

export default function IndustryFocus() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* SECTION INTRODUCTION */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 max-w-[750px] sm:mb-16"
        >
          <motion.span
            variants={cardVariants}
            className="text-sm font-medium tracking-wide text-[#C99B45] sm:text-base"
          >
            Explore Our Sectors
          </motion.span>

          <motion.h2
            variants={cardVariants}
            className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-[48px]"
          >
            Four Sectors. A World of Possibilities.
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="mt-5 text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]"
          >
            Explore developments and perspectives across the four sectors
            that form the focus of Monarch Global Investments.
          </motion.p>
        </motion.div>

        {/* SECTOR IMAGE GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:gap-x-7 lg:gap-y-14"
        >
          {sectors.map((sector) => (
            <motion.article
              key={sector.number}
              variants={cardVariants}
              className="group"
            >
              {/* IMAGE */}
              <div className="relative aspect-[1.75/1] w-full overflow-hidden rounded-2xl bg-[#14233A]">
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/20 to-transparent opacity-60" />
              </div>

              {/* TITLE */}
              <h3 className="mt-5 text-lg font-semibold tracking-wide sm:text-xl">
                {sector.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 max-w-[500px] text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                {sector.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}