import Link from "next/link";
import TextAnimation from "@/components/elements/TextAnimation";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";

export default function ServicesThree() {
    return (
        <>
            {/*Services Three Start*/}
            <section className="services-three" id="services">
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box two">
                            <p className="section-title__tagline">
                                Our services
                            </p>
                            <div className="section-title__tagline-shape"></div>
                        </div>
                        <h2 className="section-title__title">
                            <TextAnimation style="s1">
                                Car Wraps & Professional Services
                            </TextAnimation>
                        </h2>
                    </div>
                    <div className="row">
                        {/*Services Three Single Start*/}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={"fadeInLeft"} delay={100}>
                                <div className="services-three__single">
                                    <div className="services-three__icon">
                                        <i className="icon-suv-car"></i>
                                    </div>
                                    <div className="services-three__content">
                                        <h3 className="services-three__title">
                                            <Link href="/services-v-3">
                                                Full Vehicle Wraps
                                            </Link>
                                        </h3>
                                        <p className="services-three__text">
                                            We use high-quality vinyl to protect
                                            your car’s paint while creating
                                            stunning designs.
                                        </p>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Services Three Single End*/}
                        {/*Services Three Single Start*/}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={"fadeInLeft"} delay={200}>
                                <div className="services-three__single">
                                    <div className="services-three__icon">
                                        <i className="icon-bycicle"></i>
                                    </div>
                                    <div className="services-three__content">
                                        <h3 className="services-three__title">
                                            <Link href="/services-v-3">
                                                Motorcycle & Bike Wraps
                                            </Link>
                                        </h3>
                                        <p className="services-three__text">
                                            We use high-quality vinyl to protect
                                            your car’s paint while creating
                                            stunning designs.
                                        </p>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Services Three Single End*/}
                        {/*Services Three Single Start*/}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={"fadeInLeft"} delay={300}>
                                <div className="services-three__single">
                                    <div className="services-three__icon">
                                        <i className="icon-boat"></i>
                                    </div>
                                    <div className="services-three__content">
                                        <h3 className="services-three__title">
                                            <Link href="/services-v-3">
                                                Boat & Watercraft Wraps
                                            </Link>
                                        </h3>
                                        <p className="services-three__text">
                                            We use high-quality vinyl to protect
                                            your car’s paint while creating
                                            stunning designs.
                                        </p>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Services Three Single End*/}
                        {/*Services Three Single Start*/}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={"fadeInRight"} delay={100}>
                                <div className="services-three__single">
                                    <div className="services-three__icon">
                                        <i className="icon-new-car"></i>
                                    </div>
                                    <div className="services-three__content">
                                        <h3 className="services-three__title">
                                            <Link href="/services-v-3">
                                                Commercial Vehicle Wraps
                                            </Link>
                                        </h3>
                                        <p className="services-three__text">
                                            We use high-quality vinyl to protect
                                            your car’s paint while creating
                                            stunning designs.
                                        </p>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Services Three Single End*/}
                        {/*Services Three Single Start*/}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={"fadeInRight"} delay={200}>
                                <div className="services-three__single">
                                    <div className="services-three__icon">
                                        <i className="icon-customer-service"></i>
                                    </div>
                                    <div className="services-three__content">
                                        <h3 className="services-three__title">
                                            <Link href="/services-v-3">
                                                Graphics & Tint Wraps
                                            </Link>
                                        </h3>
                                        <p className="services-three__text">
                                            We use high-quality vinyl to protect
                                            your car’s paint while creating
                                            stunning designs.
                                        </p>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Services Three Single End*/}
                        {/*Services Three Single Start*/}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={"fadeInRight"} delay={300}>
                                <div className="services-three__single">
                                    <div className="services-three__icon">
                                        <i className="icon-roll-paint-brush"></i>
                                    </div>
                                    <div className="services-three__content">
                                        <h3 className="services-three__title">
                                            <Link href="/services-v-3">
                                                Paint Protection Film
                                            </Link>
                                        </h3>
                                        <p className="services-three__text">
                                            We use high-quality vinyl to protect
                                            your car’s paint while creating
                                            stunning designs.
                                        </p>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Services Three Single End*/}
                    </div>
                </div>
            </section>
            {/*Services Three End*/}
        </>
    );
}
