import Image from "next/image";
import Link from "next/link";
import TextAnimation from "@/components/elements/TextAnimation";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import AboutTwoSahpe1 from "@/assets/images/shapes/about-two-sahpe-1.png";
import AboutTwoImg1 from "@/assets/images/resources/about-two-img-1.jpg";
import AboutTwoImg2 from "@/assets/images/resources/about-two-img-2.jpg";

export default function AboutTwo() {
    return (
        <>
            {/*About Two Start*/}
            <section className="about-two" id="about">
                <div className="about-two__shape-1">
                    <Image src={AboutTwoSahpe1} alt="image" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <FadeInAdvanced
                                variant={"fadeInRight"}
                                delay={200}
                                duration={1500}
                            >
                                <div className="about-two__left">
                                    <div className="about-two__img-box">
                                        <div className="about-two__img">
                                            <Image
                                                src={AboutTwoImg1}
                                                alt="about-two-img" />
                                        </div>
                                        <div className="about-two__img-two">
                                            <Image
                                                src={AboutTwoImg2}
                                                alt="about-two-img" />
                                        </div>
                                        <div className="about-two__img-content">
                                            <div className="about-two__img-content-icon">
                                                <span className="icon-car"></span>
                                            </div>
                                            <p className="about-two__img-content-text-1">
                                                OUR MISSION
                                            </p>
                                            <p className="about-two__img-content-text-2">
                                                "We Wash It, Till <br />
                                                It Shines"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        <div className="col-xl-6">
                            <FadeInAdvanced
                                variant={"fadeInLeft"}
                                delay={200}
                                duration={1500}
                            >
                                <div className="about-two__right">
                                    <div className="section-title text-left sec-title-animation animation-style2">
                                        <div className="section-title__tagline-box two">
                                            <p className="section-title__tagline">
                                                About us
                                            </p>
                                            <div className="section-title__tagline-shape"></div>
                                        </div>
                                        <h2 className="section-title__title">
                                            <TextAnimation style="s2">
                                                Expert Car Cleaning with Quality
                                                Care
                                            </TextAnimation>
                                        </h2>
                                    </div>
                                    <p className="about-two__text">
                                        professional car wash enhances your
                                        vehicle’s appearance and shields its
                                        finish from harmful contaminants. Our
                                        advanced methods and eco-friendly
                                        products provide a deep, refined shine
                                        you can see and feel.
                                    </p>
                                    <div className="about-two__icon-box">
                                        <ul className="about-two__icon-box-list">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-professional-success"></span>
                                                </div>
                                                <div className="text">
                                                    <h4>
                                                        Certified & Awards
                                                        <br /> winner
                                                    </h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-cleaning-liquid"></span>
                                                </div>
                                                <div className="text">
                                                    <h4>
                                                        Deep clean of the <br />
                                                        dashboard
                                                    </h4>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="about-two__point-box">
                                        <ul className="about-two__point-one">
                                            <li>
                                                <div className="icon">
                                                    <span className="fas fa-check"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Reserve Your Spot</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="fas fa-check"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Schedule a Clean</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="about-two__point-one two">
                                            <li>
                                                <div className="icon">
                                                    <span className="fas fa-check"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Reserve Your Spot</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="fas fa-check"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Schedule a Clean</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="about-two__btn-and-call-box">
                                        <div className="about-two__btn">
                                            <Link
                                                href="/about"
                                                className="thm-btn"
                                            >
                                                <span>About More</span>
                                                <i className="fal fa-angle-double-right"></i>
                                            </Link>
                                        </div>
                                        <div className="about-two__call-box">
                                            <div className="icon-box">
                                                <span className="icon-phone-call"></span>
                                            </div>
                                            <div className="content-box">
                                                <p>Call Any Time</p>
                                                <h4>
                                                    <a href="tel:9123466875">
                                                        (+91) 234 668 75
                                                    </a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                    </div>
                </div>
            </section>
            {/*About Two End*/}
        </>
    );
}
