"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  DraftingCompass,
  LayoutGrid,
  MapPin,
  PhoneCall,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface NavLinksProps {
  mobile?: boolean;
  onItemClick?: () => void;
  dark?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ mobile, onItemClick, dark }) => {
  const router = useRouter();

  const navItems: NavItem[] = [
    {
      id: "about",
      label: "Про комплекс",
      href: "#about",
      icon: <Home className="w-6 h-6" />,
    },
    {
      id: "architecture",
      label: "Архітектура",
      href: "/architecture",
      icon: <DraftingCompass className="w-6 h-6" />,
    },
    {
      id: "apartments",
      label: "Квартири",
      href: "/apartments",
      icon: <LayoutGrid className="w-6 h-6" />,
    },
    {
      id: "location",
      label: "Локація",
      href: "/location",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      id: "contacts",
      label: "Контакти",
      href: "/contacts",
      icon: <PhoneCall className="w-6 h-6" />,
    },
  ];

  const baseClasses = mobile
    ? "flex flex-col space-y-6"
    : "hidden md:flex items-center lg:space-x-12 space-x-4";

    const handleLinkClick = (id: string, href: string) => {
      // перехід на сторінку
      if (href.startsWith("/") && !href.startsWith("/#")) {
        router.push(href);
        onItemClick?.();
        return;
      }
    
      // прокрутка до якоря
      if (href.startsWith("#")) {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          onItemClick?.();
          return;
        }
    
        // якщо ми не на головній — перейти на / і потім скрол
        if (window.location.pathname !== "/") {
          router.push(`/#${href.replace("#", "")}`);
    
          setTimeout(() => {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: "smooth" });
          }, 300);
    
          onItemClick?.();
        }
    
        return;
      }
    
      // fallback
      window.location.href = href;
    };
    

  return (
    <nav className={baseClasses}>
      {navItems.map((item, index) => (
        <motion.div
          key={item.id}
          custom={index}
          whileHover={mobile ? { x: 10 } : undefined}
          className="block"
        >
          <a
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(item.id, item.href);
            }}
            className={`
        relative font-grava font-medium transition-all duration-300 ease-out group
        ${
          mobile
            ? `${
                dark ? "text-white" : "text-black"
              } hover:opacity-80 flex items-center gap-4 text-xl`
            : `${dark ? "text-white" : "text-black"} hover:opacity-80`
        }
      `}
          >
            {mobile && item.icon}
            <span className="relative z-10">{item.label}</span>

            {!mobile && (
              <span
                className={`
            absolute left-0 -bottom-1 h-[1.5px] w-0 transition-all duration-300 group-hover:w-full
            ${dark ? "bg-white" : "bg-black"}
          `}
              />
            )}
          </a>
        </motion.div>
      ))}
    </nav>
  );
};

export default NavLinks;
