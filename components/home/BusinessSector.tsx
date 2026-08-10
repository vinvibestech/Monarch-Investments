"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { sectors } from "@/data/sector";

export default function BusinessSector() {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = sectors.length;
  const current = sectors[activeIndex];
  const nextSector = sectors[(activeIndex + 1) % total];

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + total) % total);

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % total);

  return (
    <section className="relative min-h-[700px] lg:h-[760px] overflow-hidden">
      {/* Background */}
      <Image
        key={current.image}
        src={current.image}
        alt={current.label}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full max-w-[1480px] flex-col justify-between px-5 py-10 sm:px-8 md:px-12 lg:px-16 xl:px-24 lg:py-14">

        {/* Top */}
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">

          {/* Left */}
          <div className="max-w-[720px]">
            <span className="text-sm font-medium text-white sm:text-base lg:text-[16px]">
              Our Business Sectors
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
              {current.label}
            </h2>

            <p className="mt-6 max-w-[620px] text-base leading-7 text-white sm:text-lg sm:leading-8 lg:mt-10 lg:text-[20px] lg:leading-[2]">
              {current.description}
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex h-12 w-36 items-center justify-center rounded-full border border-white text-base font-medium text-white transition hover:bg-white hover:text-black sm:h-14 sm:w-40 sm:text-lg lg:mt-16 lg:h-[63px] lg:w-[170px] lg:text-[20px]"
            >
              Learn more
            </Link>
          </div>

          {/* Right */}
          <div className="self-start lg:self-auto">
            <h3 className="text-3xl font-semibold text-white sm:text-4xl lg:text-[44px]">
              {String(activeIndex + 1).padStart(2, "0")}/
              {String(total).padStart(2, "0")}
            </h3>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-6 lg:mt-0 lg:flex-row lg:items-end lg:justify-between">

          <p className="text-lg text-white sm:text-xl lg:text-[24px]">
            Next : {nextSector.label}
          </p>

          <div className="flex gap-4">
            <button
              onClick={goPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white text-white transition hover:bg-white hover:text-black sm:h-14 sm:w-14 lg:h-15 lg:w-15"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white text-white transition hover:bg-white hover:text-black sm:h-14 sm:w-14 lg:h-15 lg:w-15"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}