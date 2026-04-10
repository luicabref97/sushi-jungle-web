import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Gallery",
  description:
    "A visual journey through Sushi Jungle. See our signature rolls, tropical cocktails, and jungle-inspired interior in Doral, FL.",
  path: "/gallery",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
