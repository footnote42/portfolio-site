import ProjectCard from './components/ProjectCard';
import { getProjects } from './lib/getProjects';
import Navigation from './components/Navigation';
import { BrandHeading } from './components/brand';

export default async function Home() {
  // Fetch projects at build time
  const projects = await getProjects();
  console.log('Projects data:', projects[0]); // Add this line
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="max-w-2xl mb-16">
          <p className="text-lg text-[var(--color-text)] leading-relaxed font-['Inter',sans-serif]">
            I'm a systems engineer learning to build software with AI collaboration. Coding's
            learning curve always felt too steep; until AI removed that excuse. Now I'm building
            time-saving tools for rugby coaches and exploring whatever makes me curious.
          </p>
        </div>

        <section id="projects">
          <BrandHeading level={2} className="mb-8">
            Featured Projects
          </BrandHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="mt-16">
            <BrandHeading level={2} className="mb-8">
              All Projects
            </BrandHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>

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
