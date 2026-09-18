import type { LucideIcon } from "lucide-react";

import { FadeUp } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

export type IconRuleItem = {
  icon: LucideIcon;
  title: string;
  /** Optional trailing fragment of the title rendered in an accent colour. */
  emphasis?: string;
  body: string;
  tone?: "bull" | "gold" | "bear";
};

const toneText = {
  bull: "text-bull",
  gold: "text-gold",
  bear: "text-bear",
} as const;

/**
 * Editorial three-column row: mark, hairline rule, serif heading, short copy.
 * No card fill — the rule and whitespace carry the structure.
 */
export function IconRuleRow({
  items,
  className,
}: {
  items: readonly IconRuleItem[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-x-14 gap-y-12 md:grid-cols-3", className)}>
      {items.map((item, i) => {
        const Icon = item.icon;
        const accent = item.tone ? toneText[item.tone] : "text-gold";
        return (
          <FadeUp key={item.title} delay={i * 0.08}>
            <div className="group h-full">
              <Icon
                className={cn("h-6 w-6", accent)}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div
                className={cn(
                  "mt-5 h-px w-full origin-left bg-gold/40 transition-colors duration-500",
                  "group-hover:bg-gold/70",
                )}
              />
              <h3 className="type-h2 mt-6">
                {item.title}
                {item.emphasis && (
                  <>
                    {" "}
                    <span className={accent}>{item.emphasis}</span>
                  </>
                )}
              </h3>
              <p className="type-body mt-4 max-w-sm text-muted-foreground">{item.body}</p>
            </div>
          </FadeUp>
        );
      })}
    </div>
  );
}
