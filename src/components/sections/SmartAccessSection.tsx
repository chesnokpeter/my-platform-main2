"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import CheckIcon from "@public/save-section/check.svg";
import GlobalForm from "../shared/GlobalForm";
import Button from "../ui/Button";

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

const SmartAccessSection = () => {
  return (
    <section className="py-10 xl:py-[50px]">
      <motion.div
        variants={fadeUpBlock}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.02 }}
        className="bg-main-blue rounded-[16px] py-10 xl:py-20 mx-5 bg-square"
      >
        <div className="max-w-[1200px] xxl:max-w-[1680px] px-5 mx-auto">
          <h2 className="mt-[10px] text-2xl s:text-[28px] lg:text-[40px] font-bold font-helvetica leading-[130%] uppercase text-main-white max-w-[210px] s:max-w-[450px] lg:max-w-[600px]">
            <span className="text-main-blue max-w-[152px] s:max-w-full bg-white block s:inline pt-[4px] xs:pt-0 pb-[2px] px-[2px]">Выгодные условия</span>{" "}
            подключения к сервису
          </h2>
          <div className="mt-5 s:mt-10 flex flex-col lg:flex-row gap-10 justify-between">
            <div className="w-full lg:max-w-[540px] xxl:max-w-[600px]">
              <ul className="flex flex-col gap-5 max-w-[760px]">
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-normal flex gap-5 items-center text-main-white">
                  <CheckIcon className="shrink-0 text-main-green" />
                  Вы платите только за результат, после успешной передачи данных
                  в ЕГИС ОТБ
                </li>
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-normal flex gap-5 items-center text-main-white">
                  <CheckIcon className="shrink-0 text-main-green" />
                  Любая форма оплаты: СБП, карта, счёт
                </li>
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-normal flex gap-5 items-center text-main-white">
                  <CheckIcon className="shrink-0 text-main-green" />
                  Отчёты в конце месяца
                </li>
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-normal flex gap-5 items-center text-main-white">
                  <CheckIcon className="shrink-0 text-main-green" />
                  Индивидуальный подход: работаем с любыми форматами файлов
                  (джепег, эксель, док, пдф)
                </li>
              </ul>
              <p className="mt-10 font-helvetica font-bold text-lg xxl:text-xl text-main-white max-w-[450px] xxl:max-w-[500px]">
                Заполните форму, чтобы получить консультацию и бесплатную
                поездку
              </p>
            </div>
            <div className="w-full lg:max-w-[560px] xxl:max-w-[800px]">
              <GlobalForm option submitText="Получить консультацию">
                {({ loading }) => (
                  <Button
                    size="lg"
                    className="mt-10 lg:mt-0"
                    variant="green"
                    parentBg="dark"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Отправка..." : "Получить консультацию"}
                  </Button>
                )}
              </GlobalForm>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SmartAccessSection;
