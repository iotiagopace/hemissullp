import Image from "next/image";
import Link from "next/link";
import CtaThreeImg1 from "@/assets/images/resources/cta-three-img-1.png";
import CtaThreeShapeBg from "@/assets/images/shapes/cta-three-shape-bg.png";

export default function CtaThree() {
    return (
        <>
            {/*CTA Three Start*/}
            <section className="cta-three">
                <div className="cta-three__wrap">
                    <div
                        className="cta-three__shape-bg"
                        style={{ backgroundImage: `url(${CtaThreeShapeBg.src})` }}
                    ></div>
                    <div className="container">
                        <div className="cta-three__inner">
                            <div className="cta-three__img">
                                <Image src={CtaThreeImg1} alt="cta-three-img" />
                            </div>
                            <div className="cta-three__title">
                                <h2>
                                    Experience Shine With <br /> a Free First
                                    Wash
                                </h2>
                            </div>
                            <div className="cta-three__btn">
                                <Link href="/contact" className="thm-btn">
                                    <span>Get Solution</span>
                                    <i className="fal fa-angle-double-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*CTA Three End*/}
        </>
    );
}
