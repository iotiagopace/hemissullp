import Image from "next/image";
import Link from "next/link";
import CtaTwo from "@/components/footers/CtaTwo";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import SiteFooterShape1 from "@/assets/images/shapes/site-footer-shape-1.png";
import SiteFooterShape2 from "@/assets/images/shapes/site-footer-shape-2.png";
import FooterLogo1 from "@/assets/images/resources/footer-logo-1.png";
import FooterOneShapeBg1 from "@/assets/images/shapes/footer-one-shape-bg-1.png";
export default function Footer() {
    return (
        <>
            <CtaTwo />
            {/*Site Footer Start*/}
            <footer className="site-footer">
                <div
                    className="site-footer__shape-bg"
                    style={{ backgroundImage: `url(${FooterOneShapeBg1.src})` }}
                ></div>
                <div className="site-footer__shape-1 float-bob-x">
                    <Image src={SiteFooterShape1} alt="image" />
                </div>
                <div className="site-footer__shape-2 float-bob-y">
                    <Image src={SiteFooterShape2} alt="image" />
                </div>
                <div className="site-footer__top">
                    <div className="container">
                        <div className="site-footer__top-inner">
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <FadeInAdvanced
                                        variant={"fadeInUp"}
                                        delay={100}
                                    >
                                        <div className="footer-widget__about">
                                            <div className="footer-widget__about-logo">
                                                <Link href="/">
                                                    <Image src={FooterLogo1} alt="image" />
                                                </Link>
                                            </div>
                                            <p className="footer-widget__about-text">
                                                Quality washes, reliable service
                                                every time. Your car deserves
                                                the shine we deliver.
                                            </p>
                                            <div className="footer-widget__newsletter-form-box">
                                                <h3 className="footer-widget__newsletter-title">
                                                    Newsletter
                                                </h3>
                                                <form className="footer-widget__newsletter-form contact-form-validated">
                                                    <div className="footer-widget__newsletter-form-input-box">
                                                        <input
                                                            type="email"
                                                            placeholder="Email Address"
                                                            name="email"
                                                        />
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        className="footer-widget__newsletter-btn"
                                                    >
                                                        <span>
                                                            <i className="icon-envelope"></i>
                                                        </span>
                                                    </button>
                                                    <div className="result"></div>
                                                </form>
                                            </div>
                                            <div className="footer-widget__social">
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
                                        <div className="footer-widget__links">
                                            <h4 className="footer-widget__title">
                                                Our Services
                                            </h4>
                                            <ul className="footer-widget__links-list list-unstyled">
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
                                        delay={400}
                                    >
                                        <div className="footer-widget__services">
                                            <h4 className="footer-widget__title">
                                                Quick Links
                                            </h4>
                                            <ul className="footer-widget__links-list list-unstyled">
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
                                                    <Link href="/about">
                                                        Latest Blog
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog">
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
                                        delay={300}
                                    >
                                        <div className="footer-widget__office">
                                            <h3 className="footer-widget__title">
                                                Our Offices
                                            </h3>
                                            <ul className="footer-widget__office-list list-unstyled">
                                                <li>
                                                    <p>Headquarters- USA</p>
                                                    <h5>
                                                        <Link href="/contact">
                                                            Seattle (major city
                                                            in the state
                                                            Washington).
                                                        </Link>
                                                    </h5>
                                                </li>
                                                <li>
                                                    <p>Operations - China</p>
                                                    <h5>
                                                        <Link href="/contact">
                                                            Shanghai major
                                                            global financial hub
                                                            & China's largest
                                                            cities
                                                        </Link>
                                                    </h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </FadeInAdvanced>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-footer__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer__bottom-inner">
                                    <div className="site-footer__copyright">
                                        <p className="site-footer__copyright-text">
                                            © 2026 Automart , All Rights
                                            Reserved.
                                        </p>
                                    </div>
                                    <div className="site-footer__bottom-menu-box">
                                        <ul className="list-unstyled site-footer__bottom-menu">
                                            <li>
                                                <Link href="/about">
                                                    Terms of Service
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/about">
                                                    Privacy policy
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
            {/*Site Footer End*/}
        </>
    );
}
