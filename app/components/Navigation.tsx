// app/components/Navigation.js
export default function Navigation() {
  return (
    <nav className="border-b border-stone-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="/" 
            className="text-xl font-semibold text-slate-800 dark:text-slate-100 hover:text-amber-600"
          >
            Wayne Ellis
          </a>
          
          <div className="flex gap-6 text-sm">
            <a 
              href="/#projects" 
              className="text-slate-600 hover:text-amber-600 dark:text-slate-300"
            >
              Projects
            </a>
            <a 
              href="/journey" 
              className="text-slate-600 hover:text-amber-600 dark:text-slate-300"
            >
              Journey
            </a>
            <a 
              href="/about" 
              className="text-slate-600 hover:text-amber-600 dark:text-slate-300"
            >
              About
            </a>
            <a 
              href="/contact" 
              className="text-slate-600 hover:text-amber-600 dark:text-slate-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}