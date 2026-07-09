import Image from "next/image";
import Link from "next/link";
import TextAnimation from "@/components/elements/TextAnimation";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import Blog11 from "@/assets/images/blog/blog-1-1.jpg";
import Blog12 from "@/assets/images/blog/blog-1-2.jpg";
import Blog13 from "@/assets/images/blog/blog-1-3.jpg";

export default function BlogOne() {
    return (
        <>
            {/* Blog One Start */}
            <section className="blog-one" id="blog">
                <div className="container">
                    <div className="blog-one__top">
                        <div className="section-title text-left sec-title-animation animation-style2">
                            <div className="section-title__tagline-box">
                                <p className="section-title__tagline">
                                    Latest From Blog
                                </p>
                                <div className="section-title__tagline-shape"></div>
                            </div>
                            <h2 className="section-title__title">
                                <TextAnimation style="s2">
                                    Professional Car Repair <br />
                                    Articles & Updates
                                </TextAnimation>
                            </h2>
                        </div>
                        <div className="blog-one__top-btn">
                            <Link href="/blog" className="thm-btn">
                                <span>View All Blogs</span>
                                <i className="fal fa-angle-double-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="blog-one__bottom">
                        <div className="row">
                            {/* Blog One Single Start */}
                            <div className="col-xl-4 col-lg-6">
                                <FadeInAdvanced
                                    variant={"fadeInLeft"}
                                    delay={0}
                                    duration={1500}
                                >
                                    <div className="blog-one__single">
                                        <div className="blog-one__img">
                                            <Image src={Blog11} alt="image" />
                                            <div className="blog-one__date-and-author">
                                                <div className="blog-one__date">
                                                    <p>05 Oct,2025</p>
                                                </div>
                                                <div className="blog-one__author">
                                                    <div className="blog-one__author-icon">
                                                        <span className="fas fa-user"></span>
                                                    </div>
                                                    <div className="blog-one__author-text">
                                                        <p>
                                                            <Link href="/blog-details">
                                                                By Admin
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-one__content">
                                            <h3 className="blog-one__title">
                                                <Link href="/blog-details">
                                                    Top Car Repair Tips to
                                                    Extend Your Vehicle’s Life
                                                </Link>
                                            </h3>
                                            <p className="blog-one__text">
                                                Expert car repair services don’t
                                                just fix issues; they safeguard
                                                your vehicle with precision and
                                                skilled craftsmanship.
                                            </p>
                                        </div>
                                    </div>
                                </FadeInAdvanced>
                            </div>
                            {/* Blog One Single End */}
                            {/* Blog One Single Start */}
                            <div className="col-xl-4 col-lg-6">
                                <FadeInAdvanced
                                    variant={"fadeInRight"}
                                    delay={0}
                                    duration={1500}
                                >
                                    <div className="blog-one__single">
                                        <div className="blog-one__img">
                                            <Image src={Blog12} alt="image" />
                                            <div className="blog-one__date-and-author">
                                                <div className="blog-one__date">
                                                    <p>05 Oct,2025</p>
                                                </div>
                                                <div className="blog-one__author">
                                                    <div className="blog-one__author-icon">
                                                        <span className="fas fa-user"></span>
                                                    </div>
                                                    <div className="blog-one__author-text">
                                                        <p>
                                                            <Link href="/blog-details">
                                                                By Admin
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-one__content">
                                            <h3 className="blog-one__title">
                                                <Link href="/blog-details">
                                                    Car Repair & Maintenance
                                                    Tips for Safe Driving
                                                </Link>
                                            </h3>
                                            <p className="blog-one__text">
                                                Expert car repair services don’t
                                                just fix issues; they safeguard
                                                your vehicle with precision and
                                                skilled craftsmanship.
                                            </p>
                                        </div>
                                    </div>
                                </FadeInAdvanced>
                            </div>
                            {/* Blog One Single End */}
                            {/* Blog One Single Start */}
                            <div className="col-xl-4 col-lg-6">
                                <FadeInAdvanced
                                    variant={"fadeInLeft"}
                                    delay={0}
                                    duration={1500}
                                >
                                    <div className="blog-one__single">
                                        <div className="blog-one__img">
                                            <Image src={Blog13} alt="image" />
                                            <div className="blog-one__date-and-author">
                                                <div className="blog-one__date">
                                                    <p>05 Oct,2025</p>
                                                </div>
                                                <div className="blog-one__author">
                                                    <div className="blog-one__author-icon">
                                                        <span className="fas fa-user"></span>
                                                    </div>
                                                    <div className="blog-one__author-text">
                                                        <p>
                                                            <Link href="/blog-details">
                                                                By Admin
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-one__content">
                                            <h3 className="blog-one__title">
                                                <Link href="/blog-details">
                                                    Understanding Their Role in
                                                    Engine Performance
                                                </Link>
                                            </h3>
                                            <p className="blog-one__text">
                                                Expert car repair services don’t
                                                just fix issues; they safeguard
                                                your vehicle with precision and
                                                skilled craftsmanship.
                                            </p>
                                        </div>
                                    </div>
                                </FadeInAdvanced>
                            </div>
                            {/* Blog One Single End */}
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog One End */}
        </>
    );
}
