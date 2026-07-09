import { StaticImageData } from "next/image";
import ProductDetailsImg1 from "@/assets/images/shop/product-details-img-1.jpg";
import ProductDetailsImg2 from "@/assets/images/shop/product-details-img-2.jpg";
import ProductDetailsImg3 from "@/assets/images/shop/product-details-img-3.jpg";
import ProductDetailsThumbImg1 from "@/assets/images/shop/product-details-thumb-img-1.jpg";
import ProductDetailsThumbImg2 from "@/assets/images/shop/product-details-thumb-img-2.jpg";
import ProductDetailsThumbImg3 from "@/assets/images/shop/product-details-thumb-img-3.jpg";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface ProductImage {
    id: number;
    main: StaticImageData | string;
    thumb: StaticImageData | string;
}

export interface ProductSize {
    id: string;
    label: string;
    defaultChecked?: boolean;
}

export interface ProductInfo {
    title: string;
    price: string;
    reviewCount: number;
    ref: string;
    availability: string;
    description: string;
}

export interface SocialLink {
    id: number;
    icon: string;
    href: string;
    label: string;
}

export interface ProductButton {
    id: number;
    label: string;
    to: string;
    className: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const productImages: ProductImage[] = [
    { id: 1, main: ProductDetailsImg1, thumb: ProductDetailsThumbImg1 },
    { id: 2, main: ProductDetailsImg2, thumb: ProductDetailsThumbImg2 },
    { id: 3, main: ProductDetailsImg3, thumb: ProductDetailsThumbImg3 },
];

export const productInfo: ProductInfo = {
    title: "Spring Suspension Part",
    price: "$86.00",
    reviewCount: 55,
    ref: "REF. 4231/406",
    availability: "Available in store",
    description:
        "This high-performance spring suspension part is engineered to deliver superior ride comfort and precise vehicle handling. Designed to OEM specifications, it ensures accurate fitment for most passenger and light commercial vehicles. Built from premium-grade steel with a durable powder-coat finish, this part withstands heavy loads and harsh road conditions, making it an ideal replacement for worn or damaged factory suspension components.",
};

export const productSizes: ProductSize[] = [
    { id: "size1", label: "OEM", defaultChecked: true },
    { id: "size2", label: "STD" },
    { id: "size3", label: "HD" },
    { id: "size4", label: "SPT" },
    { id: "size5", label: "4WD" },
    { id: "size6", label: "LWR" },
];

export const productButtons: ProductButton[] = [
    {
        id: 1,
        label: "Add to Wishlist",
        to: "/wishlist",
        className: "product-details__buttons-1",
    },
    {
        id: 2,
        label: "Add to Cart",
        to: "/cart",
        className: "product-details__buttons-2",
    },
];

export const socialLinks: SocialLink[] = [
    { id: 1, icon: "fab fa-twitter", href: "#", label: "Twitter" },
    { id: 2, icon: "fab fa-facebook", href: "#", label: "Facebook" },
    { id: 3, icon: "fab fa-pinterest-p", href: "#", label: "Pinterest" },
    { id: 4, icon: "fab fa-instagram", href: "#", label: "Instagram" },
];