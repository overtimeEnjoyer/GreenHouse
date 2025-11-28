import { AboutComplex } from "@/components/AboutComplex";
import { Apartments } from "@/components/Apartments";
import { Hero } from "@/components/Hero";
import { TechnicalOverview } from "@/components/TechnicalOverview";
import { Yard } from "@/components/Yard";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";

export const metadata = {
  title: "Green House Калинів — сучасний житловий комплекс у Новому Калинові",
  description:
    "Green House Калинів — сучасний малоповерховий житловий комплекс з ліфтом, теплими фасадами, панорамними вікнами, власним двором та продуманим благоустроєм.",
  keywords:
    "Green House Калинів, Новий Калинів, житловий комплекс, квартири, новобудова, планування, купити квартиру",
  openGraph: {
    title: "Green House Калинів — сучасний житловий комплекс",
    description:
      "Обирайте комфортне житло у сучасному малоповерховому будинку у Новому Калинові.",
    url: "https://www.greenhouse-kalyniv.com",
    siteName: "Green House Калинів",
    images: [
      {
        url: "/icon192.svg", 
        width: 1200,
        height: 630,
        alt: "Green House Калинів — головний вигляд",
      },
    ],
  },
  metadataBase: new URL("https://www.greenhouse-kalyniv.com"),
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
