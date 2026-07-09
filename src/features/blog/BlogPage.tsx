"use client";
import Image from "next/image";
import { useState, useMemo } from "react";
import Link from "next/link";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import { blogPosts, BLOG_ITEMS_PER_PAGE } from "@/data/blogPageData";

export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogPosts.length / BLOG_ITEMS_PER_PAGE);

    const paginatedPosts = useMemo(() => {
        const start = (currentPage - 1) * BLOG_ITEMS_PER_PAGE;
        return blogPosts.slice(start, start + BLOG_ITEMS_PER_PAGE);
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* Blog One Start */}
            <section className="blog-one blog-page">
                <div className="container">
                    <div className="blog-one__bottom">
                        <div className="row">

                            {/* Blog Cards */}
                            {paginatedPosts.map((post) => (
                                <FadeInAdvanced
                                    variant={post.fadeVariant}
                                    delay={0}
                                    duration={1500}
                                    key={post.id}
                                    className="col-xl-4 col-lg-6"
                                >
                                    <div className="blog-one__single">
                                        <div className="blog-one__img">
                                            <Image src={post.image} alt={post.title} />
                                            <div className="blog-one__date-and-author">
                                                <div className="blog-one__date">
                                                    <p>{post.date}</p>
                                                </div>
                                                <div className="blog-one__author">
                                                    <div className="blog-one__author-icon">
                                                        <span className="fas fa-user"></span>
                                                    </div>
                                                    <div className="blog-one__author-text">
                                                        <p>
                                                            <Link href={post.authorLink}>
                                                                {post.author}
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-one__content">
                                            <h3 className="blog-one__title">
                                                <Link href={post.link}>
                                                    {post.title}
                                                </Link>
                                            </h3>
                                            <p className="blog-one__text">
                                                {post.text}
                                            </p>
                                        </div>
                                    </div>
                                </FadeInAdvanced>
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
                </div>
            </section>
            {/* Blog One End */}
        </>
    );
}