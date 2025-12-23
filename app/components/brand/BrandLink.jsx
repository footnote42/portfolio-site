/**
 * BrandLink - Electric Cyan links with hover glow
 *
 * Features:
 * - Electric Cyan color
 * - Subtle underline on hover
 * - Text shadow glow effect
 */

export function BrandLink({ href, children, className = "", external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`
        text-[var(--color-accent-cyan)]
        border-b border-transparent
        hover:border-[var(--color-accent-cyan)]
        hover:shadow-[0_0_12px_rgba(0,217,255,0.4)]
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </a>
  );
}
