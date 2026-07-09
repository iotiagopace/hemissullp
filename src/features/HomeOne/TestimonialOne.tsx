"use client";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import TextAnimation from "@/components/elements/TextAnimation";
import Testimonial11 from "@/assets/images/testimonial/testimonial-1-1.jpg";
import Testimonial12 from "@/assets/images/testimonial/testimonial-1-2.jpg";
import TestimonialOneShapeBg from "@/assets/images/shapes/testimonial-one-shape-bg.png";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Testimonial {
    image: StaticImageData;
    text: string;
    name: string;
    role: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const testimonials: Testimonial[] = [
    {
        image: Testimonial11,
        name: "Laura Brown",
        role: "Engineer",
        text: "\"Our trust worthy mechanics go beyond repairs.They take the time to listen to every concern.Understanding your needs is always a priority.We believe in honest service & genuine care.Because looking after you matters as much as looking after your car.\"",
    },
    {
        image: Testimonial12,
        name: "William Foster",
        role: "Driving instructor",
        text: "\"Our trust worthy mechanics go beyond repairs.They take the time to listen to every concern.Understanding your needs is always a priority.We believe in honest service & genuine care.Because looking after you matters as much as looking after your car.\"",
    },
    {
        image: Testimonial11,
        name: "Laura Brown",
        role: "Engineer",
        text: "\"Our trust worthy mechanics go beyond repairs.They take the time to listen to every concern.Understanding your needs is always a priority.We believe in honest service & genuine care.Because looking after you matters as much as looking after your car.\"",
    },
    {
        image: Testimonial12,
        name: "William Foster",
        role: "Driving instructor",
        text: "\"Our trust worthy mechanics go beyond repairs.They take the time to listen to every concern.Understanding your needs is always a priority.We believe in honest service & genuine care.Because looking after you matters as much as looking after your car.\"",
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function TestimonialOne() {
    const swiperRef = useRef<SwiperType | null>(null);


    return (
        <>
            {/* Testimonial One Start */}
            <section className="testimonial-one" id="testimonial">
                <div
                    className="testimonial-one__shpae-bg"
                    style={{ backgroundImage: `url(${TestimonialOneShapeBg.src})` }}
                ></div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box two">
                            <p className="section-title__tagline">
                                Testimonials
                            </p>
                            <div className="section-title__tagline-shape"></div>
                        </div>
                        <h2 className="section-title__title">
                            <TextAnimation style="s1">
                                About Our Customers <br /> Feedback Says
                            </TextAnimation>
                        </h2>
                    </div>

                    <div className="swiper-container testimonial-one__carousel">
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
                                1200: { slidesPerView: 2 },
                                1320: { slidesPerView: 2 },
                            }}
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    {/* Testimonial One Single Start */}
                                    <div className="testimonial-one__single">
                                        <div className="testimonial-one__quote">
                                            <i className="fas fa-quote-left"></i>
                                        </div>
                                        <p className="testimonial-one__text">
                                            {item.text}
                                        </p>
                                        <div className="testimonial-one__client-info-outer">
                                            <div className="testimonial-one__client-info">
                                                <div className="testimonial-one__client-img">
                                                    <Image src={item.image} alt={item.name} />
                                                </div>
                                                <div className="testimonial-one__client-content">
                                                    <h3>
                                                        <Link href="/testimonials">
                                                            {item.name}
                                                        </Link>
                                                    </h3>
                                                    <p>{item.role}</p>
                                                </div>
                                            </div>
                                            <div className="testimonial-one__client-review">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <span key={i} className="fas fa-star"></span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial One Single End */}
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation */}
                        <div className="testimonial-one__nav">
                            <div onClick={() => swiperRef.current?.slidePrev()} className="testimonial-one__nav-prev">
                                <span>
                                    <i className="fa fa-solid fa-arrow-left left" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div onClick={() => swiperRef.current?.slideNext()} className="testimonial-one__nav-next">
                                <span>
                                    <i className="fa fa-solid fa-arrow-right right" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonial One End */}
        </>
    );
}