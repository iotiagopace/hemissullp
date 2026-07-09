"use client";
import { useEffect, useRef, useState } from "react";
import Menu from "@/components/headers/SingleHeaderThree/Menu";
import { useContext } from "react";
import ProjectContext from "@/components/context/ProjectContext";
import MobileNavSingle from "@/components/MobileNavSingle";

const navItems = [
    { linkId: 'home', navItem: 'Home' },
    { linkId: 'about', navItem: 'About' },
    { linkId: 'services', navItem: 'Services' },
    { linkId: 'team', navItem: 'Team' },
    { linkId: 'project', navItem: 'Project' },
    { linkId: 'contact', navItem: 'Contact' },
    { linkId: 'blog', navItem: 'Blog' },
];

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
            <header ref={headerRef} className="main-header-three">
                <nav className="main-menu main-menu-three">
                    <Menu />
                </nav>
            </header>

            <div
                className={`stricky-header stricked-menu main-menu main-menu-three ${isStick ? "stricky-fixed" : ""}`}
            >
                <div className="sticky-header__content">
                    <Menu />
                </div>
                {/* /.sticky-header__content */}
            </div>
            <MobileNavSingle navItems={navItems} />
        </>
    );
}
