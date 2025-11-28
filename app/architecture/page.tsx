import Image from "next/image";
import { MainPageImages } from "@/public/images/mainPage";
import Link from "next/link";

export default function ArchitecturePage() {
  return (
    <section className="w-full mx-auto px-4 py-10">
      {/* Фото */}
      <div className="w-full">
        <Image
          src={MainPageImages.sheme}
          alt="План типового поверху житлового комплексу Green House Калинів"
          className="w-full"
        />
      </div>

      <div className="w-full max-w-6xl flex flex-col justify-center items-center">
        <div className="flex flex-col mt-6 text-center">
          {/* Текст під фото */}
          <p className="text-lg text-[var(--color-graphite)] leading-relaxed">
            Щоб переглянути повні <strong>АРХІТЕКТУРНІ РІШЕННЯ</strong> та{" "}
            <strong>ОСНОВНІ КРЕСЛЕННЯ</strong>, відкрийте PDF-файл за
            посиланням нижче:
          </p>

          {/* Блок кнопок */}
          <div
            className="
              flex flex-col md:flex-row 
              justify-start items-center 
              gap-4 mt-5 w-full
            "
          >
            {/* Кнопка PDF */}
            <a
              href="/files/architecture.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8 py-4 bg-[var(--color-primary-green)] 
             w-auto
                text-center text-[16px] font-grava text-white rounded-lg
                hover:bg-[var(--color-primary-green-dark)]
                transition-all duration-300 shadow-lg hover:shadow-xl
              "
            >
              Відкрити архітектурні креслення (PDF)
            </a>

            {/* Кнопка на головну */}
            <Link
              href="/"
              className="
                px-8 py-4 bg-[var(--color-grey-200)] 
                w-full md:w-auto
                text-center text-[16px] font-grava text-[var(--color-graphite)] rounded-lg
                hover:bg-[var(--color-grey-300)]
                transition-all duration-300 shadow-md hover:shadow-lg
              "
            >
              На головну
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
