"use client";
import Image from "next/image";
import Link from "next/link";
import Logo1 from "@/assets/images/resources/logo-1.png";
import { useContext, useEffect, useRef } from "react";
import ProjectContext from "@/components/context/ProjectContext";
import { useOnePageMenuScroll } from "@/hooks/useOnePageMenuScroll";

export default function Menu() {
    const context = useContext(ProjectContext);
    if (!context) throw new Error("Context Null");
    const { setIsSearch, setIsMobile, activeSection } = context;
    const menuRef = useRef<HTMLUListElement>(null);

    // ── activate scroll tracking ──────────────────────────────
    const sections = [
        "home",
        "about",
        "services",
        "team",
        "testimonial",
        "contact",
        "blog",
    ];
    useOnePageMenuScroll(sections);

    // ── sync active class with activeSection from context ─────
    useEffect(() => {
        if (!menuRef.current || !activeSection) return;

        menuRef.current.querySelectorAll("li.scrollToLink").forEach((li) => {
            li.classList.remove("current");
        });

        const activeAnchor = menuRef.current.querySelector(
            `li.scrollToLink a[href="#${activeSection}"]`
        );
        const activeLi = activeAnchor?.closest(
            "li.scrollToLink"
        ) as HTMLLIElement | null;
        activeLi?.classList.add("current");
    }, [activeSection]);

    // ── click handler ─────────────────────────────────────────
    const handleScrollClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        target: string
    ) => {
        e.preventDefault();

        const section = document.querySelector(target);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="main-menu-two__wrapper">
                <div className="container">
                    <div className="main-header-two__inner">
                        <div className="main-header-two__logo">
                            <Link href="/">
                                <Image src={Logo1} alt="image" />
                            </Link>
                        </div>
                        <div className="main-header-two__menu-box-outer">
                            <div className="main-header-two__menu-box-top">
                                <ul className="main-menu-two__contact-list">
                                    <li>
                                        <div className="icon">
                                            <i className="icon-phone-call"></i>
                                        </div>
                                        <div className="text">
                                            <p>
                                                <a href="tel:2334567908">
                                                    (+233) 456 79 08
                                                </a>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="icon-envelope"></i>
                                        </div>
                                        <div className="text">
                                            <p>
                                                <a href="mailto:needhelp@automart.com">
                                                    needhelp@automart.com
                                                </a>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="icon-location"></i>
                                        </div>
                                        <div className="text">
                                            <p>
                                                10 Caton Ave, Brooklyn, NY 11218
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="main-menu-two__login-reg-and-social-box">
                                    <div className="main-menu-two__login-reg">
                                        <p>
                                            <Link href="#">Login / Register</Link>
                                        </p>
                                    </div>
                                    <div className="main-menu-two__social">
                                        <Link href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </Link>
                                        <Link href="#">
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                        <Link href="#">
                                            <i className="fab fa-pinterest-p"></i>
                                        </Link>
                                        <Link href="#">
                                            <i className="fab fa-instagram"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="main-header-two__menu-box-content">
                                <div className="main-menu-two__main-menu-box">
                                    <Link
                                        href="#"
                                        className="mobile-nav__toggler"
                                        onClick={() =>
                                            setIsMobile((pre) => !pre)
                                        }
                                    >
                                        <i className="fa fa-bars"></i>
                                    </Link>
                                    <ul
                                        className="main-menu__list one-page-scroll-menu"
                                        ref={menuRef}
                                    >
                                        <li className="dropdown megamenu scrollToLink">
                                            <a
                                                href="#home"
                                                onClick={(
                                                    e: React.MouseEvent<HTMLAnchorElement>
                                                ) =>
                                                    handleScrollClick(
                                                        e,
                                                        "#home"
                                                    )
                                                }
                                            >
                                                Home{" "}
                                            </a>
                                            <ul>
                                                <li>
                                                    <Link href="/">Home One</Link>
                                                </li>
                                                <li>
                                                    <Link href="/index2">
                                                        Home Two
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/index3">
                                                        Home Three
                                                    </Link>
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
                                                        Home Three
                                                        Onepage
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="scrollToLink">
                                            <a
                                                href="#about"
                                                onClick={(
                                                    e: React.MouseEvent<HTMLAnchorElement>
                                                ) =>
                                                    handleScrollClick(
                                                        e,
                                                        "#about"
                                                    )
                                                }
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li className="scrollToLink">
                                            <a
                                                href="#services"
                                                onClick={(
                                                    e: React.MouseEvent<HTMLAnchorElement>
                                                ) =>
                                                    handleScrollClick(
                                                        e,
                                                        "#services"
                                                    )
                                                }
                                            >
                                                services
                                            </a>
                                        </li>
                                        <li className="scrollToLink">
                                            <a
                                                href="#team"
                                                onClick={(
                                                    e: React.MouseEvent<HTMLAnchorElement>
                                                ) =>
                                                    handleScrollClick(
                                                        e,
                                                        "#team"
                                                    )
                                                }
                                            >
                                                Team
                                            </a>
                                        </li>
                                        <li className="scrollToLink">
                                            <a
                                                href="#testimonial"
                                                onClick={(
                                                    e: React.MouseEvent<HTMLAnchorElement>
                                                ) =>
                                                    handleScrollClick(
                                                        e,
                                                        "#testimonial"
                                                    )
                                                }
                                            >
                                                Testimonial
                                            </a>
                                        </li>
                                        <li className="scrollToLink">
                                            <a
                                                href="#contact"
                                                onClick={(
                                                    e: React.MouseEvent<HTMLAnchorElement>
                                                ) =>
                                                    handleScrollClick(
                                                        e,
                                                        "#contact"
                                                    )
                                                }
                                            >
                                                Contact
                                            </a>
                                        </li>
                                        <li className="scrollToLink">
                                            <a
                                                href="#blog"
                                                onClick={(
                                                    e: React.MouseEvent<HTMLAnchorElement>
                                                ) =>
                                                    handleScrollClick(
                                                        e,
                                                        "#blog"
                                                    )
                                                }
                                            >
                                                Blog
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="main-header-two__right">
                                    <div className="main-menu-two__search-box">
                                        <Link
                                            href="#"
                                            className="main-menu-two__search searcher-toggler-box fal fa-search"
                                            onClick={() =>
                                                setIsSearch((pre) => !pre)
                                            }
                                        ></Link>
                                    </div>

                                    <div className="main-menu-two__cart-box">
                                        <Link
                                            href="/cart"
                                            className="main-menu-two__cart"
                                        >
                                            <span className="fal fa-shopping-cart"></span>
                                        </Link>
                                    </div>
                                    <div className="main-header-two__bottom-contact">
                                        <div className="icon-box">
                                            <span className="icon-phone-call"></span>
                                        </div>

                                        <div className="content-box">
                                            <p>Call Any Time</p>
                                            <h4>
                                                <a href="tel:9123466875">
                                                    (+91) 234 668 75
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
