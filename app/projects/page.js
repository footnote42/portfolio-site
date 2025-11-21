import { getProjects } from '../lib/getProjects';

export default async function ProjectsPage() {
  const projects = await getProjects();
  
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-900">
      {/* Navigation */}
      <nav className="border-b border-stone-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-xl font-semibold text-slate-800 dark:text-slate-100 hover:text-amber-600">
              Wayne Ellis
            </a>
            <div className="flex gap-6 text-sm">
              <a href="/#projects" className="text-slate-600 hover:text-amber-600 dark:text-slate-300">
                Projects
              </a>
              <a href="#about" className="text-slate-600 hover:text-amber-600 dark:text-slate-300">
                About
              </a>
              <a href="#contact" className="text-slate-600 hover:text-amber-600 dark:text-slate-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Design Ethos Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            Projects
          </h1>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              I build practical tools that solve real problems for volunteer coaches and practitioners. 
              Each project starts with a clear need and iterates toward usefulness.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              My approach: functional over fancy, clarity over complexity. The impediment to action 
              becomes the path forward—every obstacle teaches something new about building better tools.
            </p>
          </div>
        </section>

        {/* Project Sections */}
        {projects.map((project, index) => (
          <section 
            key={index}
            id={project.name.toLowerCase().replace(/\s+/g, '-')}
            className="mb-16 pb-16 border-b border-stone-200 dark:border-slate-800 last:border-0"
          >
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
              {project.name}
            </h2>
            
            <p className="text-lg text-amber-600 dark:text-amber-500 mb-6">
              {project.tagline}
            </p>

            {/* Problem */}
            {project.problem && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-2">
                  The Problem
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {project.problem}
                </p>
              </div>
            )}

            {/* Obstacles */}
            {project.obstacles && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-2">
                  Current Challenges
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {project.obstacles}
                </p>
              </div>
            )}

            {/* Tech Stack */}
            {project.topics && project.topics.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-2">
                  Built With
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.topics.map((topic, i) => (
                    <span 
                      key={i}
                      className="text-sm px-3 py-1 bg-stone-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Links */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/#projects"
                className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-500 border border-stone-200 dark:border-slate-700 rounded-lg transition-colors"
              >
                ← Back to Projects
              </a>
    
              <a
                href="/projects"
                className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-500 border border-stone-200 dark:border-slate-700 rounded-lg transition-colors"
              >
                ↑ Top of Page
              </a>
    
              {(project.homepage || project.githubUrl) && (
                <a
                  href={project.homepage || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors font-medium"
                >
                  Try It Live →
                </a>
              )}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 dark:border-slate-800 mt-32">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            What stands in the way becomes the way.
          </p>
        </div>
      </footer>
    </div>
  );
}