"use client";
import Image from "next/image";
import Link from "next/link";
import Logo2 from "@/assets/images/resources/logo-2.png";
import React, { useState, useContext } from 'react';
import ProjectContext from "./context/ProjectContext";
import { motion, AnimatePresence, type Transition } from "framer-motion";

const dropdownTransition: Transition = { duration: 0.3, ease: "easeInOut" };
const dropdownVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: { opacity: 1, height: "auto" },
};
export default function MobileNav() {
    const context = useContext(ProjectContext);
    if (!context) throw new Error("ProjectContext is null");

    const { isMobile, setIsMobile } = context;
    const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>({});

    const closeNav = () => setIsMobile((pre) => !pre);

    const closeMobileState = () => {
        setIsMobile(false);
        setExpandedMenus({});
    };

    const toggleDropdown = (menuKey: string, e: React.MouseEvent) => {
        e.preventDefault();
        setExpandedMenus(prev => {
            const isCurrentlyOpen = prev[menuKey];
            return isCurrentlyOpen ? {} : { [menuKey]: true };
        });
    };

    return (
        <>
            <div className={`mobile-nav__wrapper ${isMobile ? 'expanded' : ''}`}>
                <div onClick={closeNav} className="mobile-nav__overlay mobile-nav__toggler"></div>
                <div className="mobile-nav__content">
                    <span onClick={closeNav} className="mobile-nav__close mobile-nav__toggler">
                        <i className="fa fa-times"></i>
                    </span>

                    <div className="logo-box">
                        <Link href="/" onClick={closeMobileState} aria-label="logo image">
                            <Image src={Logo2} width="150" alt="Logo" />
                        </Link>
                    </div>

                    <div className="mobile-nav__container">
                        <ul className="main-menu__list">

                            {/* Home */}
                            <li className={`dropdown megamenu ${expandedMenus['menu-home'] ? 'expanded' : ''}`}>
                                <Link href="#" className={expandedMenus['menu-home'] ? 'expanded' : ''}>
                                    Home
                                    <button
                                        aria-label="dropdown toggler"
                                        className={expandedMenus['menu-home'] ? 'expanded' : ''}
                                        onClick={(e) => toggleDropdown('menu-home', e)}
                                    >
                                        <motion.i
                                            className="fa fa-angle-down"
                                            animate={{ rotate: expandedMenus['menu-home'] ? 180 : 0 }}
                                            transition={dropdownTransition}
                                        />
                                    </button>
                                </Link>
                                <AnimatePresence initial={false}>
                                    {expandedMenus['menu-home'] && (
                                        <motion.ul
                                            key="menu-home"
                                            style={{ display: "block" }}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            variants={dropdownVariants}
                                            transition={dropdownTransition}
                                        >
                                            <li><Link href="/" onClick={closeMobileState}>Home One</Link></li>
                                            <li><Link href="/index2" onClick={closeMobileState}>Home Two</Link></li>
                                            <li><Link href="/index3" onClick={closeMobileState}>Home Three</Link></li>
                                            <li><Link href="/index-dark" onClick={closeMobileState}>Home Dark</Link></li>
                                            <li><Link href="/index-one-page" onClick={closeMobileState}>Home One Onepage</Link></li>
                                            <li><Link href="/index2-one-page" onClick={closeMobileState}>Home Two Onepage</Link></li>
                                            <li><Link href="/index3-one-page" onClick={closeMobileState}>Home Three Onepage</Link></li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>

                            {/* About */}
                            <li>
                                <Link href="/about" onClick={closeMobileState}>About</Link>
                            </li>

                            {/* Pages */}
                            <li className={`dropdown ${expandedMenus['menu-pages'] ? 'expanded' : ''}`}>
                                <Link href="#" className={expandedMenus['menu-pages'] ? 'expanded' : ''}>
                                    Pages
                                    <button
                                        aria-label="dropdown toggler"
                                        className={expandedMenus['menu-pages'] ? 'expanded' : ''}
                                        onClick={(e) => toggleDropdown('menu-pages', e)}
                                    >
                                        <motion.i
                                            className="fa fa-angle-down"
                                            animate={{ rotate: expandedMenus['menu-pages'] ? 180 : 0 }}
                                            transition={dropdownTransition}
                                        />
                                    </button>
                                </Link>
                                <AnimatePresence initial={false}>
                                    {expandedMenus['menu-pages'] && (
                                        <motion.ul
                                            key="menu-pages"
                                            style={{ display: "block" }}
                                            className="shadow-box"
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            variants={dropdownVariants}
                                            transition={dropdownTransition}
                                        >
                                            <li><Link href="/team" onClick={closeMobileState}>Team</Link></li>
                                            <li><Link href="/team-details" onClick={closeMobileState}>Team Details</Link></li>
                                            <li><Link href="/projects" onClick={closeMobileState}>Projects</Link></li>
                                            <li><Link href="/project-details" onClick={closeMobileState}>Project Details</Link></li>
                                            <li><Link href="/testimonials" onClick={closeMobileState}>Testimonial</Link></li>
                                            <li><Link href="/faq" onClick={closeMobileState}>Faq</Link></li>
                                            <li><Link href="/404" onClick={closeMobileState}>404 Error</Link></li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>

                            {/* Services */}
                            <li className={`dropdown ${expandedMenus['menu-services'] ? 'expanded' : ''}`}>
                                <Link href="#" className={expandedMenus['menu-services'] ? 'expanded' : ''}>
                                    Services
                                    <button
                                        aria-label="dropdown toggler"
                                        className={expandedMenus['menu-services'] ? 'expanded' : ''}
                                        onClick={(e) => toggleDropdown('menu-services', e)}
                                    >
                                        <motion.i
                                            className="fa fa-angle-down"
                                            animate={{ rotate: expandedMenus['menu-services'] ? 180 : 0 }}
                                            transition={dropdownTransition}
                                        />
                                    </button>
                                </Link>
                                <AnimatePresence initial={false}>
                                    {expandedMenus['menu-services'] && (
                                        <motion.ul
                                            key="menu-services"
                                            style={{ display: "block" }}
                                            className="shadow-box"
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            variants={dropdownVariants}
                                            transition={dropdownTransition}
                                        >
                                            <li><Link href="/services-v-1" onClick={closeMobileState}>Services V-1</Link></li>
                                            <li><Link href="/services-v-2" onClick={closeMobileState}>Services V-2</Link></li>
                                            <li><Link href="/services-v-3" onClick={closeMobileState}>Services V-3</Link></li>
                                            <li><Link href="/service-details" onClick={closeMobileState}>Service Details</Link></li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>

                            {/* Shop */}
                            <li className={`dropdown ${expandedMenus['menu-shop'] ? 'expanded' : ''}`}>
                                <Link href="#" className={expandedMenus['menu-shop'] ? 'expanded' : ''}>
                                    Shop
                                    <button
                                        aria-label="dropdown toggler"
                                        className={expandedMenus['menu-shop'] ? 'expanded' : ''}
                                        onClick={(e) => toggleDropdown('menu-shop', e)}
                                    >
                                        <motion.i
                                            className="fa fa-angle-down"
                                            animate={{ rotate: expandedMenus['menu-shop'] ? 180 : 0 }}
                                            transition={dropdownTransition}
                                        />
                                    </button>
                                </Link>
                                <AnimatePresence initial={false}>
                                    {expandedMenus['menu-shop'] && (
                                        <motion.ul
                                            key="menu-shop"
                                            style={{ display: "block" }}
                                            className="shadow-box"
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            variants={dropdownVariants}
                                            transition={dropdownTransition}
                                        >
                                            <li><Link href="/products" onClick={closeMobileState}>Products</Link></li>
                                            <li><Link href="/product-details" onClick={closeMobileState}>Product Details</Link></li>
                                            <li><Link href="/cart" onClick={closeMobileState}>Cart</Link></li>
                                            <li><Link href="/checkout" onClick={closeMobileState}>Checkout</Link></li>
                                            <li><Link href="/wishlist" onClick={closeMobileState}>Wishlist</Link></li>
                                            <li><Link href="/sign-up" onClick={closeMobileState}>Sign Up</Link></li>
                                            <li><Link href="/login" onClick={closeMobileState}>Login</Link></li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>

                            {/* Blog */}
                            <li className={`dropdown ${expandedMenus['menu-blog'] ? 'expanded' : ''}`}>
                                <Link href="#" className={expandedMenus['menu-blog'] ? 'expanded' : ''}>
                                    Blog
                                    <button
                                        aria-label="dropdown toggler"
                                        className={expandedMenus['menu-blog'] ? 'expanded' : ''}
                                        onClick={(e) => toggleDropdown('menu-blog', e)}
                                    >
                                        <motion.i
                                            className="fa fa-angle-down"
                                            animate={{ rotate: expandedMenus['menu-blog'] ? 180 : 0 }}
                                            transition={dropdownTransition}
                                        />
                                    </button>
                                </Link>
                                <AnimatePresence initial={false}>
                                    {expandedMenus['menu-blog'] && (
                                        <motion.ul
                                            key="menu-blog"
                                            style={{ display: "block" }}
                                            className="shadow-box"
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            variants={dropdownVariants}
                                            transition={dropdownTransition}
                                        >
                                            <li><Link href="/blog" onClick={closeMobileState}>Blog</Link></li>
                                            <li><Link href="/blog-standard" onClick={closeMobileState}>Blog Standard</Link></li>
                                            <li><Link href="/blog-details" onClick={closeMobileState}>Blog Details</Link></li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>

                            {/* Contact */}
                            <li>
                                <Link href="/contact" onClick={closeMobileState}>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <a href="mailto:needhelp@automart.com">needhelp@automart.com</a>
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            <a href="tel:666-888-0000">666 888 0000</a>
                        </li>
                    </ul>
                    <div className="mobile-nav__top">
                        <div className="mobile-nav__social">
                            <Link href="#" className="fab fa-twitter"></Link>
                            <Link href="#" className="fab fa-facebook-square"></Link>
                            <Link href="#" className="fab fa-pinterest-p"></Link>
                            <Link href="#" className="fab fa-instagram"></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}