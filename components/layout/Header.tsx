"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { MagnetizeButton } from "@/components/ui/magnetize-button";
import { ChevronDown, Check } from "lucide-react";

const LOCALES = [
  { code: "en", label: "English",  flag: "🇬🇧" },
  { code: "es", label: "Español",  flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch",  flag: "🇩🇪" },
  { code: "et", label: "Eesti",    flag: "🇪🇪" },
];

function LocaleSwitcher({ locale, pathname }: { locale: string; pathname: string }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  const getLocalePath = (targetLocale: string) => {
    const segments = pathname.split("/").filter(Boolean);
    const knownLocales = LOCALES.map((l) => l.code);
    if (knownLocales.includes(segments[0])) {
      segments[0] = targetLocale;
    } else {
      segments.unshift(targetLocale);
    }
    return "/" + segments.join("/") || `/${targetLocale}`;
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-150"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.10)",
          color: "rgba(255,255,255,0.75)",
          fontFamily: "var(--font-inter), sans-serif",
          letterSpacing: "0.04em",
        }}
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <ChevronDown
          className="h-3.5 w-3.5 transition-transform duration-150"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", opacity: 0.6 }}
        />
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-44 rounded-xl overflow-hidden z-50"
          style={{
            background: "rgba(8,12,28,0.97)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {LOCALES.map((l) => (
            <Link
              key={l.code}
              href={getLocalePath(l.code)}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 w-full px-3 py-2 text-xs transition-colors duration-100"
              style={{
                color: locale === l.code ? "#0EA5E9" : "rgba(255,255,255,0.65)",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: locale === l.code ? 600 : 400,
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <span className="text-sm">{l.flag}</span>
              <span className="flex-1">{l.label}</span>
              {locale === l.code && (
                <Check className="h-3.5 w-3.5" style={{ color: "#0EA5E9" }} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("nav");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`,                          label: t("home") },
    { href: `/${locale}/soluciones-tecnologicas`,  label: t("tech") },
    { href: `/${locale}/soluciones-financieras`,   label: t("finance") },
  ];

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === href : pathname.startsWith(href);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(4,6,15,0.96)" : "rgba(4,6,15,0.72)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.10)"
          : "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center shrink-0">
          <Image src="/logo.png" alt="Emmetech" height={32} width={110} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm transition-colors duration-200"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                letterSpacing: "0.005em",
                color: isActive(link.href) ? "#0EA5E9" : "rgba(255,255,255,0.60)",
              }}
            >
              {link.label}
              {isActive(link.href) && (
                <span
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{ background: "rgba(14,165,233,0.55)" }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden items-center gap-5 md:flex">
          <LocaleSwitcher locale={locale} pathname={pathname} />
          <Link
            href={`/${locale}/contacto`}
            className="text-sm transition-colors"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              color: isActive(`/${locale}/contacto`) ? "#0EA5E9" : "rgba(255,255,255,0.50)",
            }}
          >
            {t("contact")}
          </Link>
          <MagnetizeButton href={`/${locale}/contacto`} variant="primary" className="px-5 py-2.5 text-sm rounded-xl">
            {t("cta")}
          </MagnetizeButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded"
          style={{ color: "rgba(255,255,255,0.70)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ background: "rgba(4,6,15,0.98)", borderColor: "rgba(255,255,255,0.08)" }}
        >
          <nav className="flex flex-col px-5 pt-4 pb-6 gap-1">
            {[...navLinks, { href: `/${locale}/contacto`, label: "Contacto" }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-sm border-b"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                  color: isActive(link.href) ? "#0EA5E9" : "rgba(255,255,255,0.65)",
                  borderColor: "rgba(255,255,255,0.06)",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-center pt-2 pb-1">
              <LocaleSwitcher locale={locale} pathname={pathname} />
            </div>
            <Link
              href={`/${locale}/contacto`}
              className="btn-gold-primary rounded-xl px-5 py-3 text-sm text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              {t("cta")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
