import { getAllPosts } from '@/lib/posts';

export default async function sitemap() {
  const posts = await getAllPosts();
  return [
    { url: 'https://www.clickdish.fit', priority: 1.0, changeFrequency: 'monthly' },
    { url: 'https://www.clickdish.fit/blog', priority: 0.9, changeFrequency: 'weekly' },
    ...posts.map((post) => ({
      url: `https://www.clickdish.fit/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: 'weekly',
      priority: 0.8,
    })),
  ];
}
