"use client";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import TextAnimation from "@/components/elements/TextAnimation";
import TeamV11 from "@/assets/images/team/team-v1-1.jpg";
import TeamV12 from "@/assets/images/team/team-v1-2.jpg";
import TeamV13 from "@/assets/images/team/team-v1-3.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TeamMember {
    image: StaticImageData;
    name: string;
    role: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const teamMembers: TeamMember[] = [
    { image: TeamV11, name: "William Henry", role: "Load Carrier Engine" },
    { image: TeamV12, name: "Henry Joseph", role: "Brake Repairer" },
    { image: TeamV11, name: "William Henry", role: "Load Carrier Engine" },
    { image: TeamV13, name: "Daniel Robert", role: "Trolley Engine" },

];

// ─── Component ────────────────────────────────────────────────────────────────

export default function TeamOne() {
    const swiperRef = useRef<SwiperType | null>(null);


    return (
        <>
            {/* Team One Start */}
            <section className="team-one team-one--about">
                <div className="container">
                    <div className="team-one__top">
                        <div className="section-title text-left sec-title-animation animation-style2">
                            <div className="section-title__tagline-box">
                                <p className="section-title__tagline">
                                    Our Trusted Team
                                </p>
                                <div className="section-title__tagline-shape"></div>
                            </div>
                            <h2 className="section-title__title">
                                <TextAnimation style="s2">
                                    Latest Expert Team Members
                                </TextAnimation>
                            </h2>
                        </div>
                        <div className="team-one__top-btn">
                            <Link href="/team" className="thm-btn">
                                <span>All Team Members</span>
                                <i className="fal fa-angle-double-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="team-one__inner">
                        <div className="swiper-container team-one__carousel">
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
                                {teamMembers.map((member, index) => (
                                    <SwiperSlide key={index}>
                                        {/* Team One Single Start */}
                                        <div className="team-one__single">
                                            <div className="team-one__single__bg"></div>
                                            <div className="team-one__single-content">
                                                <div className="team-one__single-content-inner">
                                                    <p>{member.role}</p>
                                                    <h3>
                                                        <Link href="/team-details">
                                                            {member.name}
                                                        </Link>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="team-one__single-img">
                                                <div className="team-one__single-img-bdr"></div>
                                                <div className="team-one__single-img-inner">
                                                    <Image src={member.image} alt={member.name} />
                                                </div>
                                                <div className="team-one__single-img-social">
                                                    <ul className="clearfix">
                                                        <li className="one">
                                                            <Link href="#">
                                                                <i className="fab fa-facebook"></i>
                                                            </Link>
                                                        </li>
                                                        <li className="two">
                                                            <Link href="#">
                                                                <i className="fab fa-twitter"></i>
                                                            </Link>
                                                        </li>
                                                        <li className="three">
                                                            <Link href="#">
                                                                <i className="fab fa-pinterest-p"></i>
                                                            </Link>
                                                        </li>
                                                        <li className="four">
                                                            <Link href="#">
                                                                <i className="fab fa-instagram"></i>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Team One Single End */}
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Navigation */}
                            <div className="team-one__nav">
                                <div onClick={() => swiperRef.current?.slidePrev()} className="team-one__nav-prev">
                                    <span>
                                        <i className="fa fa-solid fa-arrow-left left" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div onClick={() => swiperRef.current?.slideNext()} className="team-one__nav-next">
                                    <span>
                                        <i className="fa fa-solid fa-arrow-right right" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Team One End */}
        </>
    );
}