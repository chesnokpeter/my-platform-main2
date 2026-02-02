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

const TryOurServices = () => {
  return (
    <section className="py-[40px] xl:py-[50px]">
      <motion.div
        variants={fadeUpBlock}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.02 }}
        className="max-w-[1200px] xxl:max-w-[1680px] px-5 mx-auto"
      >
        <div className="flex justify-between flex-col lg:flex-row gap-10 bg-main-light-blue p-6 xs:p-10 rounded-[16px]">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl s:text-[28px] lg:text-[40px] font-bold font-helvetica leading-[130%] uppercase text-main-dark max-w-[230px] s:max-w-[624px]">
              Попробуйте наш сервис
              {" "}
              <span className="text-main-white bg-main-blue pb-[1px] px-[1px]">БЕСПЛАТНО</span>
            </h2>

            <p className="mt-5 text-sm s:text-base xxl:text-xl font-helvetica font-normal leading-[130%] max-w-[600px]">
              Оставьте контакты или свяжитесь любым удобным способом, чтобы
              получить консультацию и бесплатную поездку
            </p>

            <div className="mt-10 lg:mt-25 flex gap-5 items-center">
              <a className="size-10 xxl:size-[60px]" href="#">
                <img className="rounded-full" src="/max.svg" alt="" />
              </a>
              <a className="size-10 xxl:size-[60px]" href="#">
                <img className="rounded-full" src="/header/true.svg" alt="" />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <GlobalForm light option submitText="Получить консультацию">
              {({ loading }) => (
                <Button
                  className="mt-10 lg:mt-0"
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

export default TryOurServices;
