"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="glass-md rounded-2xl p-8">
      {status === "success" ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal/[0.15] text-3xl teal-glow">
            ✓
          </div>
          <p className="text-lg font-semibold text-white">{t("success")}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot: hidden from humans, bots fill it in */}
          <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden="true" tabIndex={-1}>
            <input name="website" type="text" autoComplete="off" tabIndex={-1} />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-white/70">
                {t("name")}
              </label>
              <input name="name" type="text" required className="input-space" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-white/70">
                {t("email")}
              </label>
              <input name="email" type="email" required className="input-space" />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-white/70">
              {t("company")}
            </label>
            <input name="company" type="text" className="input-space" />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-white/70">
              {t("message")}
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="input-space resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-400">{t("error")}</p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-teal-glow w-full rounded-lg py-3 font-semibold disabled:opacity-60"
          >
            {status === "sending" ? t("sending") : t("submit")}
          </button>
        </form>
      )}
    </div>
  );
}
