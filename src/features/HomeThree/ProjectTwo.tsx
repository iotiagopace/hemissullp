import Image from "next/image";
import Link from "next/link";
import TextAnimation from "@/components/elements/TextAnimation";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import ProjectTwo11 from "@/assets/images/project/project-two-1-1.jpg";
import ProjectTwo13 from "@/assets/images/project/project-two-1-3.jpg";
import ProjectTwo15 from "@/assets/images/project/project-two-1-5.jpg";
import ProjectTwoShpaeBg from "@/assets/images/shapes/project-two-shpae-bg.png";

export default function ProjectTwo() {
    return (
        <>
            {/*Project Two Start */}
            <section className="project-two" id="project">
                <div
                    className="project-two__shape-bg"
                    style={{ backgroundImage: `url(${ProjectTwoShpaeBg.src})` }}
                ></div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box two">
                            <p className="section-title__tagline">
                                Project Gallery
                            </p>
                            <div className="section-title__tagline-shape"></div>
                        </div>
                        <h2 className="section-title__title">
                            <TextAnimation style="s1">
                                Crafted to Perfection in <br /> Every Wrap
                                Project
                            </TextAnimation>
                        </h2>
                    </div>
                    <div className="row masonary-layout">
                        {/*project Two Single Start */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={"fadeInLeft"} delay={100}>
                                <div className="project-two__single">
                                    <div className="project-two__img-box">
                                        <div className="project-two__img">
                                            <Image
                                                src={ProjectTwo11}
                                                alt="project-two-img" />
                                            <div className="project-two__content-box">
                                                <div className="project-two__title-box">
                                                    <h3>
                                                        <Link href="/project-details">
                                                            Brake Check & Repair
                                                        </Link>
                                                    </h3>
                                                    <p>Prime Auto Service</p>
                                                </div>
                                                <div className="project-two__icon-box">
                                                    <a
                                                        href="assets/images/project/project-two-1-1.jpg"
                                                        className="img-popup"
                                                    >
                                                        <span className="far fa-long-arrow-right"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*project Two Single End */}
                        {/*project Two Single Start */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={"fadeInUp"} delay={200}>
                                <div className="project-two__single">
                                    <div className="project-two__img-box">
                                        <div className="project-two__img">
                                            <Image
                                                src={ProjectTwo13}
                                                alt="project-two-img" />
                                            <div className="project-two__content-box">
                                                <div className="project-two__title-box">
                                                    <h3>
                                                        <Link href="/project-details">
                                                            Brake Check & Repair
                                                        </Link>
                                                    </h3>
                                                    <p>Prime Auto Service</p>
                                                </div>
                                                <div className="project-two__icon-box">
                                                    <a
                                                        href="assets/images/project/project-two-1-2.jpg"
                                                        className="img-popup"
                                                    >
                                                        <span className="far fa-long-arrow-right"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*project Two Single End */}
                        {/*project Two Single Start */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={"fadeInRight"} delay={300}>
                                <div className="project-two__single">
                                    <div className="project-two__img-box">
                                        <div className="project-two__img">
                                            <Image
                                                src={ProjectTwo15}
                                                alt="project-two-img" />
                                            <div className="project-two__content-box">
                                                <div className="project-two__title-box">
                                                    <h3>
                                                        <Link href="/project-details">
                                                            Brake Check & Repair
                                                        </Link>
                                                    </h3>
                                                    <p>Prime Auto Service</p>
                                                </div>
                                                <div className="project-two__icon-box">
                                                    <a
                                                        href="assets/images/project/project-two-1-3.jpg"
                                                        className="img-popup"
                                                    >
                                                        <span className="far fa-long-arrow-right"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*project Two Single End */}
                        {/*project Two Single Start */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={"fadeInLeft"} delay={400}>
                                <div className="project-two__single">
                                    <div className="project-two__img-box">
                                        <div className="project-two__img">
                                            <Image
                                                src={ProjectTwo15}
                                                alt="project-two-img" />
                                            <div className="project-two__content-box">
                                                <div className="project-two__title-box">
                                                    <h3>
                                                        <Link href="/project-details">
                                                            Brake Check & Repair
                                                        </Link>
                                                    </h3>
                                                    <p>Prime Auto Service</p>
                                                </div>
                                                <div className="project-two__icon-box">
                                                    <a
                                                        href="assets/images/project/project-two-1-5.jpg"
                                                        className="img-popup"
                                                    >
                                                        <span className="far fa-long-arrow-right"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*project Two Single End */}
                        {/*project Two Single Start */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={"fadeInUp"} delay={500}>
                                <div className="project-two__single">
                                    <div className="project-two__img-box">
                                        <div className="project-two__img">
                                            <Image
                                                src={ProjectTwo11}
                                                alt="project-two-img" />
                                            <div className="project-two__content-box">
                                                <div className="project-two__title-box">
                                                    <h3>
                                                        <Link href="/project-details">
                                                            Brake Check & Repair
                                                        </Link>
                                                    </h3>
                                                    <p>Prime Auto Service</p>
                                                </div>
                                                <div className="project-two__icon-box">
                                                    <a
                                                        href="assets/images/project/project-two-1-4.jpg"
                                                        className="img-popup"
                                                    >
                                                        <span className="far fa-long-arrow-right"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*project Two Single End */}
                        {/*project Two Single Start */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={"fadeInRight"} delay={600}>
                                <div className="project-two__single">
                                    <div className="project-two__img-box">
                                        <div className="project-two__img">
                                            <Image
                                                src={ProjectTwo13}
                                                alt="project-two-img" />
                                            <div className="project-two__content-box">
                                                <div className="project-two__title-box">
                                                    <h3>
                                                        <Link href="/project-details">
                                                            Brake Check & Repair
                                                        </Link>
                                                    </h3>
                                                    <p>Prime Auto Service</p>
                                                </div>
                                                <div className="project-two__icon-box">
                                                    <a
                                                        href="assets/images/project/project-two-1-6.jpg"
                                                        className="img-popup"
                                                    >
                                                        <span className="far fa-long-arrow-right"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*project Two Single End */}
                    </div>
                </div>
            </section>
            {/*Project Two End */}
        </>
    );
}
