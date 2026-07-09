"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import TextAnimation from "@/components/elements/TextAnimation";
import CustomSelect from "@/components/elements/CustomSelect";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// ── Types ─────────────────────────────────────────────────────────────────────
interface ContactTwoFormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    date: string;
    time: string;
    message: string;
}

const INITIAL_FORM: ContactTwoFormData = {
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
};

const SERVICE_OPTIONS = [
    { value: "ui-ux-design", label: "UI/UX Design" },
    { value: "brand-identity", label: "Brand Identity Design" },
    { value: "mobile-app", label: "Mobile App Design" },
    { value: "web-design", label: "Web Design" },
    { value: "digital-product", label: "Digital Product" },
    { value: "content-writing", label: "Content Writing" },
];

// ── Validation ────────────────────────────────────────────────────────────────
function validateForm(
    data: ContactTwoFormData
): Partial<ContactTwoFormData> {
    const errors: Partial<ContactTwoFormData> = {};

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
    if (!data.date.trim())
        errors.date = "Date is required.";
    if (!data.time.trim())
        errors.time = "Time is required.";
    if (!data.message.trim())
        errors.message = "Message is required.";

    return errors;
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function ContactTwo() {
    const [formData, setFormData] = useState<ContactTwoFormData>(INITIAL_FORM);
    const [errors, setErrors] = useState<Partial<ContactTwoFormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ── Field change ──────────────────────────────────────────────────────────
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof ContactTwoFormData]) {
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

    // ── Submit ────────────────────────────────────────────────────────────────
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const result = await Swal.fire({
            title: "Submit Appointment?",
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
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name:    formData.name,
                    email:   formData.email,
                    phone:   formData.phone,
                    subject: `Appointment: ${formData.service} on ${formData.date}`,
                    message: formData.message,
                }),
            });
            if (!response.ok) throw new Error("Failed to submit");

            setFormData(INITIAL_FORM);
            setErrors({});

            Swal.fire({
                title: "Appointment Submitted!",
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
            {/* Contact Two Start */}
            <section className="contact-two" id="contact">
                <div className="container">
                    <div className="row">
                        {/* ── Left col ─────────────────────────────────────── */}
                        <div className="col-xl-5">
                            <div className="contact-two__left">
                                <div className="section-title text-left sec-title-animation animation-style1">
                                    <div className="section-title__tagline-box">
                                        <p className="section-title__tagline">
                                            Appointment
                                        </p>
                                        <div className="section-title__tagline-shape"></div>
                                    </div>
                                    <h2 className="section-title__title">
                                        <TextAnimation style="s1">
                                            Connect With Our Team
                                        </TextAnimation>
                                    </h2>
                                </div>
                                <p className="contact-two__text">
                                    Choosing us means choosing quality,
                                    reliability, and style. With years of
                                    experience and the latest wrapping
                                    technology
                                </p>
                                <div className="contact-two__info">
                                    <ul className="contact-two__info-list list-unstyled">
                                        <li>
                                            <div className="contact-two__info-icon">
                                                <i className="icon-phone-call"></i>
                                            </div>
                                            <div className="contact-two__info-text">
                                                <p>Have Question ?</p>
                                                <h3>
                                                    Free{" "}
                                                    <a href="tel:009211085413">
                                                        +00 (92110) 85413
                                                    </a>
                                                </h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-two__info-icon">
                                                <i className="icon-envelope"></i>
                                            </div>
                                            <div className="contact-two__info-text">
                                                <p>Write Email</p>
                                                <h3>
                                                    <a href="mailto:automart@creative.com">
                                                        automart@creative.com
                                                    </a>
                                                </h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-two__info-icon">
                                                <i className="icon-location"></i>
                                            </div>
                                            <div className="contact-two__info-text">
                                                <p>Our Location</p>
                                                <h3>88 Broklyn Golden USA</h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* ── Right col ────────────────────────────────────── */}
                        <div className="col-xl-7">
                            <div className="contact-two__right">
                                <form
                                    id="contact-two_form"
                                    className="contact-form-validated"
                                    onSubmit={handleSubmit}
                                    noValidate
                                >
                                    <div className="row">
                                        {/* Name */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-two__input-box">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name.."
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                                {errors.name && (
                                                    <span className="error-text">
                                                        {errors.name}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-two__input-box">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email.."
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                                {errors.email && (
                                                    <span className="error-text">
                                                        {errors.email}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-two__input-box">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Phone.."
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                                {errors.phone && (
                                                    <span className="error-text">
                                                        {errors.phone}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Service — CustomSelect */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-two__input-box">
                                                <div className="select-box">
                                                    <CustomSelect
                                                        optionArray={SERVICE_OPTIONS}
                                                        value={formData.service}
                                                        onChange={handleServiceChange}
                                                        placeholder="Select Service"
                                                    />
                                                </div>
                                                {errors.service && (
                                                    <span className="error-text">
                                                        {errors.service}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Date */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-two__input-box">
                                                <Flatpickr
                                                    options={{ dateFormat: "Y-m-d" }}
                                                    value={formData.date}
                                                    onChange={([date]: Date[]) =>
                                                        setFormData({ ...formData, date: date.toISOString().split("T")[0] })
                                                    }
                                                    placeholder="Select Date"
                                                />
                                                {errors.date && (
                                                    <span className="error-text">
                                                        {errors.date}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Time */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-two__input-box">
                                                <Flatpickr
                                                    options={{ enableTime: true, noCalendar: true, dateFormat: "H:i" }}
                                                    value={formData.time}
                                                    onChange={([time]: Date[]) =>
                                                        setFormData({
                                                            ...formData,
                                                            time: time.toLocaleTimeString("en-US", {
                                                                hour: "2-digit",
                                                                minute: "2-digit",
                                                                hour12: false,
                                                            }),
                                                        })
                                                    }
                                                    placeholder="Select Time"
                                                />
                                                {errors.time && (
                                                    <span className="error-text">
                                                        {errors.time}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="col-xl-12">
                                            <div className="contact-two__input-box">
                                                <textarea
                                                    name="message"
                                                    placeholder="Message.."
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                                {errors.message && (
                                                    <span className="error-text">
                                                        {errors.message}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="contact-two__btn-box">
                                        <button
                                            type="submit"
                                            className="thm-btn"
                                            disabled={isSubmitting}
                                        >
                                            <span>
                                                {isSubmitting
                                                    ? "Submitting..."
                                                    : "Submit Now"}
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
            {/* Contact Two End */}
        </>
    );
}