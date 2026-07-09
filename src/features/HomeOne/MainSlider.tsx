"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import CounterUp from "@/components/elements/CounterUp";
import MainSliderShape1 from "@/assets/images/shapes/main-slider-shape-1.png";
import MainSliderShape2 from "@/assets/images/shapes/main-slider-shape-2.png";
import MainSlider11 from "@/assets/images/resources/main-slider-1-1.png";
import MainSliderTitleImg from "@/assets/images/resources/main-slider-title-img.jpg";
import MainSliderSatisfiedCustomer11 from "@/assets/images/resources/main-slider-satisfied-customer-1-1.jpg";
import MainSliderSatisfiedCustomer12 from "@/assets/images/resources/main-slider-satisfied-customer-1-2.jpg";
import MainSliderSatisfiedCustomer13 from "@/assets/images/resources/main-slider-satisfied-customer-1-3.jpg";
import Slider11 from "@/assets/images/backgrounds/slider-1-1.jpg";
import Slider12 from "@/assets/images/backgrounds/slider-1-2.jpg";
import Slider13 from "@/assets/images/backgrounds/slider-1-3.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Slide {
    bg: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const slides: Slide[] = [
    { bg: Slider11.src },
    { bg: Slider12.src },
    { bg: Slider13.src },
];

const satisfiedCustomerImgs = [
    MainSliderSatisfiedCustomer11,
    MainSliderSatisfiedCustomer12,
    MainSliderSatisfiedCustomer13,
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function MainSlider() {
    const swiperRef = useRef<SwiperType | null>(null);


    return (
        <>
            {/*Main Slider Start*/}
            <section className="main-slider" id="home">
                <div className="swiper-container main-slider__carousel">
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        modules={[Autoplay, EffectFade, Pagination]}
                        effect="fade"
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        speed={600}
                        autoplay={{
                            delay: 8000,
                            disableOnInteraction: false,
                        }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="main-slider__bg-box">
                                    <div
                                        className="main-slider__bg"
                                        style={{
                                            backgroundImage: `url(${slide.bg})`,
                                        }}
                                    ></div>
                                </div>
                                <div className="main-slider__shape-1"></div>
                                <div className="main-slider__shape-2"></div>
                                <div className="main-slider__shape-3 rotate-me">
                                    <Image
                                        src={MainSliderShape1}
                                        alt="main-slider-shape"
                                        className="float-bob-y" />
                                </div>
                                <div className="main-slider__shape-4 float-bob-x">
                                    <Image
                                        src={MainSliderShape2}
                                        alt="main-slider-shape" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="main-slider__content">
                                                <h4 className="main-slider__sub-title">
                                                    Car - Repair - center
                                                </h4>
                                                <h2 className="main-slider__title">
                                                    Drive Confident with <br />
                                                    Expert Car
                                                    <Image
                                                        src={MainSliderTitleImg}
                                                        alt="main-slider-title-img" />
                                                    <br />
                                                    Care Center
                                                </h2>
                                                <p className="main-slider__text">
                                                    Expert car repair services to
                                                    keep your vehicle running
                                                    smoothly. <br /> Watch for
                                                    seasonal offers & discounts to
                                                    save on maintenance.
                                                </p>
                                                <div className="main-slider__btn-and-call">
                                                    <div className="main-slider__btn-box">
                                                        <Link
                                                            href="/about"
                                                            className="thm-btn"
                                                        >
                                                            <span>Read More</span>
                                                            <i className="fal fa-angle-double-right"></i>
                                                        </Link>
                                                    </div>
                                                    <div className="main-slider__call">
                                                        <div className="main-slider__call-icon">
                                                            <span className="icon-phone-call"></span>
                                                        </div>
                                                        <div className="main-slider__call-content">
                                                            <p>Call Anytime</p>
                                                            <h5>
                                                                <a href="tel:8898006802">
                                                                    + 88 ( 9800 ) 6802
                                                                </a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="main-slider__img-box">
                                                    <div className="main-slider__img-one-box">
                                                        <div className="main-slider__img-one">
                                                            <Image src={MainSlider11} alt="main-slider" />
                                                        </div>
                                                        <div className="main-slider__satisfied-customer">
                                                            <div className="main-slider__satisfied-customer-inner">
                                                                <div className="main-slider__satisfied-customer-count">
                                                                    <h3>
                                                                        <CounterUp ending={24} />
                                                                    </h3>
                                                                    <span>k</span>
                                                                </div>
                                                                <ul className="main-slider__satisfied-customer-list">
                                                                    {satisfiedCustomerImgs.map((img, i) => (
                                                                        <li key={i}>
                                                                            <div className="main-slider__satisfied-customer-img">
                                                                                <Image
                                                                                    src={img}
                                                                                    alt="satisfied-customer" />
                                                                            </div>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <h4 className="main-slider__satisfied-customer-text">
                                                                Satisfied Customers
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className="swiper-pagination"></div>
                    </Swiper>

                    {/* Navigation */}
                    <div className="main-slider__nav">
                        <div onClick={() => swiperRef.current?.slidePrev()} className="main-slider__nav-prev">
                            <span>
                                <i className="fa fa-solid fa-arrow-left left" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div onClick={() => swiperRef.current?.slideNext()} className="main-slider__nav-next">
                            <span>
                                <i className="fa fa-solid fa-arrow-right right" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            {/*Main Slider End*/}
        </>
    );
}