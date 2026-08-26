import { promises as fs } from "node:fs";
import path from "node:path";

// File-based store for the preorder MVP. Good enough to validate demand on a
// single instance; swap for a real database before this needs to scale or
// run across multiple server instances.
const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "preorders.json");

export type Preorder = {
  email: string;
  flavor: string;
  createdAt: string;
};

// Serializes reads/writes within this process so concurrent submissions
// can't clobber each other.
let queue: Promise<unknown> = Promise.resolve();
function serialize<T>(fn: () => Promise<T>): Promise<T> {
  const result = queue.then(fn, fn);
  queue = result.catch(() => {});
  return result;
}

async function readAll(): Promise<Preorder[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Preorder[];
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

async function writeAll(preorders: Preorder[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(preorders, null, 2), "utf-8");
}

export async function getPreorderCount(): Promise<number> {
  return serialize(async () => (await readAll()).length);
}

export async function addPreorder(entry: {
  email: string;
  flavor: string;
}): Promise<{ count: number; alreadyExists: boolean }> {
  return serialize(async () => {
    const preorders = await readAll();
    const normalizedEmail = entry.email.trim().toLowerCase();
    const alreadyExists = preorders.some(
      (p) => p.email.toLowerCase() === normalizedEmail
    );

    if (!alreadyExists) {
      preorders.push({
        email: entry.email.trim(),
        flavor: entry.flavor,
        createdAt: new Date().toISOString(),
      });
      await writeAll(preorders);
    }

    return { count: preorders.length, alreadyExists };
  });
}
