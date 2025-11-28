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

export const metadata: Metadata = {
  title: "Green House Калинів — сучасні квартири та комерційні приміщення",
  description:
    "Green House Калинів — сучасний малоповерховий житловий комплекс у центрі Нового Калинова. Панорамні вікна, теплі фасади, продумане планування, власний двір та дитячі зони. Оберіть 1–3 кімнатну квартиру або комерційне приміщення у комфортному та екологічному середовищі.",
  icons: {
    icon: "/icon192.svg",
    apple: "/icon192.svg",
  },
  manifest: "/manifest.json",
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
