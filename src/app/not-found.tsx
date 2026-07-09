import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappHref } from "./whatsapp";

export const metadata: Metadata = {
  title: "Página não encontrada | Hemissul",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="hmx-page hmx-404">
      <div className="hmx-404__inner">
        <Image src="/hemissul/logo-branca.png" alt="Hemissul Proteção Veicular" width={240} height={90} priority />
        <span className="hmx-404__code">404</span>
        <h1>Esta página não existe.</h1>
        <p>
          O endereço pode ter mudado ou o link está incorreto. Volte para o início ou fale com a nossa equipe
          pelo WhatsApp: a cotação é rápida e sem compromisso.
        </p>
        <div className="hmx-404__actions">
          <a className="hmx-cta" href={whatsappHref("404_cta")} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" />
            <span>Solicitar cotação</span>
          </a>
          <Link className="hmx-cta hmx-cta--dark" href="/">
            <span>Voltar para o início</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
