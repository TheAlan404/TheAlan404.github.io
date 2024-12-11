import { Project } from "@/src/types";
import p2021 from "./2021";
import p2022 from "./2022";
import p2023 from "./2023";
import p2024_apps from "./2024_apps";
import p2024_libs from "./2024_libs";
import p2025 from "./2025";

const interleave = <T,>(arr: T[][]) => Array.from({
    length: Math.max(...arr.map(x => x.length))
}, (_, i) => arr.map(a => a[i])).flat().filter(x=>x);

export const DataProjects: Project[] = [
    ...p2025,
    ...interleave([
        p2024_apps,
        p2024_libs,
    ]),
    ...p2023,
    ...p2022,
    ...p2021,
];
