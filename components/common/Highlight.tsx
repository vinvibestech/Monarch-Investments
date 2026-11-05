"use client";

import Image from "next/image";

interface AboutHighlightProps {
  label: string;
  title: string;
  description: string;
  tagLine: string;
  image: string;
  imageAlt?: string;
  className?: string;
}

export default function Highlight({
  label,
  title,
  description,
  tagLine,
  image,
  imageAlt = "Image",
  className = "",
}: AboutHighlightProps) {
  return (
    <section className={`pt-30 sm:pt-34 lg:pt-38 ${className}`}>
      <div className="mx-auto w-full">
        {/* Heading */}
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-30">
          <span className="text-sm font-medium text-[#C99B45] sm:text-base lg:text-[16px]">
            {label}
          </span>

          <h2 className="mt-3 max-w-[760px] text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-[41px] lg:leading-[1.2]">
            {title}
          </h2>
        </div>

        {/* Image */}
        <div className="relative mt-10 h-[260px] w-full sm:h-[360px] md:h-[500px] lg:mt-14 lg:h-[620px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Description */}
        <div className="mt-8 flex justify-start px-5 sm:px-8 md:px-12 lg:mt-12  lg:px-16 xl:px-30">
          <div className="max-w-[1230px]">
            <p className="text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
              {description}
            </p>
            {tagLine && (
              <div className=" pt-6">
                <p className="text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
                  {tagLine}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}