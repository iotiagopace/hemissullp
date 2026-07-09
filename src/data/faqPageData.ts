export interface FaqPageItem {
    id: string;
    question: string;
    answer: string;
    defaultActive?: boolean;
}

const sharedAnswer =
    "We help businesses bring ideas to life in the digital world designing & implementing the technology tools that they need to win. We help business bring ideas to life in the digital wor";

export const faqPageLeft: FaqPageItem[] = [
    { id: "left-1", question: "How do you handle returns or exchanges?",      answer: sharedAnswer },
    { id: "left-2", question: "What does business consulting do?",            answer: sharedAnswer, defaultActive: true },
    { id: "left-3", question: "Can I cancel a shipment after it's been booked?", answer: sharedAnswer },
    { id: "left-4", question: "Can you assist with customs clearance procedures?", answer: sharedAnswer },
    { id: "left-5", question: "What is your delivery policy?",                answer: sharedAnswer },
];

export const faqPageRight: FaqPageItem[] = [
    { id: "right-1", question: "How do you handle returns or exchanges?",      answer: sharedAnswer },
    { id: "right-2", question: "What does business consulting do?",            answer: sharedAnswer },
    { id: "right-3", question: "Can I cancel a shipment after it's been booked?", answer: sharedAnswer },
    { id: "right-4", question: "Can you assist with customs clearance procedures?", answer: sharedAnswer },
    { id: "right-5", question: "What is your delivery policy?",                answer: sharedAnswer },
];