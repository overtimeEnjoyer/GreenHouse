import { Contact } from "@/components/Contact";

export const metadata = {
  title: "Контакти — Green House Калинів | Звʼяжіться з нами",
  description:
    "Залиште заявку або зателефонуйте у відділ консультацій Green House Калинів. Отримайте детальну інформацію про квартири, планування, ціни та умови придбання.",
  keywords:
    "контакти Green House Калинів, консультація, відділ продажу, номер телефону, зв’язатися, ЖК Калинів",
  openGraph: {
    title: "Контакти — Green House Калинів",
    description:
      "Звʼяжіться з відділом консультацій Green House Калинів. Швидка відповідь та професійна консультація щодо вибору квартири.",
    url: "https://greenhouse-kalyniv.com/contacts",
    siteName: "Green House Калинів",
    type: "website",
  },
};

export default function ContactsPage() {
  return (
    <section>
      <Contact />
    </section>
  );
}
