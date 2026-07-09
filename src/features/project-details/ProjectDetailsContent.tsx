import Image from "next/image";
import Link from "next/link";
import { projectDetailsContentData } from "@/data/projectDetailsContentData";

const {
    mainImgSrc,
    mainImgAlt,
    overviewSection,
    challengeSection,
    textAndImg,
    resultSection,
    imgAndPoints,
    informationItems,
    getStarted,
    navItems,
} = projectDetailsContentData;

export default function ProjectDetailsContent() {
    return (
        <>
            {/*Project Details Start*/}
            <section className="project-details">
                <div className="container">
                    <div className="row">
                        {/* ── Left Column ── */}
                        <div className="col-xl-8 col-lg-7">
                            <div className="project-details__left">

                                {/* Main image */}
                                <div className="project-details__img">
                                    <Image src={mainImgSrc} alt={mainImgAlt} />
                                </div>

                                {/* Overview */}
                                <h3 className="project-details__title-1">
                                    {overviewSection.title}
                                </h3>
                                <p className="project-details__text-1">
                                    {overviewSection.text}
                                </p>

                                {/* Challenge */}
                                <h3 className="project-details__title-2">
                                    {challengeSection.title}
                                </h3>
                                <p className="project-details__text-2">
                                    {challengeSection.text}
                                </p>

                                {/* Text + inline image */}
                                <div className="project-details__text-and-img">
                                    <p className="project-details__text-3">
                                        {textAndImg.text}
                                    </p>
                                    <div className="project-details__text-img">
                                        <Image
                                            src={textAndImg.imgSrc}
                                            alt={textAndImg.imgAlt} />
                                    </div>
                                </div>

                                {/* Result */}
                                <h3 className="project-details__title-3">
                                    {resultSection.title}
                                </h3>
                                <p className="project-details__text-4">
                                    {resultSection.text}
                                </p>

                                {/* Image + bullet points */}
                                <div className="project-details__img-and-points">
                                    <div className="project-details__points-img">
                                        <Image
                                            src={imgAndPoints.imgSrc}
                                            alt={imgAndPoints.imgAlt} />
                                    </div>
                                    <ul className="project-details__points list-unstyled">
                                        {imgAndPoints.points.map((point) => (
                                            <li key={point.id}>
                                                <div className="icon">
                                                    <span className="icon-right-arrow" />
                                                </div>
                                                <p>{point.text}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* ── Sidebar ── */}
                        <div className="col-xl-4 col-lg-5">
                            <div className="project-details__sidebar">

                                {/* Project information */}
                                <div className="project-details__information">
                                    <h3 className="project-details__information-title">
                                        Project Information
                                    </h3>
                                    <ul className="project-details__information-list list-unstyled">
                                        {informationItems.map((item) => (
                                            <li key={item.id}>
                                                <h4>{item.label} :</h4>
                                                <p>{item.value}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Get started */}
                                <div className="project-details__get-started">
                                    <h3 className="project-details__get-started-title">
                                        {getStarted.title}
                                    </h3>
                                    <p className="project-details__get-started-text">
                                        {getStarted.text}
                                    </p>
                                    <ul className="project-details__get-started-points list-unstyled">
                                        {getStarted.contactPoints.map((point) => (
                                            <li key={point.id}>
                                                <div className="icon">
                                                    <span className={point.iconClass} />
                                                </div>
                                                <p>
                                                    {point.isLink ? (
                                                        <a href={point.href}>
                                                            {point.content}
                                                        </a>
                                                    ) : (
                                                        // Safe: content is static, developer-controlled data
                                                        <span
                                                            dangerouslySetInnerHTML={{
                                                                __html: point.content,
                                                            }}
                                                        />
                                                    )}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="project-details__get-started-btn-box">
                                        <Link href="/contact" className="thm-btn">
                                            <span>get in touch</span>
                                            <i className="fal fa-angle-double-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Previous / Next navigation ── */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="project-details__previous-next">
                                <ul>
                                    {navItems.map((item) => (
                                        <li key={item.id}>
                                            {item.direction === "prev" && (
                                                <div className="icon">
                                                    <Link href={item.href}>
                                                        <span className="icon-right-arrow" />
                                                    </Link>
                                                </div>
                                            )}
                                            <div className="text-box">
                                                <Link href={item.href}>
                                                    {item.label}
                                                </Link>
                                            </div>
                                            {item.direction === "next" && (
                                                <div className="icon">
                                                    <Link href={item.href}>
                                                        <span className="icon-right-arrow" />
                                                    </Link>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Project Details End*/}
        </>
    );
}