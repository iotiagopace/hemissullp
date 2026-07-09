import Image from "next/image";
import Link from "next/link";
import TextAnimation from "@/components/elements/TextAnimation";
import TeamV21 from "@/assets/images/team/team-v2-1.jpg";
import TeamV22 from "@/assets/images/team/team-v2-2.jpg";
import TeamV23 from "@/assets/images/team/team-v2-3.jpg";
import TeamV24 from "@/assets/images/team/team-v2-4.jpg";
import TeamV25 from "@/assets/images/team/team-v2-5.jpg";
import TeamTwoShapeBg from "@/assets/images/shapes/team-two-shape-bg.png";

export default function TeamTwo() {
    return (
        <>
            {/* Team Two Start */}
            <section className="team-two" id="team">
                <div
                    className="team-two__shape-bg"
                    style={{ backgroundImage: `url(${TeamTwoShapeBg.src})` }}
                ></div>
                <div className="container">
                    <div className="row">
                        {/* Team Two Single Start */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="team-two__single">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <p className="section-title__tagline">
                                            Team Members
                                        </p>
                                        <div className="section-title__tagline-shape"></div>
                                    </div>
                                    <h2 className="section-title__title">
                                        <TextAnimation style="s2">
                                            Expert wash Team members
                                        </TextAnimation>
                                    </h2>
                                </div>
                                <p className="team-two__top-text">
                                    Behind every sparkling car is a team that
                                    truly cares. Our skilled and passionate crew
                                    is committed..
                                </p>
                                <div className="team-two__top-btn">
                                    <Link href="/team" className="thm-btn">
                                        <span>All Team Members</span>
                                        <i className="fal fa-angle-double-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Team Two Single End */}
                        {/* Team Two Single Start */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="team-two__single">
                                <div className="team-two__img-box">
                                    <div className="team-two__img">
                                        <Image src={TeamV21} alt="team-two-img" />
                                        <ul className="team-two__social">
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-facebook-f"></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-twitter"></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-pinterest-p"></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-instagram"></span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="team-two__content">
                                            <p className="team-two__sub-title">
                                                Pre-Wash Sprayer
                                            </p>
                                            <h3 className="team-two__name">
                                                <Link href="/team-details">
                                                    James Anderson
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Team Two Single End */}
                        {/* Team Two Single Start */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="team-two__single">
                                <div className="team-two__img-box">
                                    <div className="team-two__img">
                                        <Image src={TeamV22} alt="team-two-img" />
                                        <ul className="team-two__social">
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-facebook-f"></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-twitter"></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-pinterest-p"></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-instagram"></span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="team-two__content">
                                            <p className="team-two__sub-title">
                                                Pre-Wash Sprayer
                                            </p>
                                            <h3 className="team-two__name">
                                                <Link href="/team-details">
                                                    Sara Albert
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Team Two Single End */}
                        {/* Team Two Single Start */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="team-two__single">
                                <div className="team-two__img-box">
                                    <div className="team-two__img">
                                        <Image src={TeamV23} alt="team-two-img" />
                                        <ul className="team-two__social">
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-facebook-f"></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-twitter"></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-pinterest-p"></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-instagram"></span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="team-two__content">
                                            <p className="team-two__sub-title">
                                                Pre-Wash Sprayer
                                            </p>
                                            <h3 className="team-two__name">
                                                <Link href="/team-details">
                                                    Jaime Sora
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Team Two Single End */}
                        {/* Team Two Single Start */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="team-two__single">
                                <div className="team-two__img-box">
                                    <div className="team-two__img">
                                        <Image src={TeamV24} alt="team-two-img" />
                                        <ul className="team-two__social">
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-facebook-f"></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-twitter"></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-pinterest-p"></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-instagram"></span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="team-two__content">
                                            <p className="team-two__sub-title">
                                                Pre-Wash Sprayer
                                            </p>
                                            <h3 className="team-two__name">
                                                <Link href="/team-details">
                                                    James Foulker
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Team Two Single End */}
                        {/* Team Two Single Start */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="team-two__single">
                                <div className="team-two__img-box">
                                    <div className="team-two__img">
                                        <Image src={TeamV25} alt="team-two-img" />
                                        <ul className="team-two__social">
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-facebook-f"></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-twitter"></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-pinterest-p"></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="fab fa-instagram"></span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="team-two__content">
                                            <p className="team-two__sub-title">
                                                Pre-Wash Sprayer
                                            </p>
                                            <h3 className="team-two__name">
                                                <Link href="/team-details">
                                                    Jessica Asle
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Team Two Single End */}
                    </div>
                </div>
            </section>
            {/* Team Two End */}
        </>
    );
}
