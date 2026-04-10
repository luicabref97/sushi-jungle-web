import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Order Online",
  description:
    "Order Sushi Jungle for delivery or pickup via UberEats, DoorDash, or direct from Toast Tab. Save 20% on orders over $50.",
  path: "/order-online",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
