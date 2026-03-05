import { Bot } from "grammy";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isValidPhone(phone: string) {
  const digits = phone.replaceAll(/\D/g, "");
  return digits.length >= 9 && digits.length <= 15;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Не настроены переменные TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в .env.",
      },
      { status: 500 },
    );
  }

  const payload = (await request
    .json()
    .catch(() => null)) as ContactBody | null;

  if (!payload) {
    return NextResponse.json(
      { ok: false, error: "Некорректное тело запроса." },
      { status: 400 },
    );
  }

  const name = payload.name?.trim() || "";
  const phone = payload.phone?.trim() || "";
  const email = payload.email?.trim() || "";
  const message = payload.message?.trim() || "";

  if (!name || !phone || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Заполните имя, телефон, email и сообщение." },
      { status: 400 },
    );
  }

  if (!isValidPhone(phone)) {
    return NextResponse.json(
      { ok: false, error: "Некорректный номер телефона." },
      { status: 400 },
    );
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Некорректный email." },
      { status: 400 },
    );
  }

  const bot = new Bot(token);
  const sentAt = new Date().toLocaleString("ru-RU", {
    timeZone: "Europe/Minsk",
  });

  const text = [
    "📩 <b>Новая заявка с сайта Belrosen</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(name)}`,
    `<b>Телефон:</b> ${escapeHtml(phone)}`,
    `<b>Email:</b> ${escapeHtml(email)}`,
    `<b>Сообщение:</b> ${escapeHtml(message)}`,
    `<b>Время:</b> ${escapeHtml(sentAt)}`,
  ].join("\n");

  try {
    await bot.api.sendMessage(chatId, text, {
      parse_mode: "HTML",
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Telegram send error:", error);
    return NextResponse.json(
      { ok: false, error: "Не удалось отправить сообщение в Telegram." },
      { status: 502 },
    );
  }
}
