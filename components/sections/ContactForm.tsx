"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

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
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      {status === "success" ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal/10 text-3xl">
            ✓
          </div>
          <p className="text-lg font-semibold text-navy">{t("success")}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                {t("name")}
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                {t("email")}
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              {t("company")}
            </label>
            <input
              name="company"
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              {t("message")}
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-500">{t("error")}</p>
          )}

          <Button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-3"
          >
            {status === "sending" ? t("sending") : t("submit")}
          </Button>
        </form>
      )}
    </div>
  );
}
