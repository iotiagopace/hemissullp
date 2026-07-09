"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import TextAnimation from "@/components/elements/TextAnimation";
import {
    teamContactSectionTitle,
    INITIAL_TEAM_CONTACT_FORM,
    type TeamContactFormData,
} from "@/data/teamDetailsContactData";

// ─── Validation ───────────────────────────────────────────────────────────────

function validateForm(
    data: TeamContactFormData
): Partial<TeamContactFormData> {
    const errors: Partial<TeamContactFormData> = {};
    if (!data.name.trim())
        errors.name = "Name is required.";
    if (!data.email.trim())
        errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        errors.email = "Enter a valid email address.";
    if (!data.phone.trim())
        errors.phone = "Phone number is required.";
    if (!data.subject.trim())
        errors.subject = "Subject is required.";
    if (!data.message.trim())
        errors.message = "Message is required.";
    return errors;
}

export default function TeamDetailsContact() {
    const [formData, setFormData] =
        useState<TeamContactFormData>(INITIAL_TEAM_CONTACT_FORM);
    const [errors, setErrors] =
        useState<Partial<TeamContactFormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ── Field change — clears error on type ──────────────────────────────────
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof TeamContactFormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    // ── Submit — validate → confirm → API call ───────────────────────────────
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 1. Validate
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // 2. SweetAlert confirmation
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
            // ── TODO: Replace with your real API call ─────────────────────────
            // const response = await fetch("/api/team-contact", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({
            //         name:    formData.name,
            //         email:   formData.email,
            //         phone:   formData.phone,
            //         subject: formData.subject,
            //         message: formData.message,
            //     }),
            // });
            // if (!response.ok) throw new Error("Failed to send message");
            // const data = await response.json();
            // ─────────────────────────────────────────────────────────────────

            // Simulated delay (remove when real API connected)
            await new Promise((res) => setTimeout(res, 800));

            // 3. Success
            setFormData(INITIAL_TEAM_CONTACT_FORM);
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
            // 4. Error fallback
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
            {/*Team Details Contact Start*/}
            <section className="team-details-contact">
                <div className="container">
                    {/* Section Title */}
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box two">
                            <p className="section-title__tagline">
                                {teamContactSectionTitle.tagline}
                            </p>
                            <div className="section-title__tagline-shape"></div>
                        </div>
                        <h2 className="section-title__title">
                            <TextAnimation style="s1">
                                {teamContactSectionTitle.title}
                            </TextAnimation>
                        </h2>
                    </div>

                    {/* Form */}
                    <div className="team-details-contact__inner">
                        <form
                            className="contact-form-validated team-details-contact__form"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <div className="row">
                                {/* Name */}
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="team-details-contact__input-box">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
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
                                    <div className="team-details-contact__input-box">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
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
                                    <div className="team-details-contact__input-box">
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="Phone Number"
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

                                {/* Subject */}
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="team-details-contact__input-box">
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        />
                                        {errors.subject && (
                                            <span style={{ color: "#e74c3c", fontSize: "12px" }}>
                                                {errors.subject}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Message + Submit */}
                                <div className="col-xl-12">
                                    <div className="team-details-contact__input-box text-message-box">
                                        <textarea
                                            name="message"
                                            placeholder="Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                        {errors.message && (
                                            <span style={{ color: "#e74c3c", fontSize: "12px" }}>
                                                {errors.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="team-details-contact__btn-box">
                                        <button
                                            type="submit"
                                            className="thm-btn"
                                            disabled={isSubmitting}
                                        >
                                            <span>
                                                {isSubmitting ? "Sending..." : "Send a message"}
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
            </section>
            {/*Team Details Contact End*/}
        </>
    );
}