"use client";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import TextAnimation from "@/components/elements/TextAnimation";
import TestimonialV2Img1 from "@/assets/images/testimonial/testimonial-v2-img1.jpg";
import TestimonialV2Img2 from "@/assets/images/testimonial/testimonial-v2-img2.jpg";
import TestimonialV2Img3 from "@/assets/images/testimonial/testimonial-v2-img3.jpg";
import TestimonialV2Img4 from "@/assets/images/testimonial/testimonial-v2-img4.jpg";
import TestimonialV2Img5 from "@/assets/images/testimonial/testimonial-v2-img5.jpg";
import TestimonialV2Img6 from "@/assets/images/testimonial/testimonial-v2-img6.jpg";
import TestimonialTwoShapeBg from "@/assets/images/shapes/testimonial-two-shape-bg.png";
import TestimonialTwoShapeBg2 from "@/assets/images/shapes/testimonial-two-shape-bg-2.png";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Testimonial {
    image: StaticImageData;
    name: string;
    role: string;
    text: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const testimonials: Testimonial[] = [
    { image: TestimonialV2Img1, name: "John Peterson", role: "Marketing Manager", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." },
    { image: TestimonialV2Img2, name: "Dia Petrose", role: "Marketing Manager", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." },
    { image: TestimonialV2Img3, name: "John Smith", role: "Marketing Manager", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." },
    { image: TestimonialV2Img4, name: "Raksona Ajo", role: "Marketing Manager", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." },
    { image: TestimonialV2Img5, name: "John Coper", role: "Marketing Manager", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." },
    { image: TestimonialV2Img6, name: "Atkinson", role: "Marketing Manager", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function TestimonialTwo() {
    const swiperRef = useRef<SwiperType | null>(null);


    return (
        <>
            {/*Testimonial Two Start*/}
            <section className="testimonial-two" id="testimonial">
                <div
                    className="testimonial-two__shape-bg"
                    style={{ backgroundImage: `url(${TestimonialTwoShapeBg.src})` }}
                ></div>
                <div
                    className="testimonial-two__shape-bg-two"
                    style={{ backgroundImage: `url(${TestimonialTwoShapeBg2.src})` }}
                ></div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box two">
                            <p className="section-title__tagline">
                                Customer Feedback
                            </p>
                            <div className="section-title__tagline-shape"></div>
                        </div>
                        <h2 className="section-title__title">
                            <TextAnimation style="s1">
                                What Our Customer <br /> Are Saying
                            </TextAnimation>
                        </h2>
                    </div>

                    <div className="swiper-container testimonial-two__carousel">
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
                                768: { slidesPerView: 1 },
                                992: { slidesPerView: 2 },
                                1200: { slidesPerView: 2 },
                                1320: { slidesPerView: 2 },
                            }}
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    {/* Testimonial Two Single Start */}
                                    <div className="testimonial-two__single">
                                        <div className="testimonial-two__single-icon">
                                            <span className="icon-quote-left"></span>
                                        </div>
                                        <div className="testimonial-two__single-img">
                                            <div className="testimonial-two__single-img-inner">
                                                <Image src={item.image} alt={item.name} />
                                            </div>
                                        </div>
                                        <div className="testimonial-two__single-inner">
                                            <div className="testimonial-two__single-content">
                                                <p>{item.text}</p>
                                                <div className="testimonial-two__single-content-bottom">
                                                    <div className="author-box">
                                                        <h3>{item.name}</h3>
                                                        <p>{item.role}</p>
                                                    </div>
                                                    <ul className="rating">
                                                        {Array.from({ length: 5 }).map((_, i) => (
                                                            <li key={i}>
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Two Single End */}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Navigation */}
                    <div className="testimonial-two__nav">
                        <div
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="testimonial-two__nav-prev"
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
                            className="testimonial-two__nav-next"
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
            </section>
            {/*Testimonial Two End*/}
        </>
    );
}