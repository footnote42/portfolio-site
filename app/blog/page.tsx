import { getBlogPosts } from '../lib/getBlogPosts';
import Navigation from '../components/Navigation';
import Link from 'next/link';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-900">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Blog
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Thoughts on vibe coding, AI collaboration, and learning in public.
          </p>
        </div>

        {/* Posts List or Empty State */}
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No posts yet. Check back soon.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 transition-all hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-md">
                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Date */}
                  <time className="text-sm text-slate-500 dark:text-slate-400 font-mono">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>

                  {/* Title */}
                  <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mt-2 mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More Arrow */}
                  <div className="mt-4 flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    Read more
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </main>

      <footer className="border-t border-stone-200 dark:border-slate-800 mt-32">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <p className="text-sm text-slate-400 dark:text-slate-600 italic">
            What stands in the way becomes the way.
          </p>
        </div>
      </footer>
    </div>
  );
}
