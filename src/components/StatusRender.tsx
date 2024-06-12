import { Badge } from '@mantine/core';
import { ProjectStatus } from "../types";

const Renderers: Record<ProjectStatus, React.ReactNode> = {
    done: <></>,
    wip: <Badge variant="light" color="yellow">Work In Progress</Badge>,
    forgor: <Badge variant="light" color="gray">forgor</Badge>,
    abandoned: <Badge variant="light" color="red">Abandoned</Badge>,
};

export const StatusRender = ({ status }: { status: ProjectStatus }) => {
    return Renderers[status];
};
