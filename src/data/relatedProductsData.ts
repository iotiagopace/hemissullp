import { StaticImageData } from "next/image";
import ShopProduct11 from "@/assets/images/shop/shop-product-1-1.jpg";
import ShopProduct12 from "@/assets/images/shop/shop-product-1-2.jpg";
import ShopProduct13 from "@/assets/images/shop/shop-product-1-3.jpg";
import ShopProduct14 from "@/assets/images/shop/shop-product-1-4.jpg";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface RelatedProduct {
    id: number;
    image: StaticImageData | string;
    title: string;
    price: string;
    originalPrice: string | null;
    rating: string;
    badge: string | null;
    link: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const relatedProducts: RelatedProduct[] = [
    {
        id: 1,
        image: ShopProduct11,
        title: "Gree Air Conditioner",
        price: "$33.00",
        originalPrice: null,
        rating: "4.9",
        badge: "New",
        link: "/product-details",
    },
    {
        id: 2,
        image: ShopProduct12,
        title: "Pliers | Cutting, Gripping",
        price: "$50.00",
        originalPrice: null,
        rating: "5.0",
        badge: null,
        link: "/product-details",
    },
    {
        id: 3,
        image: ShopProduct13,
        title: "Gear and wrench",
        price: "$28.00",
        originalPrice: "$33.00",
        rating: "4.5",
        badge: "5% Off",
        link: "/product-details",
    },
    {
        id: 4,
        image: ShopProduct14,
        title: "Nut Driver",
        price: "$40.00",
        originalPrice: null,
        rating: "4.8",
        badge: null,
        link: "/product-details",
    },
    {
        id: 5,
        image: ShopProduct13,
        title: "Gree Air Conditioner",
        price: "$33.00",
        originalPrice: null,
        rating: "4.9",
        badge: "New",
        link: "/product-details",
    },
];

// ─── Swiper Config ────────────────────────────────────────────────────────────

export const relatedProductsSwiper = {
    spaceBetween: 30,
    speed: 500,
    autoplayDelay: 2000,
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 3 },
        1320: { slidesPerView: 4 },
    },
} as const;