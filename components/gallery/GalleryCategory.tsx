"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface GalleryImage {
  id: number;
  image: string;
}

interface GalleryCategoryProps {
  title: string;
  description: string;
  images: GalleryImage[];
}

export default function GalleryCategory({
  title,
  description,
  images,
}: GalleryCategoryProps) {
  const [selectedImage, setSelectedImage] = useState(
    images[0]?.image || ""
  );

  return (
    <section className="bg-white py-10 pt-30 sm:py-14 sm:pt-30 lg:pt-30 lg:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-12 lg:px-20">

        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-[#666]">
          <Link
            href="/gallery-&-testimonials#gallerysection"
            className="transition hover:text-black"
          >
            Gallery
          </Link>

          <ChevronRight size={14} />

          <span className="text-black">
            {title}
          </span>
        </nav>

        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* Left Content */}
          <div>
            <span className="text-sm font-medium text-black sm:text-base">
              News & Insights
            </span>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-[41px] lg:leading-[1.15]">
              {title}
            </h1>

            <p className="mt-6 max-w-[520px] text-base leading-8 text-[#1A1A1A] sm:text-lg lg:text-[20px] lg:leading-[2]">
              {description}
            </p>
          </div>

          {/* Main Image */}
          <div className="relative aspect-[1.8/1] w-full overflow-hidden rounded-[12px]">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt={title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-opacity duration-300"
              />
            )}
          </div>
        </div>

        {/* Gallery Images */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-12 lg:grid-cols-6 lg:gap-4">
          {images.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedImage(item.image)}
              className={`group relative aspect-[1.45/1] overflow-hidden rounded-[12px] text-left transition-all ${
                selectedImage === item.image
                  ? "ring-1 ring-black/40 "
                  : ""
              }`}
            >
              <Image
                src={item.image}
                alt={`${title} ${item.id}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}