export default function ProjectCard({ project }) {
  // Color mapping for statuses
  const statusColors = {
    Unleashed: 'bg-emerald-500',
    Active: 'bg-amber-500',
    Conceptual: 'bg-blue-500',
    Foundation: 'bg-slate-400'
  };
  
  const statusColor = statusColors[project.status] || 'bg-slate-400';
  
  return (
    <a 
      href={project.homepage || project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-stone-200 dark:border-slate-700 hover:border-amber-600 dark:hover:border-amber-500 transition-colors"
    >
      {/* Thumbnail with corner badge */}
      <div className="aspect-video bg-stone-100 dark:bg-slate-700 overflow-hidden relative">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone-400 dark:text-slate-500">
            <span className="text-4xl">📦</span>
          </div>
        )}
        
        {/* Corner status badge */}
        {project.status && (
          <div 
            className={`absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-l-transparent ${statusColor} ${project.status === 'Active' ? 'animate-pulse' : ''}`}
            title={project.status}
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
          {project.name}
        </h3>
        
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          {project.tagline || project.description}
        </p>

        {/* Tags */}
        {project.topics && project.topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.topics.slice(0, 3).map((topic, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-stone-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        {/* Hover reveal */}
        {project.hoverReveal && (
          <p className="mt-4 text-xs text-amber-600 dark:text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity italic">
            {project.hoverReveal}
          </p>
        )}
      </div>
    </a>
  );
}