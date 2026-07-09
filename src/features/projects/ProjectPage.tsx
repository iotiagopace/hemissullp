"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import Link from "next/link";
import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { projectPageData, type ProjectPageItem } from "@/data/projectPageData";

export default function ProjectPage() {
    const galleryRef = useRef<HTMLDivElement>(null);
    const lgInstance = useRef<ReturnType<typeof lightGallery> | null>(null);

    useEffect(() => {
        if (!galleryRef.current) return;

        lgInstance.current?.destroy();
        lgInstance.current = null;

        lgInstance.current = lightGallery(galleryRef.current, {
            plugins: [lgZoom, lgThumbnail],
            selector: ".img-popup",
            speed: 500,
            download: true,
            thumbnail: false,
        });

        return () => {
            lgInstance.current?.destroy();
            lgInstance.current = null;
        };
    }, []);

    return (
        <>
            {/*Project Page Start*/}
            <section className="project-page">
                <div className="container">
                    <div className="row" ref={galleryRef}>
                        {projectPageData.map((item: ProjectPageItem) => (
                            <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                                <div className="project-one__single">
                                    <div className="project-one__img-box">
                                        <div className="project-one__img">
                                            <Image src={item.image} alt={item.title} />
                                            <div className="project-one__content-box">
                                                <div className="project-one__content">
                                                    <h3 className="project-one__title">
                                                        <Link href="/project-details">
                                                            {item.title}
                                                        </Link>
                                                    </h3>
                                                    <p className="project-one__sub-title">
                                                        {item.subTitle}
                                                    </p>
                                                </div>
                                                <div className="project-one__arrow">

                                                    <a
                                                        href={typeof item.image === 'string' ? item.image : item.image.src}
                                                        className="img-popup"
                                                        data-src={typeof item.image === 'string' ? item.image : item.image.src}
                                                        data-thumb={typeof item.image === 'string' ? item.image : item.image.src}
                                                        aria-label={`View ${item.title}`}
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <span className="fas fa-arrow-right"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*Project Page End*/}
        </>
    );
}