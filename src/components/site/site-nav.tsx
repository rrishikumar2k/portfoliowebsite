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
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "site-nav fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          open
            ? "border-ink/15 bg-paper"
            : scrolled
              ? "border-ink/15 bg-paper/95 shadow-sm backdrop-blur-md"
              : "border-transparent bg-paper/80 backdrop-blur-sm",
        )}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-4 md:px-10">
          <Link
            to="/"
            className="group flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <div className="flex flex-col">
              <span className="font-display text-lg font-medium leading-none text-ink">
                Wilson Arthur
              </span>
              <span className="mt-1 hidden text-[0.6rem] uppercase tracking-widest text-ink/50 min-[400px]:block">
                Market Experience · Education
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative text-sm text-ink/60 transition-colors duration-200 hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-copper after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
                activeProps={{ className: "text-ink font-medium" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden items-center gap-2 text-sm font-medium text-copper transition-colors hover:text-ink md:inline-flex"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          {/* Mobile Hamburger Menu Button */}
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((prev) => !prev)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-ink/20 bg-paper text-ink transition-colors hover:bg-paper-dark md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Fullscreen Solid Opaque Mobile Overlay Menu */}
      {open && (
        <div className="fixed inset-0 top-[65px] z-40 flex flex-col justify-between overflow-y-auto bg-paper px-6 py-8 md:hidden">
          <div className="flex flex-col gap-2">
            <p className="eyebrow pb-2 text-copper">Navigation</p>
            {[...LINKS, { to: "/contact", label: "Contact" }].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-ink/10 py-4 text-2xl font-display text-ink transition-colors hover:text-copper"
                activeProps={{ className: "text-copper font-medium" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="h-5 w-5 text-ink/40" />
              </Link>
            ))}
          </div>

          <div className="mt-8 border-t border-ink/15 pt-6">
            <p className="eyebrow text-ink/50">Wilson Arthur</p>
            <p className="mt-1 text-xs text-ink/70">
              Investor Education & Market Experience · India
            </p>
          </div>
        </div>
      )}
    </>
  );
}
