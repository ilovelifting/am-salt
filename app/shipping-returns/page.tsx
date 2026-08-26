import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicyLayout } from "@/components/policy/PolicyLayout";
import { getPolicyPage } from "@/lib/policies";
import pageStyles from "../page.module.css";

const page = getPolicyPage("shipping-returns")!;

export const metadata: Metadata = {
  title: `${page.title} — AM Salt`,
  description: page.dek,
};

export default function ShippingReturnsPage() {
  return (
    <main className={pageStyles.page}>
      <Header />
      <PolicyLayout page={page} />
      <Footer />
    </main>
  );
}
