import Image from "next/image";
import Link from "next/link";
import { teamMember } from "@/data/teamDetailsContentData";
import ProgressBar from "@/components/elements/Progressbar";

export default function TeamDetailsContent() {
    const {
        name,
        subTitle,
        image,
        socialLinks,
        clientText,
        addressItems,
        biographyText,
        practiceAreasCol1,
        practiceAreasCol2,
        skills,
    } = teamMember;

    return (
        <>
            {/* Team Details Start */}
            <section className="team-details">
                <div className="container">

                    {/* ── Top ───────────────────────────────────────────── */}
                    <div className="team-details__top">
                        <div className="row">

                            {/* Photo */}
                            <div className="col-xl-5 col-lg-5">
                                <div className="team-details__top-left">
                                    <div className="team-details__img-1">
                                        <Image src={image} alt={name} />
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="col-xl-7 col-lg-7">
                                <div className="team-details__top-right">
                                    <div className="team-details__client-box">

                                        <h3 className="team-details__client-name">{name}</h3>
                                        <span className="team-details__client-sub-title">{subTitle}</span>

                                        {/* Social links – mapped */}
                                        <div className="team-details__social">
                                            {socialLinks.map((link, idx) => (
                                                <Link key={idx} href={link.href}>
                                                    <i className={link.iconClass}></i>
                                                </Link>
                                            ))}
                                        </div>

                                        <p className="team-details__client-text">{clientText}</p>

                                        {/* Address items – mapped */}
                                        <ul className="team-details__client-address list-unstyled">
                                            {addressItems.map((item, idx) => (
                                                <li key={idx}>
                                                    <p>
                                                        <span className={item.iconClass}></span>
                                                        {item.label}
                                                    </p>
                                                    <h5>
                                                        {item.href ? (
                                                            <a href={item.href}>{item.value}</a>
                                                        ) : (
                                                            item.value
                                                        )}
                                                    </h5>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Bottom ────────────────────────────────────────── */}
                    <div className="team-details__bottom">
                        <div className="row">

                            {/* Biography + Practice Areas */}
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__bottom-left">
                                    <h3 className="team-details__bottom-title">Biography</h3>
                                    <p className="team-details__bottom-text">{biographyText}</p>

                                    <div className="team-details__practice-area">
                                        <h4 className="team-details__practice-area-title">
                                            Practice Area
                                        </h4>
                                        <div className="team-details__practice-area-list-box">

                                            {/* Column 1 – mapped */}
                                            <ul className="list-unstyled team-details__practice-area-list">
                                                {practiceAreasCol1.map((area, idx) => (
                                                    <li key={idx}>
                                                        <div className="icon"></div>
                                                        <div className="text"><p>{area.label}</p></div>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Column 2 – mapped */}
                                            <ul className="list-unstyled team-details__practice-area-list team-details__practice-area-list--two">
                                                {practiceAreasCol2.map((area, idx) => (
                                                    <li key={idx}>
                                                        <div className="icon"></div>
                                                        <div className="text"><p>{area.label}</p></div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Skills / Progress bars */}
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__bottom-right">
                                    <h3 className="team-details__progress-title-1">Skills</h3>

                                    {/* Mapped – each bar animates on scroll into view */}
                                    <ul className="team-details__progress-list list-unstyled">
                                        {skills.map((skill, idx) => (
                                            <ProgressBar
                                                key={idx}
                                                title={skill.title}
                                                percent={skill.percent}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Team Details End */}
        </>
    );
}