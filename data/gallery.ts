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
      "Highlights from conferences, meetings, and business events.",
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
      "Celebrating successful collaborations and long-term partnerships.",
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
      "A showcase of our projects and business initiatives across multiple sectors.",
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
      "Supporting communities through sustainable development and social initiatives.",
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