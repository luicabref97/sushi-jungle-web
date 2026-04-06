// Sushi Jungle — Constants & Restaurant Data

export const RESTAURANT = {
  name: "Sushi Jungle",
  tagline: "Not just sushi. A Jungle experience.",
  description: "Experience Traditional Sushi with a Vibrant Peruvian Fusion Twist",
  concept: "Japanese-Peruvian Fusion (Nikkei)",
  founded: 2023,
  founders: {
    marcelo: {
      name: "Marcelo Villamizar",
      role: "Co-founder",
    },
    valeria: {
      name: "Valeria Roa",
      role: "Co-founder & CEO",
      instagram: "@valeriaroav",
    },
  },
} as const;

export const CONTACT = {
  address: "8373 NW 12th St, Doral, FL 33126",
  neighborhood: "Beacon Centre",
  phone: "(305) 456-8466",
  email: "admin@sushijungle.com",
  website: "https://sushijungle.online",
  googleMapsUrl:
    "https://www.google.com/maps/place/Sushi+Jungle/@25.7929,-80.3575,17z",
} as const;

export const HOURS = [
  { day: "Monday - Thursday", hours: "12:00 PM - 10:00 PM" },
  { day: "Friday", hours: "12:00 PM - 11:00 PM" },
  { day: "Saturday", hours: "1:00 PM - 11:00 PM" },
  { day: "Sunday", hours: "1:00 PM - 9:00 PM" },
] as const;

export const HAPPY_HOUR = {
  days: "Monday - Friday",
  time: "4:00 PM - 7:00 PM",
  offers: [
    "Buy 1 get 1 50% off sushi rolls",
    "2-for-1 cocktails",
    "$5 wine and beer",
    "$12 appetizers",
  ],
} as const;

export const SOCIAL = {
  instagram: {
    url: "https://www.instagram.com/sushijungle/",
    handle: "@sushijungle",
    followers: "67,600+",
  },
  tiktok: {
    url: "https://www.tiktok.com/@sushijungle",
    handle: "@sushijungle",
  },
  facebook: {
    url: "https://www.facebook.com/p/Sushi-Jungle-100033536031005/",
    name: "Sushi Jungle",
  },
} as const;

export const ORDER_PLATFORMS = [
  {
    name: "UberEats",
    url: "https://www.ubereats.com/store/sushi-jungle/WvXpOOfWSYagNOG7HxYOVQ",
    rating: "4.5",
    reviews: "700+",
    promo: "Save 20% on orders $50+",
  },
  {
    name: "DoorDash",
    url: "https://www.doordash.com/store/sushi-jungle-doral-30233433/",
    rating: null,
    reviews: null,
    promo: null,
  },
  {
    name: "Toast Tab",
    url: "https://book.toasttab.com/restaurants/sushi-jungle-8373-northwest-12th-street",
    rating: null,
    reviews: null,
    promo: "Direct ordering — no third-party fees",
  },
] as const;

export const RESERVATION_PLATFORMS = [
  {
    name: "OpenTable",
    url: "https://www.opentable.com/r/sushi-jungle-doral",
    rating: "4.8",
  },
  {
    name: "Toast Tab",
    url: "https://book.toasttab.com/restaurants/sushi-jungle-8373-northwest-12th-street",
    rating: null,
  },
] as const;

export const RATINGS = {
  google: { rating: 4.9, reviews: "3,346+", label: "Google" },
  openTable: { rating: 4.8, reviews: "5", label: "OpenTable" },
  uberEats: { rating: 4.5, reviews: "700+", label: "UberEats" },
  yelp: { rating: 4.2, reviews: "36", label: "Yelp" },
} as const;

export const IMAGES = {
  logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663500566018/3TP39PJUXyRduohPy3rCoD/logo_illuminated_40666ce0.jpg",
  neonSign:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500566018/3TP39PJUXyRduohPy3rCoD/feed_me_sushi_neon_677ec583.jpg",
  rollPlatter:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500566018/3TP39PJUXyRduohPy3rCoD/sushi_roll_platter_d304e87f.jpg",
  cocktails:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500566018/3TP39PJUXyRduohPy3rCoD/cocktails_fd348554.jpeg",
  interior:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663500566018/3TP39PJUXyRduohPy3rCoD/restaurant_interior_98f6b3a3.jpeg",
} as const;

export const TESTIMONIALS = [
  {
    quote:
      "Hidden gem! Gives Brickell vibes but in Doral. The sushi was fresh and delicious.",
    author: "Lianet O.",
    source: "Google",
  },
  {
    quote:
      "Marcelo, the owner, is an incredible human and is always making sure everything is running great.",
    author: "Luissette",
    source: "Google",
  },
  {
    quote:
      "Perfect for date nights. Beautiful atmosphere and unique rolls you won't find anywhere else.",
    author: "Guerliz H.",
    source: "OpenTable",
  },
  {
    quote:
      "Sushi Jungle has over 30 sushi rolls. A true hidden gem in Doral.",
    author: "@mayitakeabite",
    source: "TikTok",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Happy Hour", href: "/happy-hour" },
  { label: "Gallery", href: "/gallery" },
  { label: "Order Online", href: "/order-online" },
  { label: "Reservations", href: "/reservations" },
  { label: "Contact", href: "/contact" },
] as const;
