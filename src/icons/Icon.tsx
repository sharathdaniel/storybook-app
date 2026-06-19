interface IconProps {
  name: string;
  /**
   * Accessibility:
   * - Use `ariaLabel` ONLY for standalone / status icons
   * - NEVER use `ariaLabel` when the icon is inside a button or link
   */
  ariaLabel?: string;
  /** Sizing wrapper class, typically `app-c-icon` (optionally with `u-icon-*`). */
  className?: string;
}

export function Icon({ name, ariaLabel, className = 'app-c-icon' }: IconProps) {
  return (
    <span className={className}>
      <svg
        className="app-c-svg-icon"
        focusable="false"
        role={ariaLabel ? 'img' : undefined}
        aria-hidden={ariaLabel ? undefined : true}
        aria-label={ariaLabel}
        xmlns="http://www.w3.org/2000/svg"
      >
        <use href={`#${name}`} />
      </svg>
    </span>
  );
}
