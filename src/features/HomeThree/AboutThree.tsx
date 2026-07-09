import Image from "next/image";
import Link from "next/link";
import CounterUp from "@/components/elements/CounterUp";
import TextAnimation from "@/components/elements/TextAnimation";
import AboutV3Img1 from "@/assets/images/resources/about-v3-img1.jpg";
import AboutV3Img2 from "@/assets/images/resources/about-v3-img2.jpg";

export default function AboutThree() {
    return (
        <>
            {/*Start About Three*/}
            <section className="about-three" id="about">
                <div className="container">
                    <div className="row">
                        {/*Start About Three Left*/}
                        <div className="col-xl-4 col-lg-5">
                            <div className="about-three__left">
                                <div className="about-three__left-img">
                                    <Image src={AboutV3Img1} alt="Professional vehicle wrapping service in progress" />
                                </div>
                            </div>
                        </div>
                        {/*End About Three Left*/}
                        {/* Start About Three Middle */}
                        <div className="col-xl-5 col-lg-7">
                            <div className="about-three__middle">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <p className="section-title__tagline">
                                            Our company
                                        </p>
                                        <div className="section-title__tagline-shape"></div>
                                    </div>
                                    <h2 className="section-title__title">
                                        <TextAnimation style="s2">
                                            Local Professional Vehicle Wrapping
                                            Solutions
                                        </TextAnimation>
                                    </h2>
                                </div>
                                <div className="about-three__middle-text">
                                    <p>
                                        Car wrapping is a stylish, modern way to
                                        transform your vehicle without the
                                        commitment of paint. Made from high
                                        quality vinyl, our wraps deliver
                                        eye-catching design.
                                    </p>
                                </div>
                                <div className="about-three__middle-list">
                                    <ul className="clearfix">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            <p>Enhances vehicle appearance</p>
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            <p>
                                                Cost-effective alternative to
                                                painting
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="about-three__middle-btn">
                                    <Link href="/about" className="thm-btn">
                                        <span>About More</span>
                                        <i className="fal fa-angle-double-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* End About Three Middle */}
                        {/* Start About Three Right */}
                        <div className="col-xl-3">
                            <div className="about-three__right">
                                <div className="about-three__right-img">
                                    <Image src={AboutV3Img2} alt="High-quality vinyl car wrap showcasing custom design application" />
                                </div>
                                <div className="about-three__right-counter">
                                    <ul>
                                        <li>
                                            <div className="about-three__right-counter-icon">
                                                <i className="icon-suv-car"></i>
                                            </div>
                                            <div className="about-three__right-counter-text">
                                                <div className="about-three__right-count">
                                                    <h3>
                                                        <CounterUp ending={3} />
                                                    </h3>
                                                    <span className="k">
                                                        k+
                                                    </span>
                                                </div>
                                                <div className="about-three__right-count-title">
                                                    <h3>Auto Styling Wrap</h3>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="about-three__right-counter-icon">
                                                <i className="icon-new-car"></i>
                                            </div>
                                            <div className="about-three__right-counter-text">
                                                <div className="about-three__right-count">
                                                    <h3>
                                                        <CounterUp
                                                            ending={125}
                                                        />
                                                    </h3>
                                                    <span className="k">+</span>
                                                </div>
                                                <div className="about-three__right-count-title">
                                                    <h3>Commercial Projects</h3>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* End About Three Right */}
                    </div>
                </div>
            </section>
            {/*End About Three*/}
        </>
    );
}
