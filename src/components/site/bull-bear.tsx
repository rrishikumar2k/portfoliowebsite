import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

import { TICKER_TERMS } from "@/content/site";
import bullAsset from "@/assets/bull-mark.png.asset.json";
import bearAsset from "@/assets/bear-mark.png.asset.json";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Charging bull — lunges forward and tosses its horns upward. */
export function BullMark({ className, playKey }: { className?: string; playKey: number }) {
  return (
    <div className={cn("relative", className)}>
      <span className="pointer-events-none absolute inset-0 rounded-full bg-bull/15 blur-2xl" />
      <img
        key={playKey}
        src={bullAsset.url}
        alt="Charging bull tossing its horns upward, the symbol of a rising market"
        width={512}
        height={512}
        loading="lazy"
        className="relative h-full w-full animate-horn-toss object-contain"
      />
    </div>
  );
}

/** Bear — swipes downward, the symbol of a falling market. */
export function BearMark({ className, playKey }: { className?: string; playKey: number }) {
  return (
    <div className={cn("relative", className)}>
      <span className="pointer-events-none absolute inset-0 rounded-full bg-bear/15 blur-2xl" />
      <img
        key={playKey}
        src={bearAsset.url}
        alt="Bear swiping downward, the symbol of a falling market"
        width={512}
        height={512}
        loading="lazy"
        className="relative h-full w-full animate-paw-swipe object-contain"
      />
    </div>
  );
}

function MoodCard({
  eyebrow,
  title,
  body,
  tone,
  delay,
}: {
  eyebrow: string;
  title: string;
  body: string;
  tone: "bull" | "bear";
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const [playKey, setPlayKey] = useState(0);
  const started = useRef(false);

  // Play once when the card scrolls into view.
  useEffect(() => {
    if (inView && !started.current) {
      started.current = true;
      setPlayKey((k) => k + 1);
    }
  }, [inView]);

  const isBull = tone === "bull";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      onMouseEnter={() => setPlayKey((k) => k + 1)}
      onFocus={() => setPlayKey((k) => k + 1)}
      tabIndex={0}
      className={cn(
        "glass group relative flex flex-col gap-6 overflow-hidden rounded-md p-7 outline-none transition-colors duration-500 sm:p-9",
        isBull
          ? "bg-linear-to-br from-bull/12 via-card/60 to-transparent hover:border-bull/45"
          : "bg-linear-to-tr from-bear/12 via-card/60 to-transparent hover:border-bear/45",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px",
          isBull
            ? "bg-linear-to-r from-bull/70 to-transparent"
            : "bg-linear-to-r from-bear/70 to-transparent",
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute -bottom-24 h-56 w-56 rounded-full blur-3xl transition-opacity duration-700",
          isBull ? "-left-16 bg-bull/15" : "-right-16 bg-bear/15",
        )}
      />
      <div className="relative grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
        <div className="min-w-0">
          <p className={cn("eyebrow", isBull ? "text-bull" : "text-bear")}>{eyebrow}</p>
          <h3 className="mt-4 type-h2">{title}</h3>
        </div>
        <div className="h-20 w-20 shrink-0 sm:h-28 sm:w-28">
          {isBull ? (
            <BullMark className="h-full w-full" playKey={playKey} />
          ) : (
            <BearMark className="h-full w-full" playKey={playKey} />
          )}
        </div>
      </div>
      <p className="relative type-body text-muted-foreground">{body}</p>
    </motion.div>
  );
}

/** Bull vs bear section — the two states every investor has to live through. */
export function BullBearSection() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <MoodCard
        tone="bull"
        delay={0}
        eyebrow="Bull · Markets rising"
        title="The horns toss upward"
        body="Green tape makes everyone feel skilled. This is when discipline is cheapest to abandon and most expensive to lose — the phase to trim, rebalance and write down why you own what you own."
      />
      <MoodCard
        tone="bear"
        delay={0.12}
        eyebrow="Bear · Markets falling"
        title="The paw swipes down"
        body="Red tape makes everyone feel foolish. Nothing about a good business changes in a week. The plan written in calm weather is the only thing that works in this one."
      />
    </div>
  );
}

/** Decorative concept ticker — deliberately not market data. */
export function ConceptTicker() {
  return (
    <div className="relative overflow-hidden border-y border-hairline bg-card/60 py-3.5">
      {/* Edge gradient fade masks for smooth infinite scrolling effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-20" />

      <div className="flex items-center">
        <div className="flex w-max animate-ticker items-center gap-8 whitespace-nowrap will-change-transform">
          {[...TICKER_TERMS, ...TICKER_TERMS].map((it, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="flex items-center gap-2.5 font-mono text-xs tracking-wide">
                <span className={cn("text-[0.65rem]", it.dir === "up" ? "text-bull" : "text-bear")}>
                  {it.dir === "up" ? "▲" : "▼"}
                </span>
                <span className="font-medium text-foreground/80">{it.term}</span>
              </span>

              {/* WA Logo Badge every 2 items */}
              {i % 2 === 0 && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-copper/30 bg-copper/10 px-2.5 py-0.5 font-display text-[0.65rem] font-semibold text-copper">
                  <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                  WA
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between px-6 font-mono text-[0.6rem] uppercase tracking-widest text-muted-foreground/60 md:px-10">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-bull" />
          Wilson Arthur Market Experience
        </span>
      </div>
    </div>
  );
}

/** Back-compat alias. */
export const TickerStrip = ConceptTicker;
