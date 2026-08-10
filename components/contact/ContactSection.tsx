"use client";

import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-white py-2 sm:py-2 lg:py-2">
      <div className="mx-auto w-full w-[1440px] px-6 sm:px-10 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 xl:gap-28">

          {/* Contact Information */}
          <div className="space-y-12 sm:space-y-14">

            {/* Office Address */}
            <div>
              <h3 className="text-2xl font-medium leading-tight text-black sm:text-[22px]">
                Office Address
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#111] sm:text-xl lg:text-[18px]">
                Dubai, United Arab Emirates
              </p>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-2xl font-medium leading-tight text-black sm:text-[22px]">
                Phone Number
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#111] sm:text-xl lg:text-[18px]">
                +971 XX XXX XXXX
              </p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-2xl font-medium leading-tight text-black sm:text-[22px]">
                Email Address
              </h3>

              <p className="mt-4 break-words text-lg leading-8 text-[#111] sm:text-xl lg:text-[18px]">
                info@monarchinvestments.com
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
                className="h-[52px] w-full bg-transparent text-lg text-black outline-none placeholder:text-[#111] sm:text-xl lg:text-[18px]"
              />
            </div>

            {/* Email + Number */}
            <div className="mt-7 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-10">

              <div className="border-b border-[#555]">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="h-[52px] w-full bg-transparent text-lg text-black outline-none placeholder:text-[#111] sm:text-xl lg:text-[18px]"
                />
              </div>

              <div className="border-b border-[#555]">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Number"
                  className="h-[52px] w-full bg-transparent text-lg text-black outline-none placeholder:text-[#111] sm:text-xl lg:text-[18px]"
                />
              </div>

            </div>

            {/* Message */}
            <div className="mt-7 border-b border-[#555]">
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="min-h-[145px] w-full resize-none bg-transparent pt-3 text-lg text-black outline-none placeholder:text-[#111] sm:text-xl lg:text-[18px]"
              />
            </div>

            {/* Submit */}
            <div className="mt-10 flex justify-center sm:mt-12">
              <button
                type="submit"
                className="flex h-[68px] w-[220px] items-center justify-center gap-5 rounded-full border border-black text-xl font-medium text-black transition-all duration-300 hover:bg-black hover:text-white sm:w-[220px] lg:text-[18px]"
              >
                <span>Submit</span>
              </button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
}