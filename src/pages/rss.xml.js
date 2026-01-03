import rss from "@astrojs/rss";
import { getVisiblePosts } from "../utils/posts";

export async function GET(context) {
  const posts = await getVisiblePosts();

  return rss({
    title: "01-mu",
    description: "Quiet notes for long-form thinking.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? "",
      link: `/posts/${post.slug}`,
    })),
  });
}
