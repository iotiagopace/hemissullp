"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import TextAnimation from "@/components/elements/TextAnimation";
import CustomSelect from "@/components/elements/CustomSelect";
import JarallaxSection from "@/components/elements/JarallaxSection";
import {
    contactOneSectionTitle,
    contactInfoItems,
    contactServiceOptions,
    INITIAL_CONTACT_FORM,
    ContactOneBg,
    type ContactOneFormData,
} from "@/data/contactOneData";

// ─── Validation ───────────────────────────────────────────────────────────────

function validateForm(
    data: ContactOneFormData
): Partial<ContactOneFormData> {
    const errors: Partial<ContactOneFormData> = {};
    if (!data.name.trim())
        errors.name = "Name is required.";
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

export default function ContactOne() {
    const [formData, setFormData] =
        useState<ContactOneFormData>(INITIAL_CONTACT_FORM);
    const [errors, setErrors] =
        useState<Partial<ContactOneFormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ── Field change ──────────────────────────────────────────────────────────
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof ContactOneFormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    // ── CustomSelect change ───────────────────────────────────────────────────
    const handleServiceChange = (val: string) => {
        setFormData((prev) => ({ ...prev, service: val }));
        if (errors.service)
            setErrors((prev) => ({ ...prev, service: undefined }));
    };

    // ── Submit ────────────────────────────────────────────────────────────────
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const result = await Swal.fire({
            title: "Send Message?",
            text: "Are you sure you want to send this message?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#e74c3c",
            cancelButtonColor: "#6c757d",
            confirmButtonText: "Yes, send it!",
            cancelButtonText: "Cancel",
            reverseButtons: true,
        });

        if (!result.isConfirmed) return;

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name:    formData.name,
                    email:   formData.email,
                    phone:   formData.phone,
                    subject: formData.service,
                    message: formData.message,
                }),
            });
            if (!response.ok) throw new Error("Failed to send");

            setFormData(INITIAL_CONTACT_FORM);
            setErrors({});
            Swal.fire({
                title: "Message Sent!",
                text: "We'll get back to you as soon as possible.",
                icon: "success",
                confirmButtonColor: "#e74c3c",
                timer: 3000,
                timerProgressBar: true,
            });
        } catch {
            Swal.fire({
                title: "Something went wrong!",
                text: "Failed to send your message. Please try again.",
                icon: "error",
                confirmButtonColor: "#e74c3c",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Contact One Start */}
            <section className="contact-one" id="contact">

                {/* Parallax Background */}
                <JarallaxSection
                    bgOnly
                    className="contact-one__bg"
                    imgSrc={ContactOneBg.src}
                    speed={0.2}
                    imgPosition="50% 0%"
                />

                <div className="container">

                    {/* Section Title */}
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box two">
                            <p className="section-title__tagline">
                                {contactOneSectionTitle.tagline}
                            </p>
                            <div className="section-title__tagline-shape"></div>
                        </div>
                        <h2 className="section-title__title">
                            <TextAnimation style="s1">
                                {contactOneSectionTitle.title}
                            </TextAnimation>
                        </h2>
                    </div>

                    <div className="row">

                        {/* ── Left: Contact Info ── */}
                        <div className="col-xl-5">
                            <div className="contact-one__left">
                                <div className="contact-one__info">
                                    <ul className="contact-one__info-list list-unstyled">
                                        {contactInfoItems.map((item) => (
                                            <li key={item.id}>
                                                <div className="contact-one__info-icon">
                                                    <i className={item.icon}></i>
                                                </div>
                                                <div className="contact-one__info-text">
                                                    <p>{item.label}</p>
                                                    <h3>
                                                        {item.href ? (
                                                            <a href={item.href}>
                                                                {item.value}
                                                            </a>
                                                        ) : (
                                                            item.value
                                                        )}
                                                    </h3>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* ── Right: Form ── */}
                        <div className="col-xl-7">
                            <div className="contact-one__right">
                                <form
                                    id="contact-one_form"
                                    className="contact-form-validated"
                                    onSubmit={handleSubmit}
                                    noValidate
                                >
                                    <div className="row">

                                        {/* Name */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-one__input-box">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name.."
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
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-one__input-box">
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
                                            <div className="contact-one__input-box">
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
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-one__input-box">
                                                <div className="select-box">
                                                    <CustomSelect
                                                        optionArray={contactServiceOptions}
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
                                            <div className="contact-one__input-box">
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
                                    <div className="contact-one__btn-box">
                                        <button
                                            type="submit"
                                            className="thm-btn"
                                            disabled={isSubmitting}
                                        >
                                            <span>
                                                {isSubmitting ? "Sending..." : "Submit Now"}
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
            {/* Contact One End */}
        </>
    );
}