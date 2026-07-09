"use client";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import TextAnimation from "@/components/elements/TextAnimation";
import ServicesV2Img1 from "@/assets/images/services/services-v2-img1.jpg";
import ServicesV2Img2 from "@/assets/images/services/services-v2-img2.jpg";
import ServicesV2Img3 from "@/assets/images/services/services-v2-img3.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Service {
    image: StaticImageData;
    popupHref: string;
    title: string;
    text: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services: Service[] = [
    {
        image: ServicesV2Img1,
        popupHref: "assets/images/services/services-v2-img1.jpg",
        title: "Luxury Wash and Wax",
        text: "Experience the perfect blend of thorough washing & glossy protection with our Luxury Wash & Wax.",
    },
    {
        image: ServicesV2Img2,
        popupHref: "assets/images/services/services-v2-img2.jpg",
        title: "Underbody wash",
        text: "Experience the perfect blend of thorough washing & glossy protection with our Luxury Wash & Wax.",
    },
    {
        image: ServicesV2Img3,
        popupHref: "assets/images/services/services-v2-img3.jpg",
        title: "Waterless eco wash",
        text: "Experience the perfect blend of thorough washing & glossy protection with our Luxury Wash & Wax.",
    },
    {
        image: ServicesV2Img2,
        popupHref: "assets/images/services/services-v2-img2.jpg",
        title: "Underbody wash",
        text: "Experience the perfect blend of thorough washing & glossy protection with our Luxury Wash & Wax.",
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesTwo() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <>
            {/*Services Two Start */}
            <section className="services-two" id="services">
                <div className="container">
                    <div className="services-two__top">
                        <div className="section-title text-left sec-title-animation animation-style2">
                            <div className="section-title__tagline-box">
                                <p className="section-title__tagline">
                                    What We Do
                                </p>
                                <div className="section-title__tagline-shape"></div>
                            </div>
                            <h2 className="section-title__title">
                                <TextAnimation style="s2">
                                    Quality Cleaning Trusted <br /> Service Fair
                                    Prices
                                </TextAnimation>
                            </h2>
                        </div>
                        <div className="services-two__top-btn">
                            <Link href="/services-v-2" className="thm-btn">
                                <span>View Services</span>
                                <i className="fal fa-angle-double-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="services-two__inner">
                        <div className="swiper-container services-two__carousel">
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
                                    992: { slidesPerView: 2 },
                                    1200: { slidesPerView: 3 },
                                    1320: { slidesPerView: 3 },
                                }}
                            >
                                {services.map((service, index) => (
                                    <SwiperSlide key={index}>
                                        {/*Services Two Single Start */}
                                        <div className="services-two__single">
                                            <div className="services-two__single-img">
                                                <Image src={service.image} alt={service.title} />
                                            </div>
                                            <div className="services-two__single-content">
                                                <div className="services-two__single-content-btn">
                                                    <a href={service.popupHref} className="img-popup">
                                                        <span className="fas fa-arrow-right"></span>
                                                    </a>
                                                </div>
                                                <div className="services-two__single-content-inner">
                                                    <h3>
                                                        <Link href="/services-v-2">
                                                            {service.title}
                                                        </Link>
                                                    </h3>
                                                    <p>{service.text}</p>
                                                    <div className="btn-box">
                                                        <Link href="/services-v-2">
                                                            Read More
                                                            <span className="fas fa-arrow-right"></span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Services Two Single End */}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Navigation */}
                        <div className="services-two__nav">
                            <div
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="services-two__nav-prev"
                                tabIndex={0}
                                role="button"
                                aria-label="Previous slide"
                            >
                                <span>
                                    <i className="fa fa-solid fa-arrow-left left" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div
                                onClick={() => swiperRef.current?.slideNext()}
                                className="services-two__nav-next"
                                tabIndex={0}
                                role="button"
                                aria-label="Next slide"
                            >
                                <span>
                                    <i className="fa fa-solid fa-arrow-right right" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Services Two End */}
        </>
    );
}