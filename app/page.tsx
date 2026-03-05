import { ArrowRight, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  aboutParagraphs,
  contactInfo,
  partners,
  projects,
  services,
  stats,
} from "@/lib/site-data";

export default function Page() {
  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(227,0,22,0.12),transparent_35%),radial-gradient(circle_at_90%_15%,rgba(17,24,39,0.07),transparent_32%),linear-gradient(130deg,#f8f9fb_0%,#eef2f7_100%)]" />
      <div className="tech-grid pointer-events-none absolute inset-0 -z-10 opacity-70" />

      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:gap-14 md:px-6 md:py-12">
        <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="rounded-4xl border-white/80 bg-white/75 px-2 py-2 backdrop-blur-sm">
            <CardHeader className="space-y-4">
              <Badge className="rounded-full bg-primary/10 text-primary">
                Котельные и газовые сети под ключ
              </Badge>
              <CardTitle className="font-title text-4xl leading-tight md:text-6xl">
                Технологичные инженерные решения для бизнеса и частных объектов
              </CardTitle>
              <CardDescription className="max-w-2xl text-base md:text-lg">
                БелРёзен проектирует, монтирует и обслуживает отопительные,
                котельные и газоснабжающие системы с акцентом на надёжность и
                эффективность.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3 pb-5">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link href="/services">
                  Смотреть услуги
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-foreground/20 px-6"
              >
                <Link href="/contacts">Получить консультацию</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-4xl border-white/80 bg-white/80 p-2 backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/belrosen/about-banner.jpg"
                alt="Инженерные системы БелРёзен"
                width={920}
                height={620}
                className="h-72 w-full object-cover lg:h-[21.5rem]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/65 via-black/25 to-transparent" />
            </div>
            <CardFooter className="mt-2 flex-col items-start gap-2 rounded-3xl border-0 bg-transparent p-4">
              <p className="font-title text-xl text-foreground">
                БелРёзен с 1990-х годов
              </p>
              <p className="text-sm text-muted-foreground">
                Проектирование, монтаж, пусконаладка и сервис в одном инженерном
                контуре.
              </p>
            </CardFooter>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <Card
              key={item.title}
              className="rounded-3xl border-white/80 bg-white/80"
            >
              <CardHeader className="gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon />
                </div>
                <CardTitle className="font-title text-2xl">
                  {item.title}
                </CardTitle>
                <CardDescription>{item.subtitle}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>

        <section id="about" className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="rounded-4xl border-white/80 bg-white/80">
            <CardHeader>
              <Badge
                variant="outline"
                className="rounded-full border-primary/35 text-primary"
              >
                О компании
              </Badge>
              <CardTitle className="font-title text-3xl md:text-4xl">
                Инженерный подход с полной ответственностью за результат
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base text-muted-foreground md:text-lg">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-4xl border-primary/30 bg-primary text-white">
            <CardHeader>
              <CardTitle className="font-title text-2xl">
                Ключевые направления
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-white/90">
              <p>Котельное оборудование и автоматика</p>
              <Separator className="bg-white/30" />
              <p>Сети газоснабжения и тепловые узлы</p>
              <Separator className="bg-white/30" />
              <p>Пусконаладка, диагностика и сервис</p>
              <Separator className="bg-white/30" />
              <p>КИП, щиты управления и распределения</p>
            </CardContent>
          </Card>
        </section>

        <section id="services" className="space-y-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <Badge
                variant="outline"
                className="rounded-full border-primary/35 text-primary"
              >
                Наши услуги
              </Badge>
              <h2 className="font-title mt-2 text-3xl md:text-4xl">
                Основные направления работ
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-foreground/20"
            >
              <Link href="/services">Подробнее об услугах</Link>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.splice(0, 3).map((service) => (
              <Card
                key={service.title}
                className="rounded-4xl border-white/80 bg-white/85"
              >
                <div className="relative mx-4 mt-4 overflow-hidden rounded-3xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={700}
                    height={460}
                    className="h-52 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="font-title text-2xl leading-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="border-0 bg-transparent px-4 pb-4 pt-0">
                  <Button asChild className="w-full rounded-full">
                    <Link href="/services">
                      Узнать больше
                      <ArrowRight />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-5">
          <div>
            <Badge
              variant="outline"
              className="rounded-full border-primary/35 text-primary"
            >
              Реализованные объекты
            </Badge>
            <h2 className="font-title mt-2 text-3xl md:text-4xl">
              Примеры работ
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="rounded-3xl border-white/80 bg-white/80 p-2"
              >
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={520}
                    height={420}
                    className="h-52 w-full object-cover"
                  />
                </div>
                <CardContent className="pb-4 pt-3">
                  <p className="font-medium">{project.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-foreground/20"
          >
            <Link href="/projects">Смотреть все проекты</Link>
          </Button>
        </section>

        <section id="partners" className="space-y-5">
          <div>
            <Badge
              variant="outline"
              className="rounded-full border-primary/35 text-primary"
            >
              Наши партнёры
            </Badge>
            <h2 className="font-title mt-2 text-3xl md:text-4xl">
              Производители и бренды, которым доверяем
            </h2>
          </div>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <Card
                key={partner.name}
                className="rounded-3xl border-white/85 bg-white/85"
              >
                <CardContent className="flex h-28 items-center justify-center group">
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noreferrer"
                    className="max-w-42.5 group-hover:scale-105 transition-transform"
                  >
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={170}
                      height={78}
                      className="h-auto max-h-12 w-auto object-contain"
                    />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="rounded-4xl border-white/85 bg-white/85 p-2 min-h-100">
            <div className="overflow-hidden rounded-3xl h-full">
              <iframe
                title="Карта офиса БелРёзен"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=XM82%2BP5%20Valer%27yanovo%2C%20Belarus&z=13&output=embed"
              />
            </div>
            <CardFooter className="mt-2 border-0 bg-transparent px-3 pb-2 pt-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" />
                {contactInfo.location}
              </div>
            </CardFooter>
          </Card>

          <Card className="rounded-4xl border-primary/30 bg-primary text-white h-fit">
            <CardHeader>
              <Badge className="w-fit rounded-full bg-white/20 text-white">
                Консультация
              </Badge>
              <CardTitle className="font-title text-3xl">
                Требуется консультация?
              </CardTitle>
              <CardDescription className="text-white/85">
                Перейдите на отдельную страницу контактов и отправьте заявку.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                size="lg"
                className="h-11 w-full rounded-full bg-white text-primary hover:bg-white/90 hover:text-white border hover:border-white"
              >
                <Link href="/contacts">
                  Открыть форму консультации
                  <ArrowRight />
                </Link>
              </Button>
            </CardContent>
            <CardFooter className="flex-col items-stretch gap-3 border-0 bg-transparent pt-0">
              <a
                href="tel:+375175109655"
                className="text-center text-sm text-white/95 hover:text-white"
              >
                <Phone className="mr-1 inline size-4 text-white" />
                {contactInfo.cityPhone}
              </a>
            </CardFooter>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
