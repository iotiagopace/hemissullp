import Image from "next/image";
import Link from "next/link";
import { servicesPageTwoData, type ServiceItemTwo } from "@/data/servicesPageTwoData";

export default function ServicesPageTwo() {
    return (
        <>
            {/* Services Two Start */}
            <section className="services-two services-page-two">
                <div className="container">
                    <div className="services-two__inner">
                        <div className="row">
                            {servicesPageTwoData.map((service: ServiceItemTwo) => (
                                <div
                                    key={service.id}
                                    className="col-xl-4 col-lg-6 col-md-6"
                                >
                                    <div className="services-two__single">
                                        <div className="services-two__single-img">
                                            <Image src={service.image} alt={service.title} />
                                        </div>

                                        <div className="services-two__single-content">
                                            <div className="services-two__single-content-btn">

                                                <a href={service.imageHref}
                                                    className="img-popup"
                                                >
                                                    <span className="fas fa-arrow-right"></span>
                                                </a>
                                            </div>
                                        <div className="services-two__single-content-inner">
                                            <h3>
                                                <Link href={service.link}>
                                                    {service.title}
                                                </Link>
                                            </h3>
                                            <p>{service.description}</p>
                                            <div className="btn-box">
                                                <Link href="#">
                                                    Read More
                                                    <span className="fas fa-arrow-right"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section >
            {/* Services Two End */ }
        </>
    );
}