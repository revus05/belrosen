"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactFormProps = {
  buttonClassName?: string;
  inputClassName?: string;
  textareaClassName?: string;
  successClassName?: string;
  errorClassName?: string;
};

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const initialState: ContactPayload = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isValidPhone(phone: string) {
  const digits = phone.replaceAll(/\D/g, "");
  return digits.length >= 9 && digits.length <= 15;
}

export function ContactForm({
  buttonClassName,
  inputClassName,
  textareaClassName,
  successClassName,
  errorClassName,
}: ContactFormProps) {
  const [form, setForm] = useState<ContactPayload>(initialState);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  const handleFieldChange =
    (field: keyof ContactPayload) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    if (!isValidPhone(payload.phone)) {
      setStatus("error");
      setFeedback("Введите корректный номер телефона.");
      return;
    }

    if (!emailRegex.test(payload.email)) {
      setStatus("error");
      setFeedback("Введите корректный email.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response
        .json()
        .catch(() => ({ error: "Ошибка сервера." }))) as {
        error?: string;
        ok?: boolean;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Не удалось отправить заявку.");
      }

      setStatus("success");
      setFeedback("Заявка отправлена. Мы свяжемся с вами в ближайшее время.");
      setForm(initialState);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Не удалось отправить заявку.";
      setStatus("error");
      setFeedback(message);
    }
  }

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <Input
        placeholder="Ваше имя"
        value={form.name}
        onChange={handleFieldChange("name")}
        required
        className={inputClassName}
      />
      <Input
        type="tel"
        placeholder="Телефон"
        value={form.phone}
        onChange={handleFieldChange("phone")}
        required
        className={inputClassName}
      />
      <Input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleFieldChange("email")}
        required
        className={inputClassName}
      />
      <Textarea
        placeholder="Комментарий по объекту"
        value={form.message}
        onChange={handleFieldChange("message")}
        required
        className={textareaClassName || inputClassName}
      />

      <Button
        size="lg"
        type="submit"
        disabled={status === "loading"}
        className={buttonClassName}
      >
        {status === "loading" ? "Отправка..." : "Отправить запрос"}
      </Button>

      {status === "success" && (
        <p className={successClassName || "text-sm text-emerald-200"}>
          {feedback}
        </p>
      )}
      {status === "error" && (
        <p className={errorClassName || "text-sm text-red-200"}>{feedback}</p>
      )}
    </form>
  );
}
