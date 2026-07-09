"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import { contactPageData, type ContactFormField } from "@/data/contactPageData";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

// ─── Constants ────────────────────────────────────────────────────────────────

const INITIAL_FORM: ContactFormData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
};

// ─── Validation ───────────────────────────────────────────────────────────────

function validateContactForm(data: ContactFormData): ContactFormErrors {
    const errors: ContactFormErrors = {};

    if (!data.name.trim())
        errors.name = "Name is required.";

    if (!data.email.trim())
        errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        errors.email = "Enter a valid email address.";

    if (!data.phone.trim())
        errors.phone = "Phone is required.";
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(data.phone))
        errors.phone = "Enter a valid phone number.";

    if (!data.subject.trim())
        errors.subject = "Subject is required.";

    if (!data.message.trim())
        errors.message = "Message is required.";

    return errors;
}

// ─── API call ─────────────────────

async function submitContactForm(data: ContactFormData): Promise<void> {
    const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error?.error ?? "Failed to send message");
    }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactPage() {
    const { mapEmbedUrl, formTitle, fields, submitButtonText } = contactPageData;

    const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
    const [errors, setErrors] = useState<ContactFormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ── Change handler ────────────────────────────────────────────────────────
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear field error on input
        if (errors[name as keyof ContactFormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    // ── Submit handler ────────────────────────────────────────────────────────
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 1. Validate
        const validationErrors = validateContactForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // 2. Confirm
        const { isConfirmed } = await Swal.fire({
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

        if (!isConfirmed) return;

        setIsSubmitting(true);

        try {
            // 3. API call
            await submitContactForm(formData);

            // 4. Success
            setFormData(INITIAL_FORM);
            setErrors({});
            Swal.fire({
                title: "Message Sent!",
                text: "We'll get back to you as soon as possible.",
                icon: "success",
                confirmButtonColor: "#e74c3c",
                timer: 3000,
                timerProgressBar: true,
            });
        } catch (err) {
            // 5. Error
            const message =
                err instanceof Error ? err.message : "Please try again later.";
            Swal.fire({
                title: "Something went wrong!",
                text: message,
                icon: "error",
                confirmButtonColor: "#e74c3c",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // ── Render ────────────────────────────────────────────────────────────────
    return (
        <>
            {/* Contact Page Start */}
            <section className="contact-page">
                <div className="container">
                    <div className="contact-page__inner">
                        <div className="row">

                            {/* Map */}
                            <div className="col-xl-6">
                                <div className="contact-page__left">
                                    <iframe
                                        src={mapEmbedUrl}
                                        className="google-map__one"
                                        allowFullScreen
                                        title="Location Map"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* Form */}
                            <div className="col-xl-6">
                                <div className="contact-page__right">
                                    <h3 className="contact-page__form-title">
                                        {formTitle}
                                    </h3>

                                    <form
                                        className="contact-form-validated contact-page__form"
                                        onSubmit={handleSubmit}
                                        noValidate
                                    >
                                        <div className="row">

                                            {/* Dynamic text/email fields */}
                                            {fields.map((field: ContactFormField) => (
                                                <div
                                                    key={field.id}
                                                    className={field.colClass}
                                                >
                                                    <div className="contact-page__input-box">
                                                        <input
                                                            type={field.type}
                                                            name={field.name}
                                                            placeholder={field.placeholder}
                                                            value={
                                                                formData[
                                                                field.name as keyof ContactFormData
                                                                ]
                                                            }
                                                            onChange={handleChange}
                                                            disabled={isSubmitting}
                                                        />
                                                        {errors[
                                                            field.name as keyof ContactFormData
                                                        ] && (
                                                                <span className="error-msg">
                                                                    {
                                                                        errors[
                                                                        field.name as keyof ContactFormData
                                                                        ]
                                                                    }
                                                                </span>
                                                            )}
                                                    </div>
                                                </div>
                                            ))}

                                            {/* Message textarea */}
                                            <div className="col-xl-12">
                                                <div className="contact-page__input-box text-message-box">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        disabled={isSubmitting}
                                                    />
                                                    {errors.message && (
                                                        <span className="error-msg">
                                                            {errors.message}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="contact-page__btn-box">
                                                    <button
                                                        type="submit"
                                                        className="thm-btn"
                                                        disabled={isSubmitting}
                                                    >
                                                        <span>
                                                            {isSubmitting
                                                                ? "Sending…"
                                                                : submitButtonText}
                                                        </span>
                                                        <i className="fal fa-angle-double-right" />
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="result" />
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Page End */}
        </>
    );
}