"use client";
import Button from "../ui/Button";
import LogoIcon from "@public/footer/logo.svg";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { motion } from "framer-motion";

const Footer = () => {
  const { open } = useModal();
  return (
    <footer className="">
      <div className="bg-main-blue rounded-[16px] py-10 s:py-20 lg:py-[90px] mx-5">
        <div className="max-w-[1200px] xxl:max-w-[1680px] mx-auto">
          <div className="bg-main-blue rounded-[16px] px-[26px] s:px-10 lg:px-5">
            <a className="flex gap-3 items-center" href="/">
              <div className="bg-main-white size-[57px] lg:size-[38px] xxl:size-[57px] rounded-[16px] s:rounded-[12px] xxl:rounded-[16px] flex items-center justify-center shrink-0">
                <LogoIcon className="scale-100 lg:scale-70 xxl:scale-100" />
              </div>
              <span className="text-[21px] lg:text-[15px] xxl:text-[21px] text-main-white font-helvetica font-medium max-w-[100px] xxl:max-w-[150px] leading-5 lg:leading-4 xxl:leading-5">
                Моя платформа
              </span>
            </a>
            <div className="mt-10">
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10">
                <div className="order-3 lg:order-1">
                  <div className="mb-10 text-[15px] s:text-[17px] lg:text-sm xxl:text-lg text-main-white font-helvetica font-normal lg:max-w-[260px] xxl:max-w-[380px]">
                    ООО «Моя Платформа» <br /> ИНН 3100049573 <br /> КПП
                    310001001 <br /> 308023, РОССИЯ, БЕЛГОРОДСКАЯ ОБЛ,
                    Г.БЕЛГОРОД, УЛ.ЧЕЛЮСКИНЦЕВ, Д 58А
                  </div>
                  <Link
                    className="font-helvetica text-[15px] s:text-lg lg:text-sm xxl:text-lg text-main-white leading-[130%]"
                    href="/privacy"
                  >
                    Политика конфиденциальности
                  </Link>
                </div>
                <nav className="order-1 xs:order-4 lg:order-2">
                  <ul className="flex flex-col gap-5">
                    {[
                      { label: "О сервисе", href: "/#about" },
                      { label: "Возможности", href: "/#features" },
                      { label: "Как это работает", href: "/#how" },
                      { label: "Кейсы", href: "/#cases" },
                    ].map(({ label, href }) => (
                      <li key={label} className="relative w-fit">
                        <motion.a
                          href={href}
                          className="font-light font-helvetica leading-[130%] text-[15px] s:text-lg lg:text-sm xxl:text-lg text-main-white block py-1"
                          initial="rest"
                          whileHover="hover"
                          animate="rest"
                        >
                          {label}

                          <motion.span
                            className="absolute left-0 bottom-0 h-[1px] w-full bg-white"
                            variants={{
                              rest: { scaleX: 0 },
                              hover: { scaleX: 1 },
                            }}
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut",
                            }}
                            style={{ originX: 0 }}
                          />
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="flex flex-col order-1 lg:order-3">
                  <a
                    className="font-helvetica font-normal text-[15px] s:text-lg lg:text-sm xxl:text-lg leading-[130%] text-main-white"
                    href="tel:+74993258949"
                  >
                    +7 (499) 325-89-49
                  </a>
                  <a
                    className="mt-5 font-helvetica font-normal text-[15px] s:text-lg lg:text-sm xxl:text-lg leading-[130%] text-main-white"
                    href="mailto:myplatform@mail.ru"
                  >
                    myplatform@mail.ru
                  </a>
                  <div className="mt-10 flex gap-5">
                    <a href="#">
                      <img className="rounded-full size-10 xxl:size-[60px]" src="/max.svg" alt="" />
                    </a>
                    <a href="#">
                      <img className="rounded-full size-10 xxl:size-[60px]" src="/footer/tg.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="lg:max-w-[230px] xl:max-w-[260px] xxl:max-w-[320px] order-2 lg:order-4">
                  <div className="text-main-white font-helvetica font-bold text-[19px] s:text-xl xl:text-2xl leading-[130%] lg:max-w-[190px] xl:max-w-[240px] xxl:max-w-full">
                    Начните свой путь к автоматизации бизнеса с нами
                  </div>
                  <Button
                    onClick={open}
                    className="mt-5 h-[60px] lg:h-[50px] xxl:h-[60px]"
                    size="lg"
                    variant="green"
                    parentBg="blue"
                  >
                    Попробовать бесплатно
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[560px] mx-auto px-5 py-10 flex flex-col items-center">
        <img src="/footer/fond.png" alt="" />
        <div className="mt-5 text-main-gray text-center font-helvetica leading-[130%] text-sm xl:text-base font-normal">
          Проект Моя Платформа поддержан фондом содействия развитию малых форм
          предприятий в научно-технической сфере
        </div>
      </div>
    </footer>
  );
};

export default Footer;
