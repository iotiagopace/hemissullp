# Auditoria e handoff — Landing Page Hemissul

Data: 2026-07-09  
Projeto: Nova landing page de campanha para Hemissul Proteção Veicular  
Diretório: `automart-car-repair-washing-ser-nextjs-template-2026-06-25-00-46-13-utc/automart`

## Contexto

O objetivo é criar uma landing page de alta conversão para cotação via WhatsApp, usando o template Automart comprado no Envato como base visual/técnica, mas corrigindo os problemas da LP antiga em produção.

URLs de referência:

- LP antiga: `https://landing.hemissul.com.br/`
- Site novo institucional: `https://hemissul.vercel.app/`
- Brief original: `/Users/tiagopace/Downloads/brief-codex-nova-lp-hemissul.md`

## Principais pedidos do usuário

- Usar a logo e o template disponíveis na pasta.
- Evitar aparência genérica de IA.
- Não usar o texto/selo acima do H1 da hero.
- Hero com o título: `Proteção veicular completa`.
- CTA superior: `Cotar agora gratuito`.
- Página de alta conversão.
- Usar prova social real da LP antiga, especialmente vídeos/comentários do Instagram.
- Trazer conteúdos esquecidos da LP antiga, como `Ferramenta de trabalho`.
- Incluir todas as coberturas, com iconografia, não apenas 3 cards.
- Separar iconografia resumida da hero de coberturas detalhadas.
- Corrigir blocos quebrados em desktop: seção de localização, CTA final e rodapé.
- Criar rodapé com dados do site novo: redes sociais, CNPJ, contato, endereço, 2026, desenvolvido por metry e aviso legal.

## O que foi implementado

### Hero

- H1 alterado para `Proteção veicular completa`.
- Removido o texto acima do título da hero.
- Fonte do H1 suavizada em peso e escala.
- CTA superior alterado para `Cotar agora gratuito`.
- Adicionada iconografia resumida da hero com as 6 coberturas principais.
- CTA principal da hero aponta para WhatsApp com UTMs.

### WhatsApp e rastreio

- Número padronizado nos CTAs da LP: `5595991322532`.
- Todos os CTAs usam `wa.me` com:
  - `utm_source=landing`
  - `utm_medium=whatsapp`
  - `utm_campaign=protecao_veicular_roraima`
  - `utm_content` por posição do botão
  - `vehicle_segment` quando aplicável

Observação: o site institucional novo usa o WhatsApp comercial `(95) 99138-1037`, enquanto a LP antiga expunha `5595991322532` e também um placeholder `5595999999999`. Validar o número oficial final antes de publicar.

### Prova social

Foram extraídos assets reais da LP antiga:

- `/testimonial-thumb/1` → `public/hemissul/social/jardson.png`
- `/testimonial-thumb/2` → `public/hemissul/social/jao.png`
- `/testimonial-thumb/34` → `public/hemissul/social/reparo-1.png`
- `/testimonial-thumb/35` → `public/hemissul/social/reparo-2.png`

Links de Instagram trazidos da LP antiga:

- `https://www.instagram.com/p/DXe0MhagCeq/`
- `https://www.instagram.com/p/DWCm1YGDnHG/`

### Coberturas

Seção refeita para incluir as 6 coberturas:

- Colisão e perda total
- Roubo e furto
- Danos a terceiros
- Danos da natureza
- Assistência 24h
- Rastreamento

Cada card agora tem:

- Faixa superior escura numerada
- Ícone lucide
- Título
- 3 bullets com check
- Texto juridicamente mais seguro, evitando promessas absolutas

Decisão visual validada em rodada posterior:

- Não duplicar iconografia fora e dentro do card.
- Remover emoji/ícone do topo escuro do card.
- Manter apenas o número no topo escuro e o ícone lucide no corpo claro.
- Manter os serviços/benefícios listados dentro de cada card com bullets e checks.

### Planos sob medida / segmentos

Seção inclui:

- Carros particulares
- Ferramenta de trabalho
- Motos
- Frotas e empresas

Foram baixadas imagens reais usadas ou inspiradas pela LP antiga:

- `public/hemissul/segment-carro.webp`
- `public/hemissul/segment-app.jpg`
- `public/hemissul/segment-moto.jpg`
- `public/hemissul/segment-frota.jpg`

### Seção local

O banner anterior estava visualmente quebrado em desktop. Foi substituído por uma seção em duas colunas:

- Coluna de narrativa: Boa Vista, atendimento local, assistência nacional e clareza
- Coluna de dados: sede e atendimento/cotação

Rodada posterior:

- O painel de sede/telefone não deve esticar verticalmente com muito vazio em desktop.
- A grade local foi ajustada para alinhar pelo topo, com padding menor nos cards escuros.

### Como funciona

Rodada posterior:

- O título estava deslocado para a direita em desktop.
- O cabeçalho da seção foi ajustado para ficar centralizado, acima das quatro etapas.

### Rodapé

Dados extraídos do site novo `https://hemissul.vercel.app/`:

- CNPJ: `35.224.050/0001-37`
- Endereço: Av. Mário Homem de Melo, 3999, Buritis, Boa Vista — RR, CEP 69309-198
- Assistência 24h: `0800 940 2163`
- Pronta resposta: `(95) 99157-4355`
- Comercial: `(95) 4020-1719`
- Cotação/WhatsApp: `(95) 99138-1037`
- E-mail: `contato@hemissul.com.br`
- Instagram: `https://www.instagram.com/hemissuloficial/`
- Facebook: `https://www.facebook.com/hemissuloficial/`
- YouTube: `https://www.youtube.com/@hemissuloficial`

Aviso legal incluído:

> A Hemissul não é seguradora. É uma associação de proteção patrimonial mutualista. Benefícios e condições seguem o regulamento vigente.

Crédito incluído:

> © 2026 Hemissul · Desenvolvido por metry.cc

### SEO e schema

Foram configurados:

- Title
- Meta description
- Canonical
- Open Graph
- Twitter card
- JSON-LD: LocalBusiness, WebPage e FAQPage

## Arquivos alterados/criados

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/hemissul.css`
- `public/hemissul/*`
- `public/hemissul/social/*`
- `HEMISSUL_LP_AUDITORIA_HANDOFF.md`

## Verificações realizadas

Comandos executados com sucesso:

```bash
npm run lint
npm run build
```

O build está compilando com Next.js 16.2.4.

## Problemas encontrados durante o trabalho

- Muitos assets do template Envato eram placeholders com texto como `600x600`, `860x775`, `380x350`, etc.
- A primeira versão descartou demais o template visual e ficou pobre.
- A segunda versão trouxe prova social, mas ainda duplicou informações de cobertura.
- O navegador/screenshot do ambiente Codex ficou instável em algumas verificações finais.
- O footer passou por mais de uma rodada porque estava visualmente confuso em desktop.

## Pontos que ainda merecem revisão visual

1. Hero
   - Confirmar se a imagem principal e a hierarquia estão agradando em desktop largo.
   - Confirmar se a iconografia resumida na hero deve ficar antes ou depois do CTA.

2. Coberturas
   - Validar se os bullets estão corretos juridicamente e comercialmente.
   - Confirmar se a seção deve manter fundo escuro ou voltar para claro.

3. Prova social
   - Idealmente substituir previews por embeds ou vídeos hospedados, se a equipe tiver permissão e arquivos.
   - Incluir mais comentários reais do Instagram se forem fornecidos.

4. WhatsApp
   - Validar número final: LP antiga tinha `5595991322532`; site novo indica `(95) 99138-1037`.

5. SUSEP
   - O brief pede mencionar cadastro, mas recomenda exibir número/comprovante oficial.
   - Não foi inventado número. Inserir somente após validação da cliente.

6. Footer
   - Validar se links de privacidade, cookies e termos terão URLs reais.

## Recomendações para próxima rodada no Claude Code

- Priorizar inspeção visual com screenshots em desktop largo, notebook, tablet e mobile.
- Evitar grandes refactors de conteúdo antes de resolver layout.
- Não duplicar blocos de informação: hero resume; coberturas detalham; FAQ esclarece.
- Manter linguagem juridicamente cuidadosa:
  - Evitar `100% garantido`
  - Evitar `sem burocracia`
  - Evitar `melhor do mercado`
  - Evitar `seguro`
  - Usar `conforme plano contratado`, `regulamento vigente`, `condições apresentadas na proposta`
- Confirmar com o cliente:
  - WhatsApp oficial
  - número/comprovante SUSEP
  - links de política, cookies e termos
  - permissão de uso dos vídeos/provas sociais do Instagram

## Rodada Claude Code — 2026-07-09 (inspeção visual + animações)

Contexto: usuário validou WhatsApp, SUSEP e prova social como corretos. Layout aprovado. Pedido: inspecionar, refinar sem mudança brusca de layout e adicionar animações.

Inspeção visual realizada em desktop (1440) e mobile (375), todas as seções, via preview do dev server. Layout íntegro nos dois breakpoints.

Implementado:

- **Animações** (`src/app/Reveal.tsx` novo + bloco no fim de `src/app/hemissul.css`):
  - Scroll reveal (fade + subida) com stagger nas seções e cards, via IntersectionObserver, sem dependências externas.
  - Entrada da hero no carregamento (CSS keyframes `hmxRise`).
  - Flutuação sutil dos float cards da hero (`hmxFloat`) e pulso no botão flutuante do WhatsApp (`hmxPulse`).
  - Hover-lift nos cards de cobertura e segmentos; zoom leve na imagem do segmento.
  - Tudo com guarda `prefers-reduced-motion` e degradação sem JS (conteúdo visível).
- **Ícone** do segmento "Ferramenta de trabalho": `MessageCircle` → `Briefcase`.
- **Hero mantido** com a foto de colisão por decisão do usuário (não repropor troca).

Verificações: `npm run lint` limpo, `npm run build` compilando (Next 16.2.4), sem erros no console do browser.

Observação (21st.dev / MCP magic): o servidor retornou erro de protocolo (serialização) nas duas chamadas; as animações foram implementadas à mão no mesmo padrão.

Pendências ainda em aberto (não executadas — exigem decisão/conteúdo do cliente):

- Seção "Confiança" contém copy que parece nota interna de dev vazada ao usuário final: "…antes da publicação final, vale incluir o número ou comprovante oficial nesta área." Como o SUSEP foi dado como correto mas sem número em mãos, revisar/limpar esse texto antes de publicar.
- Painel escuro da seção "local" fica com bastante vazio vertical em desktop largo.
- Links de política/cookies/termos ainda sem URLs reais.

## Rodada Claude Code — 2026-07-09 (refinamentos da auditoria SEO + limpeza p/ Vercel)

Base: auditoria SEO da Metry sobre a LP antiga (`Auditoria Landing Page.pdf`). Cruzamento item a item confirmou que os itens CRÍTICO/ALTO já estavam entregues. Aplicados 4 refinamentos rápidos aprovados pelo cliente:

1. "Roraima" adicionado ao subtítulo da hero (geo-targeting sem alterar o H1 pedido).
2. FAQ expandido de 5 → 8 perguntas (objeções de preço, vistoria/análise e carência). Alimenta também o FAQPage schema.
3. Link "Site oficial" (https://www.hemissul.com.br) adicionado no rodapé — confirmar domínio final com o cliente.
4. Meta description passou a citar "Boa Vista, Roraima" explicitamente (page.tsx e layout.tsx).

Limpeza do repositório para deploy só da LP:

- Removidas todas as rotas demo do template Automart em `src/app`: `(pages)/`, `index-dark`, `index-one-page`, `index2`, `index2-one-page`, `index3`, `index3-one-page` e `api/` (contato via nodemailer — a LP é WhatsApp-only).
- Restou em `src/app` apenas: `page.tsx`, `layout.tsx`, `hemissul.css`, `Reveal.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `favicon.ico`.
- Build agora gera só `/` e `/_not-found`. `lint` e `build` limpos.

Deploy na Vercel: usar Root Directory = pasta `.../automart` (onde está o `package.json`). Framework Next.js detectado automaticamente. Sem env vars necessárias (API de contato removida). O ideal é inicializar o git dentro da própria pasta `automart` para evitar o aninhamento e o espaço no nome da pasta raiz.

Itens estratégicos NÃO apresentados agora (dependem do cliente): tabela de planos/faixa de preço, depoimentos em vídeo com transcrição, seção comparativo proteção vs seguro, LPs variantes por segmento, blog de apoio SEO.

Nota: o botão "N" no canto é o indicador de dev tools do Next.js (só em `next dev`, nunca em produção); já ocultado por CSS em `hemissul.css`.
