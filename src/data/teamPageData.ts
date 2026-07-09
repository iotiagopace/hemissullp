import { StaticImageData } from "next/image";
import TeamV11 from "@/assets/images/team/team-v1-1.jpg";
import TeamV12 from "@/assets/images/team/team-v1-2.jpg";
import TeamV13 from "@/assets/images/team/team-v1-3.jpg";
import TeamV14 from "@/assets/images/team/team-v1-4.jpg";
import TeamV15 from "@/assets/images/team/team-v1-5.jpg";
import TeamV16 from "@/assets/images/team/team-v1-6.jpg";
import TeamV17 from "@/assets/images/team/team-v1-7.jpg";
import TeamV18 from "@/assets/images/team/team-v1-8.jpg";
import TeamV19 from "@/assets/images/team/team-v1-9.jpg";

export interface TeamPageItem {
    id: number;
    image: StaticImageData | string;
    name: string;
    role: string;
}

export const teamPageData: TeamPageItem[] = [
    { id: 1, image: TeamV11, name: "William Henry",      role: "Load Carrier Engine" },
    { id: 2, image: TeamV12, name: "Henry Joseph",       role: "Brake Repairer"      },
    { id: 3, image: TeamV13, name: "Daniel Robert",      role: "Trolley Engine"      },
    { id: 4, image: TeamV14, name: "Christopher John",   role: "Brake Repairer"      },
    { id: 5, image: TeamV15, name: "Matthew Richard",    role: "Lead Technician"     },
    { id: 6, image: TeamV16, name: "Anthony James",      role: "Brake Repairer"      },
    { id: 7, image: TeamV17, name: "Darlene Robertson",  role: "Main Mechanic"       },
    { id: 8, image: TeamV18, name: "Savannah Nguyen",    role: "Trolley Engine"      },
    { id: 9, image: TeamV19, name: "Darlene Robertson",  role: "Main Mechanic"       },
];