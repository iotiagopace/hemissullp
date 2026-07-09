import React from "react";
import Header from "@/components/headers/HeaderThree/Header";
import NewsletterThree from "@/components/newsletters/NewsletterThree";
import FooterThree from "@/components/footers/FooterThree";
import MobileNav from "@/components/MoblieNav";
interface LayoutProps {
    children: React.ReactNode;
}
export default function HomeThreeLayout({ children }: LayoutProps) {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                {children}
                <NewsletterThree />
                <FooterThree />
                <MobileNav />
            </div>
        </>
    );
}
