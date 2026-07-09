import Image from "next/image";
import Link from "next/link";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import SiteFooterThreeShape1 from "@/assets/images/shapes/site-footer-three-shape-1.png";
import FooterLogo1 from "@/assets/images/resources/footer-logo-1.png";
import FooterThreeNewsUpdateImg11 from "@/assets/images/resources/footer-three-news-update-img-1-1.jpg";
import FooterThreeNewsUpdateImg12 from "@/assets/images/resources/footer-three-news-update-img-1-2.jpg";
import FooterOneShapeBg1 from "@/assets/images/shapes/footer-one-shape-bg-1.png";
export default function FooterThree() {
    return (
        <>
            {/*Site Footer Three Start*/}
            <footer className="site-footer-three">
                <div
                    className="site-footer-three__shape-bg"
                    style={{ backgroundImage: `url(${FooterOneShapeBg1.src})` }}
                ></div>
                <div className="site-footer-three__shape-1 float-bob-x">
                    <Image src={SiteFooterThreeShape1} alt="image" />
                </div>
                <div className="site-footer-three__top">
                    <div className="container">
                        <div className="site-footer-three__top-inner">
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <FadeInAdvanced
                                        variant={"fadeInUp"}
                                        delay={100}
                                    >
                                        <div className="footer-widget-three__about">
                                            <div className="footer-widget-three__about-logo">
                                                <Link href="/">
                                                    <Image src={FooterLogo1} alt="image" />
                                                </Link>
                                            </div>
                                            <p className="footer-widget-three__about-text">
                                                Providing trusted dental care
                                                with <br />
                                                compassion & precision. Your
                                                healthy <br />
                                                smile is our top priority.
                                            </p>
                                            <div className="footer-widget-three__social">
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
                                        <div className="footer-widget-three__links">
                                            <h4 className="footer-widget-three__title">
                                                Our Services
                                            </h4>
                                            <ul className="footer-widget-three__links-list list-unstyled">
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
                                        <div className="footer-widget-three__services">
                                            <h4 className="footer-widget-three__title">
                                                Quick Links
                                            </h4>
                                            <ul className="footer-widget-three__links-list list-unstyled">
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
                                        delay={300}
                                    >
                                        <div className="footer-widget-three__news-update">
                                            <h3 className="footer-widget-three__title">
                                                News Updates
                                            </h3>
                                            <ul className="footer-widget-three__news-update-list">
                                                <li>
                                                    <div className="footer-widget-three__news-update-img">
                                                        <Image
                                                            src={
                                                                FooterThreeNewsUpdateImg11
                                                            }
                                                            alt="news-update-img" />
                                                    </div>
                                                    <div className="footer-widget-three__news-update-content">
                                                        <p>15 September 2025</p>
                                                        <h4>
                                                            <Link href="/blog-details">
                                                                Top Tips to Keep
                                                                Your Car Wrap
                                                                Looking New
                                                            </Link>
                                                        </h4>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="footer-widget-three__news-update-img">
                                                        <Image
                                                            src={
                                                                FooterThreeNewsUpdateImg12
                                                            }
                                                            alt="news-update-img" />
                                                    </div>
                                                    <div className="footer-widget-three__news-update-content">
                                                        <p>15 September 2025</p>
                                                        <h4>
                                                            <Link href="/blog-details">
                                                                Top Tips to Keep
                                                                Your Car Wrap
                                                                Looking New
                                                            </Link>
                                                        </h4>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </FadeInAdvanced>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-footer-three__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer-three__bottom-inner">
                                    <div className="site-footer-three__copyright">
                                        <p className="site-footer-three__copyright-text">
                                            © 2026 Automart , All Rights
                                            Reserved.
                                        </p>
                                    </div>
                                    <div className="site-footer-three__bottom-menu-box">
                                        <ul className="list-unstyled site-footer-three__bottom-menu">
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
            {/*Site Footer Three End*/}
        </>
    );
}
