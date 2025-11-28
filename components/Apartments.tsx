"use client";

import { MainPageImages } from "@/public/images/mainPage";
import { ArrowRight, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";



const apartmentTypes = [
  {
    type: "1-кімнатні",
    area: "38–44 м²",
    description: "Комфорт для одного чи пари",
  },
  {
    type: "2-кімнатні",
    area: "54–73 м²",
    description: "Ідеально для невеликої сім'ї",
  },
  {
    type: "3-кімнатні",
    area: "93 м²",
    description: "Простір для всієї родини",
  },
  {
    type: "Комерційні",
    area: "85–122 м²",
    description: "Для вашого бізнесу",
  },
];

export function Apartments() {
  const pathname = usePathname();

  const isApartmentsPage = pathname === "/apartments";

  return (
    <section
      id="apartments"
      className={`bg-white flex flex-col px-3 lg:px-10 ${
        isApartmentsPage ? "pb-10 pt-30" : "py-15"
      } `}
    >
      <Image
        src={MainPageImages.ornament}
        alt="ornament"
        className="block md:hidden rotate-90 w-[53%] -mt-40 translate-x-20 sm:translate-x-34 md:translate-x-43"
      />

      <div className="flex flex-row gap-6 justify-around -mt-16">
        <div className="flex flex-col justify-center">
          <div className="max-w-3xl flex flex-col justify-center">
            <div className="w-full mx-auto text-center mb-16">
              <h2 className="mb-6 heading-2 md:text-4xl lg:text-5xl xl:text-7xl text-[var(--color-graphite)]">
                Квартири та комерційні приміщення
              </h2>
              <p className="heading-3 text-[15px] md:text-[20px] lg:text-xl xl:text-3xl text-[var(--color-grey-600)]">
                Підберіть планування, яке ідеально підходить для вас
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-6 mb-12">
            {apartmentTypes.map((apartment, index) => (
              <div
                key={index}
                className="group p-3 lg:p-8 bg-[var(--color-grey-50)] rounded-2xl border border-[var(--color-grey-200)] hover:border-[var(--color-primary-green)] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl border-2 border-[#8da794] bg-white flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary-green)] transition-colors duration-300">
                  <Home className="w-7 h-7 text-[var(--color-primary-green)] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="mb-2 font-kudriashov text-2xl text-[var(--color-graphite)]">
                  {apartment.type}
                </h3>
                <div className="mb-3">
                  <span className="text-[19px] md:text-[16px] font-bold font-grava text-[var(--color-primary-green)]">
                    {apartment.area}
                  </span>
                </div>
                <p className="text-lg md:text-sm font-grava font-bold text-[var(--color-grey-500)]">
                  {apartment.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
            <Link
              href="/planning"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-grava text-xl bg-[var(--color-primary-green)] text-white rounded-lg hover:bg-[var(--color-primary-green-dark)] transition-all duration-300 shadow-lg hover:shadow-xl w-full md:w-auto"
            >
              Оглянути планування
              <ArrowRight className="w-5 h-5" />
            </Link>

            {isApartmentsPage && (
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-grava text-xl bg-[var(--color-grey-200)] text-[var(--color-graphite)] rounded-lg hover:bg-[var(--color-grey-300)] transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-auto"
              >
                На головну
              </Link>
            )}
          </div>
        </div>

        <Image
          src={MainPageImages.ornament}
          alt="ornament"
          className="hidden md:block md:w-8/12 lg:w-7/12 xl:w-5/12"
        />
      </div>
    </section>
  );
}
