import localFont from "next/font/local";

export const helvetica = localFont({
  variable: "--font-helvetica",
  display: "swap",
  src: [
    {
      path: "../fonts/helvetica/HelveticaNeueThin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNeueLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNeueRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNeueItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/helvetica/HelveticaNeueMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNeueBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    {
      path: "../fonts/inter/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});