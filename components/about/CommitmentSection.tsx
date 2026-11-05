"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const commitments = [
  {
    number: "01",
    title: "Responsible Growth",
    description:
      "Supporting sustainable businesses and responsible development.",
    image: "/about/ResponsibleGrowths.png",
  },
  {
    number: "02",
    title: "Trusted Partnerships",
    description:
      "Building relationships founded on integrity, trust and shared goals.",
    image: "/about/TrustedPartnerships.png",
  },
  {
    number: "03",
    title: "Lasting Impact",
    description:
      "Creating meaningful long-term economic and social value.",
    image: "/about/LastingImpact.png",
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
    y: 35,
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

export default function CommitmentSection() {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">

        {/* INTRODUCTION */}

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-20">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 h-[350px] overflow-hidden rounded-2xl sm:h-[450px] md:h-[550px] lg:order-1 lg:h-[600px]"
          >
            <Image
              src="/about/OurCommitment.png"
              alt="Our Commitment"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 pt-2 lg:order-2 lg:pt-3"
          >
            <span className="text-sm font-medium text-[#C99B45] sm:text-base lg:text-[16px]">
              Our Commitment
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
              Growth with Purpose. Value that Lasts.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
              At Monarch Global Investments, our commitment extends beyond
              business growth. We believe in building responsible businesses,
              nurturing meaningful partnerships and creating opportunities
              that contribute to long-term economic and social progress.
            </p>

            <p className="mt-5 text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
              Guided by integrity, innovation and sustainability, we strive
              to create lasting value for our stakeholders and the communities
              we serve.
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-lg font-semibold tracking-tight sm:text-xl lg:text-[24px]">
                Investing Today. Building Tomorrow.
              </p>
            </div>
          </motion.div>
        </div>

        {/* THREE COMMITMENT CARDS */}

        <div className="mt-16 sm:mt-20 lg:mt-24">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {commitments.map((item) => (
              <motion.article
                key={item.number}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                  transition: { duration: 0.3 },
                }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#14233A]/70 transition-colors duration-500"
              >
                {/* CARD IMAGE */}

                <div className="relative aspect-[1.55/1] w-full overflow-hidden bg-[#14233A]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/30 to-transparent" />
                </div>

                {/* CARD CONTENT */}

                <div className="relative flex min-h-[190px] flex-col p-6 sm:p-7">

                  <span className="text-sm font-semibold tracking-wider text-[#C99B45]">
                    {item.number}
                  </span>

                  <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
                    {item.description}
                  </p>

                  {/* BOTTOM ACCENT */}

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C99B45] transition-all duration-500 group-hover:w-full" />

                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}