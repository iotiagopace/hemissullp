"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import CircleText from "@/components/elements/CircleText";

import MainSliderTwoShape1 from "@/assets/images/shapes/main-slider-two-shape-1.png";
import MainSliderTwoShape2 from "@/assets/images/shapes/main-slider-two-shape-2.png";
import MainSliderTwoReview11 from "@/assets/images/resources/main-slider-two-review-1-1.jpg";
import MainSliderTwoReview12 from "@/assets/images/resources/main-slider-two-review-1-2.jpg";
import MainSliderTwoReview13 from "@/assets/images/resources/main-slider-two-review-1-3.jpg";
import MainSliderTwoImg1 from "@/assets/images/resources/main-slider-two-img-1.jpg";
import Slider21 from "@/assets/images/backgrounds/slider-2-1.jpg";
import Slider22 from "@/assets/images/backgrounds/slider-2-2.jpg";
import Slider23 from "@/assets/images/backgrounds/slider-2-3.jpg";
import YoutubeFrem from "@/components/elements/YoutubeFrem";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Slide {
    bg: string;
    title: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const slides: Slide[] = [
    { bg: Slider21.src, title: "Expert Car Care for \n a Fresh Look" },
    { bg: Slider22.src, title: "Complete Best Service\n for your Car" },
    { bg: Slider23.src, title: "Premium Auto Care\nRepair Experts" },
];

const reviewImgs = [
    MainSliderTwoReview11,
    MainSliderTwoReview12,
    MainSliderTwoReview13,
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function MainSliderTwo() {
    const swiperRef = useRef<SwiperType | null>(null);


    return (
        <>
            {/*Main Slider Two Start*/}
            <section className="main-slider-two" id="home">
                <div className="swiper-container main-slider-two__carousel">
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
                                <div className="main-slider-two__bg-box">
                                    <div
                                        className="main-slider-two__bg"
                                        style={{
                                            backgroundImage: `url(${slide.bg})`,
                                        }}
                                    ></div>
                                </div>
                                <div className="main-slider-two__shape-1">
                                    <Image
                                        src={MainSliderTwoShape1}
                                        alt="main-slider-shape"
                                        className="float-bob-y" />
                                </div>
                                <div className="main-slider-two__shape-2 float-bob-x">
                                    <Image
                                        src={MainSliderTwoShape2}
                                        alt="main-slider-shape" />
                                </div>
                                <div className="main-slider-two__circle-text">
                                    <div className="main-slider-two__round-text-box">
                                        <div className="inner">
                                            <CircleText
                                                text="Welcome to Our Co. Working Properly Since 2026. "
                                                radius={88}
                                                fontSize={12}
                                                className="main-slider-two__curved-circle rotate-me"
                                            />
                                        </div>
                                        <div className="overlay-icon-box">
                                            <Link href="/about">
                                                <i className="fal fa-trophy-alt"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-slider-two__review-box">
                                    <ul className="clearfix">
                                        {reviewImgs.map((img, i) => (
                                            <li key={i}>
                                                <div className="img-box">
                                                    <Image src={img} alt="#" />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="text-box">
                                        <h2>Customer Satisfied</h2>
                                        <p>5.00 (15k Reviews)</p>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="main-slider-two__content">
                                                <h4 className="main-slider-two__sub-title">
                                                    Latest Equipment
                                                </h4>
                                                <h2 className="main-slider-two__title">
                                                    {slide.title.split("\n").map((line, i, arr) => (
                                                        <span key={i}>
                                                            {line}
                                                            {i < arr.length - 1 && <br />}
                                                        </span>
                                                    ))}
                                                </h2>
                                                <p className="main-slider-two__text">
                                                    Automated car washes offer
                                                    quick, efficient cleaning. Take
                                                    advantage of seasonal <br />
                                                    deals & promos to keep your car
                                                    spotless..
                                                </p>
                                                <div className="main-slider-two__btn-and-img-box">
                                                    <div className="main-slider-two__btn-and-video-box">
                                                        <div className="main-slider-two__btn-box">
                                                            <Link
                                                                href="/about"
                                                                className="thm-btn"
                                                            >
                                                                <span>Read More</span>
                                                                <i className="fal fa-angle-double-right"></i>
                                                            </Link>
                                                        </div>
                                                        <div className="main-slider-two__video-link">
                                                            <YoutubeFrem video="rbFoRH2deeY" className="video-popup">
                                                                <div className="main-slider-two__video-icon">
                                                                    <span className="fa fa-play"></span>
                                                                    <i className="ripple"></i>
                                                                </div>
                                                            </YoutubeFrem>
                                                            <h4 className="main-slider-two__video-title">
                                                                Watch Video
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="main-slider-two__img-box">
                                                        <Image
                                                            src={MainSliderTwoImg1}
                                                            alt="main-slider-two-img" />
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
                    <div className="main-slider-two__nav">
                        <div onClick={() => swiperRef.current?.slidePrev()} className="main-slider-two__nav-prev">
                            <span>
                                <i className="fa fa-solid fa-arrow-left left" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div onClick={() => swiperRef.current?.slideNext()} className="main-slider-two__nav-next">
                            <span>
                                <i className="fa fa-solid fa-arrow-right right" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            {/*Main Slider Two End*/}
        </>
    );
}