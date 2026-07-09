import { StaticImageData } from "next/image";
import BlogStandard11 from "@/assets/images/blog/blog-standard-1-1.jpg";
import BlogStandard12 from "@/assets/images/blog/blog-standard-1-2.jpg";
import BlogStandard13 from "@/assets/images/blog/blog-standard-1-3.jpg";
import BlogLp1 from "@/assets/images/blog/blog-lp-1.jpg";
import BlogLp2 from "@/assets/images/blog/blog-lp-2.jpg";
import BlogLp3 from "@/assets/images/blog/blog-lp-3.jpg";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface BlogStandardPost {
    id: number;
    image: StaticImageData | string;
    author: string;
    date: string;
    title: string;
    text: string;
    link: string;
}

export interface SidebarCategory {
    id: number;
    name: string;
    count: number;
    active?: boolean;
    link: string;
}

export interface SidebarRecentPost {
    id: number;
    image: StaticImageData | string;
    date: string;
    title: string;
    link: string;
}

// ─── Blog Posts — 6 items (3 per page × 2 pages) ─────────────────────────────

export const blogStandardPosts: BlogStandardPost[] = [
    {
        id: 1,
        image: BlogStandard11,
        author: "By Lifecure",
        date: "14 Feb,2026",
        title: "Top 10 DIY Car Repair Tips Every Driver Should Know",
        text: "Keeping your car in top condition isn't just about avoiding unexpected breakdowns it's about ensuring your safety, preserving your vehicle's value, and saving money in the long run. Regular maintenance and timely repairs help detect minor issues before they turn into costly problems.",
        link: "/blog-details",
    },
    {
        id: 2,
        image: BlogStandard12,
        author: "By Lifecure",
        date: "14 Feb,2026",
        title: "What You'll Learn About Car Maintenance",
        text: "Keeping your car in top condition isn't just about avoiding unexpected breakdowns it's about ensuring your safety, preserving your vehicle's value, and saving money in the long run. Regular maintenance and timely repairs help detect minor issues before they turn into costly problems.",
        link: "/blog-details",
    },
    {
        id: 3,
        image: BlogStandard13,
        author: "By Lifecure",
        date: "14 Feb,2026",
        title: "Understanding Their Role in Engine Performance",
        text: "Keeping your car in top condition isn't just about avoiding unexpected breakdowns it's about ensuring your safety, preserving your vehicle's value, and saving money in the long run. Regular maintenance and timely repairs help detect minor issues before they turn into costly problems.",
        link: "/blog-details",
    },
    // ── Page 2 (duplicates with new ids) ──
    {
        id: 4,
        image: BlogStandard12,
        author: "By Lifecure",
        date: "20 Mar,2026",
        title: "How to Spot Early Signs of Engine Trouble",
        text: "Keeping your car in top condition isn't just about avoiding unexpected breakdowns it's about ensuring your safety, preserving your vehicle's value, and saving money in the long run. Regular maintenance and timely repairs help detect minor issues before they turn into costly problems.",
        link: "/blog-details",
    },
    {
        id: 5,
        image: BlogStandard13,
        author: "By Lifecure",
        date: "20 Mar,2026",
        title: "Essential Car Care Guide for Every Season",
        text: "Keeping your car in top condition isn't just about avoiding unexpected breakdowns it's about ensuring your safety, preserving your vehicle's value, and saving money in the long run. Regular maintenance and timely repairs help detect minor issues before they turn into costly problems.",
        link: "/blog-details",
    }
];

export const BLOG_STANDARD_PER_PAGE = 3;

// ─── Sidebar Data ─────────────────────────────────────────────────────────────

export const sidebarCategories: SidebarCategory[] = [
    { id: 1, name: "Chassis Excellence", count: 12, link: "#" },
    { id: 2, name: "Core System Solutions", count: 15, link: "#", active: true },
    { id: 3, name: "Intelligent Repair Systems", count: 8, link: "#" },
    { id: 4, name: "ExactFit Engineering", count: 20, link: "#" },
    { id: 5, name: "Innovative Auto Builds", count: 14, link: "#" },
    { id: 6, name: "Care Wash", count: 5, link: "#" },
];

export const sidebarRecentPosts: SidebarRecentPost[] = [
    { id: 1, image: BlogLp1, date: "March 18, 2026", title: "Engineered for Elite Performance", link: "/blog-details" },
    { id: 2, image: BlogLp2, date: "April 18, 2026", title: "Engineered for Elite Performance", link: "/blog-details" },
    { id: 3, image: BlogLp3, date: "Jun 18, 2026", title: "Engineered for Elite Performance", link: "/blog-details" },
];

export const sidebarTags: string[] = [
    "Car Repair",
    "Auto Tips",
    "Brake Fix",
    "Oil Change",
    "DIY Maintenance",
    "Car Wash",
];