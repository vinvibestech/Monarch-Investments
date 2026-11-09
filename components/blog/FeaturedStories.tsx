"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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

export default function FeaturedStories() {
    return (
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

                    {/* LEFT SIDE - CONTENT */}

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="max-w-[650px]"
                    >
                        <motion.span
                            variants={itemVariants}
                            className="text-sm font-medium text-[#C99B45] sm:text-base"
                        >
                            Editor's Picks
                        </motion.span>

                        <motion.h2
                            variants={itemVariants}
                            className="font-main mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-[41px] lg:leading-[1.15]"
                        >
                            Perspectives Worth Exploring.
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="mt-5 text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]"
                        >
                            Discover selected articles, industry developments and ideas
                            that offer valuable perspectives on the changing world of
                            business and investment.
                        </motion.p>

                    </motion.div>

                    {/* RIGHT SIDE - IMAGE */}

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
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl sm:aspect-[16/9] lg:aspect-[5/3]">
                            <Image
                                src="/blog/EditorPicks.png"
                                alt="Featured business and investment stories"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}