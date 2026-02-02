"use client";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Button from "../ui/Button";
import { useModal } from "@/context/ModalContext";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const menu = [
  { label: "О сервисе", href: "/#about" },
  { label: "Возможности", href: "/#features" },
  { label: "Как это работает", href: "/#how" },
  { label: "Кейсы", href: "/#cases" },
];

const wrapper: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut" as const,
    },
  },
};

const MobileMenu = ({ isOpen, onClose }: Props) => {
  const { open } = useModal();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const isAnchor = href.startsWith("/#");
    if (!isAnchor) return;

    e.preventDefault();

    const id = href.replace("/#", "#");

    onClose();

    if (pathname !== "/") {
      router.push("/");

      setTimeout(() => {
        const el = document.querySelector(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      setTimeout(() => {
        const el = document.querySelector(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed left-0 right-0 top-[80px] bg-white z-[9980] shadow-[0px_4px_10px_0px_rgba(41,58,79,0.10)] overflow-hidden"
          variants={wrapper}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="max-w-[435px] px-5 mx-auto py-10">
            <ul className="flex flex-col gap-10 text-center">
              {menu.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-lg font-light font-helvetica"
                    onClick={(e) => handleClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="tel:89155762192"
              className="block mt-10 text-center text-base font-medium"
            >
              8 (915) 576-21-92
            </a>

            <div className="flex justify-center gap-5 mt-10">
              <a className="size-10" href="#">
                <img src="/header/vk.svg" alt="" />
              </a>
              <a className="size-10" href="#">
                <img src="/header/tg.svg" alt="" />
              </a>
            </div>

            <Button
              onClick={() => {
                open();
                onClose();
              }}
              className="w-full mt-10 h-10 max-w-[435px] mx-auto"
              variant="blue"
              parentBg="light"
            >
              Попробовать бесплатно
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
