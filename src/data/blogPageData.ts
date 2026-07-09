import { StaticImageData } from "next/image";
import Blog11 from "@/assets/images/blog/blog-1-1.jpg";
import Blog12 from "@/assets/images/blog/blog-1-2.jpg";
import Blog13 from "@/assets/images/blog/blog-1-3.jpg";
import Blog14 from "@/assets/images/blog/blog-1-4.jpg";
import Blog15 from "@/assets/images/blog/blog-1-5.jpg";
import Blog16 from "@/assets/images/blog/blog-1-6.jpg";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export type FadeVariant = "fadeInLeft" | "fadeInRight";

export interface BlogPost {
    id: number;
    image: StaticImageData | string;
    date: string;
    author: string;
    authorLink: string;
    title: string;
    text: string;
    link: string;
    fadeVariant: FadeVariant;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        image: Blog11,
        date: "05 Oct,2025",
        author: "By Admin",
        authorLink: "/blog-details",
        title: "Top Car Repair Tips to Extend Your Vehicle's Life",
        text: "Expert car repair services don't just fix issues; they safeguard your vehicle with precision and skilled craftsmanship.",
        link: "/blog-details",
        fadeVariant: "fadeInLeft",
    },
    {
        id: 2,
        image: Blog12,
        date: "05 Oct,2025",
        author: "By Admin",
        authorLink: "/blog-details",
        title: "Car Repair & Maintenance Tips for Safe Driving",
        text: "Expert car repair services don't just fix issues; they safeguard your vehicle with precision and skilled craftsmanship.",
        link: "/blog-details",
        fadeVariant: "fadeInRight",
    },
    {
        id: 3,
        image: Blog13,
        date: "05 Oct,2025",
        author: "By Admin",
        authorLink: "/blog-details",
        title: "Understanding Their Role in Engine Performance",
        text: "Expert car repair services don't just fix issues; they safeguard your vehicle with precision and skilled craftsmanship.",
        link: "/blog-details",
        fadeVariant: "fadeInLeft",
    },
    {
        id: 4,
        image: Blog14,
        date: "05 Oct,2025",
        author: "By Admin",
        authorLink: "/blog-details",
        title: "Top Car Repair Tips to Extend Your Vehicle's Life",
        text: "Expert car repair services don't just fix issues; they safeguard your vehicle with precision and skilled craftsmanship.",
        link: "/blog-details",
        fadeVariant: "fadeInLeft",
    },
    {
        id: 5,
        image: Blog15,
        date: "05 Oct,2025",
        author: "By Admin",
        authorLink: "/blog-details",
        title: "Car Repair & Maintenance Tips for Safe Driving",
        text: "Expert car repair services don't just fix issues; they safeguard your vehicle with precision and skilled craftsmanship.",
        link: "/blog-details",
        fadeVariant: "fadeInRight",
    },
    {
        id: 6,
        image: Blog16,
        date: "05 Oct,2025",
        author: "By Admin",
        authorLink: "/blog-details",
        title: "Understanding Their Role in Engine Performance",
        text: "Expert car repair services don't just fix issues; they safeguard your vehicle with precision and skilled craftsmanship.",
        link: "/blog-details",
        fadeVariant: "fadeInLeft",
    },
    {
        id: 7,
        image: Blog14,
        date: "05 Oct,2025",
        author: "By Admin",
        authorLink: "/blog-details",
        title: "Top Car Repair Tips to Extend Your Vehicle's Life",
        text: "Expert car repair services don't just fix issues; they safeguard your vehicle with precision and skilled craftsmanship.",
        link: "/blog-details",
        fadeVariant: "fadeInLeft",
    },
    {
        id: 8,
        image: Blog15,
        date: "05 Oct,2025",
        author: "By Admin",
        authorLink: "/blog-details",
        title: "Car Repair & Maintenance Tips for Safe Driving",
        text: "Expert car repair services don't just fix issues; they safeguard your vehicle with precision and skilled craftsmanship.",
        link: "/blog-details",
        fadeVariant: "fadeInRight",
    },
    {
        id: 9,
        image: Blog16,
        date: "05 Oct,2025",
        author: "By Admin",
        authorLink: "/blog-details",
        title: "Understanding Their Role in Engine Performance",
        text: "Expert car repair services don't just fix issues; they safeguard your vehicle with precision and skilled craftsmanship.",
        link: "/blog-details",
        fadeVariant: "fadeInLeft",
    },
];

export const BLOG_ITEMS_PER_PAGE = 6;