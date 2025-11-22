import Navigation from '../components/Navigation';
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-900">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">
          About
        </h1>
        
        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none space-y-6">
          <p>
            I'm an electronic systems engineer learning to code by building functional software 
            with AI collaboration.
          </p>

          <p>
            My approach: Build clear requirements first, then ask AI to coach me through the 
            implementation. I treat code like I treated complex electro-mechanical platforms - 
            understand the system, identify what needs to change, troubleshoot when it breaks. 
            Started with multimeters and oscilloscopes fault-finding analogue circuits, now 
            it's console logs and error messages debugging React components. Same logical 
            process, different domain.
          </p>

          <p>
            My coding journey started when I saw someone clone Pong and asked ChatGPT: "Could I 
            do that?" The AI's proposed solution was too technical; assumed knowledge I didn't have. 
            When I explained this, it offered to break it down into steps. That 14-step coaching 
            plan walked me from zero to building the game. That's when I understood: I don't need 
            deep coding skills if I can articulate problems clearly and learn from what AI generates. 
            Setbacks become the learning-obstacles inform the path forward.
          </p>

          <p>
            Background: Army engineering (REME), rugby coaching, business analysis. Common thread: 
            take complex systems, understand what matters, build solutions that work.
          </p>

          <p>
            Current projects focus on tools for volunteer rugby coaches — session planners, player rotation 
            managers, reflection frameworks. Real problems, real users.
          </p>
        </div>
      </main>

      {/* Footer */}
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