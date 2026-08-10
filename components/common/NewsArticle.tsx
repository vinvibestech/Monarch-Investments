"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Footer from "./Footer";

interface Trend {
  title: string;
  description: string;
}

interface NewsArticleProps {
  label?: string;
  title: string;
  image: string;
  publishedDate: string;
  category: string;
  author: string;
  company?: string;
  paragraphs: string[];
  trends?: Trend[];
  breadcrumbSource: "home" | "blog";
}

export default function NewsArticle({
  label = "News & Insights",
  title,
  image,
  publishedDate,
  category,
  author,
  company = "Monarch Investments",
  paragraphs,
  trends = [],
  breadcrumbSource,
}: NewsArticleProps) {
  return (
   <>
    <section className="bg-white py-10 pt-30 sm:py-14 sm:pt-30 lg:pt-30 lg:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-20">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-2 text-[11px] text-[#666] sm:text-xs"
        >
          {breadcrumbSource === "home" ? (
            <Link
              href="/#newssection"
              className="shrink-0 transition-colors hover:text-black"
            >
              Home
            </Link>
          ) : (
            <Link
              href="/blog-&-news/#newssection"
              className="shrink-0 transition-colors hover:text-black"
            >
              Blog & News
            </Link>
          )}

          <ChevronRight
            size={13}
            className="shrink-0 text-[#999]"
          />

          <span className="min-w-0 max-w-full truncate text-black sm:max-w-[400px]">
            {title}
          </span>
        </nav>

        {/* Header */}
        <div>
          <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
            {label}
          </span>

          <h1 className="mt-3 w-full max-w-[720px] text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
            {title}
          </h1>
        </div>

        {/* Hero + Meta */}
        <div className="mt-8 grid items-start gap-10 lg:mt-10 lg:grid-cols-[minmax(0,900px)_minmax(140px,160px)] lg:gap-8">

          {/* Main Content */}
          <div className="min-w-0">

            {/* Hero Image */}
            <div className="relative aspect-[1.92/1] w-full overflow-hidden rounded-[12px]">
              <Image
                src={image}
                alt={title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>

            {/* Introduction */}
            <article className="mt-6 w-full max-w-[900px]">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-5 text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[19px] lg:leading-[2]"
                >
                  {paragraph}
                </p>
              ))}
            </article>

            {/* Key Investment Trends */}
            {trends.length > 0 && (
              <div className="mt-14 sm:mt-16 lg:mt-20">

                <h2 className="w-full max-w-[720px] text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:text-[41px] lg:leading-[1.15]">
                  Key Investment Trends
                </h2>

                <div className="mt-8 space-y-9 sm:mt-10 lg:space-y-10">
                  {trends.map((trend) => (
                    <div
                      key={trend.title}
                      className="w-full"
                    >
                      <h3 className="mb-5 text-xl font-semibold leading-tight text-black sm:text-2xl lg:text-[24px]">
                        {trend.title}
                      </h3>

                      <p className="text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[19px] lg:leading-[2]">
                        {trend.description}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            )}
          </div>

          {/* Article Meta */}
          <aside className="w-full min-w-0 text-black lg:pt-1">

            {/* Published */}
            <div>
              <p className="text-sm font-medium sm:text-base lg:text-[14px]">
                Published
              </p>

              <p className="mt-1 text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[19px] lg:leading-[2]">
                {publishedDate}
              </p>
            </div>

            {/* Category */}
            <div className="mt-6">
              <p className="text-sm font-medium sm:text-base lg:text-[14px]">
                Category
              </p>

              <p className="mt-1 text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[19px] lg:leading-[2]">
                {category}
              </p>
            </div>

            {/* Author */}
            <div className="mt-6 w-full">
              <p className="text-sm font-medium sm:text-base lg:text-[14px]">
                Written by
              </p>

              <p className="mt-1 break-words text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[19px] lg:leading-[2]">
                {author}
              </p>

              <p className="break-words text-xs text-[#777] sm:text-[13px]">
                {company}
              </p>
            </div>

          </aside>
        </div>
      </div>
    </section>
    <Footer/>
   </>
  );
}