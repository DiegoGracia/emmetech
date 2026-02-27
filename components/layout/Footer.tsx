import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="glass-footer text-white relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="inline-block rounded-md bg-white px-2.5 py-1.5">
              <Image
                src="/logo.png"
                alt="EMXTECH"
                height={28}
                width={89}
              />
            </div>
            <p className="mt-3 text-sm text-white/55">{t("tagline")}</p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
              {t("links_title")}
            </p>
            <ul className="mt-3 space-y-2">
              {[
                { href: `/${locale}`, label: nav("home") },
                { href: `/${locale}/about`, label: nav("about") },
                { href: `/${locale}/services`, label: nav("services") },
                { href: `/${locale}/contact`, label: nav("contact") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
              {t("services_title")}
            </p>
            <ul className="mt-3 space-y-2">
              {["Website & Web Dev", "Accessibility & EAA", "Business Services"].map((service) => (
                <li key={service}>
                  <Link
                    href={`/${locale}/services`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/[0.08] pt-6 text-center text-xs text-white/35">
          © {year} EMXTECH. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
