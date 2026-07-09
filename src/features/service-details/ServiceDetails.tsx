"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import { faqPageLeft, type FaqPageItem } from "@/data/faqPageData";
import ServiceDetailsSidebarImg from "@/assets/images/services/service-details-sidebar-img.png";
import ServiceDetailsImg1 from "@/assets/images/services/service-details-img-1.jpg";
import ServiceDetailsImgBoxImg1 from "@/assets/images/services/service-details-img-box-img-1.jpg";
import ServiceDetailsImgBoxImg2 from "@/assets/images/services/service-details-img-box-img-2.jpg";

const fadeVariants = ["fadeInLeft", "fadeInRight", "fadeInLeft", "fadeInRight", "fadeInLeft"] as const;

export default function ServiceDetails() {
    const [openId, setOpenId] = useState<string | null>("left-2");

    return (
        <>
            {/*Service Details Start*/}
            <section className="service-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5">
                            <div className="service-details__sidebar">
                                <div className="service-details__services-box">
                                    <h3 className="service-details__services-title">
                                        Our Services
                                    </h3>
                                    <ul className="service-details__services-list">
                                        <li>
                                            <Link href="/service-details">
                                                Rim & Wheel Repair
                                                <span className="icon-right-arrow"></span>
                                            </Link>
                                        </li>
                                        <li className="active" >
                                            <Link href="/service-details">
                                                Lights & Accessories
                                                <span className="icon-right-arrow"></span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                Brake Repair
                                                <span className="icon-right-arrow"></span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                Engine Diagnosis
                                                <span className="icon-right-arrow"></span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                Battery Solution
                                                <span className="icon-right-arrow"></span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                Emergency Service
                                                <span className="icon-right-arrow"></span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="service-details__sidebar-contact">
                                    <div className="service-details__sidebar-contact-img">
                                        <div className="inner">
                                            <Image src={ServiceDetailsSidebarImg} alt="image" />
                                        </div>
                                    </div>
                                    <div className="service-details__sidebar-contact-content">
                                        <div className="icon">
                                            <span className="icon-phone-call"></span>
                                        </div>
                                        <h2>
                                            <a href="tel:585858575084">
                                                +58 585 857 5084
                                            </a>
                                        </h2>
                                        <p>
                                            If You Need Any Help <br />
                                            Contact With Us
                                        </p>
                                    </div>
                                </div>
                                <div className="service-details__sidebar-download-box">
                                    <h3 className="service-details__services-title">
                                        Download
                                    </h3>
                                    <div className="service-details__sidebar-single-download">
                                        <ul className="clearfix list-unstyled">
                                            {[1, 2, 3].map((n) => (
                                                <li key={n}>
                                                    <div className="content-box">
                                                        <div className="icon">
                                                            <span className="far fa-file-pdf"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <h2>
                                                                <Link href="#">Pdf Download</Link>
                                                            </h2>
                                                            <p>
                                                                <Link href="#">Download</Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="btn-box">
                                                        <Link href="#">
                                                            <span className="far fa-cloud-download"></span>
                                                        </Link>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="service-details__left">
                                <div className="service-details__img">
                                    <Image src={ServiceDetailsImg1} alt="image" />
                                </div>
                                <h3 className="service-details__title-1">
                                    Engine Diagnosis
                                </h3>
                                <p className="service-details__text-1">
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa
                                </p>
                                <p className="service-details__text-2">
                                    Consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut laborer et dolore magna
                                    aliqua. Out enigma ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute
                                    inure dolor in the reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat
                                    null pariatur. Excepteur snit occaecat
                                    cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum.
                                </p>
                                <ul className="service-details__points-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-right-arrow"></span>
                                        </div>
                                        <p>
                                            It is a long established fact that a
                                            reader will be distr acted bioiiy
                                            the rea dablea
                                        </p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-right-arrow"></span>
                                        </div>
                                        <p>
                                            Distr acted bioiiy the rea dablea
                                            content of a page when looking at
                                            its layout
                                        </p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-right-arrow"></span>
                                        </div>
                                        <p>
                                            Content of a page when looking at
                                            its layout toile point
                                        </p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-right-arrow"></span>
                                        </div>
                                        <p>
                                            Reader will be distr acted bioiiy
                                            the rea dablea content of a page
                                            when looking
                                        </p>
                                    </li>
                                </ul>
                                <div className="service-details__img-box">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="service-details__img-box-single">
                                                <div className="service-details__img-box-img">
                                                    <Image src={ServiceDetailsImgBoxImg1} alt="image" />
                                                </div>
                                                <div className="service-details__img-box-content">
                                                    <div className="service-details__img-box-content-icon-and-title">
                                                        <div className="service-details__img-box-content-icon">
                                                            <span className="icon-customer-service"></span>
                                                        </div>
                                                        <h3 className="service-details__img-box-content-title">
                                                            Quality Full Work
                                                        </h3>
                                                    </div>
                                                    <p className="service-details__img-box-content-text">
                                                        Duis acute arura dolor
                                                        in reprehenderit in
                                                        voluptate velit esse
                                                        cillum dolore Velit esse
                                                        quam nihil molestiae
                                                        thos consequatur, Velia
                                                        ease chillum dolore
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="service-details__img-box-single">
                                                <div className="service-details__img-box-img">
                                                    <Image src={ServiceDetailsImgBoxImg2} alt="image" />
                                                </div>
                                                <div className="service-details__img-box-content">
                                                    <div className="service-details__img-box-content-icon-and-title">
                                                        <div className="service-details__img-box-content-icon">
                                                            <span className="icon-professional-success"></span>
                                                        </div>
                                                        <h3 className="service-details__img-box-content-title">
                                                            100% Work Satisfication
                                                        </h3>
                                                    </div>
                                                    <p className="service-details__img-box-content-text">
                                                        Duis acute arura dolor
                                                        in reprehenderit in
                                                        voluptate velit esse
                                                        cillum dolore Velit esse
                                                        quam nihil molestiae
                                                        thos consequatur, Velia
                                                        ease chillum dolore
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Accordion */}
                                <div className="faq-page__single">
                                    <div
                                        className="accrodion-grp faq-one-accrodion"
                                        data-grp-name="faq-one-accrodion"
                                    >
                                        {faqPageLeft.map((item: FaqPageItem, i: number) => (
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
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Service Details End*/}
        </>
    );
}