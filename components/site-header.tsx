import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

type SiteHeaderProps = {
  currentPath?: string;
};

function navLinkClass(path: string, currentPath?: string) {
  if (path === currentPath) {
    return "text-foreground";
  }

  return "text-muted-foreground hover:text-foreground";
}

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <div className="h-18.25 relative">
      <header className="fixed w-full top-0 z-50 border-b border-white/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/belrosen/logo.png"
              alt="БелРёзен"
              width={100}
              height={100}
            />
            <div className="leading-none">
              <p className="font-title text-lg tracking-tight">БелРёзен</p>
              <p className="text-xs text-muted-foreground">
                Инженерные системы
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link href="/about" className={navLinkClass("/about", currentPath)}>
              О нас
            </Link>
            <Link
              href="/services"
              className={navLinkClass("/services", currentPath)}
            >
              Услуги
            </Link>
            <Link
              href="/projects"
              className={navLinkClass("/projects", currentPath)}
            >
              Наши проекты
            </Link>
            <Link
              href="/contacts"
              className={navLinkClass("/contacts", currentPath)}
            >
              Контакты
            </Link>
          </nav>

          <Button asChild className="rounded-full px-4">
            <a href="tel:+375296161334">
              <Phone />
              {contactInfo.primaryPhone}
            </a>
          </Button>
        </div>
      </header>
    </div>
  );
}
