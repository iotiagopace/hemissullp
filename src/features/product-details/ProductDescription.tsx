"use client";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";
import {
    tabs,
    descriptionContent,
    additionalInfoContent,
    reviewsData,
    type TabId,
} from "@/data/productDescriptionData";

export default function ProductDescription() {
    const [activeTab, setActiveTab] = useState<TabId>("description");

    const handleTabChange = (tab: TabId) => setActiveTab(tab);

    // ── Review form submit with SweetAlert ────────────────────────────────────
    const handleReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        Swal.fire({
            title: "Submit Review?",
            text: "Are you sure you want to submit your review?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#e74c3c",
            cancelButtonColor: "#6c757d",
            confirmButtonText: "Yes, submit it!",
            cancelButtonText: "Cancel",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                form.reset();
                Swal.fire({
                    title: "Review Submitted!",
                    text: "Thank you for your review. It will appear after approval.",
                    icon: "success",
                    confirmButtonColor: "#e74c3c",
                    timer: 3000,
                    timerProgressBar: true,
                });
            }
        });
    };

    return (
        <>
            {/*Shop Details Start*/}
            <section className="product-description">
                <div className="container">
                    <div className="product-details__description">
                        <div className="product-details__main-tab-box tabs-box">

                            {/* ── Tab Buttons ── */}
                            <ul className="tab-buttons clearfix list-unstyled">
                                {tabs.map((tab) => (
                                    <li
                                        key={tab.id}
                                        className={`tab-btn ${activeTab === tab.id ? "active-btn" : ""}`}
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => handleTabChange(tab.id)}
                                        onKeyDown={(e) =>
                                            e.key === "Enter" && handleTabChange(tab.id)
                                        }
                                    >
                                        <span>
                                            {tab.id === "reviews"
                                                ? `${tab.label} (${reviewsData.length})`
                                                : tab.label}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="tabs-content">

                                {/* ── Description Tab ── */}
                                <div
                                    className={`tab ${activeTab === "description" ? "active-tab" : ""}`}
                                    id="description"
                                    role="tabpanel"
                                >
                                    <div className="product-details__tab-content-inner">
                                        <div className="product-details__description-content">
                                            <p className="product-details__description-text-1">
                                                {descriptionContent.text1}
                                            </p>
                                            <div className="product-description__list">
                                                <ul className="list-unstyled">
                                                    {descriptionContent.listItems.map(
                                                        (item) => (
                                                            <li key={item.id}>
                                                                <p>
                                                                    <span className="fal fa-long-arrow-right"></span>
                                                                    {item.text}
                                                                </p>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                            <p className="product-details__description-text-2">
                                                {descriptionContent.text2}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* ── Additional Information Tab ── */}
                                <div
                                    className={`tab ${activeTab === "additional-information" ? "active-tab" : ""}`}
                                    id="additional-information"
                                    role="tabpanel"
                                >
                                    <div className="product-details__tab-content-inner">
                                        <div className="product-details__additional-information-content">
                                            <p className="product-details__additional-information-text-1">
                                                {additionalInfoContent.text1}
                                            </p>
                                            <p className="product-details__additional-information-text-2">
                                                {additionalInfoContent.text2}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* ── Reviews Tab ── */}
                                <div
                                    className={`tab ${activeTab === "reviews" ? "active-tab" : ""}`}
                                    id="reviews"
                                    role="tabpanel"
                                >
                                    <div className="product-details__tab-content-inner">

                                        {/* Existing Reviews */}
                                        <div className="review-one">
                                            <div className="comments-area">
                                                <div className="review-one__title">
                                                    <h3>{reviewsData.length} Reviews</h3>
                                                </div>

                                                {reviewsData.map((review) => (
                                                    <div key={review.id} className="comment-box">
                                                        <div className="comment">
                                                            <div className="author-thumb">
                                                                <figure className="thumb">
                                                                    <Image
                                                                        src={review.avatar}
                                                                        alt={review.name} />
                                                                </figure>
                                                            </div>
                                                            <div className="review-one__content">
                                                                <div className="review-one__content-top">
                                                                    <div className="info">
                                                                        <h2>
                                                                            {review.name}
                                                                            <span>{review.date}</span>
                                                                        </h2>
                                                                    </div>
                                                                    <div className="reply-btn">
                                                                        {[...Array(review.rating)].map(
                                                                            (_, i) => (
                                                                                <i key={i} className="fa fa-star"></i>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="review-one__content-bottom">
                                                                    <p>{review.comment}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Review Form — old project button style + SweetAlert */}
                                        <div className="review-form-one">
                                            <div className="review-form-one__inner">
                                                <h3 className="review-form-one__title">
                                                    Add a review
                                                </h3>
                                                <div className="review-form-one__rate-box">
                                                    <p className="review-form-one__rate-text">
                                                        Rate this product?
                                                    </p>
                                                    <div className="review-form-one__rate">
                                                        {[...Array(5)].map((_, i) => (
                                                            <i key={i} className="fa fa-star"></i>
                                                        ))}
                                                    </div>
                                                </div>

                                                <form
                                                    className="review-form-one__form contact-form-validated"
                                                    onSubmit={handleReviewSubmit}
                                                >
                                                    <div className="row">
                                                        <div className="col-xl-12">
                                                            <div className="review-form-one__input-box text-message-box">
                                                                <textarea
                                                                    name="message"
                                                                    placeholder="Write a comment"
                                                                    required
                                                                ></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="review-form-one__input-box">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Your name"
                                                                    name="name"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="review-form-one__input-box">
                                                                <input
                                                                    type="email"
                                                                    placeholder="Email address"
                                                                    name="email"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-xl-12">
                                                            {/* Old project button style */}
                                                            <button
                                                                type="submit"
                                                                className="thm-btn review-form-one__btn"
                                                            >
                                                                <span>Submit a review</span>
                                                                <i className="fal fa-angle-double-right"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="result"></div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Shop Details End*/}
        </>
    );
}