import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Bike,
  Briefcase,
  Building2,
  CarFront,
  Check,
  ChevronDown,
  Clock3,
  Facebook,
  Handshake,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Play,
  Radar,
  ShieldCheck,
  Star,
  Youtube,
} from "lucide-react";
import Reveal from "./Reveal";
import { whatsappHref } from "./whatsapp";

const SITE_URL = "https://landing.hemissul.com.br/";

export const metadata: Metadata = {
  title: "Proteção Veicular em Roraima | Hemissul",
  description:
    "Proteção veicular em Boa Vista e todo o Roraima: colisão, roubo, furto, perda total, assistência 24h e rastreamento. Faça sua cotação com a Hemissul.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Hemissul Proteção Veicular em Roraima",
    description:
      "Cobertura para carro, moto, frota e veículo de trabalho. Assistência 24h, rastreamento e atendimento presencial em Roraima.",
    url: SITE_URL,
    siteName: "Hemissul Proteção Veicular",
    images: [{ url: "/hemissul/og.jpg", width: 1200, height: 630, alt: "Hemissul Proteção Veicular em Roraima" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemissul Proteção Veicular em Roraima",
    description: "Proteção para carro, moto, frota e veículo de trabalho com assistência 24h, rastreamento e atendimento próximo.",
    images: ["/hemissul/og.jpg"],
  },
};

const coverages = [
  {
    icon: ShieldCheck,
    title: "Colisão",
    bullets: ["Reboque", "Reparo do veículo", "Acompanhamento do processo na oficina"],
  },
  {
    icon: CarFront,
    title: "Perda total",
    bullets: ["Reboque", "Atendimento no local do acidente", "Indenização integral do valor do veículo"],
  },
  {
    icon: BadgeCheck,
    title: "Roubo e furto",
    bullets: ["Busca e localização", "Indenização integral do valor do veículo", "Acompanhamento em cada etapa"],
  },
  {
    icon: Handshake,
    title: "Danos a terceiros",
    bullets: ["Reboque", "Cobertura para terceiros envolvidos no acidente", "Acompanhamento do processo na oficina"],
  },
  {
    icon: Clock3,
    title: "Assistência 24h",
    bullets: ["Reboque em caso de pane elétrica ou mecânica", "Pane seca", "Chaveiro"],
  },
  {
    icon: Radar,
    title: "Rastreamento",
    bullets: ["Localização em tempo real", "Cerca virtual", "Alerta de ignição"],
  },
];

const benefits = [
  "Colisão",
  "Perda total",
  "Assistência 24h",
  "Danos a terceiros",
  "Rastreamento",
  "Pequenos reparos",
  "Cobertura nacional",
];

const socialProof = [
  {
    type: "Depoimento em vídeo",
    name: "Jardson Rodrigues",
    meta: "8 meses de Hemissul",
    image: "/hemissul/social/jardson.png",
    href: "https://www.instagram.com/p/DXe0MhagCeq/",
  },
  {
    type: "Depoimento em vídeo",
    name: "Jão",
    meta: "Associado há 1 ano",
    image: "/hemissul/social/jao.png",
    href: "https://www.instagram.com/p/DWCm1YGDnHG/",
  },
  {
    type: "Reparo",
    name: "Carro entregue",
    meta: "Registro de reparo publicado pela Hemissul",
    image: "/hemissul/social/reparo-1.png",
  },
  {
    type: "Reparo",
    name: "Antes e depois",
    meta: "Registro de reparo publicado pela Hemissul",
    image: "/hemissul/social/reparo-2.png",
  },
];

const segments = [
  { icon: CarFront, title: "Carros particulares", text: "Proteção para o veículo que transporta sua família no dia a dia.", image: "/hemissul/segment-carro.webp", content: "carro_cta", segment: "carro" },
  { icon: Briefcase, title: "Motorista de aplicativo", text: "Para quem roda de app e depende do veículo para gerar renda todos os dias.", image: "/hemissul/segment-app.jpg", content: "app_cta", segment: "motorista_app" },
  { icon: Bike, title: "Motos", text: "Proteção para motociclistas que dependem da moto todos os dias.", image: "/hemissul/segment-moto.jpg", content: "moto_cta", segment: "moto" },
  { icon: Building2, title: "Frotas e empresas", text: "Proteção para operações com múltiplos veículos e necessidade de controle.", image: "/hemissul/segment-frota.jpg", content: "frota_cta", segment: "frota" },
];

const footerContacts = [
  ["Assistência 24 h", "0800 940 2163"],
  ["Pronta resposta", "(95) 99157-4355"],
  ["Comercial", "(95) 4020-1719"],
  ["Cotação · WhatsApp", "(95) 99138-1037"],
];

const steps = [
  ["01", "Chame no WhatsApp", "Informe seu veículo e a rotina de uso."],
  ["02", "Entenda as opções", "A equipe apresenta coberturas, valores e condições."],
  ["03", "Contrate com clareza", "Você decide sabendo o que está incluso no plano."],
  ["04", "Conte com suporte", "Depois da adesão, a Hemissul orienta quando você precisar."],
];

const faqItems = [
  ["A Hemissul atende somente em Roraima?", "Não. A Hemissul oferece atendimento e suporte em todo o território nacional."],
  ["A proteção cobre roubo, furto e colisão?", "Os planos podem incluir roubo, furto, colisão, reparo e perda total. A cobertura exata depende do plano contratado e das condições apresentadas na proposta."],
  ["A Hemissul faz análise de perfil do condutor?", "Não é analisado o perfil do associado, pois a cobertura é feita para o veículo de acordo com o valor do bem. Outras pessoas também podem dirigir o veículo, desde que sejam devidamente habilitadas."],
  ["Tem assistência 24h?", "Sim. A Hemissul oferece assistência 24h em caso de pane elétrica ou mecânica, pane seca, chaveiro, troca de pneu e muito mais."],
  ["Proteção veicular é a mesma coisa que seguro?", "Seguro e proteção veicular têm o mesmo objetivo: proteger o seu patrimônio. A principal diferença está na contratação, que é simples, sem análise de perfil do condutor, e você conta com uma equipe de Pronta Resposta para oferecer suporte ágil quando um imprevisto acontece."],
  ["Empresas podem contratar para frota?", "Sim. Empresas podem ter a proteção da Hemissul para sua frota e garantir controle de trajetos, relatório de velocidade e rastreamento em tempo real."],
  ["Quando minha proteção começa a valer?", "Concluída a adesão, sua proteção passa a valer imediatamente, para que você conte com a segurança e o suporte da Hemissul desde o início."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: { "@type": "Answer", text },
  })),
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#hemissul`,
    name: "Hemissul Proteção Veicular",
    legalName: "Hemissul Proteção Veicular",
    taxID: "35.224.050/0001-37",
    url: SITE_URL,
    image: `${SITE_URL}hemissul/og.jpg`,
    areaServed: ["Roraima", "Boa Vista", "Brasil"],
    description: "Proteção veicular em Roraima para carro, moto, frota e veículo de trabalho.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Mário Homem de Melo, 3999",
      addressLocality: "Boa Vista",
      addressRegion: "RR",
      postalCode: "69309-198",
      addressCountry: "BR",
    },
    telephone: "+55-95-99138-1037",
    email: "contato@hemissul.com.br",
    contactPoint: [
      { "@type": "ContactPoint", contactType: "sales", telephone: "+55-95-99138-1037", availableLanguage: "Portuguese" },
      { "@type": "ContactPoint", contactType: "emergency", telephone: "+55-800-940-2163", availableLanguage: "Portuguese" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "12:00" },
    ],
    sameAs: [
      "https://www.hemissul.com.br",
      "https://www.instagram.com/hemissuloficial/",
      "https://www.facebook.com/hemissuloficial/",
      "https://www.youtube.com/@hemissuloficial",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Proteção Veicular em Roraima | Hemissul",
    url: SITE_URL,
    inLanguage: "pt-BR",
  },
  faqSchema,
];

function Cta({
  children,
  content,
  segment,
  variant = "primary",
}: {
  children: React.ReactNode;
  content: string;
  segment?: string;
  variant?: "primary" | "dark" | "ghost";
}) {
  return (
    <a
      className={`hmx-cta hmx-cta--${variant}`}
      href={whatsappHref(content, segment)}
      data-event-name="whatsapp_click"
      data-button-position={content}
      data-vehicle-segment={segment ?? ""}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}

export default function Page() {
  return (
    <main className="hmx-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Reveal />

      <header className="hmx-header">
        <a className="hmx-logo" href="#inicio" aria-label="Hemissul Proteção Veicular">
          <Image src="/hemissul/logo-branca.png" alt="Hemissul Proteção Veicular" width={260} height={98} priority />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#prova">Prova social</a>
          <a href="#coberturas">Coberturas</a>
          <a href="#faq">Dúvidas</a>
        </nav>
        <Cta content="header_cta">Cotar agora gratuito</Cta>
      </header>

      <section className="hmx-hero" id="inicio">
        <div className="hmx-hero__bg">
          <Image src="/hemissul/social/reparo-2.png" alt="" width={650} height={810} priority sizes="100vw" />
        </div>
        <div className="hmx-hero__shade" />
        <div className="hmx-hero__content">
          <div className="hmx-hero__copy">
            <h1>Proteção veicular completa</h1>
            <p>
              Cobertura contra colisão, perda total, roubo, furto, danos a terceiros, assistência 24h, rastreamento e muito mais.
              Suporte ágil para quem depende do veículo todos os dias.
            </p>
            <div className="hmx-hero__actions">
              <Cta content="hero_cta">Solicitar cotação</Cta>
              <span>Cotação rápida, humana e sem compromisso.</span>
            </div>
          </div>

          <div className="hmx-car-stage" aria-label="Veículo protegido pela Hemissul em Roraima">
            <div className="hmx-car-stage__ring" />
            <Image src="/hemissul/hero-vehicle.webp" alt="Carro com proteção veicular Hemissul em Roraima" width={740} height={494} priority />
            <div className="hmx-float-card hmx-float-card--top">
              <strong>+13 mil</strong>
              <span>veículos protegidos</span>
            </div>
            <div className="hmx-float-card hmx-float-card--bottom">
              <strong>24h</strong>
              <span>assistência e suporte</span>
            </div>
          </div>
        </div>
        <div className="hmx-proof-strip">
          {["Atendimento humanizado", "Cobertura nacional", "Sem análise de perfil", "Rastreamento veicular", "Equipe presencial em Roraima", "Planos para várias rotinas"].map((item) => (
            <span key={item}>
              <Check aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="hmx-section hmx-social" id="prova">
        <div className="hmx-section__eyebrow">
          <span>Histórias reais</span>
          <a href="https://www.instagram.com/hemissulprotecaoveicular/" target="_blank" rel="noopener noreferrer">
            ver Instagram <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="hmx-section__head">
          <h2>Histórias reais. Resultados que comprovam nossa proteção.</h2>
          <p>
            Assista aos depoimentos dos nossos associados, veja fotos de antes e depois dos reparos e confira
            indenizações que demonstram nosso compromisso.
          </p>
        </div>
        <div className="hmx-social__rail">
          {socialProof.map((item) => {
            const card = (
              <>
                <Image src={item.image} alt={`${item.type}: ${item.name}`} width={420} height={560} sizes="(max-width: 900px) 78vw, 24vw" />
                <div className="hmx-social__overlay">
                  <span>{item.type}</span>
                  <strong>{item.name}</strong>
                  <small>{item.meta}</small>
                </div>
                {item.href ? (
                  <div className="hmx-play" aria-hidden="true">
                    <Play />
                  </div>
                ) : null}
              </>
            );

            return item.href ? (
              <a className="hmx-social-card" href={item.href} target="_blank" rel="noopener noreferrer" key={item.name}>
                {card}
              </a>
            ) : (
              <article className="hmx-social-card" key={item.name}>
                {card}
              </article>
            );
          })}
        </div>
      </section>

      <section className="hmx-section hmx-problem">
        <div className="hmx-problem__panel">
          <p className="hmx-kicker">Proteção para a vida real</p>
          <h2>Quando o inesperado acontece, rapidez e confiança fazem toda a diferença.</h2>
          <p>
            A Hemissul protege o seu veículo com soluções completas, suporte especializado e uma equipe comprometida
            em estar ao seu lado do início ao fim.
          </p>
          <Cta content="dor_cta" variant="dark">Quero proteger meu veículo</Cta>
        </div>
        <div className="hmx-problem__facts">
          {benefits.map((item) => (
            <span key={item}>
              <BadgeCheck aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="hmx-section hmx-coverage" id="coberturas">
        <div className="hmx-section__head hmx-section__head--center">
          <span>O que pode entrar no plano</span>
          <h2>Tudo o que você precisa para proteger o seu veículo.</h2>
          <p>Escolha o plano que faz sentido para a sua necessidade e conte com uma proteção pensada para dar mais tranquilidade no dia a dia.</p>
        </div>
        <div className="hmx-coverage__grid">
          {coverages.map(({ icon: Icon, title, bullets }, index) => (
            <article className="hmx-service-card" key={title}>
              <div className="hmx-service-card__top">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <ul>
                  {bullets.map((bullet) => (
                    <li key={bullet}>
                      <Check aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="hmx-section hmx-local">
        <div className="hmx-local__copy">
          <span>Boa Vista é a nossa casa</span>
          <h2>Nascemos em Boa Vista. Protegemos veículos em todo o Brasil.</h2>
          <p>
            Desde 2019, a Hemissul tem o propósito de levar conforto, segurança e tranquilidade a milhares de associados,
            com atendimento humanizado, transparência e uma equipe preparada para proteger seu patrimônio.
          </p>
          <Cta content="regional_cta" variant="dark">Falar com a equipe</Cta>
        </div>
        <div className="hmx-local__panel">
          <div>
            <MapPin aria-hidden="true" />
            <strong>Sede em Boa Vista</strong>
            <p>Av. Mário Homem de Melo, 3999, Buritis, Boa Vista — RR, CEP 69309-198</p>
          </div>
          <div>
            <Phone aria-hidden="true" />
            <strong>Atendimento e cotação</strong>
            <p>(95) 99138-1037 · Seg–Sex 8h–18h · Sáb 8h–12h</p>
          </div>
        </div>
      </section>

      <section className="hmx-section hmx-steps">
        <div className="hmx-section__head hmx-section__head--center">
          <span>Como funciona</span>
          <h2>Da cotação à proteção, sem enrolar.</h2>
        </div>
        <div className="hmx-steps__grid">
          {steps.map(([num, title, text]) => (
            <article key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hmx-section hmx-segments" id="segmentos">
        <div className="hmx-section__head hmx-section__head--center">
          <span>Planos sob medida</span>
          <h2>Proteção para cada maneira de usar o veículo.</h2>
          <p>Carro particular, ferramenta de trabalho, moto ou frota: cada rotina pede uma cotação com coberturas e condições bem explicadas.</p>
        </div>
        <div className="hmx-segments__grid">
          {segments.map(({ icon: Icon, title, text, image, content, segment }) => (
            <article key={title}>
              <Image src={image} alt={title} width={480} height={360} sizes="(max-width: 900px) 100vw, 33vw" />
              <div>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={whatsappHref(content, segment)} target="_blank" rel="noopener noreferrer">
                  Cotar agora <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="hmx-section hmx-trust">
        <div>
          <span>Confiança</span>
          <h2>Transparência para você escolher a proteção certa, sem surpresas.</h2>
          <div className="hmx-susep">
            <ShieldCheck aria-hidden="true" />
            <div className="hmx-susep__text">
              <strong>A Hemissul está devidamente cadastrada na SUSEP.</strong>
              <span>Superintendência de Seguros Privados.</span>
            </div>
          </div>
        </div>
        <div className="hmx-trust__list">
          {["Explicação clara das coberturas", "Condições apresentadas antes da adesão", "Atendimento humano", "Suporte depois da contratação"].map((item) => (
            <span key={item}>
              <Star aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="hmx-section hmx-faq" id="faq">
        <div className="hmx-section__head">
          <span>Dúvidas frequentes</span>
          <h2>Respostas para decidir com segurança.</h2>
        </div>
        <div className="hmx-faq__list">
          {faqItems.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>
                {question}
                <ChevronDown aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="hmx-final">
        <div className="hmx-final__bg" aria-hidden="true">
          <Image src="/hemissul/fachada.webp" alt="" fill sizes="100vw" />
        </div>
        <div>
          <h2>Seu veículo pode estar protegido antes do próximo imprevisto.</h2>
          <p>Fale com a equipe da Hemissul e receba uma cotação para sua rotina, seu veículo e seu orçamento.</p>
        </div>
        <Cta content="final_cta">Solicitar cotação</Cta>
      </section>

      <footer className="hmx-footer" id="footer">
        <div className="hmx-footer__brand">
          <div>
            <Image src="/hemissul/logo-branca.png" alt="Hemissul Proteção Veicular" width={240} height={90} />
            <p>Proteção se constrói com presença, clareza e resposta.</p>
          </div>
          <div className="hmx-footer__social" aria-label="Redes sociais">
            <a href="https://www.instagram.com/hemissuloficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Hemissul">
              <Instagram aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/hemissuloficial/" target="_blank" rel="noopener noreferrer" aria-label="Facebook da Hemissul">
              <Facebook aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com/@hemissuloficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube da Hemissul">
              <Youtube aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hmx-footer__grid">
          <div>
            <h3>Contatos</h3>
            {footerContacts.map(([label, value]) => (
              <p key={label}><strong>{label}</strong>{value}</p>
            ))}
            <p><strong>E-mail</strong>contato@hemissul.com.br</p>
          </div>
          <div>
            <h3>Endereço</h3>
            <p>Av. Mário Homem de Melo, 3999, Buritis, Boa Vista — RR, CEP 69309-198</p>
            <p><strong>CNPJ</strong>35.224.050/0001-37</p>
          </div>
          <div>
            <h3>Links</h3>
            <a href="#coberturas">Proteção veicular</a>
            <a href="#prova">Prova social</a>
            <a href="#faq">Dúvidas frequentes</a>
            <a href="https://www.hemissul.com.br" target="_blank" rel="noopener noreferrer">Site oficial</a>
            <a href={whatsappHref("footer_cta")} target="_blank" rel="noopener noreferrer">Cotação</a>
          </div>
        </div>

        <div className="hmx-footer__legal">
          <p>© 2026 Hemissul · Desenvolvido por <a className="hmx-footer__credit" href="https://metry.cc" target="_blank" rel="noopener noreferrer">metry.cc</a></p>
          <p>A Hemissul não é seguradora. É uma associação de proteção patrimonial mutualista. Benefícios e condições seguem o regulamento vigente.</p>
        </div>
      </footer>
    </main>
  );
}
