"use client";

import { ScrollReveal, RevealText } from "@/components/scroll";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/* ------------------------------------------------------------------ */
/*  Menu Data                                                         */
/* ------------------------------------------------------------------ */

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  popular?: boolean;
}

const menuData: Record<string, MenuItem[]> = {
  "signature-rolls": [
    { name: "Fortune Roll", price: "$23", description: "Soybean paper, salmon tempura, honey truffle oil, gold leaf" },
    { name: "Safari Roll", price: "$23", description: "Salmon, crab salad, avocado, sweet and sour sauce" },
    { name: "Fuji Roll", price: "$23", description: "Shrimp tempura, honey mustard, eel sauce, crispy rice" },
    { name: "Protein Roll", price: "$24", description: "Riceless, tuna, salmon, avocado, crab salad" },
    { name: "Jaguar Roll", price: "$18", description: "Shrimp tempura, plantain, spicy mayo", popular: true },
    { name: "Tiger Roll", price: "$22", description: "Shrimp tempura, crab salad, crunchy crab" },
    { name: "Tropical Roll", price: "$20", description: "Shrimp/salmon tempura, plantain, crab salad" },
    { name: "Wild Truffle Roll", price: "$24", description: "Premium truffle-infused" },
    { name: "Tsunami Roll", price: "$23", description: "Bacon, shrimp tempura, crab salad, ebi shrimp" },
  ],
  "peruvian-fusion": [
    { name: "Lomo Saltado", price: "$25", description: "Stir-fried beef tenderloin with onions, tomatoes, soy sauce, served with fries and rice" },
    { name: "Pollo Saltado", price: "$22", description: "Stir-fried chicken with onions, tomatoes, soy sauce, served with fries and rice" },
    { name: "Tiraditos", price: "$17-$21", description: "Thinly sliced fresh fish in vibrant Peruvian sauces" },
  ],
  appetizers: [
    { name: "Sushi Pizza", price: "$17", description: "Crispy rice, crab salad, salmon, avocado" },
    { name: "Tuna Tacos", price: "$10", description: "Fresh tuna in crispy wonton shells" },
    { name: "Sweet & Spicy Edamame", price: "$12", description: "Tossed in a sweet chili glaze" },
    { name: "Gyoza", price: "$13", description: "Pan-seared Japanese dumplings" },
  ],
  desserts: [
    { name: "Dubai Dessert", price: "$26", description: "Our signature indulgent creation" },
    { name: "Chocolate Roll", price: "$17", description: "Chocolate cake, ice cream, nutella, dulce de leche" },
    { name: "Matcha Roll", price: "$21", description: "Matcha-infused cake with delicate cream" },
    { name: "Thai Donuts", price: "$13", description: "Crispy fried donuts with sweet dipping sauce" },
  ],
  cocktails: [
    { name: "Tropical Sunset", price: "Signature", description: "Our house specialty tropical blend" },
    { name: "Mojito Classic", price: "Classic", description: "Fresh mint, lime, rum, and soda" },
    { name: "Happy Hour Special", price: "2-for-1", description: "All cocktails, Monday through Friday 4-7 PM" },
  ],
};

const categories = [
  { value: "signature-rolls", label: "Signature Rolls" },
  { value: "peruvian-fusion", label: "Peruvian Fusion" },
  { value: "appetizers", label: "Appetizers" },
  { value: "desserts", label: "Desserts" },
  { value: "cocktails", label: "Cocktails" },
];

/* ------------------------------------------------------------------ */
/*  Menu Item Card                                                    */
/* ------------------------------------------------------------------ */

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <Card className="card-glass border-0 ring-0">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-foreground">
            {item.name}
            {item.popular && (
              <Badge className="ml-2 bg-gold-warm/20 text-gold-warm border-gold-warm/30">
                Popular
              </Badge>
            )}
          </CardTitle>
          <span className="font-data text-lg text-gold-warm shrink-0">
            {item.price}
          </span>
        </div>
      </CardHeader>
      {item.description && (
        <CardContent>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {item.description}
          </p>
        </CardContent>
      )}
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function MenuPage() {
  return (
    <main className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* ---- Hero ---- */}
        <section className="mb-16 text-center">
          <RevealText
            text="Our Menu"
            variant="split-words"
            as="h1"
            className="font-heading text-5xl md:text-7xl text-gold-warm mb-4"
          />
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
              Japanese precision meets Peruvian intensity
            </p>
          </ScrollReveal>
        </section>

        {/* ---- Category Tabs ---- */}
        <ScrollReveal direction="up" delay={0.1}>
          <Tabs defaultValue="signature-rolls" className="w-full">
            <TabsList
              variant="line"
              className="flex flex-wrap justify-center gap-2 mb-10"
            >
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="text-sm md:text-base px-4 py-2 data-active:text-gold-warm data-active:after:bg-gold-warm"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.value} value={cat.value}>
                <ScrollReveal
                  direction="up"
                  staggerChildren={0.08}
                  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {menuData[cat.value].map((item) => (
                    <MenuCard key={item.name} item={item} />
                  ))}
                </ScrollReveal>
              </TabsContent>
            ))}
          </Tabs>
        </ScrollReveal>

        {/* ---- Promo Banner ---- */}
        <ScrollReveal direction="up" className="mt-16">
          <div className="card-glass rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-heading text-2xl md:text-3xl text-gold-warm mb-2">
              Jungle Power Lunch
            </h2>
            <p className="font-data text-3xl md:text-4xl text-foreground">
              $13.99 &ndash; $16.99
            </p>
            <p className="text-muted-foreground mt-2 text-sm">
              Available Monday &ndash; Friday, 11 AM &ndash; 3 PM
            </p>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
