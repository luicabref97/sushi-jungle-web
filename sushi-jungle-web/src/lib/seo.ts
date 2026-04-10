import type { Metadata } from "next";

const SITE_URL = "https://sushijungle.online";
const SITE_NAME = "Sushi Jungle";

/** Default OG image — will be replaced with generated one */
const DEFAULT_OG_IMAGE = "/images/generated/sushi-hero-artistic.png";

/** Reusable metadata factory for pages */
export function createMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
  };
}

/** JSON-LD for the restaurant (LocalBusiness + Restaurant) */
export function getRestaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Sushi Jungle",
    description:
      "Japanese-Peruvian fusion restaurant in Doral, Miami. Experience traditional sushi with a vibrant Peruvian twist.",
    url: SITE_URL,
    telephone: "+13054568466",
    email: "admin@sushijungle.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8373 NW 12th St",
      addressLocality: "Doral",
      addressRegion: "FL",
      postalCode: "33126",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.7929,
      longitude: -80.3575,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "12:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "12:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "13:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "13:00",
        closes: "21:00",
      },
    ],
    servesCuisine: ["Japanese", "Peruvian", "Sushi", "Fusion"],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "3346",
      bestRating: "5",
    },
    image: `${SITE_URL}/images/generated/sushi-hero-artistic.png`,
    menu: `${SITE_URL}/menu`,
    acceptsReservations: "True",
    hasMenu: {
      "@type": "Menu",
      url: `${SITE_URL}/menu`,
    },
  };
}
