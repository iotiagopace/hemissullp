"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Menu from "@/components/headers/HeaderDark/Menu";
import { useContext } from "react";
import ProjectContext from "@/components/context/ProjectContext";

export default function Header() {
    const context = useContext(ProjectContext);
    if (!context) throw new Error("Context Null");
    const { setIsSidebar } = context;
    const [isStick, setIsSticky] = useState<boolean>(false);
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const headerHeight = headerRef.current.offsetHeight;
                if (window.scrollY > headerHeight) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header ref={headerRef} className="main-header">
                <div className="main-header-one__top">
                    <div className="container">
                        <div className="main-header-one__top-inner">
                            <ul className="main-menu__contact-list">
                                <li>
                                    <div className="icon">
                                        <i className="icon-location"></i>
                                    </div>
                                    <div className="text">
                                        <h4>Location address:</h4>
                                        <p>10 Caton Ave, Brooklyn, NY 11218</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="icon-envelope"></i>
                                    </div>
                                    <div className="text">
                                        <h4>Email address:</h4>
                                        <p>
                                            <a href="mailto:needhelp&company.com">
                                                scriptfusionscar@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div className="text">
                                        <h4>opening Hours : </h4>
                                        <p>
                                            8:00 AM to 8:00 PM (Saturday to
                                            Thursday)
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <div className="main-header-one__top-right">
                                <div className="main-header-one__top-btn">
                                    <Link href="/contact" className="thm-btn">
                                        <span>Book Now</span>
                                        <i className="fal fa-angle-double-right"></i>
                                    </Link>
                                </div>

                                <div className="main-menu__nav-sidebar-icon">
                                    <Link href="#" className="navSidebar-button" 
                                        onClick={() => setIsSidebar(pre => !pre)}
                                    >
                                        <span className="icon-dots-menu--one"></span>
                                        <span className="icon-dots-menu--two"></span>
                                        <span className="icon-dots-menu--three"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-menu">
                    <Menu />
                </nav>
            </header>

            <div
                className={`stricky-header stricked-menu main-menu ${isStick ? "stricky-fixed" : ""}`}
            >
                <div className="sticky-header__content">
                    <Menu />
                </div>
                {/* /.sticky-header__content */}
            </div>
        </>
    );
}
