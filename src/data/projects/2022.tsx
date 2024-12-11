import { Link } from "@/src/components/misc/Link";
import { Pages, Project, ProjectButton } from "@/src/types";
import { Image, Stack, Text } from "@mantine/core";

const DenVis: Project = {
    id: "denvis",
    name: "DenVis",
    status: "wip",
    year: "2022",
    tech: ["cs"],
    types: ["desktop"],
    shortDesc: "A simple Windows Audio Visualizer with some extra features such as snow.",
    buttons: [
        ProjectButton.repo("TheAlan404/DenVis"),
        ProjectButton.website("https://denvis.glitch.me/"),
    ],
    Render() {
        return (
            <Stack>
                <Text>A simple Windows Audio Visualizer with some extra features such as snow.</Text>

                <Text>
                    Currently going under a <Text span fw="bold">Rust Rewrite</Text>
                </Text>
    
                <Image
                    src="/assets/img/proj/denvis.png"
                    bd="1px white"
                />
            </Stack>
        );
    },
};

const DSharpPlusPaginatedSelects: Project = {
    id: "paginated-selects",
    name: "PaginatedSelects",
    status: "archive",
    year: "2022",
    shortDesc: "A DSharpPlus extension that adds paginated select components",
    Render() {
        return (
            <Stack>
                <Text>
                    A <Link text="DSharpPlus" url="https://dsharpplus.github.io/DSharpPlus/" size="compact-sm" /> extension that adds paginated select components.
                </Text>
            </Stack>
        )
    },
    tech: ["cs"],
    types: ["library"],
    buttons: [
        ProjectButton.repo("TheAlan404/DSharpPlus.PaginatedSelects")
    ],
};

const WantYouGone: Project = {
    id: "want-you-gone",
    name: "Want You Gone",
    status: "archive",
    types: ["website"],
    tech: ["html", "css", "js"],
    year: "2022",
    shortDesc: "Portal 2 ending credits song animation recreated using (very bad) HTML",
    img: "/assets/img/proj/wantyougone.png",
    buttons: [
        ProjectButton.website(Pages("want-you-gone")),
        ProjectButton.repo("TheAlan404/want-you-gone"),
    ],
};

export default [
    DenVis,
    DSharpPlusPaginatedSelects,
    WantYouGone,
];
