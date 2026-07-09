"use client";
import { useEffect, useRef, useState } from "react";
import Menu from "@/components/headers/HeaderTwo/Menu";
import { useContext } from "react";
import ProjectContext from "@/components/context/ProjectContext";

export default function Header() {
    const context = useContext(ProjectContext);
    if (!context) throw new Error("Context Null");
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
            <header ref={headerRef} className="main-header-two">
                <nav className="main-menu main-menu-two">
                    <Menu />
                </nav>
            </header>

            <div
                className={`stricky-header stricked-menu main-menu main-menu-two ${isStick ? "stricky-fixed" : ""}`}
            >
                <div className="sticky-header__content">
                    <Menu />
                </div>
                {/* /.sticky-header__content */}
            </div>
        </>
    );
}
