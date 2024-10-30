import { ImageWithLoader } from "@/src/components/misc/ImageWithLoader";
import { Pages, Project, ProjectButton, Subdomain } from "@/src/types";
import { Image, Stack, Text } from "@mantine/core";

const Istanbus: Project = {
    name: "Istanbus",
    status: "up",
    year: "2024",
    buttons: [
        ProjectButton.website(Subdomain("istanbus")),
        ProjectButton.repo("TheAlan404/istanbus"),
    ],
    types: ["website", "restapi"],
    shortDesc: "Istanbul Bus Information website (IETT)",
    tech: ["ts", "react", "nodejs"]
};

const NekoTube: Project = {
    name: "NekoTube",
    status: "wip",
    year: "2024",
    img: "/assets/img/proj/nekotube.png",
    shortDesc: "an alternative YouTube video player",
    types: ["website"],
    tech: ["js", "react", "vite"],
    buttons: [
        ProjectButton.website(Subdomain("tube")),
        ProjectButton.repo("TheAlan404/nekotube"),
    ],
};

const Carpanga: Project = {
    name: "Çarpanga",
    status: "up",
    year: "2024",
    shortDesc: "A 1v1 mathematical strategy game",
    buttons: [
        ProjectButton.website(Subdomain("carpanga")),
        ProjectButton.repo("TheAlan404/carpanga"),
    ],
    types: ["website"],
    tech: ["ts", "react", "vite"],
    Render() {
        return (
            <Stack>
                <Text>A short mathematical strategy game, now in multilanguage!</Text>
                <Image src="/assets/img/proj/carpanga.png" />
            </Stack>
        )
    }
};

const alphamath: Project = {
    name: "alphamath",
    status: "wip",
    shortDesc: "An experimental interactive math engine/solver",
    year: "2024",
    buttons: [
        ProjectButton.website(Pages("alphamath")),
        ProjectButton.repo("TheAlan404/alphamath"),
    ],
    types: ["website"],
    tech: ["ts", "react", "vite"],
};

const ZilTek: Project = {
    name: "ZilTek",
    status: "up",
    types: ["website", "desktop"],
    tech: ["ts", "react", "vite", "nodejs"],
    shortDesc: "A school bell app.",
    year: "2024",
    buttons: [
        ProjectButton.repo("TheAlan404/ZilTek"),
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
    Istanbus,
    ZilTek,
    Carpanga,
    NekoTube,
    alphamath,
];
