"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
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

const GetInTouch = () => {
  return (
    <section className="py-10 xl:py-[50px] bg-square-light">
      <motion.div
        variants={fadeUpBlock}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.02 }}
        className="max-w-[1200px] xxl:max-w-[1680px] px-5 lg:px-10 xl:px-5 mx-auto"
      >
        <span className="font-helvetica font-light text-sm s:text-base xxl:text-xl">
          Поддержка 24/7
        </span>
        <div className="mt-5 flex flex-col lg:flex-row justify-between gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-2xl s:text-[28px] lg:text-[40px] font-bold font-helvetica leading-[130%] uppercase text-main-dark lg:max-w-[310px] xl:max-w-[624px]">
              Мы всегда{" "}
              <span className="text-main-white bg-main-blue pt-[4px] xs:pt-0 pb-[2px] px-[1px]">
                на связи
              </span>
            </h2>

            <p className="mt-5 text-sm s:text-base xxl:text-xl font-helvetica font-normal leading-[130%] lg:max-w-[440px] xl:max-w-full">
              Если у вас есть вопросы по сервису, нужна индивидуальная
              бесплатная консультация — оставьте свои контакты или свяжитесь с
              нами любым удобным способом
            </p>

            <div className="mt-[14px] xl:mt-10 flex gap-5 items-center">
              <a className="size-10 xxl:size-[60px] rounded-full" href="#">
                <img className="rounded-full" src="/max.svg" alt="" />
              </a>
              <a className="size-10 xxl:size-[60px] rounded-full" href="#">
                <img className="rounded-full" src="/header/true.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <GlobalForm submitText="Получить консультацию" light>
              {({ loading }) => (
                <Button
                  size="lg"
                  variant="green"
                  parentBg="light"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Отправка..." : "Получить консультацию"}
                </Button>
              )}
            </GlobalForm>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GetInTouch;
