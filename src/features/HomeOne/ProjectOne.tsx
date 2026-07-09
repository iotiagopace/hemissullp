"use client";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import TextAnimation from "@/components/elements/TextAnimation";
import Project11 from "@/assets/images/project/project-1-1.jpg";
import Project12 from "@/assets/images/project/project-1-2.jpg";
import Project13 from "@/assets/images/project/project-1-3.jpg";
import Project14 from "@/assets/images/project/project-1-4.jpg";
import Project15 from "@/assets/images/project/project-1-5.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
    image: StaticImageData;
    title: string;
    subTitle: string;
    popupHref: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
    { image: Project11, title: "Brake Check & Repair", subTitle: "Prime Auto Service", popupHref: "assets/images/project/project-1-1.jpg" },
    { image: Project12, title: "Brake Check & Repair", subTitle: "Prime Auto Service", popupHref: "assets/images/project/project-1-2.jpg" },
    { image: Project13, title: "Brake Check & Repair", subTitle: "Prime Auto Service", popupHref: "assets/images/project/project-1-3.jpg" },
    { image: Project14, title: "Brake Check & Repair", subTitle: "Prime Auto Service", popupHref: "assets/images/project/project-1-4.jpg" },
    { image: Project15, title: "Brake Check & Repair", subTitle: "Prime Auto Service", popupHref: "assets/images/project/project-1-5.jpg" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProjectOne() {
    const swiperRef = useRef<SwiperType | null>(null);


    return (
        <>
            {/* Project One Start */}
            <section className="project-one">
                <div className="container">
                    <div className="project-one__top">
                        <div className="project-one__top-left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">
                                        OUR PROJECT
                                    </p>
                                    <div className="section-title__tagline-shape"></div>
                                </div>
                                <h2 className="section-title__title">
                                    <TextAnimation style="s2">
                                        Gallery of Trusted Repairs <br />
                                        Real Cars, Real Results
                                    </TextAnimation>
                                </h2>
                            </div>
                        </div>
                        <div className="project-one__nav">
                            <div onClick={() => swiperRef.current?.slidePrev()} className="project-one__nav-prev">
                                <span>
                                    <i className="fa fa-solid fa-arrow-left left" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div onClick={() => swiperRef.current?.slideNext()} className="project-one__nav-next">
                                <span>
                                    <i className="fa fa-solid fa-arrow-right right" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-one__bottom">
                    <div className="container">
                        <div className="swiper-container project-one__carousel">
                            <Swiper
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                modules={[Autoplay]}
                                spaceBetween={30}
                                loop={true}
                                speed={1000}
                                grabCursor={true}
                                autoplay={{
                                    delay: 10000,
                                    disableOnInteraction: false,
                                }}

                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    992: { slidesPerView: 3 },
                                    1200: { slidesPerView: 3 },
                                    1320: { slidesPerView: 4 },
                                }}
                            >
                                {projects.map((project, index) => (
                                    <SwiperSlide key={index}>
                                        {/* Project One Single Start */}
                                        <div className="project-one__single">
                                            <div className="project-one__img-box">
                                                <div className="project-one__img">
                                                    <Image src={project.image} alt={project.title} />
                                                    <div className="project-one__content-box">
                                                        <div className="project-one__content">
                                                            <h3 className="project-one__title">
                                                                <Link href="/project-details">
                                                                    {project.title}
                                                                </Link>
                                                            </h3>
                                                            <p className="project-one__sub-title">
                                                                {project.subTitle}
                                                            </p>
                                                        </div>
                                                        <div className="project-one__arrow">
                                                            <a href={project.popupHref} className="img-popup">
                                                                <span className="fas fa-arrow-right"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Project One Single End */}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            {/* Project One End */}
        </>
    );
}