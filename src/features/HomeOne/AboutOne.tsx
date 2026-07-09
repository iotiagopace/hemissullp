import Image from "next/image";
import Link from "next/link";
import CounterUp from "@/components/elements/CounterUp";
import TextAnimation from "@/components/elements/TextAnimation";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import AboutV1Img1 from "@/assets/images/resources/about-v1__img1.jpg";
import AboutV1Img2 from "@/assets/images/resources/about-v1__img2.jpg";
import AboutV1PhnImg from "@/assets/images/resources/about-v1__phn-img.jpg";

export default function AboutOne() {
    return (
        <>
            {/* About One Start */}
            <section className="about-one" id="about">
                <div className="container">
                    <div className="row">
                        {/* About One Img Start */}
                        <div className="col-xl-6">
                            <FadeInAdvanced
                                variant={"fadeInRight"}
                                delay={200}
                                duration={1500}
                            >
                                <div className="about-one__img">
                                    <div className="about-one__img-title">
                                        <h2>
                                            About <br /> Company
                                        </h2>
                                    </div>
                                    <div className="about-one__img-img1">
                                        <Image src={AboutV1Img1} alt="Professional auto repair workshop with modern equipment" />
                                    </div>
                                    <div className="about-one__img-img2">
                                        <Image src={AboutV1Img2} alt="Skilled technician performing comprehensive vehicle maintenance" />
                                    </div>
                                    <div className="about-one__img-exprience">
                                        <div className="about-one__img-exprience-count">
                                            <h3>
                                                <CounterUp ending={50} />
                                            </h3>
                                            <span className="plus">+</span>
                                        </div>
                                        <div className="about-one__img-exprience-text">
                                            <h3>Years of exprience</h3>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/* About One Img End */}
                        {/* About One Content Start */}
                        <div className="col-xl-6">
                            <FadeInAdvanced
                                variant={"fadeInLeft"}
                                delay={200}
                                duration={1500}
                            >
                                <div className="about-one__content">
                                    <div className="section-title text-left sec-title-animation animation-style2">
                                        <div className="section-title__tagline-box">
                                            <p className="section-title__tagline">
                                                About Our Company
                                            </p>
                                            <div className="section-title__tagline-shape"></div>
                                        </div>
                                        <h2 className="section-title__title">
                                            <TextAnimation style="s2">
                                                Car Deserves the Best &<br />
                                                Professional Car Repair
                                            </TextAnimation>
                                        </h2>
                                    </div>
                                    <div className="about-one__content-text">
                                        <p>
                                            With years of experience in auto
                                            repair, we know what it takes to get
                                            your car back in top shape. Our team
                                            blends technical expertise with
                                            attention to detail, ensuring
                                            lasting results and customer
                                            satisfaction
                                        </p>
                                    </div>
                                    <div className="about-one__content-top-list">
                                        <ul className="row">
                                            <li className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="about-one__content-top-item">
                                                    <div className="about-one__content-top-item-icon">
                                                        <i className="icon-brake"></i>
                                                    </div>
                                                    <div className="about-one__content-top-item-text">
                                                        <h3>
                                                            Brake Experts Care
                                                        </h3>
                                                        <p>
                                                            At Brake Experts
                                                            Care, your safety
                                                            comes first skilled.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="about-one__content-top-item">
                                                    <div className="about-one__content-top-item-icon">
                                                        <i className="icon-car-battery"></i>
                                                    </div>
                                                    <div className="about-one__content-top-item-text">
                                                        <h3>
                                                            Full Engine
                                                            Evaluation
                                                        </h3>
                                                        <p>
                                                            Our Full Engine
                                                            Evaluation delivers
                                                            a complete check.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="about-one__content-bdr"></div>
                                    <div className="about-one__content-bottom-list">
                                        <ul className="row">
                                            <li className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="about-one__content-bottom-item">
                                                    <i className="fas fa-check"></i>
                                                    <p>
                                                        Top Quality Care for
                                                        Every Drive
                                                    </p>
                                                </div>
                                                <div className="about-one__content-bottom-item two">
                                                    <i className="fas fa-check"></i>
                                                    <p>
                                                        Superior Care, Safer
                                                        Journeys
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="about-one__content-bottom-item">
                                                    <i className="fas fa-check"></i>
                                                    <p>
                                                        Expert care for every
                                                        vehicle
                                                    </p>
                                                </div>
                                                <div className="about-one__content-bottom-item two">
                                                    <i className="fas fa-check"></i>
                                                    <p>
                                                        Your car, our priority
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="about-one__content-bottom">
                                        <div className="about-one__content-bottom-btn">
                                            <Link
                                                href="/contact"
                                                className="thm-btn"
                                            >
                                                <span>Contact Us</span>
                                                <i className="fal fa-angle-double-right"></i>
                                            </Link>
                                        </div>
                                        <div className="about-one__content-bottom-phn">
                                            <div className="about-one__content-bottom-phn-img">
                                                <div className="about-one__content-bottom-phn-img-inner">
                                                    <Image
                                                        src={AboutV1PhnImg}
                                                        alt="Image" />
                                                </div>
                                                <div className="about-one__content-bottom-phn-img-icon">
                                                    <i className="icon-phone-call"></i>
                                                </div>
                                            </div>
                                            <div className="about-one__content-bottom-phn-text">
                                                <p>Call Any Time</p>
                                                <h3>
                                                    <a href="tel:9123466875">
                                                        (+91) 234 668 75
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/* About One Content End */}
                    </div>
                </div>
            </section>
            {/* About One End */}
        </>
    );
}
