import Image from "next/image";
import Link from "next/link";
import TextAnimation from "@/components/elements/TextAnimation";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import FeatureOneBottomImg11 from "@/assets/images/resources/feature-one-bottom-img-1-1.jpg";
import FeatureOneBottomImg12 from "@/assets/images/resources/feature-one-bottom-img-1-2.jpg";
import FeatureOneShapeBg from "@/assets/images/shapes/feature-one-shape-bg.png";

export default function FeatureOne() {
    return (
        <>
            {/*Feature One Start*/}
            <section className="feature-one">
                <div
                    className="feature-one__shape-bg"
                    style={{ backgroundImage: `url(${FeatureOneShapeBg.src})` }}
                ></div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box two">
                            <p className="section-title__tagline">Features</p>
                            <div className="section-title__tagline-shape"></div>
                        </div>
                        <h2 className="section-title__title">
                            <TextAnimation style="s1">
                                Your Satisfaction Our Mission
                            </TextAnimation>
                        </h2>
                    </div>
                    <div className="row">
                        {/*Feature One Single Start*/}
                        <div className="col-xl-4 col-lg-4">
                            <FadeInAdvanced
                                variant={"fadeInUp"}
                                delay={0}
                                duration={1500}
                            >
                                <div className="feature-one__single">
                                    <div className="feature-one__inner">
                                        <div className="feature-one__icon">
                                            <span className="icon-brush"></span>
                                        </div>
                                        <h3 className="feature-one__title">
                                            <Link href="/about">
                                                Extensive Cleaning
                                            </Link>
                                        </h3>
                                        <p className="feature-one__text">
                                            Car wash removes dirt, grime, and
                                            debris from your vehicle’s exterior,
                                            restoring its shine and protecting
                                            the paint.
                                        </p>
                                    </div>
                                    <div className="feature-one__read-more">
                                        <Link href="/about">
                                            Read More
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Feature One Single End*/}
                        {/*Feature One Single Start*/}
                        <div className="col-xl-4 col-lg-4">
                            <FadeInAdvanced
                                variant={"fadeInUp"}
                                delay={200}
                                duration={1500}
                            >
                                <div className="feature-one__single">
                                    <div className="feature-one__inner">
                                        <div className="feature-one__icon">
                                            <span className="icon-car-wash-1"></span>
                                        </div>
                                        <h3 className="feature-one__title">
                                            <Link href="/about">
                                                Contactless Washing
                                            </Link>
                                        </h3>
                                        <p className="feature-one__text">
                                            Car wash removes dirt, grime, and
                                            debris from your vehicle’s exterior,
                                            restoring its shine and protecting
                                            the paint.
                                        </p>
                                    </div>
                                    <div className="feature-one__read-more">
                                        <Link href="/about">
                                            Read More
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Feature One Single End*/}
                        {/*Feature One Single Start*/}
                        <div className="col-xl-4 col-lg-4">
                            <FadeInAdvanced
                                variant={"fadeInUp"}
                                delay={400}
                                duration={1500}
                            >
                                <div className="feature-one__single">
                                    <div className="feature-one__inner">
                                        <div className="feature-one__icon">
                                            <span className="icon-software"></span>
                                        </div>
                                        <h3 className="feature-one__title">
                                            <Link href="/about">
                                                Modern Equipment
                                            </Link>
                                        </h3>
                                        <p className="feature-one__text">
                                            Car wash removes dirt, grime, and
                                            debris from your vehicle’s exterior,
                                            restoring its shine and protecting
                                            the paint.
                                        </p>
                                    </div>
                                    <div className="feature-one__read-more">
                                        <Link href="/about">
                                            Read More
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Feature One Single End*/}
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="feature-one__bottom">
                                <div className="feature-one__bottom-inner">
                                    <div className="feature-one__bottom-shape-1"></div>
                                    <div className="feature-one__bottom-content-box">
                                        <ul className="feature-one__bottom-img-list">
                                            <li>
                                                <div className="feature-one__bottom-img">
                                                    <Image
                                                        src={
                                                            FeatureOneBottomImg11
                                                        }
                                                        alt="feature-one-img" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="feature-one__bottom-img">
                                                    <Image
                                                        src={
                                                            FeatureOneBottomImg12
                                                        }
                                                        alt="feature-one-img" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="feature-one__bottom-plus">
                                                    +
                                                </div>
                                            </li>
                                        </ul>
                                        <p className="feature-one__bottom-text">
                                            100% Satisfied Clients Sparkling
                                            Clean, Every Time!
                                        </p>
                                    </div>
                                    <div className="feature-one__bottom-shape-1 two"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Feature One End*/}
        </>
    );
}
