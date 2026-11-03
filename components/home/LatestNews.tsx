"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { news } from "@/data/news";

interface LatestNewsProps {
  limit?: number;
  source?: "home" | "blog";
}

// ================= ANIMATIONS =================

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ================= ARTICLE LINK =================

function ArticleLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="group/link inline-flex items-center gap-2 text-sm font-semibold transition-colors "
    >
      <span className="relative">
        Read Article
      </span>

      <ArrowRight
        size={17}
        className="transition-transform duration-300 group-hover/link:translate-x-1"
      />
    </Link>
  );
}

// ================= LATEST NEWS =================

export default function LatestNews({
  limit,
  source = "blog",
}: LatestNewsProps) {
  const displayedNews = limit
    ? news.slice(0, limit)
    : news;

  const categories = [
    "Investment",
    "Energy",
    "Education",
    "Agriculture",
    "Tourism",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b py-2  sm:py-2 lg:py-3">

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-22">


        {/* ================= NEWS GRID ================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.12,
          }}
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >

          {displayedNews.map((item, index) => (

            <motion.article
              key={item.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.35,
                  ease: "easeOut",
                },
              }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#14233A]/70 transition-colors duration-500 "
            >

              {/* ================= IMAGE ================= */}

              <div className="relative h-[230px] shrink-0 overflow-hidden sm:h-[250px]">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/30 to-transparent opacity-60" />

   

              </div>

              {/* ================= CONTENT ================= */}

              <div className="flex flex-1 flex-col p-5 sm:p-6">

                {/* Category and Date */}
                <div className="flex items-center justify-between gap-3">

                  <span className="text-xs font-semibold  tracking-wider text-[#C99B45]">
                    {categories[index % categories.length]}
                  </span>

                  <span className="text-xs text-[#8795A9]">
                    {item.year} · Publication date
                  </span>

                </div>

                {/* Article Title */}
                <h3 className="mt-4 line-clamp-2 min-h-[56px] text-xl font-semibold leading-snug  transition-colors duration-300 ">
                  {item.title}
                </h3>

                {/* Article Description */}
                <p className="mt-3 line-clamp-3 min-h-[72px] text-sm leading-6 text-[#AAB7C9]">
                  {item.description}
                </p>

                {/* Read Article */}
                <div className="mt-auto border-t border-white/10 pt-5">

                  <ArticleLink
                    href={`/blog-&-news/${item.id}?from=${source}`}
                  />

                </div>

              </div>

            </motion.article>

          ))}

        </motion.div>

        {/* ================= VIEW ALL ARTICLES ================= */}

        {source === "home" && (

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-12 flex justify-center"
          >

            <Link
              href="/blog-&-news"
              className="group inline-flex items-center gap-3 rounded-full border border-[#C99B45]/50 px-7 py-3.5 text-sm md:text-[16px] font-semibold text-[#E7C477] transition-all duration-300 hover:border-[#C99B45] hover:bg-[#C99B45] hover:text-[#172A45]"
            >
              Explore All Insights

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </motion.div>

        )}

      </div>
    </section>
  );
}