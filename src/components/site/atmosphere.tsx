import { useEffect, useRef, useState } from "react";

/** Fine grid + ambient light + film grain. Purely decorative. */
export function Atmosphere() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 grid-field opacity-70" />
      <div className="absolute inset-0 ambient-glow" />
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

/** Cursor spotlight — desktop / fine-pointer only. */
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 3;
    let cx = tx;
    let cy = ty;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      if (ref.current) ref.current.style.transform = `translate3d(${cx - 320}px, ${cy - 320}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[640px] w-[640px] rounded-full opacity-60"
      style={{
        background: "radial-gradient(circle, color-mix(in oklab, var(--bull) 12%, transparent) 0%, transparent 62%)",
      }}
    />
  );
}

/** Slow, self-drawing market line used behind the hero. */
export function MarketLine({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 400"
      preserveAspectRatio="none"
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="ml-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--bear)" stopOpacity="0.55" />
          <stop offset="38%" stopColor="var(--gold)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--bull)" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="ml-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--bull)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--bull)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 330 C 90 320 130 250 200 268 C 275 288 300 200 380 212 C 450 222 470 300 545 286 C 620 272 640 150 720 168 C 790 184 810 128 890 140 C 965 152 990 92 1070 84 C 1130 78 1160 60 1200 48 L1200 400 L0 400 Z"
        fill="url(#ml-fill)"
      />
      <path
        d="M0 330 C 90 320 130 250 200 268 C 275 288 300 200 380 212 C 450 222 470 300 545 286 C 620 272 640 150 720 168 C 790 184 810 128 890 140 C 965 152 990 92 1070 84 C 1130 78 1160 60 1200 48"
        stroke="url(#ml-stroke)"
        strokeWidth="1.5"
        strokeDasharray="2400"
        strokeDashoffset="2400"
        style={{ animation: "draw-line 3.4s cubic-bezier(0.16,1,0.3,1) 0.4s forwards" }}
      />
    </svg>
  );
}
