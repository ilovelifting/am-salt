// In-memory, single-instance rate limiter — same scope limitation as the
// file-based preorder store (lib/preorders.ts): fine for one running
// server, not safe across multiple instances. Swap both together if this
// ever needs to run serverless/multi-instance.
const buckets = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number
): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (bucket.count >= limit) return false;

  bucket.count += 1;
  return true;
}
