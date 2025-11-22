import ProjectCard from './components/ProjectCard';
import { getProjects } from './lib/getProjects';

export default async function Home() {
  // Fetch projects at build time
  const projects = await getProjects();
  console.log('Projects data:', projects[0]); // Add this line
  const featuredProjects = projects.filter(p => p.featured);
  
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-900">
      <nav className="border-b border-stone-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
              Wayne Ellis
            </h1>
            <div className="flex gap-6 text-sm">
              <a href="#projects" className="text-slate-600 hover:text-amber-600 dark:text-slate-300">
                Projects
              </a>
              <a href="/about" className="text-slate-600 hover:text-amber-600 dark:text-slate-300">
                About
              </a>
              <a href="/contact" className="text-slate-600 hover:text-amber-600 dark:text-slate-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="max-w-2xl mb-16">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            I'm a systems engineer learning to build software with AI collaboration. Coding's 
            learning curve always felt too steep; until AI removed that excuse. Now I'm building 
            time-saving tools for rugby coaches and exploring whatever makes me curious.
          </p>
        </div>

        <section id="projects">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-8">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-8">
              All Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 dark:border-slate-800 mt-32">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <p className="text-sm text-slate-400 dark:text-slate-600 italic">
            What stands in the way becomes the way.
          </p>
        </div>
      </footer>
    </div>
  );
}