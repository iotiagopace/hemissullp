"use client";
import Image from "next/image";
import Link from "next/link";
import Logo1 from "@/assets/images/resources/logo-1.png";
import MenuList from "@/components/MenuList";
import { useContext } from "react";
import ProjectContext from "@/components/context/ProjectContext";

export default function Menu() {
    const context = useContext(ProjectContext);
    if (!context) throw new Error("Context Null");
    const { setIsSearch, setIsMobile } = context;
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
                                        onClick={() => setIsMobile(pre => !pre)}
                                    >
                                        <i className="fa fa-bars"></i>
                                    </Link>
                                    <MenuList />
                                </div>
                                <div className="main-header-two__right">
                                    <div className="main-menu-two__search-box">
                                        <Link
                                            href="#"
                                            className="main-menu-two__search searcher-toggler-box fal fa-search"
                                            onClick={() => setIsSearch(pre => !pre)}
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
