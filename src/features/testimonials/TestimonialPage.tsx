import Image from "next/image";
import Link from "next/link";
import { testimonialPageData, type TestimonialItem } from "@/data/testimonialPageData";

export default function TestimonialPage() {
    return (
        <>
            {/*Testimonial Page Start*/}
            <section className="testimonial-page">
                <div className="container">
                    <div className="row">
                        {testimonialPageData.map((item: TestimonialItem) => (
                            <div key={item.id} className="col-xl-6 col-md-6">
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__quote">
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                    <p className="testimonial-one__text">{item.text}</p>
                                    <div className="testimonial-one__client-info-outer">
                                        <div className="testimonial-one__client-info">
                                            <div className="testimonial-one__client-img">
                                                <Image src={item.image} alt={item.name} />
                                            </div>
                                            <div className="testimonial-one__client-content">
                                                <h3>
                                                    <Link href="/testimonials">{item.name}</Link>
                                                </h3>
                                                <p>{item.role}</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-one__client-review">
                                            {Array.from({ length: item.stars }).map((_, i) => (
                                                <span key={i} className="fas fa-star"></span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*Testimonial Page End*/}
        </>
    );
}