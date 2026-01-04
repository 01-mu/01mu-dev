import { getCollection } from 'astro:content';

export async function getVisiblePosts() {
  const isProd = import.meta.env.PROD;
  const posts = await getCollection('posts', ({ data }) => {
    if (!isProd) return true;
    return !data.draft;
  });

  return posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export function getAllTags(posts) {
  const tagMap = new Map<string, number>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      const normalized = tag.trim();
      if (!normalized) continue;
      tagMap.set(normalized, (tagMap.get(normalized) ?? 0) + 1);
    }
  }

  return Array.from(tagMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([tag, count]) => ({ tag, count }));
}
