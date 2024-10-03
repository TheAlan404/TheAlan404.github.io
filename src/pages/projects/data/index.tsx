import { Project } from "@/src/types";
import p2021 from "./2021";
import p2022 from "./2022";
import p2023 from "./2023";
import p2024_apps from "./2024_apps";
import p2024_libs from "./2024_libs";

export const Projects: Project[] = [
    ...p2024_apps,
    ...p2024_libs,
    ...p2023,
    ...p2022,
    ...p2021,
];
