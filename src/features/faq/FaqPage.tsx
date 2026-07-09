"use client";
import { useState } from "react";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import { faqPageLeft, faqPageRight, type FaqPageItem } from "@/data/faqPageData";

const fadeVariants = ["fadeInLeft", "fadeInRight", "fadeInLeft", "fadeInRight", "fadeInLeft"] as const;

export default function FaqPage() {
    const [openId, setOpenId] = useState<string | null>("left-2"); // defaultActive item এর id

    const renderAccordion = (items: FaqPageItem[]) =>
        items.map((item, i) => (
            <FadeInAdvanced
                key={item.id}
                variant={fadeVariants[i % fadeVariants.length]}
                delay={i * 100}
                className={`accrodion ${openId === item.id ? "active" : ""}`}
                duration={1500}
            >
                <div
                    className="accrodion-title"
                    onClick={() => setOpenId(openId === item.id ? null : item.id)}
                >
                    <h4>{item.question}</h4>
                </div>
                {openId === item.id && (
                    <div className="accrodion-content">
                        <div className="inner">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                )}
            </FadeInAdvanced>
        ));

    return (
        <>
            {/*FAQ Page Start*/}
            <section className="faq-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="faq-page__single">
                                <div
                                    className="accrodion-grp faq-one-accrodion"
                                    data-grp-name="faq-one-accrodion"
                                >
                                    {renderAccordion(faqPageLeft)}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="faq-page__single">
                                <div
                                    className="accrodion-grp faq-one-accrodion"
                                    data-grp-name="faq-one-accrodion"
                                >
                                    {renderAccordion(faqPageRight)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*FAQ Page End*/}
        </>
    );
}