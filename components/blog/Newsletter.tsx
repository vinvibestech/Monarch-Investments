"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscription email:", email);
  };

  return (
    <section className="py-16 sm:pt-20 lg:pt-17">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-center gap-10 border-y border-white/15 py-12 sm:py-16 lg:grid-cols-[1fr_0.85fr] lg:gap-20 lg:py-20"
        >
          {/* LEFT CONTENT */}
          <div className="max-w-[650px]">
            <motion.span
              variants={itemVariants}
              className="block text-base font-medium text-[#C99B45] sm:text-lg lg:text-[16px]"
            >
              Stay Informed
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="font-main mt-4 w-full max-w-[720px] text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]"
            >
              Stay Connected to What Matters.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-3 w-full max-w-[620px] text-white/75 text-base leading-7 sm:text-lg sm:leading-8 md:text-xl lg:mt-4 lg:text-[20px] lg:leading-[2]"
            >
              Get access to selected insights, industry perspectives and
              important updates from Monarch Global Investments.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-3 w-full max-w-[620px] text-white/75 text-base leading-7 sm:text-lg sm:leading-8 md:text-xl lg:mt-3 lg:text-[20px] lg:leading-[2]"
            >
              Subscribe to receive relevant updates and perspectives from
              the industries shaping tomorrow.
            </motion.p>
          </div>

          {/* RIGHT CONTENT */}
          <motion.div variants={itemVariants} className="w-full">
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="newsletter-email"
                className="mb-3 block text-sm font-medium text-white"
              >
                Your Email Address
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="h-14 min-w-0 flex-1 border rounded-full border-white/20 bg-transparent px-4 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-[#C99B45]"
                />
              </div>
              <div className="pt-5">

              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full border border-[#C99B45]/50 px-7 py-3.5 text-sm md:text-[16px] font-semibold text-[#E7C477] transition-all duration-300 hover:border-[#C99B45] hover:bg-[#C99B45] hover:text-[#172A45]"
              >
              Subscribe to Updates


                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
              </div>
    
            </form>

            <p className="mt-5 text-xs leading-6 text-[#AAB7C9]/70">
              By subscribing, you agree to receive communications from
              Monarch. You can unsubscribe at any time. Read our{" "}
              <Link
                href="/privacy-policy"
                className="text-[#E7C477] underline underline-offset-4 hover:text-white"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}