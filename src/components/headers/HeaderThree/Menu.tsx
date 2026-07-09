"use client";
import Image from "next/image";
import { useState, useContext } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import Logo1 from "@/assets/images/resources/logo-1.png";
import MenuList from "@/components/MenuList";
import CustomSelect from "@/components/elements/CustomSelect";
import ProjectContext from "@/components/context/ProjectContext";

const languageOptions = [
    { id: 1, value: "eng", label: "ENG" },
    { id: 2, value: "fra", label: "FRA" },
    { id: 3, value: "ger", label: "GER" },
    { id: 4, value: "ita", label: "ITA" },
];

export default function Menu() {
    const context = useContext(ProjectContext);
    if (!context) throw new Error("Context Null");
    const { setIsSearch, setIsMobile } = context;
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

                        {/* Logo */}
                        <div className="main-header-three__logo">
                            <Link href="/">
                                <Image src={Logo1} alt="Logo" />
                            </Link>
                        </div>

                        <div className="main-header-three__menu-box-outer">

                            {/* Top Bar */}
                            <div className="main-header-three__menu-box-top">
                                <div className="main-menu-three__note-text">
                                    <p>Note: Experience the Art of Car Wrapping Excellence!</p>
                                </div>

                                <div className="main-menu-three__menu-language-and-social-box">

                                    {/* Top Links */}
                                    <div className="main-menu-three__top-menu">
                                        <ul>
                                            <li><Link href="#">News & Media</Link></li>
                                            <li><Link href="#">Investors</Link></li>
                                            <li><Link href="#">Services</Link></li>
                                        </ul>
                                    </div>

                                    {/* Language Switcher */}
                                    <div className="main-menu-three__language-switcher">
                                        <div className="icon">
                                            <span className="fa fa-globe"></span>
                                        </div>
                                        <div className="language-switcher clearfix">
                                            <div className="select-box clearfix">
                                                <CustomSelect
                                                    optionArray={languageOptions}
                                                    value={language}
                                                    onChange={handleLanguageChange}
                                                    name="language"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="main-menu-three__social">
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                                    </div>

                                </div>
                            </div>

                            {/* Main Nav */}
                            <div className="main-header-three__menu-box-content">
                                <div className="main-menu-three__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={() => setIsMobile(pre => !pre)}>
                                        <i className="fa fa-bars"></i>
                                    </Link>
                                    <MenuList />
                                </div>

                                <div className="main-header-three__right">
                                    {/* Search */}
                                    <div className="main-menu-three__search-box">
                                        <Link
                                            href="#"
                                            className="main-menu-three__search searcher-toggler-box fal fa-search"
                                            onClick={() => setIsSearch(pre => !pre)}
                                        ></Link>
                                    </div>

                                    {/* Cart */}
                                    <div className="main-menu-three__cart-box">
                                        <Link href="/cart" className="main-menu-three__cart">
                                            <span className="fal fa-shopping-cart"></span>
                                        </Link>
                                    </div>

                                    {/* Phone */}
                                    <div className="main-header-three__bottom-contact">
                                        <div className="icon-box">
                                            <span className="icon-phone-call"></span>
                                        </div>
                                        <div className="content-box">
                                            <p>Call Any Time</p>
                                            <h4>
                                                <a href="tel:9123466875">(+91) 234 668 75</a>
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