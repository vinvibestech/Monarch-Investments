export interface GalleryImage {
  id: number;
  image: string;
}

export interface GalleryCategory {
  id: number;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  images: GalleryImage[];
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: 1,
    slug: "corporate-events",
    title: "Corporate Events",
    description:
      "Explore highlights from conferences, business meetings, corporate gatherings and industry events that reflect Monarch Global Investments’ business activities and professional network.",
    coverImage: "/home/hero.png",

    images: [
      {
        id: 1,
        image: "",
      },
      {
        id: 2,
        image: "/home/hero.png",
      },
      {
        id: 3,
        image: "/gallery/corporate-events/3.jpg",
      },
      {
        id: 4,
        image: "/gallery/corporate-events/4.jpg",
      },
      {
        id: 5,
        image: "/gallery/corporate-events/5.jpg",
      },
      {
        id: 6,
        image: "/gallery/corporate-events/6.jpg",
      },
    ],
  },

  {
    id: 2,
    slug: "strategic-partnerships",
    title: "Strategic Partnerships",
    description:
      "Discover moments from collaborations, strategic alliances and business partnerships that support innovation, sustainable growth and new opportunities.",
    coverImage: "/gallery/strategic-partnerships/1.jpg",

    images: [
      {
        id: 1,
        image: "/gallery/strategic-partnerships/1.jpg",
      },
      {
        id: 2,
        image: "/gallery/strategic-partnerships/2.jpg",
      },
      {
        id: 3,
        image: "/gallery/strategic-partnerships/3.jpg",
      },
      {
        id: 4,
        image: "/gallery/strategic-partnerships/4.jpg",
      },
    ],
  },

  {
    id: 3,
    slug: "investment-projects",
    title: "Investment Projects",
    description:
      "Explore selected projects, business initiatives and investment activities across multiple sectors, reflecting Monarch Global Investments’ focus on long-term development and sustainable opportunities.",
    coverImage: "/gallery/investment-projects/1.jpg",

    images: [
      {
        id: 1,
        image: "",
      },
      {
        id: 2,
        image: "/gallery/investment-projects/2.jpg",
      },
      {
        id: 3,
        image: "/gallery/investment-projects/3.jpg",
      },
      {
        id: 4,
        image: "/gallery/investment-projects/4.jpg",
      },
    ],
  },

  {
    id: 4,
    slug: "community-engagement",
    title: "Community Engagement",
    description:
      "View initiatives focused on community development, sustainability and meaningful social impact across the sectors and markets we serve.",
    coverImage: "/gallery/community-engagement/1.jpg",

    images: [
      {
        id: 1,
        image: "/gallery/community-engagement/1.jpg",
      },
      {
        id: 2,
        image: "/gallery/community-engagement/2.jpg",
      },
      {
        id: 3,
        image: "/gallery/community-engagement/3.jpg",
      },
      {
        id: 4,
        image: "/gallery/community-engagement/4.jpg",
      },
    ],
  },
];