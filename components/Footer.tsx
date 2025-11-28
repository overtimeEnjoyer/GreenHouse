"use client";

import Link from "next/link";
import Image from "next/image";
import { MainPageImages } from "@/public/images/mainPage";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  // Якщо головна або сторінка контактів — футер чорний
  const isDarkFooter = pathname === "/" || pathname === "/contacts";

  return (
    <footer
      className={`
        py-8 border-t flex flex-col items-center transition-all duration-300
        ${isDarkFooter
          ? "bg-[var(--color-graphite-light)] border-white/10"
          : "bg-white border-gray-200"
        }
      `}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" scroll={true}>
              <div className="flex items-center justify-center">
                <Image
                  src={
                    isDarkFooter
                      ? MainPageImages.white_logo
                      : MainPageImages.logo
                  }
                  alt="logo"
                  className="w-30 h-30"
                />
              </div>
            </Link>
          </div>

          {/* Text */}
          <div
            className={`
              text-md font-grava text-center md:text-left transition-all duration-300
              ${isDarkFooter ? "text-white/60" : "text-gray-600"}
            `}
          >
            © 2024 Green House Калинів. Всі права захищені.
          </div>
        </div>
      </div>
    </footer>
  );
}
