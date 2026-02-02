"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import DocsIcon from "@public/features/doc.svg";
import SecureIcon from "@public/features/shield.svg";
import ScalesIcon from "@public/features/scales.svg";
import TimerIcon from "@public/features/timer.svg";
import RobotIcon from "@public/features/robot.svg";
import ReportIcon from "@public/features/report.svg";
import FileIcon from "@public/features/file.svg";
import CrestIcon from "@public/features/crest.svg";
import HistoryIcon from "@public/features/history.svg";
import ProfilesIcon from "@public/features/profiles.svg";
import WalletIcon from "@public/features/wallet.svg";

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

const FeaturesSection = () => {
  return (
    <section className="py-10 xxl:py-[50px] bg-square-light">
      <motion.div
        variants={fadeUpBlock}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.02 }}
        className="max-w-[1200px] xxl:max-w-[1680px] px-5 lg:px-10 xl:px-5 mx-auto"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="lg:max-w-[660px] xxl:max-w-[740px]">
            <h2 className="text-2xl s:text-[28px] lg:text-[40px] font-bold font-helvetica leading-[130%] uppercase text-main-dark">
              Быстрая регистрация, безопасность данных и полное соответствие{" "}
              <span className="text-main-white bg-main-blue pt-[4px] xs:pt-0 pb-[2px] px-[1px]">
                законам
              </span>
            </h2>
            <p className="mt-5 font-helvetica font-light text-sm s:text-base xxl:text-xl text-main-dark">
              Проект поддержан фондом содействия инновациям
            </p>
          </div>

          <div className="flex gap-6 items-center">
            <div className="size-[75px] bg-main-light-blue rounded-[4px] flex items-center justify-center">
              <DocsIcon />
            </div>
            <div className="size-[75px] bg-main-blue/20 rounded-[4px] flex items-center justify-center">
              <SecureIcon />
            </div>
            <div className="size-[75px] bg-main-green/20 rounded-[4px] flex items-center justify-center">
              <ScalesIcon />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-[19px] xl:gap-10">
          <div className="p-6 rounded-[8px] flex flex-col gap-4 bg-main-light-blue transition-all duration-300 ease-in-out">
            <TimerIcon className="w-10 h-10 text-main-blue" />
            <p className="font-helvetica font-bold leading-5 s:leading-6 text-sm s:text-base xxl:text-xl text-main-dark whitespace-pre-line max-w-[92px] s:max-w-full xl:max-w-[170px] xxl:max-w-[220px] ">
              40 минут → 1 минута на рейс
            </p>
          </div>

          <div className="p-6 rounded-[8px] flex flex-col gap-4 bg-main-blue transition-all duration-300 ease-in-out">
            <WalletIcon className="w-10 h-10 text-main-white" />
            <p className="font-helvetica font-bold leading-5 s:leading-6 text-sm s:text-base xxl:text-xl text-main-white whitespace-pre-line">
              Цена от 349 руб./рейс
            </p>
          </div>

          <div className="p-6 rounded-[8px] flex flex-col gap-4 bg-main-light-blue transition-all duration-300 ease-in-out">
            <HistoryIcon className="w-10 h-10 text-main-blue" />
            <p className="font-helvetica font-bold leading-5 s:leading-6 text-sm s:text-base xxl:text-xl text-main-dark whitespace-pre-line">
              История поездок
            </p>
          </div>
          <div className="p-6 rounded-[8px] flex flex-col gap-4 bg-main-light-blue transition-all duration-300 ease-in-out">
            <ReportIcon className="w-10 h-10 text-main-blue" />
            <p className="font-helvetica font-bold leading-5 s:leading-6 text-sm s:text-base xxl:text-xl text-main-dark whitespace-pre-line">
              Ежемесячный отчет
            </p>
          </div>
          <div className="p-6 rounded-[8px] flex flex-col gap-4 bg-main-light-blue transition-all duration-300 ease-in-out">
            <CrestIcon className="w-10 h-10 text-main-blue" />
            <p className="font-helvetica font-bold leading-5 s:leading-6 text-sm s:text-base xxl:text-xl text-main-dark whitespace-pre-line max-w-[170px] xxl:max-w-[220px] ">
              Соответствие 16-ФЗ и приказу №162
            </p>
          </div>

          <div className="p-6 rounded-[8px] flex flex-col gap-4 bg-main-light-blue transition-all duration-300 ease-in-out">
            <ProfilesIcon className="w-10 h-10 text-main-blue" />
            <p className="font-helvetica font-bold leading-5 s:leading-6 text-sm s:text-base xxl:text-xl text-main-dark whitespace-pre-line lg:max-w-[180px] xxl:max-w-[300px]">
              Интеграция нескольких профилей в систему
            </p>
          </div>

          <div className="p-6 rounded-[8px] flex flex-col gap-4 bg-main-light-blue transition-all duration-300 ease-in-out">
            <RobotIcon className="w-10 h-10 text-main-blue" />
            <p className="font-helvetica font-bold leading-5 s:leading-6 text-sm s:text-base xxl:text-xl text-main-dark whitespace-pre-line">
              24/7 без человеческого фактора
            </p>
          </div>

          <div className="p-6 rounded-[8px] flex flex-col gap-4 bg-main-light-blue transition-all duration-300 ease-in-out">
            <FileIcon className="w-10 h-10 text-main-blue" />
            <p className="font-helvetica font-bold leading-5 s:leading-6 text-sm s:text-base xxl:text-xl text-main-dark max-w-[150px] s:max-w-[225px] lg:max-w-[250px] xxl:max-w-[300px] word-">
              Обработка любых форматов PDF/Word/<wbr className="block xs:hidden"/>EXCEL
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
