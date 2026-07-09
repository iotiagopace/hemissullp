"use client";
import Image from "next/image";
import { useState } from "react";
import TextAnimation from "@/components/elements/TextAnimation";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import FaqOneImg1 from "@/assets/images/resources/faq-one-img-1.jpg";
import type { FadeVariant } from "@/data/blogPageData";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FaqItem {
    id: number;
    question: string;
    answer: string;
    fadeVariant: FadeVariant;
    fadeDelay: number;
    defaultActive?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SHARED_ANSWER =
    "we offer emergency repair services to help you get back on the road as quickly as possible. Our skilled mechanics are available to handle urgent issues, whether it's a breakdown.";

const faqs: FaqItem[] = [
    {
        id: 1,
        question: "What types of payment do you accept?",
        answer: SHARED_ANSWER,
        fadeVariant: "fadeInLeft",
        fadeDelay: 0,
    },
    {
        id: 2,
        question: "Do you offer emergency repair services?",
        answer: SHARED_ANSWER,
        fadeVariant: "fadeInRight",
        fadeDelay: 100,
        defaultActive: true,
    },
    {
        id: 3,
        question: "Can I get a free estimate before the work starts?",
        answer: SHARED_ANSWER,
        fadeVariant: "fadeInLeft",
        fadeDelay: 200,
    },
    {
        id: 4,
        question: "How much will the repair cost?",
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

export default function FaqOne() {
    const [activeId, setActiveId] = useState<number | null>(
        faqs.find((f) => f.defaultActive)?.id ?? null
    );

    const handleClick = (item: FaqItem) => {
        if (activeId === item.id) return;
        setActiveId(item.id);
    };

    return (
        <>
            {/* FAQ One Start */}
            <section className="faq-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <div className="faq-one__left">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <p className="section-title__tagline">
                                            Service FAQ
                                        </p>
                                        <div className="section-title__tagline-shape"></div>
                                    </div>
                                    <h2 className="section-title__title">
                                        <TextAnimation style="s2">
                                            Common Car Repair Asked Questions !
                                        </TextAnimation>
                                    </h2>
                                </div>
                                <p className="faq-one__left-text">
                                    Have questions about car repair or service?
                                    We've answered the most common concerns for
                                    you here. Have questions about car repair or
                                    service?
                                </p>
                                <div className="faq-one__img">
                                    <Image src={FaqOneImg1} alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="faq-one__right">
                                {/* faq-one-accrodion added statically — jQuery normally adds
                                    it via Self.addClass(data-grp-name). Required for CSS. */}
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
                                                className={`accrodion ${isActive ? " active" : ""}`}
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
                    </div>
                </div>
            </section>
            {/* FAQ One End */}
        </>
    );
}