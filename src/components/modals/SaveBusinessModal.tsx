"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useRef } from "react";
import GlobalForm from "../shared/GlobalForm";
import Button from "../ui/Button";
import CloseIcon from "@public/hero/close.svg";

type Props = {
  isOpen: boolean;
  type: "register" | "training" | null;
  onClose: () => void;
};

const titles = {
  register: "Регистрация под ключ в ЕГИС ОТБ",
  training: "Обучение по автоматизации",
};

const SaveBusinessModal = ({ isOpen, type, onClose }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (!contentRef.current?.contains(e.target as Node)) {
              onClose();
            }
          }}
        >
          <motion.div
            ref={contentRef}
            className="bg-white rounded-[8px] p-6 xs:p-10 w-full max-w-[780px] relative"
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="mb-10">
              <div className="space-y-5">
                <h2 className="font-helvetica leading-[130%] text-lg s:text-xl lg:text-2xl font-bold uppercase mr-10">
                  {type ? titles[type] : ""}
                </h2>

                <p className="font-helvetica font-normal text-sm s:text-base lg:text-xl leading-[130%] max-w-[650px]">
                  Оставьте свои контакты или свяжитесь с нами любым удобным
                  способом для получения консультации
                </p>

                <div className="flex gap-5 items-center">
                  <a className="size-10" href="#">
                    <img src="/header/vk.svg" alt="" />
                  </a>
                  <a className="size-10" href="#">
                    <img src="/header/tg.svg" alt="" />
                  </a>
                </div>
              </div>

              <button
                onClick={onClose}
                className="absolute right-5 xs:right-10 top-7 xs:top-10 cursor-pointer"
              >
                <CloseIcon />
              </button>
            </div>

            <GlobalForm submitText="Отправить" light>
              {({ loading }) => (
                <Button
                  size="lg"
                  variant="green"
                  parentBg="light"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Отправка..." : "Отправить"}
                </Button>
              )}
            </GlobalForm>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SaveBusinessModal;
