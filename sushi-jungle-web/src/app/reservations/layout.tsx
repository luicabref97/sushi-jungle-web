import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Reservations",
  description:
    "Reserve your table at Sushi Jungle in Doral. Book via OpenTable or Toast Tab. Casual dining, $30 and under.",
  path: "/reservations",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
