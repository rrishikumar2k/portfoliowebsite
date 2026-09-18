import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";

import { AUDIENCES, FAQS, SPEAKING, WORKSHOPS, WORKSHOP_TOPICS } from "@/content/site";
import { FadeUp, GlassPanel, MagneticButton, Reveal, SectionLabel } from "@/components/site/primitives";
import { TickerStrip } from "@/components/site/bull-bear";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title: "Workshops & Speaking — Wilson Arthur" },
      {
        name: "description",
        content: "Investor awareness workshops, corporate financial literacy programmes and speaking engagements led by market veteran Wilson Arthur.",
      },
      { property: "og:title", content: "Workshops & Speaking — Wilson Arthur" },
      {
        property: "og:description",
        content: "Financial literacy sessions for organisations, institutions and communities. Education only — no tips, no advisory.",
      },
      { property: "og:url", content: "/workshops" },
    ],
    links: [{ rel: "canonical", href: "/workshops" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({ "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Workshops,
});

function WorkshopsHeroImage() {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="relative h-full min-h-[400px] w-full overflow-hidden bg-[#152224]">
        {/* Diagonal crosshatch pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent 0 48%, rgba(244,240,234,.12) 49% 50%, transparent 51%), linear-gradient(45deg, transparent 0 48%, rgba(244,240,234,.06) 49% 50%, transparent 51%)",
            backgroundSize: "52px 52px",
          }}
        />
        {/* Decorative elements */}
        <div className="absolute -right-14 -top-14 h-52 w-52 rounded-full border border-[var(--copper)]/25" />
        <div className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-[var(--sage)]/8 blur-3xl" />
        <div className="absolute bottom-20 right-16 h-24 w-24 rounded-full border border-[var(--paper)]/10" />
        {/* Content */}
        <div className="relative flex h-full flex-col justify-between p-8 text-[var(--paper)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="eyebrow text-[var(--paper)]/50">Live session</p>
              <p className="mt-3 max-w-[16ch] font-display text-3xl leading-tight">
                Good questions make better investors.
              </p>
            </div>
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--paper)]/20 font-display text-sm text-[var(--copper)]">
              WA
            </span>
          </div>
          <div>
            {/* Audience icons row */}
            <div className="flex items-center gap-3">
              {["Corporates", "Colleges", "Communities", "Investors"].map((label, i) => (
                <div key={label} className="flex-1">
                  <div
                    className="mb-2 h-1 rounded-full"
                    style={{
                      background: i === 0 ? "var(--copper)" : "rgba(244,240,234,0.2)",
                    }}
                  />
                  <p className="font-mono text-[0.6rem] uppercase tracking-widest text-[var(--paper)]/40">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-end justify-between border-t border-[var(--paper)]/15 pt-4">
              <div>
                <p className="eyebrow text-[var(--paper)]/40">The format</p>
                <p className="mt-1 text-sm text-[var(--paper)]/65">90 min to full day</p>
              </div>
              <p className="font-mono text-xs text-[var(--paper)]/35">300+ sessions</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src="/images/portrait-speaking.jpg"
      alt="Wilson Arthur speaking at a financial literacy workshop"
      width={900}
      height={1100}
      onError={() => setImageError(true)}
      className="h-full min-h-[400px] w-full object-cover object-top opacity-85 transition-transform duration-1000 hover:scale-[1.03]"
    />
  );
}

function Workshops() {
  return (
    <>
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <div className="mx-auto grid max-w-[1400px] items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h1 className="mt-10 max-w-[15ch] type-display">
              <Reveal>A room that</Reveal>
              <Reveal delay={0.1}>
                leaves <span className="text-bull">calmer</span>
              </Reveal>
              <Reveal delay={0.2}>than it arrived.</Reveal>
            </h1>
            <FadeUp delay={0.3}>
              <p className="mt-10 max-w-lg type-body text-muted-foreground">
                Sessions are built around understanding, not excitement. Participants leave with a
                framework they can use, and a healthy scepticism toward anyone promising certainty.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="relative hidden lg:block">
            <div className="overflow-hidden border border-ink/15 shadow-[0_32px_80px_-44px_rgba(21,34,36,0.55)]">
              <WorkshopsHeroImage />
            </div>
            <div className="absolute -bottom-6 -left-6 border border-ink/15 bg-paper px-5 py-4 shadow-lg">
              <p className="eyebrow text-ink/50">Workshops</p>
              <p className="mt-2 font-display text-lg text-ink">Understanding, not excitement.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <TickerStrip />

      <section className="px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-24">
        <div className="mx-auto max-w-[1400px]">
          <FadeUp>
            <figure className="group relative overflow-hidden border border-hairline">
              <img
                src="/images/workshop.jpg"
                alt="Darkened auditorium during a corporate financial literacy workshop"
                width={1280}
                height={912}
                loading="lazy"
                className="h-56 w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-[1.02] group-hover:opacity-100 md:h-96"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background to-transparent p-6 text-xs text-muted-foreground">
                Boardrooms, campuses and community halls — same material, different room.
              </figcaption>
            </figure>
          </FadeUp>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionLabel>What the sessions cover</SectionLabel>
            <Reveal as="h2" className="mt-8">
              <span className="block type-h1">
                Six subjects, one honest frame.
              </span>
            </Reveal>
            <FadeUp delay={0.1}>
              <p className="mt-6 max-w-sm type-body text-muted-foreground">
                Modules are combined to suit the room — a 90-minute campus talk, a half day for a
                team, or a modular series across weeks.
              </p>
              <div className="mt-8">
                <p className="eyebrow">Delivered for</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {AUDIENCES.map((a) => (
                    <li
                      key={a}
                      className="rounded-sm border border-hairline px-4 py-2 type-label text-muted-foreground"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {WORKSHOP_TOPICS.map((t, i) => (
              <FadeUp key={t} delay={i * 0.05}>
                <li className="flex items-center gap-4 rounded-md border border-hairline px-6 py-5 transition-colors duration-500 hover:border-bull/45 hover:bg-bull/[0.05]">
                  <span className="type-h2">{t}</span>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-[1400px] gap-6 md:grid-cols-2">
          {WORKSHOPS.map((w, i) => (
            <FadeUp key={w.title} delay={i * 0.07}>
              <GlassPanel className="flex h-full flex-col p-8 md:p-10">
                <h2 className="type-h2">{w.title}</h2>
                <p className="mt-5 flex-1 type-body text-muted-foreground">{w.body}</p>
                <dl className="mt-8 grid gap-3 border-t border-hairline pt-6 text-xs sm:grid-cols-2">
                  <div>
                    <dt className="eyebrow">Format</dt>
                    <dd className="mt-1.5 text-foreground/85">{w.duration}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Built for</dt>
                    <dd className="mt-1.5 text-foreground/85">{w.audience}</dd>
                  </div>
                </dl>
              </GlassPanel>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Speaking</SectionLabel>
            <Reveal as="h2" className="mt-8">
              <span className="block max-w-[16ch] type-h1">
                Stages where honesty is more useful than hype.
              </span>
            </Reveal>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline">
            {SPEAKING.map((s, i) => (
              <FadeUp key={s} delay={i * 0.05}>
                <li className="flex items-center gap-4 bg-background px-7 py-6 text-sm transition-colors duration-500 hover:bg-card">
                  <Check className="h-3.5 w-3.5 shrink-0 text-bull" />
                  {s}
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Questions, answered plainly</SectionLabel>
            <Reveal as="h2" className="mt-8">
              <span className="block max-w-[14ch] type-h1">
                Including the uncomfortable ones.
              </span>
            </Reveal>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="border-hairline">
                <AccordionTrigger className="py-6 text-left font-display text-xl leading-snug hover:no-underline md:text-2xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-8 type-body text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-10 md:pb-44">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-8 border border-bull/25 bg-bull/[0.05] p-8 md:flex-row md:items-center md:justify-between md:p-14">
          <p className="max-w-lg type-h2">
            Have an audience that deserves better than tips?
          </p>
          <Link to="/contact">
            <MagneticButton variant="primary">
              Send an enquiry
              <ArrowUpRight className="h-4 w-4 text-bull" />
            </MagneticButton>
          </Link>
        </div>
      </section>
    </>
  );
}
