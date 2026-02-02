"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, Suspense } from "react";
import Link from "next/link";
// import Image from "next/image"; // Если используешь Image

// 1. Выносим логику в отдельный компонент "Content"
function ThankYouContent() {
    const searchParams = useSearchParams();
    const sentRef = useRef(false);

    useEffect(() => {
        if (sentRef.current) return;

        const name = searchParams.get("name");
        const tel = searchParams.get("tel");
        const url = searchParams.get("url") || window.location.href;

        if (name && tel) {
            sentRef.current = true;
            sendData(name, tel, url);
        }
    }, [searchParams]);

    const sendData = async (name: string, tel: string, url: string) => {
        const uuid = Array.from({ length: 16 })
            .map(() => Math.floor(Math.random() * 255).toString(16).padStart(2, "0"))
            .join("")
            .match(/.{1,4}/g)
            ?.join("-");

        const telegramOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: "-1002448368820",
                text: `<b>Заявка с сайта:</b>\nname: ${name}\nphone: ${tel}\n\n${url}`,
                parse_mode: "html",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "🫳 Взять в работу",
                                callback_data: `take:${uuid}`,
                            },
                        ],
                    ],
                },
            }),
        };

        try {
            await Promise.all([
                fetch(
                    `https://api.telegram.org/bot7726289006:AAG4faIgb8uaHScUmKbsyIAU6nINDAxgXRk/sendMessage`,
                    telegramOptions
                ),
            ]);
            console.log("Данные успешно отправлены");
        } catch (error) {
            console.error("Ошибка отправки:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#378BEE] text-white font-helvetica gap-10 text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold">Спасибо за заявку!</h1>

            <Link href="/" className="bg-white rounded-[20px] flex items-center p-0 overflow-hidden no-underline group hover:opacity-90 transition-opacity">
                <div className="py-5 px-10 text-[#378BEE] text-xl md:text-3xl font-medium">
                    Обратно на сайт
                </div>
            </Link>

            <style jsx global>{`
        body { margin: 0; }
      `}</style>
        </div>
    );
}

// 2. Экспортируем страницу, обернутую в Suspense
export default function ThankYouPage() {
    return (
        // Suspense нужен для корректной работы useSearchParams
        <Suspense fallback={<div>Загрузка...</div>}>
            <ThankYouContent />
        </Suspense>
    );
}