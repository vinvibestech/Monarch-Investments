


"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactUsSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home/homecontact.png"
          alt="Dubai skyline at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-[2048px] items-center px-6 py-20 sm:min-h-[650px] sm:px-10 md:px-14 lg:min-h-[680px] lg:px-20 xl:px-[8.7%]">
        <div className="w-full max-w-[1100px]">
          {/* Top Line */}
         
          {/* Heading */}
          <h2
            className="mt-4 w-full max-w-[720px] text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]"
          >
       Let’s Build the Future Together
          </h2>

          {/* Description */}
          <p
            className="mt-6 w-full max-w-[620px] text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 md:text-xl lg:mt-10 lg:text-[20px] lg:leading-[2]"
          >
      Explore our investment sectors, services and strategic opportunities, or connect with Monarch Global Investments to learn more.
          </p>

          {/* Button */}

            <Link
              href="/about"
              className="mt-8 inline-flex h-14 w-40 items-center justify-center rounded-full border border-black text-black text-lg font-medium hover:bg-black hover:text-white sm:h-16 sm:w-48 sm:text-xl lg:mt-16 lg:h-[63px] lg:w-[170px] lg:text-[20px]"
            >
             Contact Us
            </Link>
        </div>
      </div>
    </section>
  );
}