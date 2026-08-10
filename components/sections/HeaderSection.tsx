"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import siteData from "@/app/data.json";
import TrackedLink from "@/components/TrackedLink";

const { header, links } = siteData;
const headerWhatsappMessage =
  "Olá! Vim pelo site e quero solicitar um orçamento com a Mazinho Guinchos.";
const headerWhatsappHref = `${links.whatsapp}?text=${encodeURIComponent(headerWhatsappMessage)}`;

const getInitialDarkTheme = () => {
  if (typeof window === "undefined") {
    return false;
  }
  const saved = window.localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return saved ? saved === "dark" : prefersDark;
};

export default function HeaderSection() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(getInitialDarkTheme);

  useEffect(() => {
    const sections = header.navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    const updateActiveByScroll = () => {
      const offset = 120;
      const scrollY = window.scrollY + offset;
      let currentSection = "inicio";

      for (const section of sections) {
        if (section.offsetTop <= scrollY) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    const onScroll = () => {
      const hero = document.getElementById("inicio");
      if (!hero) return;
      const headerHeight = 56;
      const heroBottom = hero.getBoundingClientRect().bottom;
      setIsPastHero(heroBottom <= headerHeight);
      updateActiveByScroll();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("theme-dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("theme-dark", next);
      window.localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <header className={`site-header ${isPastHero ? "site-header-scrolled" : ""}`.trim()}>
      <div className="site-container site-header-row">
        <button
          type="button"
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "is-open" : ""}`}
          aria-label={header.mobileMenuAriaLabel}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <a href="#inicio" className="site-logo" aria-label={header.logoAriaLabel}>
          <Image
            className="site-logo-image"
            src="/logo-mazinho-3.png"
            alt=""
            aria-hidden="true"
            width={160}
            height={64}
          />
          <span>{header.logoText}</span>
        </a>

        <nav className="site-nav" aria-label={header.desktopNavAriaLabel}>
          {header.navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "is-active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <TrackedLink
          href={headerWhatsappHref}
          className="btn btn-danger btn-sm"
          target="_blank"
          rel="noopener noreferrer"
          eventName="cta_click_orcamento"
        >
          {header.ctaText}
        </TrackedLink>
        <button
          type="button"
          className="theme-toggle"
          aria-label={isDark ? header.themeAriaLight : header.themeAriaDark}
          onClick={toggleTheme}
        >
          {isDark ? header.themeSymbolLight : header.themeSymbolDark}
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`mobile-nav ${isMobileMenuOpen ? "is-open" : ""}`}
        aria-label={header.mobileNavAriaLabel}
      >
        {header.navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? "is-active" : ""}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <button type="button" className="mobile-theme-toggle" onClick={toggleTheme}>
          {isDark ? header.mobileThemeLight : header.mobileThemeDark}
        </button>
      </nav>
    </header>
  );
}
