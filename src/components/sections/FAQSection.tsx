"use client";

import type { Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useModal } from "@/context/ModalContext";
import SaveBusinessModal from "../modals/SaveBusinessModal";

const fadeUpBlock: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut" as const, // каст
    },
  },
};

type ModalVariant = "register" | "training" | null;

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [modalType, setModalType] = useState<"register" | "training" | null>(
    null,
  );
    const { open } = useModal();

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqData = [
    {
      question: "Для каких рейсов подходит платформа?",
      answer: (
        <>
          <p>
            Сервис подходит для передачи данных в ЕГИС ОТБ для всех видов
            организованных перевозок групп детей и взрослых, включая:
          </p>

          <ul className="mt-7 list-disc pl-5">
            <li>туристические автобусные туры</li>
            <li>корпоративные поездки</li>
            <li>школьные и спортивные перевозки</li>
            <li>междугородние и пригородные маршруты</li>
          </ul>

          <p className="mt-7">
            Главное условие — наличие списка пассажиров и необходимости передачи
            данных в ЕГИС ОТБ согласно 16-ФЗ.
          </p>
        </>
      ),
    },

    {
      question: "Информацию о каких перевозках нужно передавать?",
      answer: (
        <>
          <p>
            Обязательно передавать данные о любых организованных перевозках
            групп людей, если:
          </p>

          <ul className="mt-7 list-disc pl-5">
            <li>используется автобус вместимостью 8+ пассажиров,</li>
            <li>
              маршрут не является регулярным городским/пригородным сообщением,
            </li>
            <li>
              перевозка осуществляется по заказу (туризм, корпоративы, экскурсии
              и т.д.).
            </li>
          </ul>

          <p className="mt-7">
            Мы поможем точно определить, попадает ли ваш рейс под требования.
            Для этого —{" "}
            <button
              onClick={open}
              className="cursor-pointer text-main-blue underline font-semibold"
            >
              оставьте заявку
            </button>{" "}
            на сайте — и мы свяжемся с вами в ближайшее время.
          </p>
        </>
      ),
    },

    {
      question:
        "Что будет, если не передавать данные о перевозках и пассажирах в ЕГИС ОТБ?",
      answer: (
        <>
          <p>
            Непредставление данных — это нарушение Федерального закона №16-ФЗ.
          </p>

          <p className="mt-7">Штрафы:</p>

          <ul className="mt-2 list-disc pl-5 flex flex-col gap-2">
            <li>до 50 000 ₽ для ИП</li>
            <li>до 100 000 ₽ для ООО</li>
          </ul>

          <p className="mt-0">
            При повторном нарушении — приостановка деятельности до 90 суток или
            даже лишение лицензии.
          </p>

          <p className="mt-10">
            С «Моей Платформой» таких рисков нет — мы гарантируем своевременную
            и корректную передачу.
          </p>
        </>
      ),
    },

    {
      question: "Это платная платформа?",
      answer: (
        <p>
          Да, сервис платный, но вы платите только за успешно переданные рейсы,
          начиная от 349 рублей за рейс. При этом первая поездка — бесплатная,
          чтобы вы могли оценить удобство и экономию времени.
        </p>
      ),
    },

    {
      question: "Сколько времени занимает регистрация рейса через бот?",
      answer: (
        <>
          <p>
            Регистрация рейса через Telegram-бот «Моя Платформа» занимает всего
            1 минуту.
          </p>

          <p className="mt-7 ">Это включает:</p>

          <ul className="mt-2 list-disc pl-5 flex flex-col gap-2">
            <li>
              загрузку списка пассажиров (в любом формате: PDF, Excel, фото и
              др.)
            </li>
            <li>автоматическую проверку и коррекцию данных</li>
            <li>отправку информации в ЕГИС ОТБ</li>
          </ul>

          <p className="mt-7">
            Для сравнения: при ручной регистрации тот же процесс занимает от 40
            до 60 минут.
          </p>

          <p className="mt-7">
            <button onClick={open} className="cursor-pointer text-main-blue underline font-bold">
              Попробуйте
            </button>{" "}
            первую поездку бесплатно — убедитесь в разнице за одну минуту.
          </p>
        </>
      ),
    },

    {
      question: "Нужно ли устанавливать ПО или интегрироваться через API?",
      answer: (
        <p>
          Нет. Всё работает через Telegram-бот — без установки программ, сложных
          кабинетов или паролей. Доступен с телефона и ПК.
        </p>
      ),
    },

    {
      question: "Что нужно для начала работы?",
      answer: (
        <>
          <p className="">Всего три шага:</p>

          <ol className="mt-2 list-decimal pl-5">
            <li>Оставить заявку на бесплатную поездку</li>
            <li>Подключить Telegram-бота (занимает 30 секунд)</li>
            <li>
              Загрузить список пассажиров и данные рейса - всё остальное система
              делает сама
            </li>
          </ol>

          <p className="mt-7">
            Для компаний незарегистрированных в ЕГИС ОТБ также доступна услуга
            «Регистрация под ключ» — мы сами подготовим все документы, подключим
            к системе и настроим интеграцию с чат-ботом. Для этого —{" "}
            <button
              onClick={() => setModalType("register")}
              className="cursor-pointer text-main-blue underline font-semibold"
            >
              оставьте заявку
            </button>{" "}
            на сайте — и мы свяжемся с вами в ближайшее время.
          </p>
        </>
      ),
    },

    {
      question: "Как оплачивать?",
      answer: (
        <>
          <p>Оплата возможна любым удобным способом:</p>

          <ul className="mt-2 list-disc pl-5 flex flex-col gap-2">
            <li>через СБП (Систему быстрых платежей)</li>
            <li>банковской картой</li>
            <li>или по выставленному счёту для юрлиц</li>
          </ul>

          <p className="mt-7">
            Вы получаете ежемесячный отчёт с детализацией всех рейсов и сумм.
          </p>
        </>
      ),
    },

    {
      question: "Что если у меня частые простои?",
      answer: (
        <>
          <p>
            Это не проблема! Сервис работает по факту использования - нет
            абонентской платы и обязательных минимальных объёмов.
          </p>
          <p>
            Зарегистрировали рейс - заплатили за него. Не было рейсов - ничего
            не платите.
          </p>
        </>
      ),
    },

    {
      question: "Поддерживаете ли вы разные форматы документов?",
      answer: (
        <p>
          Да: PDF, Word, Excel, фото, JPEG и даже неструктурированный текст.
          Система сама распознаёт и корректирует данные.
        </p>
      ),
    },
    {
      question:
        "Чем ваш сервис лучше самостоятельной регистрации или других платформ?",
      answer: (
        <>
          <p>
            Самостоятельная регистрация данных в ЕГИС ОТБ требует ручного ввода
            информации по каждому пассажиру, проверки соответствия форматов,
            загрузки файлов и отслеживания статусов. Процесс занимает до 40–60
            минут на рейс и сопряжён с высоким риском ошибок, особенно при
            работе вне офиса или в условиях срочных сроков.
          </p>

          <p className="mt-7">
            Другие платформы часто предлагают интеграцию с 1С, использование
            сложных кабинетов с многоуровневыми паролями, обучение сотрудников и
            работу исключительно с ПК — что неудобно для водителей и
            диспетчеров, находящихся в пути или работающих в ночные смены.
          </p>

          <p className="mt-7">
            «Моя Платформа» решает эти проблемы следующим образом:
          </p>

          <ul className="mt-2 list-disc pl-5 flex flex-col gap-2">
            <li>
              Работает через Telegram-бот, который доступен на любом устройстве
              — телефоне, планшете или ПК.
            </li>
            <li>
              Не требует установки дополнительного программного обеспечения,
              запоминания логинов или работы с несколькими системами.
            </li>
            <li>
              Автоматически обрабатывает данные любого формата — PDF, Excel,
              Word, фотографии — и исправляет ошибки до отправки.
            </li>
            <li>
              Обеспечивает полное соответствие требованиям 16-ФЗ и приказу №162
              за счёт встроенных автопроверок.
            </li>
            <li>
              Стоимость использования начинается от 349 рублей за рейс, что
              значительно ниже затрат на содержание штатного специалиста.
            </li>
            <li>
              Предоставляет поддержку 24/7 и работает без человеческого фактора
              — без перебоев, отпусков или болезней сотрудников.
            </li>
          </ul>

          <p className="mt-7">
            <button onClick={open} className="cursor-pointer text-main-blue underline font-semibold">
              Попробуйте
            </button>{" "}
            первую поездку бесплатно — убедитесь в удобстве за одну минуту.
          </p>
        </>
      ),
    },

    {
      question:
        "Как быстро начать работу в ЕГИС ОТБ, если я только открываю компанию?",
      answer: (
        <>
          <p>
            Для новых компаний, только начинающих деятельность в сфере
            пассажирских перевозок, первичная настройка и регистрация в ЕГИС ОТБ
            могут представлять значительную сложность из-за множества
            юридических и технических требований, а также риска ошибок, ведущих
            к штрафам.
          </p>

          <p className="mt-7">
            Мы предлагаем услугу «Подключение к ЕГИС ОТБ под ключ», которая
            включает:
          </p>

          <ul className="mt-2 list-disc pl-5 flex flex-col gap-2">
            <li>
              Подготовку всех необходимых документов для подключения к АЦЕДПД
              ЕГИС ОТБ, включая заявления и согласия на обработку персональных
              данных.
            </li>
            <li>
              Настройку интеграции с вашим Telegram-аккаунтом без необходимости
              привлечения IT-специалистов.
            </li>
            <li>
              Проведение бесплатного тестового рейса, чтобы вы могли оценить
              работу системы без риска.
            </li>
            <li>
              Пошаговое сопровождение и обучение вашей команды — минимальное
              участие со стороны компании.
            </li>
            <li>
              Гарантию соответствия всем нормативным требованиям, что снижает
              вероятность отказов на старте и ускоряет выход на коммерческие
              рейсы.
            </li>
          </ul>

          <p className="mt-7">
            Процесс запуска занимает не более одного рабочего дня с момента
            получения реквизитов для работы с ЕГИС ОТБ. После завершения
            настройки вы получаете полностью функционирующую систему, готовую к
            использованию, без необходимости углублённого изучения
            законодательства или технических нюансов.
          </p>

          <p className="mt-7">
            Мы поможем подключиться к ЕГИС ОТБ в кратчайшие сроки — мы сами
            подготовим все документы, подключим к системе и настроим интеграцию
            с чат-ботом. Для этого —{" "}
            <button
              onClick={() => setModalType("register")}
              className="cursor-pointer text-main-blue underline font-semibold"
            >
              оставьте заявку
            </button>{" "}
            на сайте — и мы свяжемся с вами в ближайшее время.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <section className="pt-10 pb-[50px] xl:py-[50px]">
        <motion.div
          variants={fadeUpBlock}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-[1200px] xxl:max-w-[1680px] px-5 lg:px-10 xl:px-5 mx-auto"
        >
          <h2 className="text-2xl s:text-[28px] lg:text-[40px] font-bold font-helvetica leading-[130%] uppercase text-main-dark">
            Частые вопросы
          </h2>

          <div className="mt-10 flex flex-col gap-5">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  layout
                  transition={{ type: "spring", stiffness: 400, damping: 40 }}
                >
                  <div className="w-full rounded-[8px] overflow-hidden bg-main-light-blue">
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      className="w-full px-6 xs:px-10 py-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <p className="font-helvetica text-lg s:text-xl lg:text-lg font-bold leading-[130%] text-main-dark">
                        {item.question}
                      </p>

                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center shrink-0"
                      >
                        <img src="/faq-section/chevron.svg" alt="" />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 xs:px-10 pb-6 space-y-2 font-helvetica text-base xxl:text-lg leading-[130%] text-main-dark">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
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

export default FAQSection;
