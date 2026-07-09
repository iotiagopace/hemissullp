"use client";
// src/components/sections/PricingOne.tsx

import { useState } from "react";
import Link from "next/link";
import TextAnimation from "@/components/elements/TextAnimation";
import PricingOneShapeBg from "@/assets/images/shapes/pricing-one-shape-bg.png";
import PricingOneTabBtnShape1 from "@/assets/images/shapes/pricing-one-tab-btn-shape-1.png";
import PricingOneTabBtnShape2 from "@/assets/images/shapes/pricing-one-tab-btn-shape-2.png";
import PricingOneSingleTopShpaeBg from "@/assets/images/shapes/pricing-one-single-top-shpae-bg.png";
import PricingOneSingleBottomShpaeBg from "@/assets/images/shapes/pricing-one-single-bottom-shpae-bg.png";
import {
    pricingOneData,
    type PricingPlan,
    type PricingFeature,
} from "@/data/pricingOneData";

export default function PricingOne() {
    const [activeTab, setActiveTab] = useState<string>(
        pricingOneData.tabs[0].id
    );

    const { tagline, title, topText, tabs } = pricingOneData;

    return (
        <>
            {/*Pricing One Start*/}
            <section className="pricing-one">
                <div
                    className="pricing-one__shpae-bg"
                    style={{ backgroundImage: `url(${PricingOneShapeBg.src})` }}
                ></div>
                <div className="container">
                    {/* Section Title */}
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box two">
                            <p className="section-title__tagline">{tagline}</p>
                            <div className="section-title__tagline-shape"></div>
                        </div>
                        <h2 className="section-title__title">
                            <TextAnimation style="s1">{title}</TextAnimation>
                        </h2>
                    </div>

                    <p className="pricing-one__top-text">
                        {topText.split("<br />")[0]} <br />
                        {topText.split("<br />")[1]}
                    </p>

                    <div className="pricing-one__tab-box tabs-box">
                        {/* Tab Buttons */}
                        <ul className="tab-buttons clearfix list-unstyled">
                            {tabs.map((tab) => (
                                <li
                                    key={tab.id}
                                    className={`tab-btn${activeTab === tab.id ? " active-btn" : ""}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <div className="tab-btn-content-box">
                                        <div
                                            className="pricing-one__tab-btn-shpae"
                                            style={{
                                                backgroundImage: `url(${PricingOneTabBtnShape1.src})`,
                                            }}
                                        ></div>
                                        <div
                                            className="pricing-one__tab-btn-shpae-2"
                                            style={{
                                                backgroundImage: `url(${PricingOneTabBtnShape2.src})`,
                                            }}
                                        ></div>
                                        <div className="icon-box">
                                            <span className={tab.icon}></span>
                                        </div>
                                        <p>{tab.label}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Tab Content Panels */}
                        <div className="tabs-content">
                            {tabs.map((tab) => (
                                <div
                                    key={tab.id}
                                    id={tab.id}
                                    className={`tab${activeTab === tab.id ? " active-tab" : ""}`}
                                >
                                    <div className="pricing-one__tab-content-box">
                                        <div className="row">
                                            {tab.plans.map(
                                                (plan: PricingPlan) => (
                                                    <div
                                                        key={`${tab.id}-plan-${plan.id}`}
                                                        className="col-xl-4 col-lg-4 col-md-6"
                                                    >
                                                        {/*Pricing One Single Start*/}
                                                        <div className="pricing-one__single">
                                                            {/* Top */}
                                                            <div className="pricing-one__single-top">
                                                                <div
                                                                    className="pricing-one__single-top-shape-bg"
                                                                    style={{
                                                                        backgroundImage: `url(${PricingOneSingleTopShpaeBg.src})`,
                                                                    }}
                                                                ></div>
                                                                <h4>
                                                                    {plan.name}
                                                                </h4>
                                                                <h3>
                                                                    <span className="dolar">
                                                                        $
                                                                    </span>
                                                                    {
                                                                        plan.priceWhole
                                                                    }
                                                                    <span className="point-amount">
                                                                        {
                                                                            plan.priceDecimal
                                                                        }
                                                                    </span>
                                                                </h3>
                                                            </div>

                                                            {/* Bottom */}
                                                            <div className="pricing-one__single-bottom">
                                                                <div
                                                                    className="pricing-one__single-bottom-shape-bg"
                                                                    style={{
                                                                        backgroundImage: `url(${PricingOneSingleBottomShpaeBg.src})`,
                                                                    }}
                                                                ></div>
                                                                <p className="pricing-one__single-bottom-text">
                                                                    {
                                                                        plan.description
                                                                    }
                                                                </p>
                                                                <ul className="pricing-one__list">
                                                                    {plan.features.map(
                                                                        (
                                                                            feature: PricingFeature
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    feature.id
                                                                                }
                                                                            >
                                                                                <div className="icon">
                                                                                    <span className="fas fa-check"></span>
                                                                                </div>
                                                                                <div className="text">
                                                                                    <p>
                                                                                        {
                                                                                            feature.label
                                                                                        }
                                                                                    </p>
                                                                                </div>
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                                <div className="pricing-one__btn">
                                                                    <Link
                                                                        href={
                                                                            plan.btnLink
                                                                        }
                                                                    >
                                                                        Order
                                                                        Now
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*Pricing One Single End*/}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/*Pricing One End*/}
        </>
    );
}