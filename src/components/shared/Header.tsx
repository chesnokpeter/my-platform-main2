"use client";
import { useEffect, useState } from "react";
import LogoIcon from "@public/header/logo.svg";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import MobileMenu from "./MobileMenu";

const line = {
  closed: { rotate: 0, y: 0 },
  openedTop: { rotate: 45, y: 11 },
  openedBottom: { rotate: -45, y: -11 },
};

const Header = () => {
  const { open } = useModal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = [
    { label: "О сервисе", href: "/#about" },
    { label: "Возможности", href: "/#features" },
    { label: "Как это работает", href: "/#how" },
    { label: "Кейсы", href: "/#cases" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-[9990] transition-all duration-300
        ${
          scrolled && !menuOpen
            ? "bg-white shadow-[0px_4px_10px_0px_rgba(41,58,79,0.10)]"
            : "bg-white"
        }`}
      >
        <div className="max-w-[1200px] xxl:max-w-[1680px] px-5 lg:px-10 xl:px-5 mx-auto">
          <div className="flex items-center justify-between gap-5 py-[21px] lg:py-[25px] xxl:py-[30px]">
            <a className="flex gap-2 xxl:gap-3 items-center" href="/">
              <div className="bg-main-blue size-[38px] xxl:size-[57px] rounded-[12px] xxl:rounded-[16px] flex items-center justify-center shrink-0">
                <LogoIcon className="scale-70 xxl:scale-100" />
              </div>
              <span className="text-[15px] xxl:text-[21px] text-main-blue font-helvetica font-medium max-w-[100px] xxl:max-w-[150px] leading-4 xxl:leading-5 pt-[3px] xs:pt-0 xs:pb-[1px]">
                Моя платформа
              </span>
            </a>

            <nav className="hidden lg:block">
              <ul className="flex items-center gap-5 justify-center h-full">
                {menu.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm xxl:text-lg font-helvetica font-light leading-[130%] block py-1 hover:text-main-blue"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden lg:flex items-center gap-10">
              <a
                className="hidden xl:block text-base xxl:text-lg font-helvetica font-normal leading-[130%] shrink-0 hover:underline"
                href="tel:+74993258949"
              >
                +7 (499) 325-89-49
              </a>

              <div className="flex gap-5 items-center">
                <a className="size-10 xxl:size-[60px]" href="#">
                  <img src="/max.svg" alt="" />
                </a>
                <a className="size-10 xxl:size-[60px]" href="#">
                  <img src="/header/true.svg" alt="" />
                </a>
              </div>

             <div className="w-[242px] xxl:w-[300px] max-w-[full]">
                <Button
                  onClick={open}
                  className="h-10 text-base xxl:h-[60px] xxl:text-xl w-full"
                  variant="blue"
                  parentBg="light"
                >
                  Попробовать бесплатно
                </Button>
             </div>
            </div>

            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="flex lg:hidden flex-col items-end gap-[5px]"
            >
              <motion.span
                className="w-[50px] h-[6px] rounded-full bg-main-blue"
                animate={menuOpen ? "openedTop" : "closed"}
                variants={line}
              />
              <motion.span
                className="w-[40px] h-[6px] rounded-full bg-main-blue"
                animate={{ opacity: menuOpen ? 0 : 1 }}
              />
              <motion.span
                className="w-[50px] h-[6px] rounded-full bg-main-blue"
                animate={menuOpen ? "openedBottom" : "closed"}
                variants={line}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
