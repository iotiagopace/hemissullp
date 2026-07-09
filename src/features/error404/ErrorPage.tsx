import Image from "next/image";
import Link from "next/link";
import ErrorPageImg1 from "@/assets/images/resources/error-page-img1.png";

export default function ErrorPage() {
    return (
        <>
            {/*Start Error Page*/}
            <section className="error-page">
                <div className="container">
                    <div className="error-page__inner text-center">
                        <div className="error-page__img float-bob-y">
                            <Image src={ErrorPageImg1} alt="image" />
                        </div>

                        <div className="error-page__content">
                            <h2>Oops! Page Not Found!</h2>
                            <p>
                                The page you are looking for does not exist. It
                                might have been moved or deleted.
                            </p>
                            <div className="btn-box">
                                <Link href="/" className="thm-btn">
                                    <span>Back To Home</span>
                                    <i className="fal fa-angle-double-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Error Page*/}
        </>
    );
}
