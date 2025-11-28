"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Toast } from "@/components/common/Toast";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: string } | null>(
    null
  );

  const pathname = usePathname();
  const isContactPage = pathname === "/contacts";

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSending) return;
    setIsSending(true);

    const templateParams = {
      from_name: formData.name,
      user_phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        showToast("Ваше повідомлення успішно відправлено!", "success");
        setFormData({ name: "", phone: "", message: "" });
        setIsSending(false);
      })
      .catch(() => {
        showToast("Помилка. Спробуйте ще раз.", "error");
        setIsSending(false);
      });
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <section
        id="contact"
        className="py-24 md:py-32 bg-[var(--color-graphite)] flex flex-col justify-center items-center px-5 md:px-0"
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            {/* LEFT SIDE */}
            <div>
              <h2 className="mb-6 text-white heading-2">Відділ консультацій</h2>
              <p className="mb-12 text-white/80 heading-3 text-2xl leading-7">
                Маєте питання? Ми готові надати всю необхідну інформацію про
                Green House Калинів
              </p>

              <div className="space-y-6 flex flex-wrap gap-4 md:gap-0 lg:gap-10">
                {/* Worktime */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[var(--color-primary-green)]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Режим роботи:</p>
                    <p className="text-white">Пн–Пт: 9:00–18:00</p>
                    <p className="text-white">Сб: 10:00–16:00</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[var(--color-primary-green)]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Телефон:</p>
                    <a
                      href="tel:+380987701070"
                      className="text-white hover:text-[var(--color-primary-green)] transition-colors"
                    >
                      +380 987 701 070
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[var(--color-primary-green)]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Адреса:</p>
                    <p className="text-white">
                      вул. Авіації, 19, Новий Калинів, Львівська обл.
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[var(--color-primary-green)]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Email:</p>
                    <a
                      href="mailto:greenhouse.kalyniv@gmail.com"
                      className="text-white hover:text-[var(--color-primary-green)] transition-colors"
                    >
                      greenhouse.kalyniv@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div>
              <div className="p-8 bg-white rounded-2xl shadow-2xl">
                <h3 className="mb-6 font-grava text-2xl text-[var(--color-graphite)]">
                  Отримати консультацію
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block heading-3 text-sm mb-2 text-[var(--color-grey-600)]">
                      Ваше ім'я
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-[var(--color-grey-300)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary-green)]"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block heading-3 text-sm mb-2 text-[var(--color-grey-600)]">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-[var(--color-grey-300)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary-green)]"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block heading-3 text-sm mb-2 text-[var(--color-grey-600)]">
                      Повідомлення (опціонально)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-[var(--color-grey-300)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary-green)] resize-none"
                    ></textarea>
                  </div>

                  <div
                    className={`
    flex flex-col gap-4
    ${
      isContactPage
        ? "md:flex-row md:items-center md:justify-center md:gap-6"
        : ""
    }
  `}
                  >
                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSending}
                      className={`
      w-full md:w-auto px-8 py-4 font-kudriashov text-xl text-white rounded-lg shadow-lg
      transition-all duration-300 text-center
      ${
        isSending
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-[var(--color-primary-green)] hover:bg-[var(--color-primary-green-dark)]"
      }
    `}
                    >
                      {isSending ? "Відправлення..." : "Відправити"}
                    </button>

                    {/* Show only on /contacts */}
                    {isContactPage && (
                      <Link
                        href="/"
                        className="
        w-full md:w-auto inline-flex items-center justify-center
        px-8 py-4 font-grava text-xl  rounded-lg shadow-md
        bg-[var(--color-grey-200)] text-[var(--color-graphite)]
        hover:bg-[var(--color-grey-300)] transition-all duration-300
      "
                      >
                        Головна
                      </Link>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
