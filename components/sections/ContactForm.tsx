"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [fields, setFields] = useState({ name: "", email: "", company: "", message: "" });

  const set = (key: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((prev) => ({ ...prev, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!fields.name.trim() || !fields.message.trim()) {
      setStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fields.email.trim() || !emailRegex.test(fields.email)) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus("success");
        setFields({ name: "", email: "", company: "", message: "" });
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
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-white/70">{t("name")}</label>
              <input type="text" required className="input-space" value={fields.name} onChange={set("name")} />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-white/70">{t("email")}</label>
              <input type="email" required className="input-space" value={fields.email} onChange={set("email")} />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-white/70">{t("company")}</label>
            <input type="text" className="input-space" value={fields.company} onChange={set("company")} />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-white/70">{t("message")}</label>
            <textarea
              required
              rows={5}
              className="input-space resize-none"
              value={fields.message}
              onChange={set("message")}
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
