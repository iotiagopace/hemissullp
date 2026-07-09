// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface TeamContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export interface SectionTitle {
    tagline: string;
    title: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const teamContactSectionTitle: SectionTitle = {
    tagline: "Contact Our Team",
    title: "Give Us A Message",
};

// ─── Form initial state ───────────────────────────────────────────────────────

export const INITIAL_TEAM_CONTACT_FORM: TeamContactFormData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
};