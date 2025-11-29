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

const fadeUp = {
  initial: { opacity: 0, y: -8 },
  animate: { opacity: 1, y: 0 },
};

const Header: React.FC = () => {
  const pathname = usePathname();
  const isDarkHeader = pathname === "/contacts";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        relative z-30 transition-all duration-300
        ${isDarkHeader ? "bg-[var(--color-graphite)]" : "bg-white"}
        ${isScrolled ? "shadow-md py-3" : "py-5"}
      `}
    >
      <div className="lg:container mx-auto px-4 gap-5 flex justify-between items-center">

        {/* LOGO */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-20 h-15 flex flex-row"
        >
          <Link href="/" scroll={true} onClick={() => reportConversion("/navBar")}>
            <Image
              src={isDarkHeader ? MainPageImages.white_logo : MainPageImages.logo}
              alt="logo"
              className="w-20 h-20 -mt-3"
            />
          </Link>
        </motion.div>

        {/* NAVIGATION */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
          className="flex-1 flex justify-end gap-10"
        >
          <NavLinks dark={isDarkHeader} />

          <motion.a
            href="tel:+380987701070"
            whileHover={{ opacity: 0.85 }}
            className="
              hidden md:flex items-center justify-center gap-2 
              px-3 py-2 rounded-4xl bg-[var(--color-primary-green)] text-white
            "
          >
            +380 987 701 070
          </motion.a>
        </motion.div>

        {/* BURGER */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </motion.div>

      </div>
    </header>
  );
};

export default Header;
