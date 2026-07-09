import { StaticImageData } from "next/image";
import Project11 from "@/assets/images/project/project-1-1.jpg";
import Project12 from "@/assets/images/project/project-1-2.jpg";
import Project13 from "@/assets/images/project/project-1-3.jpg";
import Project14 from "@/assets/images/project/project-1-4.jpg";
import Project15 from "@/assets/images/project/project-1-5.jpg";
import Project16 from "@/assets/images/project/project-1-6.jpg";

export interface ProjectPageItem {
    id: number;
    image: StaticImageData | string;
    popupHref: string;
    title: string;
    subTitle: string;
}

export const projectPageData: ProjectPageItem[] = [
    {
        id: 1,
        image: Project11,
        popupHref: "assets/images/project/project-1-1.jpg",
        title: "Brake Check & Repair",
        subTitle: "Prime Auto Service",
    },
    {
        id: 2,
        image: Project12,
        popupHref: "assets/images/project/project-1-2.jpg",
        title: "Brake Check & Repair",
        subTitle: "Prime Auto Service",
    },
    {
        id: 3,
        image: Project13,
        popupHref: "assets/images/project/project-1-3.jpg",
        title: "Brake Check & Repair",
        subTitle: "Prime Auto Service",
    },
    {
        id: 4,
        image: Project14,
        popupHref: "assets/images/project/project-1-4.jpg",
        title: "Brake Check & Repair",
        subTitle: "Prime Auto Service",
    },
    {
        id: 5,
        image: Project15,
        popupHref: "assets/images/project/project-1-5.jpg",
        title: "Brake Check & Repair",
        subTitle: "Prime Auto Service",
    },
    {
        id: 6,
        image: Project16,
        popupHref: "assets/images/project/project-1-5.jpg",
        title: "Brake Check & Repair",
        subTitle: "Prime Auto Service",
    },
];