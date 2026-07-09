import Image from "next/image";
import Link from "next/link";
import TextAnimation from "@/components/elements/TextAnimation";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import TeamV3Shape1 from "@/assets/images/shapes/team-v3-shape1.png";
import TeamV3Shape2 from "@/assets/images/shapes/team-v3-shape2.png";
import TeamV31 from "@/assets/images/team/team-v3-1.jpg";
import TeamV32 from "@/assets/images/team/team-v3-2.jpg";
import TeamV33 from "@/assets/images/team/team-v3-3.jpg";
import TeamV34 from "@/assets/images/team/team-v3-4.jpg";

export default function TeamThree() {
    return (
        <>
            {/*Team Three Start*/}
            <section className="team-three" id="team">
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box two">
                            <p className="section-title__tagline">
                                Our Team Support
                            </p>
                            <div className="section-title__tagline-shape"></div>
                        </div>
                        <h2 className="section-title__title">
                            <TextAnimation style="s1">
                                Professional Car Wrap Experts
                            </TextAnimation>
                        </h2>
                    </div>
                    <div className="team-three__shape1 float-bob-y">
                        <Image src={TeamV3Shape1} alt="image" />
                    </div>
                    <div className="team-three__shape2 float-bob-x">
                        <Image src={TeamV3Shape2} alt="image" />
                    </div>
                    <div className="row">
                        {/*Team Three Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={"fadeInLeft"} delay={100}>
                                <div className="team-three__single">
                                    <div className="team-three__img-box">
                                        <div className="team-three__img">
                                            <Image src={TeamV31} alt="image" />
                                        </div>
                                        <div className="team-three__share-and-social">
                                            <div className="team-three__share">
                                                <span className="fas fa-share-alt"></span>
                                            </div>
                                            <div className="team-three__social">
                                                <Link href="#">
                                                    <span className="fab fa-facebook"></span>
                                                </Link>
                                                <Link href="#">
                                                    <span className="fab fa-twitter"></span>
                                                </Link>
                                                <Link href="#">
                                                    <span className="fab fa-pinterest-p"></span>
                                                </Link>
                                                <Link href="#">
                                                    <span className="fab fa-instagram"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-three__content">
                                        <div className="team-three__title-box">
                                            <h2 className="team-three__title">
                                                <Link href="/team-details">
                                                    Amanda Lynn
                                                </Link>
                                            </h2>
                                            <p className="team-three__sub-title">
                                                Wrap Coordinator
                                            </p>
                                        </div>
                                        <div className="team-three__arrow">
                                            <Link href="/team-details">
                                                <span className="fal fa-angle-double-right"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Team Three Single End*/}

                        {/*Team Three Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={"fadeInLeft"} delay={200}>
                                <div className="team-three__single">
                                    <div className="team-three__img-box">
                                        <div className="team-three__img">
                                            <Image src={TeamV32} alt="image" />
                                        </div>
                                        <div className="team-three__share-and-social">
                                            <div className="team-three__share">
                                                <span className="fas fa-share-alt"></span>
                                            </div>
                                            <div className="team-three__social">
                                                <Link href="#">
                                                    <span className="fab fa-facebook"></span>
                                                </Link>
                                                <Link href="#">
                                                    <span className="fab fa-twitter"></span>
                                                </Link>
                                                <Link href="#">
                                                    <span className="fab fa-pinterest-p"></span>
                                                </Link>
                                                <Link href="#">
                                                    <span className="fab fa-instagram"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-three__content">
                                        <div className="team-three__title-box">
                                            <h2 className="team-three__title">
                                                <Link href="/team-details">
                                                    Jennifer Lynn
                                                </Link>
                                            </h2>
                                            <p className="team-three__sub-title">
                                                Lead Installer
                                            </p>
                                        </div>
                                        <div className="team-three__arrow">
                                            <Link href="/team-details">
                                                <span className="fal fa-angle-double-right"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Team Three Single End*/}

                        {/*Team Three Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={"fadeInRight"} delay={100}>
                                <div className="team-three__single">
                                    <div className="team-three__img-box">
                                        <div className="team-three__img">
                                            <Image src={TeamV33} alt="image" />
                                        </div>
                                        <div className="team-three__share-and-social">
                                            <div className="team-three__share">
                                                <span className="fas fa-share-alt"></span>
                                            </div>
                                            <div className="team-three__social">
                                                <Link href="#">
                                                    <span className="fab fa-facebook"></span>
                                                </Link>
                                                <Link href="#">
                                                    <span className="fab fa-twitter"></span>
                                                </Link>
                                                <Link href="#">
                                                    <span className="fab fa-pinterest-p"></span>
                                                </Link>
                                                <Link href="#">
                                                    <span className="fab fa-instagram"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-three__content">
                                        <div className="team-three__title-box">
                                            <h2 className="team-three__title">
                                                <Link href="/team-details">
                                                    Rose Thompson
                                                </Link>
                                            </h2>
                                            <p className="team-three__sub-title">
                                                Head Designer
                                            </p>
                                        </div>
                                        <div className="team-three__arrow">
                                            <Link href="/team-details">
                                                <span className="fal fa-angle-double-right"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Team Three Single End*/}

                        {/*Team Three Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={"fadeInRight"} delay={200}>
                                <div className="team-three__single">
                                    <div className="team-three__img-box">
                                        <div className="team-three__img">
                                            <Image src={TeamV34} alt="image" />
                                        </div>
                                        <div className="team-three__share-and-social">
                                            <div className="team-three__share">
                                                <span className="fas fa-share-alt"></span>
                                            </div>
                                            <div className="team-three__social">
                                                <Link href="#">
                                                    <span className="fab fa-facebook"></span>
                                                </Link>
                                                <Link href="#">
                                                    <span className="fab fa-twitter"></span>
                                                </Link>
                                                <Link href="#">
                                                    <span className="fab fa-pinterest-p"></span>
                                                </Link>
                                                <Link href="#">
                                                    <span className="fab fa-instagram"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-three__content">
                                        <div className="team-three__title-box">
                                            <h2 className="team-three__title">
                                                <Link href="/team-details">
                                                    Nicole Anderson
                                                </Link>
                                            </h2>
                                            <p className="team-three__sub-title">
                                                Pre-Wash Sprayer
                                            </p>
                                        </div>
                                        <div className="team-three__arrow">
                                            <Link href="/team-details">
                                                <span className="fal fa-angle-double-right"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Team Three Single End*/}
                    </div>
                </div>
            </section>
            {/*Team Three End*/}
        </>
    );
}
