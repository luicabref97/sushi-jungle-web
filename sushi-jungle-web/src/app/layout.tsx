import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LenisProvider } from "@/components/scroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getRestaurantJsonLd } from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sushijungle.online"),
  title: {
    default: "Sushi Jungle | Japanese-Peruvian Fusion in Doral, Miami",
    template: "%s | Sushi Jungle",
  },
  description:
    "Experience traditional sushi with a vibrant Peruvian fusion twist. Located in Doral, FL. Happy Hour 4-7 PM. Order online or make a reservation.",
  keywords: [
    "best sushi Doral",
    "Japanese fusion Miami",
    "sushi near me Doral",
    "Peruvian Japanese fusion",
    "Sushi Jungle",
    "Doral restaurant",
  ],
  openGraph: {
    title: "Sushi Jungle | Japanese-Peruvian Fusion in Doral, Miami",
    description:
      "Not just sushi. A Jungle experience. Bold flavors and premium ingredients in Doral, FL.",
    url: "https://sushijungle.online",
    siteName: "Sushi Jungle",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${spaceGrotesk.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <TooltipProvider>
          <LenisProvider>
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </LenisProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
