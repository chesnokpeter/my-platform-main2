"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import CheckIcon from "@public/save-section/check.svg";
import Image from "next/image";
import Button from "../ui/Button";
import { useModal } from "@/context/ModalContext";
import { useState } from "react";
import SaveBusinessModal from "../modals/SaveBusinessModal";

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

type ModalVariant = "register" | "training" | null;

const SaveYourBusinessSection = () => {
  const [modalType, setModalType] = useState<ModalVariant>(null);
  const { open } = useModal();
  return (
    <>
      <section id="about" className="pt-10 xl:pt-[50px] pb-10 xl:pb-[50px] scroll-mt-[120px] oveflow-hidden">
        <motion.div
          variants={fadeUpBlock}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.02 }}
          className="max-w-[1200px] xxl:max-w-[1680px] px-5 lg:px-10 xl:px-5 mx-auto"
        >
          <h2 className="text-2xl s:text-[28px] lg:text-[40px] font-bold font-helvetica leading-[130%] uppercase text-main-dark max-w-[240px] s:max-w-[280px] xs:max-w-[624px]">
            Обезопасьте свой бизнес с{" "}
            <span className="text-main-white bg-main-blue pt-[4px] xs:pt-0 pb-[2px] px-[5px]">Моя Платформа</span>
          </h2>
          <div
            className="mt-10 py-6 xs:py-10 px-6 xs:px-10 flex text-2xl leading-[130%] font-helvetica font-bold bg-main-blue rounded-[16px] flex items-center overflow-hidden bg-square"  
          >
            <div className="flex flex-col w-full">
              <h3 className="uppercase max-w-full lg:max-w-[520px] text-main-white text-lg s:text-xl lg:text-2xl font-bold font-helvetica">
                Автоматизация ЕГИС ОТБ (АЦБПДП) через Telegram‑бот
              </h3>
              <ul className="mt-5 s:mt-10 flex flex-col gap-5  lg:max-w-[420px] xl:max-w-[760px]">
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-normal flex gap-5 items-center text-main-white lg:max-w-[360px] xxl:max-w-full">
                  <CheckIcon className="shrink-0 text-main-green" />
                  Регистрация рейса за 1 минуту вместо 40 — экономия времени в
                  40 раз
                </li>
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-normal flex gap-5 items-center text-main-white max-w-[270px] s:max-w-[610px] lg:max-w-[470px] xxl:max-w-[750px]">
                  <CheckIcon className="shrink-0 text-main-green" />
                  Автопроверки по требованиям 16‑ФЗ и приказа № 162 — меньше
                  ошибок и отказов
                </li>
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-normal flex gap-5 items-center text-main-white max-w-[600px] lg:max-w-[390px] xxl:max-w-[740px]">
                  <CheckIcon className="shrink-0 text-main-green" />
                  Интеграция с личным кабинетом ЕГИС ОТБ — статусы и
                  подтверждения в одном месте
                </li>
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-normal flex gap-5 items-center text-main-white max-w-[240px] s:max-w-[600px] lg:max-w-[490px] xxl:max-w-[740px]">
                  <CheckIcon className="shrink-0 text-main-green" />
                  Работает 24/7 — не зависит от отпусков и ночных смен,
                  масштабируется в пики
                </li>
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-normal flex gap-5 items-center text-main-white max-w-[220px] s:max-w-full lg:max-w-[350px] xxl:max-w-[740px]">
                  <CheckIcon className="shrink-0 text-main-green" />
                  Удобно для диспетчеров и водителей: всё в Telegram, без
                  сложных кабинетов
                </li>
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-normal flex gap-5 items-center text-main-white lg:max-w-[480px] xxl:max-w-[770px]">
                  <CheckIcon className="shrink-0 text-main-green" />
                  Прозрачность: уведомления о приёме, журнал событий, история
                  действий — готово для проверок
                </li>
              </ul>
              <Image
                src="/hero/hero.png"
                alt="Hero image"
                width={760}
                height={386}
                className="w-full h-auto block lg:hidden mt-15 xs:mt-10 scale-130 xs:scale-90"
                priority
              />
              <div className="mt-10 w-full">
                <div className="font-helvetica font-bold text-2xl text-main-white">
                  от 349 руб./рейс
                </div>
                <div className="font-helvetica font-light text-xs xxl:text-base text-main-white">
                  Дешевле чашки кофе и зарплаты доп. специалиста
                </div>
              </div>
              <Button
                onClick={open}
                className="mt-5 lg:max-w-[300px] xxl:max-w-[400px]"
                size="lg"
                variant="green"
                parentBg="blue"
              >
                Попробовать бесплатно
              </Button>
            </div>
            <div className="w-full max-w-[760px] hidden lg:block">
              <Image
                src="/hero/hero.png"
                alt="Hero image"
                width={760}
                height={386}
                className="w-full h-auto scale-125 xxl:scale-none"
                priority
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div className="bg-main-dark rounded-[16px] p-6 xs:p-10 flex flex-col h-full">
              <h3 className="uppercase max-w-[250px] s:max-w-[330px] xl:max-w-[520px] text-main-white text-lg s:text-xl lg:text-2xl font-bold font-helvetica">
                Регистрация под ключ в ЕГИС ОТБ
              </h3>
              <ul className="mt-5 s:mt-7 flex flex-col gap-5 lg:max-w-[350px] xl:max-w-[760px]">
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-normal flex gap-5 items-center text-main-white">
                  <CheckIcon className="shrink-0 text-main-green" />
                  Для новых компаний — подключение к системе ЕГИС ОТБ
                </li>
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-normal flex gap-5 items-center text-main-white">
                  <CheckIcon className="shrink-0 text-main-green" />
                  Полное сопровождение: подготовка документов, настройка,
                  тестирование
                </li>
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-normal flex gap-5 items-center text-main-white">
                  <CheckIcon className="shrink-0 text-main-green" />
                  Минимум участия вашей команды — делаем быстро и правильно
                </li>
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-normal flex gap-5 items-center text-main-white">
                  <CheckIcon className="shrink-0 text-main-green" />
                  Снижаем риск отказов на старте и ускоряем выход в работу
                </li>
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-bold flex gap-5 items-center text-main-white">
                  <CheckIcon className="shrink-0 text-main-green" />
                  Удобно для диспетчеров и водителей: всё в Telegram, без
                  сложных кабинетов
                </li>
              </ul>
              <div className="flex-1" />
              <div>
                <Image
                  src="/save-section/1.png"
                  alt="Hero image"
                  width={760}
                  height={380}
                  className="mt-10 w-full h-[168px] s:h-[300px] lg:h-auto"
                  priority
                />
                <Button
                  className="mt-7"
                  size="lg"
                  variant="blue"
                  parentBg="dark"
                  onClick={() => setModalType("register")}
                >
                  Оформить под ключ
                </Button>
              </div>
            </div>
            <div className="bg-main-light-blue rounded-[16px] p-6 xs:p-10 flex flex-col h-full">
              <h3 className="uppercase max-w-[135px] s:max-w-[520px] text-lg s:text-xl lg:text-2xl font-bold font-helvetica text-main-dark">
                Обучение по автоматизации
              </h3>
              <ul className="mt-5 s:mt-7 flex flex-col gap-5 lg:max-w-[350px] xl:max-w-[760px]">
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-normal flex gap-5 items-center text-main-dark">
                  <CheckIcon className="shrink-0 text-main-blue" />
                  Для in‑house команд — процессы остаются у вас, без передачи
                  данных третьим лицам
                </li>
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-normal flex gap-5 items-center text-main-dark">
                  <CheckIcon className="shrink-0 text-main-blue" />
                  Практика: пошаговые инструкции, чек‑листы, шаблоны, типовые
                  кейсы
                </li>
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-normal flex gap-5 items-center text-main-dark">
                  <CheckIcon className="shrink-0 text-main-blue" />
                  Живые Q&A и поддержка 24/7 — не остаётесь один на один с
                  вопросами
                </li>
                <li className="text-sm s:text-base xxl:text-xl leading-[130%] font-helvetica font-bold flex gap-5 items-center text-main-dark">
                  <CheckIcon className="shrink-0 text-main-blue" />
                  Обучаем диспетчеров/логистов быстро: сокращаем кривую ошибок
                </li>
              </ul>
              <div className="flex-1" />
              <div>
                <Image
                  src="/save-section/2.png"
                  alt="Hero image"
                  width={760}
                  height={400}
                  className="mt-10 w-full h-[168px] s:h-[300px] lg:h-auto"
                  priority
                />
                <Button
                  className="mt-7"
                  size="lg"
                  variant="blue"
                  parentBg="light"
                  onClick={() => setModalType("training")}
                >
                  <span className="hidden s:inline">Получить программу обучения</span>
                  <span className="inline s:hidden">Получить обучение</span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <SaveBusinessModal
        isOpen={!!modalType}
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </>
  );
};

export default SaveYourBusinessSection;
