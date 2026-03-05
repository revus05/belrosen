import { MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { contactInfo } from "@/lib/site-data";

export default function ContactsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground flex flex-col">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(227,0,22,0.1),transparent_38%),linear-gradient(130deg,#f8f9fb_0%,#eef2f7_100%)]" />
      <div className="tech-grid pointer-events-none absolute inset-0 -z-10 opacity-70" />

      <SiteHeader currentPath="/contacts" />

      <main className="grow mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:gap-12 md:px-6 md:py-12">
        <section className="space-y-4">
          <Badge className="w-fit rounded-full bg-primary/10 text-primary">
            Контакты
          </Badge>
          <h1 className="font-title text-4xl leading-tight md:text-5xl">
            Форма консультации
          </h1>
          <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
            Оставьте данные по вашему объекту. Мы проверим запрос и свяжемся с
            вами с техническим решением.
          </p>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="rounded-4xl border-white/85 bg-white/85 p-2">
            <div className="h-full overflow-hidden rounded-3xl">
              <iframe
                title="Карта офиса БелРёзен"
                className="h-full min-h-[420px] w-full border-0"
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

          <Card className="rounded-4xl border-white/85 bg-white text-foreground">
            <CardHeader>
              <Badge className="w-fit rounded-full bg-primary/10 text-primary">
                Консультация
              </Badge>
              <CardTitle className="font-title text-3xl">
                Заполните форму, и мы свяжемся с вами
              </CardTitle>
              <CardDescription>
                Перед отправкой форма проверяет корректность телефона и email.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm
                buttonClassName="h-11 w-full rounded-full"
                inputClassName="h-11 rounded-xl"
                textareaClassName="min-h-28 rounded-xl"
                successClassName="text-sm text-emerald-700"
                errorClassName="text-sm text-red-700"
              />
            </CardContent>
            <CardFooter className="flex-col items-stretch gap-2 border-0 bg-transparent pt-0">
              <a
                href="tel:+375296161334"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                <Phone className="mr-1 inline size-4 text-primary" />
                {contactInfo.primaryPhone}
              </a>
              <a
                href="tel:+375175109655"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                <Phone className="mr-1 inline size-4 text-primary" />
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
