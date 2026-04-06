"use client";

import Link from "next/link";
import { X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { NAV_LINKS, SOCIAL } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full sm:w-80 bg-background/95 backdrop-blur-xl border-l border-border"
      >
        <SheetHeader className="text-left">
          <SheetTitle className="font-heading text-2xl text-gold-warm">
            Sushi Jungle
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 mt-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="px-4 py-3 text-lg text-foreground hover:text-gold hover:bg-secondary/50 rounded-lg transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 px-4 space-y-4">
          <Link
            href="/order-online"
            onClick={onClose}
            className={buttonVariants({ className: "w-full bg-gold text-earth-dark hover:bg-gold-warm font-medium" })}
          >
            Order Online
          </Link>
          <Link
            href="/reservations"
            onClick={onClose}
            className={buttonVariants({ variant: "outline", className: "w-full border-gold/30 text-gold hover:bg-gold/10" })}
          >
            Make a Reservation
          </Link>
        </div>

        <div className="mt-auto pt-8 px-4">
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a
              href={SOCIAL.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Instagram
            </a>
            <a
              href={SOCIAL.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              TikTok
            </a>
            <a
              href={SOCIAL.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
