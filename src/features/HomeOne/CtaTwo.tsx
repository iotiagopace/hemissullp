import Link from "next/link";
import CtaTwoBg from "@/assets/images/backgrounds/cta-two-bg.jpg";
import JarallaxSection from "@/components/elements/JarallaxSection";

export default function CtaTwo() {
    return (
        <>
            {/* CTA Two Start */}
            <section className="cta-two">
                <JarallaxSection
                    bgOnly
                    className="cta-two__bg"
                    imgSrc={CtaTwoBg.src}
                    speed={0.2}
                    imgPosition="50% 0%"
                />
                <div className="container">
                    <div className="cta-two__inner">
                        <div className="cta-two__title-box">
                            <p className="cta-two__sub-title">
                                GET OUR SERVICE
                            </p>
                            <h2 className="cta-two__title">
                                Trusted Car Repair Experts <br />
                                Get in Touch Today!
                            </h2>
                        </div>
                        <div className="cta-two__btn">
                            <Link href="/contact" className="thm-btn">
                                <span>Get Details</span>
                                <i className="fal fa-angle-double-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Two End */}
        </>
    );
}
