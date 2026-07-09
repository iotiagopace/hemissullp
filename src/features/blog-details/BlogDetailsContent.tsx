"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import {
    blogDetailsPost,
    blogComments,
    blogDetailsTags,
    socialShareLinks,
    type CommentFormData,
} from "@/data/blogDetailsData";
import {
    sidebarCategories,
    sidebarRecentPosts,
    sidebarTags,
} from "@/data/blogStandardData";

// ─── Form initial state ───────────────────────────────────────────────────────

const INITIAL_FORM: CommentFormData = { name: "", email: "", message: "" };

// ─── Form validation ──────────────────────────────────────────────────────────

function validateForm(data: CommentFormData): Partial<CommentFormData> {
    const errors: Partial<CommentFormData> = {};
    if (!data.name.trim())
        errors.name = "Name is required.";
    if (!data.email.trim())
        errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        errors.email = "Enter a valid email address.";
    if (!data.message.trim())
        errors.message = "Message is required.";
    return errors;
}

export default function BlogDetailsContent() {
    const post = blogDetailsPost;

    // ── Form state ────────────────────────────────────────────────────────────
    const [formData, setFormData] = useState<CommentFormData>(INITIAL_FORM);
    const [errors, setErrors] = useState<Partial<CommentFormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error on type
        if (errors[name as keyof CommentFormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    // ── Submit handler — API-ready ────────────────────────────────────────────
    const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 1. Validate
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // 2. Confirm with SweetAlert
        const result = await Swal.fire({
            title: "Submit Comment?",
            text: "Are you sure you want to post this comment?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#e74c3c",
            cancelButtonColor: "#6c757d",
            confirmButtonText: "Yes, post it!",
            cancelButtonText: "Cancel",
            reverseButtons: true,
        });

        if (!result.isConfirmed) return;

        setIsSubmitting(true);

        try {
            // ── TODO: Replace with your real API call ─────────────────────────
            // const response = await fetch("/api/comments", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({
            //         name:    formData.name,
            //         email:   formData.email,
            //         message: formData.message,
            //         postId:  "blog-details-1",   // pass dynamic post id here
            //     }),
            // });
            // if (!response.ok) throw new Error("Failed to submit comment");
            // const data = await response.json();
            // ─────────────────────────────────────────────────────────────────

            // Simulated success (remove when real API is connected)
            await new Promise((res) => setTimeout(res, 800));

            // 3. Success
            setFormData(INITIAL_FORM);
            setErrors({});
            Swal.fire({
                title: "Comment Posted!",
                text: "Your comment will appear after approval.",
                icon: "success",
                confirmButtonColor: "#e74c3c",
                timer: 3000,
                timerProgressBar: true,
            });
        } catch {
            // 4. Error fallback
            Swal.fire({
                title: "Something went wrong!",
                text: "Failed to submit your comment. Please try again.",
                icon: "error",
                confirmButtonColor: "#e74c3c",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/*Blog Details Start */}
            <section className="blog-details">
                <div className="container">
                    <div className="row">

                        {/* ── Left: Blog Content ── */}
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details__left">

                                {/* Hero Image + Date */}
                                <div className="blog-details__img">
                                    <Image src={post.image} alt={post.title} />
                                    <div className="blog-details__date">
                                        <p>
                                            {post.date.day}
                                            <br />
                                            {post.date.month}
                                        </p>
                                    </div>
                                </div>

                                <div className="blog-details__content">

                                    {/* Meta */}
                                    <div className="blog-details__user-and-meta">
                                        <div className="blog-details__user">
                                            <p>
                                                <span className="fas fa-user"></span>
                                                {post.author}
                                            </p>
                                        </div>
                                        <ul className="blog-details__meta list-unstyled">
                                            <li>
                                                <Link href="#">
                                                    <span className="fas fa-comments"></span>
                                                    Comments ({post.commentsCount})
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fas fa-clock"></span>
                                                    {post.readTime}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Title & Body */}
                                    <h3 className="blog-details__title">{post.title}</h3>
                                    <p className="blog-details__text-1">{post.text1}</p>
                                    <p className="blog-details__text-2">{post.text2}</p>

                                    {/* Quote */}
                                    <div className="blog-details__author-box">
                                        <h4 className="blog-details__author-text">
                                            {post.quote.text}
                                        </h4>
                                        <p className="blog-details__author-name">
                                            {post.quote.author}
                                            <span> / {post.quote.role}</span>
                                        </p>
                                    </div>

                                    {/* Section 2 */}
                                    <h3 className="blog-details__title-2">{post.title2}</h3>
                                    <p className="blog-details__text-3">{post.text3}</p>

                                    {/* Image Box */}
                                    <div className="blog-details__img-box">
                                        <div className="row">
                                            {post.boxImages.map((img, i) => (
                                                <div key={i} className="col-xl-6">
                                                    <div className="blog-details__img-box-img">
                                                        <Image src={img} alt={`detail-${i + 1}`} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tags & Share */}
                                    <div className="blog-details__tag-and-share">
                                        <div className="blog-details__tag">
                                            <h3 className="blog-details__tag-title">Tags :</h3>
                                            <ul className="blog-details__tag-list list-unstyled">
                                                {blogDetailsTags.map((tag) => (
                                                    <li key={tag.id}>
                                                        <Link href="#">{tag.label}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="blog-details__share-box">
                                            <h3 className="blog-details__share-title">Share :</h3>
                                            <div className="blog-details__share">
                                                {socialShareLinks.map((s) => (
                                                    <Link key={s.id} href={s.href}>
                                                        <span className={s.icon}></span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Comments List */}
                                    <div className="comment-one">
                                        {blogComments.map((comment) => (
                                            <div key={comment.id} className="comment-one__single">
                                                <div className="comment-one__image">
                                                    <Image src={comment.image} alt={comment.name} />
                                                </div>
                                                <div className="comment-one__content">
                                                    <h3>{comment.name}</h3>
                                                    <span>{comment.date}</span>
                                                    <p>{comment.text}</p>
                                                    <div className="comment-one__btn-box">
                                                        <Link href={comment.replyLink}>
                                                            Reply
                                                            <i className="fas fa-arrow-right"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Comment Form */}
                                    <div className="comment-form">
                                        <h3 className="comment-form__title">Leave A Reply</h3>
                                        <p className="comment-form__text">
                                            By using form u agree with the message storage, you
                                            can contact us directly now
                                        </p>

                                        <form
                                            className="comment-one__form contact-form-validated"
                                            onSubmit={handleCommentSubmit}
                                            noValidate
                                        >
                                            <div className="row">
                                                {/* Name */}
                                                <div className="col-xl-6">
                                                    <div className="comment-form__input-box">
                                                        <input
                                                            type="text"
                                                            placeholder="Your Name"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                        />
                                                        {errors.name && (
                                                            <span style={{ color: "#e74c3c", fontSize: "12px" }}>
                                                                {errors.name}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Email */}
                                                <div className="col-xl-6">
                                                    <div className="comment-form__input-box">
                                                        <input
                                                            type="email"
                                                            placeholder="Your Email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                        />
                                                        {errors.email && (
                                                            <span style={{ color: "#e74c3c", fontSize: "12px" }}>
                                                                {errors.email}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-12">
                                                    {/* Message */}
                                                    <div className="comment-form__input-box text-message-box">
                                                        <textarea
                                                            name="message"
                                                            placeholder="Write your message"
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                        ></textarea>
                                                        {errors.message && (
                                                            <span style={{ color: "#e74c3c", fontSize: "12px" }}>
                                                                {errors.message}
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Submit */}
                                                    <div className="comment-form__btn-box">
                                                        <button
                                                            type="submit"
                                                            className="thm-btn comment-form__btn"
                                                            disabled={isSubmitting}
                                                        >
                                                            <span>
                                                                {isSubmitting ? "Submitting..." : "Submit Now"}
                                                            </span>
                                                            <i className="fal fa-angle-double-right"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="result"></div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* ── Right: Sidebar (shared from blogStandardData) ── */}
                        <div className="col-xl-4 col-lg-5">
                            <div className="sidebar">

                                {/* Search */}
                                <FadeInAdvanced
                                    variant={"fadeInUp"}
                                    delay={100}
                                    className="sidebar__single sidebar__search"
                                >
                                    <form className="sidebar__search-form">
                                        <input type="search" placeholder="Search..." />
                                        <button type="submit">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </form>
                                </FadeInAdvanced>

                                {/* Categories */}
                                <FadeInAdvanced
                                    variant={"fadeInUp"}
                                    delay={100}
                                    className="sidebar__single sidebar__category"
                                >
                                    <h3 className="sidebar__title">Categories</h3>
                                    <ul className="sidebar__category-list list-unstyled">
                                        {sidebarCategories.map((cat) => (
                                            <li key={cat.id} className={cat.active ? "active" : ""}>
                                                <Link href={cat.link}>
                                                    {cat.name}
                                                    <span>({String(cat.count).padStart(2, "0")})</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </FadeInAdvanced>

                                {/* Recent Posts */}
                                <FadeInAdvanced
                                    variant={"fadeInUp"}
                                    delay={100}
                                    className="sidebar__single sidebar__post"
                                >
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
                                                        <Link href={rp.link}>{rp.title}</Link>
                                                    </h3>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </FadeInAdvanced>

                                {/* Tags */}
                                <FadeInAdvanced
                                    variant={"fadeInUp"}
                                    delay={100}
                                    className="sidebar__single sidebar__tags"
                                >
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
            {/*Blog Details End*/}
        </>
    );
}