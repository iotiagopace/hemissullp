"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import CustomSelect from "@/components/elements/CustomSelect";
import {
    cartItems,
    countryOptions,
    stateCityOptions,
    cartTotalsConfig,
    type CartItem,
} from "@/data/cartPageData";

export default function CartPage() {
    const [items, setItems] = useState<CartItem[]>(cartItems);
    const [countryValue, setCountryValue] = useState<string>("");
    const [stateValue, setStateValue] = useState<string>("");

    // ── Quantity ──────────────────────────────────────────────────────────────
    const handleQuantityChange = (id: number, newQuantity: number) => {
        if (newQuantity < 1) return;
        setItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    // ── Remove with SweetAlert ────────────────────────────────────────────────
    const handleRemoveItem = (id: number, name: string) => {
        Swal.fire({
            title: "Remove Item?",
            text: `Remove "${name}" from your cart?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#e74c3c",
            cancelButtonColor: "#6c757d",
            confirmButtonText: "Yes, remove it!",
            cancelButtonText: "Cancel",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                setItems((prev) => prev.filter((item) => item.id !== id));
                Swal.fire({
                    title: "Removed!",
                    text: `"${name}" has been removed from your cart.`,
                    icon: "success",
                    confirmButtonColor: "#e74c3c",
                    timer: 2000,
                    timerProgressBar: true,
                });
            }
        });
    };

    // ── Totals ────────────────────────────────────────────────────────────────
    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const { shippingCost, discount } = cartTotalsConfig;
    const total = subtotal + shippingCost - discount;

    const fmt = (n: number) =>
        `$${n.toFixed(2)} USD`;

    return (
        <>
            {/*Start Cart Page*/}
            <section className="cart-page">
                <div className="container">
                    <div className="row">
                        {/* ── Left: Cart Table ── */}
                        <div className="col-xl-8 col-lg-7">
                            <div className="cart-page__left">
                                <div className="table-responsive">
                                    <table className="table cart-table">
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {items.map((item) => (
                                                <tr key={item.id}>
                                                    {/* Product */}
                                                    <td>
                                                        <div className="product-box">
                                                            <div className="img-box">
                                                                <Image
                                                                    src={item.image}
                                                                    alt={item.name} />
                                                            </div>
                                                            <h3>
                                                                <Link href={item.detailsLink}>
                                                                    {item.name}
                                                                </Link>
                                                            </h3>
                                                        </div>
                                                    </td>

                                                    {/* Unit Price */}
                                                    <td>
                                                        ${item.price.toFixed(2)}
                                                    </td>

                                                    {/* Quantity */}
                                                    <td>
                                                        <div className="quantity-box">
                                                            <button
                                                                type="button"
                                                                className="sub"
                                                                onClick={() =>
                                                                    handleQuantityChange(
                                                                        item.id,
                                                                        item.quantity - 1
                                                                    )
                                                                }
                                                            >
                                                                <i className="fa fa-minus"></i>
                                                            </button>
                                                            <input
                                                                type="number"
                                                                id={`product-${item.id}`}
                                                                value={item.quantity}
                                                                onChange={(e) =>
                                                                    handleQuantityChange(
                                                                        item.id,
                                                                        parseInt(e.target.value) || 1
                                                                    )
                                                                }
                                                            />
                                                            <button
                                                                type="button"
                                                                className="add"
                                                                onClick={() =>
                                                                    handleQuantityChange(
                                                                        item.id,
                                                                        item.quantity + 1
                                                                    )
                                                                }
                                                            >
                                                                <i className="fa fa-plus"></i>
                                                            </button>
                                                        </div>
                                                    </td>

                                                    {/* Line Total */}
                                                    <td>
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </td>

                                                    {/* Remove */}
                                                    <td>
                                                        <div className="cross-icon">
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    handleRemoveItem(
                                                                        item.id,
                                                                        item.name
                                                                    )
                                                                }
                                                                style={{
                                                                    background: "none",
                                                                    border: "none",
                                                                    cursor: "pointer",
                                                                    padding: 0,
                                                                }}
                                                                aria-label={`Remove ${item.name}`}
                                                            >
                                                                <i className="fas fa-times"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* ── Right: Sidebar ── */}
                        <div className="col-xl-4 col-lg-5">
                            <div className="cart-page__right">
                                <div className="cart-page__sidebar">

                                    {/* Shipping Calculator */}
                                    <div className="cart-page__shipping">
                                        <h3 className="cart-page__shipping-title">
                                            Calculated Shipping
                                        </h3>
                                        <form className="cart-page__shipping-form">
                                            <div className="row">
                                                {/* Country */}
                                                <div className="col-xl-12">
                                                    <div className="cart-page__shipping-input-box">
                                                        <div className="select-box">
                                                            <CustomSelect
                                                                optionArray={countryOptions}
                                                                value={countryValue}
                                                                onChange={(val: string) =>
                                                                    setCountryValue(val)
                                                                }
                                                                placeholder="Country"
                                                                name="shipping_country"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* State / City */}
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="cart-page__shipping-input-box">
                                                        <div className="select-box">
                                                            <CustomSelect
                                                                optionArray={stateCityOptions}
                                                                value={stateValue}
                                                                onChange={(val: string) =>
                                                                    setStateValue(val)
                                                                }
                                                                placeholder="State/City"
                                                                name="shipping_state"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Zip Code */}
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="cart-page__shipping-input-box">
                                                        <input
                                                            type="text"
                                                            placeholder="Zip Code"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="cart-page__btn-box">
                                                    <button
                                                        type="submit"
                                                        className="thm-btn"
                                                    >
                                                        <span>Update</span>
                                                        <i className="fal fa-angle-double-right"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    {/* Coupon Code */}
                                    <div className="cart-page__coupon-code">
                                        <h3 className="cart-page__coupon-code-title">
                                            Coupon Code
                                        </h3>
                                        <p className="cart-page__coupon-code-text">
                                            I must explain to you how all this
                                            mistaken idea of denouncing pleasure
                                            and praising pain was born
                                        </p>
                                        <form className="default-form cart-page__coupon-code-form">
                                            <input
                                                type="text"
                                                placeholder="Enter Coupon Code"
                                            />
                                            <button
                                                className="thm-btn"
                                                type="submit"
                                            >
                                                <span>Apply Coupon</span>
                                                <i className="fal fa-angle-double-right"></i>
                                            </button>
                                        </form>
                                    </div>

                                    {/* Cart Totals — dynamic */}
                                    <div className="cart-page__cart-total">
                                        <ul className="cart-total list-unstyled">
                                            <li>
                                                <span>Cart Subtotal</span>
                                                <span>{fmt(subtotal)}</span>
                                            </li>
                                            <li>
                                                <span>Shipping Cost</span>
                                                <span>-{fmt(shippingCost)}</span>
                                            </li>
                                            <li>
                                                <span>Discount</span>
                                                <span>{fmt(discount)}</span>
                                            </li>
                                            <li>
                                                <span>Cart Total</span>
                                                <span className="cart-total-amount">
                                                    {fmt(total)}
                                                </span>
                                            </li>
                                        </ul>

                                        <div className="cart-page__buttons">
                                            <div className="cart-page__buttons-1">
                                                <Link
                                                    href="/checkout"
                                                    className="thm-btn"
                                                >
                                                    <span>Update</span>
                                                </Link>
                                            </div>
                                            <div className="cart-page__buttons-2">
                                                <Link
                                                    href="/checkout"
                                                    className="thm-btn"
                                                >
                                                    <span>Checkout</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Cart Page*/}
        </>
    );
}