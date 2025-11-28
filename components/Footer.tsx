"use client";

import Link from "next/link";
import Image from "next/image";
import { MainPageImages } from "@/public/images/mainPage";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function Footer() {
  const pathname = usePathname();

  const isDarkFooter = pathname === "/" || pathname === "/contacts";

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`
        py-8 border-t flex flex-col items-center transition-all duration-300
        ${
          isDarkFooter
            ? "bg-[var(--color-graphite-light)] border-white/10"
            : "bg-white border-gray-200"
        }
      `}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
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
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className={`
              text-md font-grava text-center md:text-left transition-all duration-300
              ${isDarkFooter ? "text-white/60" : "text-gray-600"}
            `}
          >
            © 2024 Green House Калинів. Всі права захищені.
          </motion.div>

        </div>
      </div>
    </motion.footer>
  );
}
