"use client";
import Image from "next/image";
import React, { useContext } from 'react';
import Link from "next/link";
import ProjectContext from '@/components/context/ProjectContext';
import Logo1 from '@/assets/images/resources/logo-2.png';

interface NavItem {
    linkId: string;
    navItem: string;
}

interface MobileNavSingleProps {
    navItems: NavItem[];
}

const MobileNavSingle: React.FC<MobileNavSingleProps> = ({ navItems }) => {
    const context = useContext(ProjectContext);
    if (!context) throw new Error("ProjectContext is null");

    const { isMobile, activeSection, scrollToSection, setIsMobile } = context;

    const closeNav = () => {
        setIsMobile((pre) => !pre);
    };

    const closeMobileState = () => {
        setIsMobile(false);
    };

    return (
        <div className={`mobile-nav__wrapper ${isMobile ? "expanded" : ""}`}>
            <div onClick={closeNav} className="mobile-nav__overlay mobile-nav__toggler"></div>
            <div className="mobile-nav__content">
                <span onClick={closeNav} className="mobile-nav__close mobile-nav__toggler">
                    <i className="fa fa-times"></i>
                </span>
                <div className="logo-box">
                    <Link href="/" onClick={closeMobileState} aria-label="logo image">
                        <Image src={Logo1} width="150" alt="Logo" />
                    </Link>
                </div>
                <div className="mobile-nav__container">
                    <ul className="main-menu__list">
                        {navItems.map((item: NavItem) => (
                            <li
                                className={`scrollToLink ${activeSection === item.linkId ? 'current' : ''}`}
                                key={item.linkId}
                            >
                                <Link href={`#${item.linkId}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.linkId);
                                        closeMobileState();
                                    }}
                                >
                                    {item.navItem}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:needhelp@automart.com">needhelp@automart.com</a>
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        <a href="tel:+123456789">+1 234 567 89</a>
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
    );
};

export default MobileNavSingle;