"use client";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import TextAnimation from "@/components/elements/TextAnimation";
import TestimonialThreeShape1 from "@/assets/images/shapes/testimonial-three-shape-1.png";
import TestimonialThreeShape2 from "@/assets/images/shapes/testimonial-three-shape-2.png";
import TestimonialClient31 from "@/assets/images/testimonial/testimonial-client-3-1.jpg";
import TestimonialClient32 from "@/assets/images/testimonial/testimonial-client-3-2.jpg";
import TestimonialClient33 from "@/assets/images/testimonial/testimonial-client-3-3.jpg";
import TestimonialClient34 from "@/assets/images/testimonial/testimonial-client-3-4.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Testimonial {
    image: StaticImageData;
    heading: string;
    text: string;
    name: string;
    role: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const testimonials: Testimonial[] = [
    {
        image: TestimonialClient31,
        heading: "Awesome Services",
        text: '"The wrap exceeded my expectations in every way. The fit was flawless, the finish sleek and professional, and the quality of the material gives me confidence that my paint is fully protected. The team was highly skilled, attentive, and ensured every detail was perfect."',
        name: "– David R.",
        role: "Founder & CEO",
    },
    {
        image: TestimonialClient32,
        heading: "Excellent Convesation",
        text: '"The wrap exceeded my expectations in every way. The fit was flawless, the finish sleek and professional, and the quality of the material gives me confidence that my paint is fully protected. The team was highly skilled, attentive, and ensured every detail was perfect."',
        name: "– James T.",
        role: "Driving instructor",
    },
    {
        image: TestimonialClient33,
        heading: "Awesome Services",
        text: '"The wrap exceeded my expectations in every way. The fit was flawless, the finish sleek and professional, and the quality of the material gives me confidence that my paint is fully protected. The team was highly skilled, attentive, and ensured every detail was perfect."',
        name: "- Sophia L.",
        role: "Driving instructor",
    },
    {
        image: TestimonialClient34,
        heading: "Awesome Services",
        text: '"The wrap exceeded my expectations in every way. The fit was flawless, the finish sleek and professional, and the quality of the material gives me confidence that my paint is fully protected. The team was highly skilled, attentive, and ensured every detail was perfect."',
        name: "- Sophia L.",
        role: "Driving instructor",
    },
    {
        image: TestimonialClient32,
        heading: "Excellent Convesation",
        text: '"The wrap exceeded my expectations in every way. The fit was flawless, the finish sleek and professional, and the quality of the material gives me confidence that my paint is fully protected. The team was highly skilled, attentive, and ensured every detail was perfect."',
        name: "– James T.",
        role: "Driving instructor",
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function TestimonialThree() {
    const swiperRef = useRef<SwiperType | null>(null);


    return (
        <>
            {/*Testimonial Three Start */}
            <section className="testimonial-three">
                <div className="testimonial-three__shape-1 float-bob-x">
                    <Image src={TestimonialThreeShape1} alt="testimonial-three-shape" />
                </div>
                <div className="testimonial-three__shape-2 float-bob-y">
                    <Image src={TestimonialThreeShape2} alt="testimonial-three-shape" />
                </div>
                <div className="container">
                    <div className="testimonial-three__top-content">
                        <div className="section-title text-left sec-title-animation animation-style2">
                            <div className="section-title__tagline-box">
                                <p className="section-title__tagline">
                                    Our testimonials
                                </p>
                                <div className="section-title__tagline-shape"></div>
                            </div>
                            <h2 className="section-title__title">
                                <TextAnimation style="s2">
                                    Trusted by Car Owners <br /> Everywhere
                                </TextAnimation>
                            </h2>
                        </div>
                        <div className="testimonial-three__nav">
                            <div onClick={() => swiperRef.current?.slidePrev()} className="testimonial-three__nav-prev">
                                <span>
                                    <i className="fa fa-solid fa-arrow-left left" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div onClick={() => swiperRef.current?.slideNext()} className="testimonial-three__nav-next">
                                <span>
                                    <i className="fa fa-solid fa-arrow-right right" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-container testimonial-three__carousel">
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
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    {/*Testimonial Three Single Start */}
                                    <div className="testimonial-three__single">
                                        <div className="testimonial-three__top">
                                            <div className="testimonial-three__top-title">
                                                <h4>{item.heading}</h4>
                                            </div>
                                            <div className="testimonial-three__top-quote">
                                                <span className="fas fa-quote-right"></span>
                                            </div>
                                        </div>
                                        <p className="testimonial-three__text">{item.text}</p>
                                        <div className="testimonial-three__bottom">
                                            <div className="testimonial-three__star">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <span key={i} className="icon-star"></span>
                                                ))}
                                            </div>
                                            <div className="testimonial-three__client-info">
                                                <div className="testimonial-three__client-img-box">
                                                    <div className="testimonial-three__client-img">
                                                        <Image src={item.image} alt="testimonial-client" />
                                                    </div>
                                                </div>
                                                <div className="testimonial-three__client-content">
                                                    <h3 className="testimonial-three__client-name">
                                                        <Link href="/testimonials">{item.name}</Link>
                                                    </h3>
                                                    <p className="testimonial-three__client-sub-title">
                                                        {item.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Testimonial Three Single End */}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            {/*Testimonial Three End */}
        </>
    );
}