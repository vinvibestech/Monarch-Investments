"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full w-7xl px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
        {/* Top */}
        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="text-base font-medium text-black sm:text-lg lg:text-[16px]">
              About us
            </span>

            <h2 className="mt-4 w-full max-w-[720px] text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
              Building Sustainable Growth Through Strategic Investments
            </h2>

            <p className="mt-6 w-full max-w-[620px] text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 md:text-xl lg:mt-10 lg:text-[20px] lg:leading-[2]">
              Monarch Investments is a diversified investment company focused
              on Education, Tourism, Energy, and Agriculture. We create
              sustainable opportunities through innovation, strategic
              partnerships, and responsible investments that deliver long-term
              value.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex h-14 w-40 items-center justify-center rounded-full border border-black text-black text-lg font-medium hover:bg-black hover:text-white sm:h-16 sm:w-48 sm:text-xl lg:mt-16 lg:h-[63px] lg:w-[170px] lg:text-[20px]"
            >
              About Us
            </Link>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-[12px]">
              <Image
                src="/home/hero.png"
                alt="Building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-28 lg:grid-cols-3">
          <div className="text-center">
            <p className="text-lg text-black sm:text-xl lg:text-[24px]">
              Investment Value
            </p>

            <h3 className="mt-4 text-4xl text-black font-semibold sm:text-5xl lg:mt-8 lg:text-[56px]">
              AED 500M+
            </h3>
          </div>

          <div className="text-center">
            <p className="text-lg text-black sm:text-xl lg:text-[24px]">
              Investors
            </p>

            <h3 className="mt-4 text-4xl font-semibold text-black sm:text-5xl lg:mt-8 lg:text-[56px]">
              250+
            </h3>
          </div>

          <div className="text-center sm:col-span-2 lg:col-span-1">
            <p className="text-lg text-black sm:text-xl lg:text-[24px]">
              Partner Companies
            </p>

            <h3 className="mt-4 text-4xl text-black font-semibold sm:text-5xl lg:mt-8 lg:text-[56px]">
              50+
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}