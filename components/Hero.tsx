"use client";

import { MainPageImages } from "@/public/images/mainPage";
import { MapPin } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center p-3">
      <div className="absolute inset-0 z-0">
        <Image
          src={MainPageImages.mainBackGround}
          alt="Green House Калинів"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/60"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl">
          <h1 className="heading-2 mb-6">
            Green House Калинів — сучасний будинок у центрі Нового Калинова.
          </h1>

          <p className=" heading-3 mb-8">
            Затишна архітектура, панорамні вікна, продуманий благоустрій і
            простір для життя
          </p>

          <div className="flex items-center gap-2 text-white/90 mb-8">
            <MapPin className="w-7 h-7" />
            <span className="font-grava text-xl">вул. Авіації, 19 — Новий Калинів, Львівська обл.</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("apartments")}
              className="px-8 py-4 bg-(--color-primary-green) text-xl font-grava text-white rounded-lg hover:bg-(--color-primary-green-dark) transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Обрати квартиру
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-transparent text-xl text-white font-grava border-2 border-white rounded-lg hover:bg-white hover:text-(--color-graphite) transition-all duration-300"
            >
              Отримати консультацію
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
