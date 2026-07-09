import { StaticImageData } from "next/image";
import Services11 from "@/assets/images/services/services-1-1.jpg";
import Services12 from "@/assets/images/services/services-1-2.jpg";
import Services13 from "@/assets/images/services/services-1-3.jpg";
import Services14 from "@/assets/images/services/services-1-4.jpg";
import Services15 from "@/assets/images/services/services-1-5.jpg";
import ServicesOneShapeBg from "@/assets/images/shapes/services-one-shape-bg.jpg";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface ServiceItem {
    id: number;
    icon: string;
    title: string;
    text: string;
    image: StaticImageData | string;
    link: string;
}

export interface SectionTitle {
    tagline: string;
    title: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export { ServicesOneShapeBg };

export const servicesSectionTitle: SectionTitle = {
    tagline: "What We offer",
    title: "Comprehensive Car Solutions",
};

export const servicesOneItems: ServiceItem[] = [
    {
        id: 1,
        icon: "icon-tyre",
        title: "Tire Care & Balance",
        text: "Proper tire care & balancing are essential for a smooth & safe driving experience.",
        image: Services11,
        link: "/service-details",
    },
    {
        id: 2,
        icon: "icon-brake",
        title: "Brake Inspection & Repair",
        text: "Proper tire care & balancing are essential for a smooth & safe driving experience.",
        image: Services12,
        link: "/service-details",
    },
    {
        id: 3,
        icon: "icon-car-oil",
        title: "Quick Oil Change Service",
        text: "Proper tire care & balancing are essential for a smooth & safe driving experience.",
        image: Services13,
        link: "/service-details",
    },
    {
        id: 4,
        icon: "icon-brush",
        title: "Suspension & Steering care",
        text: "Proper tire care & balancing are essential for a smooth & safe driving experience.",
        image: Services14,
        link: "/service-details",
    },
    {
        id: 5,
        icon: "icon-brake",
        title: "Brake Experts Care",
        text: "Proper tire care & balancing are essential for a smooth & safe driving experience.",
        image: Services15,
        link: "/service-details",
    },
];