import ContextProvider from "@/components/context/ContextProvider";
import type { Metadata } from "next";
import "./hemissul.css";
import { Rubik, Onest } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--automart-font",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--automart-font-two",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://landing.hemissul.com.br"),
  title: "Proteção Veicular em Roraima | Hemissul",
  description: "Proteção veicular em Boa Vista e todo o Roraima: colisão, roubo, furto, perda total, assistência 24h e rastreamento. Faça sua cotação com a Hemissul.",
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${rubik.variable} ${onest.variable}`}>
      <body>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
