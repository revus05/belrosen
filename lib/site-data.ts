import { Building2, Gauge, ShieldCheck } from "lucide-react";

export const services = [
  {
    title: "Монтаж котельного и отопительного оборудования",
    description:
      "Проектируем и внедряем надёжные котельные узлы для промышленных и частных объектов.",
    details:
      "Выполняем монтаж котельных, систем отопления и автоматизации с последующим вводом в эксплуатацию.",
    image: "/images/belrosen/service-installation.jpg",
  },
  {
    title: "Наладка и сервисное обслуживание",
    description:
      "Проводим пусконаладку, аудит рабочих параметров и регламентное сопровождение систем.",
    details:
      "Проводим диагностику, настройку режимов горения, проверку безопасности и сезонный сервис оборудования.",
    image: "/images/belrosen/service-maintenance.jpg",
  },
  {
    title: "Строительство сетей газоснабжения",
    description:
      "Реализуем газораспределительные сети под ключ с соблюдением норм и отраслевых требований.",
    details:
      "Берём на себя полный цикл: подготовка проекта, строительно-монтажные работы, пуск и техническая документация.",
    image: "/images/belrosen/service-gas.jpg",
  },
  {
    title: "Монтаж газового оборудования",
    description:
      "Профессионально устанавливаем газовые котлы, горелки и вспомогательное оборудование.",
    details:
      "Осуществляем монтаж газовых котлов, горелочных устройств, систем контроля и автоматики с соблюдением всех требований безопасности.",
    image: "/images/belrosen/m12.webp",
  },
  {
    title: "Техническое обслуживание газовых систем",
    description:
      "Регулярное обслуживание и контроль состояния газового оборудования.",
    details:
      "Проводим плановые проверки, чистку, регулировку и диагностику газовых котлов и систем газоснабжения для безопасной эксплуатации.",
    image: "/images/belrosen/to.jpg",
  },
  {
    title: "Диагностика и ремонт газового оборудования",
    description: "Быстро выявляем и устраняем неисправности газовых установок.",
    details:
      "Выполняем комплексную диагностику, ремонт и замену неисправных компонентов газового оборудования с последующей проверкой работоспособности.",
    image: "/images/belrosen/diag.jpg",
  },
];

export const projects = [
  {
    title: "Котельные системы",
    image: "/images/belrosen/gallery-1.jpg",
    description:
      "Модернизация и запуск теплогенерирующих систем для промышленных объектов.",
  },
  {
    title: "Промышленные решения",
    image: "/images/belrosen/gallery-2.jpg",
    description:
      "Комплексные инженерные проекты с интеграцией автоматики и узлов учёта.",
  },
  {
    title: "Энергоэффективные узлы",
    image: "/images/belrosen/gallery-3.jpg",
    description:
      "Решения для снижения затрат на тепло и повышения стабильности работы систем.",
  },
  {
    title: "Проекты БелРёзен",
    image: "/images/belrosen/gallery-4.jpg",
    description:
      "Реализованные объекты компании: от проектирования до сервисного сопровождения.",
  },
];

export const partners = [
  {
    name: "BIMS Plus",
    image: "/images/belrosen/partner-bimsplus.png",
    url: "https://bimsplus.pl/",
  },
  {
    name: "Oventrop",
    image: "/images/belrosen/partner-oventrop.png",
    url: "https://www.oventrop.com/",
  },
  {
    name: "Viessmann",
    image: "/images/belrosen/partner-viessmann.png",
    url: "https://www.viessmann.by/",
  },
  {
    name: "Giersch",
    image: "/images/belrosen/partner-giersch.png",
    url: "http://www.giersch.ru/",
  },
  {
    name: "Kampmann",
    image: "/images/belrosen/partner-kampmann.png",
    url: "https://www.kampmann.ru/",
  },
  {
    name: "Weishaupt",
    image: "/images/belrosen/partner-weishaupt.png",
    url: "https://www.weishaupt.ru/",
  },
];

export const aboutParagraphs = [
  "Более 25 лет БелРёзен оказывает услуги по подбору, монтажу, наладке и сервисному обслуживанию котельного и отопительного оборудования.",
  "Компания выполняет строительство сетей газоснабжения, систем отопления и теплоснабжения, внедряет решения с альтернативными источниками тепловой энергии.",
  "У нас есть необходимые лицензии и разрешительные документы, включая согласования профильных органов Республики Беларусь.",
];

export const stats = [
  { title: "25+ лет", subtitle: "на рынке инженерных систем", icon: Gauge },
  {
    title: "300+ объектов",
    subtitle: "выполнено с полным циклом работ",
    icon: Building2,
  },
  {
    title: "Лицензии",
    subtitle: "на монтаж, наладку и сервис",
    icon: ShieldCheck,
  },
];

export const contactInfo = {
  primaryPhone: "+375 (29) 616-13-34",
  cityPhone: "+375 (17) 510-96-55",
  location: "Минский район, Валерьяново",
};
