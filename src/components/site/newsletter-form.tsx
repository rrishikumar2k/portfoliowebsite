import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setBusy(true);
    const { error } = await supabase.from("subscribers").insert({ email: email.trim() });
    setBusy(false);
    if (error && !error.message.includes("duplicate")) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    setEmail("");
    toast.success("You're on the list. Notes arrive occasionally, never daily.");
  }

  return (
    <form onSubmit={onSubmit} className={cn("group relative", className)}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="w-full border-b border-input bg-transparent py-4 pr-14 text-base text-foreground outline-none transition-colors duration-500 placeholder:text-muted-foreground/60 focus:border-gold"
      />
      <button
        type="submit"
        disabled={busy}
        aria-label="Subscribe"
        className="absolute right-0 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-sm border border-border text-muted-foreground transition-all duration-500 hover:border-gold/70 hover:text-gold disabled:opacity-50"
      >
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
      </button>
    </form>
  );
}
