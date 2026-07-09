// src/data/operateOneData.ts

export interface OperateOnePoint {
    id: number;
    label: string;
}

export interface OperateOneTab {
    id: string;
    label: string;
    contentText: string;
    pointsColumnOne: OperateOnePoint[];
    pointsColumnTwo: OperateOnePoint[];
}

export interface OperateOneSectionData {
    tagline: string;
    title: string;
    tabs: OperateOneTab[];
}

export const operateOneData: OperateOneSectionData = {
    tagline: "How we operate",
    title: "We make trust part of every experience",
    tabs: [
        {
            id: "specialty",
            label: "Our Specialty",
            contentText:
                "We offer a complete range of premium car wash & detailing services to keep your vehicle looking its best. From high-pressure foam washes to interior deep cleaning,",
            pointsColumnOne: [
                { id: 1, label: "Hydraulic Car Wash" },
                { id: 2, label: "Engine Cleaning" },
                { id: 3, label: "Bug & Tar Removal" },
                { id: 4, label: "Foam & Soap Wash" },
            ],
            pointsColumnTwo: [
                { id: 5, label: "Tire & Rim Cleaning" },
                { id: 6, label: "Glass & Mirror Cleaning" },
                { id: 7, label: "Dashboard Cleaning" },
                { id: 8, label: "Windshield Cleaning" },
            ],
        },
        {
            id: "mission",
            label: "Our Mission",
            contentText:
                "We offer a complete range of premium car wash & detailing services to keep your vehicle looking its best. From high-pressure foam washes to interior deep cleaning,",
            pointsColumnOne: [
                { id: 1, label: "Hydraulic Car Wash" },
                { id: 2, label: "Bug & Tar Removal" },
                { id: 3, label: "Engine Cleaning" },
                { id: 4, label: "Foam & Soap Wash" },
            ],
            pointsColumnTwo: [
                { id: 5, label: "Tire & Rim Cleaning" },
                { id: 6, label: "Glass & Mirror Cleaning" },
                { id: 7, label: "Windshield Cleaning" },
                { id: 8, label: "Dashboard Cleaning" },
            ],
        },
        {
            id: "values",
            label: "Our Values",
            contentText:
                "We offer a complete range of premium car wash & detailing services to keep your vehicle looking its best. From high-pressure foam washes to interior deep cleaning,",
            pointsColumnOne: [
                { id: 1, label: "Hydraulic Car Wash" },
                { id: 2, label: "Engine Cleaning" },
                { id: 3, label: "Bug & Tar Removal" },
                { id: 4, label: "Foam & Soap Wash" },
            ],
            pointsColumnTwo: [
                { id: 5, label: "Tire & Rim Cleaning" },
                { id: 6, label: "Glass & Mirror Cleaning" },
                { id: 7, label: "Dashboard Cleaning" },
                { id: 8, label: "Windshield Cleaning" },
            ],
        },
    ],
};