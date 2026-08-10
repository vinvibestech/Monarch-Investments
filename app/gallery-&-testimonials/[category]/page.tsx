import { notFound } from "next/navigation";
import { galleryCategories } from "@/data/gallery";
import GalleryCategory from "@/components/gallery/GalleryCategory";

interface Props {
  params: Promise<{
    category: string;
  }>;
}

export default async function GalleryCategoryPage({
  params,
}: Props) {
  const { category } = await params;

  const gallery = galleryCategories.find(
    (item) => item.slug === category
  );

  if (!gallery) {
    notFound();
  }

  return (
    <GalleryCategory
      title={gallery.title}
      description={gallery.description}
      images={gallery.images}
    />
  );
}