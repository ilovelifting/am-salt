import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScienceStats } from "@/components/ScienceStats";
import { Process } from "@/components/Process";
import { Panel } from "@/components/Panel";
import { Flavors } from "@/components/Flavors";
import { Preorder } from "@/components/Preorder";
import { Footer } from "@/components/Footer";
import { getPreorderCount } from "@/lib/preorders";
import styles from "./page.module.css";

// Reads the live preorder count on every request instead of baking a
// build-time snapshot into a statically prerendered page.
export const dynamic = "force-dynamic";

export default async function Home() {
  const preorderCount = await getPreorderCount();

  return (
    <main className={styles.page}>
      <Header />
      <Hero />
      <ScienceStats />
      <Process />
      <Panel />
      <Flavors />
      <Preorder initialCount={preorderCount} />
      <Footer />
    </main>
  );
}
