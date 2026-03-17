export const locales = ["en", "es", "fr", "de", "et"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
