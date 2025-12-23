/**
 * BrandButton - Primary and secondary CTAs with glow effects
 *
 * Variants:
 * - primary: Electric Cyan background with glow
 * - secondary: Amber Glow outline with hover fill
 */

export function BrandButton({
  variant = "primary",
  children,
  href,
  onClick,
  className = ""
}) {
  const baseClasses = `
    inline-flex items-center gap-2
    font-medium text-sm
    px-4 py-2.5
    rounded-full
    border
    cursor-pointer
    transition-all duration-300
    hover:-translate-y-0.5
  `;

  const variants = {
    primary: `
      bg-[var(--color-accent-cyan)]
      text-[#00141a]
      border-transparent
      shadow-[var(--glow-cyan)]
      hover:shadow-[0_0_40px_rgba(0,217,255,0.3)]
    `,
    secondary: `
      bg-transparent
      text-[var(--color-accent-amber)]
      border-[rgba(245,158,11,0.4)]
      hover:bg-[rgba(245,158,11,0.08)]
      hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]
    `,
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
      <span className="inline-block transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </Component>
  );
}
