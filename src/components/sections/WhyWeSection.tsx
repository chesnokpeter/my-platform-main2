"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import DescIcon from "@public/whywe-section/desc.svg";
import ScreenIcon from "@public/whywe-section/screen.svg";
import FlameIcon from "@public/whywe-section/flame.svg";

const fadeUpBlock: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut" as const,
    },
  },
};

const WhyWeSection = () => {
  return (
    <section className="py-10 xl:py-[50px]">
      <motion.div
        variants={fadeUpBlock}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.02 }}
        className="bg-main-light-blue rounded-[16px] py-6 xs:py-10 xl:py-20 mx-5"
      >
        <div className="max-w-[1200px] xxl:max-w-[1680px] px-5 mx-auto">
          <h2 className="mb-5 text-2xl s:text-[28px] lg:text-[40px] font-bold font-helvetica leading-[130%] uppercase text-main-dark max-w-[780px]">
            <span className="text-main-white bg-main-blue pt-[4px] xs:pt-0 px-2">Почему</span>{" "}
            Моя Платформа
          </h2>
          <span className="text-sm s:text-base xxl:text-xl font-helvetica font-light">
            У вас всегда есть выбор
          </span>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
            <div className="p-6 xs:p-10 rounded-[8px] bg-main-white">
              <div className="flex  flex-col s:flex-row items-start s:items-center gap-5">
                <DescIcon className="shrink-0" />
                <h3 className="text-lg xs:text-xl font-bold font-helvetica text-main-dark">
                  Альтернативы
                </h3>
              </div>
              <ul className="mt-5 flex flex-col gap-[5px] list-disc pl-5">
                <li className="text-sm xs:text-base lg:text-sm xxl:text-base font-helvetica font-normal leading-[130%] text-main-dark">
                  Самостоятельная регистрация
                </li>
                <li className="text-sm xs:text-base lg:text-sm xxl:text-base font-helvetica font-normal leading-[130%] text-main-dark">
                  Делегирование бухгалтеру
                </li>
                <li className="text-sm xs:text-base lg:text-sm xxl:text-base font-helvetica font-normal leading-[130%] text-main-dark">
                  Найм штатного логиста
                </li>
              </ul>
            </div>

            <div className="p-6 xs:p-10 rounded-[8px] bg-main-dark">
              <div className="flex  flex-col s:flex-row items-start s:items-center gap-5">
                <ScreenIcon className="shrink-0" />
                <h3 className="text-lg xs:text-xl font-bold font-helvetica text-main-white">
                  Другие сервисы
                </h3>
              </div>
              <ul className="mt-5 flex flex-col gap-[5px] list-disc pl-5">
                <li className="text-sm xs:text-base lg:text-sm xxl:text-base font-helvetica font-normal leading-[130%] text-main-white">
                  Работает только через 1С
                </li>
                <li className="text-sm xs:text-base lg:text-sm xxl:text-base font-helvetica font-normal leading-[130%] text-main-white">
                  Требует обучения
                </li>
                <li className="text-sm xs:text-base lg:text-sm xxl:text-base font-helvetica font-normal leading-[130%] text-main-white">
                  Менее гибкий интерфейс
                </li>
                <li className="text-sm xs:text-base lg:text-sm xxl:text-base font-helvetica font-normal leading-[130%] text-main-white">
                  Неудобен на мобильных
                </li>
              </ul>
            </div>

            <div
              className="p-6 xs:p-10 rounded-[8px] bg-main-blue w-full md:col-span-3 lg:col-auto md:row-start-2 lg:row-auto flex justify-between relative overflow-hidden"
              style={{
                background:
                  "url('/whywe-section/grid.png') center / cover no-repeat, #378BEE",
              }}
            >
              <div>
                <div className="flex flex-col s:flex-row items-start s:items-center gap-5">
                  <FlameIcon />
                  <h3 className="text-lg xs:text-xl font-bold font-helvetica text-main-white">
                    Моя Платформа
                  </h3>
                </div>
                <ul className="mt-5 flex flex-col gap-[5px] list-disc pl-5">
                  <li className="text-sm xs:text-base lg:text-sm xxl:text-base font-helvetica font-normal leading-[130%] text-main-white">
                    Удобный Telegram-бот
                  </li>
                  <li className="text-sm xs:text-base lg:text-sm xxl:text-base font-helvetica font-normal leading-[130%] text-main-white">
                    Работает на любом устройстве
                  </li>
                  <li className="text-sm xs:text-base lg:text-sm xxl:text-base font-helvetica font-normal leading-[130%] text-main-white">
                    Интуитивный интерфейс
                  </li>
                  <li className="text-sm xs:text-base lg:text-sm xxl:text-base font-helvetica font-normal leading-[130%] text-main-white">
                    Дешевле и технологичнее
                  </li>
                  <li className="text-sm xs:text-base lg:text-sm xxl:text-base font-helvetica font-normal leading-[130%] text-main-white">
                    Поддержка 24/7
                  </li>
                </ul>
              </div>
              <div className="hidden md:block lg:hidden">
                <img
                  className="absolute right-10 bottom-5 max-h-[180px] max-w-[200px] scale-125"
                  src="/whywe-section/phone.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyWeSection;
