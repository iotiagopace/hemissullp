import BannerOneShape1 from "@/assets/images/shapes/banner-one-shape-1.png";
import BannerOneShape2 from "@/assets/images/shapes/banner-one-shape-2.png";
import BannerOneShape3 from "@/assets/images/shapes/banner-one-shape-3.png";
import BannerOneBg from "@/assets/images/backgrounds/banner-one-bg.jpg";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface BannerOneContent {
    subTitle: string;
    title: string;
    text: string;
    btnLabel: string;
    btnLink: string;
}

export interface BannerOneFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

export interface SelectOption {
    id?: number;
    value: string;
    label: string;
}

// ─── Assets ───────────────────────────────────────────────────────────────────

export { BannerOneBg, BannerOneShape1, BannerOneShape2, BannerOneShape3 };

// ─── Data ─────────────────────────────────────────────────────────────────────

export const bannerOneContent: BannerOneContent = {
    subTitle: "Car - Repair - center",
    title: "Premium Vehicle Wrapping Solutions",
    text: "Expert car repair to keep your vehicle performing at its best—plus seasonal offers to help you save.",
    btnLabel: "Read More",
    btnLink: "/about",
};

export const serviceOptions: SelectOption[] = [
    { id: 1, value: "ui-ux-design",        label: "UI/UX Design" },
    { id: 2, value: "brand-identity",      label: "Brand Identity Design" },
    { id: 3, value: "mobile-app-design",   label: "Mobile App Design" },
    { id: 4, value: "web-design",          label: "Web Design" },
    { id: 5, value: "digital-product",     label: "Digital Product" },
    { id: 6, value: "content-writing",     label: "Content Writing" },
];

export const INITIAL_BANNER_FORM: BannerOneFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
};