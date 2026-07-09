// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface SelectOption {
    id?: number;
    value: string;
    label: string;
}

export interface CarWashTab {
    id: string;
    label: string;
    icon: string;
}

export interface CarWashFormData {
    serviceType: string;
    vehicleType: string;
    location: string;
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────

export const carWashTabs: CarWashTab[] = [
    { id: "car-wash",          label: "Car Wash",          icon: "icon-car-wash"  },
    { id: "detailing",         label: "Detailing",         icon: "icon-detailing" },
    { id: "engine-wash",       label: "Engine Wash",       icon: "icon-engine"    },
    { id: "interior-cleaning", label: "Interior Cleaning", icon: "icon-interior"  },
    { id: "wax-polish",        label: "Wax & Polish",      icon: "icon-poly-bag"  },
];

// ─── Select Options (shared across all tabs) ──────────────────────────────────

export const serviceTypeOptions: SelectOption[] = [
    { id: 1, value: "service-01", label: "Type Of Service 01" },
    { id: 2, value: "service-02", label: "Type Of Service 02" },
    { id: 3, value: "service-03", label: "Type Of Service 03" },
    { id: 4, value: "service-04", label: "Type Of Service 04" },
    { id: 5, value: "service-05", label: "Type Of Service 05" },
];

export const vehicleTypeOptions: SelectOption[] = [
    { id: 1, value: "service-01", label: "Type Of Service 01" },
    { id: 2, value: "service-02", label: "Type Of Service 02" },
    { id: 3, value: "service-03", label: "Type Of Service 03" },
    { id: 4, value: "service-04", label: "Type Of Service 04" },
    { id: 5, value: "service-05", label: "Type Of Service 05" },
];

export const locationOptions: SelectOption[] = [
    { id: 1, value: "service-01", label: "Type Of Service 01" },
    { id: 2, value: "service-02", label: "Type Of Service 02" },
    { id: 3, value: "service-03", label: "Type Of Service 03" },
    { id: 4, value: "service-04", label: "Type Of Service 04" },
    { id: 5, value: "service-05", label: "Type Of Service 05" },
];

export const INITIAL_CAR_WASH_FORM: CarWashFormData = {
    serviceType: "",
    vehicleType: "",
    location: "",
};