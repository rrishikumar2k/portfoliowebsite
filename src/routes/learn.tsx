import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Target, Table2 } from "lucide-react";

import { NOTES, NOTE_CATEGORIES } from "@/content/site";
import { FadeUp, GlassPanel, Reveal, SectionLabel } from "@/components/site/primitives";
import { IconRuleRow } from "@/components/site/icon-rule-row";
import { NewsletterForm } from "@/components/site/newsletter-form";
import { ConceptTicker } from "@/components/site/bull-bear";
import { cn } from "@/lib/utils";

const HOW_TO_READ = [
  {
    icon: Compass,
    title: "Start with the question.",
    body: "Every note opens with the question a real investor asked. If the question isn't yours yet, the answer won't stay with you.",
    tone: "bull" as const,
  },
  {
    icon: Table2,
    title: "Read the numbers yourself.",
    body: "Each piece points you to where the figure actually lives — a filing, an RBI release, a results deck — so you can check it rather than trust it.",
    tone: "gold" as const,
  },
  {
    icon: Target,
    title: "Apply it to one holding.",
    body: "One idea, one position, one decision written down. Understanding that never touches your own portfolio isn't understanding yet.",
    tone: "bear" as const,
  },
];

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { title: "Wilson's Market Notes — Indian Markets Without the Noise" },
      {
        name: "description",
        content: "Notes on Indian markets, the RBI, equity, gold, tax and investor behaviour — written to make you less dependent on tips.",
      },
      { property: "og:title", content: "Wilson's Market Notes — Indian Markets Without the Noise" },
      {
        property: "og:description",
        content: "Reading on behaviour, fundamentals and Indian market context from a 20-year market veteran.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/learn" },
    ],
    links: [{ rel: "canonical", href: "/learn" }],
  }),
  component: Learn,
});

function LearnHeroImage() {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="relative h-full min-h-[400px] w-full overflow-hidden bg-[#0c1a17]">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(244,240,234,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(244,240,234,.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Decorative elements */}
        <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full border border-[var(--sage)]/25" />
        <div className="absolute -bottom-16 -right-16 h-60 w-60 rounded-full bg-[var(--copper)]/6 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-16 w-16 rounded-full border border-[var(--copper)]/15" />
        {/* Candlestick chart SVG */}
        <div className="relative flex h-full flex-col justify-between p-8 text-[var(--paper)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="eyebrow text-[var(--paper)]/50">Market notes</p>
              <p className="mt-3 max-w-[18ch] font-display text-3xl leading-tight">
                Read the data, not the drama.
              </p>
            </div>
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--paper)]/20 font-display text-sm text-[var(--copper)]">
              WA
            </span>
          </div>
          <div>
            <svg
              viewBox="0 0 480 180"
              className="h-auto w-full"
              aria-label="Illustrated candlestick chart"
            >
              <defs>
                <linearGradient id="learn-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--sage)" />
                  <stop offset="100%" stopColor="var(--copper)" />
                </linearGradient>
              </defs>
              {/* Candlesticks */}
              {[
                { x: 30, o: 120, c: 80, h: 60, l: 140, bull: true },
                { x: 70, o: 90, c: 110, h: 70, l: 130, bull: false },
                { x: 110, o: 100, c: 70, h: 50, l: 120, bull: true },
                { x: 150, o: 75, c: 95, h: 55, l: 115, bull: false },
                { x: 190, o: 90, c: 60, h: 40, l: 110, bull: true },
                { x: 230, o: 65, c: 85, h: 45, l: 105, bull: false },
                { x: 270, o: 80, c: 55, h: 35, l: 100, bull: true },
                { x: 310, o: 60, c: 75, h: 40, l: 95, bull: false },
                { x: 350, o: 70, c: 45, h: 25, l: 85, bull: true },
                { x: 390, o: 50, c: 65, h: 30, l: 80, bull: false },
                { x: 430, o: 60, c: 35, h: 15, l: 75, bull: true },
              ].map((c, i) => (
                <g key={i} opacity={0.7 + i * 0.027}>
                  <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={c.bull ? "var(--sage)" : "var(--rust)"} strokeWidth="1.5" />
                  <rect x={c.x - 10} y={Math.min(c.o, c.c)} width="20" height={Math.abs(c.o - c.c) || 3} fill={c.bull ? "var(--sage)" : "var(--rust)"} opacity="0.75" rx="1" />
                </g>
              ))}
              {/* Moving average line */}
              <path
                d="M30 100 C90 95 150 85 210 75 S330 55 390 50 Q420 40 460 30"
                fill="none"
                stroke="url(#learn-grad)"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
            <div className="mt-5 flex items-end justify-between border-t border-[var(--paper)]/15 pt-4">
              <div>
                <p className="eyebrow text-[var(--paper)]/40">The thinking</p>
                <p className="mt-1 text-sm text-[var(--paper)]/65">Written down, not shouted.</p>
              </div>
              <p className="font-mono text-xs text-[var(--paper)]/35">8 categories</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src="/images/market-charts.jpg"
      alt="Candlestick chart on a trading terminal — green and red bars"
      width={1280}
      height={912}
      onError={() => setImageError(true)}
      className="h-full min-h-[400px] w-full object-cover opacity-80 transition-transform duration-1000 hover:scale-[1.03]"
    />
  );
}

function Learn() {
  const [filter, setFilter] = useState<string | null>(null);
  const lead = NOTES[0]!;
  const rest = NOTES.slice(1);
  const shown = filter ? rest.filter((n) => n.kicker === filter) : rest;

  return (
    <>
      <section className="px-6 pb-14 pt-40 md:px-10 md:pb-20 md:pt-52">
        <div className="mx-auto grid max-w-[1400px] items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h1 className="mt-10 max-w-[16ch] type-display">
              <Reveal>Read slowly.</Reveal>
              <Reveal delay={0.1}>
                <span className="text-bull">Decide slowly.</span>
              </Reveal>
            </h1>
            <FadeUp delay={0.3}>
              <p className="mt-10 max-w-lg type-body text-muted-foreground">
                Understanding India's markets without the noise. Nothing here will tell you what to
                buy — everything here is designed to make the next decision yours.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="relative hidden lg:block">
            <div className="overflow-hidden border border-ink/15 shadow-[0_32px_80px_-44px_rgba(21,34,36,0.55)]">
              <LearnHeroImage />
            </div>
            <div className="absolute -bottom-6 -left-6 border border-ink/15 bg-paper px-5 py-4 shadow-lg">
              <p className="eyebrow text-ink/50">Market notes</p>
              <p className="mt-2 font-display text-lg text-ink">Where the chart stops explaining.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <ConceptTicker />

      <section className="px-6 pb-10 pt-14 md:px-10 md:pt-20">
        <div className="mx-auto max-w-[1400px]">
          <FadeUp>
            <div className="flex flex-wrap gap-2">
              <FilterChip active={filter === null} onClick={() => setFilter(null)}>
                All notes
              </FilterChip>
              {NOTE_CATEGORIES.map((c) => (
                <FilterChip key={c} active={filter === c} onClick={() => setFilter(c)}>
                  {c}
                </FilterChip>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-[1400px]">
          {filter === null && (
            <FadeUp>
              <article className="group grid cursor-pointer gap-8 border border-hairline p-8 transition-colors duration-500 hover:border-bull/40 md:grid-cols-[1.1fr_1fr] md:p-14">
                <div>
                  <p className="type-label text-bull">
                    Featured · {lead.kicker}
                  </p>
                  <h2 className="mt-6 type-h1">
                    {lead.title}
                  </h2>
                </div>
                <div className="flex flex-col justify-end">
                  <p className="type-body text-muted-foreground">{lead.body}</p>
                  <p className="mt-8 inline-flex items-center gap-2 text-sm text-foreground/80">
                    {lead.read} read
                    <ArrowUpRight className="h-3.5 w-3.5 text-bull transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </p>
                </div>
              </article>
            </FadeUp>
          )}

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((post, i) => (
              <FadeUp key={post.title} delay={i * 0.06}>
                <GlassPanel className="flex h-full cursor-pointer flex-col p-8">
                  <p className="type-label text-muted-foreground">
                    {post.kicker}
                  </p>
                  <h3 className="mt-6 type-h2">{post.title}</h3>
                  <p className="mt-4 flex-1 type-body text-muted-foreground">
                    {post.body}
                  </p>
                  <p className="mt-8 border-t border-hairline pt-5 text-xs text-muted-foreground">
                    {post.read} read
                  </p>
                </GlassPanel>
              </FadeUp>
            ))}
          </div>

          {shown.length === 0 && (
            <p className="mt-10 text-sm text-muted-foreground">
              Notes on this subject are being written. In the meantime, the letter below is where
              they land first.
            </p>
          )}
        </div>
      </section>

      <section className="px-6 pb-20 pt-6 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>How to use these notes</SectionLabel>
          <Reveal as="h2" className="mt-8">
            <span className="type-h1 block">Reading is the easy part.</span>
          </Reveal>
          <IconRuleRow items={HOW_TO_READ} className="mt-16" />
        </div>
      </section>


      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-[1400px]">
          <FadeUp>
            <figure className="group relative overflow-hidden border border-hairline">
              <img
                src="/images/market-charts.jpg"
                alt="Candlestick chart on a trading terminal, green and red bars"
                width={1280}
                height={912}
                loading="lazy"
                className="h-56 w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-[1.02] group-hover:opacity-100 md:h-80"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background to-transparent p-6 text-xs text-muted-foreground">
                Every note here starts where the chart stops explaining.
              </figcaption>
            </figure>
          </FadeUp>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-10 md:pb-44">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative grid gap-10 overflow-hidden border border-hairline bg-bull/[0.04] p-8 md:grid-cols-2 md:items-center md:gap-10 md:p-14">
            <div>
              <p className="eyebrow">The letter</p>
              <h2 className="mt-5 type-h2">
                A note when there is something worth understanding.
              </h2>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn( "rounded-sm border px-4 py-2 type-label transition-colors duration-400",
        active
          ? "border-bull/50 bg-bull/10 text-bull"
          : "border-hairline text-muted-foreground hover:border-bull/30 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
