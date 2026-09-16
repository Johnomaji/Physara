/**
 * Brand mark. The outer P inherits currentColor so it stays legible on both
 * themes; the cyan and magenta are fixed brand values sampled from logo.png.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M9 9h24c11 0 19 7 19 17 0 10-8 17-20 17H24v11H9V9Z"
        stroke="currentColor"
        strokeWidth="7"
      />
      <path
        d="M24 31h10c4 0 7-2 7-5 0-3-3-5-7-5H24"
        stroke="#0CC1E0"
        strokeWidth="7"
      />
      <path
        d="M39 14 25 50"
        stroke="#BE2679"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
