"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import Brand11 from "@/assets/images/brand/brand-1-1.png";

// ─── Data ─────────────────────────────────────────────────────────────────────

const brands = [
    { image: Brand11 },
    { image: Brand11 },
    { image: Brand11 },
    { image: Brand11 },
    { image: Brand11 },
    { image: Brand11 },
    { image: Brand11 },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function BrandOne() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <>
            {/* Start Brand One */}
            <section className="brand-one">
                <div className="container">
                    <div className="brand-one__carousel ">
                        <Swiper
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            modules={[Autoplay]}
                            loop={true}
                            spaceBetween={30}
                            speed={500}
                            autoplay={{
                                delay: 7000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                992: { slidesPerView: 3 },
                                1200: { slidesPerView: 4 },
                                1350: { slidesPerView: 5 },
                            }}
                        >
                            {brands.map((brand, index) => (
                                <SwiperSlide key={index}>
                                    {/* Start Single Brand One */}
                                    <div className="single-brand-one">
                                        <Link href="#">
                                            <Image src={brand.image} alt="Logo" />
                                            <Image src={brand.image} alt="Logo" />
                                        </Link>
                                    </div>
                                    {/* End Single Brand One */}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            {/* End Brand One */}
        </>
    );
}