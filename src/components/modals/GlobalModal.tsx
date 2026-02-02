"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useRef } from "react";
import GlobalForm from "../shared/GlobalForm";
import Button from "../ui/Button";
import CloseIcon from "@public/hero/close.svg";

export const GlobalModal = () => {
  const { isOpen, close } = useModal();
  const contentRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (!contentRef.current?.contains(e.target as Node)) {
              close();
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
              <h2 className="font-helvetica leading-[130%] text-lg s:text-xl lg:text-2xl font-bold max-w-[350px] uppercase mr-10">
                Заполните форму и начните свой путь к автоматизации бизнеса{" "}
              </h2>
              <button
                onClick={close}
                className="absolute right-5 xs:right-10 top-7 xs:top-10 text-2xl cursor-pointer"
              >
                <CloseIcon />
              </button>
            </div>

            <GlobalForm submitText="Попробовать бесплатно" option mix>
              {({ loading }) => (
                <Button
                  size="lg"
                  variant="green"
                  parentBg="light"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Отправка..." : "Попробовать бесплатно"}
                </Button>
              )}
            </GlobalForm>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
