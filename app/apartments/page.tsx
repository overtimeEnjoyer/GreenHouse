import { Apartments } from "@/components/Apartments";

export const metadata = {
  title: "Квартири — Green House Калинів | 1-2-3 кімнатні планування",
  description:
    "Оберіть квартиру у сучасному житловому комплексі Green House Калинів. Доступні планування: 1-кімнатні, 2-кімнатні та 3-кімнатні квартири. Продумані площі, панорамні вікна, теплі фасади, комфортна локація.",
  keywords:
    "квартири Green House Калинів, купити квартиру Новий Калинів, планування квартир, новобудова Львівська область, 1-кімнатна квартира, 2-кімнатна квартира, 3-кімнатна квартира",
  openGraph: {
    title: "Квартири — Green House Калинів",
    description:
      "Доступні 1-2-3 кімнатні квартири у сучасному комплексі Green House Калинів. Продумані планування, панорамні вікна, власний двір та затишна локація.",
    url: "https://greenhouse-kalyniv.com/apartments",
    siteName: "Green House Калинів",
    type: "website",
  },
};

export default function ApartmentsPage() {
  return (
    <section>
      <Apartments />
    </section>
  );
}
