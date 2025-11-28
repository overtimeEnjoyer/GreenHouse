"use client";

import { MainPageImages } from "@/public/images/mainPage";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center p-3">
      {/* BG */}
      <div className="absolute inset-0 z-0">
        <Image
          src={MainPageImages.mainBackGround}
          alt="Green House Калинів"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/60"></div>
      </div>

      {/* CONTENT */}
      <motion.div
        className="container relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="max-w-5xl">

          {/* TITLE */}
          <motion.h1
            className="heading-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Green House Калинів — сучасний будинок у центрі Нового Калинова.
          </motion.h1>

          <motion.p
            className="heading-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            Затишна архітектура, панорамні вікна, продуманий благоустрій і
            простір для життя
          </motion.p>

          <motion.div
            className="flex items-center gap-2 text-white/90 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <MapPin className="w-7 h-7" />
            <span className="font-grava text-xl">
              вул. Авіації, 19 — Новий Калинів, Львівська обл.
            </span>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("apartments")}
              className="px-8 py-4 bg-(--color-primary-green) text-xl font-grava text-white rounded-lg hover:bg-(--color-primary-green-dark) transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Обрати квартиру
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-transparent text-xl text-white font-grava border-2 border-white rounded-lg hover:bg-white hover:text-(--color-graphite) transition-all duration-300"
            >
              Отримати консультацію
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="hidden md:absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.3, repeat: Infinity }}
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
