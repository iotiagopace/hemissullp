import Image from "next/image";
import Link from "next/link";
import { teamPageData, type TeamPageItem } from "@/data/teamPageData";

const socialLinks = [
    { cls: "one",   icon: "fab fa-facebook"    },
    { cls: "two",   icon: "fab fa-twitter"     },
    { cls: "three", icon: "fab fa-pinterest-p" },
    { cls: "four",  icon: "fab fa-instagram"   },
];

export default function TeamPage() {
    return (
        <>
            {/* Team Page Start */}
            <section className="team-page">
                <div className="container">
                    <div className="team-one__inner">
                        <div className="team-one__inner-content">
                            <div className="row">
                                {teamPageData.map((member: TeamPageItem) => (
                                    <div key={member.id} className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="team-one__single">
                                            <div className="team-one__single__bg"></div>
                                            <div className="team-one__single-content">
                                                <div className="team-one__single-content-inner">
                                                    <p>{member.role}</p>
                                                    <h3>
                                                        <Link href="/team-details">
                                                            {member.name}
                                                        </Link>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="team-one__single-img">
                                                <div className="team-one__single-img-bdr"></div>
                                                <div className="team-one__single-img-inner">
                                                    <Image src={member.image} alt={member.name} />
                                                </div>
                                                <div className="team-one__single-img-social">
                                                    <ul className="clearfix">
                                                        {socialLinks.map((s) => (
                                                            <li key={s.cls} className={s.cls}>
                                                                <Link href="#">
                                                                    <i className={s.icon}></i>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Team Page End */}
        </>
    );
}