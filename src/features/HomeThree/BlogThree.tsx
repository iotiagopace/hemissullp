import Image from "next/image";
import Link from "next/link";
import TextAnimation from "@/components/elements/TextAnimation";
import Blog31 from "@/assets/images/blog/blog-3-1.jpg";
import Blog32 from "@/assets/images/blog/blog-3-2.jpg";
import Blog33 from "@/assets/images/blog/blog-3-3.jpg";

export default function BlogThree() {
    return (
        <>
            {/* Blog Three Start */}
            <section className="blog-three" id="blog">
                <div className="container">
                    <div className="blog-three__top">
                        <div className="section-title text-left sec-title-animation animation-style2">
                            <div className="section-title__tagline-box">
                                <p className="section-title__tagline">
                                    Our Latest Blogs
                                </p>
                                <div className="section-title__tagline-shape"></div>
                            </div>
                            <h2 className="section-title__title">
                                <TextAnimation style="s2">
                                    Wrapping News & Updates
                                </TextAnimation>
                            </h2>
                        </div>
                        <div className="blog-three__top-btn">
                            <Link href="/blog" className="thm-btn">
                                <span>View Blogs</span>
                                <i className="fal fa-angle-double-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="blog-three__bottom">
                        <ul className="blog-three__list">
                            {/* Blog Three Single Start */}
                            <li className="wow fadeInUp" data-wow-delay="100ms">
                                <div className="blog-three__img">
                                    <Image src={Blog31} alt="blog-three-img" />
                                </div>
                                <div className="blog-three__content-box">
                                    <div className="blog-three__content">
                                        <ul className="blog-three__meta">
                                            <li>
                                                <Link href="/blog-details">
                                                    <i className="fas fa-user-circle"></i>
                                                    Admin
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-details">
                                                    <i className="fas fa-comments"></i>
                                                    02 Comment
                                                </Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-three__title">
                                            <Link href="/blog-details">
                                                Custom Car Wraps: Express Your
                                                Style on the Road
                                            </Link>
                                        </h3>
                                        <p className="blog-three__text">
                                            We love sharing what happens behind
                                            the wraps! From color trends to
                                            application secrets, our blog brings
                                            you the latest insights from the
                                            world of car wrapping.
                                        </p>
                                    </div>
                                    <div className="blog-three__more-post">
                                        <Link href="/blog-details">
                                            <span className="far fa-long-arrow-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            {/* Blog Three Single End */}
                            {/* Blog Three Single Start */}
                            <li className="wow fadeInUp" data-wow-delay="200ms">
                                <div className="blog-three__img">
                                    <Image src={Blog32} alt="blog-three-img" />
                                </div>
                                <div className="blog-three__content-box">
                                    <div className="blog-three__content">
                                        <ul className="blog-three__meta">
                                            <li>
                                                <Link href="/blog-details">
                                                    <i className="fas fa-user-circle"></i>
                                                    Admin
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-details">
                                                    <i className="fas fa-comments"></i>
                                                    02 Comment
                                                </Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-three__title">
                                            <Link href="/blog-details">
                                                How Car Wrapping Boosts Your
                                                Business Branding
                                            </Link>
                                        </h3>
                                        <p className="blog-three__text">
                                            We love sharing what happens behind
                                            the wraps! From color trends to
                                            application secrets, our blog brings
                                            you the latest insights from the
                                            world of car wrapping.
                                        </p>
                                    </div>
                                    <div className="blog-three__more-post">
                                        <Link href="/blog-details">
                                            <span className="far fa-long-arrow-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            {/* Blog Three Single End */}
                            {/* Blog Three Single Start */}
                            <li className="wow fadeInUp" data-wow-delay="100ms">
                                <div className="blog-three__img">
                                    <Image src={Blog33} alt="blog-three-img" />
                                </div>
                                <div className="blog-three__content-box">
                                    <div className="blog-three__content">
                                        <ul className="blog-three__meta">
                                            <li>
                                                <Link href="/blog-details">
                                                    <i className="fas fa-user-circle"></i>
                                                    Admin
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-details">
                                                    <i className="fas fa-comments"></i>
                                                    02 Comment
                                                </Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-three__title">
                                            <Link href="/blog-details">
                                                Transform Your Ride: The Art of
                                                Car Wrapping
                                            </Link>
                                        </h3>
                                        <p className="blog-three__text">
                                            We love sharing what happens behind
                                            the wraps! From color trends to
                                            application secrets, our blog brings
                                            you the latest insights from the
                                            world of car wrapping.
                                        </p>
                                    </div>
                                    <div className="blog-three__more-post">
                                        <Link href="/blog-details">
                                            <span className="far fa-long-arrow-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            {/* Blog Three Single End */}
                        </ul>
                    </div>
                </div>
            </section>
            {/* Blog Three End */}
        </>
    );
}
