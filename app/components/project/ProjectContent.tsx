import { Project } from "~/types";
import { Code, Group, Stack, TypographyStylesProvider } from "@mantine/core";
import { ProjectButtonComponent } from "./ProjectButtonComponent";
import { CodeHighlight } from "@mantine/code-highlight";
import { ImageWithLoader } from "../ui/ImageWithLoader";

const components = {
    pre: ({ children }: any) => children,
    code: (props: any) => (
        <CodeHighlight
            styles={{
                code: { width: "100%" },
            }}
            code={props.children}
            language={props.className.split("-")[1]}
        />
    ),
    img: ImageWithLoader,
};

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

    return (
        <Stack>
            {projectButtonsSection}

            <TypographyStylesProvider>
                <p.default components={components} />
            </TypographyStylesProvider>
        </Stack>
    );
};
