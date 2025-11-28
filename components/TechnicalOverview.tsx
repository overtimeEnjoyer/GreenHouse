"use client";

import { MainPageImages } from "@/public/images/mainPage";
import {
  BrickWall,
  Palette,
  Construction,
  Square,
  ArrowUpDown,
  Layers,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function TechnicalOverview() {
  const materials = [
    {
      text: "Стіни — керамічна цегла",
      icon: BrickWall,
    },
    {
      text: "Перекриття — монолітна конструкція",
      icon: Construction,
    },
    {
      text: "Вікна — металопластикові панорамні",
      icon: Square,
    },
    {
      text: "Ліфт — сучасний, плавний та безшумний",
      icon: ArrowUpDown,
    },
    {
      text: "Декоративний фасад — сучасна кольорова гамма, графіт та білий",
      icon: Palette,
    },
    {
      text: "Утеплення фасаду — 15 см пінополістирол",
      icon: Layers,
    },
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section className="relative min-h-screen flex items-center p-3">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src={MainPageImages.TechnicalOverviewImage}
          alt="Green House Калинів"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center text-center">
        {/* TITLE */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-2xl font-grava leading-7 md:heading-2 mb-6 pt-10 text-white"
        >
          Європейський стиль, якісна конструкція, максимальна увага до деталей
        </motion.h2>

        {/* GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
          }}
          viewport={{ once: true }}
          className="max-w-[900px] w-full mx-auto bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
        >
          <p className="heading-3 mb-3 md:mb-10 text-[#002817]">
            Матеріали будівництва:
          </p>

          {/* MATERIALS LIST */}
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-y-6">
            {materials.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 1}
                  className="flex items-start gap-4 text-left w-full md:w-[48%]"
                >
                  <Icon className="w-7 h-7 text-[#8da794] shrink-0 mt-1" />
                  <p className="text-black font-grava tracking-[-1px] text-[18px] leading-6">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
