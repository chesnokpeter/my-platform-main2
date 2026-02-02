"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import ChevronIcon from "@public/slider/chevron.svg";
import ChevronRIcon from "@public/slider/chevron-r.svg";

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

type SlideType = {
  title: string;
  text: string;
  avatar: string;
  company: string;
  role: string;
  before: string[];
  after: string[];
};

const slides: SlideType[] = [
  {
    title: "«После внедрения я перестала переживать»",
    text: "После подключения сервиса всё изменилось. Во-первых, мы сократили издержки — платить за сервис оказалось намного выгоднее, чем содержать отдельного сотрудника. Во-вторых, теперь у нас вообще нет головной боли: рейсы моментально отображаются во всех госсервисах, всё автоматизировано и работает как часы.",
    avatar: "/slider/2.png",
    company: "ИП Ушакова",
    role: "Перевозчик",
    before: [
      "Списки иногда не заполнялись",
      "Ошибки в отчетности",
      "Расходы на зарплату сотрудника",
    ],
    after: ["Обработка занимает до 5 минут", "Рост заявок на 40%"],
  },
  {
    title: "«Наша компания стала более гибкой и технологичной»",
    text: "Раньше мы пытались самостоятельно разрабатывать и внедрять подобные инструменты, но это требовало огромных ресурсов и времени. Теперь, передав эту задачу профессионалам, мы не только сократили издержки, но и значительно повысили эффективность наших процессов.",
    avatar: "/slider/3.png",
    company: "ООО ЕТК",
    role: "Транспортная компания",
    before: ["Высокая нагрузка менеджеров", "Рутина мешала продажам"],
    after: [
      "Внедрили ИИ",
      "Сократили издержки на 20%",
      "Оптимизировали логистику",
    ],
  },
  {
    title: "«Мы освободили менеджеров от рутины»",
    text: "Интеграция позволила моему агентству перейти от рутины к эффективному управлению бизнесом. Теперь менеджеры сосредоточены на главном — продаже туристических пакетов и увеличении прибыли, а не на заполнении бесполезных списков.",
    avatar: "/slider/1.png",
    company: "ООО Колибри-тур",
    role: "Туристическая компания",
    before: [
      "Высокая загрузка менеджеров",
      "Рутинная работа отвлекала от продаж",
    ],
    after: ["Освободили менеджеров от рутины", "Рост заявок на 40%"],
  },
];

const BlueBlock = ({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: string;
}) => (
  <div className="flex flex-col">
    <img className="size-6" src={icon} alt="" />

    <div className="mt-[10px] font-helvetica font-bold text-base xxl:text-xl text-main-white">
      {title}
    </div>

    <ul className="mt-[10px] space-y-1 list-disc pl-5">
      {items.map((item, i) => (
        <li
          key={i}
          className="font-helvetica font-normal text-sm xxl:text-base text-main-white"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const SliderSection = () => {
  return (
    <section
      id="cases"
      className="pt-10 xl:pt-[50px] pb-10 xl:pb-[50px] scroll-mt-[120px]"
    >
      <motion.div
        variants={fadeUpBlock}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.02 }}
        className="max-w-[1200px] xxl:max-w-[1680px] px-5 lg:px-10 xl:px-5 mx-auto bg-square-light"
      >
        <div className="flex flex-col lg:flex-row xxl:grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between">
          <div className="flex flex-col xs:flex-row lg:flex-col justify-between items-end lg:items-baseline gap-5 lg:max-w-[360px] xxl:max-w-full">
            <div className="self-start">
              <h2 className="mb-5 text-2xl s:text-[28px] lg:text-[40px] font-bold font-helvetica uppercase text-main-dark flex flex-col md:flex-row lg:flex-col gap-[5px]">
                МЫ РАБОТАЕМ
                <span className="text-main-white bg-main-blue pt-[4px] xs:pt-0 s:px-2 inline max-w-[180px] s:max-w-[225px] md:max-w-full">
                  НА РЕЗУЛЬТАТ
                </span>
              </h2>
              <span className="text-sm s:text-base xxl:text-xl font-helvetica font-light">
                Реальные кейсы реального бизнеса
              </span>
            </div>
            <div className="flex gap-[10px] shrink-0">
              <button className="slider-prev cursor-pointer group size-11 xxl:size-[60px] rounded-full flex justify-center items-center border border-main-dark hover:bg-main-blue transition">
                <ChevronIcon className="size-[22px] xxl:size-[34px] text-main-dark group-hover:text-main-white" />
              </button>

              <button className="slider-next cursor-pointer group size-11 xxl:size-[60px] rounded-full flex justify-center items-center border border-main-dark hover:bg-main-blue transition">
                <ChevronRIcon className="size-[22px] xxl:size-[34px] text-main-dark group-hover:text-main-white" />
              </button>
            </div>
          </div>

          <div className="lg:max-w-[462px] xl:max-w-[760px] w-full">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              navigation={{
                prevEl: ".slider-prev",
                nextEl: ".slider-next",
              }}
              spaceBetween={30}
              loop
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full">
                    <div className="p-6 xs:p-10 rounded-[8px] bg-main-light-blue w-full">
                      <h3 className="font-helvetica font-bold text-lg xxl:text-xl text-main-dark">
                        {slide.title}
                      </h3>

                      <p className="mt-[10px] font-helvetica text-sm xxl:text-base text-main-dark">
                        {slide.text}
                      </p>

                      <div className="mt-5 flex items-center gap-[10px]">
                        <img
                          className="size-10 rounded-full object-cover"
                          src={slide.avatar}
                          alt=""
                        />

                        <div>
                          <div className="font-helvetica text-base xs:text-sm xxl:text-base text-main-dark">
                            {slide.company}
                          </div>
                          <div className="font-helvetica text-xs xs:text-[10px] xxl:text-xs text-main-gray">
                            {slide.role}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="-mt-2  p-6 xs:p-10 rounded-[8px] bg-main-blue grid grid-cols-1 xs:grid-cols-2 gap-10">
                      <BlueBlock
                        title="До внедрения сервиса"
                        items={slide.before}
                        icon="/slider/dislike.svg"
                      />

                      <BlueBlock
                        title="После внедрения сервиса"
                        items={slide.after}
                        icon="/slider/fire.svg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SliderSection;
