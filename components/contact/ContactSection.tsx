"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
export default function ContactSection() {
  return (
    <section className="py-2 sm:py-2 lg:py-2">
      <div className="mx-auto w-full w-[1440px] px-6 sm:px-10 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 xl:gap-28">

          {/* Contact Information */}
          <div className="space-y-12 sm:space-y-14">

            {/* Office Address */}
            <div>
              <h3 className="text-2xl font-medium leading-tight  sm:text-[22px]">
                Office Address
              </h3>

              <p className="mt-4 text-lg leading-8 sm:text-xl lg:text-[18px]">
              Dubai, United Arab Emirates
              </p>
            </div>

            {/* Phone */}
            {/* <div>
              <h3 className="text-2xl font-medium leading-tight  sm:text-[22px]">
                Phone Number
              </h3>

              <p className="mt-4 text-lg leading-8 sm:text-xl lg:text-[18px]">
                +971 XX XXX XXXX
              </p>
            </div> */}

            {/* Email */}
            <div>
              <h3 className="text-2xl font-medium leading-tight  sm:text-[22px]">
                Email Address
              </h3>

              <p className="mt-4 break-words text-lg leading-8 sm:text-xl lg:text-[18px]">
              monarchinvestmentsglobal@gmail.com
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <form className="w-full">

            {/* Full Name */}
            <div className="border-b border-[#555]">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="h-[52px] w-full bg-transparent text-lg  outline-none placeholder sm:text-xl lg:text-[18px]"
              />
            </div>

            {/* Email + Number */}
            <div className="mt-7 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-10">

              <div className="border-b border-[#555]">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="h-[52px] w-full bg-transparent text-lg  outline-none placeholder sm:text-xl lg:text-[18px]"
                />
              </div>

              <div className="border-b border-[#555]">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Number"
                  className="h-[52px] w-full bg-transparent text-lg  outline-none placeholder sm:text-xl lg:text-[18px]"
                />
              </div>

            </div>

            {/* Message */}
            <div className="mt-7 border-b border-[#555]">
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="min-h-[145px] w-full resize-none bg-transparent pt-3 text-lg  outline-none placeholder sm:text-xl lg:text-[18px]"
              />
            </div>

            {/* Submit */}
            <div className="mt-10 flex justify-center sm:mt-12">
                <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full border border-[#C99B45]/50 px-7 py-3.5 text-sm md:text-[16px] font-semibold text-[#E7C477] transition-all duration-300 hover:border-[#C99B45] hover:bg-[#C99B45] hover:text-[#172A45]"
              >
                Submit

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
}