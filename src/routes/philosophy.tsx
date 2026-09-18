import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { CORE_PRINCIPLES, PRINCIPLES } from "@/content/site";
import { FadeUp, Reveal, SectionLabel } from "@/components/site/primitives";
import { ConceptTicker } from "@/components/site/bull-bear";

export const Route = createFileRoute("/philosophy")({
  head: () => ({
    meta: [
      { title: "Investment Philosophy — Wilson Arthur" },
      {
        name: "description",
        content: "Six principles behind twenty years in the markets: risk before return, time as the only real edge, and why behaviour decides the portfolio.",
      },
      { property: "og:title", content: "Investment Philosophy — Wilson Arthur" },
      {
        property: "og:description",
        content: "Understanding beats prediction. The principles that guide Wilson Arthur's investor education work.",
      },
      { property: "og:url", content: "/philosophy" },
    ],
    links: [{ rel: "canonical", href: "/philosophy" }],
  }),
  component: Philosophy,
});

function PhilosophyHeroImage() {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="relative h-full min-h-[400px] w-full overflow-hidden bg-[#0e1f1b]">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(244,240,234,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(244,240,234,.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Decorative circles */}
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[var(--copper)]/30" />
        <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-[var(--copper)]/8 blur-2xl" />
        <div className="absolute right-12 bottom-24 h-20 w-20 rounded-full border border-[var(--sage)]/20" />
        {/* Rising line chart SVG */}
        <div className="relative flex h-full flex-col justify-between p-8 text-[var(--paper)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="eyebrow text-[var(--paper)]/50">The philosophy</p>
              <p className="mt-3 max-w-[16ch] font-display text-3xl leading-tight">
                Understanding over prediction.
              </p>
            </div>
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--paper)]/20 font-display text-sm text-[var(--copper)]">
              WA
            </span>
          </div>
          <div>
            <svg
              viewBox="0 0 480 160"
              className="h-auto w-full"
              aria-label="Illustrated steady growth line"
            >
              <defs>
                <linearGradient id="phil-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--rust)" />
                  <stop offset="50%" stopColor="var(--copper)" />
                  <stop offset="100%" stopColor="var(--sage)" />
                </linearGradient>
              </defs>
              <path
                d="M0 130 C40 125 60 100 100 105 S160 120 200 85 S280 95 320 60 S400 70 480 25"
                fill="none"
                stroke="url(#phil-line)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M0 130 C40 125 60 100 100 105 S160 120 200 85 S280 95 320 60 S400 70 480 25 V160 H0 Z"
                fill="url(#phil-line)"
                opacity=".08"
              />
              <circle cx="480" cy="25" r="4" fill="var(--sage)" />
              <circle cx="200" cy="85" r="3" fill="var(--copper)" opacity="0.6" />
            </svg>
            <div className="mt-5 flex items-end justify-between border-t border-[var(--paper)]/15 pt-4">
              <div>
                <p className="eyebrow text-[var(--paper)]/40">The discipline</p>
                <p className="mt-1 text-sm text-[var(--paper)]/65">Process over panic.</p>
              </div>
              <p className="font-mono text-xs text-[var(--paper)]/35">Six principles</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src="/images/images.png"
      alt="Wilson Arthur — investment educator and market experience veteran"
      width={800}
      height={1000}
      onError={() => setImageError(true)}
      className="h-full min-h-[400px] w-full object-cover object-top opacity-85 transition-transform duration-1000 hover:scale-[1.03]"
    />
  );
}

function Philosophy() {
  return (
    <>
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <div className="mx-auto grid max-w-[1400px] items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h1 className="mt-10 max-w-[14ch] type-h1">
              <Reveal>The market</Reveal>
              <Reveal delay={0.1}>
                is not a <span className="text-bull">puzzle</span>
              </Reveal>
              <Reveal delay={0.2}>to be solved.</Reveal>
            </h1>
            <FadeUp delay={0.35}>
              <p className="mt-12 max-w-xl border-t border-hairline pt-8 type-lead text-muted-foreground">
                It isn't something to predict perfectly. It's something to understand, navigate and
                respect. Thousands of intelligent people disagree in public, every second of every
                day — you will never out-think that. You can, however, out-behave most of the people
                in it, and that is a far more reliable ambition.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="relative hidden lg:block">
            <div className="overflow-hidden border border-ink/15 shadow-[0_32px_80px_-44px_rgba(21,34,36,0.55)]">
              <PhilosophyHeroImage />
            </div>
            <div className="absolute -bottom-6 -left-6 border border-ink/15 bg-paper px-5 py-4 shadow-lg">
              <p className="eyebrow text-ink/50">Since 2004</p>
              <p className="mt-2 font-display text-lg text-ink">Understanding beats prediction.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <ConceptTicker />

      <section className="px-6 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>The discipline</SectionLabel>
          <Reveal as="h2" className="mt-8">
            <span className="block type-h1">
              Three principles. One discipline.
            </span>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {CORE_PRINCIPLES.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.08}>
                <div className="glass h-full rounded-md p-8 transition-colors duration-500 hover:border-bull/45">
                  <span
                    className={ "inline-block h-1.5 w-1.5 rounded-full " +
                      (p.tone === "bull" ? "bg-bull" : p.tone === "bear" ? "bg-bear" : "bg-gold")
                    }
                  />
                  <h3
                    className={ "mt-6 type-h2 " +
                      (p.tone === "bull" ? "text-bull" : p.tone === "bear" ? "text-bear" : "text-gold")
                    }
                  >
                    {p.title}
                  </h3>
                  <p className="mt-4 type-body text-muted-foreground">{p.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <blockquote className="mx-auto max-w-4xl text-center">
            <Reveal as="p">
              <span className="block font-display text-[clamp(1.75rem,4vw,3.25rem)] italic leading-[1.15]">
                &ldquo;The investors I've watched succeed weren't the smartest in the room. They
                were the ones who had already decided what they would do before the room caught
                fire.&rdquo;
              </span>
            </Reveal>
          </blockquote>
        </div>
      </section>

      <section className="px-6 pb-28 md:px-10 md:pb-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="border-t border-hairline">
            {PRINCIPLES.map((p, i) => (
              <FadeUp key={p.n} delay={i * 0.05}>
                <article className="group grid gap-6 border-b border-hairline py-12 transition-colors duration-500 hover:bg-card/40 md:grid-cols-[auto_0.9fr_1.1fr] md:gap-14 md:px-6 md:py-16">
                  <p className="h-1.5 w-1.5 shrink-0 rounded-full bg-bull md:mt-4" />
                  <h2 className="type-h2">{p.title}</h2>
                  <p className="max-w-xl type-body text-muted-foreground md:pt-2 md:text-base">
                    {p.body}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="mt-20 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md type-h2">
                These principles are taught, not sold.
              </p>
              <Link
                to="/workshops"
                className="inline-flex items-center gap-2 text-sm text-bull underline-offset-8 transition-colors hover:underline"
              >
                See how they're taught <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
