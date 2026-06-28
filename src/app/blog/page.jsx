import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Blog',
  description: 'Dicas de alimentação saudável, receitas fit e conteúdo sobre bem-estar.',
};

export default async function BlogIndex() {
  const posts = await getAllPosts();
  return (
    <main className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-clickdish-magenta to-clickdish-orange text-transparent bg-clip-text mb-6">Blog ClickDish</h1>
        <p className="text-lg text-gray-600">Dicas práticas, receitas e tudo que você precisa saber para manter o corpo e a alma leves.</p>
      </div>
      
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 hover:shadow-[0_8px_30px_rgb(236,64,122,0.1)] transition-all duration-300">
            <Link href={`/blog/${post.slug}`} className="block group">
              <div className="flex items-center gap-3 text-sm text-clickdish-magenta font-bold mb-4">
                <span className="uppercase tracking-wider px-3 py-1 bg-clickdish-magenta/10 rounded-full">{post.category}</span>
                <span className="text-gray-300">•</span>
                <time className="text-gray-500 font-medium">{new Date(post.date).toLocaleDateString('pt-BR')}</time>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-clickdish-orange transition-colors mb-4">{post.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
              <div className="flex items-center text-clickdish-magenta font-bold group-hover:translate-x-2 transition-transform duration-300">
                Ler artigo completo <ChevronRight className="w-5 h-5 ml-1" />
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
