"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import TimerIcon from "@public/unified-section/timer.svg";
import ProcIcon from "@public/unified-section/proc.svg";
import AiIcon from "@public/unified-section/ai.svg";
import HandIcon from "@public/unified-section/hand.svg";
import TgIcon from "@public/unified-section/tg.svg";
import SecureIcon from "@public/unified-section/secure.svg";
import BusIcon from "@public/unified-section/bus.svg";
import MolIcon from "@public/unified-section/mol.svg";
import FlexIcon from "@public/unified-section/flex.svg";
import { useModal } from "@/context/ModalContext";

const fadeUpBlock: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function UnifiedPlatformSection() {
  const { open } = useModal();
  return (
    <section
      id="features"
      className="pt-10 xl:pt-[50px] pb-10 xl:pb-[50px] scroll-mt-[120px]"
    >
      <motion.div
        variants={fadeUpBlock}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.02 }}
        className="max-w-[1200px] xxl:max-w-[1680px] px-5 lg:px-10 xl:px-5 mx-auto"
      >
        <span className="text-sm s:text-sm xxl:text-base xxl:text-xl font-helvetica font-light">
          Ведение ЕГИС ОТБ в Telegram-боте
        </span>

        <h2 className="mt-5 text-2xl s:text-[28px] lg:text-[40px] font-bold uppercase text-main-dark max-w-[245px] s:max-w-[780px]">
          Моя платформа — это десятки возможностей через{" "}
          <span className="text-main-white bg-main-blue px-[2px] pb-[2px]">
            1 решение
          </span>
        </h2>

        <div className="mt-10 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
          <div className="p-6 md:p-10 rounded-[8px] bg-main-light-blue flex flex-col gap-5">
            <div className="flex gap-5 items-center lg:items-start flex-row lg:flex-col">
              <TimerIcon className="text-main-blue shrink-0" />
              <h3 className="font-bold text-lg s:text-xl leading-6 font-helvetica text-main-dark max-w-[295px]">
                Экономия времени
              </h3>
            </div>
            <ul className="list-disc pl-5 flex flex-col gap-[5px] font-helvetica font-normal text-sm s:text-base lg:text-sm xxl:text-base leading-[130%]">
              <li className="max-w-[250px] s:max-w-[208px] lg:max-w-[250px] xxl:max-w-[280px]">
                Загрузка рейса за 1 минуту вместо 40 — экономия в 40 раз
              </li>
              <li className="max-w-[250px] lg:max-w-full xxl:max-w-[320px]">
                Полностью автоматизированный процесс регистрации и проверок
              </li>
              <li>Больше времени на бизнес, избавление от рутины навсегда</li>
            </ul>
          </div>

          <div className="p-6 md:p-10 rounded-[8px] bg-main-light-blue flex flex-col gap-5">
            <div className="flex gap-5 items-center lg:items-start flex-row lg:flex-col">
              <ProcIcon className="text-main-blue shrink-0" />
              <h3 className="font-bold text-lg s:text-xl leading-6 font-helvetica text-main-dark max-w-[220px] lg:max-w-[295px]">
                Прозрачность процессов
              </h3>
            </div>
            <ul className="list-disc pl-5 flex flex-col gap-[5px] font-helvetica font-normal text-sm s:text-base lg:text-sm xxl:text-base leading-[130%]">
              <li className="max-w-[235] lg:max-w-[200px] xxl:max-w-full">
                Все этапы, статусы и оплата — прямо в чат‑боте Telegram
              </li>
              <li>
                Уведомления о приёме данных, журнал действий, история и
                подтверждения
              </li>
              <li className="lg:max-w-[190px] xl:max-w-[370px]">
                Готовность к проверкам: всё в одном месте, без Excel и
                скриншотов
              </li>
            </ul>
          </div>

          <div className="p-6 md:p-10 rounded-[8px] bg-main-light-blue flex flex-col gap-5">
            <div className="flex gap-5 items-center lg:items-start flex-row lg:flex-col">
              <AiIcon className="text-main-blue shrink-0" />
              <h3 className="font-bold text-lg s:text-xl leading-6 font-helvetica text-main-dark max-w-[295px]">
                Искусственный интеллект
              </h3>
            </div>
            <ul className="list-disc pl-5 flex flex-col gap-[5px] font-helvetica font-normal text-sm s:text-base lg:text-sm xxl:text-base leading-[130%]">
              <li className="max-w-[250px] lg:max-w-full">
                Обрабатываем данные любого формата (фото, PDF, Excel, текст)
              </li>
              <li className="max-w-[220px] lg:max-w-[240px] xxl:max-w-[280px]">
                Автоматически исправляем ошибки и пропуски до отправки
              </li>
              <li className="s:max-w-[210px] lg:max-w-[190px] xl:max-w-[330px]">
                Поддерживаем законность передачи ПДП по требованиям 16‑ФЗ и
                приказа № 162
              </li>
            </ul>
          </div>

          <div className="p-6 md:p-10 rounded-[8px] bg-main-light-blue flex flex-col gap-5">
            <div className="flex gap-5 items-center lg:items-start flex-row lg:flex-col">
              <MolIcon className="text-main-blue shrink-0" />
              <h3 className="font-bold text-lg s:text-xl leading-6 font-helvetica text-main-dark max-w-[190px] s:max-w-[215px]">
                Исключаем штрафы и риски лицензии
              </h3>
            </div>
            <ul className="list-disc pl-5 flex flex-col gap-[5px] font-helvetica font-normal text-sm s:text-base lg:text-sm xxl:text-base leading-[130%]">
              <li className="max-w-[] xxl:max-w-[350px]">
                Автопроверки соответствия, предотвращение незарегистрированных
                рейсов
              </li>
              <li className="max-w-[240px] xxl:max-w-[280px]">
                Снижение отказов в приёме данных за счёт валидаций и
                подтверждений
              </li>
              <li className="max-w-[250px] lg:max-w-full">
                С 2018 года — ни одного штрафа среди клиентов сервиса
              </li>
            </ul>
          </div>

          <div className="p-6 md:p-10 rounded-[8px] bg-main-light-blue flex flex-col gap-5">
            <div className="flex gap-5 items-center lg:items-start flex-row lg:flex-col">
              <TgIcon className="text-main-blue shrink-0" />
              <h3 className="font-bold text-lg s:text-xl leading-6 font-helvetica text-main-dark max-w-[190px] s:max-w-[215px]">
                Удобный интерфейс в Telegram
              </h3>
            </div>
            <ul className="list-disc pl-5 flex flex-col gap-[5px] font-helvetica font-normal text-sm s:text-base lg:text-sm xxl:text-base leading-[130%]">
              <li className="lg:max-w-[150px] xl:max-w-[210px] xxl:max-w-full">
                Работает там, где вы уже есть: у водителей, диспетчеров и
                руководителей
              </li>
              <li className="lg:max-w-[190px] xl:max-w-[410px]">
                Без сложных кабинетов и лишних паролей. Запуск за 15 минут
              </li>
              <li className="lg:max-w-[190px] xl:max-w-[390px]">
                Доступ с телефона и ПК, 24/7, устойчиво в ночные смены и в сезон
              </li>
            </ul>
          </div>

          <div className="p-6 md:p-10 rounded-[8px] bg-main-light-blue flex flex-col gap-5">
            <div className="flex gap-5 items-center lg:items-start flex-row lg:flex-col">
              <SecureIcon className="text-main-blue shrink-0" />
              <h3 className="font-bold text-lg s:text-xl leading-6 font-helvetica text-main-dark max-w-[295px]">
                Безопасность данных
              </h3>
            </div>
            <ul className="list-disc pl-5 flex flex-col gap-[5px] font-helvetica font-normal text-sm s:text-base lg:text-sm xxl:text-base leading-[130%]">
              <li className="max-w-[240px] s:max-w-[190px] xl:max-w-[240px] xxl:max-w-[280px]">
                Соответствие 152‑ФЗ, уведомление в Роскомнадзор
              </li>
              <li>Защита Kaspersky Small Office Security</li>
              <li className="xxl:max-w-[350px]">
                Патентованная технология (Роспатент) и централизованное хранение
                подтверждений
              </li>
            </ul>
          </div>

          <div className="p-6 md:p-10 rounded-[8px] bg-main-light-blue flex flex-col gap-5">
            <div className="flex gap-5 items-center lg:items-start flex-row lg:flex-col">
              <HandIcon className="text-main-blue shrink-0" />
              <h3 className="font-bold text-lg s:text-xl leading-6 font-helvetica text-main-dark max-w-[120px] s:max-w-[295px]">
                Интеграция и поддержка
              </h3>
            </div>
            <ul className="list-disc pl-5 flex flex-col gap-[5px] font-helvetica font-normal text-sm s:text-base lg:text-sm xxl:text-base leading-[130%]">
              <li className="max-w-[220px] s:max-w-full xxl:max-w-[345px]">
                Интеграция с личным кабинетом ЕГИС ОТБ: статусы и подтверждения
                синхронизируются
              </li>
              <li className="max-w-[240px] xxl:max-w-[270px]">
                Поддержка 24/7, живые ответы, SLA на время реакции
              </li>
              <li className="max-w-[180px] lg:max-w-[250px] xxl:max-w-[290px]">
                Масштабирование на сеть филиалов и подрядчиков, роли и права
                доступа
              </li>
            </ul>
          </div>

          <div className="p-6 md:p-10 rounded-[8px] bg-main-blue text-white flex flex-col gap-5 col- xs:col-span-2 order-last lg:col-span-1 lg:order-none">
            <div className="flex gap-5 items-center lg:items-start flex-row lg:flex-col">
              <BusIcon className="shrink-0" />
              <h3 className="font-bold text-lg s:text-xl leading-6 font-helvetica max-w-[295px]">
                Бесплатная пробная поездка
              </h3>
            </div>
            <ul className="list-disc pl-5 flex flex-col gap-[5px] font-helvetica font-normal text-sm s:text-base lg:text-sm xxl:text-base leading-[130%]">
              <li className="lg:max-w-[160px] xl:max-w-[220px] xxl:max-w-[360px]">
                Проверьте за минуту, как сокращаются время и ошибки — без рисков
                и обязательств
              </li>
              <li>Быстрая оценка экономии и удобства для команды</li>
            </ul>
            <button onClick={open} className="underline text-left font-bold text-main-green font-helvetica cursor-pointer text-sm s:text-base lg:text-sm xxl:text-base">
              Попробовать →
            </button>
          </div>

          <div className="p-6 md:p-10 rounded-[8px] bg-main-light-blue flex flex-col gap-5">
            <div className="flex gap-5 items-center lg:items-start flex-row lg:flex-col">
              <FlexIcon className="text-main-blue shrink-0" />
              <h3 className="font-bold text-lg s:text-xl leading-6 font-helvetica text-main-dark max-w-[295px]">
                Гибкость под ваш формат
              </h3>
            </div>
            <ul className="list-disc pl-5 flex flex-col gap-[5px] font-helvetica font-normal text-sm s:text-base lg:text-sm xxl:text-base leading-[130%]">
              <li>Автоматизация через Telegram‑бот — «из коробки»</li>
              <li className="lg:max-w-[190px] xl:max-w-full">
                Регистрация в ЕГИС ОТБ «под ключ» для новых компаний —
                документы, настройка, тестирование
              </li>
              <li className="lg:max-w-[250px] xxl:max-w-full">
                Обучение in‑house: процессы остаются у вас, без передачи данных
                третьим лицам
              </li>
            </ul>
          </div>
        </div>
        <div className="unified-banner mt-5 mds:mt-10 lg:mt-20 min-h-[404px] s:min-h-[500px] xxl:min-h-[600px] rounded-[16px] overflow-hidden relative">
          <div className="absolute bottom-0 w-full h-full flex items-end">
            <div className="w-full p-5 xs:p-15 bg-gradient-to-b from-[#293A4F]/0 via-[#293A4F]/70 to-[#293A4F]">
              <div className="font-bold font-helvetica text-2xl xs:text-[28px] mds:text-[40px] text-main-white leading-6">
                43 секунды
              </div>
              <div className="mt-[10px] font-helvetica text-sm s:text-base xxl:text-xl text-main-white leading-6">
                тратят наши клиенты на загрузку рейса в ЕГИС через чат-бот
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
