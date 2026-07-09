import { StaticImageData } from "next/image";
import ServicesV2Img1 from "@/assets/images/services/services-v2-img1.jpg";
import ServicesV2Img2 from "@/assets/images/services/services-v2-img2.jpg";
import ServicesV2Img3 from "@/assets/images/services/services-v2-img3.jpg";
import ServicesV2Img4 from "@/assets/images/services/services-v2-img4.jpg";
import ServicesV2Img5 from "@/assets/images/services/services-v2-img5.jpg";
import ServicesV2Img6 from "@/assets/images/services/services-v2-img6.jpg";

export interface ServiceItemTwo {
    id: number;
    image: StaticImageData | string;
    imageHref: string;
    title: string;
    description: string;
    link: string;
}

export const servicesPageTwoData: ServiceItemTwo[] = [
    {
        id: 1,
        image: ServicesV2Img1,
        imageHref: "assets/images/services/services-v2-img1.jpg",
        title: "Luxury Wash and Wax",
        description:
            "Experience the perfect blend of thorough washing & glossy protection with our Luxury Wash & Wax.",
        link: "/services-v-2",
    },
    {
        id: 2,
        image: ServicesV2Img2,
        imageHref: "assets/images/services/services-v2-img2.jpg",
        title: "Underbody wash",
        description:
            "Experience the perfect blend of thorough washing & glossy protection with our Luxury Wash & Wax.",
        link: "/services-v-2",
    },
    {
        id: 3,
        image: ServicesV2Img3,
        imageHref: "assets/images/services/services-v2-img3.jpg",
        title: "Waterless eco wash",
        description:
            "Experience the perfect blend of thorough washing & glossy protection with our Luxury Wash & Wax.",
        link: "/services-v-2",
    },
    {
        id: 4,
        image: ServicesV2Img4,
        imageHref: "assets/images/services/services-v2-img4.jpg",
        title: "Deluxe Wash & Shine",
        description:
            "Experience the perfect blend of thorough washing & glossy protection with our Luxury Wash & Wax.",
        link: "/services-v-2",
    },
    {
        id: 5,
        image: ServicesV2Img5,
        imageHref: "assets/images/services/services-v2-img5.jpg",
        title: "Door Jamb Cleaning",
        description:
            "Experience the perfect blend of thorough washing & glossy protection with our Luxury Wash & Wax.",
        link: "/services-v-2",
    },
    {
        id: 6,
        image: ServicesV2Img6,
        imageHref: "assets/images/services/services-v2-img6.jpg",
        title: "Tire & Wheel Cleaning",
        description:
            "Experience the perfect blend of thorough washing & glossy protection with our Luxury Wash & Wax.",
        link: "/services-v-2",
    },
];