import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export async function getBlogPosts() {
  try {
    // Read all files from the blog directory
    const files = await fs.readdir(BLOG_DIR);

    // Filter for markdown files and exclude the template
    const markdownFiles = files.filter(
      file => file.endsWith('.md') && file !== 'post-template.md'
    );

    // Read and parse each file
    const posts = await Promise.all(
      markdownFiles.map(async (filename) => {
        const filePath = path.join(BLOG_DIR, filename);
        const fileContents = await fs.readFile(filePath, 'utf8');

        // Parse frontmatter and content
        const { data, content } = matter(fileContents);

        return {
          slug: data.slug || filename.replace(/\.md$/, ''),
          title: data.title || 'Untitled',
          date: data.date || new Date().toISOString().split('T')[0],
          excerpt: data.excerpt || '',
          featured: data.featured || false,
          content,
        };
      })
    );

    // Sort by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    return posts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug) {
  try {
    const posts = await getBlogPosts();
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}
