"use client";
import Image from "next/image";
import CrestIcon from "@public/hero/crest.svg";
import InfoIcon from "@public/hero/info.svg";
import HeroMarquee from "../HeroMarquee";
import Button from "../ui/Button";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useModal } from "@/context/ModalContext";

const Hero = () => {
  const { open } = useModal();
  return (
    <section className="mt-20 lg:mt-25 xxl:mt-[120px] overflow-hidden">
      <div className="bg-main-blue rounded-[16px] py-10 xs:py-10 lg:py-[80.5px] mx-5 bg-square">
        <div className="max-w-[1200px] xxl:max-w-[1680px] mx-auto px-[26px] xs:px-[36px] mds:px-5 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 xs:gap-10 lg:gap-0 justify-between">
            <div className="max-w-full xxl:max-w-[660px]">
              <div className="flex gap-2 items-center justify-between s:justify-normal">
                <div className="flex gap-2 items-center">
                  <CrestIcon className="shrink-0" />
                  <span className="font-helvetica font-light text-xs xs:text-sm xxl:text-lg text-main-white pt-1 max-w-[150px] s:max-w-full">
                    Соответствие требованиям 16-ФЗ и приказу №162
                  </span>
                </div>
                <InfoIcon
                  data-tooltip-id="law-tooltip"
                  data-tooltip-content="Приказ №162 утверждает порядок формирования и ведения автоматизированных централизованных баз персональных данных о пассажирах и персонале (экипаже) транспортных средств, а также срок хранения и порядок предоставления содержащихся в них данных."
                  className="cursor-pointer shrink-0 mr-1"
                />
                <Tooltip
                  id="law-tooltip"
                  place="top"
                  className="!bg-white !text-main-dark !opacity-100 text-[13px] xs:!text-sm p-6 xs:!p-10 !rounded-lg max-w-[320px] xs:max-w-[360px] !font-helvetica z-[9999] !shadow-[0px_4px_10px_5px_rgba(41,58,79,0.10)]"
                />
              </div>

              <h1 className="mt-[10px] text-2xl s:text-[28px] lg:text-[40px] font-bold font-helvetica leading-[130%] uppercase text-main-white max-w-[570px] lg:max-w-[450px] xxl:max-w-full">
                Автоматизация передачи данных
                {"  "}
                <span className="text-main-blue bg-white pt-[4px] xs:pt-0 pb-[2px] px-[3px] shrink_text">
                  в АЦБПДП ЕГИС ОТБ
                </span>{" "}
                через чат-бот в Телеграм
              </h1>

              <p className="mt-5 text-sm s:text-base xxl:text-xl leading-[130%] font-normal font-helvetica text-main-white max-w-full lg:max-w-[440px] xl:max-w-[730px] xxl:max-w-full">
                Технология передачи данных, которая быстро, безопасно и без
                ошибок облегчает жизнь перевозчикам, позволяя сосредоточиться на
                развитии бизнеса, минуя рутину
              </p>

              <Button
                onClick={open}
                className="mt-10 lg:max-w-[300px] xxl:max-w-[400px]"
                size="lg"
                variant="green"
                parentBg="blue"
              >
                Попробовать бесплатно
              </Button>
            </div>
            <div className="w-full max-w-full mds:max-w-[460px] xl:max-w-[980px]">
              <Image
                src="/hero/hero.png"
                alt="Hero image"
                width={980}
                height={540}
                className="w-full max-w-[550px] lg:max-w-full mx-auto max-h-[300px] lg:max-h-none mds:h-auto scale-120 s:scale-none mds:scale-120 xl:scale-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <HeroMarquee />
    </section>
  );
};

export default Hero;
