import Image from "next/image";
import Link from "next/link";
import PageHeaderImg1 from "@/assets/images/resources/page-header-img1.png";
import PageHeaderShape1 from "@/assets/images/shapes/page-header-shape1.png";
import PageHeaderShape2 from "@/assets/images/shapes/page-header-shape2.png";
import PageHeaderShape3 from "@/assets/images/shapes/page-header-shape3.png";
import PageHeaderShape4 from "@/assets/images/shapes/page-header-shape4.png";
import PageHeaderShape5 from "@/assets/images/shapes/page-header-shape5.png";

interface PHProps {
    /** @default "Welcome" */
    title?: React.ReactNode;
    /** @default "Go To Home" */
    subtitle?: string;
}

export default function PageHeader({
    title = "Welcome",
    subtitle = "Go To Home",
}: PHProps) {
    return (
        <>
            <section className="page-header">
                <div className="page-header__img">
                    <Image src={PageHeaderImg1} alt="image" />
                </div>
                <div className="shape1 float-bob-y">
                    <Image src={PageHeaderShape1} alt="image" />
                </div>
                <div className="shape2">
                    <Image src={PageHeaderShape2} alt="image" />
                </div>
                <div className="shape3">
                    <Image src={PageHeaderShape3} alt="image" />
                </div>
                <div className="shape4 float-bob-x">
                    <Image src={PageHeaderShape4} alt="image" />
                </div>
                <div className="shape5">
                    <Image src={PageHeaderShape5} alt="image" />
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <h2>{title}</h2>
                        <div className="thm-breadcrumb__inner">
                            <ul className="thm-breadcrumb">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <span>-</span>
                                </li>
                                <li>{subtitle}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
