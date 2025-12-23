/**
 * BrandHeading - JetBrains Mono headings with fluid typography
 *
 * Features:
 * - JetBrains Mono font family
 * - Fluid type scale using CSS variables
 * - Warm White text color
 */

export function BrandHeading({ level = 1, children, className = "" }) {
  const Tag = `h${level}`;
  const sizes = {
    1: 'text-[length:var(--text-4xl)]',
    2: 'text-[length:var(--text-3xl)]',
    3: 'text-[length:var(--text-2xl)]',
    4: 'text-[length:var(--text-xl)]',
  };

  return (
    <Tag
      className={`
        font-[family-name:var(--font-jetbrains-mono)]
        font-medium
        text-[var(--color-text)]
        leading-tight
        ${sizes[level] || sizes[2]}
        ${className}
      `}
    >
      {children}
    </Tag>
  );
}
