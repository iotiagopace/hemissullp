import ContextProvider from "@/components/context/ContextProvider";
import type { Metadata } from "next";
import "swiper/swiper-bundle.css";
import "jarallax/dist/jarallax.css";
import "../assets/css/combined.css"
import "./hemissul.css";
import { Rubik, Onest } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--automart-font",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--automart-font-two",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://landing.hemissul.com.br"),
  title: "Proteção Veicular em Roraima | Hemissul",
  description: "Proteja seu veículo com cobertura contra colisão, roubo, furto, perda total, danos da natureza, terceiros, assistência 24h e rastreamento. Sede em Boa Vista, Roraima.",
  keywords: ["proteção veicular Roraima", "proteção veicular Boa Vista", "proteção veicular com rastreamento"],
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
