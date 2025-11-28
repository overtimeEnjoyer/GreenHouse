"use client";

import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import BurgerMenu from "./BurgerMenu";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { reportConversion } from "../utils";
import Image from "next/image";
import { MainPageImages } from "@/public/images/mainPage";

const Header: React.FC = () => {
  const pathname = usePathname();

  const isDarkHeader = pathname === "/contacts";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

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
        
        <div className="relative w-20 h-15 flex flex-row">
          <Link href="/" scroll={true} onClick={() => reportConversion("/navBar")}>
            <div className="flex items-center justify-center">
              <Image
                src={isDarkHeader ? MainPageImages.white_logo : MainPageImages.logo}
                alt="logo"
                className="w-20 h-20 -mt-3"
              />
            </div>
          </Link>
        </div>

        <div className="flex-1 flex justify-end gap-10">
          <NavLinks dark={isDarkHeader} />

          <a
            href="tel:+380987701070"
            className="
              hidden md:flex items-center justify-center gap-2 
              px-3 py-2 rounded-4xl bg-[var(--color-primary-green)] text-white
            "
          >
            <span className="">+380 987 701 070</span>
          </a>
        </div>

        <div className="flex items-center lg:space-x-4 space-x-2">
          <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
