import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Menu",
  description:
    "Explore our signature Japanese-Peruvian fusion rolls, appetizers, Peruvian dishes, desserts, and cocktails. 30+ signature rolls starting at $18.",
  path: "/menu",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
