import { ProjectStatus } from "@/src/types";
import { Badge, Tooltip } from '@mantine/core';

const Renderers: Record<ProjectStatus, React.ReactNode> = {
    up: <></>,
    ok: <></>,
    wip: <Tooltip label="Work in progress">
        <Badge variant="light" color="gray">WIP</Badge>
    </Tooltip>,
    archive: <Badge variant="light" color="yellow">ARCHIVED</Badge>,
};

export const StatusRender = ({ status }: { status: ProjectStatus }) => {
    return Renderers[status];
};
