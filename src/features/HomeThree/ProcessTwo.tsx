import TextAnimation from "@/components/elements/TextAnimation";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";

export default function ProcessTwo() {
    return (
        <>
            {/* Process Two Start */}
            <section className="process-two">
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box two">
                            <p className="section-title__tagline">
                                see how works
                            </p>
                            <div className="section-title__tagline-shape"></div>
                        </div>
                        <h2 className="section-title__title">
                            <TextAnimation style="s1">
                                Step-by-Step Car Wrapping Process
                            </TextAnimation>
                        </h2>
                    </div>
                    <div className="row">
                        {/* Process Two Single Start */}
                        <div className="col-xl-4 col-lg-4">
                            <FadeInAdvanced variant={"fadeInLeft"} delay={100}>
                                <div className="process-two__single">
                                    <div className="process-two__single-inner">
                                        <div className="process-two__icon">
                                            <span className="icon-ruler"></span>
                                        </div>
                                        <h3 className="process-two__title">
                                            Measurement & Cutting
                                        </h3>
                                        <p className="process-two__text">
                                            Precisely measure and cut the vinyl
                                            wrap according to your car’s
                                            dimensions.
                                        </p>
                                        <div className="process-two__count-box">
                                            <p>Step</p>
                                            <div className="process-two__count"></div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/* Process Two Single End */}
                        {/* Process Two Single Start */}
                        <div className="col-xl-4 col-lg-4">
                            <FadeInAdvanced variant={"fadeInUp"} delay={200}>
                                <div className="process-two__single">
                                    <div className="process-two__single-inner">
                                        <div className="process-two__icon">
                                            <span className="icon-sandblasting-machine"></span>
                                        </div>
                                        <h3 className="process-two__title">
                                            Surface Preparation
                                        </h3>
                                        <p className="process-two__text">
                                            Clean and remove dirt, wax, or old
                                            adhesive to ensure a smooth wrap
                                            application.
                                        </p>
                                        <div className="process-two__count-box">
                                            <p>Step</p>
                                            <div className="process-two__count"></div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/* Process Two Single End */}
                        {/* Process Two Single Start */}
                        <div className="col-xl-4 col-lg-4">
                            <FadeInAdvanced variant={"fadeInRight"} delay={300}>
                                <div className="process-two__single">
                                    <div className="process-two__single-inner">
                                        <div className="process-two__icon">
                                            <span className="icon-clarification"></span>
                                        </div>
                                        <h3 className="process-two__title">
                                            Consultation & Design
                                        </h3>
                                        <p className="process-two__text">
                                            Discuss your ideas, select colors,
                                            and create a custom design that fits
                                            your vehicle.
                                        </p>
                                        <div className="process-two__count-box">
                                            <p>Step</p>
                                            <div className="process-two__count"></div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/* Process Two Single End */}
                    </div>
                </div>
            </section>
            {/* Process Two End */}
        </>
    );
}
