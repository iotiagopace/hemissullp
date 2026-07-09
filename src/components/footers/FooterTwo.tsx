import Image from "next/image";
import Link from "next/link";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import FooterLogo1 from "@/assets/images/resources/footer-logo-1.png";
import SiteFooterTwoShapeBg from "@/assets/images/shapes/site-footer-two-shape-bg.png";
export default function FooterTwo() {
    return (
        <>
            {/*Site Footer Two Start*/}
            <footer className="site-footer-two">
                <div
                    className="site-footer-two__shape-bg"
                    style={{ backgroundImage: `url(${SiteFooterTwoShapeBg.src})` }}
                ></div>
                <div className="site-footer-two__top">
                    <div className="container">
                        <div className="site-footer-two__top-inner">
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <FadeInAdvanced
                                        variant={"fadeInUp"}
                                        delay={100}
                                    >
                                        <div className="site-footer-two__about">
                                            <h4 className="site-footer-two__title">
                                                About Us
                                            </h4>
                                            <p className="site-footer-two__about-text">
                                                Quality washes, reliable service
                                                every time. Your car deserves
                                                the shine we deliver.
                                            </p>
                                            <div className="site-footer-two__social">
                                                <Link href="#">
                                                    <i className="fab fa-twitter"></i>
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-facebook"></i>
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-pinterest-p"></i>
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-instagram"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </FadeInAdvanced>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <FadeInAdvanced
                                        variant={"fadeInUp"}
                                        delay={200}
                                    >
                                        <div className="site-footer-two__usefull-links">
                                            <h4 className="site-footer-two__title">
                                                Quick Links
                                            </h4>
                                            <ul className="site-footer-two__links-list list-unstyled">
                                                <li>
                                                    <Link href="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link href="/about">
                                                        About Us
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services-v-1">
                                                        Services
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/team">Team</Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog">
                                                        Latest Blog
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/contact">
                                                        Contact us
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </FadeInAdvanced>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <FadeInAdvanced
                                        variant={"fadeInUp"}
                                        delay={400}
                                    >
                                        <div className="site-footer-two__resources">
                                            <h4 className="site-footer-two__title">
                                                Our services
                                            </h4>
                                            <ul className="site-footer-two__links-list list-unstyled">
                                                <li>
                                                    <Link href="/service-details">
                                                        Car Detailing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service-details">
                                                        Paint Protection
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service-details">
                                                        Engine Bay Clean
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service-details">
                                                        Fleet Services
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service-details">
                                                        Wax & Polish
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service-details">
                                                        Collision Repair
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </FadeInAdvanced>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <FadeInAdvanced
                                        variant={"fadeInUp"}
                                        delay={300}
                                    >
                                        <div className="site-footer-two__working-hours">
                                            <h3 className="site-footer-two__title">
                                                Our Working Hours
                                            </h3>
                                            <ul className="site-footer-two__working-hours-list">
                                                <li>
                                                    <p className="site-footer-two__working-day">
                                                        Saturday:
                                                    </p>
                                                    <p className="site-footer-two__working-time">
                                                        9:00 AM – 12:00 PM
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="site-footer-two__working-day">
                                                        Sunday:
                                                    </p>
                                                    <p className="site-footer-two__working-time">
                                                        9:00 AM – 12:00 PM
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="site-footer-two__working-day">
                                                        Monday:
                                                    </p>
                                                    <p className="site-footer-two__working-time">
                                                        9:00 AM – 12:00 PM
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="site-footer-two__working-day">
                                                        Wednesday:
                                                    </p>
                                                    <p className="site-footer-two__working-time">
                                                        9:00 AM – 12:00 PM
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="site-footer-two__working-day">
                                                        Thursday:
                                                    </p>
                                                    <p className="site-footer-two__working-time">
                                                        9:00 AM – 12:00 PM
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="site-footer-two__working-day">
                                                        Friday:
                                                    </p>
                                                    <p className="site-footer-two__working-time">
                                                        9:00 AM – 12:00 PM
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </FadeInAdvanced>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer-two__bottom">
                    <div className="site-footer-two__logo">
                        <Link href="/">
                            <Image src={FooterLogo1} alt="footer-logo" />
                        </Link>
                    </div>
                    <div className="site-footer-two__bottom-outer">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="site-footer-two__bottom-inner">
                                        <div className="site-footer-two__copyright">
                                            <p className="site-footer-two__copyright-text">
                                                © 2026 Automart By
                                                <a href="https://themeforest.net/user/scriptfusions">
                                                    Scriptfusions.
                                                </a>
                                                All Rights Reserved.
                                            </p>
                                        </div>
                                        <ul className="site-footer-two__bottom-menu">
                                            <li>
                                                <Link href="/about">Privacy</Link>
                                            </li>
                                            <li>
                                                <Link href="/about">Policy</Link>
                                            </li>
                                            <li>
                                                <Link href="/about">
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*Site Footer Two End*/}
        </>
    );
}
