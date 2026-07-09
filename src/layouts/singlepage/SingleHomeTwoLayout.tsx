import React from "react";
import Header from "@/components/headers/SingleHeaderTwo/Header";

import FooterTwo from "@/components/footers/FooterTwo";

interface LayoutProps {
    children: React.ReactNode;
}
export default function SingleHomeTwoLayout({ children }: LayoutProps) {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                {children}

                <FooterTwo />
            </div>
        </>
    );
}
