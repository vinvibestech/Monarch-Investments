"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

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
    y: 25,
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

export default function BuildingTogether() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

          {/* LEFT SIDE - TEXT ONLY */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-[650px]"
          >
            <motion.span
              variants={itemVariants}
              className="text-sm font-medium text-[#C99B45] sm:text-base lg:text-[16px]"
            >
              Building Together
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]"
            >
              Stronger Partnerships.
              
                Greater Possibilities.
    
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="mt-8 space-y-5 lg:mt-9"
            >
              <p className="mt-6 text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
                Meaningful opportunities are often created when the right
                people, expertise and resources come together.
              </p>

              <p className="mt-6 text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
                We welcome conversations with entrepreneurs, business owners,
                investors, industry specialists and organisations interested
                in exploring strategic collaborations.
              </p>

              <p className="mt-6 text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
                Whether it involves developing a new venture, expanding an
                existing business or exploring opportunities across our focus
                sectors, we believe the right partnerships can unlock greater
                possibilities.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - IMAGE ONLY */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="relative aspect-[4/4.2] w-full rounded-2xl overflow-hidden sm:aspect-[5/4] lg:aspect-[4/4.5]">
              <Image
                src="/Investment/Building.png"
                alt="Strategic business partnership and collaboration"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}