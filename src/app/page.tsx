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
    emoji: "🛡️",
    title: "Colisão e perda total",
    bullets: [
      "Apoio para reparos previstos no regulamento",
      "Análise para indenização conforme o plano",
      "Orientação durante o processo de atendimento",
    ],
  },
  {
    icon: BadgeCheck,
    emoji: "🔒",
    title: "Roubo e furto",
    bullets: [
      "Proteção em situações de roubo ou furto",
      "Busca, localização e análise do evento",
      "Cobertura conforme condições contratadas",
    ],
  },
  {
    icon: Handshake,
    emoji: "👥",
    title: "Danos a terceiros",
    bullets: [
      "Suporte para danos materiais a terceiros",
      "Mais previsibilidade em caso de acidente",
      "Condições conforme o plano escolhido",
    ],
  },
  {
    icon: Clock3,
    emoji: "⏰",
    title: "Assistência 24h",
    bullets: [
      "Atendimento para emergências previstas",
      "Suporte em todo o território nacional",
      "Canais de atendimento quando você precisar",
    ],
  },
  {
    icon: Radar,
    emoji: "📍",
    title: "Rastreamento",
    bullets: [
      "Localização e monitoramento do veículo",
      "Mais controle para o associado",
      "Tecnologia como camada extra de segurança",
    ],
  },
];

const benefits = [
  "Roubo e furto",
  "Danos a terceiros",
  "Carro, moto, app e frota",
  "Atendimento em Roraima",
  "Suporte em território nacional",
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
  { icon: CarFront, title: "Carros particulares", text: "Proteção para família, trabalho, viagens e rotina em Boa Vista.", image: "/hemissul/segment-carro.webp", content: "carro_cta", segment: "carro" },
  { icon: Briefcase, title: "Motorista de aplicativo", text: "Para quem roda de app e depende do veículo para gerar renda todos os dias.", image: "/hemissul/segment-app.jpg", content: "app_cta", segment: "motorista_app" },
  { icon: Bike, title: "Motos", text: "Suporte para motociclistas que dependem da moto todos os dias.", image: "/hemissul/segment-moto.jpg", content: "moto_cta", segment: "moto" },
  { icon: Building2, title: "Frotas e empresas", text: "Cotação para operações com múltiplos veículos e necessidade de controle.", image: "/hemissul/segment-frota.jpg", content: "frota_cta", segment: "frota" },
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
  ["A Hemissul atende somente em Roraima?", "Não. A Hemissul tem presença em Roraima, mas oferece atendimento e suporte em todo o território nacional, conforme a rede disponível e as condições do plano contratado."],
  ["A proteção cobre roubo, furto e colisão?", "Os planos podem incluir roubo, furto, colisão, reparo e perda total. A cobertura exata depende do plano contratado e das condições apresentadas na proposta."],
  ["Tem assistência 24h?", "Sim. A Hemissul oferece assistência 24h para dar suporte em situações de emergência previstas no plano."],
  ["Proteção veicular é a mesma coisa que seguro?", "Não. Proteção veicular e seguro tradicional são modelos diferentes. A equipe explica como funciona a associação, quais coberturas se aplicam e quais são as regras do plano."],
  ["Empresas podem contratar para frota?", "Sim. Empresas com mais de um veículo podem solicitar cotação para frota e receber uma proposta conforme a necessidade da operação."],
  ["Quanto custa para proteger meu veículo?", "O valor depende do veículo, do perfil de uso e do plano escolhido. A cotação é personalizada e feita pelo WhatsApp, sem compromisso, com as condições apresentadas na proposta."],
  ["Preciso fazer vistoria ou análise do veículo?", "Em geral há uma análise do veículo antes da adesão. A equipe explica cada etapa durante a cotação, conforme as regras do plano contratado."],
  ["Existe carência ou prazo de espera?", "Alguns benefícios podem ter prazos ou regras específicas previstas no regulamento vigente. A equipe apresenta todas as condições antes da adesão para você decidir com segurança."],
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
              Cobertura para colisão, roubo, furto, perda total, terceiros, assistência 24h e rastreamento,
              com atendimento próximo em Roraima para quem depende do veículo todos os dias.
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
          {["Equipe presencial em Roraima", "Atendimento nacional", "Rastreamento veicular", "Planos para várias rotinas"].map((item) => (
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
          <h2>Vídeos e reparos reais de quem já é associado.</h2>
          <p>
            Depoimentos, indenizações e reparos mostram como a Hemissul responde na hora que o associado mais precisa,
            quando o veículo deixa de ser só transporte e vira prioridade.
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
          <h2>Um acidente, uma pane ou um roubo não avisam antes.</h2>
          <p>
            Quem usa o veículo para trabalhar, levar a família ou manter uma empresa rodando precisa de clareza antes da
            contratação e suporte quando algo acontece. A Hemissul atua nessa ponte: orientação, cobertura e atendimento
            próximo para quem circula em Roraima.
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
          <h2>Cobertura completa para seu veículo</h2>
          <p>As coberturas e benefícios dependem do plano contratado e das condições apresentadas na proposta.</p>
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
          <h2>Atendimento local, assistência nacional e clareza antes da contratação.</h2>
          <p>
            Desde 2019, a Hemissul trabalha para levar conforto, segurança e tranquilidade aos associados, com regras claras,
            atendimento humano e suporte para quem circula em Roraima e também em outras regiões do Brasil.
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
          <h2>Clareza vende mais do que promessa exagerada.</h2>
          <div className="hmx-susep">
            <ShieldCheck aria-hidden="true" />
            <div className="hmx-susep__text">
              <strong>A Hemissul está cadastrada na SUSEP.</strong>
              <span>
                As coberturas dependem do plano contratado e das condições apresentadas na proposta, sem promessas absolutas.
              </span>
            </div>
          </div>
        </div>
        <div className="hmx-trust__list">
          {["Explicação clara das coberturas", "Condições apresentadas antes da adesão", "Atendimento humano pelo WhatsApp", "Suporte depois da contratação"].map((item) => (
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
