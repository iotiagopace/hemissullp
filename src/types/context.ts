export interface contextType {
    isMobile: boolean;
    setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
    isSidebar: boolean;
    setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
    isSearch: boolean;
    setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
    scrollToSection: (id: string) => void;
    activeSection: string;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}