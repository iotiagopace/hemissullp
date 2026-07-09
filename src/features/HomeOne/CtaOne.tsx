import Image from "next/image";
import CtaOneShape1 from "@/assets/images/shapes/cta-one-shape-1.png";
import CtaV11 from "@/assets/images/resources/cta-v1-1.jpg";
import CtaV1Bg from "@/assets/images/backgrounds/cta-v1__bg.jpg";
import YoutubeFrem from "@/components/elements/YoutubeFrem";
import JarallaxSection from "@/components/elements/JarallaxSection";

export default function CtaOne() {
    return (
        <>
            {/* CTA One Start */}
            <section className="cta-one">
                <JarallaxSection
                    bgOnly
                    className="cta-one__bg"
                    imgSrc={CtaV1Bg.src}
                    speed={0.2}
                    imgPosition="50% 0%"
                />
                <div className="cta-one__shape-1">
                    <Image src={CtaOneShape1} alt="Decorative accent shape" />
                </div>
                <div className="container">
                    <div className="cta-one__content">
                        <div className="cta-one__content-left">
                            <div className="cta-one__content-left-top">
                                <h2>Car repair</h2>
                            </div>
                            <div className="cta-one__content-left-bottom">
                                <div className="cta-one__content-left-bottom-title1">
                                    <h2>Video</h2>
                                    <Image src={CtaV11} alt="Expert demonstrating professional vehicle repair techniques" />
                                </div>
                                <div className="cta-one__content-left-bottom-title2">
                                    <p>
                                        Expert Videos on
                                        <br /> Vehicle Repairs
                                    </p>
                                    <h2>Gallary</h2>
                                </div>
                            </div>
                        </div>
                        <div className="cta-one__video-link">
                            <YoutubeFrem video="rbFoRH2deeY" className="video-popup">
                                <div className="cta-one__video-icon">
                                    <span className="fa fa-play"></span>
                                    <i className="ripple"></i>
                                </div>
                            </YoutubeFrem>
                            <h4 className="cta-one__video-title">
                                Watch Video
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA One End */}
        </>
    );
}
