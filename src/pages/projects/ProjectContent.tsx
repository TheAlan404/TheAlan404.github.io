import { ImageWithLoader } from "@/src/components/misc/ImageWithLoader";
import { Project } from "@/src/types";
import { Group, Stack } from "@mantine/core";
import { ProjectButtonPart } from "./parts/ProjectButtonPart";

export const ProjectContent = ({
    p,
}: {
    p: Project;
}) => {
    const projectButtons = p.buttons.map((button, i) => (
        <ProjectButtonPart button={button} projectName={p.name} key={i} />
    ));

    const projectButtonsSection = (
        <>
            <Group grow visibleFrom="sm">
                {projectButtons}
            </Group>
            <Stack hiddenFrom="sm">
                {projectButtons}
            </Stack>
        </>
    );

    const Render = p.Render || (() => <></>);

    return (
        <Stack>
            {projectButtonsSection}

            <Render />

            {p.img && <ImageWithLoader
                src={p.img}
                radius="md"
            />}

            {p.content}
        </Stack>
    );
};
