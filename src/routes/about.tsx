import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram } from "lucide-react";

import { CREDENTIALS, IDEAS, PERSON, STATS } from "@/content/site";
import { Counter, FadeUp, GlassPanel, Reveal, SectionLabel } from "@/components/site/primitives";
import { ConceptTicker } from "@/components/site/bull-bear";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Wilson Arthur — 20+ Years in Indian Markets" },
      {
        name: "description",
        content: "Wilson Arthur, Senior Branch Head at Anand Rathi, has spent two decades inside Indian markets. Today he teaches investors to understand them.",
      },
      { property: "og:title", content: "About Wilson Arthur — 20+ Years in Indian Markets" },
      {
        property: "og:description",
        content: "Two decades of market experience, now spent on investor education across corporates, campuses and communities.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="px-6 pb-14 pt-40 md:px-10 md:pb-20 md:pt-52">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <h1 className="mt-10 type-h1">
              <Reveal>This is</Reveal>
              <Reveal delay={0.1}>
                <span className="text-bull">Wilson Arthur.</span>
              </Reveal>
            </h1>
            <FadeUp delay={0.25}>
              <p className="mt-10 max-w-xl type-lead text-muted-foreground">
                I've spent more than two decades watching markets move, change and surprise
                investors — through 2008, through the long flat middle, through 2020 and everything
                since. Today I focus on helping people understand what sits behind the movement:
                the economy, the numbers, and their own behaviour.
              </p>
              <p className="mt-5 max-w-xl type-lead text-muted-foreground">
                Most of that work happens in rooms — corporate sessions, campuses, investor groups
                — and in short form on Instagram. This site is where the short form lives in long
                form.
              </p>
              <ul className="mt-9 flex flex-wrap gap-2">
                {CREDENTIALS.map((c) => (
                  <li
                    key={c}
                    className="rounded-sm border border-hairline px-4 py-2 type-label text-muted-foreground"
                  >
                    {c}
                  </li>
                ))}
              </ul>
              <a
                href={PERSON.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex items-center gap-2 text-sm text-bull underline-offset-8 transition-colors hover:underline"
              >
                <Instagram className="h-4 w-4" /> {PERSON.instagramHandle}
              </a>
            </FadeUp>
          </div>

          <FadeUp delay={0.15}>
            <figure className="relative overflow-hidden border border-hairline">
              <img
                src="/images/portrait-speaking.jpg"
                alt="Wilson Arthur in a professional portrait"
                width={640}
                height={640}
                className="h-full max-h-[560px] w-full object-cover object-top opacity-95"
              />
            </figure>
          </FadeUp>
        </div>
      </section>

      <ConceptTicker />

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Two decades, counted</SectionLabel>
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.07}>
                <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-card">
                  <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none transition-colors duration-500 group-hover:text-bull">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-5 text-sm leading-snug text-foreground/85">{s.label}</p>
                  <p className="mt-2 type-label text-muted-foreground">
                    {s.note}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 md:px-10 md:pb-40">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Ideas worth studying</SectionLabel>
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <Reveal as="h2">
                <span className="block type-h1">
                  Ideas from investors worth studying.
                </span>
              </Reveal>
              <FadeUp delay={0.1}>
                <p className="mt-6 max-w-sm type-body text-muted-foreground">
                  Frameworks that have survived several decades and several countries. Taught here
                  as reading material — there is no association, endorsement or affiliation of any
                  kind with the people below.
                </p>
                <figure className="mt-8 overflow-hidden rounded-md border border-hairline">
                  <img
                    src="/images/ideas-portrait.jpg"
                    alt="Wilson Arthur in a professional headshot"
                    width={640}
                    height={640}
                    loading="lazy"
                    className="h-48 w-full object-cover opacity-70 grayscale transition-all duration-700 hover:opacity-95 hover:grayscale-0 sm:h-60"
                  />
                </figure>
              </FadeUp>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {IDEAS.map((it, i) => (
                <FadeUp key={it.name} delay={i * 0.06}>
                  <GlassPanel className="h-full p-7">
                    <p className="type-label text-muted-foreground">
                      {it.name}
                    </p>
                    <h3 className="mt-4 type-h2 text-bull">{it.idea}</h3>
                    <p className="mt-3 type-body text-muted-foreground">{it.body}</p>
                  </GlassPanel>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp>
            <div className="mt-16 flex flex-col gap-5 border-t border-hairline pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md type-h2">
                Want this taught in your room?
              </p>
              <Link
                to="/workshops"
                className="inline-flex items-center gap-2 text-sm text-bull underline-offset-8 transition-colors hover:underline"
              >
                Workshops &amp; speaking <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
