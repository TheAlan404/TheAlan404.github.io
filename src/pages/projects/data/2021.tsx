import { Link } from "@/src/components/misc/Link";
import { Project, ProjectButton } from "@/src/types";
import { Stack, Text } from "@mantine/core";

const nbsjs: Project = {
    name: "nbs.js",
    status: "archive",
    year: "2021",
    shortDesc: "NBS parser in Javascript",
    Render() {
        return (
            <Stack>
                <Text>
                    <Link text="NBS (note block song)" url="https://opennbs.org/nbs" size="compact-sm" /> parser in Javascript
                </Text>
            </Stack>
        )
    },
    buttons: [
        ProjectButton.repo("TheAlan404/nbs.js"),
        ProjectButton.npm("nbs.js"),
    ],
    types: ["library"],
    tech: ["js"],
};

export default [
    nbsjs
];
