"use client";
import React, { useContext } from "react";
import ProjectContext from "@/components/context/ProjectContext";
import CustomCursor from "@/components/elements/CustomCursor";
import SideBar from "@/components/elements/SideBar";
import SearchProp from "@/components/elements/SearchProp";
import ScrollToTop from "@/components/elements/ScrollToTop";
import ChatPopup from "@/components/ChatPopup";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const context = useContext(ProjectContext);
  if (!context) throw new Error("Context is null");
  const { isMobile, isSearch } = context;

  return (
    <div
      className={`custom-cursor ${isMobile ? "locked" : ""} ${isSearch ? "search-active" : ""}`}
    >
      <CustomCursor />
      {children}
      <SideBar />
      <SearchProp />
      <ChatPopup />
      <ScrollToTop />
    </div>
  );
}