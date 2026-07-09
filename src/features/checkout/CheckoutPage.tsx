"use client";
import { useState } from "react";
import Link from "next/link";
import CustomSelect from "@/components/elements/CustomSelect";
import {
    countryOptions,
    paymentMethods,
    orderItems,
    orderSummary,
    shippingOptions,
} from "@/data/checkoutPageData";

export default function CheckoutPage() {
    const [countryValue, setCountryValue] = useState<string>("");
    const [activePayment, setActivePayment] = useState(0);

    return (
        <>
            {/*Start Checkout Page*/}
            <section className="checkout-page">
                <div className="container">
                    <div className="row">
                        {/* ── Left Column: Billing Details ── */}
                        <div className="col-xl-8 col-lg-6">
                            <div className="billing_details">
                                <div className="billing_title">
                                    <p>
                                        Returning Customer?
                                        <Link href="#">Click here to Login</Link>
                                    </p>
                                    <h2>Billing details</h2>
                                </div>

                                <form className="billing_details_form">
                                    {/* Country Select */}
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="billing_input_box">
                                                <div className="select-box">
                                                    <CustomSelect
                                                        optionArray={countryOptions}
                                                        value={countryValue}
                                                        onChange={(val: string) =>
                                                            setCountryValue(val)
                                                        }
                                                        placeholder="Select a country"
                                                        name="country"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* First & Last Name */}
                                    <div className="row bs-gutter-x-20">
                                        <div className="col-xl-6">
                                            <div className="billing_input_box">
                                                <input
                                                    type="text"
                                                    name="first_name"
                                                    placeholder="First name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="billing_input_box">
                                                <input
                                                    type="text"
                                                    name="last_name"
                                                    placeholder="Last name"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Company, Address, Apartment, City */}
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="billing_input_box">
                                                <input
                                                    type="text"
                                                    name="company_name"
                                                    placeholder="Company"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="billing_input_box">
                                                <input
                                                    type="text"
                                                    name="address"
                                                    placeholder="Address"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="billing_input_box">
                                                <input
                                                    type="text"
                                                    name="apartment"
                                                    placeholder="Appartment, unit, etc. (optional)"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="billing_input_box">
                                                <input
                                                    type="text"
                                                    name="town_city"
                                                    placeholder="Town / City"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* State, Zip, Email, Phone */}
                                    <div className="row bs-gutter-x-20">
                                        <div className="col-xl-6">
                                            <div className="billing_input_box">
                                                <input
                                                    type="text"
                                                    name="state"
                                                    placeholder="State"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="billing_input_box">
                                                <input
                                                    name="form_zip"
                                                    type="text"
                                                    pattern="[0-9]*"
                                                    placeholder="Zip code"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="billing_input_box">
                                                <input
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email address"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="billing_input_box">
                                                <input
                                                    type="tel"
                                                    name="form_phone"
                                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                    placeholder="Phone"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Order Notes */}
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="billing_input_box">
                                                <textarea
                                                    placeholder="Type your note"
                                                    name="form_order_notes"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Create Account Checkbox */}
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="checked-box">
                                                <input
                                                    type="checkbox"
                                                    name="skipper1"
                                                    id="skipper"
                                                />
                                                <label htmlFor="skipper">
                                                    <span></span>Create an account?
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="billing_details_form-btns">
                                                <div className="billing_details_form-btn-1">
                                                    <button
                                                        type="submit"
                                                        className="thm-btn"
                                                    >
                                                        <span>Shopping</span>
                                                        <i className="fal fa-angle-double-right"></i>
                                                    </button>
                                                </div>
                                                <div className="billing_details_form-btn-2">
                                                    <button
                                                        type="submit"
                                                        className="thm-btn"
                                                    >
                                                        <span>Return To Cart</span>
                                                        <i className="fal fa-angle-double-right"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* ── Right Column: Order Summary ── */}
                        <div className="col-xl-4 col-lg-6">
                            <div className="sidebar-order-summary">
                                <div className="title-box">
                                    <h3>Your Order</h3>
                                </div>

                                <ul className="sidebar-order-summary__list list-unstyled">
                                    {/* Order Items */}
                                    {orderItems.map((item) => (
                                        <li key={item.id}>
                                            <div className="left-text">
                                                <p>{item.name}</p>
                                            </div>
                                            <div className="right-text">
                                                <p>{item.price}</p>
                                            </div>
                                        </li>
                                    ))}

                                    {/* Subtotal */}
                                    <li>
                                        <div className="left-text">
                                            <p>Sub total</p>
                                        </div>
                                        <div className="right-text">
                                            <p>{orderSummary.subtotal}</p>
                                        </div>
                                    </li>

                                    {/* Shipping Options */}
                                    <li>
                                        <div className="left-text">
                                            <p>Shipping</p>
                                        </div>
                                        <div className="right-text">
                                            <ul>
                                                {shippingOptions.map((option) => (
                                                    <li key={option.id}>
                                                        <input
                                                            type="radio"
                                                            id={option.id}
                                                            name="rating"
                                                            defaultChecked={
                                                                option.defaultChecked
                                                            }
                                                        />
                                                        <label htmlFor={option.id}>
                                                            <i></i>
                                                            {option.label}
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>

                                    {/* Total */}
                                    <li>
                                        <div className="left-text">
                                            <p>Total</p>
                                        </div>
                                        <div className="right-text">
                                            <p>{orderSummary.total}</p>
                                        </div>
                                    </li>
                                </ul>

                                {/* Payment Methods — accordion toggled by activePayment index */}
                                <div className="sidebar-order-summary__Payment">
                                    <div className="title-box">
                                        <h3>Payment Method</h3>
                                    </div>

                                    <div className="checkout__payment">
                                        {paymentMethods.map((method, index) => (
                                            <div
                                                key={method.id}
                                                className={`checkout__payment__item${activePayment === index
                                                    ? " checkout__payment__item--active"
                                                    : ""
                                                    }`}
                                            >
                                                <h3
                                                    className="checkout__payment__title"
                                                    onClick={() =>
                                                        setActivePayment(index)
                                                    }
                                                >
                                                    {method.title}
                                                </h3>
                                                {activePayment === index && (
                                                    <div className="checkout__payment__content">
                                                        {method.content}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom: Privacy + Terms + Place Order */}
                                <div className="sidebar-order-summary__bottom">
                                    <p className="text1">
                                        your personal data will be used to process
                                        your order your support experience throughout
                                        this website and for other purposes described
                                        in our <Link href="#">privacy policy</Link>
                                    </p>

                                    <div className="sidebar-order-summary__checked">
                                        <input
                                            type="checkbox"
                                            name="skipper1"
                                            id="skipper2"
                                        />
                                        <label htmlFor="skipper2">
                                            <span></span>I have read and agree to the
                                            website
                                            <Link href="#">terms and conditions</Link>
                                        </label>
                                    </div>

                                    <div className="sidebar-order-summary__btn">
                                        <Link href="/checkout" className="thm-btn">
                                            <span>Place order</span>
                                            <i className="fal fa-angle-double-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Checkout Page*/}
        </>
    );
}