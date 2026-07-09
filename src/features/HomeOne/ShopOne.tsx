"use client";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import TextAnimation from "@/components/elements/TextAnimation";
import ShopOneImg11 from "@/assets/images/shop/shop-one-img-1-1.jpg";
import ShopOneImg12 from "@/assets/images/shop/shop-one-img-1-2.jpg";
import ShopOneImg13 from "@/assets/images/shop/shop-one-img-1-3.jpg";
import ShopOneImg14 from "@/assets/images/shop/shop-one-img-1-4.jpg";
import ShopOneImg15 from "@/assets/images/shop/shop-one-img-1-5.jpg";
import ShopOneImg16 from "@/assets/images/shop/shop-one-img-1-6.jpg";
import ShopOneImg17 from "@/assets/images/shop/shop-one-img-1-7.jpg";
import ShopOneImg18 from "@/assets/images/shop/shop-one-img-1-8.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ShopItem {
    image: StaticImageData;
    offer: string;
    title: string;
    price: string;
    originalPrice: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const shopItems: ShopItem[] = [
    { image: ShopOneImg11, offer: "20% Off", title: "Spring Brake Disc", price: "$143.2", originalPrice: "$179.00" },
    { image: ShopOneImg12, offer: "20% Off", title: "Steering wheel", price: "$123.2", originalPrice: "$149.00" },
    { image: ShopOneImg13, offer: "20% Off", title: "Care tires", price: "$14.2", originalPrice: "$19.00" },
    { image: ShopOneImg14, offer: "20% Off", title: "Spark plugs", price: "$143.2", originalPrice: "$189.00" },
    { image: ShopOneImg15, offer: "20% Off", title: "Electric drill", price: "$143.2", originalPrice: "$179.00" },
    { image: ShopOneImg16, offer: "20% Off", title: "Car keys", price: "$103.2", originalPrice: "$169.00" },
    { image: ShopOneImg17, offer: "20% Off", title: "Car battery", price: "$143.2", originalPrice: "$179.00" },
    { image: ShopOneImg18, offer: "20% Off", title: "Gear shift knob", price: "$113.2", originalPrice: "$149.00" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ShopOne() {
    const swiperRef = useRef<SwiperType | null>(null);


    return (
        <>
            {/*Shop One Start */}
            <section className="shop-one" id="shop">
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box two">
                            <p className="section-title__tagline">
                                THIS IS THE OFFICIAL SHOP
                            </p>
                            <div className="section-title__tagline-shape"></div>
                        </div>
                        <h2 className="section-title__title">
                            <TextAnimation style="s1">
                                Trusted Car Repair Shop
                            </TextAnimation>
                        </h2>
                    </div>

                    <div className="swiper-container shop-one__carousel">
                        <Swiper
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            modules={[Autoplay, Pagination]}
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
                                1200: { slidesPerView: 4 },
                                1320: { slidesPerView: 4 },
                            }}
                        >
                            {shopItems.map((item, index) => (
                                <SwiperSlide key={index}>
                                    {/*Shop One Single Start */}
                                    <div className="shop-one__single">
                                        <div className="shop-one__img-box">
                                            <div className="shop-one__img">
                                                <Image src={item.image} alt={item.title} />
                                            </div>
                                            <div className="shop-one__offer">
                                                <p>{item.offer}</p>
                                            </div>
                                            <ul className="shop-one__icon-box">
                                                <li>
                                                    <Link href="#" title="Add to Wishlist">
                                                        <i className="fa fa-regular fa-heart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" title="Add to cart">
                                                        <i className="fa fa-solid fa-cart-plus"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" title="Quick View">
                                                        <i className="fa fa-regular fa-eye"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" title="Compare">
                                                        <i className="fa fa-solid fa-repeat"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="shop-one__content">
                                            <div className="shop-one__rating">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <span key={i} className="fas fa-star"></span>
                                                ))}
                                            </div>
                                            <h3 className="shop-one__title">
                                                <Link href="/product-details">{item.title}</Link>
                                            </h3>
                                            <p className="shop-one__price">
                                                {item.price} <del>{item.originalPrice}</del>
                                            </p>
                                            <div className="shop-one__arrow">
                                                <Link href="/product-details">
                                                    <i className="fal fa-angle-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Shop One Single End */}
                                </SwiperSlide>
                            ))}

                            <div className="swiper-pagination"></div>
                        </Swiper>

                        {/* Navigation */}
                        <div className="shop-one__nav">
                            <div onClick={() => swiperRef.current?.slidePrev()} className="shop-one__nav-prev">
                                <span>
                                    <i className="fa fa-solid fa-arrow-left left" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div onClick={() => swiperRef.current?.slideNext()} className="shop-one__nav-next">
                                <span>
                                    <i className="fa fa-solid fa-arrow-right right" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Shop One End */}
        </>
    );
}