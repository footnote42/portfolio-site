import { BrandCard, BrandHeading, BrandTag, BrandLink } from './brand';

export default function ProjectCard({ project }) {
  // Color mapping for statuses - using brand colors
  const statusColors = {
    Unleashed: 'bg-[var(--color-accent-cyan)]',
    Active: 'bg-[var(--color-accent-amber)]',
    Conceptual: 'bg-[#3b82f6]',
    Foundation: 'bg-[var(--color-border)]'
  };

  const statusColor = statusColors[project.status] || 'bg-[var(--color-border)]';

  // Generate anchor ID from project name
  const anchorId = project.name.toLowerCase().replace(/\s+/g, '-');

  return (
    <BrandCard hover={true} className="flex flex-col h-full">
      {/* Thumbnail with corner badge */}
      <div className="aspect-video bg-[var(--color-surface)] overflow-hidden relative rounded-t-lg -m-8 mb-0">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--color-text)] opacity-50">
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
      <div className="mt-6 flex flex-col flex-grow">
        <BrandHeading level={3} className="mb-2">
          {project.name}
        </BrandHeading>

        <p className="text-sm text-[var(--color-text)] opacity-80 mb-4 font-['Inter',sans-serif]">
          {project.tagline || project.description}
        </p>

        {/* Tags */}
        {project.topics && project.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.topics.slice(0, 3).map((topic, index) => (
              <BrandTag key={index}>
                {topic}
              </BrandTag>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <BrandLink
            href={`/projects#${anchorId}`}
            className="flex-1 px-4 py-2 text-center text-sm text-[var(--color-text)] opacity-70 border border-[var(--color-border)] rounded-full hover:opacity-100 hover:border-[var(--color-accent-cyan)] transition-all"
          >
            Learn More
            <span className="sr-only"> about {project.name}</span>
          </BrandLink>
          <BrandLink
            href={project.homepage || project.githubUrl}
            external
            className="flex-1 px-4 py-2 text-center text-sm bg-[var(--color-accent-cyan)] text-[var(--color-bg)] rounded-full hover:shadow-[0_0_40px_rgba(0,217,255,0.3)] hover:-translate-y-0.5 transition-all duration-300 font-medium"
          >
            Try It →
          </BrandLink>
        </div>

        {/* Hover reveal */}
        {project.hoverReveal && (
          <p className="mt-4 text-xs text-[var(--color-accent-amber)] opacity-0 group-hover:opacity-100 transition-opacity italic font-['Inter',sans-serif]">
            {project.hoverReveal}
          </p>
        )}
      </div>
    </BrandCard>
  );
}
