"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function MenuList() {
    const location = usePathname();
    const menuRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (!menuRef.current) return;

        const currentPath = location;
        const menu = menuRef.current;

        // Reset all active states
        menu.querySelectorAll("li").forEach((li) => {
            li.classList.remove("current");
        });

        let hasMatch = false;

        const topLevelItems = Array.from(menu.children) as HTMLLIElement[];

        topLevelItems.forEach((li) => {
            const childUl = li.querySelector(":scope > ul");

            // ---------- DROPDOWN ITEMS ----------
            if (childUl) {
                const childLinks = childUl.querySelectorAll("a");
                let childMatched = false;

                childLinks.forEach((link) => {
                    const href = link.getAttribute("href");

                    if (href && href !== "#" && currentPath === href) {
                        childMatched = true;
                        // hasMatch = true;

                        link.closest("li")?.classList.add("current");
                    }
                });

                if (childMatched) {
                    li.classList.add("current");
                }

                return;
            }

            // ---------- NORMAL LINKS ----------
            const link = li.querySelector(":scope > a");
            const href = link?.getAttribute("href");

            if (href && href === currentPath) {
                li.classList.add("current");
                hasMatch = true;
            }
        });

        // ---------- HOME (STRICT & SAFE) ----------
        if (currentPath === "/" && !hasMatch) {
            const homeLi = menu.querySelector("li:first-child");
            homeLi?.classList.add("current");
        } else {
            const homeLi = menu.querySelector("li:first-child");

            if (!homeLi?.classList.contains("current")) {
                homeLi?.classList.remove("current");
            }
        }
    }, [location]);

    return (
        <ul className="main-menu__list" ref={menuRef}>
            <li className="dropdown megamenu">
                <Link href="#">Home </Link>
                <ul>
                    <li>
                        <Link href="/">Home One</Link>
                    </li>
                    <li>
                        <Link href="/index2">Home Two</Link>
                    </li>
                    <li>
                        <Link href="/index3">Home Three</Link>
                    </li>
                    <li>
                        <Link href="/index-dark">Home Dark</Link>
                    </li>
                    <li>
                        <Link href="/index-one-page">
                            Home One Onepage
                        </Link>
                    </li>
                    <li>
                        <Link href="/index2-one-page">
                            Home Two Onepage
                        </Link>
                    </li>
                    <li>
                        <Link href="/index3-one-page">
                            Home Three Onepage
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li className="dropdown">
                <Link href="#">Pages</Link>
                <ul>
                    <li>
                        <Link href="/team">Team</Link>
                    </li>
                    <li>
                        <Link href="/team-details">Team Details</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/project-details">Project Details</Link>
                    </li>
                    <li>
                        <Link href="/testimonials">Testimonial</Link>
                    </li>
                    <li>
                        <Link href="/faq">Faq</Link>
                    </li>
                    <li>
                        <Link href="/404">404 Error</Link>
                    </li>
                </ul>
            </li>
            <li className="dropdown">
                <Link href="#">services</Link>
                <ul>
                    <li>
                        <Link href="/services-v-1">Services V-1</Link>
                    </li>
                    <li>
                        <Link href="/services-v-2">Services V-2</Link>
                    </li>
                    <li>
                        <Link href="/services-v-3">Services V-3</Link>
                    </li>
                    <li>
                        <Link href="/service-details">Service Details</Link>
                    </li>
                </ul>
            </li>
            <li className="dropdown">
                <Link href="#">Shop</Link>
                <ul>
                    <li>
                        <Link href="/products">Products</Link>
                    </li>
                    <li>
                        <Link href="/product-details">Product Details</Link>
                    </li>
                    <li>
                        <Link href="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link href="/checkout">Checkout</Link>
                    </li>
                    <li>
                        <Link href="/wishlist">Wishlist</Link>
                    </li>
                    <li>
                        <Link href="/sign-up">Sign Up</Link>
                    </li>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                </ul>
            </li>
            <li className="dropdown">
                <Link href="#">Blog</Link>
                <ul>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/blog-standard">Blog Standard</Link>
                    </li>
                    <li>
                        <Link href="/blog-details">Blog Details</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    );
}
