import { BrandLink } from './brand';

export default function Navigation() {
  return (
    <nav className="border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <BrandLink
            href="/"
            className="text-xl font-semibold text-[var(--color-text)] hover:text-[var(--color-accent-amber)] transition-colors font-['JetBrains_Mono',monospace]"
          >
            Wayne Ellis
          </BrandLink>

          <div className="flex gap-6 text-sm">
            <BrandLink
              href="/#projects"
              className="text-[var(--color-text)] opacity-70 hover:opacity-100 hover:text-[var(--color-accent-amber)] transition-all font-['Inter',sans-serif]"
            >
              Projects
            </BrandLink>
            <BrandLink
              href="/blog"
              className="text-[var(--color-text)] opacity-70 hover:opacity-100 hover:text-[var(--color-accent-amber)] transition-all font-['Inter',sans-serif]"
            >
              Blog
            </BrandLink>
            <BrandLink
              href="/journey"
              className="text-[var(--color-text)] opacity-70 hover:opacity-100 hover:text-[var(--color-accent-amber)] transition-all font-['Inter',sans-serif]"
            >
              Journey
            </BrandLink>
            <BrandLink
              href="/about"
              className="text-[var(--color-text)] opacity-70 hover:opacity-100 hover:text-[var(--color-accent-amber)] transition-all font-['Inter',sans-serif]"
            >
              About
            </BrandLink>
            <BrandLink
              href="/contact"
              className="text-[var(--color-text)] opacity-70 hover:opacity-100 hover:text-[var(--color-accent-amber)] transition-all font-['Inter',sans-serif]"
            >
              Contact
            </BrandLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
