// src/data/pricingOneData.ts

export interface PricingFeature {
    id: number;
    label: string;
}

export interface PricingPlan {
    id: number;
    name: string;
    priceWhole: number;
    priceDecimal: string;
    description: string;
    features: PricingFeature[];
    btnLink: string;
}

export interface PricingVehicleTab {
    id: string;
    label: string;
    icon: string;
    plans: PricingPlan[];
}

export interface PricingOneSectionData {
    tagline: string;
    title: string;
    topText: string;
    tabs: PricingVehicleTab[];
}

const commonFeatures: PricingFeature[] = [
    { id: 1, label: "Exterior Hand Wash" },
    { id: 2, label: "Tire Shine" },
    { id: 3, label: "High-Pressure Rinse" },
    { id: 4, label: "Spot-Free Dry" },
    { id: 5, label: "Window Cleaning" },
];

const commonDescription =
    "Our car wash packages start at affordable rates, giving your vehicle the care it deserves.";

export const pricingOneData: PricingOneSectionData = {
    tagline: "Washing Price",
    title: "Choose Your Pricing Package",
    topText:
        "Choose from our flexible car wash packages designed to suit every need and budget. Whether you want a quick rinse or a full detail, we've got you covered.",
    tabs: [
        {
            id: "compact",
            label: "Compact SuV",
            icon: "icon-suv-car",
            plans: [
                {
                    id: 1,
                    name: "Basic Cleaning",
                    priceWhole: 35,
                    priceDecimal: ".65",
                    description: commonDescription,
                    features: commonFeatures,
                    btnLink: "/about",
                },
                {
                    id: 2,
                    name: "Express Washing",
                    priceWhole: 45,
                    priceDecimal: ".65",
                    description: commonDescription,
                    features: commonFeatures,
                    btnLink: "/about",
                },
                {
                    id: 3,
                    name: "Premium Service",
                    priceWhole: 55,
                    priceDecimal: ".65",
                    description: commonDescription,
                    features: commonFeatures,
                    btnLink: "/about",
                },
            ],
        },
        {
            id: "sedan",
            label: "sedan car model",
            icon: "icon-car-1",
            plans: [
                {
                    id: 1,
                    name: "Basic Cleaning",
                    priceWhole: 40,
                    priceDecimal: ".75",
                    description: commonDescription,
                    features: commonFeatures,
                    btnLink: "/about",
                },
                {
                    id: 2,
                    name: "Express Washing",
                    priceWhole: 50,
                    priceDecimal: ".75",
                    description: commonDescription,
                    features: commonFeatures,
                    btnLink: "/about",
                },
                {
                    id: 3,
                    name: "Premium Service",
                    priceWhole: 60,
                    priceDecimal: ".75",
                    description: commonDescription,
                    features: commonFeatures,
                    btnLink: "/about",
                },
            ],
        },
        {
            id: "toy-car",
            label: "Taxi & toy car",
            icon: "icon-taxi",
            plans: [
                {
                    id: 1,
                    name: "Basic Cleaning",
                    priceWhole: 30,
                    priceDecimal: ".50",
                    description: commonDescription,
                    features: commonFeatures,
                    btnLink: "/about",
                },
                {
                    id: 2,
                    name: "Express Washing",
                    priceWhole: 40,
                    priceDecimal: ".50",
                    description: commonDescription,
                    features: commonFeatures,
                    btnLink: "/about",
                },
                {
                    id: 3,
                    name: "Premium Service",
                    priceWhole: 50,
                    priceDecimal: ".50",
                    description: commonDescription,
                    features: commonFeatures,
                    btnLink: "/about",
                },
            ],
        },
        {
            id: "pickup",
            label: "pickup Truck",
            icon: "icon-pickup-truck",
            plans: [
                {
                    id: 1,
                    name: "Basic Cleaning",
                    priceWhole: 45,
                    priceDecimal: ".99",
                    description: commonDescription,
                    features: commonFeatures,
                    btnLink: "/about",
                },
                {
                    id: 2,
                    name: "Express Washing",
                    priceWhole: 55,
                    priceDecimal: ".99",
                    description: commonDescription,
                    features: commonFeatures,
                    btnLink: "/about",
                },
                {
                    id: 3,
                    name: "Premium Service",
                    priceWhole: 65,
                    priceDecimal: ".99",
                    description: commonDescription,
                    features: commonFeatures,
                    btnLink: "/about",
                },
            ],
        },
    ],
};