import Image from "next/image";
import Link from "next/link";
import CtaFourImg from "@/assets/images/resources/cta-four-img.png";
import CtaFourShape1 from "@/assets/images/shapes/cta-four-shape-1.png";

export default function CtaFour() {
    return (
        <>
            {/*CTA Four Start */}
            <section className="cta-four">
                <div className="container">
                    <div className="cta-four__inner">
                        <div className="cta-four__img">
                            <Image src={CtaFourImg} alt="cta-four-img" />
                        </div>
                        <div className="cta-four__inner-content">
                            <div className="cta-four__shpae-1">
                                <Image src={CtaFourShape1} alt="cta-four-shape" />
                            </div>
                            <div className="cta-four__content">
                                <h3 className="cta-four__title">
                                    Start Your Custom Wrap
                                </h3>
                                <p className="cta-four__text">
                                    Get in touch with us for expert advice and a
                                    personalized wrapping solution.
                                </p>
                            </div>
                            <div className="cta-four__btn">
                                <Link href="/contact" className="thm-btn">
                                    <span>Get Quote</span>
                                    <i className="fal fa-angle-double-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*CTA Four End */}
        </>
    );
}
