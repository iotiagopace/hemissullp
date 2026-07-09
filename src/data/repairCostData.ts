import RepairCostShape1 from "@/assets/images/shapes/repair-cost-shape-1.png";
import RepairCostImg from "@/assets/images/resources/repair-cost-img.png";
import RepairCostShapeBg from "@/assets/images/shapes/repair-cost-shape-bg.png";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface SelectOption {
    id?: number;
    value: string;
    label: string;
}

export interface FormTitle {
    title: string;
    subTitle: string;
}

export interface RepairCostFormData {
    name: string;
    email: string;
    phone: string;
    make: string;
    model: string;
    year: string;
    service: string;
}

// ─── Assets ───────────────────────────────────────────────────────────────────

export { RepairCostShape1, RepairCostImg, RepairCostShapeBg };

// ─── Data ─────────────────────────────────────────────────────────────────────

export const repairCostFormTitle: FormTitle = {
    title: "Instant Car Wash Estimate",
    subTitle: "Our instant car Wash estimates combine expert evaluation",
};

export const carMakeOptions: SelectOption[] = [
    { id: 1, value: "car-repair", label: "Car Repair" },
    { id: 2, value: "car-service", label: "Car Service" },
    { id: 3, value: "car-wash", label: "Car Wash" },
    { id: 4, value: "car-maintaince", label: "Car Maintaince" },
];

export const carModelOptions: SelectOption[] = [
    { id: 1, value: "car-repair", label: "Car Repair" },
    { id: 2, value: "car-service", label: "Car Service" },
    { id: 3, value: "car-wash", label: "Car Wash" },
    { id: 4, value: "car-maintaince", label: "Car Maintaince" },
];

export const carYearOptions: SelectOption[] = [
    { id: 1, value: "2026", label: "2026" },
    { id: 2, value: "2025", label: "2025" },
    { id: 3, value: "2024", label: "2024" },
    { id: 4, value: "2023", label: "2023" },
];

export const serviceRequiredOptions: SelectOption[] = [
    { id: 1, value: "car-repair", label: "Car Repair" },
    { id: 2, value: "car-service", label: "Car Service" },
    { id: 3, value: "car-wash", label: "Car Wash" },
    { id: 4, value: "car-maintaince", label: "Car Maintaince" },
];

export const INITIAL_REPAIR_FORM: RepairCostFormData = {
    name: "",
    email: "",
    phone: "",
    make: "",
    model: "",
    year: "",
    service: "",
};