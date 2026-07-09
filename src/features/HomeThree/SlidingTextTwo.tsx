import Image from "next/image";
import MarqueeSlider from "@/components/elements/MarqueeSlider";
import Icon1 from "@/assets/images/icon/icon-1.png";

export default function SlidingTextTwo() {
    return (
        <>
            {/* Scroling Text Two Start */}
            <section className="sliding-text-one sliding-text-two">
                <div className="sliding-text-one__wrap">
                    <ul className="sliding-text-one__list list-unstyled marquee_mode">
                        <MarqueeSlider
                            mode="1"
                            className="sliding-text-one__list list-unstyled marquee_mode"
                        >
                            <li className="sliding-text-one__item">
                                <Image src={Icon1} alt="Icon" />
                            </li>
                            <li className="sliding-text-one__item">
                                <h2
                                    data-hover="Premium Quality"
                                    className="sliding-text-one__title"
                                >
                                    Premium Quality
                                </h2>
                            </li>
                            <li className="sliding-text-one__item">
                                <Image src={Icon1} alt="Icon" />
                            </li>
                            <li className="sliding-text-one__item">
                                <h2
                                    data-hover="Custom Designs"
                                    className="sliding-text-one__title"
                                >
                                    Custom Designs
                                </h2>
                            </li>
                            <li className="sliding-text-one__item">
                                <Image src={Icon1} alt="Icon" />
                            </li>
                            <li className="sliding-text-one__item">
                                <h2
                                    data-hover="Flawless Finish"
                                    className="sliding-text-one__title"
                                >
                                    Flawless Finish
                                </h2>
                            </li>
                            <li className="sliding-text-one__item">
                                <Image src={Icon1} alt="Icon" />
                            </li>
                            <li className="sliding-text-one__item">
                                <h2
                                    data-hover="One Stunning Wrap!"
                                    className="sliding-text-one__title"
                                >
                                    One Stunning Wrap!
                                </h2>
                            </li>
                        </MarqueeSlider>
                    </ul>
                </div>
            </section>
            {/* Scroling Text Two End */}
        </>
    );
}
