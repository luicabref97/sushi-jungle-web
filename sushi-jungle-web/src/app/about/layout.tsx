import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Our Story",
  description:
    "From motorcycle deliveries to Doral's favorite fusion restaurant. Meet founders Marcelo and Valeria and discover the Sushi Jungle story.",
  path: "/about",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
