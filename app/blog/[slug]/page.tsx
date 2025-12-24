import { getBlogPost, getBlogPosts } from '../../lib/getBlogPosts';
import Navigation from '../../components/Navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';
import { BrandHeading, BrandLink, BrandTag } from '../../components/brand';

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  // If post not found, show 404
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navigation />

      <main className="max-w-3xl mx-auto px-4 py-16">
        {/* Back to Blog Link */}
        <BrandLink href="/blog" className="inline-flex items-center text-sm mb-8">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </BrandLink>

        {/* Article Header */}
        <article>
          {/* Featured Badge */}
          {post.featured && (
            <div className="mb-4">
              <BrandTag>Featured</BrandTag>
            </div>
          )}

          {/* Date and Reading Time */}
          <div className="flex items-center gap-3 text-sm text-[var(--color-text)] opacity-70 font-['Inter',sans-serif]">
            <time className="font-['JetBrains_Mono',monospace]">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="opacity-50">•</span>
            <span>{post.readingTime} min read</span>
          </div>

          {/* Title */}
          <BrandHeading level={1} className="mt-3 mb-6">
            {post.title}
          </BrandHeading>

          {/* Excerpt */}
          <p className="text-xl text-[var(--color-text)] leading-relaxed mb-12 pb-8 border-b border-[var(--color-border)] font-['Inter',sans-serif]">
            {post.excerpt}
          </p>

          {/* Markdown Content */}
          <div className="max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <BrandHeading level={1} className="mt-12 mb-4">
                    {children}
                  </BrandHeading>
                ),
                h2: ({ children }) => (
                  <BrandHeading level={2} className="mt-10 mb-4">
                    {children}
                  </BrandHeading>
                ),
                h3: ({ children }) => (
                  <BrandHeading level={3} className="mt-8 mb-3">
                    {children}
                  </BrandHeading>
                ),
                h4: ({ children }) => (
                  <BrandHeading level={4} className="mt-6 mb-3">
                    {children}
                  </BrandHeading>
                ),
                p: ({ children }) => (
                  <p className="text-[var(--color-text)] leading-relaxed mb-6 font-['Inter',sans-serif]">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 mb-6 text-[var(--color-text)] font-['Inter',sans-serif]">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 mb-6 text-[var(--color-text)] font-['Inter',sans-serif]">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="ml-4">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-[var(--color-text)]">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-[var(--color-text)]">
                    {children}
                  </em>
                ),
                code: ({ children, className }) => {
                  // Inline code (no className) vs code block (has className)
                  const isInline = !className;
                  return (
                    <code
                      className={
                        isInline
                          ? "px-1.5 py-0.5 bg-[var(--color-surface)] text-[var(--color-accent-purple)] rounded text-sm font-['JetBrains_Mono',monospace]"
                          : "text-[var(--color-text)] font-['JetBrains_Mono',monospace]"
                      }
                    >
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => (
                  <pre className="bg-[var(--color-surface)] p-4 rounded-lg overflow-x-auto mb-6 border border-[var(--color-border)]">
                    {children}
                  </pre>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-[var(--color-accent-cyan)] pl-4 italic text-[var(--color-text)] opacity-80 my-6 font-['Inter',sans-serif]">
                    {children}
                  </blockquote>
                ),
                a: ({ children, href }) => (
                  <BrandLink href={href || '#'} external={href?.startsWith('http')}>
                    {children}
                  </BrandLink>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Back to Blog Link (bottom) */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <BrandLink href="/blog" className="inline-flex items-center text-sm">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </BrandLink>
          </div>
        </article>
      </main>

      <footer className="border-t border-[var(--color-border)] mt-32">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <p className="text-sm text-[var(--color-text)] opacity-60 italic font-['Inter',sans-serif]">
            What stands in the way becomes the way.
          </p>
        </div>
      </footer>
    </div>
  );
}
