"use client";

import Image from "next/image";

const features = [
  {
    title: "Fresh & Healthy Produce",
    description:
      "Grow fresh vegetables, herbs, and leafy greens naturally while maintaining high quality and nutritional value.",
    image: "/home/hero.png",
  },
  {
    title: "Water Efficient",
    description:
      "Uses up to 90% less water than traditional farming methods through continuous water recycling.",
    image: "/home/hero.png",
  },
  {
    title: "Eco-Friendly System",
    description:
      "Supports sustainable food production with minimal waste and reduced environmental impact.",
    image: "/home/hero.png",
  },
];

export default function WhyChooseAquaponics() {
  return (
    <section className="bg-white py-16 lg:pt-5">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-18">
        {/* Top */}
        <div className="grid lg:gap-10 xl:gap-50 lg:grid-cols-[530px_1fr]">
          <div>
            <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
             Why Choose Aquaponics?
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
           Sustainable Agriculture
            </h2>
          </div>

          <div>
            <p className="max-w-[560px] text-base mt-5 leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
         Aquaponics promotes environmentally responsible farming by reducing water consumption and eliminating the need for chemical fertilizers.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => (
            <article
              key={item.title}
              className="group relative h-[560px] overflow-hidden rounded-2xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-[22px] font-semibold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg leading-[1.8] text-white/95">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}