import { ImageWithLoader } from "@/src/components/misc/ImageWithLoader";
import { Project, ProjectButton, Subdomain } from "@/src/types";
import { Image, Stack, Text } from "@mantine/core";

const mcman: Project = {
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
    name: "OAALMUN",
    year: "2023",
    buttons: [
        ProjectButton.website("https://mun.oaal.com.tr"),
    ],
    types: [],
    shortDesc: "MUN (Model United Nations) website for my school",
    img: "/assets/img/proj/oaalmun.png",
    tech: ["js", "ts", "react", "vite"],
};

const ZilTek: Project = {
    name: "ZilTek",
    status: "up",
    types: ["website", "desktop"],
    tech: ["ts", "react", "vite", "nodejs"],
    shortDesc: "The school bell app with multilanguage support.",
    year: "2023",
    buttons: [
        ProjectButton.website(Subdomain("ziltek")),
    ],
    Render() {
        return (
            <Stack>
                <Text>
                    The school bell app with multilanguage support.
                </Text>
                <ImageWithLoader src="/assets/img/proj/ziltekscreenshot.png" />
            </Stack>
        )
    },
};

export default [
    mcman,
    OAALMUN,
    ZilTek,
];
