import { Project, ProjectButton } from "~/types";
import { Image, Stack, Text } from "@mantine/core";
import { Pages, Subdomain } from "~/config";
import { ImageWithLoader } from "~/components/ui/ImageWithLoader";

const Istanbus: Project = {
    id: "istanbus",
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
    id: "nekotube",
    name: "NekoTube",
    status: "wip",
    year: "2024",
    // img: "/assets/img/proj/nekotube.png",
    shortDesc: "an alternative YouTube video player",
    types: ["website"],
    tech: ["js", "react", "vite"],
    buttons: [
        ProjectButton.website(Subdomain("tube")),
        ProjectButton.repo("TheAlan404/nekotube"),
    ],
};

const Carpanga: Project = {
    id: "carpanga",
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
    id: "alphamath",
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
    id: "ziltek",
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

const Polycules: Project = {
    id: "polycules",
    name: "Polycules",
    status: "up",
    types: ["website"],
    tech: ["ts", "react", "vite", "nodejs"],
    shortDesc: "A website to graph 'polycules'",
    year: "2024",
    buttons: [
        ProjectButton.repo("TheAlan404/polycules"),
        ProjectButton.website("https://poly-deniz.nyaa.bar"),
    ],
    Render() {
        return (
            <Stack>
                <Text>
                    Here's the example polycule.
                    It has mobile accessible map-like drag/pan actions!
                    Supports systems too (DID etc.)
                </Text>

                <iframe
                    src="https://poly-deniz.nyaa.bar/default"
                    style={{
                        border: "0px",
                        height: "20rem",
                    }}
                />
            </Stack>
        )
    },
};

export default [
    Polycules,
    Istanbus,
    ZilTek,
    Carpanga,
    NekoTube,
    alphamath,
];
