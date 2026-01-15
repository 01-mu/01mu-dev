import rss from "@astrojs/rss";
import { getVisiblePosts } from "../utils/posts";

export async function GET(context) {
  const posts = await getVisiblePosts();

  return rss({
    title: "mu -> bit",
    description: "Designing systems from nothing(mu / 無).",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? "",
      link: `/posts/${post.slug}`,
    })),
  });
}
