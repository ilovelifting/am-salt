"use server";

import { headers } from "next/headers";
import { addPreorder } from "@/lib/preorders";
import { checkRateLimit } from "@/lib/rate-limit";
import { flavors } from "@/lib/content";

export type PreorderState = {
  status: "idle" | "success" | "error";
  message?: string;
  count?: number;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_FLAVORS = new Set<string>(flavors.map((f) => f.id));
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

export async function preorderAction(
  _prevState: PreorderState,
  formData: FormData
): Promise<PreorderState> {
  const hdrs = await headers();
  const ip =
    hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    hdrs.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(`preorder:${ip}`, RATE_LIMIT, RATE_WINDOW_MS)) {
    return {
      status: "error",
      message: "Too many attempts. Try again in a few minutes.",
    };
  }

  // Honeypot: real visitors never fill this hidden field.
  if (formData.get("company")) {
    return { status: "success", message: "You're in." };
  }

  const email = String(formData.get("email") ?? "").trim();
  const flavorRaw = String(formData.get("flavor") ?? "no-preference");
  const flavor = VALID_FLAVORS.has(flavorRaw) ? flavorRaw : "no-preference";

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "That's not an email. Try again." };
  }

  const { count, alreadyExists } = await addPreorder({ email, flavor });

  return {
    status: "success",
    message: alreadyExists
      ? "Already got you. Sit tight."
      : "You're in. We'll email you the moment your box is ready to ship.",
    count,
  };
}
