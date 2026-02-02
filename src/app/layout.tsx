import type { Metadata } from "next";
import { inter, helvetica } from "@/fonts/fonts";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";

export const metadata: Metadata = {
  title: "Моя платформа",
  description: "Автоматизация бизнеса",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${helvetica.variable} antialiased`}>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}