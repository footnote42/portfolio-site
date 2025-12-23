/**
 * BrandCard - Workshop aesthetic card component
 *
 * Features:
 * - Charcoal background with subtle border
 * - Electric cyan glow on hover
 * - Smooth elevation transition
 */

export function BrandCard({ children, hover = true, className = "" }) {
  return (
    <div
      className={`
        bg-[var(--color-surface)]
        border border-[var(--color-border)]
        rounded-xl p-8
        transition-all duration-300
        ${hover ? 'hover:border-[#00d9ff40] hover:shadow-[0_0_30px_rgba(0,217,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
