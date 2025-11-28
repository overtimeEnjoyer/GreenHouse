"use client";

import {
  School,
  Baby,
  ShoppingCart,
  Bus,
  TreePine,
  Stethoscope,
} from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const locationFeatures = [
  { icon: School, title: "Школа", description: "5 хв пішки" },
  { icon: Baby, title: "Садок", description: "Поруч з будинком" },
  { icon: ShoppingCart, title: "Магазини", description: "В межах комплексу" },
  { icon: Bus, title: "Транспорт", description: "Зупинки біля під'їзду" },
  { icon: TreePine, title: "Парк", description: "Зелені зони навколо" },
  { icon: Stethoscope, title: "Аптека", description: "У пішій доступності" },
];

export function Location() {
  const [lessThanLg, setLessThanLg] = useState(false);
  const pathname = usePathname();
  const isLocationPage = pathname === "/location";

  useEffect(() => {
    const checkSize = () => setLessThanLg(window.innerWidth < 1024);
    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <section
      id="location"
      className="py-5 sm:py-24 md:py-32 flex flex-col justify-center items-center px-10 lg:px-20"
    >
      <div className="w-full max-w-7xl">
        <div className="grid md:grid-cols-2 gap-5 items-center">
          {/* LEFT SIDE TEXT */}
          <div>
            <h2 className="mb-6 font-grava text-3xl md:text-4xl lg:text-6xl text-[var(--color-graphite)]">
              У центрі Нового Калинова — все поруч
            </h2>

            <p className="mb-5 heading-3 text-[15px] md:text-[18px] lg:text-xl font-grava text-[var(--color-grey-600)]">
              Локація, у якій поєднано комфорт невеликого містечка та доступність
              до великих міст. Тут тихо, світло й безпечно — і це головне.
            </p>

            <div className="mb-10">
              <p className="text-sm font-grava text-[var(--color-grey-500)] mb-2">
                Адреса:
              </p>
              <p className="text-[var(--color-graphite)] text-[18px] font-grava">
                вул. Авіації, 19, Новий Калинів, Львівська обл.
              </p>
            </div>

            {/* DESKTOP GRID */}
            {!lessThanLg && (
              <div className="flex flex-wrap gap-6">
                {locationFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex gap-4 items-start w-full sm:w-[48%] lg:w-[45%]"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6 text-[var(--color-primary-green)]" />
                      </div>

                      <div className="max-w-[260px]">
                        <h4 className="mb-1 text-[var(--color-graphite)]">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-[var(--color-grey-500)]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* RIGHT SIDE MAP */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] bg-[var(--color-grey-200)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.3929378348003!2d23.297620390117327!3d49.55801858551841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ba8b0309847c1%3A0x49bbb96cd800a2d8!2z0L_Qu9C-0YnQsCDQkNCy0ZbQsNGG0ZbRlywgMTksINCd0L7QstC40Lkg0JrQsNC70LjQvdGW0LIsINCb0YzQstGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgODE0NjQ!5e1!3m2!1suk!2sua!4v1764194201212!5m2!1suk!2sua"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Green House Калинів Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* MOBILE GRID */}
        {lessThanLg && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 w-full mt-10">
            {locationFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-[var(--color-primary-green)]" />
                  </div>

                  <h4 className="text-[var(--color-graphite)] font-grava text-[16px] leading-tight">
                    {feature.title}
                  </h4>

                  <p className="text-sm text-[var(--color-grey-500)] leading-tight">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* BUTTON: only on /location */}
        {isLocationPage && (
          <div className="w-full flex justify-center mt-12">
            <Link
              href="/"
              className="
                inline-flex items-center gap-2 px-10 py-4 
                font-grava text-xl
                bg-[var(--color-primary-green)]
                text-white rounded-lg
                hover:bg-[var(--color-primary-green-dark)]
                transition-all duration-300 shadow-lg hover:shadow-xl
              "
            >
              На головну
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
