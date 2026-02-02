import React from "react";

const baseImages = Array.from(
  { length: 14 },
  (_, i) => `/hero/${i + 1}.svg`
);

const TARGET_COUNT = 56;

const extendImages = (arr: string[], target: number) => {
  const result: string[] = [];

  while (result.length < target) {
    result.push(...arr);
  }

  return result.slice(0, target);
};

const images = extendImages(baseImages, TARGET_COUNT);

const HeroMarquee = () => {
  return (
    <div className="mt-10 s:mt-20 xl:mt-25 overflow-hidden pb-10 xl:pb-[50px] px-5 lg:px-0">
      <div className="font-helvetica font-thin text-xs s:text-base mds:text-lg xxl:text-xl text-main-gray text-center">
        Компании, которые уже обезопасили себя от рисков и штрафов с нами
      </div>

      <div className="marquee mt-5">
        <div className="marquee__track">
          {images.concat(images).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`logo-${i}`}
              className="marquee__item max-h-[38px] xs:min-h-[74] lg:h-auto items-center"
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default HeroMarquee;
