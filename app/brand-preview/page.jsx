import {
  BrandCard,
  BrandHeading,
  BrandLink,
  BrandButton,
  BrandTag,
} from "../components/brand";

export default function BrandPreview() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="space-y-4">
          <BrandHeading level={1}>Brand Preview</BrandHeading>
          <p className="text-[var(--color-text)] font-[family-name:var(--font-inter)] text-[length:var(--text-base)] opacity-90 max-w-2xl">
            This page demonstrates the new workshop aesthetic brand system. All
            components are isolated and ready for integration.
          </p>
        </header>

        {/* Color Palette */}
        <section className="space-y-4">
          <BrandHeading level={2}>Color Palette</BrandHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg">
              <div className="text-xs font-mono mb-2 text-[var(--color-text)] opacity-60">
                Deep Slate
              </div>
              <div className="text-sm font-mono text-[var(--color-text)]">
                #0f1419
              </div>
            </div>
            <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg">
              <div className="text-xs font-mono mb-2 text-[var(--color-text)] opacity-60">
                Charcoal
              </div>
              <div className="text-sm font-mono text-[var(--color-text)]">
                #1c2128
              </div>
            </div>
            <div className="p-6 bg-[var(--color-bg)] border border-[var(--color-accent-cyan)] rounded-lg">
              <div className="text-xs font-mono mb-2 text-[var(--color-accent-cyan)]">
                Electric Cyan
              </div>
              <div className="text-sm font-mono text-[var(--color-accent-cyan)]">
                #00d9ff
              </div>
            </div>
            <div className="p-6 bg-[var(--color-bg)] border border-[var(--color-accent-amber)] rounded-lg">
              <div className="text-xs font-mono mb-2 text-[var(--color-accent-amber)]">
                Amber Glow
              </div>
              <div className="text-sm font-mono text-[var(--color-accent-amber)]">
                #f59e0b
              </div>
            </div>
            <div className="p-6 bg-[var(--color-bg)] border border-[var(--color-accent-purple)] rounded-lg">
              <div className="text-xs font-mono mb-2 text-[var(--color-accent-purple)]">
                Muted Purple
              </div>
              <div className="text-sm font-mono text-[var(--color-accent-purple)]">
                #8b5cf6
              </div>
            </div>
            <div className="p-6 bg-[var(--color-bg)] border border-[var(--color-text)] rounded-lg">
              <div className="text-xs font-mono mb-2 text-[var(--color-text)]">
                Warm White
              </div>
              <div className="text-sm font-mono text-[var(--color-text)]">
                #e6edf3
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-4">
          <BrandHeading level={2}>Typography</BrandHeading>
          <BrandCard>
            <div className="space-y-4">
              <div>
                <div className="text-xs font-mono mb-2 text-[var(--color-text)] opacity-60">
                  Headings: JetBrains Mono
                </div>
                <BrandHeading level={1}>H1 Heading</BrandHeading>
                <BrandHeading level={2}>H2 Heading</BrandHeading>
                <BrandHeading level={3}>H3 Heading</BrandHeading>
              </div>
              <div className="pt-4 border-t border-[var(--color-border)]">
                <div className="text-xs font-mono mb-2 text-[var(--color-text)] opacity-60">
                  Body: Inter
                </div>
                <p className="text-[var(--color-text)] font-[family-name:var(--font-inter)] text-[length:var(--text-base)] leading-relaxed">
                  This is body text using the Inter font family. It's designed
                  for excellent readability at all sizes. The fluid type scale
                  ensures text remains readable across different viewport sizes.
                </p>
              </div>
            </div>
          </BrandCard>
        </section>

        {/* Cards */}
        <section className="space-y-4">
          <BrandHeading level={2}>Cards</BrandHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BrandCard>
              <BrandHeading level={3} className="mb-3">
                Hover Me
              </BrandHeading>
              <p className="text-[var(--color-text)] font-[family-name:var(--font-inter)] opacity-90">
                This card has the cyan glow hover effect. Move your mouse over
                it to see the elevation and border change.
              </p>
            </BrandCard>
            <BrandCard hover={false}>
              <BrandHeading level={3} className="mb-3">
                Static Card
              </BrandHeading>
              <p className="text-[var(--color-text)] font-[family-name:var(--font-inter)] opacity-90">
                This card has hover effects disabled. Useful for content that
                doesn't need interaction.
              </p>
            </BrandCard>
          </div>
        </section>

        {/* Tags */}
        <section className="space-y-4">
          <BrandHeading level={2}>Tags</BrandHeading>
          <BrandCard>
            <div className="flex flex-wrap gap-2">
              <BrandTag>Next.js</BrandTag>
              <BrandTag>React</BrandTag>
              <BrandTag>TypeScript</BrandTag>
              <BrandTag>Tailwind</BrandTag>
              <BrandTag>Supabase</BrandTag>
              <BrandTag>Vercel</BrandTag>
            </div>
          </BrandCard>
        </section>

        {/* Links */}
        <section className="space-y-4">
          <BrandHeading level={2}>Links</BrandHeading>
          <BrandCard>
            <div className="space-y-3">
              <div>
                <BrandLink href="#">
                  This is a standard brand link
                </BrandLink>
              </div>
              <div>
                <BrandLink href="https://github.com" external>
                  This is an external link
                </BrandLink>
              </div>
            </div>
          </BrandCard>
        </section>

        {/* Buttons */}
        <section className="space-y-4">
          <BrandHeading level={2}>Buttons</BrandHeading>
          <BrandCard>
            <div className="flex flex-wrap gap-4">
              <BrandButton variant="primary" href="#">
                Primary Button
              </BrandButton>
              <BrandButton variant="secondary" href="#">
                Secondary Button
              </BrandButton>
            </div>
          </BrandCard>
        </section>

        {/* Sample Project Card */}
        <section className="space-y-4">
          <BrandHeading level={2}>Sample Project Card</BrandHeading>
          <BrandCard>
            <div className="flex flex-wrap gap-2 mb-4">
              <BrandTag>Rugby Coaching</BrandTag>
              <BrandTag>AI</BrandTag>
              <BrandTag>Next.js</BrandTag>
            </div>
            <BrandHeading level={3} className="mb-3">
              Squad Rotation Tool v2.0
            </BrandHeading>
            <p className="text-[var(--color-text)] font-[family-name:var(--font-inter)] opacity-90 mb-6 leading-relaxed">
              Fair game-time allocation for age-grade rugby teams. The tool
              remembers last week's rotations so coaches don't have to.
            </p>
            <div className="flex gap-3">
              <BrandButton variant="primary" href="#">
                Try It Live
              </BrandButton>
              <BrandButton variant="secondary" href="#">
                Learn More
              </BrandButton>
            </div>
          </BrandCard>
        </section>

        {/* Footer */}
        <footer className="pt-8 mt-12 border-t border-[var(--color-border)]">
          <p className="text-[var(--color-text)] font-[family-name:var(--font-inter)] text-sm opacity-60 italic">
            What stands in the way becomes the way.
          </p>
        </footer>
      </div>
    </div>
  );
}
