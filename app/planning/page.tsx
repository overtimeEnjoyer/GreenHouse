import { MainPageImages } from "@/public/images/mainPage";
import Image from "next/image";
import Link from "next/link";

export default function PlanningPage() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20">
      <h1 className="heading-2 text-[var(--color-graphite)] mb-12 text-center">
        Планування
      </h1>

      <div className="flex flex-col gap-10 mb-16">
        <Image
          src={MainPageImages.planning1}
          alt="Планування поверху — перша секція"
          width={2000}
          height={1500}
          className="w-full h-auto rounded-xl shadow-lg"
        />

        <Image
          src={MainPageImages.planning2}
          alt="Планування поверху — друга секція"
          width={2000}
          height={1500}
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* TWO BUTTONS */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
        
        <Link
          href="/contacts"
          className="
            w-full md:w-auto inline-flex items-center justify-center 
            px-10 py-4 rounded-xl
            bg-[var(--color-primary-green)] text-white
            font-grava text-md md:text-2xl md:text-xl
            shadow-lg transition-all duration-300
            hover:bg-[var(--color-primary-green-dark)]
            hover:shadow-xl
          "
        >
          Отримати консультацію
        </Link>

        <Link
          href="/"
          className="
            w-full md:w-auto inline-flex items-center justify-center 
            px-10 py-4 rounded-xl
            bg-[var(--color-grey-200)] text-[var(--color-graphite)]
            font-grava text-md md:text-2xl md:text-xl
            shadow-lg transition-all duration-300
            hover:bg-[var(--color-grey-300)]
            hover:shadow-xl
          "
        >
          На головну
        </Link>

      </div>
    </section>
  );
}
