"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useRef } from "react";
import SuccessIcon from "@public/hero/success.svg";
import CloseIcon from "@public/hero/close.svg";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SuccessModal = ({ isOpen, onClose }: Props) => {
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
              <div className="space-y-5 text-center">
                <h2 className="font-helvetica leading-[130%] text-lg s:text-xl lg:text-2xl font-bold uppercase flex justify-center items-center gap-5">
                  <SuccessIcon />
                  Ваши данные отправлены
                </h2>

                <p className="font-helvetica font-normal text-sm xs:text-base lg:text-xl leading-[130%] max-w-[650px] mx-auto">
                  Менеджер свяжется с вами в течение 2-х часов
                </p>
              </div>

              <button
                onClick={onClose}
                className="absolute right-10 top-10 cursor-pointer"
              >
                <CloseIcon />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
