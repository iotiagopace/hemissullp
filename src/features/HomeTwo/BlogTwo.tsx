import Image from "next/image";
import Link from "next/link";
import TextAnimation from "@/components/elements/TextAnimation";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import BlogTwoShape1 from "@/assets/images/shapes/blog-two-shape-1.png";
import BlogTwoShape2 from "@/assets/images/shapes/blog-two-shape-2.png";
import Blog21 from "@/assets/images/blog/blog-2-1.jpg";
import BlogTwoAuthor11 from "@/assets/images/blog/blog-two-author-1-1.jpg";
import Blog22 from "@/assets/images/blog/blog-2-2.jpg";
import BlogTwoAuthor12 from "@/assets/images/blog/blog-two-author-1-2.jpg";
import Blog23 from "@/assets/images/blog/blog-2-3.jpg";
import BlogTwoAuthor13 from "@/assets/images/blog/blog-two-author-1-3.jpg";

export default function BlogTwo() {
    return (
        <>
            {/*Blog Two Start*/}
            <section className="blog-two" id="blog">
                <div className="blog-two__shape float-bob-x">
                    <Image src={BlogTwoShape1} alt="blog-two-shape" />
                </div>
                <div className="blog-two__shape-2 float-bob-y">
                    <Image src={BlogTwoShape2} alt="blog-two-shape" />
                </div>
                <div className="container">
                    <div className="blog-two__top">
                        <div className="section-title text-left sec-title-animation animation-style2">
                            <div className="section-title__tagline-box">
                                <p className="section-title__tagline">
                                    News & Updates
                                </p>
                                <div className="section-title__tagline-shape"></div>
                            </div>
                            <h2 className="section-title__title">
                                <TextAnimation style="s2">
                                    Latest Update Car <br /> Wash Journal
                                </TextAnimation>
                            </h2>
                        </div>
                        <div className="blog-two__top-btn">
                            <Link href="/blog" className="thm-btn">
                                <span>View All Blogs</span>
                                <i className="fal fa-angle-double-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="blog-two__bottom">
                        <div className="row">
                            {/*Blog Two Single Start*/}
                            <div className="col-xl-4 col-lg-6">
                                <FadeInAdvanced
                                    variant={"fadeInLeft"}
                                    delay={100}
                                >
                                    <div className="blog-two__single">
                                        <div className="blog-two__img">
                                            <Image
                                                src={Blog21}
                                                alt="blog-two-img" />
                                        </div>
                                        <div className="blog-two__content">
                                            <div className="blog-two__author-and-date-box">
                                                <div className="blog-two__author">
                                                    <div className="blog-two__author-img">
                                                        <Image
                                                            src={
                                                                BlogTwoAuthor11
                                                            }
                                                            alt="blog-two-author-img" />
                                                    </div>
                                                    <div className="blog-two__author-content">
                                                        <h5>Jonathan Miller</h5>
                                                        <p>Supplies Manager</p>
                                                    </div>
                                                </div>
                                                <div className="blog-two__date">
                                                    <p>05 Oct,2025</p>
                                                </div>
                                            </div>
                                            <h3 className="blog-two__title">
                                                <Link href="/blog-details">
                                                    quality product with high
                                                    efficiency & good liabilites
                                                </Link>
                                            </h3>
                                            <p className="blog-two__text">
                                                car wash is the easiest way to
                                                enhance your vehicle’s
                                                appearance and preserve its
                                                shine. With expert care and
                                                high-quality products.
                                            </p>
                                            <div className="blog-two__read-more">
                                                <Link href="/blog-details">
                                                    Read More
                                                    <i className="far fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </FadeInAdvanced>
                            </div>
                            {/*Blog Two Single End*/}
                            {/*Blog Two Single Start*/}
                            <div className="col-xl-4 col-lg-6">
                                <FadeInAdvanced
                                    variant={"fadeInUp"}
                                    delay={200}
                                >
                                    <div className="blog-two__single">
                                        <div className="blog-two__img">
                                            <Image
                                                src={Blog22}
                                                alt="blog-two-img" />
                                        </div>
                                        <div className="blog-two__content">
                                            <div className="blog-two__author-and-date-box">
                                                <div className="blog-two__author">
                                                    <div className="blog-two__author-img">
                                                        <Image
                                                            src={
                                                                BlogTwoAuthor12
                                                            }
                                                            alt="blog-two-author-img" />
                                                    </div>
                                                    <div className="blog-two__author-content">
                                                        <h5>Jonathan Trot</h5>
                                                        <p>Supplies Manager</p>
                                                    </div>
                                                </div>
                                                <div className="blog-two__date">
                                                    <p>05 Oct,2025</p>
                                                </div>
                                            </div>
                                            <h3 className="blog-two__title">
                                                <Link href="/blog-details">
                                                    Common Mistakes to Avoid
                                                    When Washing Your Car
                                                </Link>
                                            </h3>
                                            <p className="blog-two__text">
                                                car wash is the easiest way to
                                                enhance your vehicle’s
                                                appearance and preserve its
                                                shine. With expert care and
                                                high-quality products.
                                            </p>
                                            <div className="blog-two__read-more">
                                                <Link href="/blog-details">
                                                    Read More
                                                    <i className="far fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </FadeInAdvanced>
                            </div>
                            {/*Blog Two Single End*/}
                            {/*Blog Two Single Start*/}
                            <div className="col-xl-4 col-lg-6">
                                <FadeInAdvanced
                                    variant={"fadeInRight"}
                                    delay={300}
                                >
                                    <div className="blog-two__single">
                                        <div className="blog-two__img">
                                            <Image
                                                src={Blog23}
                                                alt="blog-two-img" />
                                        </div>
                                        <div className="blog-two__content">
                                            <div className="blog-two__author-and-date-box">
                                                <div className="blog-two__author">
                                                    <div className="blog-two__author-img">
                                                        <Image
                                                            src={
                                                                BlogTwoAuthor13
                                                            }
                                                            alt="blog-two-author-img" />
                                                    </div>
                                                    <div className="blog-two__author-content">
                                                        <h5>Jonathan Smith</h5>
                                                        <p>Supplies Manager</p>
                                                    </div>
                                                </div>
                                                <div className="blog-two__date">
                                                    <p>05 Oct,2025</p>
                                                </div>
                                            </div>
                                            <h3 className="blog-two__title">
                                                <Link href="/blog-details">
                                                    The Smarter Way to Wash:
                                                    Hand vs. Automatic
                                                </Link>
                                            </h3>
                                            <p className="blog-two__text">
                                                car wash is the easiest way to
                                                enhance your vehicle’s
                                                appearance and preserve its
                                                shine. With expert care and
                                                high-quality products.
                                            </p>
                                            <div className="blog-two__read-more">
                                                <Link href="/blog-details">
                                                    Read More
                                                    <i className="far fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </FadeInAdvanced>
                            </div>
                            {/*Blog Two Single End*/}
                        </div>
                    </div>
                </div>
            </section>
            {/*Blog Two End*/}
        </>
    );
}
