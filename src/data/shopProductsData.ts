import { StaticImageData } from "next/image";
import ShopProduct11 from "@/assets/images/shop/shop-product-1-1.jpg";
import ShopProduct12 from "@/assets/images/shop/shop-product-1-2.jpg";
import ShopProduct13 from "@/assets/images/shop/shop-product-1-3.jpg";
import ShopProduct14 from "@/assets/images/shop/shop-product-1-4.jpg";
import ShopProduct15 from "@/assets/images/shop/shop-product-1-5.jpg";
import ShopProduct16 from "@/assets/images/shop/shop-product-1-6.jpg";
import ShopProduct17 from "@/assets/images/shop/shop-product-1-7.jpg";
import ShopProduct18 from "@/assets/images/shop/shop-product-1-8.jpg";
import ShopProduct19 from "@/assets/images/shop/shop-product-1-9.jpg";
import ShopProduct110 from "@/assets/images/shop/shop-product-1-10.jpg";
import ShopProduct111 from "@/assets/images/shop/shop-product-1-11.jpg";
import ShopProduct112 from "@/assets/images/shop/shop-product-1-12.jpg";
import ShopProduct21 from "@/assets/images/shop/shop-product-2-1.jpg";
import ShopProduct22 from "@/assets/images/shop/shop-product-2-2.jpg";
import ShopProduct23 from "@/assets/images/shop/shop-product-2-3.jpg";
import ShopProduct24 from "@/assets/images/shop/shop-product-2-4.jpg";
import ShopProduct25 from "@/assets/images/shop/shop-product-2-5.jpg";
import ShopProduct26 from "@/assets/images/shop/shop-product-2-6.jpg";
import ShopProduct27 from "@/assets/images/shop/shop-product-2-7.jpg";
import ShopProduct28 from "@/assets/images/shop/shop-product-2-8.jpg";
import ShopProduct29 from "@/assets/images/shop/shop-product-2-9.jpg";
import ShopProduct210 from "@/assets/images/shop/shop-product-2-10.jpg";
import ShopProduct211 from "@/assets/images/shop/shop-product-2-11.jpg";
import ShopProduct212 from "@/assets/images/shop/shop-product-2-12.jpg";
import ProductThumb1 from "@/assets/images/shop/product-thumb-1.jpg";
import ProductThumb2 from "@/assets/images/shop/product-thumb-2.jpg";
import ProductThumb3 from "@/assets/images/shop/product-thumb-3.jpg";
import ProductThumb4 from "@/assets/images/shop/product-thumb-4.jpg";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface ProductBadge {
    text: string;
}

export interface ShopProduct {
    id: number;
    title: string;
    price: string;
    oldPrice?: string;
    rating: string;
    gridImage: StaticImageData | string;
    gridImageHover: StaticImageData | string;
    listImage: StaticImageData | string;
    listImageHover: StaticImageData | string;
    badges?: ProductBadge[];
    link: string;
}

export interface RecentProduct {
    id: number;
    title: string;
    price: string;
    image: StaticImageData | string;
    link: string;
}

export interface Category {
    id: number;
    name: string;
    link: string;
    active?: boolean;
}

// ─── Sort Options ─────────────────────────────────────────────────────────────

export interface SelectOption {
    id?: number;
    value: string;
    label: string;
}

export const sortOptions: SelectOption[] = [
    { id: 1, value: "1", label: "Sort by popular" },
    { id: 2, value: "2", label: "Sort by Price" },
    { id: 3, value: "3", label: "Sort by Ratings" },
];

// ─── Products — 24 items (12 per page × 2 pages) ─────────────────────────────

export const shopProductsData: ShopProduct[] = [
    // ── Page 1 ──
    {
        id: 1,
        title: "Gree Air Conditioner",
        price: "$33.00",
        rating: "4.9",
        gridImage: ShopProduct11,
        gridImageHover: ShopProduct11,
        listImage: ShopProduct21,
        listImageHover: ShopProduct21,
        badges: [{ text: "New" }],
        link: "/product-details",
    },
    {
        id: 2,
        title: "Pliers | Cutting, Gripping",
        price: "$50.00",
        rating: "5.0",
        gridImage: ShopProduct12,
        gridImageHover: ShopProduct12,
        listImage: ShopProduct22,
        listImageHover: ShopProduct22,
        link: "/product-details",
    },
    {
        id: 3,
        title: "Gear and wrench",
        price: "$28.00",
        oldPrice: "$33.00",
        rating: "4.5",
        gridImage: ShopProduct13,
        gridImageHover: ShopProduct13,
        listImage: ShopProduct23,
        listImageHover: ShopProduct23,
        badges: [{ text: "5% Off" }],
        link: "/product-details",
    },
    {
        id: 4,
        title: "Nut Driver",
        price: "$40.00",
        rating: "4.8",
        gridImage: ShopProduct14,
        gridImageHover: ShopProduct14,
        listImage: ShopProduct24,
        listImageHover: ShopProduct24,
        link: "/product-details",
    },
    {
        id: 5,
        title: "Screwdriver and wrench",
        price: "$20.00",
        oldPrice: "$25.00",
        rating: "4.9",
        gridImage: ShopProduct15,
        gridImageHover: ShopProduct15,
        listImage: ShopProduct25,
        listImageHover: ShopProduct25,
        badges: [{ text: "5% Off" }],
        link: "/product-details",
    },
    {
        id: 6,
        title: "Monitor Cable",
        price: "$35.00",
        rating: "4.7",
        gridImage: ShopProduct16,
        gridImageHover: ShopProduct16,
        listImage: ShopProduct26,
        listImageHover: ShopProduct26,
        link: "/product-details",
    },
    {
        id: 7,
        title: "Fiber Optical Cable",
        price: "$27.00",
        rating: "4.6",
        gridImage: ShopProduct17,
        gridImageHover: ShopProduct17,
        listImage: ShopProduct27,
        listImageHover: ShopProduct27,
        badges: [{ text: "New" }],
        link: "/product-details",
    },
    {
        id: 8,
        title: "Electrical Wire",
        price: "$44.00",
        rating: "5.0",
        gridImage: ShopProduct18,
        gridImageHover: ShopProduct18,
        listImage: ShopProduct28,
        listImageHover: ShopProduct28,
        link: "/product-details",
    },
    {
        id: 9,
        title: "Computer power supply",
        price: "$52.00",
        oldPrice: "$49.00",
        rating: "4.9",
        gridImage: ShopProduct19,
        gridImageHover: ShopProduct19,
        listImage: ShopProduct29,
        listImageHover: ShopProduct29,
        badges: [{ text: "3% Off" }],
        link: "/product-details",
    },
    {
        id: 10,
        title: "Fite ON AC_DC Adapter",
        price: "$25.00",
        rating: "4.7",
        gridImage: ShopProduct110,
        gridImageHover: ShopProduct110,
        listImage: ShopProduct210,
        listImageHover: ShopProduct210,
        link: "/product-details",
    },
    {
        id: 11,
        title: "Wireless Mouse Keyboard",
        price: "$43.00",
        oldPrice: "$36.00",
        rating: "4.9",
        gridImage: ShopProduct111,
        gridImageHover: ShopProduct111,
        listImage: ShopProduct211,
        listImageHover: ShopProduct211,
        badges: [{ text: "New" }, { text: "7% Off" }],
        link: "/product-details",
    },
    {
        id: 12,
        title: "Gaming Headset",
        price: "$28.00",
        rating: "4.6",
        gridImage: ShopProduct112,
        gridImageHover: ShopProduct112,
        listImage: ShopProduct212,
        listImageHover: ShopProduct212,
        link: "/product-details",
    },

    // ── Page 2 (duplicated with new ids & price variations) ──
    {
        id: 13,
        title: "Gree Air Conditioner Pro",
        price: "$55.00",
        rating: "4.8",
        gridImage: ShopProduct11,
        gridImageHover: ShopProduct12,
        listImage: ShopProduct21,
        listImageHover: ShopProduct22,
        badges: [{ text: "New" }],
        link: "/product-details",
    },
    {
        id: 14,
        title: "Pliers | Heavy Duty",
        price: "$65.00",
        oldPrice: "$80.00",
        rating: "4.7",
        gridImage: ShopProduct12,
        gridImageHover: ShopProduct13,
        listImage: ShopProduct22,
        listImageHover: ShopProduct23,
        badges: [{ text: "Sale" }],
        link: "/product-details",
    },
    {
        id: 15,
        title: "Gear Set Pro",
        price: "$45.00",
        rating: "4.6",
        gridImage: ShopProduct13,
        gridImageHover: ShopProduct14,
        listImage: ShopProduct23,
        listImageHover: ShopProduct24,
        link: "/product-details",
    },
    {
        id: 16,
        title: "Nut Driver Set",
        price: "$38.00",
        oldPrice: "$48.00",
        rating: "4.9",
        gridImage: ShopProduct14,
        gridImageHover: ShopProduct15,
        listImage: ShopProduct24,
        listImageHover: ShopProduct25,
        badges: [{ text: "10% Off" }],
        link: "/product-details",
    },
    {
        id: 17,
        title: "Precision Screwdriver",
        price: "$22.00",
        rating: "4.5",
        gridImage: ShopProduct15,
        gridImageHover: ShopProduct16,
        listImage: ShopProduct25,
        listImageHover: ShopProduct26,
        link: "/product-details",
    },
    {
        id: 18,
        title: "HDMI Cable 4K",
        price: "$18.00",
        rating: "4.8",
        gridImage: ShopProduct16,
        gridImageHover: ShopProduct17,
        listImage: ShopProduct26,
        listImageHover: ShopProduct27,
        badges: [{ text: "New" }],
        link: "/product-details",
    },
    {
        id: 19,
        title: "Fiber Patch Cable",
        price: "$30.00",
        oldPrice: "$39.00",
        rating: "4.7",
        gridImage: ShopProduct17,
        gridImageHover: ShopProduct18,
        listImage: ShopProduct27,
        listImageHover: ShopProduct28,
        badges: [{ text: "8% Off" }],
        link: "/product-details",
    }
];

// ─── Sidebar Data ─────────────────────────────────────────────────────────────

export const recentProductsData: RecentProduct[] = [
    {
        id: 1,
        title: "Gree Air Conditioner",
        price: "$33.00",
        image: ProductThumb1,
        link: "/product-details",
    },
    {
        id: 2,
        title: "Pliers | Cutting, Gripping",
        price: "$39.00",
        image: ProductThumb2,
        link: "/product-details",
    },
    {
        id: 3,
        title: "Gear and wrench",
        price: "$54.00",
        image: ProductThumb3,
        link: "/product-details",
    },
    {
        id: 4,
        title: "Nut Driver",
        price: "$44.00",
        image: ProductThumb4,
        link: "/product-details",
    },
];

export const categoriesData: Category[] = [
    { id: 1, name: "PC Repair", link: "#" },
    { id: 2, name: "Phone Repair", link: "#", active: true },
    { id: 3, name: "A/C Installation", link: "#" },
    { id: 4, name: "Electrical Wire", link: "#" },
    { id: 5, name: "Laptop Repair", link: "#" },
];

export const productTagsData: string[] = [
    "Repair",
    "Technology",
    "Business",
    "Virus",
    "Desktop",
    "Laptop",
];

export const ITEMS_PER_PAGE = 12;