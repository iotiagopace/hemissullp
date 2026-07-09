import { StaticImageData } from "next/image";
import Testimonial11 from "@/assets/images/testimonial/testimonial-1-1.jpg";
import Testimonial12 from "@/assets/images/testimonial/testimonial-1-2.jpg";
import Testimonial13 from "@/assets/images/testimonial/testimonial-1-3.jpg";
import Testimonial14 from "@/assets/images/testimonial/testimonial-1-4.jpg";
import Testimonial15 from "@/assets/images/testimonial/testimonial-1-5.jpg";
import Testimonial16 from "@/assets/images/testimonial/testimonial-1-6.jpg";

export interface TestimonialItem {
    id: number;
    text: string;
    image: StaticImageData | string;
    name: string;
    role: string;
    stars: number;
}

export const testimonialPageData: TestimonialItem[] = [
    {
        id: 1,
        text: '"Our trust worthy mechanics go beyond repairs.They take the time to listen to every concern.Understanding your needs is always a priority.We believe in honest service & genuine care.Because looking after you matters as much as looking after your car."',
        image: Testimonial11,
        name: "Laura Brown",
        role: "Engineer",
        stars: 5,
    },
    {
        id: 2,
        text: '"Our trust worthy mechanics go beyond repairs.They take the time to listen to every concern.Understanding your needs is always a priority.We believe in honest service & genuine care.Because looking after you matters as much as looking after your car."',
        image: Testimonial12,
        name: "William Foster",
        role: "Driving instructor",
        stars: 5,
    },
    {
        id: 3,
        text: '"Our trust worthy mechanics go beyond repairs.They take the time to listen to every concern.Understanding your needs is always a priority.We believe in honest service & genuine care.Because looking after you matters as much as looking after your car."',
        image: Testimonial13,
        name: "William Jemes",
        role: "Driving instructor",
        stars: 5,
    },
    {
        id: 4,
        text: '"Our trust worthy mechanics go beyond repairs.They take the time to listen to every concern.Understanding your needs is always a priority.We believe in honest service & genuine care.Because looking after you matters as much as looking after your car."',
        image: Testimonial14,
        name: "Jems Foster",
        role: "Driving instructor",
        stars: 5,
    },
    {
        id: 5,
        text: '"Our trust worthy mechanics go beyond repairs.They take the time to listen to every concern.Understanding your needs is always a priority.We believe in honest service & genuine care.Because looking after you matters as much as looking after your car."',
        image: Testimonial15,
        name: "Adam Minlne",
        role: "Driving instructor",
        stars: 5,
    },
    {
        id: 6,
        text: '"Our trust worthy mechanics go beyond repairs.They take the time to listen to every concern.Understanding your needs is always a priority.We believe in honest service & genuine care.Because looking after you matters as much as looking after your car."',
        image: Testimonial16,
        name: "Harry Brook",
        role: "Driving instructor",
        stars: 5,
    },
];