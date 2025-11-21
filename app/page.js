export default function Home() {
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

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="max-w-2xl">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            I build practical tools that save volunteer coaches time. Rugby session planners, 
            PowerBI automations, and experiments in learning.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-8">
            Coming Soon
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Portfolio under construction. Check back soon.
          </p>
        </div>
      </main>

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