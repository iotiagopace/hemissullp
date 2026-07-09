import { createContext } from "react";
import type { contextType } from "../../types/context";

const ProjectContext = createContext<contextType | null>(null);
export default ProjectContext;
