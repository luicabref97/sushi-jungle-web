import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Happy Hour",
  description:
    "Happy Hour 4-7 PM Monday-Friday. 2-for-1 cocktails, $5 wine and beer, BOGO 50% off rolls. The best happy hour in Doral.",
  path: "/happy-hour",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
