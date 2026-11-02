"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

export default function Hero() {

    // Heading animation variants
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
        <section className="relative h-[100svh] min-h-[700px] w-full overflow-hidden">

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
                    src="/home/heroSectionVideo.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Main Content */}
            <div className="relative z-20 flex h-full items-start pt-28 lg:items-center lg:pt-0">

                <div className="mx-auto w-full max-w-7xl px-6 sm:px-0">

                    <div className="w-full max-w-4xl">

                        {/* Animated Heading */}
                        <motion.h1
                            className="text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.1]"
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
                                        className="mr-[0.25em] inline-block"
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
                                        className="mr-[0.25em] inline-block"
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
                            className="mt-6 max-w-3xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7 md:text-lg lg:mt-8"
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
                            className="mt-8 lg:mt-12"
                        >
                            <Link
                                href="/about"
                                className="inline-flex h-14 w-40 items-center justify-center rounded-full border border-[#F5F7FA] text-lg font-medium text-[#F5F7FA] transition-all duration-300 hover:bg-[#F5F7FA] hover:text-black sm:h-16 sm:w-48 sm:text-xl lg:h-[60px] lg:w-[250px] lg:text-[20px]"
                            >
                                Explore Our Investment
                            </Link>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}