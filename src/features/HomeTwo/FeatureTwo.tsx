import Link from "next/link";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import FeatureTwoShapeBg from "@/assets/images/shapes/feature-two-shape-bg.png";
import FeatureTwo11 from "@/assets/images/resources/feature-two-1-1.jpg";
import FeatureTwo12 from "@/assets/images/resources/feature-two-1-2.jpg";

export default function FeatureTwo() {
    return (
        <>
            {/*Feature Two Start*/}
            <section className="feature-two">
                <div
                    className="feature-two__shpae-bg"
                    style={{ backgroundImage: `url(${FeatureTwoShapeBg.src})` }}
                ></div>
                <div className="container">
                    <div className="row">
                        {/*Feature Two Single Start*/}
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={"fadeInLeft"} delay={100}>
                                <div className="feature-two__single">
                                    <div
                                        className="feature-two__img-bg"
                                        style={{
                                            backgroundImage: `url(${FeatureTwo11.src})`,
                                        }}
                                    ></div>
                                    <div className="feature-two__content">
                                        <h4>Wash Your Car</h4>
                                        <p>
                                            Keep your car shiny & clean anytime.
                                        </p>
                                        <Link href="/contact">
                                            Book Now
                                            <i className="far fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Feature Two Single End*/}
                        {/*Feature Two Single Start*/}
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={"fadeInRight"} delay={100}>
                                <div className="feature-two__single">
                                    <div
                                        className="feature-two__img-bg"
                                        style={{
                                            backgroundImage: `url(${FeatureTwo12.src})`,
                                        }}
                                    ></div>
                                    <div className="feature-two__content">
                                        <h4>Join Our Wash Plan</h4>
                                        <p>
                                            Save more with monthly cleaning
                                            packages.
                                        </p>
                                        <Link href="/team-details">
                                            Join Now
                                            <i className="far fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Feature Two Single End*/}
                    </div>
                </div>
            </section>
            {/*Feature Two End*/}
        </>
    );
}
