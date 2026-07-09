import { StaticImageData } from "next/image";
import WishlistPageImg1 from "@/assets/images/shop/wishlist-page-img-1.jpg";
import WishlistPageImg2 from "@/assets/images/shop/wishlist-page-img-2.jpg";
import WishlistPageImg3 from "@/assets/images/shop/wishlist-page-img-3.jpg";
import WishlistPageImg4 from "@/assets/images/shop/wishlist-page-img-4.jpg";

export interface WishlistItem {
    id: number;
    name: string;
    image: StaticImageData | string;
    price: string;
    stockStatus: "In Stock" | "Out of Stock" | "Pre-Order";
    detailsLink: string;
}

export interface SocialLink {
    id: number;
    icon: string;
    href: string;
    label: string;
}

export const wishlistItems: WishlistItem[] = [
    {
        id: 1,
        name: "Fite ON AC_DC Adapter",
        image: WishlistPageImg1,
        price: "$120.99",
        stockStatus: "In Stock",
        detailsLink: "/product-details",
    },
    {
        id: 2,
        name: "Gaming Headset",
        image: WishlistPageImg2,
        price: "$100.99",
        stockStatus: "In Stock",
        detailsLink: "/product-details",
    },
    {
        id: 3,
        name: "Wireless Mouse",
        image: WishlistPageImg3,
        price: "$106.99",
        stockStatus: "In Stock",
        detailsLink: "/product-details",
    },
    {
        id: 4,
        name: "Screwdriver and wrench",
        image: WishlistPageImg4,
        price: "$170.00",
        stockStatus: "In Stock",
        detailsLink: "/product-details",
    },
];

export const wishlistSocialLinks: SocialLink[] = [
    {
        id: 1,
        icon: "fab fa-twitter",
        href: "#",
        label: "Twitter",
    },
    {
        id: 2,
        icon: "fab fa-facebook",
        href: "#",
        label: "Facebook",
    },
    {
        id: 3,
        icon: "fab fa-pinterest-p",
        href: "#",
        label: "Pinterest",
    },
    {
        id: 4,
        icon: "fab fa-instagram",
        href: "#",
        label: "Instagram",
    },
];