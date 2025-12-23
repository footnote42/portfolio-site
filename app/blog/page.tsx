import { getBlogPosts } from '../lib/getBlogPosts';
import Navigation from '../components/Navigation';
import Link from 'next/link';
import { BrandHeading, BrandCard, BrandTag, BrandLink } from '../components/brand';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <BrandHeading level={1} className="mb-3">
            Blog
          </BrandHeading>
          <p className="text-lg text-[var(--color-text)] opacity-70 font-[family-name:var(--font-inter)]">
            Thoughts on vibe coding, AI collaboration, and learning in public.
          </p>
        </div>

        {/* Posts List or Empty State */}
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[var(--color-text)] opacity-60 text-lg font-[family-name:var(--font-inter)]">
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
                <article className="bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] p-6 transition-all duration-300 hover:border-[var(--color-accent-cyan)]/50 hover:shadow-[0_0_30px_rgba(0,217,255,0.1)] hover:-translate-y-1">
                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="mb-3">
                      <BrandTag>Featured</BrandTag>
                    </div>
                  )}

                  {/* Date and Reading Time */}
                  <div className="flex items-center gap-3 text-sm text-[var(--color-text)] opacity-70">
                    <time className="font-[family-name:var(--font-jetbrains-mono)]">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="opacity-40">•</span>
                    <span className="font-[family-name:var(--font-inter)]">{post.readingTime} min read</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-semibold text-[var(--color-text)] font-[family-name:var(--font-jetbrains-mono)] mt-2 mb-3 group-hover:text-[var(--color-accent-cyan)] transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-[var(--color-text)] opacity-80 leading-relaxed font-[family-name:var(--font-inter)]">
                    {post.excerpt}
                  </p>

                  {/* Read More Arrow */}
                  <div className="mt-4 flex items-center text-sm font-medium text-[var(--color-accent-cyan)] font-[family-name:var(--font-jetbrains-mono)]">
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

      <footer className="border-t border-[var(--color-border)] mt-32">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <p className="text-sm text-[var(--color-text)] opacity-60 italic font-[family-name:var(--font-inter)]">
            What stands in the way becomes the way.
          </p>
        </div>
      </footer>
    </div>
  );
}
