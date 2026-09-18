import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Instagram, Loader2, Mail, ShieldAlert, Sparkles } from "lucide-react";
import { toast } from "sonner";

import { PERSON } from "@/content/site";
import { FadeUp, Reveal, SectionLabel } from "@/components/site/primitives";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Enquiries — Wilson Arthur" },
      {
        name: "description",
        content: "Enquire about a workshop, extend a speaking invitation, or get in touch with financial educator Wilson Arthur.",
      },
      { property: "og:title", content: "Contact & Enquiries — Wilson Arthur" },
      {
        property: "og:description",
        content: "Workshop enquiries, speaking invitations and general correspondence.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const TYPES = [
  { value: "workshop", label: "Workshop enquiry" },
  { value: "speaking", label: "Speaking invitation" },
  { value: "general", label: "Something else" },
] as const;

function InputContainer({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="eyebrow text-ink/60">{label}</label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-sm border border-ink/15 bg-paper/60 px-4 py-3 text-sm text-ink outline-none transition-all duration-300 placeholder:text-ink/40 focus:border-copper focus:bg-paper focus:ring-1 focus:ring-copper/40";

function Contact() {
  const [type, setType] = useState<string>("workshop");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      phone: String(form.get("phone") ?? "").trim() || null,
      organisation: String(form.get("organisation") ?? "").trim() || null,
      message: String(form.get("message") ?? "").trim(),
      enquiry_type: type,
    };

    if (!payload.name || !payload.message) {
      toast.error("Please add your name and a short message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setBusy(true);
    const { error } = await supabase.from("enquiries").insert(payload);
    setBusy(false);

    if (error) {
      toast.error("Your message didn't send. Please try again.");
      return;
    }
    setDone(true);
    toast.success("Received. You'll hear back personally.");
  }

  return (
    <section className="px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="mt-6 max-w-[14ch] type-display text-ink">
              <Reveal>Start a</Reveal>
              <Reveal delay={0.1}>
                <span className="text-copper">conversation.</span>
              </Reveal>
            </h1>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Form Card */}
          <FadeUp className="rounded-md border border-ink/15 bg-paper-dark/50 p-6 shadow-sm sm:p-8 md:p-10">
            {done ? (
              <div className="flex flex-col items-start gap-4 py-8">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-sage/15 text-sage">
                  <Check className="h-6 w-6" />
                </span>
                <h2 className="font-display text-3xl text-ink">Your message has been sent.</h2>
                <p className="max-w-md text-sm text-ink/70">
                  Every enquiry is read personally. Expect a reply within 1-2 working days.
                </p>
                <button
                  type="button"
                  onClick={() => setDone(false)}
                  className="mt-4 rounded-sm border border-ink/20 bg-paper px-5 py-2.5 text-xs font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="eyebrow block text-ink/60">Select Topic</label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {TYPES.map((t) => (
                      <button
                        key={t.value}
                        type="button"
                        onClick={() => setType(t.value)}
                        className={cn(
                          "rounded-sm border px-4 py-2.5 text-xs font-medium transition-all duration-200",
                          type === t.value
                            ? "border-ink bg-ink text-paper shadow-sm"
                            : "border-ink/15 bg-paper/80 text-ink/70 hover:border-ink/40 hover:text-ink",
                        )}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <InputContainer label="Your Name *">
                    <input
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className={inputClass}
                    />
                  </InputContainer>
                  <InputContainer label="Email Address *">
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      className={inputClass}
                    />
                  </InputContainer>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <InputContainer label="Phone Number (Optional)">
                    <input name="phone" placeholder="+91 98765 43210" className={inputClass} />
                  </InputContainer>
                  <InputContainer label="Organisation (Optional)">
                    <input
                      name="organisation"
                      placeholder="Company, College or Community"
                      className={inputClass}
                    />
                  </InputContainer>
                </div>

                <InputContainer label="Your Message *">
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Provide context on audience size, format, preferred dates, location, or key themes you'd like addressed."
                    className={cn(inputClass, "resize-none")}
                  />
                </InputContainer>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={busy}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-sm bg-ink px-8 py-4 text-sm font-medium tracking-wide text-paper transition-colors duration-300 hover:bg-copper disabled:opacity-50 sm:w-auto"
                  >
                    {busy ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit enquiry</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </FadeUp>

          {/* Sidebar / Info Cards */}
          <div className="flex flex-col gap-6">
            {/* Direct Channel Card */}
            <FadeUp delay={0.08} className="rounded-md border border-ink/15 bg-paper p-6 sm:p-7">
              <div className="flex items-center gap-3 text-copper">
                <Mail className="h-4 w-4" />
                <span className="eyebrow text-copper">Direct Channel</span>
              </div>
              <h3 className="mt-3 font-display text-xl text-ink">Prefer email?</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                Send notes directly to Wilson's personal inbox for long-form correspondence or speaking invitations.
              </p>
              <a
                href={`mailto:${PERSON.email}`}
                className="mt-4 inline-flex items-center gap-2 font-mono text-sm font-medium text-copper transition-colors hover:text-ink"
              >
                {PERSON.email}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </FadeUp>

            {/* Social Connect Card */}
            <FadeUp delay={0.12} className="rounded-md border border-ink/15 bg-paper p-6 sm:p-7">
              <div className="flex items-center gap-3 text-copper">
                <Instagram className="h-4 w-4" />
                <span className="eyebrow text-copper">Social & Writing</span>
              </div>
              <h3 className="mt-3 font-display text-xl text-ink">Instagram & Market Notes</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                Short-form breakdowns, market commentary and reader Q&As published regularly on Instagram.
              </p>
              <a
                href={PERSON.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-copper"
              >
                Follow {PERSON.instagramHandle}
                <ArrowUpRight className="h-3.5 w-3.5 text-copper" />
              </a>
            </FadeUp>

            {/* Scope / Terms Card Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              <FadeUp delay={0.16} className="rounded-md border border-sage/30 bg-sage/5 p-5">
                <div className="flex items-center gap-2 text-sage">
                  <Sparkles className="h-4 w-4" />
                  <span className="eyebrow text-sage">Scope of Work</span>
                </div>
                <ul className="mt-3 space-y-2 text-xs leading-relaxed text-ink/75">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-sage" />
                    <span>Corporate & campus financial education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-sage" />
                    <span>Investor awareness workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-sage" />
                    <span>Keynote lectures & panel discussions</span>
                  </li>
                </ul>
              </FadeUp>

              <FadeUp delay={0.2} className="rounded-md border border-rust/30 bg-rust/5 p-5">
                <div className="flex items-center gap-2 text-rust">
                  <ShieldAlert className="h-4 w-4" />
                  <span className="eyebrow text-rust">Notice</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-ink/70">
                  Education only. No stock tips, wealth management, guaranteed returns, or SEBI advisory services.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
