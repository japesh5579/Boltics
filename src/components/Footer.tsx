import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "./SocialIcons";

const MAP_QUERY = encodeURIComponent("Aggarwal Industries, Annia Road, Amloh, Punjab 147203");

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink-soft">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-16 lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Aggarwal Industries" width={48} height={27} className="h-10 w-auto" />
            <div className="font-display leading-[0.85] uppercase">
              <div className="text-xl font-semibold tracking-wide text-orange">Aggarwal</div>
              <div className="text-xl font-semibold tracking-[0.15em] text-white">Industries</div>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
            Manufacturer of agricultural implements since 1988 &mdash; cultivator shovels, seed
            drill shovels and shovel bolts from our own Rolling, Forging and Heat Treatment unit.
          </p>
          <div className="mt-7 flex items-center gap-3">
            {[
              { Icon: FacebookIcon, href: "#", label: "Facebook" },
              { Icon: InstagramIcon, href: "https://www.instagram.com/ai.aggarwalindustries/", label: "Instagram" },
              { Icon: YoutubeIcon, href: "#", label: "YouTube" },
              { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-orange hover:bg-orange hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-white">Contact Us</p>
          <ul className="mt-6 flex flex-col gap-4 text-sm text-white/55">
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-orange">
                <Phone size={14} />
              </span>
              <div className="flex flex-col">
                <a href="tel:+919814130286" className="hover:text-orange">+91 98141-30286</a>
                <a href="tel:+919888951221" className="hover:text-orange">+91 98889-51221</a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-orange">
                <Mail size={14} />
              </span>
              <a href="mailto:Sales.Aggarwalindustries@gmail.com" className="hover:text-orange">
                Sales.Aggarwalindustries@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-orange">
                <MapPin size={14} />
              </span>
              <span className="pt-2">Opp. HDFC Bank, Annia Road, Amloh &ndash; 147203, Punjab, India</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-white">Our Location</p>
          <div className="relative mt-6 h-44 overflow-hidden rounded-md border border-white/10">
            <iframe
              title="Aggarwal Industries location"
              src={`https://maps.google.com/maps?q=${MAP_QUERY}&z=14&output=embed`}
              className="h-full w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-widest text-orange hover:text-orange-light"
          >
            View on Map <ArrowRight size={13} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/45 sm:flex-row lg:px-10">
          <p>&copy; {new Date().getFullYear()} Aggarwal Industries. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-orange">Privacy Policy</a>
            <a href="#" className="hover:text-orange">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
