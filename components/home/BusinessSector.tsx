"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { sectors } from "@/data/sector";
import {
  motion,
  AnimatePresence,
  type Variants,
} from "framer-motion";

export default function BusinessSector() {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = sectors.length;

  if (total === 0) return null;

  const current = sectors[activeIndex];
  const nextSector = sectors[(activeIndex + 1) % total];

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Content Animation
  const contentVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 35,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: "blur(5px)",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="businessSector" className="relative min-h-[700px] overflow-hidden lg:h-[760px]">

      {/* Background Image Slider */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current.image}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeInOut" },
            scale: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
          }}
          className="absolute inset-0"
        >
          <Image
            src={current.image}
            alt={current.label}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full min-h-[700px] max-w-[1480px] flex-col justify-between px-5 py-10 sm:px-8 md:px-12 lg:h-[760px] lg:px-16 lg:py-14 xl:px-27">

        {/* Top Section */}
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">

          {/* Left Content */}
          <div className="max-w-[720px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={current.label}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >

                {/* Label */}
                <motion.span
                  variants={itemVariants}
                  className="block text-sm font-medium text-[#C99B45] sm:text-base lg:text-[16px]"
                >
                  Our Business Sectors
                </motion.span>

                {/* Heading */}
                <motion.h2
                  variants={itemVariants}
                  className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]"
                >
                  {current.label}
                </motion.h2>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className="mt-6 max-w-[620px] text-base leading-7 sm:text-lg sm:leading-8 lg:mt-10 lg:text-[20px] lg:leading-[2]"
                >
                  {current.description}
                </motion.p>

                {/* Button */}
                <motion.div
                  variants={itemVariants}
                  className="mt-8 lg:mt-16"
                >

                                                     <Link
               href={`/business-sectors/${current.label.toLowerCase()}`}
              className="group inline-flex items-center gap-3 rounded-full border border-white px-7 py-3.5 text-sm md:text-[16px] font-semibold  transition-all duration-300 hover:border-[#C99B45] hover:bg-[#C99B45] hover:text-[#172A45]"
            >
             Learn more

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
                </motion.div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Counter */}
          <motion.div
            key={`counter-${activeIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="self-start lg:self-auto"
          >
            <h3 className="text-3xl font-semibold sm:text-4xl lg:text-[44px]">
              {String(activeIndex + 1).padStart(2, "0")}/
              {String(total).padStart(2, "0")}
            </h3>
          </motion.div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col gap-6 lg:mt-0 lg:flex-row lg:items-end lg:justify-end">



          {/* Navigation Buttons */}
          <div className="flex gap-4">

            <motion.button
              type="button"
              onClick={goPrev}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.2 }}
              aria-label="Previous sector"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white transition-colors duration-300 hover:border-[#C99B45] hover:bg-[#C99B45] hover:text-[#172A45] sm:h-14 sm:w-14 lg:h-[60px] lg:w-[60px]"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              type="button"
              onClick={goNext}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.2 }}
              aria-label="Next sector"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white transition-colors duration-300 hover:border-[#C99B45] hover:bg-[#C99B45] hover:text-[#172A45] sm:h-14 sm:w-14 lg:h-[60px] lg:w-[60px]"
            >
              <ChevronRight size={24} />
            </motion.button>

          </div>
        </div>

      </div>
    </section>
  );
}