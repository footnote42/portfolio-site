import Navigation from '../components/Navigation';
import { BrandHeading } from '../components/brand';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-16">
        <BrandHeading level={1} className="mb-8">
          About
        </BrandHeading>

        <div className="max-w-none space-y-6">
          <p className="text-[var(--color-text)] font-[family-name:var(--font-inter)] text-[length:var(--text-base)] leading-relaxed">
            I'm an electronic systems engineer learning to code by building functional software
            with AI collaboration.
          </p>

          <p className="text-[var(--color-text)] font-[family-name:var(--font-inter)] text-[length:var(--text-base)] leading-relaxed">
            My approach: Build clear requirements first, then ask AI to coach me through the
            implementation. I treat code like I treated complex electro-mechanical platforms -
            understand the system, identify what needs to change, troubleshoot when it breaks.
            Started with multimeters and oscilloscopes fault-finding analogue circuits, now
            it's console logs and error messages debugging React components. Same logical
            process, different domain.
          </p>

          <p className="text-[var(--color-text)] font-[family-name:var(--font-inter)] text-[length:var(--text-base)] leading-relaxed">
            My coding journey started when I saw someone clone Pong and asked ChatGPT: "Could I
            do that?" The AI's proposed solution was too technical; assumed knowledge I didn't have.
            When I explained this, it offered to break it down into steps. That 14-step coaching
            plan walked me from zero to building the game. That's when I understood: I don't need
            deep coding skills if I can articulate problems clearly and learn from what AI generates.
            Setbacks become the learning-obstacles inform the path forward.
          </p>

          <p className="text-[var(--color-text)] font-[family-name:var(--font-inter)] text-[length:var(--text-base)] leading-relaxed">
            Background: Army engineering (REME), rugby coaching, business analysis. Common thread:
            take complex systems, understand what matters, build solutions that work.
          </p>

          <p className="text-[var(--color-text)] font-[family-name:var(--font-inter)] text-[length:var(--text-base)] leading-relaxed">
            Current projects focus on tools for volunteer rugby coaches - session planners, player rotation
            managers, reflection frameworks. Real problems, real users.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] mt-32">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <p className="text-sm text-[var(--color-text)] opacity-60 italic font-[family-name:var(--font-inter)]">
            What stands in the way becomes the way.
          </p>
        </div>
      </footer>
    </div>
  );
}