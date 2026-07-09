"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import {
    wishlistItems,
    wishlistSocialLinks,
    type WishlistItem,
} from "@/data/wishlistPageData";

export default function WishlistPage() {
    const [items, setItems] = useState<WishlistItem[]>(wishlistItems);

    const handleRemoveItem = (id: number, name: string) => {
        Swal.fire({
            title: "Remove from Wishlist?",
            text: `Are you sure you want to remove "${name}" from your wishlist?`,
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
                    text: `"${name}" has been removed from your wishlist.`,
                    icon: "success",
                    confirmButtonColor: "#e74c3c",
                    timer: 2000,
                    timerProgressBar: true,
                });
            }
        });
    };

    return (
        <>
            {/*Start Cart Page*/}
            <section className="wishlist-page">
                <div className="container">
                    <div className="table-responsive">
                        <table className="table wishlist-table">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Unit Price</th>
                                    <th>Stock Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="product-box">
                                                <div className="cross-icon">
                                                    <button
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
                                                        aria-label={`Remove ${item.name} from wishlist`}
                                                    >
                                                        <i className="fas fa-times"></i>
                                                    </button>
                                                </div>
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
                                        <td>{item.price}</td>
                                        <td>{item.stockStatus}</td>
                                        <td>
                                            <div className="product-select">
                                                <Link
                                                    href="/wishlist"
                                                    className="thm-btn wishlist-page__btn"
                                                >
                                                    <span>Select Product</span>
                                                    <i className="fal fa-angle-double-right"></i>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="product-details__social two">
                        <div className="title">
                            <h3>Share with friends:</h3>
                        </div>
                        <div className="product-details__social-link">
                            {wishlistSocialLinks.map((social) => (
                                <Link
                                    href={social.href}
                                    key={social.id}
                                    aria-label={social.label}
                                >
                                    <span className={social.icon}></span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/*End Cart Page*/}
        </>
    );
}