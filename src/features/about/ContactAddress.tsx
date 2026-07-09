import Image from "next/image";
import TextAnimation from "@/components/elements/TextAnimation";
import ContactAddressMap from "@/assets/images/shapes/contact-address-map.png";
import ContactAddressShape1 from "@/assets/images/shapes/contact-address-shape-1.png";

export default function ContactAddress() {
    return (
        <>
            {/* Contact Address Start */}
            <section className="contact-address">
                <div className="contact-address__map">
                    <Image src={ContactAddressMap} alt="image" />
                </div>
                <div className="contact-address__shape-1">
                    <Image src={ContactAddressShape1} alt="image" />
                </div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box two">
                            <p className="section-title__tagline">
                                Contact address
                            </p>
                            <div className="section-title__tagline-shape"></div>
                        </div>
                        <h2 className="section-title__title">
                            <TextAnimation style="s1">
                                Connect With Our Team
                            </TextAnimation>
                        </h2>
                    </div>
                    <div className="contact-address__inner">
                        <ul className="row">
                            {/*Contact Address Single Start*/}
                            <li className="col-xl-4 col-lg-4">
                                <div className="contact-address__single">
                                    <div className="contact-address__title-box">
                                        <h3 className="contact-address__title">
                                            Washington
                                        </h3>
                                    </div>
                                    <div className="contact-address__phone-email-box">
                                        <p>
                                            <span>Phone:</span>
                                            <a href="tel:12345677345">
                                                +123 45677345
                                            </a>
                                        </p>
                                        <p>
                                            <span>Email:</span>
                                            <a href="mailto:scriptfusionscar@email.com">
                                                scriptfusionscar@email.com
                                            </a>
                                        </p>
                                    </div>
                                    <div className="contact-address__workshop">
                                        <h5>Workshop Address:</h5>
                                        <p>
                                            17110 116th Ave SE Unit A <br />
                                            Renton, WA 98058-5055
                                        </p>
                                    </div>
                                    <div className="contact-address__hours">
                                        <h5>Hours:</h5>
                                        <p>
                                            Mon–Sat: 9 AM – 7 PM (Sun: Closed)
                                        </p>
                                    </div>
                                </div>
                            </li>
                            {/*Contact Address Single End*/}
                            {/*Contact Address Single Start*/}
                            <li className="col-xl-4 col-lg-4">
                                <div className="contact-address__single">
                                    <div className="contact-address__title-box">
                                        <h3 className="contact-address__title">
                                            Los Angeles
                                        </h3>
                                    </div>
                                    <div className="contact-address__phone-email-box">
                                        <p>
                                            <span>Phone:</span>
                                            <a href="tel:12345677345">
                                                +123 45677345
                                            </a>
                                        </p>
                                        <p>
                                            <span>Email:</span>
                                            <a href="mailto:scriptfusionscar@email.com">
                                                scriptfusionscar@email.com
                                            </a>
                                        </p>
                                    </div>
                                    <div className="contact-address__workshop">
                                        <h5>Workshop Address:</h5>
                                        <p>
                                            17110 116th Ave SE Unit A <br />
                                            Renton, WA 98058-5055
                                        </p>
                                    </div>
                                    <div className="contact-address__hours">
                                        <h5>Hours:</h5>
                                        <p>
                                            Mon–Sat: 9 AM – 7 PM (Sun: Closed)
                                        </p>
                                    </div>
                                </div>
                            </li>
                            {/*Contact Address Single End*/}
                            {/*Contact Address Single Start*/}
                            <li className="col-xl-4 col-lg-4">
                                <div className="contact-address__single">
                                    <div className="contact-address__title-box">
                                        <h3 className="contact-address__title">
                                            North Dakota
                                        </h3>
                                    </div>
                                    <div className="contact-address__phone-email-box">
                                        <p>
                                            <span>Phone:</span>
                                            <a href="tel:12345677345">
                                                +123 45677345
                                            </a>
                                        </p>
                                        <p>
                                            <span>Email:</span>
                                            <a href="mailto:scriptfusionscar@email.com">
                                                scriptfusionscar@email.com
                                            </a>
                                        </p>
                                    </div>
                                    <div className="contact-address__workshop">
                                        <h5>Workshop Address:</h5>
                                        <p>
                                            17110 116th Ave SE Unit A <br />
                                            Renton, WA 98058-5055
                                        </p>
                                    </div>
                                    <div className="contact-address__hours">
                                        <h5>Hours:</h5>
                                        <p>
                                            Mon–Sat: 9 AM – 7 PM (Sun: Closed)
                                        </p>
                                    </div>
                                </div>
                            </li>
                            {/*Contact Address Single End*/}
                        </ul>
                    </div>
                </div>
            </section>
            {/* Contact Address End */}
        </>
    );
}
