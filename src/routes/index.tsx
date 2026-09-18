import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Instagram,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import {
  CREDENTIALS,
  CORE_PRINCIPLES,
  DRIVERS,
  NOTE_CATEGORIES,
  NOTES,
  PERSON,
  STATS,
  WORKSHOPS,
} from "@/content/site";
import { FadeUp, MagneticButton, Reveal, SectionLabel } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wilson Arthur — A calmer way to understand the market" },
      {
        name: "description",
        content:
          "Investment education from Wilson Arthur. Understand India's markets, build better habits and make calmer decisions without the noise of stock tips.",
      },
      { property: "og:title", content: "Wilson Arthur — A calmer way to understand the market" },
      {
        property: "og:description",
        content:
          "Investment education, market notes and workshops for people who want to understand rather than follow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <ProofStrip />
      <PointOfView />
      <DriverLab />
      <NotesShelf />
      <WorkshopCallout />
      <HomeClosing />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-44">
      <div className="hero-wash pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-[1400px] items-end gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20">
        <div className="relative z-10">

          <h1 className="mt-8 max-w-[10ch] type-display text-ink">
            <Reveal>Make better</Reveal>
            <Reveal delay={0.12}>
              <span className="text-copper">market decisions.</span>
            </Reveal>
          </h1>

          <FadeUp delay={0.3} className="mt-8 max-w-xl">
            <p className="type-lead text-ink/70">
              Wilson Arthur helps investors understand what sits behind the headline, the number and
              the noise — so a plan can do its job when the market gets loud.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/philosophy">
                <MagneticButton
                  variant="primary"
                  className="rounded-sm bg-ink text-paper hover:bg-ink/85"
                >
                  See the approach
                  <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink/65 transition-colors hover:text-ink"
              >
                Invite Wilson to speak
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-ink/15 pt-5">
              {CREDENTIALS.map((credential) => (
                <span key={credential} className="eyebrow text-ink/55">
                  {credential}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.18} className="relative lg:pb-4">
          <div className="relative mx-auto max-w-[560px]">
            <div className="absolute -left-7 top-10 hidden h-32 w-32 rounded-full border border-copper/35 lg:block" />
            <div className="absolute -right-7 bottom-10 hidden h-20 w-20 bg-copper/10 lg:block" />
            <div className="relative overflow-hidden border border-ink/15 bg-ink p-2 shadow-[0_32px_80px_-44px_rgba(21,34,36,0.65)]">
              <div className="relative aspect-[1.04/1] overflow-hidden">
                <HeroMedia />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-paper">
                  <div>
                    <p className="eyebrow text-paper/60">Wilson Arthur</p>
                    <p className="mt-2 font-display text-2xl">Markets, without the theatre.</p>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-paper/30">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-7 left-5 hidden border border-ink/15 bg-paper px-5 py-4 shadow-lg sm:block">
              <p className="eyebrow text-ink/50">The promise</p>
              <p className="mt-2 font-display text-xl text-ink">Less reaction. More intention.</p>
            </div>
          </div>
        </FadeUp>
      </div>

      <div className="relative mx-auto mt-20 flex max-w-[1400px] items-center gap-4 border-t border-ink/15 pt-5 text-ink/50">
        <span className="h-2 w-2 rounded-full bg-copper" />
        <span className="eyebrow text-ink/50">Start with the first principle</span>
        <span className="ml-auto hidden h-px w-20 bg-ink/15 sm:block" />
        <span className="eyebrow text-ink/50">Scroll to explore</span>
      </div>
    </section>
  );
}

function HeroMedia() {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#102724] text-paper">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(244,240,234,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(244,240,234,.12) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-copper/45" />
        <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-copper/10 blur-2xl" />
        <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
          <div className="flex items-start justify-between">
            <div>
              <p className="eyebrow text-paper/55">Wilson Arthur</p>
              <p className="mt-2 font-display text-2xl">A calmer way to read the market.</p>
            </div>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-paper/25 text-copper">
              WA
            </span>
          </div>
          <div>
            <svg
              viewBox="0 0 520 190"
              className="h-auto w-full"
              aria-label="Illustrated rising market line"
            >
              <defs>
                <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--rust)" />
                  <stop offset="55%" stopColor="var(--copper)" />
                  <stop offset="100%" stopColor="var(--sage)" />
                </linearGradient>
              </defs>
              <path
                d="M0 145 C55 154 70 106 124 120 S205 152 250 96 S319 106 365 72 S434 88 520 18"
                fill="none"
                stroke="url(#hero-line)"
                strokeWidth="3"
              />
              <path
                d="M0 145 C55 154 70 106 124 120 S205 152 250 96 S319 106 365 72 S434 88 520 18 V190 H0 Z"
                fill="url(#hero-line)"
                opacity=".12"
              />
              <circle cx="520" cy="18" r="5" fill="var(--sage)" />
            </svg>
            <div className="mt-6 flex items-end justify-between border-t border-paper/15 pt-4">
              <div>
                <p className="eyebrow text-paper/45">The discipline</p>
                <p className="mt-2 text-sm text-paper/75">Process over panic.</p>
              </div>
              <p className="font-mono text-xs text-paper/45">01 / 03</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src="/images/hero.png"
      alt="Wilson Arthur seated at his desk with live market coverage on screen"
      width={1300}
      height={1180}
      onError={() => setImageError(true)}
      className="h-full w-full object-cover object-center opacity-90 transition-transform duration-1000 hover:scale-[1.03]"
    />
  );
}

function ProofStrip() {
  return (
    <section className="border-y border-ink/15 bg-paper-dark px-6 md:px-10">
      <div className="mx-auto grid max-w-[1400px] divide-y divide-ink/15 md:grid-cols-[1.2fr_repeat(4,1fr)] md:divide-x md:divide-y-0">
        <div className="flex items-center gap-4 py-6 md:pr-8">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-paper">
            <ShieldCheck className="h-4 w-4" />
          </span>
          <p className="max-w-[22ch] text-sm leading-relaxed text-ink/75">
            Education first. Clear about what this work is — and what it is not.
          </p>
        </div>
        {STATS.map((stat) => (
          <div key={stat.label} className="py-6 md:px-7">
            <p className="font-display text-3xl tracking-tight text-ink">
              {stat.value.toLocaleString("en-IN")}
              <span className="text-copper">{stat.suffix}</span>
            </p>
            <p className="mt-2 text-xs leading-relaxed text-ink/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PointOfView() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
        <div>
          <SectionLabel>Point of view</SectionLabel>
          <p className="mt-8 max-w-[13ch] font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl">
            Markets reward understanding, not tips.
          </p>
        </div>
        <div>
          <p className="max-w-2xl text-xl leading-relaxed text-ink/70 md:text-2xl">
            The work is simple: replace reaction with a repeatable way of thinking. Learn how the
            economy, businesses and behaviour interact — then make decisions that still make sense
            when the headlines change.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-ink/15 pt-6">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-sm font-medium text-copper"
            >
              Meet Wilson
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <span className="text-sm text-ink/45">Based in India · Teaching since 2004</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-[1400px] border-y border-ink/15 md:grid-cols-3 md:divide-x md:divide-ink/15">
        {CORE_PRINCIPLES.map((principle, index) => (
          <FadeUp key={principle.title} delay={index * 0.08}>
            <article className="group h-full py-8 md:px-8 md:py-10 md:first:pl-0 md:last:pr-0">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-ink/45">0{index + 1}</span>
                <span
                  className={cn(
                    "h-2 w-2 rounded-full",
                    principle.tone === "bull"
                      ? "bg-sage"
                      : principle.tone === "bear"
                        ? "bg-rust"
                        : "bg-copper",
                  )}
                />
              </div>
              <h3 className="mt-12 font-display text-3xl tracking-tight text-ink transition-colors duration-300 group-hover:text-copper">
                {principle.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-ink/60">{principle.body}</p>
            </article>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function DriverLab() {
  const [active, setActive] = useState(0);
  const driver = DRIVERS[active]!;

  return (
    <section className="bg-ink px-6 py-24 text-paper md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel>Build your mental model</SectionLabel>
            <h2 className="mt-8 max-w-[14ch] font-display text-5xl leading-[1.02] tracking-tight md:text-6xl">
              What actually moves a portfolio?
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-paper/55">
            Tap through five inputs. The point is not to predict the market — it is to ask a better
            question before you act.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div className="border-t border-paper/20">
            {DRIVERS.map((item, index) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={active === index}
                className={cn(
                  "group flex w-full items-center gap-5 border-b border-paper/20 py-5 text-left transition-colors",
                  active === index ? "text-paper" : "text-paper/45 hover:text-paper/80",
                )}
              >
                <span
                  className={cn("eyebrow w-7", active === index ? "text-copper" : "text-paper/35")}
                >
                  0{index + 1}
                </span>
                <span className="flex-1">
                  <span className="block font-display text-2xl">{item.key}</span>
                  <span className="mt-1 block text-xs text-paper/45">{item.line}</span>
                </span>
                <ChevronRight
                  className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    active === index && "translate-x-1 text-copper",
                  )}
                />
              </button>
            ))}
          </div>

          <div className="relative min-h-[330px] overflow-hidden border border-paper/15 bg-paper/[0.06] p-7 md:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(244,240,234,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(244,240,234,.08) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
              }}
            />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="eyebrow text-copper">Active input</p>
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={driver.key}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="mt-4 font-display text-4xl tracking-tight"
                    >
                      {driver.key}
                    </motion.h3>
                  </AnimatePresence>
                </div>
                <Sparkles className="h-5 w-5 text-copper/80" />
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={driver.body}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, delay: 0.04 }}
                  className="max-w-xl text-xl leading-relaxed text-paper/75"
                >
                  {driver.body}
                </motion.p>
              </AnimatePresence>
              <div className="mt-10 border-t border-paper/15 pt-5">
                <div className="flex items-center justify-between text-xs text-paper/45">
                  <span>One input at a time</span>
                  <span>{String(active + 1).padStart(2, "0")} / 05</span>
                </div>
                <div className="mt-3 h-1 bg-paper/10">
                  <motion.div
                    className="h-full bg-copper"
                    animate={{ width: `${((active + 1) / DRIVERS.length) * 100}%` }}
                    transition={{ duration: 0.35 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NotesShelf() {
  const [category, setCategory] = useState("All notes");
  const categories = ["All notes", ...NOTE_CATEGORIES.slice(0, 5)];
  const notes =
    category === "All notes"
      ? NOTES.slice(0, 4)
      : NOTES.filter((note) => note.kicker === category).slice(0, 4);
  const visibleNotes = notes.length > 0 ? notes : NOTES.slice(0, 4);

  return (
    <section className="px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel>Wilson&apos;s market notes</SectionLabel>
            <h2 className="mt-8 max-w-[14ch] font-display text-5xl leading-[1.03] tracking-tight text-ink md:text-6xl">
              The thinking, written down.
            </h2>
          </div>
          <Link
            to="/learn"
            className="group inline-flex items-center gap-2 text-sm font-medium text-copper"
          >
            Browse all notes
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="mt-12 flex gap-2 overflow-x-auto border-b border-ink/15 pb-3 hide-scrollbar">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={cn(
                "whitespace-nowrap px-4 py-2 text-xs font-medium transition-colors",
                category === item ? "bg-ink text-paper" : "text-ink/50 hover:text-ink",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-px overflow-hidden border border-ink/15 bg-ink/15 md:grid-cols-2">
          {visibleNotes.map((note, index) => (
            <FadeUp key={`${category}-${note.title}`} delay={index * 0.05}>
              <Link
                to="/learn"
                className="group flex h-full min-h-[240px] flex-col bg-paper p-7 transition-colors duration-300 hover:bg-paper-dark md:p-9"
              >
                <div className="flex items-center justify-between gap-5">
                  <span className="eyebrow text-copper">{note.kicker}</span>
                  <span className="text-xs text-ink/45">{note.read} read</span>
                </div>
                <h3 className="mt-12 max-w-[17ch] font-display text-3xl leading-tight tracking-tight text-ink transition-colors group-hover:text-copper">
                  {note.title}
                </h3>
                <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                  <p className="max-w-md text-sm leading-6 text-ink/55">{note.body}</p>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-colors group-hover:border-copper group-hover:text-copper">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkshopCallout() {
  return (
    <section className="px-6 pb-24 md:px-10 md:pb-36">
      <div className="mx-auto grid max-w-[1400px] overflow-hidden bg-paper-dark lg:grid-cols-[0.94fr_1.06fr]">
        <div className="relative min-h-[350px] overflow-hidden bg-ink">
          <WorkshopMedia />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
          <p className="absolute bottom-7 left-7 eyebrow text-paper/60">
            Workshops · Speaking · Corporate programmes
          </p>
        </div>
        <div className="flex flex-col justify-center p-8 md:p-14 lg:p-16">
          <SectionLabel>Make the room smarter</SectionLabel>
          <h2 className="mt-8 max-w-[12ch] font-display text-5xl leading-[1.02] tracking-tight text-ink md:text-6xl">
            A room that leaves calmer than it arrived.
          </h2>
          <p className="mt-7 max-w-lg text-base leading-7 text-ink/65">
            Practical sessions on investor psychology, market fundamentals and financial literacy —
            for corporates, colleges, communities and investor groups.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/workshops">
              <MagneticButton
                variant="primary"
                className="rounded-sm bg-ink text-paper hover:bg-ink/85"
              >
                Explore programmes
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-3 text-sm font-medium text-copper"
            >
              Start an enquiry <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-ink/15 pt-5">
            {WORKSHOPS.slice(0, 2).map((workshop) => (
              <div key={workshop.title}>
                <p className="text-sm font-medium text-ink">{workshop.title}</p>
                <p className="mt-1 text-xs text-ink/50">{workshop.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkshopMedia() {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#233b35] text-paper">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent 0 48%, rgba(244,240,234,.16) 49% 50%, transparent 51%), linear-gradient(45deg, transparent 0 48%, rgba(244,240,234,.08) 49% 50%, transparent 51%)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-copper/45" />
        <div className="absolute bottom-8 right-8 h-36 w-36 rounded-full border border-paper/15" />
        <div className="relative flex h-full flex-col justify-between p-8">
          <div className="flex items-center justify-between">
            <span className="eyebrow text-paper/55">Live session</span>
            <span className="h-2 w-2 rounded-full bg-copper" />
          </div>
          <div>
            <p className="max-w-[12ch] font-display text-4xl leading-tight">
              Good questions make better investors.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-2">
              <span className="h-1 bg-copper/80" />
              <span className="h-1 bg-paper/30" />
              <span className="h-1 bg-paper/30" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src="/images/workshop.jpg"
      alt="A financial literacy workshop in session"
      width={1280}
      height={912}
      loading="lazy"
      onError={() => setImageError(true)}
      className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-1000 hover:scale-[1.04]"
    />
  );
}

function HomeClosing() {
  return (
    <section className="px-6 pb-28 md:px-10 md:pb-40">
      <div className="mx-auto max-w-[1400px] border-t border-ink/15 pt-20 md:pt-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="eyebrow text-copper">The next sensible step</p>
            <h2 className="mt-7 max-w-[12ch] font-display text-5xl leading-[1.02] tracking-tight text-ink md:text-7xl">
              Clarity is a competitive advantage.
            </h2>
          </div>
          <div>
            <p className="max-w-md text-base leading-7 text-ink/60">
              Follow the thinking, read the notes or bring a programme to your team. No tips, no
              urgency — just a better conversation about money.
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              <a
                href={PERSON.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                <Instagram className="h-4 w-4 text-copper" />
                {PERSON.instagramHandle}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href={`mailto:${PERSON.email}`}
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                <Mail className="h-4 w-4 text-copper" />
                Email Wilson
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex items-center gap-3 border-t border-ink/15 pt-5 text-xs text-ink/45">
          <Check className="h-3.5 w-3.5 text-sage" />
          <span>Education only · No stock recommendations · No portfolio management</span>
        </div>
      </div>
    </section>
  );
}
