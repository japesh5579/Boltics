import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "./SocialIcons";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Manufacturing", href: "#manufacturing" },
  { label: "Dealership", href: "#dealership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Get a Quote", href: "#quote" },
  { label: "Contact Us", href: "#contact" },
];
const PRODUCT_LINKS = [
  "Cultivator Shovel",
  "Seed Drill Shovel",
  "4 Hole Shovel",
  "Bhartpuri Shovel",
  "Duck Foot Shovel",
  "Shovel Bolts",
];

const MAP_QUERY = encodeURIComponent("Aggarwal Industries, Annia Road, Amloh, Punjab 147203");

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink-soft">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:px-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Aggarwal Industries" width={40} height={23} className="h-8 w-auto" />
            <div className="font-display leading-[0.85] uppercase">
              <div className="text-base font-semibold tracking-wide text-orange">Aggarwal</div>
              <div className="text-base font-semibold tracking-[0.15em] text-white">Industries</div>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
            Manufacturer of agricultural implements since 1988 &mdash; cultivator shovels, seed
            drill shovels and shovel bolts from our own Rolling, Forging and Tempering unit.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-orange hover:bg-orange hover:text-white"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-white">Quick Links</p>
          <ul className="mt-5 flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-white/55 transition-colors hover:text-orange">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-white">Products</p>
          <ul className="mt-5 flex flex-col gap-3">
            {PRODUCT_LINKS.map((link) => (
              <li key={link}>
                <a href="#products" className="text-sm text-white/55 transition-colors hover:text-orange">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-white">Contact Us</p>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-white/55">
            <li className="flex items-center gap-3">
              <Phone size={15} className="shrink-0 text-orange" />
              <a href="tel:+919814130286" className="hover:text-orange">+91 98141-30286</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={15} className="shrink-0 text-orange" />
              <a href="tel:+919888951221" className="hover:text-orange">+91 98889-51221</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} className="shrink-0 text-orange" />
              <a href="mailto:Sales.Aggarwalindustries@gmail.com" className="hover:text-orange">
                Sales.Aggarwalindustries@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0 text-orange" />
              <span>Opp. HDFC Bank, Annia Road, Amloh &ndash; 147203, Punjab, India</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-white">Our Location</p>
          <div className="relative mt-5 h-32 overflow-hidden rounded-md border border-white/10">
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
