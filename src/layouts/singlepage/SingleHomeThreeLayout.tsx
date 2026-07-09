import React from "react";
import Header from "@/components/headers/SingleHeaderThree/Header";
import NewsletterThree from "@/components/newsletters/NewsletterThree";

import FooterThree from "@/components/footers/FooterThree";

interface LayoutProps {
    children: React.ReactNode;
}
export default function SingleHomeThreeLayout({ children }: LayoutProps) {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                {children}
                <NewsletterThree />
                <FooterThree />
            </div>
        </>
    );
}
