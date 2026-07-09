import Image from "next/image";
import Link from "next/link";
import SloganOneShape1 from "@/assets/images/shapes/slogan-one-shape-1.png";
import SloganOneShape2 from "@/assets/images/shapes/slogan-one-shape-2.png";
import SloganOneBg from "@/assets/images/backgrounds/slogan-one-bg.jpg";
import YoutubeFrem from "@/components/elements/YoutubeFrem";
import JarallaxSection from "@/components/elements/JarallaxSection";

export default function SloganOne() {
    return (
        <>
            {/* Start Slogan One */}
            <section className="slogan-one">
                <JarallaxSection
                    bgOnly
                    className="slogan-one__bg"
                    imgSrc={SloganOneBg.src}
                    speed={0.2}
                    imgPosition="50% 0%"
                />
                <div className="slogan-one__shape1 float-bob-y">
                    <Image src={SloganOneShape1} alt="Shape" />
                </div>
                <div className="slogan-one__shape2 float-bob-x">
                    <Image src={SloganOneShape2} alt="Shape" />
                </div>
                <div className="container">
                    <div className="slogan-one__content">
                        <div className="slogan-one__content-title">
                            <h2>
                                Best Car Wash Service <br /> at Our Workshop
                            </h2>
                            <p>
                                Discover the power of words that inspire
                                confidence and care. Our dental care slogans
                                <br /> are crafted to reflect trust, comfort,
                                and the joy of a healthy smile.
                            </p>
                        </div>
                        <div className="slogan-one__content-bottom">
                            <div className="slogan-one__content-btn">
                                <Link href="/contact" className="thm-btn">
                                    <span>Read More</span>
                                    <i className="fal fa-angle-double-right"></i>
                                </Link>
                            </div>
                            <div className="slogan-one__content-video">
                                <YoutubeFrem video="NPH3XPNuR70" className="video-popup"
                                    title="Video Gallery">
                                    <i className="fa fa-solid fa-play"></i>
                                </YoutubeFrem>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Slogan One */}
        </>
    );
}
