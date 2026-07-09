import Image from "next/image";
import Link from "next/link";
import TextAnimation from "@/components/elements/TextAnimation";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import ChooseV1Shape1 from "@/assets/images/shapes/choose-v1__shape1.png";
import ChooseV1Shape2 from "@/assets/images/shapes/choose-v1__shape2.png";
import ChooseV12 from "@/assets/images/resources/choose-v1-2.png";
import ChooseV11 from "@/assets/images/resources/choose-v1-1.jpg";
import ChooseV1Shape3 from "@/assets/images/shapes/choose-v1__shape3.png";

export default function ChooseOne() {
    return (
        <>
            {/* Choose One Start */}
            <section className="choose-one">
                <div className="choose-one__shape1">
                    <Image src={ChooseV1Shape1} alt="Decorative design element" />
                </div>
                <div className="choose-one__shape2">
                    <Image src={ChooseV1Shape2} alt="Decorative design element" />
                </div>
                <div
                    className="choose-one__shape3"
                    style={{ backgroundImage: `url(${ChooseV1Shape3.src})` }}
                ></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="choose-one__content">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <p className="section-title__tagline">
                                            Why Choose Us
                                        </p>
                                        <div className="section-title__tagline-shape"></div>
                                    </div>
                                    <h2 className="section-title__title">
                                        <TextAnimation style="s2">
                                            The Smarter Choice for Car Care
                                        </TextAnimation>
                                    </h2>
                                </div>
                                <div className="choose-one__content-text">
                                    <p>
                                        We’ve built our reputation on honesty,
                                        expertise, & consistent quality
                                        <br /> service. Every repair is handled
                                        with care.
                                    </p>
                                </div>
                                <div className="choose-one__content-middle">
                                    <div className="choose-one__content-middle-left">
                                        <div className="choose-one__content-middle-left-icon">
                                            <i className="icon-search"></i>
                                        </div>
                                        <div className="choose-one__content-middle-left-text">
                                            <h3>
                                                Innovative Car
                                                <br /> Solutions
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="choose-one__content-middle-right">
                                        <p>
                                            At Brake Experts Care, your safety
                                            <br />
                                            comes first Our skilled
                                        </p>
                                    </div>
                                </div>
                                <div className="choose-one__content-bottom">
                                    <div className="choose-one__content-btn">
                                        <Link href="/about" className="thm-btn">
                                            <span>Read More</span>
                                            <i className="fal fa-angle-double-right"></i>
                                        </Link>
                                    </div>
                                    <div className="choose-one__content-right">
                                        <div className="choose-one__content-right-img">
                                            <Image src={ChooseV11} alt="Robert Wilson, Electrical Technician at Brake Experts Care" />
                                        </div>
                                        <div className="choose-one__content-right-text">
                                            <p>Robert Wilson</p>
                                            <span>Electrical Technician</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="choose-one__right">
                                <div className="choose-one__right-img">
                                    <FadeInAdvanced
                                        variant={"fadeInRight"}
                                        delay={200}
                                        duration={1500}
                                    >
                                        <Image src={ChooseV12} alt="Man" />
                                    </FadeInAdvanced>
                                </div>
                                <div className="choose-one__right-time">
                                    <div className="choose-one__right-time-inner">
                                        <div className="choose-one__right-time-icon">
                                            <i className="fas fa-user-headset"></i>
                                        </div>
                                        <div className="choose-one__right-time-text">
                                            <h3>24/7 Hour Support</h3>
                                            <p>Offering premium service</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Choose One End */}
        </>
    );
}
