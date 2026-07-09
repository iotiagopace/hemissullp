// BeforeAfterOne.tsx
import TextAnimation from "@/components/elements/TextAnimation";
import BeforeAndAfterImg  from "@/assets/images/resources/before-and-after-img.png";
import BeforeAndAfterImg2 from "@/assets/images/resources/before-and-after-img-2.png";
import BeforeAfterOneBg   from "@/assets/images/backgrounds/before-after-one-bg.jpg";
import JarallaxSection    from "@/components/elements/JarallaxSection";
import BeforeAfterSlider  from "@/components/elements/BeforeAfterSlider";

export default function BeforeAfterOne() {
    return (
        <>
            {/*Before After One Start*/}
            <section className="before-after-one">
                <JarallaxSection
                    bgOnly
                    className="before-after-one__bg"
                    imgSrc={BeforeAfterOneBg.src}
                    speed={0.2}
                    imgPosition="50% 0%"
                />
                <div className="container">
                    <div className="before-after-one__inner">
                        <div className="section-title text-center sec-title-animation animation-style1">
                            <div className="section-title__tagline-box two">
                                <p className="section-title__tagline">
                                    Before & after
                                </p>
                                <div className="section-title__tagline-shape"></div>
                            </div>
                            <h2 className="section-title__title">
                                <TextAnimation style="s1">
                                    See the Power of a True Clean
                                </TextAnimation>
                            </h2>
                        </div>

                        <div className="before-and-after__img-box">
                            <BeforeAfterSlider
                                id="wrinkle-before-after"
                                beforeSrc={BeforeAndAfterImg.src}
                                afterSrc={BeforeAndAfterImg2.src}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/*Before After One End*/}
        </>
    );
}