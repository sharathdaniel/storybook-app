/**
 * Inline SVG sprite of `<symbol>` definitions referenced via `<use href="#icon-*">`.
 * Render once (hidden) somewhere in the DOM for the icons to resolve.
 */
export function IconRegistry({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <symbol id="icon-home" viewBox="0 0 24 24" fill="none">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor" />
      </symbol>
      <symbol id="icon-user" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="5" r="4" fill="currentColor" />
        <path d="M2 14c0-4 4-5 6-5s6 1 6 5" fill="currentColor" />
      </symbol>
    </svg>
  );
}
