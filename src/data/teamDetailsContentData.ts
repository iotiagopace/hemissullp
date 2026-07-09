import { StaticImageData } from "next/image";
import TeamDetailsImg1 from "@/assets/images/team/team-details-img-1.jpg";

// ── Interfaces ────────────────────────────────────────────────────────────────

export interface SocialLink {
    href: string;
    iconClass: string;
}

export interface AddressItem {
    iconClass: string;
    label: string;
    value: string;
    /** If provided, wraps the value in an <a> tag with this href (tel: / mailto:) */
    href?: string;
}

export interface PracticeArea {
    label: string;
}

export interface SkillBar {
    title: string;
    percent: number; // e.g. 80  (not "80%")
}

export interface TeamMember {
    name: string;
    subTitle: string;
    image: StaticImageData | string;
    socialLinks: SocialLink[];
    clientText: string;
    addressItems: AddressItem[];
    biographyText: string;
    practiceAreasCol1: PracticeArea[];
    practiceAreasCol2: PracticeArea[];
    skills: SkillBar[];
}

// ── Data ─────────────────────────────────────────────────────────────────────

export const teamMember: TeamMember = {
    name: "Adam Alex",
    subTitle: "Repair Assistant",
    image: TeamDetailsImg1,

    socialLinks: [
        { href: "#", iconClass: "fab fa-facebook-f" },
        { href: "#", iconClass: "fab fa-twitter" },
        { href: "#", iconClass: "fab fa-pinterest-p" },
        { href: "#", iconClass: "fab fa-instagram" },
    ],

    clientText:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore ma gnam aliquam quaerat voluptatem. Ut enim ad minima veniam",

    addressItems: [
        {
            iconClass: "icon-location",
            label: "Address",
            value: "4140 Parker Rd. Allentown, New Mexico 31134",
        },
        {
            iconClass: "icon-call",
            label: "Phone Number",
            value: "(208) 555-0112",
            href: "tel:2085550112",
        },
        {
            iconClass: "icon-envelope",
            label: "Email",
            value: "michael.mitc@example.com",
            href: "mailto:michael.mitc@example.com",
        },
    ],

    biographyText:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore ma gnam aliquam quaerat voluptatem. Ut enim ad minima veniam",

    practiceAreasCol1: [
        { label: "Engine Diagnostics" },
        { label: "Brake Repair" },
        { label: "Gearbox Support" },
    ],

    practiceAreasCol2: [
        { label: "Cooling Repair" },
        { label: "Car Painting" },
        { label: "Car Remodling" },
    ],

    skills: [
        { title: "Repair Device", percent: 80 },
        { title: "Replace Device", percent: 95 },
        { title: "Diagnostics", percent: 65 },
    ],
};