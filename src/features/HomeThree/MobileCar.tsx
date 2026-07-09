import Image from "next/image";
import Link from "next/link";
import TextAnimation from "@/components/elements/TextAnimation";
import MobileCarShape1 from "@/assets/images/shapes/mobile-car-shape-1.png";
import MobileCarShape2 from "@/assets/images/shapes/mobile-car-shape-2.png";
import MobileCarImg from "@/assets/images/resources/mobile-car-img.png";

export default function MobileCar() {
    return (
        <>
            {/* Mobile Car Start */}
            <section className="mobile-car">
                <div className="mobile-car__shape-1">
                    <Image src={MobileCarShape1} alt="mobile-car-shape" />
                </div>
                <div className="mobile-car__shape-2">
                    <Image src={MobileCarShape2} alt="mobile-car-shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="mobile-car__left">
                                <div className="section-title sec-title-animation animation-style1">
                                    <div className="section-title__tagline-box">
                                        <p className="section-title__tagline">
                                            Mobile Car Makeover
                                        </p>
                                        <div className="section-title__tagline-shape"></div>
                                    </div>
                                    <h2 className="section-title__title">
                                        <TextAnimation style="s1">
                                            Style your vehicle on the go
                                            download the app !
                                        </TextAnimation>
                                    </h2>
                                </div>
                                <p className="mobile-car__text">
                                    Transform your ride with custom designs,
                                    premium materials, and expert installation —
                                    all from your phone.
                                </p>
                                <div className="mobile-car__content-box">
                                    <ul>
                                        <li>
                                            <div className="mobile-car__content-single">
                                                <h3>Easy Booking</h3>
                                                <p>
                                                    Schedule your wrap or paint
                                                    appointment in minutes.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mobile-car__content-single">
                                                <h3>Exclusive Deals</h3>
                                                <p>
                                                    Get app-only discounts on
                                                    full wraps,custom designs.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mobile-car__btn-box">
                                    <Link href="/contact">
                                        <div className="mobile-car__btn-icon">
                                            <i className="fab fa-google-play"></i>
                                        </div>
                                        <div className="mobile-car__btn-content">
                                            <p>Get It On</p>
                                            <h3>Google Play</h3>
                                        </div>
                                    </Link>
                                    <Link href="/contact" className="last-child">
                                        <div className="mobile-car__btn-icon">
                                            <i className="fab fa-apple"></i>
                                        </div>
                                        <div className="mobile-car__btn-content">
                                            <p>Download on the</p>
                                            <h3>App Store</h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="mobile-car__right">
                                <div className="mobile-car__img-box">
                                    <div className="mobile-car__img">
                                        <Image
                                            src={MobileCarImg}
                                            alt="mobile-car-img" />
                                    </div>
                                    <div className="mobile-car__call">
                                        <div className="mobile-car__call-icon">
                                            <span className="icon-phone-call"></span>
                                        </div>
                                        <div className="mobile-car__call-content">
                                            <p>call & book us Anytime</p>
                                            <h4>
                                                <a href="tel:125478541254">
                                                    125478541254
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Mobile Car End */}
        </>
    );
}
