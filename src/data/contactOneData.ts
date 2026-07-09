import ContactOneBg from "@/assets/images/backgrounds/contact-one-bg.jpg";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface ContactInfoItem {
    id: number;
    icon: string;
    label: string;
    value: string;
    href?: string;
}

export interface SectionTitle {
    tagline: string;
    title: string;
}

export interface ContactOneFormData {
    name: string;
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

export { ContactOneBg };

// ─── Data ─────────────────────────────────────────────────────────────────────

export const contactOneSectionTitle: SectionTitle = {
    tagline: "Contact Us",
    title: "Connect With Our Team",
};

export const contactInfoItems: ContactInfoItem[] = [
    {
        id: 1,
        icon: "icon-phone-call",
        label: "Have Question ?",
        value: "Free +00 (92110) 85413",
        href: "tel:009211085413",
    },
    {
        id: 2,
        icon: "icon-envelope",
        label: "Write Email",
        value: "automart@creative.com",
        href: "mailto:automart@creative.com",
    },
    {
        id: 3,
        icon: "icon-location",
        label: "Our Location",
        value: "88 Broklyn Golden USA",
    },
];

export const contactServiceOptions: SelectOption[] = [
    { id: 1, value: "ui-ux-design",      label: "UI/UX Design" },
    { id: 2, value: "brand-identity",    label: "Brand Identity Design" },
    { id: 3, value: "mobile-app-design", label: "Mobile App Design" },
    { id: 4, value: "web-design",        label: "Web Design" },
    { id: 5, value: "digital-product",   label: "Digital Product" },
    { id: 6, value: "content-writing",   label: "Content Writing" },
];

export const INITIAL_CONTACT_FORM: ContactOneFormData = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
};