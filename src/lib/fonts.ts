import { Roboto, Lora, Inter } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto", // ← agregamos variable
});

export const lora = Lora({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-lora",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});