import { StaticImageData } from "next/image";
import Review11 from "@/assets/images/shop/review-1-1.jpg";
import Review12 from "@/assets/images/shop/review-1-2.jpg";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export type TabId = "description" | "additional-information" | "reviews";

export interface Tab {
    id: TabId;
    label: string;
}

export interface DescriptionListItem {
    id: number;
    text: string;
}

export interface DescriptionContent {
    text1: string;
    listItems: DescriptionListItem[];
    text2: string;
}

export interface AdditionalInfoContent {
    text1: string;
    text2: string;
}

export interface Review {
    id: number;
    name: string;
    date: string;
    rating: number;
    comment: string;
    avatar: StaticImageData | string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const tabs: Tab[] = [
    { id: "description", label: "Description" },
    { id: "additional-information", label: "Additional information" },
    { id: "reviews", label: "Reviews" },
];

export const descriptionContent: DescriptionContent = {
    text1:
        "Our Spring Suspension Part is precision-engineered to restore your vehicle's original ride height and handling performance. Manufactured using high-tensile steel with advanced heat treatment, it delivers long-lasting durability under everyday road conditions and demanding environments. Whether you're replacing a worn coil spring or recovering from suspension failure, this part provides the structural integrity your vehicle needs. Each unit undergoes rigorous quality testing to meet or exceed original manufacturer standards.",
    listItems: [
        { id: 1, text: "Engineered for precise OEM fitment and compatibility." },
        { id: 2, text: "Durable rust-resistant powder-coat finish applied." },
        { id: 3, text: "Compatible with both front and rear suspension." },
    ],
    text2:
        "Proper suspension maintenance is essential for safe and comfortable driving. A failing spring can lead to uneven tire wear, poor steering response, and reduced braking efficiency. Replacing worn suspension parts on time helps preserve your vehicle's alignment and extends the lifespan of surrounding drivetrain components.",
};

export const additionalInfoContent: AdditionalInfoContent = {
    text1:
        "The Spring Suspension Part is compatible with a wide range of vehicle makes and models, making it an excellent all-around replacement option for automotive workshops and DIY enthusiasts alike. Installation is straightforward with standard hand tools and no special suspension equipment is required. Always consult your vehicle's service manual before installation and ensure all surrounding suspension hardware is inspected and in good working condition.",
    text2:
        "Proper suspension maintenance is essential for safe and comfortable driving. A failing spring can lead to uneven tire wear, poor steering response, and reduced braking efficiency. Replacing worn suspension parts on time helps preserve your vehicle's alignment and extends the lifespan of surrounding drivetrain components.",
};

export const reviewsData: Review[] = [
    {
        id: 1,
        name: "Kevin martin",
        date: "20 Oct, 2025 . 4:00 pm",
        rating: 5,
        avatar: Review11,
        comment:
            "This spring suspension part exceeded my expectations in every way. Fitment was perfect on my sedan and the installation went smoothly without any modifications needed. The ride quality improved noticeably after replacing both front springs, and the vehicle no longer leans on corners. Build quality feels solid and the protective coating looks factory-fresh. Highly recommend this to anyone dealing with sagging or bouncy suspension.",
    },
    {
        id: 2,
        name: "Sarah albert",
        date: "20 Oct, 2025 . 4:00 pm",
        rating: 5,
        avatar: Review12,
        comment:
            "Great value for the price. I ordered this part for my SUV after one of the rear springs cracked and it fit perfectly without any issues. Delivery was fast and the packaging protected the spring well. My mechanic confirmed it was OEM-quality. Very satisfied with this purchase overall.",
    },
];