import { Badge, Tooltip } from '@mantine/core';
import { ProjectStatus } from "../types";

const Renderers: Record<ProjectStatus, React.ReactNode> = {
    done: <></>,
    wip: <Tooltip label="Work in progress">
        <Badge variant="light" color="yellow">WIP</Badge>
    </Tooltip>,
    forgor: <Badge variant="light" color="gray">forgor</Badge>,
    abandoned: <Tooltip label="Abandoned project">
        <Badge variant="light" color="red">dead</Badge>
    </Tooltip>,
};

export const StatusRender = ({ status }: { status: ProjectStatus }) => {
    return Renderers[status];
};
