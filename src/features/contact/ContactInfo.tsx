import FadeInAdvanced from "@/components/elements/FadeInAdvanced";

export default function ContactInfo() {
    return (
        <>
            {/*Contact Info Start*/}
            <section className="contact-info">
                <div className="container">
                    <div className="row">
                        {/*Contact Two Single Start*/}
                        <div className="col-xl-3 col-lg-6">
                            <FadeInAdvanced variant={"fadeInLeft"} delay={100}>
                                <div className="contact-info__single">
                                    <div className="contact-info__icon">
                                        <span className="icon-call"></span>
                                    </div>
                                    <p>Contact Us</p>
                                    <h5>
                                        <a href="tel:558270575405">
                                            +55 827 057 5405
                                        </a>
                                    </h5>
                                    <h5>
                                        <a href="tel:558270575405">
                                            +55 827 057 5405
                                        </a>
                                    </h5>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Contact Two Single End*/}
                        {/*Contact Two Single Start*/}
                        <div className="col-xl-3 col-lg-6">
                            <FadeInAdvanced variant={"fadeInUp"} delay={200}>
                                <div className="contact-info__single">
                                    <div className="contact-info__icon">
                                        <span className="icon-envelope"></span>
                                    </div>
                                    <p>Mail Us</p>
                                    <h5>
                                        <a href="mailto:example@gamil.com">
                                            example@gamil.com
                                        </a>
                                    </h5>
                                    <h5>
                                        <a href="mailto:example@gamil.com">
                                            example@gamil.com
                                        </a>
                                    </h5>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Contact Two Single End*/}
                        {/*Contact Two Single Start*/}
                        <div className="col-xl-3 col-lg-6">
                            <FadeInAdvanced variant={"fadeInRight"} delay={300}>
                                <div className="contact-info__single">
                                    <div className="contact-info__icon">
                                        <span className="fas fa-clock"></span>
                                    </div>
                                    <p>Working Hours</p>
                                    <h5>
                                        Wednesday - Sunday
                                        <br /> 7:00 AM - 5:00 PM
                                    </h5>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Contact Two Single End*/}
                        {/*Contact Two Single Start*/}
                        <div className="col-xl-3 col-lg-6">
                            <FadeInAdvanced variant={"fadeInRight"} delay={400}>
                                <div className="contact-info__single">
                                    <div className="contact-info__icon">
                                        <span className="icon-location"></span>
                                    </div>
                                    <p>Our Office Location</p>
                                    <h5>12 Green Road 05 New Yark</h5>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Contact Two Single End*/}
                    </div>
                </div>
            </section>
            {/*Contact Info End*/}
        </>
    );
}
