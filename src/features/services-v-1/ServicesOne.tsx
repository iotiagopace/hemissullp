"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import TextAnimation from "@/components/elements/TextAnimation";
import {
    servicesOneItems,
    servicesSectionTitle,
    ServicesOneShapeBg,
} from "@/data/servicesOneData";

export default function ServicesOne() {
    // ── Exact old project hover-image pattern ─────────────────────────────────
    const containerRef = useRef<HTMLLIElement>(null);
    const [xPosition, setXPosition] = useState<number>(0);
    const [mouseEnter, setMouseEnter] = useState<number>(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>): void => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            setXPosition(x);
        }
    };

    return (
        <>
            {/*Services One Start */}
            <section className="services-one" id="services">
                <div
                    className="services-one__shape-bg"
                    style={{ backgroundImage: `url(${ServicesOneShapeBg.src})` }}
                ></div>

                <div className="container">
                    {/* Section Title */}
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box two">
                            <p className="section-title__tagline">
                                {servicesSectionTitle.tagline}
                            </p>
                            <div className="section-title__tagline-shape"></div>
                        </div>
                        <h2 className="section-title__title">
                            <TextAnimation style="s1">
                                {servicesSectionTitle.title}
                            </TextAnimation>
                        </h2>
                    </div>

                    {/* Services List */}
                    <div className="services-one__inner">
                        <ul className="services-one__services-list list-unstyled">
                            {servicesOneItems.map((item) => (
                                <li
                                    key={item.id}
                                    ref={containerRef}
                                    className="hover-item wow fadeInUp"
                                    data-wow-delay="0ms"
                                    data-wow-duration="1500ms"
                                    style={{ position: "relative" }}
                                    onMouseMove={handleMouseMove}
                                    onMouseEnter={() => setMouseEnter(item.id)}
                                    onMouseLeave={() => setMouseEnter(0)}
                                >
                                    {/* Icon + Title */}
                                    <div className="services-one__icon-and-title-box">
                                        <div className="services-one__icon">
                                            <span className={item.icon}></span>
                                        </div>
                                        <div className="services-one__title-box">
                                            <div className="services-one__count"></div>
                                            <h3 className="services-one__title">
                                                <Link href={item.link}>
                                                    {item.title}
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Text + Button */}
                                    <div className="services-one__text-and-btn-box">
                                        <p className="services-one__text">
                                            {item.text}
                                        </p>
                                        <div className="services-one__btn-box">
                                            <Link href={item.link}>
                                                View Details
                                                <span className="fal fa-angle-double-right"></span>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Hover Image — old project exact style */}
                                    <div
                                        className="hover-item__box"
                                        style={{
                                            opacity: mouseEnter === item.id ? 1 : 0,
                                            left: `${xPosition + 307}px`,
                                        }}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            className="hover-item__box-img" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            {/*Services One End */}
        </>
    );
}