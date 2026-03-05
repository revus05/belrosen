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
import { projects } from "@/lib/site-data";

const stages = [
  "Предпроектный аудит и технический анализ",
  "Разработка инженерного решения под задачу объекта",
  "Монтаж, пусконаладка и передача документации",
  "Постпроектное сервисное сопровождение",
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(227,0,22,0.1),transparent_40%),linear-gradient(130deg,#f8f9fb_0%,#eef2f7_100%)]" />
      <div className="tech-grid pointer-events-none absolute inset-0 -z-10 opacity-70" />

      <SiteHeader currentPath="/projects" />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:gap-12 md:px-6 md:py-12">
        <section className="space-y-4">
          <Badge className="w-fit rounded-full bg-primary/10 text-primary">
            Наши проекты
          </Badge>
          <h1 className="font-title text-4xl leading-tight md:text-5xl">
            Реализованные инженерные объекты БелРёзен
          </h1>
          <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
            Ниже представлены проекты по монтажу и запуску котельного
            оборудования, систем отопления и газоснабжения.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="rounded-3xl border-white/85 bg-white/85 p-2"
            >
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={560}
                  height={460}
                  className="h-56 w-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="font-title text-xl">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-4xl border-white/85 bg-white/85">
            <CardHeader>
              <CardTitle className="font-title text-3xl">
                Как мы ведём проект
              </CardTitle>
              <CardDescription>
                Работаем поэтапно, чтобы инженерное решение было технически
                корректным и удобным в эксплуатации.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {stages.map((stage, index) => (
                <div
                  key={stage}
                  className="rounded-2xl border border-border bg-muted/40 p-4"
                >
                  <p className="text-sm text-primary">Этап {index + 1}</p>
                  <p className="font-medium">{stage}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-4xl border-primary/25 bg-primary text-white">
            <CardHeader>
              <CardTitle className="font-title text-3xl">
                Готовы обсудить новый объект
              </CardTitle>
              <CardDescription className="text-white/85">
                Расскажите о задаче, и мы предложим оптимальный технический
                сценарий реализации.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                className="rounded-full bg-white text-primary hover:bg-white/90"
              >
                <Link href="/contacts">Оставить заявку</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
