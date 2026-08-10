"use client";

import Image from "next/image";
import Link from "next/link";
import { galleryCategories } from "@/data/gallery";

export default function GalleryCategories() {
  return (
    <section id="gallerysection" className="bg-white pt-1 pb-16 sm:py-20 lg:py-10">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-12 lg:px-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">

          {/* Left Heading */}
          <div className="lg:pt-2">
            <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
              Gallery
            </span>

            <h2 className="mt-5 max-w-[520px] text-4xl font-semibold leading-[1.15] text-black sm:text-5xl md:text-[52px] lg:text-[41px] xl:text-[48px]">
              Gallery Categories
            </h2>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-x-9 lg:gap-y-10">
            {galleryCategories.map((item) => (
              <Link
                key={item.id}
                href={`/gallery-&-testimonials/${item.slug}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative aspect-[1.75/1] w-full overflow-hidden rounded-[12px]">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title */}
                <h3 className=" mt-4 text-3xl font-semibold leading-none text-black lg:text-[26px]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-[480px] text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[18px] lg:leading-[2]]">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}