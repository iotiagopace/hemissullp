import Link from "next/link";
import NewsletterOneBg from "@/assets/images/backgrounds/newsletter-one-bg.jpg";
export default function NewsletterThree() {
    return (
        <>
            {/*Newsletter One Start*/}
            <section className="newsletter-one">
                <div
                    className="newsletter-one__bg"
                    style={{ backgroundImage: `url(${NewsletterOneBg.src})` }}
                ></div>
                <div className="newsletter-one__big-text">NEWSLETTER</div>
                <div className="container">
                    <div className="newsletter-one__inner">
                        <div className="newsletter-one__left">
                            <div className="newsletter-one__title-box">
                                <h2 className="newsletter-one__title">
                                    Subscribe <span>Newsletter</span>
                                </h2>
                                <p className="newsletter-one__text">
                                    By Subscribing you agree to the
                                    <Link href="/about">Terms of use</Link> &
                                    <Link href="/about">Privacy Policy</Link>
                                </p>
                            </div>
                        </div>
                        <div className="newsletter-one__form-box">
                            <form className="newsletter-one__form">
                                <div className="newsletter-one__input">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="newsletter-one__btn"
                                >
                                    Subscribe Now
                                    <span className="fas fa-paper-plane"></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/*Newsletter One End*/}
        </>
    );
}
