import { AboutComplex } from "@/components/AboutComplex";
import { Apartments } from "@/components/Apartments";
import { Hero } from "@/components/Hero";
import { TechnicalOverview } from "@/components/TechnicalOverview";
import { Yard } from "@/components/Yard";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";

export const metadata = {
  title: "Green House Калинів – сучасний житловий комплекс у центрі Нового Калинова",
  description:
    "Green House Калинів — малоповерховий сучасний будинок з ліфтом, панорамними вікнами, закритим двором без авто, дитячими та спортивними зонами. Оберіть квартиру у комфортному та безпечному районі.",
  keywords:
    "Green House Калинів, новобудова Новий Калинів, квартири Львівська область, купити квартиру, житловий комплекс, новобудова зі здачею, сучасний будинок",
  openGraph: {
    title: "Green House Калинів – сучасний житловий комплекс",
    description:
      "Комфортний будинок на 6 поверхів з ліфтом, панорамними вікнами, власним подвір’ям та парком поруч. Все для комфортного життя.",
    url: "https://greenhouse-kalyniv.com",
    siteName: "Green House Калинів",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <AboutComplex />
        <TechnicalOverview />
        <Yard />
        <Apartments />
        <Location />
        <Contact />
      </main>
    </div>
  );
}
