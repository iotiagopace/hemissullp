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
            <div className="main-menu__wrapper">
                <div className="main-header-one__bottom">
                    <div className="container">
                        <div className="main-header-one__bottom-inner">
                            <div className="main-header-one__bottom-left">
                                <div className="main-header__logo">
                                    <Link href="/">
                                        <Image src={Logo1} alt="image" />
                                    </Link>
                                </div>

                                <div className="main-menu__main-menu-box">
                                    <Link
                                        href="#"
                                        className="mobile-nav__toggler"
                                        onClick={() => setIsMobile(pre => !pre)}
                                    >
                                        <i className="fa fa-bars"></i>
                                    </Link>
                                    <MenuList />
                                </div>
                            </div>
                            <div className="main-header-one__bottom-right">
                                <div className="main-menu__search-box">
                                    <Link
                                        href="#"
                                        className="main-menu__search searcher-toggler-box fal fa-search"
                                        onClick={() => setIsSearch(pre => !pre)}
                                    ></Link>
                                </div>

                                <div className="main-menu__cart-box">
                                    <Link
                                        href="/cart"
                                        className="main-menu__cart"
                                    >
                                        <span className="fal fa-shopping-cart"></span>
                                    </Link>
                                </div>

                                <div className="main-header-one__bottom-contact">
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
        </>
    );
}
