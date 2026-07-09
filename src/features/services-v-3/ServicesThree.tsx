import Link from "next/link";
import { servicesThreeData,type ServiceItemThree } from "@/data/servicesThreeData";

export default function ServicesThree() {
    return (
        <>
            {/* Services Three Start */}
            <section className="services-three">
                <div className="container">
                    <div className="row">
                        {servicesThreeData.map((service: ServiceItemThree) => (
                            <div
                                key={service.id}
                                className="col-xl-4 col-lg-6 col-md-6"
                            >
                                <div className="services-three__single">
                                    <div className="services-three__icon">
                                        <i className={service.icon}></i>
                                    </div>
                                    <div className="services-three__content">
                                        <h3 className="services-three__title">
                                            <Link href={service.link}>
                                                {service.title}
                                            </Link>
                                        </h3>
                                        <p className="services-three__text">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Services Three End */}
        </>
    );
}