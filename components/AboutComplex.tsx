"use client";

import { MainPageImages } from "@/public/images/mainPage";
import {
  Building2,
  ArrowUpDown,
  Thermometer,
  Maximize2,
  Home,
  TreePine,
  Sprout,
  Users,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const advantages = [
  { icon: Building2, title: "6 поверхів", description: "комфортний формат" },
  {
    icon: ArrowUpDown,
    title: "Ліфт",
    description: "рідкість для цього типу забудови",
  },
  {
    icon: Thermometer,
    title: "Теплі фасади",
    description: "та енергоефективні рішення",
  },
  { icon: Maximize2, title: "Панорамні вікна", description: "максимум світла" },
  { icon: Home, title: "Власний двір", description: "внутрішній простір" },
  {
    icon: Users,
    title: "Дитячі та спортивні зони",
    description: "для всієї родини",
  },
  {
    icon: Sprout,
    title: "Озеленення",
    description: "власне ландшафтне озеленення",
  },
  { icon: TreePine, title: "Інфраструктура", description: "все поруч" },
];

const maskVariant = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },

  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier (easeOut)
    },
  },
} as const;

export function AboutComplex() {
  return (
    <section
      id="about"
      className="py-10 md:py-24 lg:py-32 bg-(--color-grey-50)"
    >
      <div className="mx-6 md:mx-10">
        {/* TITLE – reveal mask */}
        <motion.h2
          variants={maskVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6 text-(--color-graphite) font-kudriashov md:text-3xl xl:text-5xl leading-tight"
        >
          Ми створили будинок, у якому хочеться жити щодня
        </motion.h2>

        {/* SUBTITLE – delayed reveal mask */}
        <motion.p
          variants={maskVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 font-grava text-shadow-md lg:text-lg xl:text-2xl text-(--color-grey-600)"
        >
          ЖК Green House Калинів — сучасний малоповерховий дім з власним
          внутрішнім простором, дитячими зонами та тихим двором. Ідеальний для
          молодих сімей та людей, які цінують комфорт, екологію та затишок.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-16">
          {/* IMAGE – smooth mask reveal */}
          <motion.div
            variants={maskVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:w-1/2 order-2 md:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={MainPageImages.houseImg}
                alt="House Image"
                className="w-full lg:h-[500px] xl:h-[500px] object-cover"
              />
            </div>
          </motion.div>

          {/* ADVANTAGES GRID */}
          <motion.div className="w-full md:w-1/2 order-1 md:order-2 grid grid-cols-2 gap-2 lg:gap-6">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={maskVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex gap-4 items-start"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-(--color-primary-green)/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-(--color-primary-green)" />
                  </div>
                  <div>
                    <h4 className="md:mb-1 text-[12px] leading-3 lg:leading-5 md:text-[14px] lg:text-lg text-(--color-graphite)">
                      {item.title}
                    </h4>
                    <p className="text-[12px] leading-3 lg:leading-5 md:text-[10px] lg:text-sm text-(--color-grey-500)">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
