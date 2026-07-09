import { StaticImageData } from "next/image";
import CartPageImg1 from "@/assets/images/shop/cart-page-img-1.jpg";
import CartPageImg2 from "@/assets/images/shop/cart-page-img-2.jpg";
import CartPageImg3 from "@/assets/images/shop/cart-page-img-3.jpg";
import CartPageImg4 from "@/assets/images/shop/cart-page-img-4.jpg";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface CartItem {
    id: number;
    name: string;
    image: StaticImageData | string;
    price: number;
    quantity: number;
    detailsLink: string;
}

export interface SelectOption {
    id?: number;
    value: string;
    label: string;
}

export interface CartTotalsConfig {
    shippingCost: number;
    discount: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const cartItems: CartItem[] = [
    {
        id: 1,
        name: "Gree Air Conditioner",
        image: CartPageImg1,
        price: 10.99,
        quantity: 1,
        detailsLink: "/product-details",
    },
    {
        id: 2,
        name: "Pliers | Cutting, Gripping",
        image: CartPageImg2,
        price: 10.99,
        quantity: 1,
        detailsLink: "/product-details",
    },
    {
        id: 3,
        name: "Gear and wrench",
        image: CartPageImg3,
        price: 10.99,
        quantity: 1,
        detailsLink: "/product-details",
    },
    {
        id: 4,
        name: "Nut Driver",
        image: CartPageImg4,
        price: 10.99,
        quantity: 1,
        detailsLink: "/product-details",
    },
];

export const countryOptions: SelectOption[] = [
    { id: 1, value: "1", label: "Ban" },
    { id: 2, value: "2", label: "Ind" },
    { id: 3, value: "3", label: "Pak" },
    { id: 4, value: "4", label: "USA" },
];

export const stateCityOptions: SelectOption[] = [
    { id: 1, value: "1", label: "Ban" },
    { id: 2, value: "2", label: "Ind" },
    { id: 3, value: "3", label: "Pak" },
    { id: 4, value: "4", label: "USA" },
];

export const cartTotalsConfig: CartTotalsConfig = {
    shippingCost: 40,
    discount: 0,
};