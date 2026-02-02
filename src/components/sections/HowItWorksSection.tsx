"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import { useModal } from "@/context/ModalContext";

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

const HowItWorksSection = () => {
  const { open } = useModal();
  return (
    <section
      id="how"
      className="pt-10 xl:pt-[50px] pb-10 xl:pb-[50px] scroll-mt-[120px]"
    >
      <motion.div
        variants={fadeUpBlock}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.02 }}
        className="max-w-[1200px] xxl:max-w-[1680px] px-5 mx-auto"
      >
        <h2 className="text-2xl s:text-[28px] lg:text-[40px] font-bold font-helvetica leading-[130%] uppercase text-main-dark">
          Как это работает
        </h2>
        <div className="mt-5 xs:mt-10 flex flex-col lg:flex-row gap-10 justify-between lg:items-end">
          <div className="flex flex-col gap-10 w-full">
            <div className="flex items-center gap-5 relative">
              <div className="relative">
                <div className="size-10 shrink-0 rounded-full flex justify-center items-center bg-main-light-blue font-helvetica font-bold text-lg leading-[130%] relative z-50">
                  01
                </div>
                <span
                  className="absolute top-10 left-1/2 -translate-x-1/2 w-[1px]"
                  style={{
                    height: "64px",
                    background:
                      "repeating-linear-gradient(to bottom, #7B8594 0 6px, transparent 6px 12px)",
                  }}
                ></span>
              </div>

              <div className="font-helvetica text-sm s:text-base xxl:text-xl leading-[130%] font-normal text-main-dark">
                Оставляете заявку на консультацию
              </div>
            </div>

            <div className="flex items-center gap-5 relative">
              <div className="relative">
                <div className="size-10 shrink-0 rounded-full flex justify-center items-center bg-main-light-blue font-helvetica font-bold text-lg leading-[130%] relative z-50">
                  02
                </div>

                <span
                  className="absolute top-10 left-1/2 -translate-x-1/2 w-[1px]"
                  style={{
                    height: "64px",
                    background:
                      "repeating-linear-gradient(to bottom, #7B8594 0 6px, transparent 6px 12px)",
                  }}
                ></span>
              </div>

              <div className="font-helvetica text-sm s:text-base xxl:text-xl leading-[130%] font-normal text-main-dark">
                Получаете бесплатную поездку
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="size-10 shrink-0 rounded-full flex justify-center items-center bg-main-light-blue font-helvetica font-bold text-lg leading-[130%] relative z-50">
                03
              </div>

              <div className="font-helvetica text-sm s:text-base xxl:text-xl leading-[130%] font-normal text-main-dark">
                Мы настраиваем интеграцию чат-бота и обучаем
              </div>
            </div>

            <Button
              onClick={open}
              className="lg:max-w-[300px] xxl:max-w-[400px]"
              size="lg"
              variant="green"
              parentBg="light"
            >
              Попробовать бесплатно
            </Button>
          </div>
          <div className="w-full lg:max-w-[560px] xxl:max-w-[800px]">
            <img
              src="/howitworks-section/1.png"
              alt="Hero image"
              width={460}
              height={300}
              className="w-full h-auto hidden xxl:block"
            />
            <img
              src="/howitworks-section/xxl-1.png"
              alt="Hero image"
              width={560}
              height={300}
              className="w-full h-[140px] s:h-[290px] block xxl:hidden"
            />
          </div>
        </div>
        <div className="mt-5 xs:mt-10 lg:mt-20 flex flex flex-col-reverse lg:flex-row gap-10 lg:items-end">
          <div className="w-full max-w-full max-w-[472px] xl:max-w-[560px] xxl:max-w-[800px]">
            <img
              src="/howitworks-section/2.png"
              alt="Hero image"
              width={460}
              height={300}
              className="w-full h-auto hidden xxl:block"
            />
            <img
              src="/howitworks-section/xxl-2.png"
              alt="Hero image"
              width={460}
              height={300}
              className="w-full h-[140px] s:h-[270px] block xxl:hidden"
            />
          </div>
          <div className="flex flex-col gap-10 w-full max-w-full lg:max-w-[560px] xxl:max-w-full">
            <div className="uppercase font-helvetica font-bold text-xl xs:text-2xl leading-[130%] text-main-dark">
              А дальше
            </div>
            <div className="flex items-center gap-5 relative">
              <div className="relative">
                <div className="size-10 shrink-0 rounded-full flex justify-center items-center bg-main-light-blue font-helvetica font-bold text-lg leading-[130%] relative z-50">
                  04
                </div>
                <span
                  className="absolute top-10 left-1/2 -translate-x-1/2 w-[1px]"
                  style={{
                    height: "64px",
                    background:
                      "repeating-linear-gradient(to bottom, #7B8594 0 6px, transparent 6px 12px)",
                  }}
                ></span>
              </div>

              <div className="font-helvetica text-sm s:text-base xxl:text-xl leading-[130%] font-normal text-main-dark">
                Создаете рейс
              </div>
            </div>
            <div className="flex items-center gap-5 relative">
              <div className="relative">
                <div className="size-10 shrink-0 rounded-full flex justify-center items-center bg-main-light-blue font-helvetica font-bold text-lg leading-[130%] relative z-50">
                  05
                </div>

                <span
                  className="absolute top-10 left-1/2 -translate-x-1/2 w-[1px]"
                  style={{
                    height: "64px",
                    background:
                      "repeating-linear-gradient(to bottom, #7B8594 0 6px, transparent 6px 12px)",
                  }}
                ></span>
              </div>

              <div className="font-helvetica text-sm s:text-base xxl:text-xl leading-[130%] font-normal text-main-dark">
                Добавляете экипаж и список пассажиров
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="size-10 shrink-0 rounded-full flex justify-center items-center bg-main-light-blue font-helvetica font-bold text-lg leading-[130%] relative z-50">
                06
              </div>

              <div className="font-helvetica text-sm s:text-base xxl:text-xl leading-[130%] font-bold max-w-[400px] text-main-blue">
                Тратите на все 1 минуту в день <br /> и никаких штрафов и денежных
                потерь
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorksSection;
