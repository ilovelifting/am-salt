"use server";

import { addPreorder } from "@/lib/preorders";
import { flavors } from "@/lib/content";

export type PreorderState = {
  status: "idle" | "success" | "error";
  message?: string;
  count?: number;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_FLAVORS = new Set<string>(flavors.map((f) => f.id));

export async function preorderAction(
  _prevState: PreorderState,
  formData: FormData
): Promise<PreorderState> {
  // Honeypot: real visitors never fill this hidden field.
  if (formData.get("company")) {
    return { status: "success", message: "You're on the list." };
  }

  const email = String(formData.get("email") ?? "").trim();
  const flavorRaw = String(formData.get("flavor") ?? "no-preference");
  const flavor = VALID_FLAVORS.has(flavorRaw) ? flavorRaw : "no-preference";

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "That email doesn't look right — try again." };
  }

  const { count, alreadyExists } = await addPreorder({ email, flavor });

  return {
    status: "success",
    message: alreadyExists
      ? "You're already on the list — we'll be in touch."
      : "You're on the list. We'll email you before anything ships or gets charged.",
    count,
  };
}
