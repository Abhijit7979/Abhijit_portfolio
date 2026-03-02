'use client';

/**
 * Full-page background: gradient mesh, soft animated orbs, and subtle grid.
 * Fixed behind all content; creates depth and atmosphere without distraction.
 */
export function Background() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* Base gradient — rich sky-to-surface with a hint of teal */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(165deg,
              hsl(200 45% 98%) 0%,
              hsl(204 38% 96%) 22%,
              hsl(var(--background)) 45%,
              hsl(202 35% 95%) 70%,
              hsl(199 30% 96%) 100%
            )
          `,
        }}
      />

      {/* Soft orb — top left, slow drift */}
      <div
        className="absolute w-[140vmax] h-[140vmax] -top-[40vmax] -left-[30vmax] rounded-full opacity-[0.35] animate-background-float"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.18) 0%, hsl(var(--primary) / 0.06) 35%, transparent 65%)',
        }}
      />

      {/* Soft orb — bottom right */}
      <div
        className="absolute w-[100vmax] h-[100vmax] -bottom-[45vmax] -right-[25vmax] rounded-full opacity-[0.4] animate-background-float-slow"
        style={{
          background: 'radial-gradient(circle, hsl(199 85% 55% / 0.12) 0%, hsl(var(--primary) / 0.04) 40%, transparent 70%)',
        }}
      />

      {/* Accent orb — smaller, center-right, subtle pulse */}
      <div
        className="absolute w-[60vmax] h-[60vmax] top-[35%] -right-[15vmax] rounded-full opacity-30 animate-background-pulse"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.14) 0%, transparent 55%)',
        }}
      />

      {/* Subtle grid — tech feel, very light */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground) / 0.6) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground) / 0.6) 1px, transparent 1px)
          `,
          backgroundSize: 'min(80px, 12vw) min(80px, 12vw)',
        }}
      />

      {/* Top vignette — soft darkening at edges for depth */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          background: 'radial-gradient(ellipse 100% 80% at 50% 0%, transparent 50%, hsl(var(--foreground) / 0.02) 100%)',
        }}
      />
    </div>
  );
}
