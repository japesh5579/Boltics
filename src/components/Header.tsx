"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Manufacturing", href: "/#manufacturing" },
  { label: "Dealership", href: "/#dealership" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact Us", href: "/dealership-application" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur-sm shadow-lg shadow-black/40" : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-10">
        <a href="/#home" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Aggarwal Industries" width={44} height={25} className="h-9 w-auto shrink-0" priority />
          <div className="font-display leading-[0.85] uppercase">
            <div className="text-lg font-semibold tracking-wide text-orange">Aggarwal</div>
            <div className="text-lg font-semibold tracking-[0.15em] text-white">Industries</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 xl:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`font-display text-[13px] font-medium uppercase tracking-wider text-white/90 transition-colors hover:text-orange ${
                active === link.label ? "text-orange" : ""
              } relative pb-1`}
            >
              {link.label}
              {active === link.label && (
                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-orange" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href="/#quote"
            className="inline-flex items-center gap-2 rounded-sm bg-orange px-6 py-3 font-display text-[13px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-orange-dark"
          >
            Get a Quote
          </a>
        </div>

        <button
          className="text-white xl:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink/98 px-5 py-6 xl:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActive(link.label);
                  setOpen(false);
                }}
                className="font-display text-sm font-medium uppercase tracking-wider text-white/90 hover:text-orange"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#quote"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-sm bg-orange px-6 py-3 font-display text-[13px] font-semibold uppercase tracking-wider text-white"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
