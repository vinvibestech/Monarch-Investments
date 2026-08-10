import { notFound } from "next/navigation";
import NewsArticle from "@/components/common/NewsArticle";
import { news } from "@/data/news";

interface Props {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    from?: string;
  }>;
}

export default async function NewsDetailPage({
  params,
  searchParams,
}: Props) {
  const { id } = await params;
  const { from } = await searchParams;

  const article = news.find(
    (item) => item.id === Number(id)
  );

  if (!article) {
    notFound();
  }

  return (
    <NewsArticle
      label="News & Insights"
      title={article.title}
      image={article.image}
      publishedDate={article.publishedDate}
      category={article.category}
      author={article.author}
      company={article.company}
      paragraphs={article.content}
      trends={article.trends}
      breadcrumbSource={from === "home" ? "home" : "blog"}
    />
  );
}