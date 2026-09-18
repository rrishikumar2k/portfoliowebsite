import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";

import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Line-mask reveal used for editorial headlines. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "h1" | "h2" | "h3" | "p" | "li";
}) {
  const MotionTag = motion[As] as typeof motion.div;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <MotionTag
        initial={{ y: "110%", opacity: 0 }}
        animate={inView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay }}
      >
        {children}
      </MotionTag>
    </div>
  );
}

/** Soft fade + rise for blocks of content. */
export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y: 24, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-bull" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

export function GlassPanel({
  children,
  className,
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn( "glass relative rounded-md",
        interactive && "transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:border-bull/40 hover:shadow-[0_28px_70px_-40px_var(--bull)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Magnetic CTA — pointer-attracted on fine pointers, inert on touch. */
export function MagneticButton({
  children,
  className,
  variant = "secondary",
  ...props
}: React.ComponentProps<typeof motion.button> & { variant?: "primary" | "secondary" }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.22);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={cn( "group relative inline-flex items-center gap-3 rounded-sm px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-500 sm:px-7",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:bg-emerald-soft"
          : "border border-emerald/45 bg-transparent text-foreground hover:border-emerald hover:bg-emerald/8",
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}


/** Counter that animates once, when scrolled into view. */
export function Counter({
  value,
  suffix = "",
  duration = 1600,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
