import { Instagram } from "lucide-react";

import { PERSON } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div className="min-w-0">
            <h2 className="max-w-xl type-h2">
              Occasional notes on markets, behaviour and long-term thinking.
            </h2>
            <p className="mt-5 max-w-md type-body text-muted-foreground">
              No tips. No urgency. A short letter when there is something genuinely worth
              understanding.
            </p>
          </div>

          <div className="text-sm">
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              <li>
                <a
                  href={PERSON.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Instagram className="h-3.5 w-3.5" /> {PERSON.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
