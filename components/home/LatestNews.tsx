"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

// =====================================================
// TYPES
// =====================================================

export interface Trend {
  title: string;
  description: string[];
}

export interface NewsArticleData {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
  publishedDate: string;
  category: string;
  author: string;
  company: string;
  content: string[];
  trends: Trend[];
  beyond?: {
    title: string;
    paragraphs: string[];
    closing: string;
  };
}

// =====================================================
// NEWS DATA - SAME FILE
// =====================================================

export const news: NewsArticleData[] = [
  {
    id: 1,
    year: "2026",
    title: "Strategic Investment Trends Shaping Global Business",
    description:
      "Explore emerging investment trends, strategic opportunities and market developments shaping the future of global business.",
    image: "/news/GlobalBusines.png",
    publishedDate: "January 15, 2026",
    category: "Investment Insights",
    author: "Investment Research Department",
    company: "Monarch Global Investments",

    content: [
      "The global business and investment landscape continues to evolve as sustainability, emerging technologies, digital transformation and changing economic priorities reshape industries worldwide.",

      "For businesses, investors and strategic partners, identifying opportunities with genuine long-term potential requires more than following market trends. It requires careful analysis, responsible decision-making and a clear understanding of how industries are changing.",

      "At Monarch Global Investments, our approach focuses on strategic planning, innovation, sustainable business development and long-term value creation. Across our core sectors of Education, Agriculture, Energy and Tourism, we continue to explore developments capable of shaping tomorrow's businesses and communities.",
    ],

    trends: [
      {
        title: "Sustainable Investments",
        description: [
          "Sustainability continues to influence corporate strategy and long-term investment decisions worldwide.",
          "Businesses are increasingly considering environmental responsibility, efficient resource utilisation, responsible governance and long-term social and economic impact as part of their growth strategies.",
          "For investment and holding companies, this creates opportunities to support businesses that combine commercial potential with responsible development.",
          "At Monarch Global Investments, sustainability remains an important consideration when evaluating businesses, partnerships and emerging opportunities.",
        ],
      },
      {
        title: "Digital Transformation & Artificial Intelligence",
        description: [
          "Technology continues to transform how organisations operate, compete and scale.",
          "Artificial intelligence, automation, cloud technologies, digital platforms and data analytics are enabling businesses to improve operational efficiency, strengthen decision-making and develop new products and services.",
          "Digital transformation is no longer limited to technology companies. Agriculture, education, tourism, energy and traditional industries are increasingly integrating technology into their operations.",
          "For Monarch Global Investments, understanding these technological shifts is an important part of identifying future-focused business opportunities.",
        ],
      },
      {
        title: "Renewable & Future-Focused Energy",
        description: [
          "The transition toward cleaner, more efficient and sustainable energy systems continues to create significant opportunities worldwide.",
          "Developments in renewable energy, solar technologies, energy infrastructure, efficiency solutions and emerging clean-energy technologies are changing how governments, businesses and communities approach future energy requirements.",
          "Monarch Global Investments continues to explore opportunities and strategic partnerships that align innovation with responsible and sustainable energy development.",
        ],
      },
      {
        title: "Smart & Sustainable Agriculture",
        description: [
          "Agriculture is undergoing a significant transformation as technology and sustainability become increasingly integrated into food production and resource management.",
          "Solutions such as precision agriculture, aquaponics, controlled-environment farming, agricultural automation and data-driven farming can help improve productivity while addressing challenges related to food security and resource efficiency.",
          "Investment in agricultural innovation can therefore contribute to both economic opportunity and long-term sustainable development.",
          "Through its agriculture-focused initiatives and strategic ecosystem, Monarch Global Investments aims to support opportunities capable of strengthening the future of sustainable agriculture.",
        ],
      },
      {
        title: "Education & Skills Innovation",
        description: [
          "Education continues to evolve as technology changes how people learn, develop skills and prepare for future employment.",
          "Digital learning platforms, education technology, professional training, skill-development programmes and innovative learning models are expanding access to knowledge while creating new opportunities for education-focused businesses.",
          "Monarch Global Investments views education as an important component of long-term economic and social development, particularly where innovation can improve accessibility, skills and future readiness.",
        ],
      },
    ],

    beyond: {
      title: "Investing in Long-Term Transformation",
      paragraphs: [
        "The strongest opportunities are not always created by short-term market movements. They often emerge from structural changes that transform industries over many years.",
        "At Monarch Global Investments, we believe effective investment decisions begin with understanding these changes early, evaluating their long-term potential and building the right partnerships to turn opportunities into sustainable businesses.",
        "Our focus on Education, Agriculture, Energy and Tourism enables us to explore opportunities across sectors that contribute directly to economic development, innovation and sustainable progress.",
        "Through careful analysis, strategic partnerships and disciplined execution, Monarch Global Investments aims to participate in building businesses prepared for the future.",
      ],
      closing:
        "Analyse the Opportunity. Build the Strategy. Create Sustainable Value.",
    },
  },

  {
    id: 2,
    year: "2026",
    title: "The Future of Renewable Energy",
    description:
      "Discover how renewable energy and sustainable solutions are creating new opportunities for long-term economic and environmental growth.",
    image: "/news/RenewableEnergys.png",
    publishedDate: "February 10, 2026",
    category: "Energy",
    author: "Investment Research Department",
    company: "Monarch Investments",

    content: [
      "The transition towards renewable energy is creating significant opportunities for sustainable investment and long-term economic growth.",
      "At Monarch Investments, we support innovative energy solutions that contribute to a cleaner and more sustainable future.",
    ],

    trends: [
      {
        title: "Solar Energy",
        description: [
          "Solar energy continues to expand as technology improves and demand for clean energy increases.",
        ],
      },
      {
        title: "Wind Energy",
        description: [
          "Wind power is becoming an important part of global renewable energy infrastructure.",
        ],
      },
    ],
  },

  {
    id: 3,
    year: "2026",
    title: "Innovation in Modern Agriculture",
    description:
      "Explore how smart farming, aquaponics and agricultural innovation are transforming sustainable food production.",
    image: "/news/ModernAgriculture.png",
    publishedDate: "March 5, 2026",
    category: "Agriculture",
    author: "Investment Research Department",
    company: "Monarch Investments",

    content: [
      "Modern agriculture is rapidly changing through the adoption of smart farming technologies, sustainable practices, and innovative food production systems.",
      "Aquaponics and other modern agricultural solutions can help improve resource efficiency while supporting sustainable food production.",
    ],

    trends: [
      {
        title: "Smart Farming",
        description: [
          "Technology-driven farming systems are improving productivity and resource efficiency.",
        ],
      },
      {
        title: "Aquaponics",
        description: [
          "Aquaponics provides an efficient approach to sustainable food production while reducing resource consumption.",
        ],
      },
    ],
  },

  {
    id: 4,
    year: "2026",
    title: "Transforming Education Through Innovation",
    description:
      "Discover how innovative learning solutions and new approaches to education are creating opportunities for the next generation.",
    image: "/news/TransformingEducations.png",
    publishedDate: "April 12, 2026",
    category: "Education",
    author: "Investment Research Department",
    company: "Monarch Investments",

    content: [
      "Education continues to evolve through innovative learning models, technology, and new approaches to developing future-ready skills.",
      "We believe investment in education plays an important role in empowering individuals and contributing to long-term economic development.",
    ],

    trends: [
      {
        title: "Digital Learning",
        description: [
          "Digital learning platforms are expanding access to education and creating new opportunities for learners.",
        ],
      },
      {
        title: "Future Skills",
        description: [
          "Skill development programs are helping prepare students and professionals for an increasingly digital economy.",
        ],
      },
    ],
  },

  {
    id: 5,
    year: "2026",
    title: "Building a Connected Global Business Platform",
    description:
      "Discover how Monarch Global Investments brings together businesses, strategic partnerships and opportunities across diverse industries and markets.",
    image: "/news/BuildingConnected.png",
    publishedDate: "April 12, 2026",
    category: "Business",
    author: "Investment Research Department",
    company: "Monarch Investments",

    content: [
      "Education continues to evolve through innovative learning models, technology, and new approaches to developing future-ready skills.",
      "We believe investment in education plays an important role in empowering individuals and contributing to long-term economic development.",
    ],

    trends: [
      {
        title: "Digital Learning",
        description: [
          "Digital learning platforms are expanding access to education and creating new opportunities for learners.",
        ],
      },
      {
        title: "Future Skills",
        description: [
          "Skill development programs are helping prepare students and professionals for an increasingly digital economy.",
        ],
      },
    ],
  },

  {
    id: 6,
    year: "2026",
    title: "Strategic Partnerships & Global Opportunities",
    description:
      "Explore how strategic partnerships and business alliances can create opportunities for collaboration, innovation and sustainable growth.",
    image: "/news/StrategicPartnerships.png",
    publishedDate: "April 12, 2026",
    category: "Business",
    author: "Investment Research Department",
    company: "Monarch Investments",

    content: [
      "Education continues to evolve through innovative learning models, technology, and new approaches to developing future-ready skills.",
      "We believe investment in education plays an important role in empowering individuals and contributing to long-term economic development.",
    ],

    trends: [
      {
        title: "Digital Learning",
        description: [
          "Digital learning platforms are expanding access to education and creating new opportunities for learners.",
        ],
      },
      {
        title: "Future Skills",
        description: [
          "Skill development programs are helping prepare students and professionals for an increasingly digital economy.",
        ],
      },
    ],
  },
];

// =====================================================
// COMPONENT PROPS
// =====================================================

interface LatestNewsProps {
  limit?: number;
  source?: "home" | "blog";
}

// =====================================================
// ANIMATIONS
// =====================================================

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(5px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// =====================================================
// ARTICLE LINK
// =====================================================

function ArticleLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="group/link inline-flex items-center gap-2 text-sm font-semibold transition-colors"
    >
      <span>Read Article</span>

      <ArrowRight
        size={17}
        className="transition-transform duration-300 group-hover/link:translate-x-1"
      />
    </Link>
  );
}

// =====================================================
// LATEST NEWS COMPONENT
// =====================================================

export default function LatestNews({
  limit,
  source = "blog",
}: LatestNewsProps) {

  // Use the news data defined above
  const displayedNews =
    typeof limit === "number"
      ? news.slice(0, limit)
      : news;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b py-2 sm:py-2 lg:py-3">

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-22">

        {/* NEWS GRID */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.12,
          }}
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >

          {displayedNews.map((item, index) => (

            <motion.article
              key={item.id}
              variants={cardVariants}

              whileHover={{
                y: -6,
                transition: {
                  duration: 0.35,
                  ease: "easeOut",
                },
              }}

              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#14233A]/70 transition-colors duration-500"
            >

              {/* IMAGE */}

              <div className="relative h-[230px] shrink-0 overflow-hidden sm:h-[250px]">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* IMAGE OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/30 to-transparent opacity-60 pointer-events-none" />

              </div>

              {/* CONTENT */}

              <div className="flex flex-1 flex-col p-5 sm:p-6">

                {/* CATEGORY AND DATE */}

                <div className="flex items-center justify-between gap-3">

                  <span className="text-xs font-semibold tracking-wider text-[#C99B45]">
                    {item.category}
                  </span>

                  <span className="text-xs text-[#8795A9]">
                    {item.publishedDate}
                  </span>

                </div>

                {/* TITLE */}

                <h3 className="mt-4 line-clamp-2 min-h-[56px] text-xl font-semibold leading-snug transition-colors duration-300">

                  {item.title}

                </h3>

                {/* DESCRIPTION */}

                <p className="mt-3 line-clamp-3 min-h-[72px] text-sm leading-6 text-[#AAB7C9]">

                  {item.description}

                </p>

                {/* READ ARTICLE */}

                <div className="mt-auto border-t border-white/10 pt-5">

                  <ArticleLink
                    href={`/blog-&-news/${item.id}?from=${source}`}
                  />

                </div>

              </div>

            </motion.article>

          ))}

        </motion.div>

        {/* VIEW ALL ARTICLES */}

        {source === "home" && (

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: false,
            }}

            transition={{
              duration: 0.7,
            }}

            className="mt-12 flex justify-center"
          >

            <Link
              href="/blog-&-news"
              className="group inline-flex items-center gap-3 rounded-full border border-[#C99B45]/50 px-7 py-3.5 text-sm font-semibold text-[#E7C477] transition-all duration-300 hover:border-[#C99B45] hover:bg-[#C99B45] hover:text-[#172A45] md:text-[16px]"
            >

              Explore All Insights

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </Link>

          </motion.div>

        )}

      </div>

    </section>
  );
}