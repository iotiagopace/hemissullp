"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
    relatedProducts,
    relatedProductsSwiper,
} from "@/data/relatedProductsData";

export default function RelatedProducts() {
    return (
        <>
            {/* Start Related Products */}
            <section className="related-products">
                <div className="container">
                    <div className="related-products__title">
                        <h3>Related Products</h3>
                        <p>
                            Interdum et malesuada fames ac ante ipsum primis in
                            faucibus.
                        </p>
                    </div>

                    <div className="row">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={relatedProductsSwiper.spaceBetween}
                            loop={true}
                            speed={relatedProductsSwiper.speed}
                            autoplay={{
                                delay: relatedProductsSwiper.autoplayDelay,
                                disableOnInteraction: false,
                            }}
                            breakpoints={relatedProductsSwiper.breakpoints}
                            className="related-products__carousel  owl-dot-style1"
                        >
                            {relatedProducts.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div className="single-product-style1 instyle--2">
                                        <div className="single-product-style1__img">
                                            <Image src={product.image} alt={product.title} />
                                            <Image src={product.image} alt={product.title} />

                                            {/* Badge */}
                                            {product.badge && (
                                                <ul className="single-product-style1__overlay">
                                                    <li>
                                                        <p>{product.badge}</p>
                                                    </li>
                                                </ul>
                                            )}

                                            {/* Action Icons */}
                                            <ul className="single-product-style1__info">
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

                                        <div className="single-product-style1__content">
                                            <div className="single-product-style1__content-left">
                                                <h4>
                                                    <Link href={product.link}>
                                                        {product.title}
                                                    </Link>
                                                </h4>
                                                <p>
                                                    {product.originalPrice ? (
                                                        <>
                                                            <del>{product.originalPrice}</del>{" "}
                                                            {product.price}
                                                        </>
                                                    ) : (
                                                        product.price
                                                    )}
                                                </p>
                                            </div>
                                            <div className="single-product-style1__content-right">
                                                <div className="single-product-style1__review">
                                                    <i className="fa fa-star"></i>
                                                    <p>{product.rating}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            {/* End Related Products */}
        </>
    );
}