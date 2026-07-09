"use client";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import Logo1 from "@/assets/images/resources/logo-1.png";
import { useContext, useEffect, useRef, useState } from "react";
import ProjectContext from "@/components/context/ProjectContext";
import { useOnePageMenuScroll } from "@/hooks/useOnePageMenuScroll";
import CustomSelect from "@/components/elements/CustomSelect";

const languageOptions = [
    { id: 1, value: "eng", label: "ENG" },
    { id: 2, value: "fra", label: "FRA" },
    { id: 3, value: "ger", label: "GER" },
    { id: 4, value: "ita", label: "ITA" },
];
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
        "project",
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
    // language changer
    const [language, setLanguage] = useState("eng");

    const handleLanguageChange = (val: string) => {
        setLanguage(val);
        const selected = languageOptions.find((o) => o.value === val);
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: `Language changed to ${selected?.label}`,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        });
    };
    return (
        <>
            <div className="main-menu-three__wrapper">
                <div className="container">
                    <div className="main-header-three__inner">
                        <div className="main-header-three__logo">
                            <Link href="/">
                                <Image src={Logo1} alt="image" />
                            </Link>
                        </div>
                        <div className="main-header-three__menu-box-outer">
                            <div className="main-header-three__menu-box-top">
                                <div className="main-menu-three__note-text">
                                    <p>
                                        Note: Experience the Art of Car Wrapping
                                        Excellence!
                                    </p>
                                </div>
                                <div className="main-menu-three__menu-language-and-social-box">
                                    <div className="main-menu-three__top-menu">
                                        <ul>
                                            <li>
                                                <Link href="#">News & Media</Link>
                                            </li>
                                            <li>
                                                <Link href="#">Investors</Link>
                                            </li>
                                            <li>
                                                <Link href="#">Services</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="main-menu-three__language-switcher">
                                        <div className="icon">
                                            <span className="fa fa-globe"></span>
                                        </div>

                                        <div className="language-switcher clearfix">
                                            <form className="clearfix">
                                                <div className="select-box clearfix">
                                                    <CustomSelect
                                                        optionArray={languageOptions}
                                                        value={language}
                                                        onChange={handleLanguageChange}
                                                        name="language"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="main-menu-three__social">
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
                            <div className="main-header-three__menu-box-content">
                                <div className="main-menu-three__main-menu-box">
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
                                                href="#project"
                                                onClick={(
                                                    e: React.MouseEvent<HTMLAnchorElement>
                                                ) =>
                                                    handleScrollClick(
                                                        e,
                                                        "#project"
                                                    )
                                                }
                                            >
                                                Project
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
                                <div className="main-header-three__right">
                                    <div className="main-menu-three__search-box">
                                        <Link
                                            href="#"
                                            className="main-menu-three__search searcher-toggler-box fal fa-search"
                                            onClick={() =>
                                                setIsSearch((pre) => !pre)
                                            }
                                        ></Link>
                                    </div>

                                    <div className="main-menu-three__cart-box">
                                        <Link
                                            href="/cart"
                                            className="main-menu-three__cart"
                                        >
                                            <span className="fal fa-shopping-cart"></span>
                                        </Link>
                                    </div>
                                    <div className="main-header-three__bottom-contact">
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
