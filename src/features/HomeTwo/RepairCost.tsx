"use client";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import CustomSelect from "@/components/elements/CustomSelect";
import {
    repairCostFormTitle,
    carMakeOptions,
    carModelOptions,
    carYearOptions,
    serviceRequiredOptions,
    INITIAL_REPAIR_FORM,
    RepairCostShape1,
    RepairCostImg,
    RepairCostShapeBg,
    type RepairCostFormData,
} from "@/data/repairCostData";

// ─── Validation ───────────────────────────────────────────────────────────────

function validateForm(
    data: RepairCostFormData
): Partial<RepairCostFormData> {
    const errors: Partial<RepairCostFormData> = {};
    if (!data.name.trim())    errors.name    = "Name is required.";
    if (!data.email.trim())   errors.email   = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
                              errors.email   = "Enter a valid email address.";
    if (!data.phone.trim())   errors.phone   = "Phone is required.";
    if (!data.make)           errors.make    = "Please select a make.";
    if (!data.model)          errors.model   = "Please select a model.";
    if (!data.year)           errors.year    = "Please select a year.";
    if (!data.service)        errors.service = "Please select a service.";
    return errors;
}

export default function RepairCost() {
    const [formData, setFormData] =
        useState<RepairCostFormData>(INITIAL_REPAIR_FORM);
    const [errors, setErrors] =
        useState<Partial<RepairCostFormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ── Text field change ─────────────────────────────────────────────────────
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof RepairCostFormData])
            setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    // ── Select change factory ─────────────────────────────────────────────────
    const handleSelectChange =
        (field: keyof RepairCostFormData) => (val: string) => {
            setFormData((prev) => ({ ...prev, [field]: val }));
            if (errors[field])
                setErrors((prev) => ({ ...prev, [field]: undefined }));
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
            title: "Get Estimate?",
            text: "Are you sure you want to submit your estimate request?",
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
                    subject: `${formData.year} ${formData.make} ${formData.model} - ${formData.service}`,
                    message: formData.service,
                }),
            });
            if (!response.ok) throw new Error("Failed to submit");

            setFormData(INITIAL_REPAIR_FORM);
            setErrors({});
            Swal.fire({
                title: "Estimate Requested!",
                text: "We'll send your estimate shortly.",
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
            {/*Repair Cost Start*/}
            <section className="repair-cost" id="contact">

                {/* Shapes */}
                <div className="repair-cost__shape-1 float-bob-y">
                    <Image src={RepairCostShape1} alt="repair-cost-shape" />
                </div>
                <div className="repair-cost__bg-box-1">
                    <div
                        className="repair-cost__shape-bg"
                        style={{ backgroundImage: `url(${RepairCostShapeBg.src})` }}
                    ></div>
                </div>

                <div className="container">
                    <div className="row">

                        {/* ── Left: Image ── */}
                        <div className="col-xl-6">
                            <div className="repair-cost__left">
                                <div className="repair-cost__img">
                                    <FadeInAdvanced
                                        variant={"slideInLeft"}
                                        delay={100}
                                        duration={2500}
                                    >
                                        <Image
                                            src={RepairCostImg}
                                            alt="repair-cost-img" />
                                    </FadeInAdvanced>
                                </div>
                            </div>
                        </div>

                        {/* ── Right: Form ── */}
                        <div className="col-xl-6">
                            <div className="repair-cost__right">
                                <div className="repair-cost__form-box">

                                    {/* Form Title */}
                                    <div className="repair-cost__form-title-box">
                                        <h3 className="repair-cost__form-title">
                                            {repairCostFormTitle.title}
                                        </h3>
                                        <p className="repair-cost__form-sub-title">
                                            {repairCostFormTitle.subTitle}
                                        </p>
                                    </div>

                                    <form
                                        className="contact-form-validated repair-cost__form"
                                        onSubmit={handleSubmit}
                                        noValidate
                                    >
                                        <div className="row">

                                            {/* Name */}
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="repair-cost__input-box">
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
                                                <div className="repair-cost__input-box">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Your Email"
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
                                                <div className="repair-cost__input-box">
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        placeholder="Your Phone"
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

                                            {/* Select Make */}
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="repair-cost__input-box">
                                                    <div className="select-box">
                                                        <CustomSelect
                                                            optionArray={carMakeOptions}
                                                            value={formData.make}
                                                            onChange={handleSelectChange("make")}
                                                            placeholder="Select Make"
                                                            name="make"
                                                        />
                                                    </div>
                                                    {errors.make && (
                                                        <span style={{ color: "#e74c3c", fontSize: "12px" }}>
                                                            {errors.make}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Select Model */}
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="repair-cost__input-box">
                                                    <div className="select-box">
                                                        <CustomSelect
                                                            optionArray={carModelOptions}
                                                            value={formData.model}
                                                            onChange={handleSelectChange("model")}
                                                            placeholder="Select Model"
                                                            name="model"
                                                        />
                                                    </div>
                                                    {errors.model && (
                                                        <span style={{ color: "#e74c3c", fontSize: "12px" }}>
                                                            {errors.model}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Year */}
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="repair-cost__input-box">
                                                    <div className="select-box">
                                                        <CustomSelect
                                                            optionArray={carYearOptions}
                                                            value={formData.year}
                                                            onChange={handleSelectChange("year")}
                                                            placeholder="Year"
                                                            name="year"
                                                        />
                                                    </div>
                                                    {errors.year && (
                                                        <span style={{ color: "#e74c3c", fontSize: "12px" }}>
                                                            {errors.year}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Service Required */}
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="repair-cost__input-box">
                                                    <div className="select-box">
                                                        <CustomSelect
                                                            optionArray={serviceRequiredOptions}
                                                            value={formData.service}
                                                            onChange={handleSelectChange("service")}
                                                            placeholder="Service Required"
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

                                            {/* Submit */}
                                            <div className="col-xl-12 col-lg-12">
                                                <div className="repair-cost__form-btn-box">
                                                    <button
                                                        type="submit"
                                                        className="thm-btn contact-three__btn"
                                                        disabled={isSubmitting}
                                                    >
                                                        <span>
                                                            {isSubmitting ? "Submitting..." : "Get Estimate"}
                                                        </span>
                                                        <i className="fal fa-angle-double-right"></i>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                    <div className="result"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/*Repair Cost End*/}
        </>
    );
}