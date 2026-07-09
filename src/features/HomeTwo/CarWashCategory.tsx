"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import CustomSelect from "@/components/elements/CustomSelect";
import {
    carWashTabs,
    serviceTypeOptions,
    vehicleTypeOptions,
    locationOptions,
    INITIAL_CAR_WASH_FORM,
    type CarWashFormData,
} from "@/data/carWashCategoryData";

// ─── Validation ───────────────────────────────────────────────────────────────

function validateForm(
    data: CarWashFormData
): Partial<CarWashFormData> {
    const errors: Partial<CarWashFormData> = {};
    if (!data.serviceType) errors.serviceType = "Please select a service type.";
    if (!data.vehicleType) errors.vehicleType = "Please select a vehicle type.";
    if (!data.location) errors.location = "Please select a location.";
    return errors;
}

// ─── Shared Tab Form ──────────────────────────────────────────────────────────

interface TabFormProps {
    tabId: string;
}

function TabForm({ tabId }: TabFormProps) {
    const [formData, setFormData] =
        useState<CarWashFormData>(INITIAL_CAR_WASH_FORM);
    const [errors, setErrors] =
        useState<Partial<CarWashFormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSelectChange =
        (field: keyof CarWashFormData) => (val: string) => {
            setFormData((prev) => ({ ...prev, [field]: val }));
            if (errors[field])
                setErrors((prev) => ({ ...prev, [field]: undefined }));
        };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const result = await Swal.fire({
            title: "Submit Booking?",
            text: "Are you sure you want to submit this request?",
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
            // const response = await fetch("/api/car-wash-booking", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({
            //         tab:         tabId,
            //         serviceType: formData.serviceType,
            //         vehicleType: formData.vehicleType,
            //         location:    formData.location,
            //     }),
            // });
            // if (!response.ok) throw new Error("Failed to submit");
            // const data = await response.json();
            // ─────────────────────────────────────────────────────────────────

            await new Promise((res) => setTimeout(res, 800));

            setFormData(INITIAL_CAR_WASH_FORM);
            setErrors({});
            Swal.fire({
                title: "Booking Submitted!",
                text: "We'll confirm your appointment shortly.",
                icon: "success",
                confirmButtonColor: "#e74c3c",
                timer: 3000,
                timerProgressBar: true,
            });
        } catch {
            Swal.fire({
                title: "Something went wrong!",
                text: "Failed to submit your booking. Please try again.",
                icon: "error",
                confirmButtonColor: "#e74c3c",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="car-wash-category__content-box">
            <form
                className="car-wash-category__form contact-form-validated"
                onSubmit={handleSubmit}
                noValidate
            >
                <div className="row">

                    {/* Service Type */}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="car-wash-category__input-box">
                            <label className="car-wash-category__input-label">
                                Service Type :
                            </label>
                            <div className="select-box">
                                <CustomSelect
                                    optionArray={serviceTypeOptions}
                                    value={formData.serviceType}
                                    onChange={handleSelectChange("serviceType")}
                                    placeholder="Type Of Service"
                                    name={`${tabId}-serviceType`}
                                />
                            </div>
                            {errors.serviceType && (
                                <span style={{ color: "#e74c3c", fontSize: "12px" }}>
                                    {errors.serviceType}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Vehicle Type */}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="car-wash-category__input-box">
                            <label className="car-wash-category__input-label">
                                Vehicle Type:
                            </label>
                            <div className="select-box">
                                <CustomSelect
                                    optionArray={vehicleTypeOptions}
                                    value={formData.vehicleType}
                                    onChange={handleSelectChange("vehicleType")}
                                    placeholder="Type Of Service"
                                    name={`${tabId}-vehicleType`}
                                />
                            </div>
                            {errors.vehicleType && (
                                <span style={{ color: "#e74c3c", fontSize: "12px" }}>
                                    {errors.vehicleType}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Location */}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="car-wash-category__input-box">
                            <label className="car-wash-category__input-label">
                                Location:
                            </label>
                            <div className="select-box">
                                <CustomSelect
                                    optionArray={locationOptions}
                                    value={formData.location}
                                    onChange={handleSelectChange("location")}
                                    placeholder="Type Of Service"
                                    name={`${tabId}-location`}
                                />
                            </div>
                            {errors.location && (
                                <span style={{ color: "#e74c3c", fontSize: "12px" }}>
                                    {errors.location}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="car-wash-category__input-box">
                            <div className="car-wash-category__btn-box">
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
                        </div>
                    </div>

                </div>
                <div className="result"></div>
            </form>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CarWashCategory() {
    const [activeTab, setActiveTab] = useState<string>(carWashTabs[0].id);

    return (
        <>
            {/*Car Wash Category Start*/}
            <section className="car-wash-category">
                <div className="car-wash-category__wrap">
                    <div className="container">
                        <div className="car-wash-category__inner">
                            <div className="car-wash-category__tab-box tabs-box">

                                {/* Tab Buttons */}
                                <ul className="tab-buttons clearfix list-unstyled">
                                    {carWashTabs.map((tab) => (
                                        <li
                                            key={tab.id}
                                            className={`tab-btn ${activeTab === tab.id ? "active-btn" : ""}`}
                                            onClick={() => setActiveTab(tab.id)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) =>
                                                e.key === "Enter" && setActiveTab(tab.id)
                                            }
                                        >
                                            <div className="tab-btn-content-box">
                                                <div className="icon-box">
                                                    <span className={tab.icon}></span>
                                                </div>
                                                <p>{tab.label}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tab Content — each tab has its own isolated form state */}
                                <div className="tabs-content">
                                    <AnimatePresence mode="wait">
                                        {carWashTabs
                                            .filter((tab) => tab.id === activeTab)
                                            .map((tab) => (
                                                <motion.div
                                                    key={tab.id}
                                                    initial={{ opacity: 0, y: 16 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -16 }}
                                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                                    className={`tab active-tab`}
                                                    id={tab.id}
                                                >
                                                    <TabForm tabId={tab.id} />
                                                </motion.div>
                                            ))}
                                    </AnimatePresence>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Car Wash Category End*/}
        </>
    );
}