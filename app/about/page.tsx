import { Award, Cog, ShieldCheck, Wrench } from "lucide-react";
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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { aboutParagraphs, stats } from "@/lib/site-data";

const values = [
  {
    title: "Инженерная экспертиза",
    text: "Работаем с котельными, газовыми сетями и автоматикой как с единой инженерной системой.",
    icon: Cog,
  },
  {
    title: "Ответственность за результат",
    text: "Сопровождаем проект от подбора решения до пусконаладки и сервисного обслуживания.",
    icon: ShieldCheck,
  },
  {
    title: "Технологический сервис",
    text: "Обеспечиваем стабильную работу оборудования на объекте в течение всего жизненного цикла.",
    icon: Wrench,
  },
  {
    title: "Разрешительная база",
    text: "Имеем необходимые лицензии и документы для выполнения профильных работ.",
    icon: Award,
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(227,0,22,0.1),transparent_38%),linear-gradient(130deg,#f8f9fb_0%,#eef2f7_100%)]" />
      <div className="tech-grid pointer-events-none absolute inset-0 -z-10 opacity-70" />

      <SiteHeader currentPath="/about" />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:gap-12 md:px-6 md:py-12">
        <section className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <Card className="rounded-4xl border-white/85 bg-white/85">
            <CardHeader className="space-y-4">
              <Badge className="w-fit rounded-full bg-primary/10 text-primary">
                О компании
              </Badge>
              <CardTitle className="font-title text-4xl leading-tight md:text-5xl">
                БелРёзен: инженерная компания с практическим опытом более 25 лет
              </CardTitle>
              <CardDescription className="text-base md:text-lg">
                Разрабатываем и внедряем инженерные решения для отопления,
                котельных и газоснабжения, объединяя монтаж, настройку и сервис
                в одном контуре.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base text-muted-foreground md:text-lg">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-4xl border-primary/20 bg-primary p-2 text-white">
            <div className="relative h-full min-h-72 overflow-hidden rounded-3xl">
              <Image
                src="/images/belrosen/about-banner.jpg"
                alt="Команда БелРёзен"
                width={960}
                height={720}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/70 via-primary/30 to-transparent" />
            </div>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <Card
              key={item.title}
              className="rounded-3xl border-white/85 bg-white/85"
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

        <section className="space-y-5">
          <div>
            <Badge
              variant="outline"
              className="rounded-full border-primary/35 text-primary"
            >
              Наши принципы
            </Badge>
            <h2 className="font-title mt-2 text-3xl md:text-4xl">
              Как мы ведём проекты
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <Card
                key={value.title}
                className="rounded-3xl border-white/85 bg-white/85"
              >
                <CardHeader className="gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <value.icon />
                  </div>
                  <CardTitle className="font-title text-2xl">
                    {value.title}
                  </CardTitle>
                  <CardDescription>{value.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Card className="rounded-4xl border-primary/30 bg-primary text-white">
          <CardHeader>
            <CardTitle className="font-title text-3xl">
              Нужна консультация по вашему объекту?
            </CardTitle>
            <CardDescription className="text-white/85">
              Перейдите на страницу контактов и отправьте параметры проекта.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              asChild
              className="rounded-full bg-white text-primary hover:bg-white/90 border hover:border-white hover:text-white"
            >
              <Link href="/contacts">Перейти к форме</Link>
            </Button>
          </CardContent>
        </Card>
      </main>

      <SiteFooter />
    </div>
  );
}
