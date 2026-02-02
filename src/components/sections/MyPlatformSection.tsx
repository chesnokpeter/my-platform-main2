"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import LogoIcon from "@public/header/logo.svg";

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

const MyPlatformSection = () => {
  return (
    <section className="py-[40px] xl:py-[50px]">
      <motion.div
        variants={fadeUpBlock}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.02 }}
        className="max-w-[1200px] xxl:max-w-[1680px] px-5 lg:px-10 xl:px-5 mx-auto"
      >
        <h2 className="text-2xl s:text-[28px] lg:text-[40px] font-bold font-helvetica leading-[130%] uppercase text-main-dark flex items-center gap-[10px]">
          <div className="bg-main-blue size-10 rounded-[12px] flex items-center justify-center shrink-0">
            <LogoIcon className="scale-70" />
          </div>
          Моя платформа
        </h2>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 xxl:grid-cols-6 gap-5 gap-[10px] xl:gap-10">
          <div className="p-6 mds:p-10 rounded-[8px] bg-main-light-blue flex flex-col">
            <div className="font-helvetica font-bold text-sm xs:text-base xs:text-xl text-main-dark leading-[130%]">
              C 2018 года
            </div>
            <div className="mt-1 font-helvetica font-normal text-sm xs:text-base text-main-dark leading-[130%] wrap-break-word">
              на рынке
            </div>
          </div>

          <div className="p-6 mds:p-10 rounded-[8px] bg-main-light-blue flex flex-col">
            <div className="font-helvetica font-bold text-sm xs:text-base xs:text-xl text-main-dark leading-[130%] max-w-full xxl:max-w-[90px]">
              Входим в топ-10
            </div>
            <div className="mt-1 font-helvetica font-normal text-sm xs:text-base text-main-dark leading-[130%] wrap-break-word lg:max-w-[180px] xl:max-w-[150px]">
              стартапов страховой России
            </div>
          </div>

          <div className="p-6 mds:p-10 rounded-[8px] bg-main-light-blue flex flex-col">
            <div className="font-helvetica font-bold text-sm xs:text-base xs:text-xl text-main-dark leading-[130%]">
              Роспатент
            </div>
            <div className="mt-1 font-helvetica font-normal text-sm xs:text-base text-main-dark leading-[130%] wrap-break-word whitespace-pre-line">
              продукт запатентован
            </div>
          </div>

          <div className="p-6 mds:p-10 rounded-[8px] bg-main-light-blue flex flex-col">
            <div className="font-helvetica font-bold text-sm xs:text-base xs:text-xl text-main-dark leading-[130%]">
              Фонд содействия инновациям
            </div>
            <div className="mt-1 font-helvetica font-normal text-sm xs:text-base text-main-dark leading-[130%] wrap-break-word">
              проект поддержан
            </div>
          </div>

          <div className="p-6 mds:p-10 rounded-[8px] bg-main-light-blue flex flex-col">
            <div className="font-helvetica font-bold text-sm xs:text-base xs:text-xl text-main-dark leading-[130%]">
              &gt; 5000
            </div>
            <div className="mt-1 font-helvetica font-normal text-sm xs:text-base text-main-dark leading-[130%] wrap-break-word whitespace-pre-line">
              успешно зарегистрированных рейсов
            </div>
          </div>

          <div className="p-6 mds:p-10 rounded-[8px] bg-main-light-blue flex flex-col">
            <div className="font-helvetica font-bold text-sm xs:text-base xs:text-xl text-main-dark leading-[130%]">
              С вами 24/7
            </div>
            <div className="mt-1 font-helvetica font-normal text-sm xs:text-base text-main-dark leading-[130%] wrap-break-word whitespace-pre-line lg:max-w-[210px] xl:max-w-full xxl:max-w-[140px]">
              на связи опытные менеджеры, разработчики и логисты
            </div>
          </div>
        </div>

        <div className="relative mt-10 mds:mt-20 rounded-[16px] overflow-hidden">
          <img
            src="/myplatform-section/baner.png"
            alt=""
            className="w-full min-h-50 object-cover h-auto block"
          />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full h-full bg-gradient-to-b from-[#293A4F]/0 via-[#293A4F]/70 to-[#293A4F] flex items-end">
              <div className="pl-5 xs:pl-10 lg:pl-15 pb-5 xs:pb-10 lg:pb-15 font-bold font-helvetica text-xl lg:text-[40px] text-main-white leading-6 lg:leading-12 uppercase max-w-[390px] lg:max-w-[750px]">
                Наше дело - ваш бизнес, наша забота - его успех
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MyPlatformSection;
