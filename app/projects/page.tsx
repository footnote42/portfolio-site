import { getProjects } from '../lib/getProjects';
import Navigation from '../components/Navigation';
import { BrandHeading, BrandCard, BrandTag, BrandButton, BrandLink } from '../components/brand';

export default async function ProjectsPage() {
  const projects = await getProjects();
  
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
    <Navigation />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Design Ethos Section */}
        <section className="mb-16">
          <BrandHeading level={1} className="mb-6">
            Projects
          </BrandHeading>
          <div className="max-w-none">
            <p className="text-lg text-[var(--color-text)] leading-relaxed mb-4 font-['Inter',sans-serif]">
              I build practical tools that solve real problems for volunteer coaches and practitioners.
              Each project starts with a clear need and iterates toward usefulness.
            </p>
            <p className="text-[var(--color-text)] opacity-80 font-['Inter',sans-serif]">
              My approach: functional over fancy, clarity over complexity. The impediment to action
              becomes the path forward - every obstacle teaches something new about building better tools.
            </p>
          </div>
        </section>

        {/* Project Sections */}
        {projects.map((project, index) => (
          <section
            key={index}
            id={project.name.toLowerCase().replace(/\s+/g, '-')}
          >
          <BrandCard className="mb-8">
            <BrandHeading level={2} className="mb-4">
              {project.name}
            </BrandHeading>

            <p className="text-lg text-[var(--color-accent-amber)] mb-6 font-['Inter',sans-serif]">
              {project.tagline}
            </p>

            {/* Problem */}
            {project.problem && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-[var(--color-text)] uppercase tracking-wide mb-2 font-['JetBrains_Mono',monospace]">
                  The Problem
                </h3>
                <p className="text-[var(--color-text)] opacity-80 font-['Inter',sans-serif]">
                  {project.problem}
                </p>
              </div>
            )}

            {/* Obstacles */}
            {project.obstacles && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-[var(--color-text)] uppercase tracking-wide mb-2 font-['JetBrains_Mono',monospace]">
                  Current Challenges
                </h3>
                <p className="text-[var(--color-text)] opacity-80 font-['Inter',sans-serif]">
                  {project.obstacles}
                </p>
              </div>
            )}

            {/* Tech Stack */}
            {project.topics && project.topics.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-[var(--color-text)] uppercase tracking-wide mb-2 font-['JetBrains_Mono',monospace]">
                  Built With
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.topics.map((topic, i) => (
                    <BrandTag key={i}>
                      {topic}
                    </BrandTag>
                  ))}
                </div>
              </div>
            )}

            {/* Action Links */}
            <div className="flex flex-wrap gap-4 mt-8">
              <BrandLink href="/#projects" className="inline-flex items-center gap-2 px-4 py-2.5 bg-transparent text-[var(--color-text)] opacity-70 border border-[var(--color-border)] rounded-full hover:opacity-100 hover:border-[var(--color-accent-cyan)] transition-all">
                ← Back to Projects
              </BrandLink>

              <BrandLink href="/projects" className="inline-flex items-center gap-2 px-4 py-2.5 bg-transparent text-[var(--color-text)] opacity-70 border border-[var(--color-border)] rounded-full hover:opacity-100 hover:border-[var(--color-accent-cyan)] transition-all">
                ↑ Top of Page
              </BrandLink>

              {(project.homepage || project.githubUrl) && (
                <BrandLink
                  href={project.homepage || project.githubUrl}
                  external
                  className="inline-flex items-center gap-2 font-medium text-sm px-4 py-2.5 rounded-full bg-[var(--color-accent-cyan)] text-[var(--color-bg)] border border-transparent shadow-[var(--glow-cyan)] hover:shadow-[0_0_40px_rgba(0,217,255,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Try It Live →
                </BrandLink>
              )}
            </div>
          </BrandCard>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] mt-32">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <p className="text-sm text-[var(--color-text)] opacity-60 italic font-['Inter',sans-serif]">
            What stands in the way becomes the way.
          </p>
        </div>
      </footer>
    </div>
  );
}