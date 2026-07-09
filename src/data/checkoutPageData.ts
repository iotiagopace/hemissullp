// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface SelectOption {
    id?: number;
    value: string;
    label: string;
}

export interface PaymentMethod {
    id: number;
    title: string;
    content: string;
}

export interface OrderItem {
    id: number;
    name: string;
    price: string;
}

export interface OrderSummary {
    subtotal: string;
    total: string;
}

export interface ShippingOption {
    id: string;
    label: string;
    defaultChecked?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const countryOptions: SelectOption[] = [
    { id: 1, value: "1", label: "Canada" },
    { id: 2, value: "2", label: "England" },
    { id: 3, value: "3", label: "Australia" },
    { id: 4, value: "4", label: "USA" },
];

export const paymentMethods: PaymentMethod[] = [
    {
        id: 1,
        title: "Direct bank transfer",
        content:
            "A Direct Bank Transfer is a method of sending money from one bank account to another without using cash, checks, or third-party payment services.",
    },
    {
        id: 2,
        title: "Paypal payment",
        content:
            "PayPal is an online payment system that allows users to send and receive money securely. It supports personal and business transactions, including shopping, invoicing, and international transfers.",
    },
    {
        id: 3,
        title: "Cheque Payment",
        content:
            "A cheque payment is a written, dated, and signed document that instructs a bank to pay a specific amount of money from the issuer's account to the payee.",
    },
];

export const orderItems: OrderItem[] = [
    { id: 1, name: "Battery", price: "$158.00" },
    { id: 2, name: "Electrical Wire", price: "$38.00" },
];

export const orderSummary: OrderSummary = {
    subtotal: "$196.00",
    total: "$205.00",
};

export const shippingOptions: ShippingOption[] = [
    { id: "flat", label: "Flat Rate: $9.00", defaultChecked: true },
    { id: "free", label: "Free Shipping" },
    { id: "local", label: "Local Pickup" },
];