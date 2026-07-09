// ─── Image imports ────────────────────────────────────────────────────────────
import { StaticImageData } from "next/image";
import ProjectDetailsImg1 from "@/assets/images/project/project-details-img-1.jpg";
import ProjectDetailsTextImg from "@/assets/images/project/project-details-text-img.jpg";
import ProjectDetailsPointsImg from "@/assets/images/project/project-details-points-img.jpg";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface ProjectSection {
    title: string;
    text: string;
}

export interface ProjectTextAndImg {
    text: string;
    imgSrc: StaticImageData | string;
    imgAlt: string;
}

export interface ProjectPoint {
    id: number;
    text: string;
}

export interface ProjectImgAndPoints {
    imgSrc: StaticImageData | string;
    imgAlt: string;
    points: ProjectPoint[];
}

export interface ProjectInfoItem {
    id: number;
    label: string;
    value: string;
}

export interface ProjectContactPoint {
    id: number;
    iconClass: string;
    href: string;
    isLink: boolean;
    /** Raw HTML allowed for line breaks; keep simple (no user input). */
    content: string;
}

export interface ProjectNavItem {
    id: number;
    label: string;
    href: string;
    /** "prev" places the icon before the text; "next" places it after */
    direction: "prev" | "next";
}

export interface ProjectDetailsData {
    mainImgSrc: StaticImageData | string;
    mainImgAlt: string;
    overviewSection: ProjectSection;
    challengeSection: ProjectSection;
    textAndImg: ProjectTextAndImg;
    resultSection: Omit<ProjectSection, "text"> & { text: string };
    imgAndPoints: ProjectImgAndPoints;
    informationItems: ProjectInfoItem[];
    getStarted: {
        title: string;
        text: string;
        contactPoints: ProjectContactPoint[];
    };
    navItems: ProjectNavItem[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const projectDetailsContentData: ProjectDetailsData = {
    mainImgSrc: ProjectDetailsImg1,
    mainImgAlt: "Project details main image",

    overviewSection: {
        title: "About The Project Overview",
        text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborer et dolore magna aliqua. Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute inure dolor in the reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur snit occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    challengeSection: {
        title: "The Project Challenge",
        text: "Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute inure dolor in the reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur snit occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    textAndImg: {
        text: "The wise man therefore always holds in these matters to this principle of selection. He rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains to the selection point. But in certain to all this circumstances",
        imgSrc: ProjectDetailsTextImg,
        imgAlt: "Project details text image",
    },

    resultSection: {
        title: "The Result Of Our Project",
        text: "Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute inure dolor in the reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur snit occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    imgAndPoints: {
        imgSrc: ProjectDetailsPointsImg,
        imgAlt: "Project details points image",
        points: [
            { id: 1, text: "Fact that a reader will be distr acted bioiiy dablea" },
            { id: 2, text: "Acted bioiiy the rea dablea content of a page" },
            { id: 3, text: "When looking at its layout toile point" },
            { id: 4, text: "Bioiiy the rea dablea content of a page looking" },
        ],
    },

    informationItems: [
        { id: 1, label: "Client",    value: "Jonathan Smith" },
        { id: 2, label: "Category",  value: "Upgrade Old Wiring" },
        { id: 3, label: "date",      value: "02 June 2024" },
        { id: 4, label: "location",  value: "12 Green Road 05 New Yark" },
    ],

    getStarted: {
        title: "Get Started Today",
        text: "Pianissimos of dulcimers qui therefore always holds in these matters to this principle",
        contactPoints: [
            {
                id: 1,
                iconClass: "icon-call",
                href: "tel:585858575084",
                isLink: true,
                content: "+58 585 857 5084",
            },
            {
                id: 2,
                iconClass: "icon-envelope",
                href: "mailto:example@gmail.com",
                isLink: true,
                content: "example@gmail.com",
            },
            {
                id: 3,
                iconClass: "icon-location",
                href: "",
                isLink: false,
                content: "4517 Washington Ave. Manchester,<br /> Kentucky 39495",
            },
        ],
    },

    navItems: [
        { id: 1, label: "Previous Project", href: "#", direction: "prev" },
        { id: 2, label: "Next Project",     href: "#", direction: "next" },
    ],
};