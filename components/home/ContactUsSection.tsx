


"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ContactUsSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home/homecontacts.png"
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
            className="mt-4 w-full max-w-[720px] text-3xl font-semibold leading-tight  sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]"
          >
       The Next Opportunity Starts with a Conversation.
          </h2>

          {/* Description */}
          <p
            className="mt-6 w-full max-w-[620px] text-base leading-7 pb-6 sm:text-lg sm:leading-8 md:text-xl lg:mt-10 lg:text-[20px] lg:leading-[2]"
          >
Connect with Monarch Global Investments to explore strategic opportunities, build meaningful partnerships and create lasting value across diverse sectors.

          </p>
          <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full border border-[#C99B45]/50 px-7 py-3.5 text-sm md:text-[16px] font-semibold text-[#E7C477] transition-all duration-300 hover:border-[#C99B45] hover:bg-[#C99B45] hover:text-[#172A45]"
              >
                Contact Us

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
        </div>
      </div>
    </section>
  );
}