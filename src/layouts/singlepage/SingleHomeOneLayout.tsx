import React from "react";
import Header from "@/components/headers/SingleHeaderOne/Header";

import Footer from "@/components/footers/Footer";

interface LayoutProps {
    children: React.ReactNode;
}
export default function SingleHomeOneLayout({ children }: LayoutProps) {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                {children}

                <Footer />
            </div>
        </>
    );
}
