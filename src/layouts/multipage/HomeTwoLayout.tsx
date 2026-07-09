import React from "react";
import Header from "@/components/headers/HeaderTwo/Header";
import FooterTwo from "@/components/footers/FooterTwo";
import MobileNav from "@/components/MoblieNav";
interface LayoutProps {
    children: React.ReactNode;
}
export default function HomeTwoLayout({ children }: LayoutProps) {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                {children}
                <FooterTwo />
                <MobileNav />
            </div>
        </>
    );
}
