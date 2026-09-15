"use client";

import Image from "next/image";

const products = [
  {
    title: "Hydroponic Growing Solutions",
    description:
      "Efficient growing solutions designed to support the cultivation of vegetables, herbs and leafy greens in soil-free environments.",
    image: "/Aquaponics/Hydroponic.png",

  },
  {
    title: "Complete Aquaponics Systems",
    description:
      "Integrated aquaculture and hydroponic systems designed to create an efficient environment for sustainable food production.",
    image: "/Aquaponics/CompleteAquaponics.png",

  },
  {
    title: "Fish Farming Equipment",
    description:
      "Essential equipment and system components designed to support fish cultivation and help maintain a balanced aquaponics environment.",
    image: "/Aquaponics/FishFarming.png",

  },
  {
    title: "Farming Accessories",
    description:
      "Supporting tools, components and accessories for system installation, operation, maintenance and optimisation.",
    image: "/Aquaponics/FreshHealthy.png",

  },
];

export default function AquaponicsProducts() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-20">
        {/* Top */}
        <div className="">
          <div>
            <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
              Our Aquaponics Products
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
              Integrated Solutions for Sustainable Farming

            </h2>

            {/* Content below title */}
            <div className="mt-5">


              <p className=" text-base leading-7 text-black sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
                Our aquaponics product range is designed to support different applications—from smaller growing environments to scalable food-production projects.

              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:gap-8">
          {products.map((item) => (
            <article key={item.title} className="group">
              {/* Image */}
              <div className="relative aspect-[4/2.4] overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-[24px] font-semibold leading-tight text-black">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-[#1A1A1A] lg:text-[20px] lg:leading-[2]">
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