/**
 * BrandTag - Muted Purple tags for metadata
 *
 * Features:
 * - Purple accent with subtle background
 * - Small, uppercase typography
 * - Pill-shaped with border
 */

export function BrandTag({ children, className = "" }) {
  return (
    <span
      className={`
        inline-block
        font-[family-name:var(--font-jetbrains-mono)]
        text-[0.7rem]
        uppercase
        tracking-wider
        px-2 py-1
        rounded-full
        bg-[rgba(139,92,246,0.12)]
        text-[var(--color-accent-purple)]
        border border-[rgba(139,92,246,0.35)]
        ${className}
      `}
    >
      {children}
    </span>
  );
}
