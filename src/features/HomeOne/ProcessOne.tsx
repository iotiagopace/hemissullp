import TextAnimation from "@/components/elements/TextAnimation";

export default function ProcessOne() {
    return (
        <>
            {/* Process One Start */}
            <section className="process-one">
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box two">
                            <p className="section-title__tagline">
                                Our Work Process
                            </p>
                            <div className="section-title__tagline-shape"></div>
                        </div>
                        <h2 className="section-title__title">
                            <TextAnimation style="s1">
                                Step-by-Step Car Repair Process
                            </TextAnimation>
                        </h2>
                    </div>
                    <div className="row">
                        {/* Process One Single Start */}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="process-one__single">
                                <div className="process-one__single-bdr1"></div>
                                <div className="process-one__single-content">
                                    <div className="process-one__single-step">
                                        <p>Step - 01</p>
                                    </div>
                                    <div className="process-one__single-text">
                                        <h3>Quick & Trusted Repairs</h3>
                                        <p>
                                            We deliver quick, dependable repairs
                                            <br /> to keep you moving safely.
                                        </p>
                                    </div>
                                    <div className="process-one__single-icon">
                                        <i className="icon-vetted"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Process One Single End */}
                        {/* Process One Single Start */}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="process-one__single process-one__single--instyle2">
                                <div className="process-one__single-bdr2"></div>
                                <div className="process-one__single-content">
                                    <div className="process-one__single-icon">
                                        <i className="icon-car"></i>
                                    </div>
                                    <div className="process-one__single-step">
                                        <p>Step - 02</p>
                                    </div>
                                    <div className="process-one__single-text">
                                        <h3>Performance Perfected</h3>
                                        <p>
                                            We deliver quick, dependable repairs
                                            <br /> to keep you moving safely.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Process One Single End */}
                        {/* Process One Single Start */}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="process-one__single">
                                <div className="process-one__single-bdr1"></div>
                                <div className="process-one__single-content">
                                    <div className="process-one__single-step">
                                        <p>Step - 03</p>
                                    </div>
                                    <div className="process-one__single-text">
                                        <h3>Premium Care Experience</h3>
                                        <p>
                                            We deliver quick, dependable repairs
                                            <br /> to keep you moving safely.
                                        </p>
                                    </div>
                                    <div className="process-one__single-icon">
                                        <i className="icon-maintenance"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Process One Single End */}
                        {/* Process One Single Start */}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="process-one__single process-one__single--instyle2">
                                <div className="process-one__single-content">
                                    <div className="process-one__single-icon">
                                        <i className="icon-software"></i>
                                    </div>
                                    <div className="process-one__single-step">
                                        <p>Step - 04</p>
                                    </div>
                                    <div className="process-one__single-text">
                                        <h3>Luxury Auto Care</h3>
                                        <p>
                                            We deliver quick, dependable repairs
                                            <br /> to keep you moving safely.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Process One Single End */}
                    </div>
                </div>
            </section>
            {/* Process One End */}
        </>
    );
}
