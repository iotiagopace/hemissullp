"use client";
import { useState } from "react";
import Link from "next/link";
import TextAnimation from "@/components/elements/TextAnimation";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import FaqTwoBg from "@/assets/images/backgrounds/faq-two-bg.jpg";
import type { FadeVariant } from "@/data/blogPageData";

interface FaqItem {
    id: number;
    question: string;
    answer: string;
    fadeVariant: FadeVariant;
    fadeDelay: number;
    defaultActive?: boolean;
}


const SHARED_ANSWER =
    "we offer emergency repair services to help you get back on the road as quickly as possible. Our skilled mechanics are available to handle urgent issues, whether it's a breakdown.";

const faqs: FaqItem[] = [
    {
        id: 1,
        question: "What Is the Difference Between Paint & Wrap?",
        answer: SHARED_ANSWER,
        fadeVariant: "fadeInLeft",
        fadeDelay: 0,
    },
    {
        id: 2,
        question: "What Types of Wraps Do You Offer?",
        answer: SHARED_ANSWER,
        fadeVariant: "fadeInRight",
        fadeDelay: 100,
        defaultActive: true,
    },
    {
        id: 3,
        question: "Do You Offer Warranty on Wraps?",
        answer: SHARED_ANSWER,
        fadeVariant: "fadeInLeft",
        fadeDelay: 200,
    },
    {
        id: 4,
        question: "How Long Does the Wrapping Process Take?",
        answer: SHARED_ANSWER,
        fadeVariant: "fadeInRight",
        fadeDelay: 300,
    },
    {
        id: 5,
        question: "Can I book an appointment online?",
        answer: SHARED_ANSWER,
        fadeVariant: "fadeInLeft",
        fadeDelay: 400,
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function FaqTwo() {
    const [activeId, setActiveId] = useState<number | null>(
        faqs.find((f) => f.defaultActive)?.id ?? null
    );

    const handleClick = (item: FaqItem) => {
        if (activeId === item.id) return;
        setActiveId(item.id);
    };

    return (
        <>
            {/* Faq Two Start */}
            <section className="faq-two">
                <div
                    className="faq-two__bg"
                    style={{ backgroundImage: `url(${FaqTwoBg.src})` }}
                ></div>
                <div className="container">
                    <div className="faq-two__inner">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="faq-two__left">
                                    <div className="section-title text-left sec-title-animation animation-style2">
                                        <div className="section-title__tagline-box">
                                            <p className="section-title__tagline">
                                                Wrap FAQs
                                            </p>
                                            <div className="section-title__tagline-shape"></div>
                                        </div>
                                        <h2 className="section-title__title">
                                            <TextAnimation style="s2">
                                                Quick Answers About Wrap
                                                Services
                                            </TextAnimation>
                                        </h2>
                                    </div>
                                    <div
                                        className="accrodion-grp faq-one-accrodion"
                                        data-grp-name="faq-one-accrodion"
                                    >
                                        {faqs.map((item) => {
                                            const isActive = activeId === item.id;
                                            return (
                                                <FadeInAdvanced
                                                    variant={item.fadeVariant}
                                                    delay={item.fadeDelay}
                                                    duration={1500}
                                                    key={item.id}
                                                    className={`accrodion${isActive ? " active" : ""}`}
                                                >
                                                    <div
                                                        className="accrodion-title"
                                                        onClick={() => handleClick(item)}
                                                    >
                                                        <h4>{item.question}</h4>
                                                    </div>
                                                    <div
                                                        className="accrodion-content"
                                                        style={{
                                                            display: isActive ? "block" : "none",
                                                        }}
                                                    >
                                                        <div className="inner">
                                                            <p>{item.answer}</p>
                                                        </div>
                                                        {/* /.inner */}
                                                    </div>
                                                </FadeInAdvanced>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6"></div>
                        </div>
                        <div className="faq-two__info-box">
                            <div className="faq-two__info-icon">
                                <span className="icon-question"></span>
                            </div>
                            <h5 className="faq-two__info-title">
                                Didn't Find What You're Looking For?
                            </h5>
                            <p className="faq-two__info-text">
                                Send your questions to our wrap team we're here
                                to help.
                            </p>
                            <div className="faq-two__btn-box">
                                <Link href="/contact" className="thm-btn">
                                    <span>Send Message</span>
                                    <i className="fal fa-angle-double-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Faq Two End */}
        </>
    );
}