import { CheckCircle2 } from "lucide-react";
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
import { services } from "@/lib/site-data";

const serviceAdvantages = [
  "Инженерный аудит объекта перед началом работ",
  "Полный цикл: проектирование, монтаж, пусконаладка",
  "Прозрачная коммуникация по срокам и этапам",
  "Сервисное сопровождение после запуска",
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(227,0,22,0.1),transparent_40%),linear-gradient(130deg,#f8f9fb_0%,#eef2f7_100%)]" />
      <div className="tech-grid pointer-events-none absolute inset-0 -z-10 opacity-70" />

      <SiteHeader currentPath="/services" />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:gap-12 md:px-6 md:py-12">
        <section className="space-y-4">
          <Badge className="w-fit rounded-full bg-primary/10 text-primary">
            Услуги
          </Badge>
          <h1 className="font-title text-4xl leading-tight md:text-5xl">
            Комплексные инженерные услуги для отопления и газоснабжения
          </h1>
          <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
            БелРёзен выполняет ключевые виды работ для промышленных и частных
            объектов. Мы отвечаем за техническое качество и стабильный результат
            на каждом этапе.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="rounded-4xl border-white/85 bg-white/85"
            >
              <div className="relative mx-4 mt-4 overflow-hidden rounded-3xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={760}
                  height={520}
                  className="h-52 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="font-title text-2xl leading-tight">
                  {service.title}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {service.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-4xl border-primary/25 bg-primary text-white">
            <CardHeader>
              <CardTitle className="font-title text-3xl">
                Почему выбирают БелРёзен
              </CardTitle>
              <CardDescription className="text-white/85">
                Работаем по технологической дисциплине и учитываем специфику
                каждого объекта.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {serviceAdvantages.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                  <p className="text-white/95">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-4xl border-white/85 bg-white/85">
            <CardHeader>
              <CardTitle className="font-title text-3xl">
                Обсудить ваш проект
              </CardTitle>
              <CardDescription>
                Оставьте контакты на странице консультации, и мы подготовим
                предложение под ваш объект.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="rounded-full">
                <Link href="/contacts">Перейти к форме консультации</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
