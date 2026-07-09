"use client";
import React, { useState } from "react";
import ProjectContext from "./ProjectContext";
import type { contextType } from "../../types/context";

type ScrollToSection = (id: string) => void;

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isSidebar, setIsSidebar] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("home");

    const scrollToSection: ScrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;
        const offset = 70; // adgust height
        const top =
            element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top,
            behavior: "smooth",
        });
    };

    const info: contextType = {
        isMobile,
        setIsMobile,
        isSidebar,
        setIsSidebar,
        isSearch,
        setIsSearch,
        scrollToSection,
        activeSection,
        setActiveSection,
    };

    return (
        <ProjectContext.Provider value={info}>
            {children}
        </ProjectContext.Provider>
    );
};

export default ContextProvider;
