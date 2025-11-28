import { Location } from "@/components/Location";

export const metadata = {
  title: "Локація — Green House Калинів | Зручне місце розташування",
  description:
    "Дізнайтеся про зручну локацію житлового комплексу Green House Калинів. Поблизу — магазини, школи, садочки, транспорт та інфраструктура для комфортного життя.",
  keywords:
    "локація Green House Калинів, інфраструктура, розташування, Новий Калинів, житловий комплекс, будинок поруч все необхідне",
  openGraph: {
    title: "Локація — Green House Калинів",
    description:
      "Green House Калинів розташований у тихому та зручному районі з повною інфраструктурою. Перегляньте деталі локації.",
    url: "https://greenhouse-kalyniv.com/location",
    siteName: "Green House Калинів",
    type: "website",
  },
};

export default function LocationPage() {
  return (
    <section>
      <Location />
    </section>
  );
}
