"use client"
import React from "react";
import { useInView } from "react-intersection-observer";
import type { SkillBar } from "@/data/teamDetailsContentData";

const ProgressBar: React.FC<SkillBar> = ({ title, percent }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    return (
        <li>
            <div className="team-details__progress" ref={ref}>
                <h4 className="team-details__progress-title">{title}</h4>
                <div className="bar">
                    <div
                        className="bar-inner count-bar counted"
                        data-percent={`${percent}%`}
                        style={{
                            width: inView ? `${percent}%` : "0%",
                            transition: "width 1.2s ease",
                        }}
                    >
                        <div className="count-text">{percent}%</div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ProgressBar;