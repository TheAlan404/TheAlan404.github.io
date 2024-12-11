import { Image, Stack, Text } from "@mantine/core";
import { ImageWithLoader } from "~/components/ui/ImageWithLoader";
import { Subdomain } from "~/config";
import { Project, ProjectButton } from "~/types";

const mcman: Project = {
    id: "mcman",
    name: "mcman",
    types: ["cli", "library"],
    tech: ["rust"],
    year: "2023",
    shortDesc: "A powerful Minecraft Server Management CLI which allows you to use git and many other things",
    Render() {
        return (
            <ImageWithLoader
                src="https://github.com/ParadigmMC/mcman/raw/main/docs/mcman-3.png"
            />
        )
    },
    buttons: [
        ProjectButton.repo("ParadigmMC/mcman"),
        ProjectButton.docs(Subdomain("mcman")),
    ],
};

const OAALMUN: Project = {
    id: "oaalmun",
    name: "OAALMUN",
    year: "2023",
    buttons: [
        ProjectButton.website("https://mun.oaal.com.tr"),
    ],
    types: [],
    shortDesc: "MUN (Model United Nations) website for my school",
    // img: "/assets/img/proj/oaalmun.png",
    tech: ["js", "ts", "react", "vite"],
};

export default [
    mcman,
    OAALMUN,
];
