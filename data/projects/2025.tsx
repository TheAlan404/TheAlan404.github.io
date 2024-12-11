import { Project } from "~/types";

const Events: Project = {
    id: "events",
    name: "Events (?)",
    shortDesc: "An event tracker/listing",
    status: "wip",
    buttons: [],
    tech: [
        "ts",
        "vite",
        "react",
        "mongodb",
        "prisma",
    ],
    types: ["website", "restapi", "mobile"],
    year: "2025",
    Render() {
        return "Coming soon"
    },
};

export default [
    Events,
];
