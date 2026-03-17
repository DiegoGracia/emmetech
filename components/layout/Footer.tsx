"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const techServiceLabels = t.raw("tech_services") as string[];
  const finServiceLabels  = t.raw("fin_services")  as string[];
  const contactLinkLabels = t.raw("contact_links") as string[];

  const techServices = techServiceLabels.map((label) => ({
    label,
    href: `/${locale}/soluciones-tecnologicas`,
  }));

  const finServices = finServiceLabels.map((label) => ({
    label,
    href: `/${locale}/soluciones-financieras`,
  }));

  const labelStyle = {
    fontSize: "0.7rem",
    fontWeight: 600,
    color: "rgba(255,255,255,0.35)",
    letterSpacing: "0.10em",
    textTransform: "uppercase" as const,
    fontFamily: "var(--font-inter), sans-serif",
    marginBottom: "1rem",
    display: "block",
  };

  const linkStyle = {
    fontSize: "0.875rem",
    color: "rgba(255,255,255,0.48)",
    fontFamily: "var(--font-inter), sans-serif",
    fontWeight: 400,
    display: "block",
  };

  return (
    <footer
      className="relative z-10"
      style={{
        background: "rgba(2,4,11,0.96)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href={`/${locale}`} className="inline-block mb-4">
              <Image src="/logo.png" alt="Emmetech" height={28} width={96} />
            </Link>
            <p style={{ ...linkStyle, maxWidth: "220px", lineHeight: 1.65, color: "rgba(255,255,255,0.38)" }}>
              {t("tagline")}
            </p>
          </div>

          {/* Tech services */}
          <div>
            <span style={labelStyle}>{t("tech_title")}</span>
            <ul className="space-y-2.5">
              {techServices.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="transition-colors hover:text-white" style={linkStyle}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Finance services */}
          <div>
            <span style={labelStyle}>{t("finance_title")}</span>
            <ul className="space-y-2.5">
              {finServices.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="transition-colors hover:text-white" style={linkStyle}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span style={labelStyle}>{t("contact_title")}</span>
            <ul className="space-y-2.5">
              {contactLinkLabels.map((label) => ({ label, href: `/${locale}/contacto` })).map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="transition-colors hover:text-white" style={linkStyle}>
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="mailto:hola@emmetech.mx" className="transition-colors hover:text-white" style={linkStyle}>
                  hola@emmetech.mx
                </a>
              </li>
            </ul>

            <Link
              href={`/${locale}/contacto`}
              className="inline-flex mt-6 btn-gold-primary rounded-xl px-5 py-2.5 text-sm"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-inter), sans-serif" }}>
          © {year} Emmetech. {t("rights")}
        </p>
        <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.18)", fontFamily: "var(--font-inter), sans-serif" }}>
          {t("region")}
        </p>
      </div>
    </footer>
  );
}
