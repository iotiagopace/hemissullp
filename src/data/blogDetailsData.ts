import { StaticImageData } from "next/image";
import BlogDetailsImg1 from "@/assets/images/blog/blog-details-img-1.jpg";
import BlogDetailsImgBoxImg1 from "@/assets/images/blog/blog-details-img-box-img-1.jpg";
import BlogDetailsImgBoxImg2 from "@/assets/images/blog/blog-details-img-box-img-2.jpg";
import Comment11 from "@/assets/images/blog/comment-1-1.jpg";
import Comment12 from "@/assets/images/blog/comment-1-2.jpg";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface BlogDetailsPost {
    image: StaticImageData | string;
    date: { day: string; month: string };
    author: string;
    commentsCount: string;
    readTime: string;
    title: string;
    text1: string;
    text2: string;
    quote: { text: string; author: string; role: string };
    title2: string;
    text3: string;
    boxImages: (StaticImageData | string)[];
}

export interface BlogComment {
    id: number;
    image: StaticImageData | string;
    name: string;
    date: string;
    text: string;
    replyLink: string;
}

export interface BlogDetailsTag {
    id: number;
    label: string;
}

export interface SocialShareLink {
    id: number;
    icon: string;
    href: string;
}

// ── Form ──────────────────────────────────────────────────────────────────────

export interface CommentFormData {
    name: string;
    email: string;
    message: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const blogDetailsPost: BlogDetailsPost = {
    image: BlogDetailsImg1,
    date: { day: "12", month: "Nov" },
    author: "By Admin",
    commentsCount: "05",
    readTime: "4 Min Read",
    title: "Top 10 DIY Car Repair Tips Every Driver Should Know",
    text1:
        "Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute inure dolor in the reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur snit occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    text2:
        "The wise man therefore always holds in these matters to this principle of selection. He rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains to the selection point.",
    quote: {
        text: '"Globally cultivate ubiquitous growth strategies before team building users. Dramatically transform effective internal or "organic" sources for sound e-services. Authoritatively harness performance based customer service via intermandated"',
        author: "Kane Williamson",
        role: "CEO",
    },
    title2: "What You'll Learn About Car Maintenance",
    text3:
        "Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute inure dolor in the reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur snit occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    boxImages: [BlogDetailsImgBoxImg1, BlogDetailsImgBoxImg2],
};

export const blogComments: BlogComment[] = [
    {
        id: 1,
        image: Comment11,
        name: "Theresa Webb",
        date: "02 June 2026 at 03:30 pm",
        text: "The wise man therefore always holds in these matters to this principle of selection. He rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains to the selection point. But in certain to all this circumstances",
        replyLink: "/blog-details",
    },
    {
        id: 2,
        image: Comment12,
        name: "Cameron Williamson",
        date: "02 June 2026 at 03:30 pm",
        text: "The wise man therefore always holds in these matters to this principle of selection. He rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains to the selection point. But in certain to all this circumstances",
        replyLink: "/blog-details",
    },
];

export const blogDetailsTags: BlogDetailsTag[] = [
    { id: 1, label: "Car Repair" },
    { id: 2, label: "Auto Tips" },
    { id: 3, label: "Car Wash" },
];

export const socialShareLinks: SocialShareLink[] = [
    { id: 1, icon: "fab fa-facebook-f", href: "#" },
    { id: 2, icon: "fab fa-twitter", href: "#" },
    { id: 3, icon: "fab fa-pinterest-p", href: "#" },
    { id: 4, icon: "fab fa-instagram", href: "#" },
];