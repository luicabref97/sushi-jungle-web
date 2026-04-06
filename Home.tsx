/*
 * DESIGN: "Neon Jungle Report"
 * Dark editorial research report for Sushi Jungle restaurant
 * Colors: Deep black-green bg, forest green primary, warm gold accents
 * Fonts: Playfair Display (titles), DM Sans (body), Space Grotesk (data)
 */

import { useState, useEffect, useRef } from "react";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Cell,
  PieChart, Pie, Legend
} from "recharts";

// ─── CDN image URLs ───────────────────────────────────────────────────────────
const IMG = {
  logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663500566018/3TP39PJUXyRduohPy3rCoD/logo_illuminated_40666ce0.jpg",
  neonSign: "https://d2xsxph8kpxj0f.cloudfront.net/310519663500566018/3TP39PJUXyRduohPy3rCoD/feed_me_sushi_neon_677ec583.jpg",
  rollPlatter: "https://d2xsxph8kpxj0f.cloudfront.net/310519663500566018/3TP39PJUXyRduohPy3rCoD/sushi_roll_platter_d304e87f.jpg",
  cocktails: "https://d2xsxph8kpxj0f.cloudfront.net/310519663500566018/3TP39PJUXyRduohPy3rCoD/cocktails_fd348554.jpeg",
  interior: "https://d2xsxph8kpxj0f.cloudfront.net/310519663500566018/3TP39PJUXyRduohPy3rCoD/restaurant_interior_98f6b3a3.jpeg",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const socialData = [
  { platform: "Instagram", followers: 4800, engagement: "Alto", status: "Activo", color: "#E1306C" },
  { platform: "TikTok", followers: 407, engagement: "Medio", status: "Activo", color: "#69C9D0" },
  { platform: "Facebook", followers: 122, engagement: "Bajo", status: "Poco activo", color: "#1877F2" },
];

const ratingsData = [
  { platform: "OpenTable", rating: 4.8, reviews: 5, color: "#DA3743" },
  { platform: "Yelp", rating: 4.2, reviews: 36, color: "#D32323" },
  { platform: "UberEats", rating: 4.5, reviews: 700, color: "#06C167" },
  { platform: "Google", rating: 4.6, reviews: 200, color: "#4285F4" },
];

const openTableBreakdown = [
  { subject: "Comida", value: 4.8 },
  { subject: "Servicio", value: 4.9 },
  { subject: "Ambiente", value: 4.9 },
  { subject: "Valor", value: 4.4 },
];

const menuCategories = [
  { name: "Rolls Signature", count: 30, color: "#4ADE80" },
  { name: "Fusión Peruana", count: 8, color: "#C9A84C" },
  { name: "Appetizers", count: 12, color: "#60A5FA" },
  { name: "Postres", count: 6, color: "#F472B6" },
  { name: "Cócteles", count: 15, color: "#A78BFA" },
];

const signatureRolls = [
  { name: "Fortune Roll", price: "$23", desc: "Salmón, trufa, pan de oro, masago, cream cheese" },
  { name: "Safari Roll", price: "$23", desc: "Salmón, crab salad, aguacate, sweet & sour" },
  { name: "Fuji Roll", price: "$23", desc: "Shrimp tempura, aguacate, honey mustard, eel sauce" },
  { name: "Protein Roll", price: "$24", desc: "Riceless, atún, salmón, aguacate, spicy mayo" },
  { name: "Tsunami Roll", price: "$23", desc: "Kani frito, bacon, shrimp tempura, eel sauce" },
  { name: "Jaguar Roll", price: "$18", desc: "Shrimp tempura, plátano, spicy mayo, eel sauce" },
  { name: "Tropical Roll", price: "$20", desc: "Salmón/shrimp tempura, plátano, crab salad" },
  { name: "Wild Truffle Roll", price: "$24", desc: "Roll premium con trufa" },
];

const brandColors = [
  { name: "Negro Selva", hex: "#0A0F0D", role: "Fondo principal" },
  { name: "Verde Bosque", hex: "#1B4D2E", role: "Color de marca primario" },
  { name: "Oro Cálido", hex: "#C9A84C", role: "Acento premium / logo" },
  { name: "Verde Neón", hex: "#4ADE80", role: "Métricas positivas / CTA" },
  { name: "Crema Cálida", hex: "#F0EDE6", role: "Texto principal" },
  { name: "Rosa Neón", hex: "#FF69B4", role: "Letrero icónico del local" },
];

const contentPillars = [
  { pillar: "Food Photography", pct: 45, desc: "Fotos artísticas de rolls sobre pizarra oscura" },
  { pillar: "Reels de Preparación", pct: 25, desc: "Behind-the-scenes de chefs y proceso" },
  { pillar: "Happy Hour Promos", pct: 15, desc: "2x1 cócteles, 50% off rolls, 4-7 PM" },
  { pillar: "Lifestyle & Ambiente", pct: 10, desc: "Letrero neon, ambiente romántico, cocktails" },
  { pillar: "UGC / Influencers", pct: 5, desc: "Colaboraciones con food bloggers de Miami" },
];

const deliveryPlatforms = [
  { name: "UberEats", url: "ubereats.com", rating: "4.5★", badge: "700+ reseñas" },
  { name: "DoorDash", url: "doordash.com", rating: "4.4★", badge: "Activo" },
  { name: "Toast Tab", url: "book.toasttab.com", rating: "—", badge: "Reservas" },
  { name: "OpenTable", url: "opentable.com", rating: "4.8★", badge: "5 reseñas" },
];

const customerQuotes = [
  { text: "Hidden gem! Gives Brickell vibes but in Doral. The sushi was fresh and delicious.", author: "Lianet O.", platform: "Google" },
  { text: "Marcelo, the owner, is an incredible human and is always making sure everything is running great.", author: "Luissette", platform: "Google" },
  { text: "Perfect for date nights. Beautiful atmosphere and unique rolls you won't find anywhere else.", author: "Guerliz H.", platform: "OpenTable" },
  { text: "Sushi Jungle has over 30 sushi rolls. A true hidden gem in Doral.", author: "@mayitakeabite", platform: "TikTok" },
];

const webRecommendations = [
  {
    icon: "🎯",
    title: "Historia de Marca",
    priority: "Alta",
    desc: "Crear una página 'Our Story' que cuente la fusión japonesa-peruana y la visión de Marcelo. Actualmente da 404.",
  },
  {
    icon: "📸",
    title: "Galería Visual Premium",
    priority: "Alta",
    desc: "Galería de fotos de alta calidad con los rolls signature, el letrero neon y el ambiente del restaurante.",
  },
  {
    icon: "🍣",
    title: "Menú Interactivo",
    priority: "Alta",
    desc: "Menú filtrable por categorías con fotos de cada plato, ingredientes y precios actualizados.",
  },
  {
    icon: "🎉",
    title: "Happy Hour Destacado",
    priority: "Media",
    desc: "Sección prominente con las ofertas de Happy Hour (4-7 PM), animada y visualmente atractiva.",
  },
  {
    icon: "⭐",
    title: "Reseñas y Testimonios",
    priority: "Media",
    desc: "Integrar reseñas de Google, Yelp y OpenTable. Mostrar el rating promedio de forma visual.",
  },
  {
    icon: "📱",
    title: "Optimización SEO Local",
    priority: "Media",
    desc: "Keywords: 'best sushi Doral', 'Japanese fusion Miami', 'sushi near me Doral FL'.",
  },
  {
    icon: "🎁",
    title: "Programa de Recompensas",
    priority: "Baja",
    desc: "Destacar el programa de puntos para fidelizar clientes. Actualmente poco visible.",
  },
  {
    icon: "🌐",
    title: "Versión en Español",
    priority: "Baja",
    desc: "Gran parte de la clientela es hispanohablante. Ofrecer el sitio en inglés y español.",
  },
];

// ─── Utility components ───────────────────────────────────────────────────────

function SectionTitle({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-baseline gap-4 mb-2">
        <span className="text-5xl font-bold opacity-20" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C9A84C" }}>
          {number}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          {title}
        </h2>
      </div>
      {subtitle && <p className="text-sm ml-16 opacity-60">{subtitle}</p>}
      <div className="h-px mt-3 ml-16" style={{ background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
    </div>
  );
}

function MetricCard({ value, label, sub, color = "#4ADE80" }: { value: string; label: string; sub?: string; color?: string }) {
  return (
    <div className="rounded-xl p-5 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
      <div className="text-4xl font-bold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif", color }}>
        {value}
      </div>
      <div className="text-sm font-medium text-white/80">{label}</div>
      {sub && <div className="text-xs mt-1 opacity-50">{sub}</div>}
    </div>
  );
}

function RatingBar({ label, value, max = 5 }: { label: string; value: number; max?: number }) {
  const pct = (value / max) * 100;
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="opacity-80">{label}</span>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C9A84C" }}>{value.toFixed(1)}</span>
      </div>
      <div className="h-2 rounded-full" style={{ background: "oklch(0.22 0.025 145)" }}>
        <div
          className="h-2 rounded-full transition-all duration-1000"
          style={{ width: `${pct}%`, background: "linear-gradient(90deg, #1B4D2E, #4ADE80)" }}
        />
      </div>
    </div>
  );
}

const CUSTOM_TOOLTIP_STYLE = {
  backgroundColor: "oklch(0.12 0.018 145)",
  border: "1px solid oklch(0.22 0.025 145)",
  borderRadius: "8px",
  color: "#F0EDE6",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "13px",
};

// ─── Main component ───────────────────────────────────────────────────────────

export default function Home() {
  const [activeSection, setActiveSection] = useState("overview");
  const [menuFilter, setMenuFilter] = useState("todos");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const sections = [
    { id: "overview", label: "Resumen Ejecutivo" },
    { id: "identity", label: "Identidad de Marca" },
    { id: "social", label: "Redes Sociales" },
    { id: "menu", label: "Menú & Oferta" },
    { id: "reviews", label: "Reseñas & Reputación" },
    { id: "digital", label: "Presencia Digital" },
    { id: "recommendations", label: "Recomendaciones Web" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.09 0.015 145)" }}>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG.logo})`, filter: "brightness(0.25) saturate(0.5)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, oklch(0.09 0.015 145 / 0.9) 0%, oklch(0.12 0.04 145 / 0.7) 100%)" }}
        />
        <div className="relative z-10 container py-16">
          <div className="flex items-start gap-6 mb-6">
            <img src={IMG.logo} alt="Sushi Jungle Logo" className="w-20 h-20 rounded-full object-cover border-2" style={{ borderColor: "#C9A84C" }} />
            <div>
              <div className="text-xs uppercase tracking-widest mb-1 opacity-60" style={{ color: "#C9A84C" }}>
                Informe de Investigación · Abril 2026
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Sushi Jungle
              </h1>
              <p className="text-lg mt-2 opacity-70">Análisis de Branding, Marketing y Presencia Digital</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              { label: "📍 Doral, Miami FL" },
              { label: "🍣 Fusión Japonesa-Peruana" },
              { label: "⭐ 4.6 Promedio General" },
              { label: "📱 Activo en 3 plataformas" },
            ].map((tag) => (
              <span
                key={tag.label}
                className="px-3 py-1 rounded-full text-sm border"
                style={{ borderColor: "oklch(0.30 0.06 145)", background: "oklch(0.14 0.02 145 / 0.8)", color: "#F0EDE6" }}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Layout: sidebar + content ─────────────────────────────────────── */}
      <div className="flex">
        {/* Sidebar */}
        <aside
          className="hidden lg:flex flex-col sticky top-0 h-screen w-56 shrink-0 py-8 px-4 border-r"
          style={{ borderColor: "oklch(0.18 0.02 145)", background: "oklch(0.10 0.016 145)" }}
        >
          <div className="text-xs uppercase tracking-widest mb-6 opacity-40 px-2">Secciones</div>
          <nav className="flex flex-col gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-left px-3 py-2 rounded-lg text-sm transition-all duration-200"
                style={{
                  color: activeSection === s.id ? "#C9A84C" : "oklch(0.65 0.02 145)",
                  background: activeSection === s.id ? "oklch(0.16 0.025 145)" : "transparent",
                  borderLeft: activeSection === s.id ? "2px solid #C9A84C" : "2px solid transparent",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {s.label}
              </button>
            ))}
          </nav>
          <div className="mt-auto pt-6 border-t" style={{ borderColor: "oklch(0.18 0.02 145)" }}>
            <div className="text-xs opacity-40 px-2">sushijungle.online</div>
            <div className="text-xs opacity-40 px-2">(305) 456-8466</div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {/* ── 01 Overview ─────────────────────────────────────────────── */}
          <section ref={setRef("overview")} id="overview" className="container py-14 border-b" style={{ borderColor: "oklch(0.16 0.02 145)" }}>
            <SectionTitle number="01" title="Resumen Ejecutivo" subtitle="Datos clave del restaurante" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <MetricCard value="4.6★" label="Rating Promedio" sub="Todas las plataformas" color="#C9A84C" />
              <MetricCard value="30+" label="Rolls en Menú" sub="Signature & especiales" color="#4ADE80" />
              <MetricCard value="5.2K+" label="Seguidores Totales" sub="Instagram + TikTok + FB" color="#60A5FA" />
              <MetricCard value="700+" label="Reseñas UberEats" sub="Rating 4.5★" color="#F472B6" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
                <h3 className="text-lg font-semibold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Información del Restaurante
                </h3>
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Nombre", "Sushi Jungle"],
                      ["Concepto", "Fusión Japonesa-Peruana"],
                      ["Dirección", "8373 NW 12th St, Doral, FL 33126"],
                      ["Teléfono", "(305) 456-8466"],
                      ["Sitio Web", "sushijungle.online"],
                      ["Horario L-J", "12:00 PM – 10:00 PM"],
                      ["Horario V-S", "12:00 PM – 11:00 PM"],
                      ["Horario Dom", "1:00 PM – 9:00 PM"],
                      ["Happy Hour", "4:00 PM – 7:00 PM"],
                      ["Precio Prom.", "$30 y menos por persona"],
                    ].map(([k, v]) => (
                      <tr key={k} className="border-b" style={{ borderColor: "oklch(0.18 0.02 145)" }}>
                        <td className="py-2 pr-4 opacity-50 font-medium">{k}</td>
                        <td className="py-2 text-white/90">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-xl overflow-hidden border" style={{ borderColor: "oklch(0.22 0.025 145)" }}>
                <img src={IMG.neonSign} alt="Feed Me Sushi & Kiss Me neon sign" className="w-full h-48 object-cover" />
                <div className="p-5" style={{ background: "oklch(0.12 0.018 145)" }}>
                  <p className="text-sm opacity-80 leading-relaxed">
                    Sushi Jungle es un restaurante de fusión japonesa-peruana ubicado en Doral, Miami. Conocido por sus rolls creativos,
                    ambiente trendy y el icónico letrero neón <em>"Feed Me Sushi & Kiss Me"</em>, que se ha convertido en un punto de
                    referencia para fotos en Instagram. El propietario Marcelo lidera un equipo con excelente reputación de servicio.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── 02 Brand Identity ─────────────────────────────────────────── */}
          <section ref={setRef("identity")} id="identity" className="container py-14 border-b" style={{ borderColor: "oklch(0.16 0.02 145)" }}>
            <SectionTitle number="02" title="Identidad de Marca" subtitle="Paleta de colores, tipografía y voz de marca" />

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Color palette */}
              <div>
                <h3 className="text-base font-semibold mb-4 opacity-70 uppercase tracking-wider text-sm">Paleta de Colores</h3>
                <div className="space-y-3">
                  {brandColors.map((c) => (
                    <div key={c.name} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg border flex-shrink-0" style={{ background: c.hex, borderColor: "oklch(0.25 0.03 145)" }} />
                      <div>
                        <div className="text-sm font-medium text-white/90">{c.name}</div>
                        <div className="text-xs opacity-50">{c.hex} · {c.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brand voice */}
              <div>
                <h3 className="text-base font-semibold mb-4 opacity-70 uppercase tracking-wider text-sm">Voz de Marca</h3>
                <div className="space-y-3">
                  {[
                    { label: "Tono", value: "Divertido, juguetón y sofisticado" },
                    { label: "Personalidad", value: "Audaz, aventurero, social media-savvy" },
                    { label: "Concepto", value: "\"Sushiholic\" — identidad de comunidad" },
                    { label: "Idioma", value: "Inglés principal, alcance hispano" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg p-4 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
                      <div className="text-xs uppercase tracking-wider opacity-50 mb-1">{item.label}</div>
                      <div className="text-sm text-white/90">{item.value}</div>
                    </div>
                  ))}
                </div>

                <h3 className="text-base font-semibold mt-6 mb-3 opacity-70 uppercase tracking-wider text-sm">Frases Clave</h3>
                <div className="space-y-2">
                  {[
                    "If being a sushiholic is wrong, we don't want to be right!",
                    "Experience Traditional Sushi with a Vibrant Peruvian Fusion Twist",
                    "Bold flavors and premium ingredients",
                    "Sushi o'clock!",
                  ].map((phrase) => (
                    <div key={phrase} className="flex items-start gap-2 text-sm">
                      <span style={{ color: "#C9A84C" }}>›</span>
                      <em className="opacity-80">"{phrase}"</em>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual identity */}
            <div className="rounded-xl p-6 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
              <h3 className="text-base font-semibold mb-4 opacity-70 uppercase tracking-wider text-sm">Identidad Visual</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: "🌿", title: "Logo", desc: "Circular con ícono de sushi roll, texto lowercase en blanco" },
                  { icon: "📸", title: "Fotografía", desc: "Dark & moody, fondos de pizarra oscura, iluminación dramática" },
                  { icon: "🪴", title: "Interior", desc: "Tropical moderno: plantas, paredes de piedra, neones" },
                  { icon: "✨", title: "Elemento Icónico", desc: "Letrero 'Feed Me Sushi & Kiss Me' — punto de foto viral" },
                ].map((item) => (
                  <div key={item.title} className="text-center p-4 rounded-lg" style={{ background: "oklch(0.15 0.022 145)" }}>
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-sm font-semibold text-white/90 mb-1">{item.title}</div>
                    <div className="text-xs opacity-60">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 03 Social Media ───────────────────────────────────────────── */}
          <section ref={setRef("social")} id="social" className="container py-14 border-b" style={{ borderColor: "oklch(0.16 0.02 145)" }}>
            <SectionTitle number="03" title="Redes Sociales" subtitle="Análisis de presencia y estrategia de contenido" />

            {/* Platform cards */}
            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {socialData.map((s) => (
                <div key={s.platform} className="rounded-xl p-5 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-white">{s.platform}</span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: s.status === "Activo" ? "oklch(0.20 0.08 145)" : "oklch(0.18 0.02 145)",
                        color: s.status === "Activo" ? "#4ADE80" : "oklch(0.55 0.02 145)",
                      }}
                    >
                      {s.status}
                    </span>
                  </div>
                  <div className="text-3xl font-bold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif", color: s.color }}>
                    {s.followers.toLocaleString()}
                  </div>
                  <div className="text-xs opacity-50">seguidores</div>
                  <div className="mt-3 text-xs">
                    <span className="opacity-50">Engagement: </span>
                    <span style={{ color: s.engagement === "Alto" ? "#4ADE80" : s.engagement === "Medio" ? "#C9A84C" : "#F87171" }}>
                      {s.engagement}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Followers bar chart */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-xl p-5 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
                <h3 className="text-sm font-semibold mb-4 opacity-70 uppercase tracking-wider">Seguidores por Plataforma</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={socialData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                    <XAxis dataKey="platform" tick={{ fill: "#8A9E8C", fontSize: 12 }} />
                    <YAxis tick={{ fill: "#8A9E8C", fontSize: 11 }} />
                    <Tooltip contentStyle={CUSTOM_TOOLTIP_STYLE} cursor={{ fill: "oklch(0.18 0.02 145)" }} />
                    <Bar dataKey="followers" radius={[4, 4, 0, 0]}>
                      {socialData.map((entry) => (
                        <Cell key={entry.platform} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Content pillars */}
              <div className="rounded-xl p-5 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
                <h3 className="text-sm font-semibold mb-4 opacity-70 uppercase tracking-wider">Pilares de Contenido (Instagram)</h3>
                <div className="space-y-3">
                  {contentPillars.map((p) => (
                    <div key={p.pillar}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="opacity-80">{p.pillar}</span>
                        <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C9A84C" }}>{p.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: "oklch(0.22 0.025 145)" }}>
                        <div
                          className="h-1.5 rounded-full"
                          style={{ width: `${p.pct}%`, background: "linear-gradient(90deg, #1B4D2E, #4ADE80)" }}
                        />
                      </div>
                      <div className="text-xs opacity-40 mt-0.5">{p.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hashtags */}
            <div className="rounded-xl p-5 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
              <h3 className="text-sm font-semibold mb-4 opacity-70 uppercase tracking-wider">Hashtags Frecuentes</h3>
              <div className="flex flex-wrap gap-2">
                {["#sushi", "#miami", "#miamifood", "#sushimiami", "#foodie", "#miamifoodie", "#sushilovers", "#japanisefood", "#fyp", "#restaurant", "#secretspot", "#sushirolls", "#southfloridaeats", "#miamilocal", "#sushitime", "#thingstodoinmiami"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs border"
                    style={{ borderColor: "oklch(0.28 0.05 145)", color: "#4ADE80", background: "oklch(0.14 0.025 145)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ── 04 Menu ───────────────────────────────────────────────────── */}
          <section ref={setRef("menu")} id="menu" className="container py-14 border-b" style={{ borderColor: "oklch(0.16 0.02 145)" }}>
            <SectionTitle number="04" title="Menú & Oferta Gastronómica" subtitle="Análisis de la propuesta culinaria" />

            {/* Menu categories pie */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-xl p-5 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
                <h3 className="text-sm font-semibold mb-4 opacity-70 uppercase tracking-wider">Distribución del Menú</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={menuCategories}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={85}
                      dataKey="count"
                      nameKey="name"
                    >
                      {menuCategories.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={CUSTOM_TOOLTIP_STYLE} />
                    <Legend
                      formatter={(value) => <span style={{ color: "#F0EDE6", fontSize: "12px" }}>{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="rounded-xl p-5 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
                <h3 className="text-sm font-semibold mb-4 opacity-70 uppercase tracking-wider">Happy Hour</h3>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C9A84C" }}>4–7 PM</div>
                  <div className="text-sm opacity-60 mt-1">Lunes a Viernes</div>
                </div>
                <div className="space-y-3">
                  {[
                    { offer: "2x1 Cócteles", icon: "🍸" },
                    { offer: "50% off en 2do roll", icon: "🍣" },
                    { offer: "$5 Vino y Cerveza", icon: "🍷" },
                    { offer: "$12 Appetizers seleccionados", icon: "🥢" },
                  ].map((item) => (
                    <div key={item.offer} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: "oklch(0.15 0.022 145)" }}>
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm text-white/90">{item.offer}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Signature rolls */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold opacity-70 uppercase tracking-wider">Rolls Signature</h3>
                <div className="flex gap-2">
                  {["todos", "premium", "fusion"].map((f) => (
                    <button
                      key={f}
                      onClick={() => setMenuFilter(f)}
                      className="px-3 py-1 rounded-full text-xs transition-all"
                      style={{
                        background: menuFilter === f ? "#1B4D2E" : "oklch(0.16 0.02 145)",
                        color: menuFilter === f ? "#4ADE80" : "oklch(0.60 0.02 145)",
                        border: `1px solid ${menuFilter === f ? "#1B4D2E" : "oklch(0.22 0.025 145)"}`,
                      }}
                    >
                      {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {signatureRolls.map((roll) => (
                  <div
                    key={roll.name}
                    className="flex items-start gap-4 p-4 rounded-xl border transition-all hover:border-green-800"
                    style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}
                  >
                    <div className="text-xl mt-0.5">🍱</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-white text-sm">{roll.name}</span>
                        <span className="text-sm font-bold shrink-0" style={{ color: "#C9A84C", fontFamily: "'Space Grotesk', sans-serif" }}>
                          {roll.price}
                        </span>
                      </div>
                      <div className="text-xs opacity-50 mt-0.5 leading-relaxed">{roll.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl p-4 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
                <div className="text-xs uppercase tracking-wider opacity-50 mb-2">Fusión Peruana</div>
                <ul className="space-y-1 text-sm opacity-80">
                  <li>🇵🇪 Lomo Saltado — $25</li>
                  <li>🇵🇪 Pollo Saltado — $22</li>
                  <li>🇵🇪 Tiradito Salmón — $17</li>
                  <li>🇵🇪 Tiradito Atún — $19</li>
                  <li>🇵🇪 Tiradito Pulpo — $21</li>
                </ul>
              </div>
              <div className="rounded-xl p-4 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
                <div className="text-xs uppercase tracking-wider opacity-50 mb-2">Appetizers Populares</div>
                <ul className="space-y-1 text-sm opacity-80">
                  <li>🍕 Sushi Pizza — $17</li>
                  <li>🌮 Tuna Tacos — $10</li>
                  <li>🌿 Sweet & Spicy Edamame — $12</li>
                  <li>🥟 Gyoza Frita/Al Vapor — $13</li>
                  <li>🐟 Tuna Tartare — $18</li>
                </ul>
              </div>
              <div className="rounded-xl p-4 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
                <div className="text-xs uppercase tracking-wider opacity-50 mb-2">Postres Signature</div>
                <ul className="space-y-1 text-sm opacity-80">
                  <li>🍫 Chocolate Roll — $17</li>
                  <li>🍵 Matcha Roll — $21</li>
                  <li>🌟 Dubai Dessert — $26</li>
                  <li>🍩 Thai Donuts — $13</li>
                  <li>🍪 Oreo Dessert — $15</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── 05 Reviews ────────────────────────────────────────────────── */}
          <section ref={setRef("reviews")} id="reviews" className="container py-14 border-b" style={{ borderColor: "oklch(0.16 0.02 145)" }}>
            <SectionTitle number="05" title="Reseñas & Reputación" subtitle="Análisis de sentimiento y ratings por plataforma" />

            {/* Ratings overview */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-xl p-5 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
                <h3 className="text-sm font-semibold mb-4 opacity-70 uppercase tracking-wider">Ratings por Plataforma</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={ratingsData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                    <XAxis dataKey="platform" tick={{ fill: "#8A9E8C", fontSize: 11 }} />
                    <YAxis domain={[3.5, 5]} tick={{ fill: "#8A9E8C", fontSize: 11 }} />
                    <Tooltip contentStyle={CUSTOM_TOOLTIP_STYLE} cursor={{ fill: "oklch(0.18 0.02 145)" }} />
                    <Bar dataKey="rating" radius={[4, 4, 0, 0]}>
                      {ratingsData.map((entry) => (
                        <Cell key={entry.platform} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="rounded-xl p-5 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
                <h3 className="text-sm font-semibold mb-4 opacity-70 uppercase tracking-wider">OpenTable: Desglose de Rating</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <RadarChart data={openTableBreakdown}>
                    <PolarGrid stroke="oklch(0.22 0.025 145)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: "#8A9E8C", fontSize: 12 }} />
                    <Radar name="Rating" dataKey="value" stroke="#C9A84C" fill="#C9A84C" fillOpacity={0.25} />
                    <Tooltip contentStyle={CUSTOM_TOOLTIP_STYLE} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sentiment analysis */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-xl p-5 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
                <h3 className="text-sm font-semibold mb-4 opacity-70 uppercase tracking-wider">Temas Positivos Frecuentes</h3>
                <div className="space-y-2">
                  {[
                    { theme: "Ingredientes frescos y calidad", pct: 92 },
                    { theme: "Servicio excepcional", pct: 88 },
                    { theme: "Ambiente romántico / Instagram-worthy", pct: 85 },
                    { theme: "Rolls únicos y creativos", pct: 82 },
                    { theme: "Cócteles excelentes", pct: 75 },
                    { theme: "Buena relación calidad-precio", pct: 70 },
                  ].map((item) => (
                    <RatingBar key={item.theme} label={item.theme} value={item.pct} max={100} />
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-5 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
                <h3 className="text-sm font-semibold mb-4 opacity-70 uppercase tracking-wider">Áreas de Mejora</h3>
                <div className="space-y-3">
                  {[
                    { issue: "Espacio reducido / puede estar lleno", freq: "Ocasional" },
                    { issue: "Sin terraza exterior", freq: "Sugerencia" },
                    { issue: "Barrera de idioma con algunos staff", freq: "Raro" },
                    { issue: "Tiempos de espera en horas pico", freq: "Ocasional" },
                    { issue: "Porciones de platos calientes", freq: "Raro" },
                  ].map((item) => (
                    <div key={item.issue} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: "oklch(0.15 0.022 145)" }}>
                      <span className="text-yellow-400 mt-0.5">⚠</span>
                      <div>
                        <div className="text-sm text-white/80">{item.issue}</div>
                        <div className="text-xs opacity-40">{item.freq}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Customer quotes */}
            <div className="grid md:grid-cols-2 gap-4">
              {customerQuotes.map((q) => (
                <div key={q.author} className="rounded-xl p-5 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
                  <div className="text-2xl mb-3 opacity-30" style={{ color: "#C9A84C" }}>"</div>
                  <p className="text-sm opacity-80 italic leading-relaxed mb-3">{q.text}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold" style={{ color: "#C9A84C" }}>— {q.author}</span>
                    <span className="text-xs opacity-40">{q.platform}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 06 Digital Presence ───────────────────────────────────────── */}
          <section ref={setRef("digital")} id="digital" className="container py-14 border-b" style={{ borderColor: "oklch(0.16 0.02 145)" }}>
            <SectionTitle number="06" title="Presencia Digital" subtitle="Plataformas, delivery y sitio web actual" />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Delivery platforms */}
              <div className="rounded-xl p-5 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
                <h3 className="text-sm font-semibold mb-4 opacity-70 uppercase tracking-wider">Plataformas de Delivery & Reservas</h3>
                <div className="space-y-3">
                  {deliveryPlatforms.map((p) => (
                    <div key={p.name} className="flex items-center justify-between p-3 rounded-lg" style={{ background: "oklch(0.15 0.022 145)" }}>
                      <div>
                        <div className="font-semibold text-sm text-white">{p.name}</div>
                        <div className="text-xs opacity-40">{p.url}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold" style={{ color: "#C9A84C", fontFamily: "'Space Grotesk', sans-serif" }}>{p.rating}</div>
                        <div className="text-xs opacity-50">{p.badge}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current website analysis */}
              <div className="rounded-xl p-5 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
                <h3 className="text-sm font-semibold mb-4 opacity-70 uppercase tracking-wider">Análisis del Sitio Web Actual</h3>
                <div className="mb-4">
                  <div className="text-xs opacity-50 mb-1">URL</div>
                  <div className="text-sm font-mono" style={{ color: "#4ADE80" }}>sushijungle.online</div>
                  <div className="text-xs opacity-40 mt-0.5">Plataforma: Owner.com</div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="text-xs uppercase tracking-wider opacity-50 mb-2">Fortalezas ✓</div>
                  {["Diseño limpio y funcional", "Ordenamiento online integrado", "Programa de recompensas", "Menú visible y actualizado"].map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm">
                      <span style={{ color: "#4ADE80" }}>✓</span>
                      <span className="opacity-70">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider opacity-50 mb-2">Debilidades ✗</div>
                  {["Página 'Our Story' da error 404", "Sin storytelling de marca", "Template genérico sin personalidad", "Sin blog ni contenido SEO"].map((w) => (
                    <div key={w} className="flex items-center gap-2 text-sm">
                      <span style={{ color: "#F87171" }}>✗</span>
                      <span className="opacity-70">{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SEO keywords */}
            <div className="rounded-xl p-5 border" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
              <h3 className="text-sm font-semibold mb-4 opacity-70 uppercase tracking-wider">Keywords SEO Identificadas</h3>
              <div className="flex flex-wrap gap-2">
                {["best sushi Doral", "Japanese fusion Miami", "sushi near me Doral FL", "Peruvian Japanese fusion", "sushi restaurant Doral", "happy hour sushi Miami", "sushi delivery Doral", "Japanese Latin fusion", "sushi rolls Miami", "romantic restaurant Doral"].map((kw) => (
                  <span
                    key={kw}
                    className="px-3 py-1.5 rounded-lg text-xs border"
                    style={{ borderColor: "oklch(0.28 0.05 75)", color: "#C9A84C", background: "oklch(0.14 0.02 75 / 0.3)" }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ── 07 Recommendations ────────────────────────────────────────── */}
          <section ref={setRef("recommendations")} id="recommendations" className="container py-14">
            <SectionTitle number="07" title="Recomendaciones para el Sitio Web" subtitle="Plan de acción para el nuevo sitio" />

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {webRecommendations.map((rec) => (
                <div
                  key={rec.title}
                  className="rounded-xl p-5 border transition-all hover:border-green-700"
                  style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">{rec.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm text-white">{rec.title}</span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: rec.priority === "Alta" ? "oklch(0.20 0.08 145)" : rec.priority === "Media" ? "oklch(0.20 0.06 75)" : "oklch(0.18 0.02 145)",
                            color: rec.priority === "Alta" ? "#4ADE80" : rec.priority === "Media" ? "#C9A84C" : "oklch(0.55 0.02 145)",
                          }}
                        >
                          {rec.priority}
                        </span>
                      </div>
                      <p className="text-xs opacity-60 leading-relaxed">{rec.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Competitive positioning */}
            <div className="rounded-xl p-6 border mb-8" style={{ background: "oklch(0.12 0.018 145)", borderColor: "oklch(0.22 0.025 145)" }}>
              <h3 className="text-base font-semibold mb-4 opacity-70 uppercase tracking-wider text-sm">Posicionamiento Competitivo</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg" style={{ background: "oklch(0.15 0.022 145)" }}>
                  <div className="text-xs uppercase tracking-wider opacity-50 mb-2">Propuesta de Valor Única</div>
                  <p className="text-sm opacity-80">Fusión japonesa-peruana en un ambiente trendy e Instagram-worthy, a precios accesibles en Doral.</p>
                </div>
                <div className="p-4 rounded-lg" style={{ background: "oklch(0.15 0.022 145)" }}>
                  <div className="text-xs uppercase tracking-wider opacity-50 mb-2">Diferenciadores Clave</div>
                  <ul className="text-sm opacity-80 space-y-1">
                    <li>• Letrero neón viral</li>
                    <li>• Rolls con plátano (fusión)</li>
                    <li>• Ambiente "Brickell en Doral"</li>
                    <li>• Programa de recompensas</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg" style={{ background: "oklch(0.15 0.022 145)" }}>
                  <div className="text-xs uppercase tracking-wider opacity-50 mb-2">Audiencia Objetivo</div>
                  <ul className="text-sm opacity-80 space-y-1">
                    <li>• Locales Doral/Miami 25-45</li>
                    <li>• Parejas (date night)</li>
                    <li>• Foodies en redes sociales</li>
                    <li>• Comunidad hispana</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center py-8 border-t" style={{ borderColor: "oklch(0.16 0.02 145)" }}>
              <div className="text-xs opacity-30 mb-2">Informe generado en Abril 2026</div>
              <div className="text-xs opacity-30">Investigación basada en Instagram, Facebook, TikTok, Yelp, OpenTable, UberEats, Google Maps y sitio web oficial</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
