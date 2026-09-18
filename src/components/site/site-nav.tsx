import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/philosophy", label: "Philosophy" },
  { to: "/learn", label: "Learn" },
  { to: "/workshops", label: "Workshops" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "site-nav fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        scrolled
          ? "border-ink/15 bg-paper/92 shadow-[0_12px_30px_-24px_var(--ink)] backdrop-blur-xl"
          : "border-transparent bg-paper/80 backdrop-blur-md",
      )}
    >
      <nav className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 md:grid-cols-[auto_1fr_auto] md:px-10">
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-none text-ink">
              Wilson Arthur
            </span>
            <span className="mt-1 hidden truncate text-[0.625rem] uppercase tracking-[0.2em] text-ink/45 min-[420px]:block">
              Market experience · education
            </span>
          </span>
        </Link>

        <div className="hidden items-center justify-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative text-sm text-ink/50 transition-colors duration-300 hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-copper after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
              activeProps={{ className: "text-ink" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden items-center gap-2 text-sm font-medium text-copper md:inline-flex"
        >
          Start a conversation <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-ink/15 text-ink md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 top-[72px] z-40 bg-paper/98 px-6 pt-10 backdrop-blur-2xl md:hidden">
          <ul className="flex flex-col gap-2">
            {[...LINKS, { to: "/contact", label: "Contact" }].map((link) => (
              <li key={link.to} className="border-b border-ink/15">
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block py-5 type-h2 text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
