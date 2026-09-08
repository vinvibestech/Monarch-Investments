"use client";

import Image from "next/image";

export default function CommitmentSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* Left Image */}
          <div className="relative order-2 h-[350px] overflow-hidden rounded-2xl sm:h-[450px] md:h-[550px] lg:order-1 lg:h-[600px]">
            <Image
              src="/about/OurCommitment.png" 
              alt="Our Commitment"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 pt-2 lg:order-2 lg:pt-3">
            <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
              Our Commitment
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
          Creating Lasting Value
            </h2>

            <p className="text-base mt-5 leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
             At Monarch Global Investments, we believe successful investment goes beyond capital.
            </p>

            <p className="text-base mt-5 leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
             It requires vision, integrity, knowledge, strategic relationships, innovation, and responsible execution.

            </p>

            <p className="text-base mt-5 leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
            We are committed to supporting sustainable businesses, strengthening strategic partnerships, encouraging innovation, and creating lasting value for our stakeholders and the communities in which our businesses operate.

            </p>

            <p className="text-base mt-5 leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
            Our ambition is clear: to build a diversified global investment ecosystem where business growth and sustainable progress move forward together.

            </p>
              <div className="mt-8 border-t border-black/10 pt-6">
              <p className="text-lg font-semibold tracking-tight text-black sm:text-xl lg:text-[24px]">
                Investing Today. Building Tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}