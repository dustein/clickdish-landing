import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      url: `https://www.clickdish.fit/blog/${post.slug}`,
    },
    alternates: {
      canonical: `https://www.clickdish.fit/blog/${post.slug}`,
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  // Dynamic import of the MDX file allows @next/mdx to compile it into a React component!
  const PostContent = dynamic(() => import(`@/../content/blog/${slug}.mdx`));

  // JSON-LD para SEO semântico e mecanismos de IA
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    author: { '@type': 'Organization', name: 'ClickDish' },
    publisher: { '@type': 'Organization', name: 'ClickDish', url: 'https://www.clickdish.fit' },
    url: `https://www.clickdish.fit/blog/${post.slug}`,
    mainEntityOfPage: `https://www.clickdish.fit/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-14 mt-4">
        <header className="mb-8 sm:mb-12 text-center border-b border-gray-100 pb-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-clickdish-magenta/10 text-clickdish-magenta text-xs md:text-sm font-bold uppercase tracking-wider mb-6">
            {post.category}
          </div>
          <h1 className="text-xl md:text-4xl font-bold text-gray-900 md:mb-6 leading-tight">{post.title}</h1>          
        </header>
        
        <div className="prose prose-md md:prose-xl prose-p:text-justify prose-p:hyphens-auto prose-p:text-gray-600 prose-headings:text-gray-900 prose-h2:text-xl md:prose-h2:text-3xl prose-h3:text-sm md:prose-h3:text-2xl prose-a:text-clickdish-orange hover:prose-a:text-clickdish-magenta prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl max-w-none">
          <PostContent />
        </div>
      </article>
    </>
  );
}
