import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Visit Sushi Jungle at 8373 NW 12th St, Doral, FL 33126. Call (305) 456-8466 or email admin@sushijungle.com. Open daily.",
  path: "/contact",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
