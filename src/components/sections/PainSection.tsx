"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
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

const PainSection = () => {
  const { open } = useModal();
  return (
    <section className="py-10 xl:py-[50px]">
      <motion.div
        variants={fadeUpBlock}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.02 }}
        className="max-w-[1200px] xxl:max-w-[1680px] px-5 lg:px-10 xl:px-5 mx-auto"
      >
        <h2 className="mt-[10px] text-2xl s:text-[28px] lg:text-[40px] font-bold font-helvetica leading-[130%] uppercase text-main-dark">
          ВАМ ЭТО{" "}
          <span className="text-main-white bg-main-blue pt-[4px] xs:pt-0 pb-[2px] px-[1px]">
            ЗНАКОМО
          </span>
        </h2>
        <p className="mt-5 font-helvetica font-light text-sm s:text-base xl:text-lg xxl:text-xl text-main-dark">
          Проблемы и сложности работы без сервиса “Моя платформа”
        </p>
        <div className="mt-10 pain-grid gap-5 xl:gap-10">
          <div className="[grid-area:c1] p-6 xs:p-10 rounded-[8px] bg-main-blue flex flex-col relative min-h-[380px] s:min-h-[494px] lg:min-h-[500px] items-center justify-between">
            <div>
              <h3 className="font-helvetica font-bold text-lg s:text-xl text-main-white leading-[120%] lg:max-w-[190px] xl:max-w-full">
                Неясность требований 16‑ФЗ и приказа №162
              </h3>
              <p className="mt-5 font-helvetica font-light text-sm s:text-base lg:text-sm xxl:text-base text-main-white leading-[130%] max-w-[310px] xs:max-w-[260px] lg:max-w-[220px] xl:max-w-[274px] xxl:max-w-full">
                «Что именно и как подавать?» — нет простых инструкций, много
                формулировок и нюансов. Ошибка чревата штрафом до 100 000 руб.
                (ООО) или до 50 000 руб. (ИП), при повторе — риск лишения
                лицензии
              </p>
            </div>
            <img
              className="absolute -bottom-2 s:bottom-0 lg:bottom-5 xl:-bottom-5 xxl:bottom-0 lg:ml-3 lg:left-1/2 lg:-translate-x-1/2 max-w-[180px] s:max-w-[250px] xl:max-w-[300px]"
              src="/pain/1.png"
              alt=""
            />
          </div>
          <div className="[grid-area:c2] xxl:p-10 rounded-[8px] bg-main-light-blue flex flex-col relative overflow-hidden h-[462px] xs:h-auto s:min-h-[400px] xs:min-h-[500px] lg:min-h-full items-center lg:items-baseline justify-between">
            <div className="p-6 xs:p-10 xxl:p-0 lg:max-w-[290px] xl:max-w-[440px] xxl:max-w-full">
              <h3 className="font-helvetica font-bold text-lg s:text-xl text-main-dark leading-[120%] max-w-[200px] s:max-w-full xl:max-w-[230px]">
                До 40–60 минут рутин на каждый рейс
              </h3>
              <p className="mt-5 font-helvetica font-light text-sm s:text-base lg:text-sm xxl:text-base text-main-dark leading-[130%]">
                Ручной ввод, сверка, загрузка файлов, перепроверка статусов -
                съедают время диспетчера и водителя. График срывается, рейсы
                задерживаются, люди работают «на отчёт», а не на перевозку
              </p>
            </div>
            <img
              className="absolute right-8 s:right-5 lg:-right-25 -bottom-1 s:bottom-4 lg:-bottom-20 xxl:bottom-5 xxl:left-1/2 xxl:-translate-x-1/2 max-w-[230px] s:max-w-[294px] lg:max-w-[400px] xxl:max-w-full"
              src="/pain/2.png"
              alt=""
            />
          </div>
          <div className="[grid-area:c3] p-6 xs:p-10 rounded-[8px] bg-main-light-blue flex flex-col">
            <h3 className="font-helvetica font-bold text-lg s:text-xl text-main-dark leading-[120%]">
              Риск штрафов <br /> и человеческих ошибок
            </h3>
            <p className="mt-5 font-helvetica font-light text-sm s:text-base lg:text-sm xxl:text-base text-main-dark leading-[130%] max-w-[264px] xxl:max-w-full">
              Опечатка, пропущенное поле, неверная дата или формат - и отчёт не
              принят. Одна мелочь превращается в реальные деньги и проблемы при
              проверке транспортной безопасности
            </p>
          </div>
          <div className="[grid-area:c4] p-6 xs:p-10 rounded-[8px] bg-main-light-blue flex flex-col">
            <h3 className="font-helvetica font-bold text-lg s:text-xl text-main-dark leading-[120%]">
              Высокие постоянные издержки
            </h3>
            <p className="mt-5 font-helvetica font-light text-sm s:text-base lg:text-sm xxl:text-base text-main-dark leading-[130%]  xs:max-w-[220px] xl:max-w-full">
              Держать логиста/бухгалтера «ради отчётности» дорого, а при их
              отпуске/болезни процесс встаёт. Новых сотрудников нужно учить, а
              ошибки в период адаптации неизбежны
            </p>
          </div>
          <div className="[grid-area:c5] p-6 xs:p-10 rounded-[8px] bg-main-light-blue flex flex-col">
            <h3 className="font-helvetica font-bold text-lg s:text-xl text-main-dark max-w-[260px] lg:max-w-full leading-[120%]">
              Нет прозрачности статусов <br /> и подтверждений
            </h3>
            <p className="mt-5 font-helvetica font-light text-sm s:text-base lg:text-sm xxl:text-base text-main-dark leading-[130%] max-w-[257px] lg:max-w-full">
              Отправили - дошло ли? Принято ли? Пришлось проверять вручную,
              делать скриншоты и вести Excel.
            </p>
            <p className="font-helvetica font-light text-sm s:text-base lg:text-sm xxl:text-base text-main-dark leading-[130%]">
              В итоге теряются подтверждения, сложно быстро показать выполнение
              требований проверяющим
            </p>
          </div>
          <div className="[grid-area:c6] p-6 xs:p-10 rounded-[8px] bg-main-light-blue flex flex-col">
            <h3 className="font-helvetica font-bold text-lg s:text-xl text-main-dark leading-[120%] max-w-[260px] s:max-w-full">
              Сложные кабинеты, пароли и неудобство с телефона
            </h3>
            <p className="mt-5 font-helvetica font-light text-sm s:text-base lg:text-sm xxl:text-base text-main-dark leading-[130%] lg:max-w-[200px] xl:max-w-[230px] xxl:max-w-full">
              Несколько систем, разные логины, инструкции «в столе». Водителям и
              диспетчерам неудобно работать вне офиса, особенно на маршруте или
              в ночные смены
            </p>
          </div>
          <div className="[grid-area:c7] p-6 xs:p-10 rounded-[8px] bg-main-light-blue flex flex-col relative min-h-[362px] xs:min-h-[500px] xl:min-h-[388px] xxl:min-h-auto overflow-hidden items-center justify-between">
            <div>
              <h3 className="font-helvetica font-bold text-lg s:text-xl text-main-dark max-w-[260px] s:max-w-[280px] leading-[120%]">
                Отставание от конкурентов в автоматизации
              </h3>
              <p className="mt-5 font-helvetica font-light text-sm s:text-base lg:text-sm xxl:text-base text-main-dark leading-[130%] max-w-[270px] lg:max-w-[180px] xl:max-w-[275px] xxl:max-w-full">
                Пока у вас ручной ввод, у конкурентов — быстрый
                автоматизированный поток. Клиентам важны скорость, прозрачность
                и надёжность — вы теряете сделки из‑за процессов, а не из‑за
                качества перевозок
              </p>
            </div>
            <img
              className="lg:absolute bottom-2 xl:-bottom-13 scale-none xl:scale-125 max-w-[220px] s:max-w-full"
              src="/pain/3.png"
              alt=""
            />
          </div>
          <div className="[grid-area:c8] p-6 xs:p-10 rounded-[8px] bg-main-light-blue flex flex-col relative min-h-[300px] xs:min-h-[500px] lg:min-h-[388px] xxl:min-h-auto overflow-hidden items-center justify-between">
            <div>
              <h3 className="font-helvetica font-bold text-lg s:text-xl text-main-dark leading-[120%]">
                Зависимость от одного специалиста
              </h3>
              <p className="mt-5 font-helvetica font-light text-sm s:text-base lg:text-sm xxl:text-base text-main-dark leading-[130%] max-w-[257] s:max-w-full max-w-[210px] lg:max-w-[295px]">
                «Ушёл человек - ушла экспертиза». Если ключевой сотрудник
                недоступен, подача данных в ЕГИС ОТБ стопорится, растёт риск
                штрафов и срывов рейсов
              </p>
            </div>
            <img
              className="mt-10 lg:absolute bottom-1 xl:-bottom-6 max-w-[210px] s:max-w-[360px] xl:max-w-full hidden s:block xl:hidden"
              src="/pain/4.png"
              alt=""
            />
            <img
              className="mt-10 lg:absolute -bottom-0 scale-110 s:scale-none max-w-[210px] s:max-w-[360px] xl:max-w-full s:hidden xl:block xxl:hidden"
              src="/pain/4-lg.png"
              alt=""
            />
            <img
              className="static lg:absolute left-6 -bottom-0 w-full max-h-[192px] lg:max-w-[280px] hidden xxl:block"
              src="/pain/4-xxl.png"
              alt=""
            />
          </div>
          <div className="[grid-area:c9] p-6 xs:p-10 rounded-[8px] bg-main-blue flex flex-col md:flex-row justify-between lg:flex-col relative min-h-[362px] s:min-h-[400px] md:min-h-full lg:min-h-[388px] xxl:min-h-auto overflow-hidden items-center">
            <div className="md:max-w-[314px] lg:max-w-auto">
              <h3 className="font-helvetica font-bold text-lg s:text-xl text-main-white leading-[120%]">
                Частые изменения <br /> и обновления требований
              </h3>
              <p className="mt-5 font-helvetica font-light text-sm s:text-base lg:text-sm xxl:text-base text-main-white leading-[130%] lg:max-w-[190px] xl:max-w-[230px] xxl:max-w-full">
                Форматы, поля, сроки — меняются, а шаблоны остаются старыми
              </p>
              <p className="font-helvetica font-light text-sm s:text-base lg:text-sm xxl:text-base text-main-white leading-[130%] lg:max-w-[200px] xl:max-w-full">
                Команда не успевает адаптироваться, появляются расхождения и
                отказы в приёме
              </p>
            </div>
            <img
              className="static lg:absolute left-0 bottom-5 xl:-bottom-2 w-full max-h-[173px] xxl:max-h-[200px] max-w-[314px] lg:max-w-full hidden s:block "
              src="/pain/5.png"
              alt=""
            />
            <img
              className="static lg:absolute left-0 bottom-5 xl:-bottom-2 w-full block s:hidden max-h-[140px] s:max-h-[173px] xxl:max-h-[200px] max-w-[260px] s:max-w-[314px] lg:max-w-full"
              src="/pain/5-s.png"
              alt=""
            />
          </div>
          <div className="[grid-area:c10] mt-5 s:mt-0 lg:w-[50%] lg:w-auto  flex flex-col justify-end xxl:min-h-[424px]">
            <div>
              <h3 className="font-helvetica font-bold text-lg s:text-[28px] lg:text-[40px] text-main-blue leading-[130%]">
                Защитите свой бизнес с нами
              </h3>
              <p className="mt-5 font-helvetica font-light text-sm s:text-base xxl:text-xl text-main-dark leading-[130%]">
                Оставьте заявку на тестовую поездку
              </p>
              <div className="mt-5 lg:mt-[45px] max-w-[360px] lg:max-w-full">
                <Button
                  onClick={open}
                  size="lg"
                  variant="green"
                  parentBg="light"
                >
                  Попробовать бесплатно
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PainSection;
