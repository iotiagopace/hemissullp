// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface ContactFormField {
    id: string;
    type: "text" | "email";
    name: string;
    placeholder: string;
    colClass: string;
}

export interface ContactPageData {
    mapEmbedUrl: string;
    formTitle: string;
    fields: ContactFormField[];
    submitButtonText: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const contactPageData: ContactPageData = {
    mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd",
    formTitle: "Get A Free Quote",
    fields: [
        {
            id: "name",
            type: "text",
            name: "name",
            placeholder: "Your name",
            colClass: "col-xl-6 col-lg-6 col-md-6",
        },
        {
            id: "email",
            type: "email",
            name: "email",
            placeholder: "Your Email",
            colClass: "col-xl-6 col-lg-6 col-md-6",
        },
        {
            id: "phone",
            type: "text",
            name: "phone",
            placeholder: "Phone",
            colClass: "col-xl-6 col-lg-6 col-md-6",
        },
        {
            id: "subject",
            type: "text",
            name: "subject",
            placeholder: "Subject",
            colClass: "col-xl-6 col-lg-6 col-md-6",
        },
    ],
    submitButtonText: "Send A Message",
};