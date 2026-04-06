import Link from "next/link";
import { CONTACT, HOURS, SOCIAL, NAV_LINKS, RESTAURANT } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-earth-dark border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl text-gold-warm">
              {RESTAURANT.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {RESTAURANT.description}
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href={SOCIAL.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href={SOCIAL.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors text-sm"
              >
                TikTok
              </a>
              <a
                href={SOCIAL.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors text-sm"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Explore</h4>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Hours</h4>
            <div className="space-y-2">
              {HOURS.map((h) => (
                <div key={h.day} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{h.day}</span>
                  <span className="text-foreground font-data">{h.hours}</span>
                </div>
              ))}
              <Separator className="my-3" />
              <div className="flex justify-between text-sm">
                <span className="text-gold">Happy Hour</span>
                <span className="text-gold font-data">4-7 PM</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Contact</h4>
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground">{CONTACT.address}</p>
              <a
                href={`tel:${CONTACT.phone}`}
                className="block text-foreground hover:text-gold transition-colors"
              >
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="block text-muted-foreground hover:text-gold transition-colors"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sushi Jungle. All rights reserved.</p>
          <p>{RESTAURANT.concept} &mdash; Doral, FL</p>
        </div>
      </div>
    </footer>
  );
}
