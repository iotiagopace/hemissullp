"use client";
import Image from "next/image";
import { useState, useMemo } from "react";
import Link from "next/link";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import {
    blogStandardPosts,
    sidebarCategories,
    sidebarRecentPosts,
    sidebarTags,
    BLOG_STANDARD_PER_PAGE,
} from "@/data/blogStandardData";

export default function BlogStandardContent() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogStandardPosts.length / BLOG_STANDARD_PER_PAGE);

    const paginatedPosts = useMemo(() => {
        const start = (currentPage - 1) * BLOG_STANDARD_PER_PAGE;
        return blogStandardPosts.slice(start, start + BLOG_STANDARD_PER_PAGE);
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/*Blog Standard Start */}
            <section className="blog-standard">
                <div className="container">
                    <div className="row">

                        {/* ── Left: Blog Posts ── */}
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-standard__left">

                                {paginatedPosts.map((post) => (
                                    <div key={post.id} className="blog-standard__single">
                                        <div className="blog-standard__img">
                                            <Image src={post.image} alt={post.title} />
                                        </div>
                                        <div className="blog-standard__content">
                                            <div className="blog-standard__content-inner">
                                                <ul className="blog-standard__meta list-unstyled">
                                                    <li>
                                                        <Link href={post.link}>
                                                            <span className="fas fa-comments"></span>
                                                            {post.author}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href={post.link}>
                                                            <span className="fas fa-calendar-alt"></span>
                                                            {post.date}
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <h3 className="blog-standard__title">
                                                    <Link href={post.link}>
                                                        {post.title}
                                                    </Link>
                                                </h3>
                                                <p className="blog-standard__text">
                                                    {post.text}
                                                </p>
                                                <div className="blog-standard__btn">
                                                    <Link href={post.link} className="thm-btn">
                                                        <span>Read More</span>
                                                        <i className="fal fa-angle-double-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <ul className="styled-pagination text-center clearfix list-unstyled">
                                        {/* Prev */}
                                        <li
                                            className={`arrow prev ${currentPage === 1 ? "" : "active"}`}
                                        >
                                            <Link
                                                href="#"
                                                onClick={() => handlePageChange(currentPage - 1)}
                                            >
                                                <span className="fas fa-angle-left"></span>
                                            </Link>
                                        </li>

                                        {/* Page Numbers */}
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                                            (page) => (
                                                <li
                                                    key={page}
                                                    className={currentPage === page ? "active" : ""}
                                                >
                                                    <Link
                                                        href="#"
                                                        onClick={() => handlePageChange(page)}
                                                    >
                                                        {page}
                                                    </Link>
                                                </li>
                                            )
                                        )}

                                        {/* Next */}
                                        <li
                                            className={`arrow next ${currentPage === totalPages ? "" : "active"}`}
                                        >
                                            <Link
                                                href="#"
                                                onClick={() => handlePageChange(currentPage + 1)}
                                            >
                                                <span className="fas fa-angle-right"></span>
                                            </Link>
                                        </li>
                                    </ul>
                                )}

                            </div>
                        </div>

                        {/* ── Right: Sidebar ── */}
                        <div className="col-xl-4 col-lg-5">
                            <div className="sidebar">

                                {/* Search */}
                                <FadeInAdvanced variant={"fadeInUp"} delay={100} className="sidebar__single sidebar__search">
                                    <form className="sidebar__search-form">
                                        <input type="search" placeholder="Search..." />
                                        <button type="submit">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </form>
                                </FadeInAdvanced>

                                {/* Categories */}
                                <FadeInAdvanced variant={"fadeInUp"} delay={100} className="sidebar__single sidebar__category">
                                    <h3 className="sidebar__title">Categories</h3>
                                    <ul className="sidebar__category-list list-unstyled">
                                        {sidebarCategories.map((cat) => (
                                            <li
                                                key={cat.id}
                                                className={cat.active ? "active" : ""}
                                            >
                                                <Link href={cat.link}>
                                                    {cat.name}
                                                    <span>({String(cat.count).padStart(2, "0")})</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </FadeInAdvanced>

                                {/* Recent Posts */}
                                <FadeInAdvanced variant={"fadeInUp"} className="sidebar__single sidebar__post" delay={100}>
                                    <h3 className="sidebar__title">Recent Post</h3>
                                    <ul className="sidebar__post-list list-unstyled">
                                        {sidebarRecentPosts.map((rp) => (
                                            <li key={rp.id}>
                                                <div className="sidebar__post-image">
                                                    <Image src={rp.image} alt={rp.title} />
                                                </div>
                                                <div className="sidebar__post-content">
                                                    <p className="sidebar__post-date">
                                                        <span className="icon-calendar"></span>
                                                        {rp.date}
                                                    </p>
                                                    <h3 className="sidebar__post-title">
                                                        <Link href={rp.link}>
                                                            {rp.title}
                                                        </Link>
                                                    </h3>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </FadeInAdvanced>

                                {/* Tags */}
                                <FadeInAdvanced variant={"fadeInUp"} delay={100} className="sidebar__single sidebar__tags">
                                    <h3 className="sidebar__title">Tags Cloud</h3>
                                    <ul className="sidebar__tags-list clearfix list-unstyled">
                                        {sidebarTags.map((tag, i) => (
                                            <li key={i}>
                                                <Link href="#">{tag}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </FadeInAdvanced>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/*Blog Standard End*/}
        </>
    );
}