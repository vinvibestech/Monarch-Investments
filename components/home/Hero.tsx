"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
    const letterVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 35,
            filter: "blur(8px)",
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.7,
                delay: 0.4 + i * 0.035,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    const firstLine = "Invest Beyond Boundaries.";
    const secondLine = "Grow Beyond Expectations.";

    return (
        <section className="relative min-h-[650px] h-[100svh] w-full overflow-hidden bg-[#101D32]">

            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source
                    src="/home/heroSection.MOV"
                    type="video/mp4"
                />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />

            {/* Main Content */}
            <div className="relative z-20 flex h-full items-start pt-32 sm:pt-36 md:pt-40 lg:items-center lg:pt-16">

                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-10 xl:px-0">

                    <div className="w-full max-w-4xl">

                        {/* Animated Heading */}
                        <motion.h1
                            className="
                                font-main font-black text-white
                                text-[32px] leading-[1.2]
                                sm:text-[40px] sm:leading-[1.15]
                                md:text-[48px]
                                lg:text-[56px] lg:leading-[1.1]
                                xl:text-[54px]
                                2xl:text-[62px]
                            "
                        >

                            {/* First Line */}
                            <span className="block">
                                {firstLine.split(" ").map((word, i) => (
                                    <motion.span
                                        key={`first-${i}`}
                                        custom={i}
                                        variants={letterVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="mr-[0.2em] inline-block"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </span>

                            {/* Second Line */}
                            <span className="block">
                                {secondLine.split(" ").map((word, i) => (
                                    <motion.span
                                        key={`second-${i}`}
                                        custom={i + 4}
                                        variants={letterVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="mr-[0.2em] inline-block"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </span>

                        </motion.h1>

                        {/* Animated Description */}
                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 25,
                                filter: "blur(5px)",
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                            }}
                            transition={{
                                duration: 0.9,
                                delay: 1.15,
                                ease: "easeOut",
                            }}
                            className="
                                mt-5
                                max-w-2xl
                                text-sm leading-6
                                text-white/85
                                sm:mt-6 sm:text-base sm:leading-7
                                md:text-lg
                                lg:mt-8 lg:max-w-3xl
                            "
                        >
                            Strategic investment opportunities designed to
                            create lasting value and sustainable growth.
                        </motion.p>

                        {/* Animated Button */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 25,
                                scale: 0.95,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 1.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mt-7 sm:mt-9 lg:mt-12"
                        >
                   
                                       <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-[#C99B45]/50 px-7 py-3.5 text-sm md:text-[16px] font-semibold text-[#E7C477] transition-all duration-300 hover:border-[#C99B45] hover:bg-[#C99B45] hover:text-[#172A45]"
            >
             Explore Our Investment

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}