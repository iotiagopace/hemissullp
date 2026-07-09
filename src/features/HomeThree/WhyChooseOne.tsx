import Image from "next/image";
import Link from "next/link";
import TextAnimation from "@/components/elements/TextAnimation";
import WhyChooseOneShape1 from "@/assets/images/shapes/why-choose-one-shape-1.png";
import WhyChooseOneImg1 from "@/assets/images/resources/why-choose-one-img-1.jpg";
import WhyChooseOneBg from "@/assets/images/backgrounds/why-choose-one-bg.jpg";
import YoutubeFrem from "@/components/elements/YoutubeFrem";

export default function WhyChooseOne() {
    return (
        <>
            {/* Why Choose One Start */}
            <section className="why-choose-one">
                <div
                    className="why-choose-one__bg"
                    style={{ backgroundImage: `url(${WhyChooseOneBg.src})` }}
                ></div>
                <div className="why-choose-one__shape-1">
                    <Image
                        src={WhyChooseOneShape1}
                        alt="why-choose-one-shape"
                        className="float-bob-x" />
                </div>
                <div className="container">
                    <div className="why-choose-one__inner">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="why-choose-one__left">
                                    <div className="section-title text-left sec-title-animation animation-style2">
                                        <div className="section-title__tagline-box">
                                            <p className="section-title__tagline">
                                                why choose us
                                            </p>
                                            <div className="section-title__tagline-shape"></div>
                                        </div>
                                        <h2 className="section-title__title">
                                            <TextAnimation style="s2">
                                                Elevating Your Car to Its Best
                                                Look
                                            </TextAnimation>
                                        </h2>
                                    </div>
                                    <p className="why-choose-one__text">
                                        Choosing us means choosing quality,
                                        reliability, and style. With years of
                                        experience and the latest wrapping
                                        technology, we ensure every vehicle
                                        leaves our shop looking brand new.
                                    </p>
                                    <div className="why-choose-one__points-box">
                                        <ul className="list-unstyled why-choose-one__points">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-clarification"></span>
                                                </div>
                                                <div className="content">
                                                    <h3>
                                                        <Link href="/team">
                                                            Expert Team
                                                        </Link>
                                                    </h3>
                                                    <p>
                                                        Neque porro quisquam
                                                        est, qui <br /> dolorem
                                                        ipsum
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-professional-success"></span>
                                                </div>
                                                <div className="content">
                                                    <h3>
                                                        <Link href="/project-details">
                                                            Successful Projects
                                                        </Link>
                                                    </h3>
                                                    <p>
                                                        Neque porro quisquam
                                                        est, qui <br /> dolorem
                                                        ipsum
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled why-choose-one__points why-choose-one__points--two">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-customer-service"></span>
                                                </div>
                                                <div className="content">
                                                    <h3>
                                                        <Link href="/services-v-1">
                                                            Trusted Service
                                                        </Link>
                                                    </h3>
                                                    <p>
                                                        Neque porro quisquam
                                                        est, qui <br /> dolorem
                                                        ipsum
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-new-car"></span>
                                                </div>
                                                <div className="content">
                                                    <h3>
                                                        <Link href="/about">
                                                            Low Cost
                                                        </Link>
                                                    </h3>
                                                    <p>
                                                        Neque porro quisquam
                                                        est, qui <br /> dolorem
                                                        ipsum
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="why-choose-one__btn-box">
                                        <Link href="/about" className="thm-btn">
                                            <span>Read More</span>
                                            <i className="fal fa-angle-double-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6"></div>
                        </div>
                        <div className="why-choose-one__img">
                            <Image
                                src={WhyChooseOneImg1}
                                alt="why-choose-one-img" />
                            <div className="why-choose-one__video-link">
                                <YoutubeFrem video="rbFoRH2deeY" className="video-popup">
                                    <div className="why-choose-one__video-icon">
                                        <span className="fa fa-play"></span>
                                        <i className="ripple"></i>
                                    </div>
                                </YoutubeFrem>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Choose One End */}
        </>
    );
}
