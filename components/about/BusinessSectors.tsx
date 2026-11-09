"use client";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
const sectors = [
  {
       number: "01",
    title: "Education",
    description:
      "Investing in educational initiatives and solutions that encourage knowledge, skill development, innovation, and opportunities for future generations.",
       image: "/about/Education.png",
  },
  {
     number: "02",
    title: "Tourism",
    description:
      "Supporting sustainable tourism and hospitality opportunities designed to connect people, destinations, cultures, and economic potential.",
       image: "/about/Tourism.png",
  },
  {
     number: "03",
    title: "Energy",
    description:
      "Advancing innovative and future-focused energy initiatives that contribute to cleaner, more efficient, and sustainable development.",
       image: "/about/Energys.png",
  },
  {
     number: "04",
    title: "Agriculture",
    description:
      "Supporting modern agriculture, sustainable farming, agribusiness innovation, and initiatives that strengthen food security and responsible resource management.",
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

export default function BusinessSectors() {
  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">

        <div className="grid gap-12 lg:grid-cols-[340px_1fr] lg:gap-24">

          {/* LEFT SIDE */}

          <div>
            <h2 className="font-main w-[280px] text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-[41px] lg:leading-[1.15]">
              Our Business
              <br />
              Sectors
            </h2>
          </div>

          {/* RIGHT SIDE - IMAGE GRID */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-7 lg:gap-y-12"
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

                <p className="mt-2 max-w-[500px] text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[19px]">
                  {sector.description}
                </p>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}