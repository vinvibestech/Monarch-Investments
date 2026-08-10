"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { news } from "@/data/news";

interface LatestNewsProps {
  limit?: number;
}
interface LatestNewsProps {
  limit?: number;
  source?: "home" | "blog";
}

export default function LatestNews({
  limit,
  source = "blog",
}: LatestNewsProps) {
  const displayedNews = limit ? news.slice(0, limit) : news;

  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-20">

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {displayedNews.map((item) => (
            <article
              key={item.id}
              className="group rounded-[12px] bg-[#F4F4F4] p-4 lg:p-5 transition-all"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-6">
                <span className="text-[32px] font-semibold text-black">
                  {item.year}
                </span>

                <div className="relative h-[180px] w-[48%] overflow-hidden rounded-[12px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-[28px] font-semibold text-black leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-[20px] leading-[1.8] text-[#1A1A1A]">
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="mt-8 flex justify-end text-black">
                <Link
                  href={`/blog-&-news/${item.id}?from=${source}`}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-black transition hover:bg-black hover:text-white"
                >
                  <ChevronRight size={24} />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}