"use client";

import Image from "next/image";

interface ApproachSectionProps {
  label: string;
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  hero?: boolean;
}

const sections: ApproachSectionProps[] = [
  {
    label: "Our Approach",
    title: "Analyse. Plan. Execute.",
    paragraphs: [
      "At Monarch Global Investments, every opportunity begins with understanding.",
      "We evaluate markets, business potential, industry dynamics, operational requirements, risks, and long-term opportunities before developing a strategic direction.",
      "Our approach combines market insight, strategic planning, partnerships, innovation, and disciplined execution to transform opportunities into sustainable businesses.",
      "We believe lasting growth is not created through short-term decisions. It is built through strong foundations, continuous improvement, responsible leadership, and carefully planned expansion.",
    ],
    image: "/about/OurApproach.png",
    imageAlt: "Our Approach",
    hero: true,
  },
  {
    label: "Strategic Partnerships & Alliances",
    title: "Connecting Expertise. Creating Opportunity.",
    paragraphs: [
      "Strategic partnerships are an important part of Monarch Global Investments’ growth model.",
      "Where appropriate, we collaborate with businesses, entrepreneurs, specialists, investors, and organisations through strategic alliances, contractual partnerships, and joint ventures.",
      "By connecting complementary expertise, market access, operational capabilities, and international networks, we aim to create mutually beneficial relationships capable of generating sustainable long-term value.",
    ],
    image: "/about/Partnerships.png",
    imageAlt: "Strategic Partnerships",
  },
  {
    label: "Our Group",
    title: "A Unified Platform for Growth",
    paragraphs: [
      "Monarch Global Investments serves as the core holding platform supporting and overseeing businesses operating across multiple industries.",
      "Our group structure is designed to provide clear leadership, transparent operations, strategic coordination, and a common long-term direction across our businesses and partnerships.",
      "The Monarch ecosystem includes ventures and strategic interests such as Mazra Care, Royal Falcon Innovation, and Royal Falcon Sustainable Tobacco Manufacturing, Export & Import, alongside future businesses and investment initiatives developed under the Monarch Global Investments umbrella.",
      "This integrated structure enables the Group to share expertise, strengthen governance, identify cross-sector opportunities, and build a stronger global presence.",
    ],
    image: "/about/OurGroup.png",
    imageAlt: "Our Group",
    reverse: true,
  },
];

function Content({
  label,
  title,
  paragraphs,
}: Omit<
  ApproachSectionProps,
  "image" | "imageAlt" | "reverse" | "hero"
>) {
  return (
    <div className="w-full">
      {/* Label */}
      <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
        {label}
      </span>

      {/* Title */}
      <h2
        className="
          mt-3
          max-w-[720px]
          text-3xl
          font-semibold
          leading-[1.2]
          text-black
          sm:mt-4
          sm:text-4xl
          md:text-5xl
          lg:mt-5
          lg:text-[41px]
          lg:leading-[1.15]
        "
      >
        {title}
      </h2>

      {/* Paragraphs */}
      <div className="mt-6 space-y-5 sm:mt-7 md:mt-8 lg:mt-10">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="
              text-base
              leading-7
              text-[#1A1A1A]
              sm:text-lg
              sm:leading-8
              md:text-[19px]
              lg:text-[20px]
              lg:leading-[2]
            "
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function ApproachSections() {
  const hero = sections[0];
  const partnership = sections[1];
  const group = sections[2];

  return (
    <main className="bg-white">

      {/* =====================================================
          OUR APPROACH
      ===================================================== */}
      <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24">
        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            sm:px-8
            md:px-10
            lg:px-16
            xl:px-24
          "
        >
          <div
            className="
              grid
              items-start
              gap-10
              md:gap-12
              lg:grid-cols-[1fr_0.9fr]
              lg:gap-16
              xl:gap-20
            "
          >
            {/* Left Image */}
            <div
              className="
                relative
                order-2
                h-[320px]
                w-full
                overflow-hidden
                rounded-xl
                sm:h-[420px]
                md:h-[500px]
                lg:order-1
                lg:h-[560px]
                xl:h-[600px]
              "
            >
              <Image
                src={hero.image!}
                alt={hero.imageAlt!}
                fill
                priority
                sizes="
                  (max-width: 767px) 100vw,
                  (max-width: 1024px) 50vw,
                  50vw
                "
                className="object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="order-1 w-full pt-0 md:pt-2 lg:order-2 lg:pt-3">
              <Content
                label={hero.label}
                title={hero.title}
                paragraphs={hero.paragraphs}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STRATEGIC PARTNERSHIPS
      ===================================================== */}
      <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24">
        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            sm:px-8
            md:px-10
            lg:px-16
            xl:px-24
          "
        >
          <div
            className="
              grid
              items-start
              gap-10
              md:gap-12
              lg:grid-cols-[1fr_0.9fr]
              lg:gap-16
              xl:gap-24
            "
          >
            {/* Left Content */}
            <div className="order-1 w-full pt-0 md:pt-2 lg:pt-3">
              <Content
                label={partnership.label}
                title={partnership.title}
                paragraphs={partnership.paragraphs}
              />
            </div>

            {/* Right Image */}
            <div
              className="
                relative
                order-2
                h-[320px]
                w-full
                overflow-hidden
                rounded-xl
                sm:h-[420px]
                md:h-[500px]
                lg:h-[560px]
                xl:h-[600px]
              "
            >
              <Image
                src={partnership.image!}
                alt={partnership.imageAlt!}
                fill
                sizes="
                  (max-width: 767px) 100vw,
                  (max-width: 1024px) 50vw,
                  50vw
                "
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR GROUP
      ===================================================== */}
      <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24">
        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            sm:px-8
            md:px-10
            lg:px-16
            xl:px-24
          "
        >
          <div
            className="
              grid
              items-start
              gap-10
              md:gap-12
              lg:grid-cols-[1fr_0.9fr]
              lg:gap-16
              xl:gap-20
            "
          >
            {/* Left Image */}
            <div
              className="
                relative
                order-2
                h-[320px]
                w-full
                overflow-hidden
                rounded-xl
                sm:h-[420px]
                md:h-[500px]
                lg:order-1
                lg:h-[560px]
                xl:h-[600px]
              "
            >
              <Image
                src={group.image!}
                alt={group.imageAlt!}
                fill
                sizes="
                  (max-width: 767px) 100vw,
                  (max-width: 1024px) 50vw,
                  50vw
                "
                className="object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="order-1 w-full pt-0 md:pt-2 lg:order-2 lg:pt-3">
              <Content
                label={group.label}
                title={group.title}
                paragraphs={group.paragraphs}
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}