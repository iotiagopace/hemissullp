"use client";

import { useEffect } from "react";

/**
 * Reveal — anima a entrada de seções e cards conforme entram na viewport.
 * Sem dependências: usa IntersectionObserver e classes CSS (hemissul.css).
 * Respeita prefers-reduced-motion e degrada bem sem JS (conteúdo visível).
 */
const REVEAL_SELECTORS = [
  ".hmx-social .hmx-section__eyebrow",
  ".hmx-social .hmx-section__head",
  ".hmx-social__rail > *",
  ".hmx-problem__panel",
  ".hmx-problem__facts",
  ".hmx-coverage .hmx-section__head",
  ".hmx-coverage__grid > *",
  ".hmx-local__copy",
  ".hmx-local__panel",
  ".hmx-steps .hmx-section__head",
  ".hmx-steps__grid > *",
  ".hmx-segments .hmx-section__head",
  ".hmx-segments__grid > *",
  ".hmx-trust > *",
  ".hmx-faq .hmx-section__head",
  ".hmx-faq__list > *",
  ".hmx-final > *",
  ".hmx-footer__grid > *",
];

export default function Reveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const nodes = new Set<HTMLElement>();
    REVEAL_SELECTORS.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => nodes.add(el));
    });

    // Stagger: aplica atraso conforme a posição do elemento entre os irmãos revelados.
    const perParent = new Map<Element, number>();
    nodes.forEach((el) => {
      const parent = el.parentElement;
      if (!parent) return;
      const index = perParent.get(parent) ?? 0;
      perParent.set(parent, index + 1);
      el.classList.add("hmx-reveal");
      el.style.transitionDelay = `${Math.min(index, 6) * 80}ms`;
    });

    document.body.classList.add("hmx-anim");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hmx-reveal--in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
