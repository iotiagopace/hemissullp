import ContextProvider from "@/components/context/ContextProvider";
import type { Metadata } from "next";
import Script from "next/script";
import "./hemissul.css";
import { Rubik, Onest } from "next/font/google";

const GTM_ID = "GTM-NGFZ298";

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
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>

        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
