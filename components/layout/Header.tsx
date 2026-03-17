"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MagnetizeButton } from "@/components/ui/magnetize-button";

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`,                          label: "Inicio" },
    { href: `/${locale}/soluciones-tecnologicas`,  label: "Tecnología" },
    { href: `/${locale}/soluciones-financieras`,   label: "Finanzas" },
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
          <Link
            href={`/${locale}/contacto`}
            className="text-sm transition-colors"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              color: isActive(`/${locale}/contacto`) ? "#0EA5E9" : "rgba(255,255,255,0.50)",
            }}
          >
            Contacto
          </Link>
          <MagnetizeButton href={`/${locale}/contacto`} variant="primary" className="px-5 py-2.5 text-sm rounded-xl">
            Agendar Diagnóstico
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
            <Link
              href={`/${locale}/contacto`}
              className="btn-gold-primary rounded-xl px-5 py-3 text-sm text-center mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Agendar Diagnóstico
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
