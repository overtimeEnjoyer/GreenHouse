"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Toast } from "@/components/common/Toast";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

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
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mb-6 text-white heading-2"
              >
                Відділ консультацій
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-12 text-white/80 heading-3 text-2xl leading-7"
              >
                Маєте питання? Ми готові надати всю необхідну інформацію про
                Green House Калинів
              </motion.p>

              {/* ICON BLOCKS */}
              <div className="space-y-6 flex flex-wrap gap-4 md:gap-0 lg:gap-10">
                {[
                  {
                    icon: Clock,
                    label: "Режим роботи:",
                    content: (
                      <>
                        <p className="text-white">Пн–Пт: 9:00–18:00</p>
                        <p className="text-white">Сб: 10:00–16:00</p>
                      </>
                    ),
                  },
                  {
                    icon: Phone,
                    label: "Телефон:",
                    content: (
                      <a
                        href="tel:+380987701070"
                        className="text-white hover:text-[var(--color-primary-green)] transition-colors"
                      >
                        +380 987 701 070
                      </a>
                    ),
                  },
                  {
                    icon: MapPin,
                    label: "Адреса:",
                    content: (
                      <p className="text-white">
                        вул. Авіації, 19, Новий Калинів, Львівська обл.
                      </p>
                    ),
                  },
                  {
                    icon: Mail,
                    label: "Email:",
                    content: (
                      <a
                        href="mailto:greenhouse.kalyniv@gmail.com"
                        className="text-white hover:text-[var(--color-primary-green)] transition-colors"
                      >
                        greenhouse.kalyniv@gmail.com
                      </a>
                    ),
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.2 + index * 0.12,
                      }}
                      viewport={{ once: true }}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[var(--color-primary-green)]" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60 mb-1">
                          {item.label}
                        </p>
                        {item.content}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT SIDE — FORM */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="p-8 bg-white rounded-2xl shadow-2xl">
                <h3 className="mb-6 font-grava text-2xl text-[var(--color-graphite)]">
                  Отримати консультацію
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true }}
                  >
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
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                  >
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
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                  >
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
                  </motion.div>

                  {/* BUTTONS */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className={`
                      flex flex-col gap-4
                      ${
                        isContactPage
                          ? "md:flex-row md:items-center md:justify-center md:gap-6"
                          : ""
                      }
                    `}
                  >
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

                    {isContactPage && (
                      <Link
                        href="/"
                        className="
                          w-full md:w-auto inline-flex items-center justify-center
                          px-8 py-4 font-grava text-xl rounded-lg shadow-md
                          bg-[var(--color-grey-200)] text-[var(--color-graphite)]
                          hover:bg-[var(--color-grey-300)] transition-all duration-300
                        "
                      >
                        Головна
                      </Link>
                    )}
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
