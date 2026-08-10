"use client";

import Link from "next/link";

const company = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services & Products", href: "/services" },
  { name: "Investments", href: "/investments" },
  { name: "Crypto", href: "/crypto" },
  { name: "Aquaponics", href: "/aquaponics" },
];

const sectors = [
  { name: "Education", href: "/education" },
  { name: "Tourism", href: "/tourism" },
  { name: "Energy", href: "/energy" },
  { name: "Agriculture", href: "/agriculture" },
];

const resources = [
  { name: "Blog & News", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const social = [
  { name: "Facebook", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-14 pb-8 sm:px-8 sm:pt-16 md:px-12 lg:px-16 lg:pt-20 xl:px-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-10 md:gap-y-14 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-x-16 lg:gap-y-16">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[48px]"
            >
              MONARCH
            </Link>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold lg:text-[22px]">Company</h3>

            <ul className="mt-5 space-y-4 lg:mt-6 lg:space-y-5">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-white/85 transition hover:text-white sm:text-lg lg:text-[19px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold lg:text-[22px]">Resources</h3>

            <ul className="mt-5 space-y-4 lg:mt-6 lg:space-y-5">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-white/85 transition hover:text-white sm:text-lg lg:text-[19px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Sectors */}
          <div>
            <h3 className="text-xl font-semibold lg:text-[22px]">
              Our Sectors
            </h3>

            <ul className="mt-5 space-y-4 lg:mt-6 lg:space-y-5">
              {sectors.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-white/85 transition hover:text-white sm:text-lg lg:text-[19px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty cell */}
          <div className="hidden lg:block" />

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold lg:text-[22px]">Contact</h3>

            <div className="mt-5 space-y-4 text-base text-white/85 sm:text-lg lg:mt-6 lg:space-y-5 lg:text-[19px]">
              <p>Dubai, UAE</p>
              <p>+971 XX XXX XXXX</p>
              <p>info@gmail.com</p>
            </div>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-xl font-semibold lg:text-[22px]">
              Stay Connected
            </h3>

            <ul className="mt-5 space-y-4 lg:mt-6 lg:space-y-5">
              {social.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-white/85 transition hover:text-white sm:text-lg lg:text-[19px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty cell */}
          <div className="hidden lg:block" />
        </div>

        {/* Copyright */}
        <div className="mt-14 border-t border-white/10 pt-8 text-center sm:mt-16 lg:mt-24 lg:pt-10">
          <p className="text-sm text-white/70 sm:text-base lg:text-[16px]">
            © 2026 Monarch Investments. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}