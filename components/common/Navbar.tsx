"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import GoogleTranslate from "./GoogleTranslate";
import Link from "next/link";

const menuItems = [
  {
    label: "About Us",
    href: "/about",
    image: "/home/hero.png",
  },
  {
    label: "Services & Products",
    href: "/services-&-products",
    image: "/navbar/services.jpg",
  },
  {
    label: "Investment Information",
    href: "/Investment-Information",
    image: "/navbar/investment.jpg",
  },
  {
    label: "Crypto Information",
    href: "/crypto",
    image: "/navbar/crypto.jpg",
  },
  {
    label: "Aquaponics Products",
    href: "/Aquaponics-Products",
    image: "/navbar/aquaponics.jpg",
  },
  {
    label: "Blog & News",
    href: "/blog-&-news",
    image: "/navbar/blog.jpg",
  },
  {
    label: "Gallery & Testimonials",
    href: "/gallery-&-testimonials",
    image: "/navbar/gallery.jpg",
  },
  {
    label: "Contact Us",
    href: "/contact",
    image: "/navbar/contact.jpg",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  document.documentElement.dir = language === "en" ? "ltr" : "rtl";
  document.documentElement.lang = language === "ar" ? "ar" : "en";
}, [language]);

  // Hovered menu item
  const [hoveredItem, setHoveredItem] = useState(menuItems[0]);

  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  const isScrolledStyle = isHome ? scrolled : true;

  const changeLanguage = (lang: string) => {
    const applyLang = () => {
      const select = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement | null;

      if (!select) return false;

      select.value = lang;
      select.dispatchEvent(new Event("change"));

      return true;
    };

    if (applyLang()) return;

    let attempts = 0;

    const interval = setInterval(() => {
      attempts += 1;

      if (applyLang() || attempts > 20) {
        clearInterval(interval);
      }
    }, 250);
  };

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 z-40 w-full transition-all duration-500 ${isScrolledStyle
            ? "px-4 py-3 lg:px-10"
            : "px-0 py-0"
          }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 ${isScrolledStyle
              ? "h-[80px] rounded-2xl bg-white px-6 shadow-lg sm:px-8 lg:px-15"
              : "h-[106px] bg-transparent px-6 sm:px-10 lg:px-24"
            }`}
        >
          {/* Logo */}
          <Link href="/">
            <h1
              className={`text-[22px] font-black tracking-tight transition-colors duration-500 ${isScrolledStyle ? "text-black" : "text-white"
                }`}
            >
              MONARCH
            </h1>
          </Link>

          {/* Right */}
          <div className="flex items-center gap-4 sm:gap-8">
            {/* Language */}
            <div
              className="relative notranslate"
              translate="no"
            >
              <select
                translate="no"
                className={`notranslate cursor-pointer appearance-none rounded-md bg-transparent px-3 py-2 pr-9 transition-colors duration-500 focus:outline-none ${isScrolledStyle ? "text-black" : "text-white"
                  }`}
                value={language}
                onChange={(e) => {
                  const lang = e.target.value;
                  setLanguage(lang);
                  changeLanguage(lang);
                }}
              >
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>

              <ChevronDown
                size={18}
                className={`pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 transition-colors duration-500 ${isScrolledStyle ? "text-black" : "text-white"
                  }`}
              />
            </div>

            {/* Menu Button */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu
                size={32}
                className={`transition duration-500 hover:scale-110 ${isScrolledStyle
                    ? "text-black"
                    : "text-white"
                  }`}
              />
            </button>
          </div>
        </div>
      </header>

    {/* Fullscreen Menu */}
<div
  className={`fixed inset-0 z-50 bg-white transition-all duration-500 ${
    open
      ? "translate-y-0 opacity-100"
      : "pointer-events-none -translate-y-full opacity-0"
  }`}
>
  <div className="flex h-dvh w-full overflow-hidden">

    {/* Left Menu */}
    <div
      className="
        relative
        flex
        h-full
        w-full
        flex-col
        overflow-y-auto
        border-r
        border-gray-200
        px-6
        pt-8
        sm:px-10
        sm:pt-10
        md:w-[42%]
        md:px-12
        md:pt-12
        lg:w-[37%]
        lg:px-16
        lg:pt-14
        xl:px-24
      "
    >
      {/* Logo */}
      <div className="shrink-0">
        <h2
          className="
            text-[28px]
            font-black
            tracking-tight
            text-black
            sm:text-[30px]
            md:text-[32px]
            lg:text-[34px]
          "
        >
          MONARCH
        </h2>
      </div>

      {/* Navigation */}
      <nav className="mt-10 pb-10 sm:mt-12 md:mt-14 lg:mt-16">
        <ul
          className="
            space-y-5
            sm:space-y-6
            md:space-y-7
            lg:space-y-8
            xl:space-y-10
          "
        >
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                onMouseEnter={() => setHoveredItem(item)}
                className="
                  inline-block
                  text-[17px]
                  font-medium
                  leading-tight
                  text-black
                  transition-all
                  duration-300
                  hover:translate-x-2
                  sm:text-[19px]
                  md:text-[20px]
                  lg:text-[21px]
                  xl:text-[22px]
                "
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    {/* Right Image */}
    <div
      className="
        relative
        hidden
        h-full
        flex-1
        overflow-hidden
        md:block
      "
    >
      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        aria-label="Close menu"
        className="
          absolute
          right-6
          top-8
          z-30
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          transition-transform
          duration-300
          hover:scale-105
          sm:right-8
          sm:top-10
          lg:right-12
          lg:top-12
          xl:right-14
          xl:top-14
        "
      >
        <X
          size={28}
          strokeWidth={1.5}
          className="text-black sm:size-32 lg:size-36"
        />
      </button>

      {/* Image */}
      <div
        className="
          absolute
          inset-0
          p-5
          sm:p-7
          lg:p-10
          xl:p-12
        "
      >
        <div className="relative h-full w-full overflow-hidden rounded-xl lg:rounded-2xl">

          <img
            src={hoveredItem.image}
            alt={hoveredItem.label}
            className="
              h-full
              w-full
              object-cover
              transition-all
              duration-500
              ease-in-out
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Image Label */}
          <div
            className="
              absolute
              bottom-7
              left-7
              sm:bottom-10
              sm:left-10
              lg:bottom-12
              lg:left-12
              xl:bottom-14
              xl:left-14
            "
          >
            <h3
              className="
                text-2xl
                font-semibold
                text-white
                sm:text-3xl
                lg:text-4xl
                xl:text-5xl
              "
            >
              {hoveredItem.label}
            </h3>
          </div>

        </div>
      </div>
    </div>

    {/* Mobile Close Button */}
    <button
      onClick={() => setOpen(false)}
      aria-label="Close menu"
      className="
        absolute
        right-5
        top-6
        z-50
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        sm:right-8
        sm:top-8
        md:hidden
      "
    >
      <X
        size={25}
        strokeWidth={1.5}
        className="text-black"
      />
    </button>

  </div>

  <GoogleTranslate />
</div>
    </>
  );
}