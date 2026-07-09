"use client";
// src/components/sections/OperateOne.tsx

import Image from "next/image";
import { useState } from "react";
import TextAnimation from "@/components/elements/TextAnimation";
import OperateOneShpae1 from "@/assets/images/shapes/operate-one-shpae-1.png";
import OperateOneShpae2 from "@/assets/images/shapes/operate-one-shpae-2.png";
import OperateOneShpae3 from "@/assets/images/shapes/operate-one-shpae-3.png";
import OperateOneImg1 from "@/assets/images/resources/operate-one-img-1.png";
import { operateOneData, type OperateOnePoint } from "@/data/operateOneData";

export default function OperateOne() {
    const [activeTab, setActiveTab] = useState<string>(
        operateOneData.tabs[0].id
    );

    const { tagline, title, tabs } = operateOneData;

    return (
        <>
            {/*Operate One Start*/}
            <section className="operate-one">
                <div className="operate-one__shape-1">
                    <Image src={OperateOneShpae1} alt="operate-one-shpae" />
                </div>
                <div className="operate-one__shape-2">
                    <Image src={OperateOneShpae2} alt="operate-one-shpae" />
                </div>
                <div className="operate-one__bg-color">
                    <div className="operate-one__shape-3 float-bob-y">
                        <Image src={OperateOneShpae3} alt="operate-one-shpae" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="operate-one__left">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <p className="section-title__tagline">
                                            {tagline}
                                        </p>
                                        <div className="section-title__tagline-shape"></div>
                                    </div>
                                    <h2 className="section-title__title">
                                        <TextAnimation style="s1">
                                            {title}
                                        </TextAnimation>
                                    </h2>
                                </div>

                                <div className="operate-one__tab-box tabs-box">
                                    {/* Tab Buttons */}
                                    <ul className="tab-buttons clearfix list-unstyled">
                                        {tabs.map((tab) => (
                                            <li
                                                key={tab.id}
                                                className={`tab-btn${activeTab === tab.id ? " active-btn" : ""}`}
                                                onClick={() =>
                                                    setActiveTab(tab.id)
                                                }
                                            >
                                                <p>{tab.label}</p>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tab Content */}
                                    <div className="tabs-content">
                                        {tabs.map((tab) => (
                                            <div
                                                key={tab.id}
                                                id={tab.id}
                                                className={`tab${activeTab === tab.id ? " active-tab" : ""}`}
                                            >
                                                <div className="operate-one__content-box">
                                                    <p className="operate-one__content-text">
                                                        {tab.contentText}
                                                    </p>
                                                    <div className="operate-one__point-box">
                                                        {/* Column One */}
                                                        <ul className="operate-one__point">
                                                            {tab.pointsColumnOne.map(
                                                                (
                                                                    point: OperateOnePoint
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            point.id
                                                                        }
                                                                    >
                                                                        <div className="icon">
                                                                            <span className="fas fa-check"></span>
                                                                        </div>
                                                                        <div className="text">
                                                                            <p>
                                                                                {
                                                                                    point.label
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                        {/* Column Two */}
                                                        <ul className="operate-one__point two">
                                                            {tab.pointsColumnTwo.map(
                                                                (
                                                                    point: OperateOnePoint
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            point.id
                                                                        }
                                                                    >
                                                                        <div className="icon">
                                                                            <span className="fas fa-check"></span>
                                                                        </div>
                                                                        <div className="text">
                                                                            <p>
                                                                                {
                                                                                    point.label
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="operate-one__right">
                                <div className="operate-one__img">
                                    <Image
                                        src={OperateOneImg1}
                                        alt="operate-one-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Operate One End*/}
        </>
    );
}