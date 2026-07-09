"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import CustomSelect from "@/components/elements/CustomSelect";
import {
    shopProductsData,
    recentProductsData,
    categoriesData,
    productTagsData,
    sortOptions,
    ITEMS_PER_PAGE,
} from "@/data/shopProductsData";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const parsePrice = (priceStr: string) =>
    parseFloat(priceStr.replace(/[^0-9.]/g, "")) || 0;

export default function Product() {
    // ── Tab & Sort ────────────────────────────────────────────────────────────
    const [activeTab, setActiveTab] = useState<"grid" | "list">("grid");
    const [sortValue, setSortValue] = useState<string>(sortOptions[0].value);

    // ── Price Range ───────────────────────────────────────────────────────────
    const { minPrice, maxPrice } = useMemo(() => {
        const prices = shopProductsData.map((p) => parsePrice(p.price));
        return { minPrice: Math.min(...prices), maxPrice: Math.max(...prices) };
    }, []);

    const [priceRange, setPriceRange] = useState<[number, number]>([
        minPrice,
        maxPrice,
    ]);

    const handlePriceChange = (value: number | number[]) => {
        const [min, max] = value as number[];
        setPriceRange([min, max]);
        setCurrentPage(1); // reset to page 1 on filter change
    };

    const handleFilterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    // ── Pagination ────────────────────────────────────────────────────────────
    const [currentPage, setCurrentPage] = useState(1);

    const filteredProducts = useMemo(() => {
        return shopProductsData.filter((p) => {
            const price = parsePrice(p.price);
            return price >= priceRange[0] && price <= priceRange[1];
        });
    }, [priceRange]);

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

    const paginatedProducts = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredProducts, currentPage]);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // ── Showing text ──────────────────────────────────────────────────────────
    const startItem = (currentPage - 1) * ITEMS_PER_PAGE + 1;
    const endItem = Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length);
    const showingText =
        filteredProducts.length > 0
            ? `Showing ${startItem}–${endItem} of ${filteredProducts.length} results`
            : `Showing 0 of ${shopProductsData.length} results`;

    return (
        <>
            {/*Product Start*/}
            <section className="product">
                <div className="container">
                    <div className="row">
                        {/* ── Main Content ── */}
                        <div className="col-xl-9 col-lg-12">
                            <div className="product__items">
                                {/* Top Bar */}
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="product__showing-result">
                                            <div className="product__showing-text-box">
                                                <p className="product__showing-text">
                                                    {showingText}
                                                </p>
                                            </div>
                                            <div className="product__showing-sort">
                                                <div className="select-box">
                                                    <CustomSelect
                                                        optionArray={sortOptions}
                                                        value={sortValue}
                                                        onChange={(val: string) =>
                                                            setSortValue(val)
                                                        }
                                                        placeholder="Sort by popular"
                                                        name="sort"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Grid / List Tabs */}
                                <div className="product__all">
                                    <div className="product__all-tab">
                                        <div className="product__all-tab-button">
                                            <ul className="tabs-button-box clearfix">
                                                <li
                                                    data-tab="#grid"
                                                    className={`tab-btn-item ${activeTab === "grid" ? "active-btn-item" : ""}`}
                                                    onClick={() => setActiveTab("grid")}
                                                >
                                                    <div className="product__all-tab-button-icon one">
                                                        <i className="fa fa-solid fa-bars"></i>
                                                    </div>
                                                </li>
                                                <li
                                                    data-tab="#list"
                                                    className={`tab-btn-item ${activeTab === "list" ? "active-btn-item" : ""}`}
                                                    onClick={() => setActiveTab("list")}
                                                >
                                                    <div className="product__all-tab-button-icon">
                                                        <i className="fa fa-solid fa-list-ul"></i>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="tabs-content-box">
                                            {/* ── Grid View ── */}
                                            <div
                                                className={`tab-content-box-item ${activeTab === "grid" ? "tab-content-box-item-active" : ""}`}
                                                id="grid"
                                            >
                                                <div className="product__all-tab-content-box-item">
                                                    <div className="product__all-tab-single">
                                                        <div className="row">
                                                            {paginatedProducts.map((product) => (
                                                                <div
                                                                    key={product.id}
                                                                    className="col-xl-4 col-lg-6 col-md-6"
                                                                >
                                                                    <div className="single-product-style1">
                                                                        <div className="single-product-style1__img">
                                                                            <Image src={product.gridImage} alt={product.title} />
                                                                            <Image src={product.gridImageHover} alt={product.title} />
                                                                            {product.badges && product.badges.length > 0 && (
                                                                                <ul className="single-product-style1__overlay">
                                                                                    {product.badges.map((badge, i) => (
                                                                                        <li key={i}>
                                                                                            <p>{badge.text}</p>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            )}
                                                                            <ul className="single-product-style1__info">
                                                                                <li>
                                                                                    <Link href="#" title="Add to Wishlist">
                                                                                        <i className="fa fa-regular fa-heart"></i>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link href="#" title="Add to cart">
                                                                                        <i className="fa fa-solid fa-cart-plus"></i>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link href="#" title="Quick View">
                                                                                        <i className="fa fa-regular fa-eye"></i>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link href="#" title="Compare">
                                                                                        <i className="fa fa-solid fa-repeat"></i>
                                                                                    </Link>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="single-product-style1__content">
                                                                            <div className="single-product-style1__content-left">
                                                                                <h4>
                                                                                    <Link href={product.link}>
                                                                                        {product.title}
                                                                                    </Link>
                                                                                </h4>
                                                                                <p>
                                                                                    {product.oldPrice && (
                                                                                        <del>{product.oldPrice}</del>
                                                                                    )}
                                                                                    {product.price}
                                                                                </p>
                                                                            </div>
                                                                            <div className="single-product-style1__content-right">
                                                                                <div className="single-product-style1__review">
                                                                                    <i className="fa fa-star"></i>
                                                                                    <p>{product.rating}</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ── List View ── */}
                                            <div
                                                className={`tab-content-box-item ${activeTab === "list" ? "tab-content-box-item-active" : ""}`}
                                                id="list"
                                            >
                                                <div className="product__all-tab-content-box-item">
                                                    <div className="product__all-tab-single">
                                                        <div className="row">
                                                            {paginatedProducts.map((product) => (
                                                                <div
                                                                    key={product.id}
                                                                    className="col-xl-6 col-lg-6"
                                                                >
                                                                    <div className="single-product-style2">
                                                                        <div className="row">
                                                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                                                <div className="single-product-style2__img">
                                                                                    <Image src={product.listImage} alt={product.title} />
                                                                                    <Image src={product.listImageHover} alt={product.title} />
                                                                                    {product.badges && product.badges.length > 0 && (
                                                                                        <ul className="single-product-style1__overlay">
                                                                                            {product.badges.map((badge, i) => (
                                                                                                <li key={i}>
                                                                                                    <p>{badge.text}</p>
                                                                                                </li>
                                                                                            ))}
                                                                                        </ul>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                                                <div className="single-product-style2__content">
                                                                                    <div className="single-product-style2__review">
                                                                                        {[...Array(5)].map((_, i) => (
                                                                                            <i key={i} className="fa fa-star"></i>
                                                                                        ))}
                                                                                    </div>
                                                                                    <div className="single-product-style2__text">
                                                                                        <h4>
                                                                                            <Link href={product.link}>
                                                                                                {product.title}
                                                                                            </Link>
                                                                                        </h4>
                                                                                        <p>
                                                                                            {product.oldPrice && (
                                                                                                <del>{product.oldPrice}</del>
                                                                                            )}
                                                                                            {product.price}
                                                                                        </p>
                                                                                    </div>
                                                                                    <ul className="single-product-style2__info">
                                                                                        <li>
                                                                                            <Link href="#" title="Add to Wishlist">
                                                                                                <i className="fa fa-regular fa-heart"></i>
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link href="#" title="Add to cart">
                                                                                                <i className="fa fa-solid fa-cart-plus"></i>
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link href="#" title="Quick View">
                                                                                                <i className="fa fa-regular fa-eye"></i>
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link href="#" title="Compare">
                                                                                                <i className="fa fa-solid fa-repeat"></i>
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ── Pagination ── */}
                                    {totalPages > 1 && (
                                        <ul className="styled-pagination text-center clearfix list-unstyled">
                                            {/* Prev */}
                                            <li
                                                className={`arrow prev ${currentPage === 1 ? "" : "active"}`}
                                            >
                                                <Link href="#"
                                                    onClick={() => handlePageChange(currentPage - 1)}
                                                >
                                                    <span className="fas fa-angle-left"></span>
                                                </Link>
                                            </li>

                                            {/* Page Numbers */}
                                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                                                (page) => (
                                                    <li
                                                        key={page}
                                                        className={currentPage === page ? "active" : ""}
                                                    >
                                                        <Link href="#"
                                                            onClick={() => handlePageChange(page)}
                                                        >
                                                            {page}
                                                        </Link>
                                                    </li>
                                                )
                                            )}

                                            {/* Next */}
                                            <li
                                                className={`arrow next ${currentPage === totalPages ? "" : "active"}`}
                                            >
                                                <Link href="#"
                                                    onClick={() => handlePageChange(currentPage + 1)}
                                                >
                                                    <span className="fas fa-angle-right"></span>
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* ── Sidebar ── */}
                        <div className="col-xl-3 col-lg-12">
                            <div className="product__sidebar">

                                {/* Search */}
                                <div className="shop-search product__sidebar-single">
                                    <form className="shop-search__form">
                                        <input type="text" placeholder="Search..." />
                                        <button type="submit">
                                            <i className="icon-search"></i>
                                        </button>
                                    </form>
                                </div>

                                {/* Price Filter */}
                                <div className="product__price-ranger product__sidebar-single">
                                    <h3 className="product__sidebar-title">
                                        Price Filter
                                    </h3>
                                    <form className="price-ranger" onSubmit={handleFilterSubmit}>
                                        <div id="slider-range" className="price-ranger__slider">
                                            <Slider
                                                range
                                                min={minPrice}
                                                max={maxPrice}
                                                value={[priceRange[0], priceRange[1]]}
                                                onChange={handlePriceChange}
                                                allowCross={false}
                                            />
                                        </div>
                                        <div className="ranger-min-max-block">
                                            <input
                                                type="text"
                                                className="min"
                                                readOnly
                                                value={priceRange[0]}
                                            />
                                            <span>-</span>
                                            <input
                                                type="text"
                                                className="max"
                                                readOnly
                                                value={priceRange[1]}
                                            />
                                            <input type="submit" value="Filter" />
                                        </div>
                                    </form>
                                </div>

                                {/* Categories */}
                                <div className="shop-category product__sidebar-single">
                                    <h3 className="product__sidebar-title">
                                        Categories
                                    </h3>
                                    <ul className="list-unstyled">
                                        {categoriesData.map((category) => (
                                            <li
                                                key={category.id}
                                                className={category.active ? "active" : ""}
                                            >
                                                <Link href={category.link}>
                                                    {category.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Recent Products */}
                                <div className="shop-product-recent-products product__sidebar-single">
                                    <h3 className="product__sidebar-title">
                                        Recent Products
                                    </h3>
                                    <ul className="clearfix list-unstyled">
                                        {recentProductsData.map((rp) => (
                                            <li key={rp.id}>
                                                <div className="img">
                                                    <Image src={rp.image} alt={rp.title} />
                                                    <Link href={rp.link}>
                                                        <i className="fa fa-link" aria-hidden="true"></i>
                                                    </Link>
                                                </div>
                                                <div className="content">
                                                    <div className="title">
                                                        <h5>
                                                            <Link href={rp.link}>
                                                                {rp.title}
                                                            </Link>
                                                        </h5>
                                                    </div>
                                                    <div className="price">
                                                        <p>{rp.price}</p>
                                                    </div>
                                                    <div className="review">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star color"></i>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Product Tags */}
                                <div className="shop-product-tags product__sidebar-single">
                                    <h3 className="product__sidebar-title">
                                        Product Tags
                                    </h3>
                                    <div className="shop-product__tags-list">
                                        {productTagsData.map((tag, i) => (
                                            <Link key={i} href="#">
                                                {tag}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Reviews */}
                                <div className="shop-product-tags product__sidebar-single style">
                                    <h3 className="product__sidebar-title">Reviews</h3>
                                    <div className="sidebar-rating-box sidebar-rating-box--style2">
                                        <ul className="list-unstyled">
                                            {[
                                                { id: "fivestar", gray: 0 },
                                                { id: "fourstar", gray: 1 },
                                                { id: "threestar", gray: 2 },
                                                { id: "twostar", gray: 3 },
                                                { id: "onestar", gray: 4 },
                                            ].map((row, idx) => (
                                                <li key={row.id}>
                                                    <input
                                                        type="radio"
                                                        id={row.id}
                                                        name="rating"
                                                        defaultChecked={idx === 0}
                                                    />
                                                    <label htmlFor={row.id}>
                                                        <i></i>
                                                        {[...Array(5)].map((_, si) => (
                                                            <span
                                                                key={si}
                                                                className={`fas fa-star${si >= 5 - row.gray ? " gray" : ""}`}
                                                            ></span>
                                                        ))}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Product End*/}
        </>
    );
}