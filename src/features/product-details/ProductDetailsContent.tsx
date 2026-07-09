"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import {
    productImages,
    productInfo,
    productSizes,
    productButtons,
    socialLinks,
} from "@/data/productDetailsData";

export default function ProductDetailsContent() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const mainSwiperRef = useRef<SwiperType | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <>
            {/*Start Product Details*/}
            <section className="product-details">
                <div className="container">
                    <div className="row">
                        {/* ── Left: Image Slider ── */}
                        <div className="col-lg-6 col-xl-6">
                            <div className="product-details__left">
                                <div className="product-details__left-inner">

                                    {/* Main Swiper */}
                                    <div className="product-details__content-box">
                                        <Swiper
                                            modules={[Navigation, Autoplay, Thumbs]}
                                            id="shop-details-one__carousel"
                                            className="swiper-container"
                                            spaceBetween={0}
                                            slidesPerView={1}
                                            loop={true}
                                            speed={1400}
                                            observer={true}
                                            observeParents={true}
                                            autoplay={{
                                                delay: 5000,
                                                disableOnInteraction: false,
                                            }}
                                            thumbs={{
                                                swiper:
                                                    thumbsSwiper && !thumbsSwiper.destroyed
                                                        ? thumbsSwiper
                                                        : null,
                                            }}
                                            onSwiper={(swiper) => {
                                                mainSwiperRef.current = swiper;
                                            }}
                                        >
                                            {productImages.map((img) => (
                                                <SwiperSlide key={img.id}>
                                                    <div className="product-details__img">
                                                        <Image src={img.main} alt={productInfo.title} />
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>

                                        {/* Custom Nav — old project IDs preserved */}
                                        <div className="product-details__nav">
                                            <div
                                                className="swiper-button-next"
                                                id="product-details__swiper-button-prev"
                                                onClick={() => mainSwiperRef.current?.slideNext()}
                                                role="button"
                                                tabIndex={0}
                                                onKeyDown={(e) =>
                                                    e.key === "Enter" &&
                                                    mainSwiperRef.current?.slideNext()
                                                }
                                            >
                                                <i className="fal fa-long-arrow-left"></i>
                                            </div>
                                            <div
                                                className="swiper-button-prev"
                                                id="product-details__swiper-button-next"
                                                onClick={() => mainSwiperRef.current?.slidePrev()}
                                                role="button"
                                                tabIndex={0}
                                                onKeyDown={(e) =>
                                                    e.key === "Enter" &&
                                                    mainSwiperRef.current?.slidePrev()
                                                }
                                            >
                                                <i className="fal fa-long-arrow-right"></i>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Thumbnail Swiper */}
                                    <div className="product-details__thumb-box">
                                        <Swiper
                                            modules={[Thumbs, Autoplay]}
                                            id="shop-details-one__thumb"
                                            className="swiper-container"
                                            spaceBetween={0}
                                            slidesPerView={3}
                                            speed={1400}
                                            watchSlidesProgress={true}
                                            loop={true}
                                            autoplay={{
                                                delay: 5000,
                                                disableOnInteraction: false,
                                            }}
                                            onSwiper={setThumbsSwiper}
                                        >
                                            {productImages.map((img) => (
                                                <SwiperSlide key={img.id}>
                                                    <div className="product-details__thumb-img">
                                                        <Image src={img.thumb} alt={productInfo.title} />
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* ── Right: Product Info ── */}
                        <div className="col-lg-6 col-xl-6">
                            <div className="product-details__right">

                                {/* Title & Price */}
                                <div className="product-details__top">
                                    <h3 className="product-details__title">
                                        {productInfo.title}{" "}
                                        <span>{productInfo.price}</span>
                                    </h3>
                                </div>

                                {/* Star Reviews */}
                                <div className="product-details__reveiw">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="fa fa-star"></i>
                                    ))}
                                    <span>{productInfo.reviewCount} customer reviews</span>
                                </div>

                                {/* Description */}
                                <div className="product-details__content">
                                    <p className="product-details__content-text1">
                                        {productInfo.description}
                                    </p>
                                    <p className="product-details__content-text2">
                                        {productInfo.ref} <br />
                                        {productInfo.availability}
                                    </p>
                                </div>

                                {/* Size Selector */}
                                <div className="product-details__select">
                                    <div className="product-details__select-size">
                                        <h3>Size:</h3>
                                        <ul className="list-unstyled">
                                            {productSizes.map((size) => (
                                                <li key={size.id}>
                                                    <input
                                                        type="radio"
                                                        id={size.id}
                                                        name="rating"
                                                        defaultChecked={size.defaultChecked}
                                                    />
                                                    <label htmlFor={size.id}>
                                                        <i></i>
                                                        <span>{size.label}</span>
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Quantity + Buttons */}
                                <div className="product-details__inner">
                                    <div className="product-details__quantity">
                                        <h3 className="product-details__quantity-title">
                                            Quantity
                                        </h3>
                                        <div className="quantity-box">
                                            <button
                                                type="button"
                                                className="sub"
                                                onClick={() =>
                                                    setQuantity((prev) => Math.max(1, prev - 1))
                                                }
                                            >
                                                <i className="fa fa-minus"></i>
                                            </button>
                                            <input
                                                type="number"
                                                id="quantity"
                                                value={quantity}
                                                min={1}
                                                onChange={(e) => {
                                                    const val = parseInt(e.target.value);
                                                    if (!isNaN(val) && val >= 1) setQuantity(val);
                                                }}
                                            />
                                            <button
                                                type="button"
                                                className="add"
                                                onClick={() =>
                                                    setQuantity((prev) => prev + 1)
                                                }
                                            >
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Action Buttons — old project style: <span> + <i> */}
                                    <div className="product-details__buttons-boxes">
                                        {productButtons.map((btn) => (
                                            <div key={btn.id} className={btn.className}>
                                                <Link href={btn.to} className="thm-btn">
                                                    <span>{btn.label}</span>
                                                    <i className="fal fa-angle-double-right"></i>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Share */}
                                <div className="product-details__social">
                                    <div className="title">
                                        <h3>Share with friends:</h3>
                                    </div>
                                    <div className="product-details__social-link">
                                        {socialLinks.map((social) => (
                                            <Link
                                                key={social.id}
                                                href={social.href}
                                                aria-label={social.label}
                                            >
                                                <span className={social.icon}></span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Product Details*/}
        </>
    );
}