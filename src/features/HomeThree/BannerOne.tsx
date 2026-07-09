"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import CustomSelect from "@/components/elements/CustomSelect";
import {
    bannerOneContent,
    serviceOptions,
    INITIAL_BANNER_FORM,
    BannerOneBg,
    BannerOneShape1,
    BannerOneShape2,
    BannerOneShape3,
    type BannerOneFormData,
} from "@/data/bannerOneData";

// ─── Validation ───────────────────────────────────────────────────────────────

function validateForm(
    data: BannerOneFormData
): Partial<BannerOneFormData> {
    const errors: Partial<BannerOneFormData> = {};
    if (!data.firstName.trim())
        errors.firstName = "First name is required.";
    if (!data.lastName.trim())
        errors.lastName = "Last name is required.";
    if (!data.email.trim())
        errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        errors.email = "Enter a valid email address.";
    if (!data.phone.trim())
        errors.phone = "Phone number is required.";
    if (!data.service)
        errors.service = "Please select a service.";
    if (!data.message.trim())
        errors.message = "Message is required.";
    return errors;
}

export default function BannerOne() {
    const [formData, setFormData] =
        useState<BannerOneFormData>(INITIAL_BANNER_FORM);
    const [errors, setErrors] =
        useState<Partial<BannerOneFormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ── Field change ──────────────────────────────────────────────────────────
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof BannerOneFormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    // ── CustomSelect change ───────────────────────────────────────────────────
    const handleServiceChange = (val: string) => {
        setFormData((prev) => ({ ...prev, service: val }));
        if (errors.service) {
            setErrors((prev) => ({ ...prev, service: undefined }));
        }
    };

    // ── Submit — validate → confirm → API ────────────────────────────────────
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const result = await Swal.fire({
            title: "Submit Request?",
            text: "Are you sure you want to send this request?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#e74c3c",
            cancelButtonColor: "#6c757d",
            confirmButtonText: "Yes, submit it!",
            cancelButtonText: "Cancel",
            reverseButtons: true,
        });

        if (!result.isConfirmed) return;

        setIsSubmitting(true);

        try {
            // ── TODO: Replace with your real API call ─────────────────────────
            // const response = await fetch("/api/banner-contact", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({
            //         firstName: formData.firstName,
            //         lastName:  formData.lastName,
            //         email:     formData.email,
            //         phone:     formData.phone,
            //         service:   formData.service,
            //         message:   formData.message,
            //     }),
            // });
            // if (!response.ok) throw new Error("Failed to submit");
            // const data = await response.json();
            // ─────────────────────────────────────────────────────────────────

            await new Promise((res) => setTimeout(res, 800));

            setFormData(INITIAL_BANNER_FORM);
            setErrors({});
            Swal.fire({
                title: "Request Submitted!",
                text: "We'll get back to you as soon as possible.",
                icon: "success",
                confirmButtonColor: "#e74c3c",
                timer: 3000,
                timerProgressBar: true,
            });
        } catch {
            Swal.fire({
                title: "Something went wrong!",
                text: "Failed to submit your request. Please try again.",
                icon: "error",
                confirmButtonColor: "#e74c3c",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/*Banner One Start*/}
            <section className="banner-one" id="home">
                {/* Background */}
                <div
                    className="banner-one__bg"
                    style={{ backgroundImage: `url(${BannerOneBg.src})` }}
                ></div>

                {/* Shapes */}
                <div className="banner-one__shape-one rotate-me">
                    <Image src={BannerOneShape1} alt="banner-one-shape" className="float-bob-y" />
                </div>
                <div className="banner-one__shape-two rotate-me">
                    <Image src={BannerOneShape2} alt="banner-one-shape" />
                </div>
                <div className="banner-one__shape-three float-bob-x">
                    <Image src={BannerOneShape3} alt="banner-one-shape" />
                </div>

                <div className="container">
                    <div className="row">

                        {/* ── Left: Hero Content ── */}
                        <div className="col-xl-7">
                            <div className="banner-one__left">
                                <p className="banner-one__sub-title">
                                    {bannerOneContent.subTitle}
                                </p>
                                <h2 className="banner-one__title">
                                    {bannerOneContent.title}
                                </h2>
                                <p className="banner-one__text">
                                    {bannerOneContent.text}
                                </p>
                                <div className="banner-one__top-btn">
                                    <Link
                                        href={bannerOneContent.btnLink}
                                        className="thm-btn"
                                    >
                                        <span>{bannerOneContent.btnLabel}</span>
                                        <i className="fal fa-angle-double-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* ── Right: Form ── */}
                        <div className="col-xl-5">
                            <div className="banner-one__right">
                                <form
                                    id="banner-one_form"
                                    className="contact-form-validated"
                                    onSubmit={handleSubmit}
                                    noValidate
                                >
                                    <div className="row">

                                        {/* First Name */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="banner-one__input-box">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="First Name.."
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                />
                                                {errors.firstName && (
                                                    <span style={{ color: "#e74c3c", fontSize: "12px" }}>
                                                        {errors.firstName}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Last Name */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="banner-one__input-box">
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Last Name.."
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                />
                                                {errors.lastName && (
                                                    <span style={{ color: "#e74c3c", fontSize: "12px" }}>
                                                        {errors.lastName}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="banner-one__input-box">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email.."
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

                                        {/* Phone */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="banner-one__input-box">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Phone.."
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                                {errors.phone && (
                                                    <span style={{ color: "#e74c3c", fontSize: "12px" }}>
                                                        {errors.phone}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Service Select */}
                                        <div className="col-xl-12">
                                            <div className="banner-one__input-box">
                                                <div className="select-box">
                                                    <CustomSelect
                                                        optionArray={serviceOptions}
                                                        value={formData.service}
                                                        onChange={handleServiceChange}
                                                        placeholder="Select Service"
                                                        name="service"
                                                    />
                                                </div>
                                                {errors.service && (
                                                    <span style={{ color: "#e74c3c", fontSize: "12px" }}>
                                                        {errors.service}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="col-xl-12">
                                            <div className="banner-one__input-box">
                                                <textarea
                                                    name="message"
                                                    placeholder="Message.."
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                                {errors.message && (
                                                    <span style={{ color: "#e74c3c", fontSize: "12px" }}>
                                                        {errors.message}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit */}
                                    <div className="banner-one__btn-box">
                                        <button
                                            type="submit"
                                            className="thm-btn"
                                            disabled={isSubmitting}
                                        >
                                            <span>
                                                {isSubmitting ? "Submitting..." : "Submit Now"}
                                            </span>
                                            <i className="fal fa-angle-double-right"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/*Banner One End*/}
        </>
    );
}