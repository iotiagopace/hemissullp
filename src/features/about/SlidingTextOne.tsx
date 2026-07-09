import Image from "next/image";
import MarqueeSlider from "@/components/elements/MarqueeSlider";
import Icon1 from "@/assets/images/icon/icon-1.png";

export default function SlidingTextOne() {
    return (
        <>
            {/* Scroling Text One Start */}
            <section className="sliding-text-one">
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
                                    data-hover="Miror Surgery"
                                    className="sliding-text-one__title"
                                >
                                    Auto Glow
                                </h2>
                            </li>
                            <li className="sliding-text-one__item">
                                <Image src={Icon1} alt="Icon" />
                            </li>
                            <li className="sliding-text-one__item">
                                <h2
                                    data-hover="Miror Surgery"
                                    className="sliding-text-one__title"
                                >
                                    Full Car Analysis
                                </h2>
                            </li>
                            <li className="sliding-text-one__item">
                                <Image src={Icon1} alt="Icon" />
                            </li>
                            <li className="sliding-text-one__item">
                                <h2
                                    data-hover="Miror Surgery"
                                    className="sliding-text-one__title"
                                >
                                    Engine Service
                                </h2>
                            </li>
                            <li className="sliding-text-one__item">
                                <Image src={Icon1} alt="Icon" />
                            </li>
                            <li className="sliding-text-one__item">
                                <h2
                                    data-hover="Miror Surgery"
                                    className="sliding-text-one__title"
                                >
                                    Trusted Repairs
                                </h2>
                            </li>
                        </MarqueeSlider>
                    </ul>
                </div>
            </section>
            {/* Scroling Text One End */}
        </>
    );
}
