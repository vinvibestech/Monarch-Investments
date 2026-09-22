"use client";

import Image from "next/image";

const products = [
  {
    title: "Aquaponics Products",
    description:
      "Sustainable farming solutions that combine aquaculture and hydroponics to support efficient food production and innovative agricultural development.",
    image: "/service/AquaponicsProducts.png",

  },
  {
    title: "Investment Information",
    description:
      "Access investment resources, market updates and strategic insights designed to support informed investment decisions and a better understanding of global market opportunities.",
  image: "/service/Investment.png",

  },
  {
    title: "Crypto Information",
    description:
      "Stay informed about blockchain technology, digital assets and emerging cryptocurrency market trends through relevant information and industry insights.",
  image: "/service/CryptoInformation.png",
  
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-20">
        {/* Top */}
      <div className="grid lg:gap-10 xl:gap-50 lg:grid-cols-[530px_1fr]">
          <div>
            <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
              Our Products
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
            Innovative Solutions for Modern Industries
            </h2>
          </div>

          <div>
            <p className="max-w-[560px] text-base mt-5 leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
              Explore Monarch Global Investments’ range of products, information resources and initiatives designed to support sustainable development, business innovation and informed decision-making.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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