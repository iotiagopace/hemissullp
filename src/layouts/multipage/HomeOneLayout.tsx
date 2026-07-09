import React from "react";
import Header from "@/components/headers/HeaderOne/Header";
import Footer from "@/components/footers/Footer";
import MobileNav from "@/components/MoblieNav";

interface LayoutProps {
    children: React.ReactNode;
}
export default function HomeOneLayout({ children }: LayoutProps) {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                {children}
                <Footer />
                <MobileNav />
            </div>
        </>
    );
}
