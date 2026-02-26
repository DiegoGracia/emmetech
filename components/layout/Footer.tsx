import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold tracking-tight">
              EMME<span className="text-teal-light"> TECHNOLOGIES</span>
            </p>
            <p className="mt-3 text-sm text-gray-300">{t("tagline")}</p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
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
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              {t("services_title")}
            </p>
            <ul className="mt-3 space-y-2">
              {["Web Development", "Digital Marketing", "IT Consulting"].map(
                (service) => (
                  <li key={service}>
                    <Link
                      href={`/${locale}/services`}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
          © {year} EMME Technologies. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
