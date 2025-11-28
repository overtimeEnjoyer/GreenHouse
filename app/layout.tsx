import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Footer } from "@/components/Footer";

const alexandra = localFont({
  src: "../public/fonts/alexandra-script.woff2",
  variable: "--font-alexandra",
});

const kudriashov = localFont({
  src: "../public/fonts/Kudriashov.woff2",
  variable: "--font-kudriashov",
});

const grava = localFont({
  src: [{ path: "../public/fonts/Grava-Normal.ttf" }],
  variable: "--font-grava",
});


export const metadata = {
  title: "Green House Калинів — сучасні квартири та комерційні приміщення",
  description:
    "Green House Калинів — сучасний житловий комплекс у центрі Нового Калинова. Панорамні вікна, ліфт, теплі фасади, продумані планування та власний двір. Оберіть комфортне та екологічне житло.",
  openGraph: {
    title: "Green House Калинів — сучасний житловий комплекс",
    description:
      "Сучасні квартири та комерційні приміщення у серці Нового Калинова. Панорамні вікна, теплі фасади, комфорт та екологія.",
    url: "https://www.greenhouse-kalyniv.com",
    siteName: "Green House Калинів",
      manifest: "/manifest.json",
      icons: {
        icon: "/icon192.svg",
        apple: "/icon192.svg",
      },
    images: [
      {
        url: "/og-main.jpg", // скинь фото — згенерую
        width: 1200,
        height: 630,
        alt: "Green House Калинів",
      },
    ],
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          min-h-screen 
          flex flex-col 
          ${alexandra.variable}
          ${kudriashov.variable}
          ${grava.variable} 
          antialiased
        `}
      >
        {/* HEADER */}
        <div className="h-25">
          <Header />
        </div>

        {/* MAIN CONTENT — займає весь простір */}
        <main className="flex-1">
          {children}
        </main>

        {/* FOOTER завжди внизу */}
        <Footer />
      </body>
    </html>
  );
}
