export const WHATSAPP_NUMBER = "5595991381037";
export const whatsappText = "Olá! Vim pela landing page e quero fazer uma cotação de proteção veicular. 🚗";

/** Monta o link do WhatsApp com UTMs de rastreio. Espaços saem como %20 (padrão aceito pelo wa.me). */
export const whatsappHref = (content: string, segment?: string) => {
  const params = new URLSearchParams({
    text: whatsappText,
    utm_source: "landing",
    utm_medium: "whatsapp",
    utm_campaign: "protecao_veicular_roraima",
    utm_content: content,
  });

  if (segment) params.set("vehicle_segment", segment);
  return `https://wa.me/${WHATSAPP_NUMBER}?${params.toString().replace(/\+/g, "%20")}`;
};
