import { Project } from "~/types";
import { Group, Stack } from "@mantine/core";
import { ProjectButtonComponent } from "./ProjectButtonComponent";

export const ProjectContent = ({
    p,
}: {
    p: Project;
}) => {
    const projectButtons = p.buttons.map((button, i) => (
        <ProjectButtonComponent button={button} projectName={p.name} key={i} />
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
        </Stack>
    );
};
