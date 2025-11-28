"use client";

import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import BurgerMenu from "./BurgerMenu";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { reportConversion } from "../utils";
import Image from "next/image";
import { MainPageImages } from "@/public/images/mainPage";

import { motion } from "framer-motion";

const Header: React.FC = () => {
  const pathname = usePathname();
  const isDarkHeader = pathname === "/contacts";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        relative z-30 transition-all duration-300
        ${isDarkHeader ? "bg-[var(--color-graphite)]" : "bg-white"}
        ${isScrolled ? "shadow-md py-3" : "py-5"}
      `}
    >
      <div className="lg:container mx-auto px-4 gap-5 flex justify-between items-center">

        {/* LOGO: тихий fade + slight upward slide */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-20 h-15 flex flex-row"
        >
          <Link
            href="/"
            scroll={true}
            onClick={() => reportConversion("/navBar")}
          >
            <div className="flex items-center justify-center">
              <Image
                src={isDarkHeader ? MainPageImages.white_logo : MainPageImages.logo}
                alt="logo"
                className="w-20 h-20 -mt-3"
              />
            </div>
          </Link>
        </motion.div>

        {/* NAV LINKS + PHONE */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="flex-1 flex justify-end gap-10"
        >
          <NavLinks dark={isDarkHeader} />

          <motion.a
            whileHover={{
              opacity: 0.85,
              boxShadow: "0 0 14px rgba(0,0,0,0.15)"
            }}
            transition={{ duration: 0.25 }}
            href="tel:+380987701070"
            className="
              hidden md:flex items-center justify-center gap-2 
              px-3 py-2 rounded-4xl bg-[var(--color-primary-green)] text-white
            "
          >
            <span>+380 987 701 070</span>
          </motion.a>
        </motion.div>

        {/* BURGER: тільки fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="flex items-center lg:space-x-4 space-x-2"
        >
          <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </motion.div>

      </div>
    </motion.header>
  );
};

export default Header;
