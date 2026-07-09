
import React from "react";
import Header from "@/components/headers/HeaderDark/Header";
import Footer from "@/components/footers/Footer";
import MobileNav from "@/components/MoblieNav";

interface LayoutProps {
    children: React.ReactNode;
}
export default function DarkLayout({ children }: LayoutProps) {
    return (
        <>
            <div className="page-wrapper dark-theme">
                <Header />
                {children}
                <Footer />
                <MobileNav />
            </div>
        </>
    );
}
