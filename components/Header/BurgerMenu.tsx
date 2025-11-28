"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Phone } from "lucide-react";
import NavLinks from "./NavLinks";
import Image from "next/image";
import { MainPageImages } from "@/public/images/mainPage";
import { useRouter } from "next/navigation";

interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const containerVariants: Variants = {
  closed: {
    x: "100%",
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const backgroundPatterns: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 0.05,
    scale: 1,
    transition: { duration: 0.8 },
  },
};

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, toggleMenu }) => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.button
        onClick={toggleMenu}
        className="md:hidden flex items-center justify-center w-12 h-12 rounded-full border border-white/90 bg-emerald-700 backdrop-blur z-50 shadow-lg"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        whileTap={{ scale: 0.92 }}
      >
        <motion.div
          className="relative w-6 h-6 flex items-center justify-center"
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            open: {
              rotate: 2070,
              transition: { type: "spring", stiffness: 260, damping: 20 },
            },
            closed: {
              rotate: 0,
              transition: { type: "spring", stiffness: 260, damping: 20 },
            },
          }}
        >
          {/* Ripple circle */}
          <motion.span
            className="absolute w-5 h-5 rounded-full border border-white/10"
            variants={{
              open: { scale: 1, opacity: 0.1 },
              closed: { scale: 0, opacity: 0 },
            }}
            transition={{ duration: 0.4 }}
          />

          {/* top line */}
          <motion.span
            className="absolute w-6 h-0.5 bg-white rounded origin-center"
            variants={{
              open: { rotate: 45, y: 0 },
              closed: { rotate: 0, y: -6 },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />

          {/* middle line */}
          <motion.span
            className="absolute w-6 h-0.5 bg-white rounded origin-center"
            variants={{
              open: { opacity: 0, scaleX: 0 },
              closed: { opacity: 1, scaleX: 1 },
            }}
            transition={{ duration: 0.2 }}
          />

          {/* bottom line */}
          <motion.span
            className="absolute w-6 h-0.5 bg-white rounded origin-center"
            variants={{
              open: { rotate: -45, y: 0 },
              closed: { rotate: 0, y: 6 },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>
      </motion.button>

      {/* --- MENU PANEL --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={containerVariants}
            className="fixed inset-0 bg-white flex flex-col z-40 md:hidden overflow-hidden"
          >
            {/* Background pattern */}
            <motion.div
              className="absolute inset-0 opacity-5"
              initial="initial"
              animate="animate"
              variants={backgroundPatterns}
            >
              <div className="absolute top-0 left-0 w-full h-full" />
            </motion.div>

            {/* Logo */}
            <Image
              src={MainPageImages.logo}
              alt="logo"
              className="w-25 h-25 ml-7 object-contain mt-5"
            />

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center items-center px-8 relative">
              <motion.div
                className="w-full max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <NavLinks mobile onItemClick={toggleMenu} />
                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <button
                    onClick={() => {
                      router.push("/apartments");
                      toggleMenu();
                    }}
                    className="px-8 py-4 bg-(--color-primary-green) text-xl font-grava text-white rounded-lg hover:bg-primary-green-dark transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Обрати квартиру
                  </button>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="p-8 text-black text-sm border-t border-black text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <p className="font-grava">Green House Калинів</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BurgerMenu;
