import { getBlogPost, getBlogPosts } from '../../lib/getBlogPosts';
import Navigation from '../../components/Navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';

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
    <div className="min-h-screen bg-stone-50 dark:bg-slate-900">
      <Navigation />

      <main className="max-w-3xl mx-auto px-4 py-16">
        {/* Back to Blog Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors mb-8"
        >
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
        </Link>

        {/* Article Header */}
        <article>
          {/* Featured Badge */}
          {post.featured && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full">
                Featured
              </span>
            </div>
          )}

          {/* Date and Reading Time */}
          <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <time className="font-mono">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span>{post.readingTime} min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mt-3 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12 pb-8 border-b border-slate-200 dark:border-slate-700">
            {post.excerpt}
          </p>

          {/* Markdown Content */}
          <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mt-12 mb-4">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mt-10 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mt-8 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="ml-4">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-slate-800 dark:text-slate-100">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-slate-700 dark:text-slate-300">
                    {children}
                  </em>
                ),
                code: ({ children }) => (
                  <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 rounded text-sm font-mono">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto mb-6">
                    {children}
                  </pre>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-slate-600 dark:text-slate-400 my-6">
                    {children}
                  </blockquote>
                ),
                a: ({ children, href }) => (
                  <a
                    href={href}
                    className="text-emerald-600 dark:text-emerald-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Back to Blog Link (bottom) */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
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
            </Link>
          </div>
        </article>
      </main>

      <footer className="border-t border-stone-200 dark:border-slate-800 mt-32">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <p className="text-sm text-slate-400 dark:text-slate-600 italic">
            What stands in the way becomes the way.
          </p>
        </div>
      </footer>
    </div>
  );
}
